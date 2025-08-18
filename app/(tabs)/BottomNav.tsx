import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    Animated,
    Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");
const tabCount = 4;
const tabHeight = 80;

interface Props {
    selected: string;
    onSelect: (tab: string) => void;
}

interface State {
    animatedX: Animated.Value;
}

export default class BottomNav extends React.Component<Props, State> {
    tabs = ["Home", "History", "Stats", "Notifications"];
    tabWidth = width / tabCount;

    constructor(props: Props) {
        super(props);

        const initialIndex = this.tabs.indexOf(props.selected);
        const initialX = this.tabWidth * initialIndex + this.tabWidth / 2;

        this.state = {
            animatedX: new Animated.Value(initialX),
        };
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.selected !== this.props.selected) {
            const newIndex = this.tabs.indexOf(this.props.selected);
            const newX = this.tabWidth * newIndex + this.tabWidth / 2;

            Animated.timing(this.state.animatedX, {
                toValue: newX,
                duration: 500,
                easing: Easing.out(Easing.exp),
                useNativeDriver: false,
            }).start();
        }
    }

    getPath(x: number) {
        const radius = 40;
        const curveWidth = 100;
        const center = x;

        return `
      M0 0 
      H${center - curveWidth / 2}
      C${center - curveWidth / 4} 0, ${center - curveWidth / 3} ${radius}, ${center} ${radius}
      C${center + curveWidth / 2.5} ${radius}, ${center + curveWidth / 4} 0, ${center + curveWidth / 2} 0
      H${width}
      V${tabHeight}
      H0 Z
    `;
    }

    render() {
        const { selected, onSelect } = this.props;
        const { animatedX } = this.state;

        return (
            <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
                <View style={styles.navContainer}>
                    {/* Animated Background */}
                    <Animated.View style={StyleSheet.absoluteFill}>
                        <AnimatedSvgBackground animatedX={animatedX} />
                    </Animated.View>

                    {/* Floating Circle with Active Icon */}
                    <Animated.View
                        style={[
                            styles.floatingCircle,
                            {
                                transform: [
                                    {
                                        translateX: Animated.subtract(animatedX, 28),
                                    },
                                ],
                            },
                        ]}
                    >
                        {this.tabs.map((tab, i) =>
                            tab === selected ? (
                                <Image
                                    key={i}
                                    source={
                                        tab === "Home"
                                            ? require("../../assets/icons/home.png")
                                            : tab === "History"
                                                ? require("../../assets/icons/history.png")
                                                : tab === "Stats"
                                                    ? require("../../assets/icons/stats.png")
                                                    : require("../../assets/icons/bell.png")
                                    }
                                    style={styles.activeIcon}
                                />
                            ) : null
                        )}
                    </Animated.View>

                    {/* Tab Buttons */}
                    <View style={styles.navBar}>
                        {this.tabs.map((tab, i) => (
                            <TouchableOpacity key={i} onPress={() => onSelect(tab)}>
                                {tab !== selected && (
                                    <Image
                                        source={
                                            tab === "Home"
                                                ? require("../../assets/icons/home.png")
                                                : tab === "History"
                                                    ? require("../../assets/icons/history.png")
                                                    : tab === "Stats"
                                                        ? require("../../assets/icons/stats.png")
                                                        : require("../../assets/icons/bell.png")
                                        }
                                        style={styles.inactiveIcon}
                                    />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

// Animated SVG background
class AnimatedSvgBackground extends React.Component<{ animatedX: Animated.Value }, { x: number }> {
    state = { x: 0 };

    componentDidMount() {
        this.props.animatedX.addListener(({ value }) => {
            this.setState({ x: value });
        });
    }

    componentWillUnmount() {
        this.props.animatedX.removeAllListeners();
    }

    render() {
        const path = new BottomNav({ selected: "Home", onSelect: () => {} }).getPath(
            this.state.x
        );

        return (
            <Svg width={width} height={tabHeight}>
                <Path d={path} fill="white" />
                <Path d={path} fill="#6CC76E" />
            </Svg>
        );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "transparent",
    },
    navContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: tabHeight,
    },
    navBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: tabHeight,
    },
    floatingCircle: {
        position: "absolute",
        bottom: 50,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#3BB2E5",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 6,
    },
    activeIcon: {
        width: 28,
        height: 28,
        tintColor: "#fff",
    },
    inactiveIcon: {
        width: 26,
        height: 26,
        tintColor: "#fff",
    },
});
