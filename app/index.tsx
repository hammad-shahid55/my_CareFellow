import React from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "@/app/screens/HomeScreen";
import HistoryScreen from "@/app/screens/HistoryScreen";
import StatsScreen from "@/app/screens/StatsScreen";
import NotificationScreen from "@/app/screens/NotificationScreen";
import BottomNav from "@/app/(tabs)/BottomNav";


function HistoryS() {
    return null;
}

export default class index extends React.Component {
    state = { selectedTab: "Home" };

    renderScreen() {
        switch (this.state.selectedTab) {
            case "Home":
                return <HomeScreen />;
            case "History":
                return <HistoryScreen />;
            case "Stats":
                return <StatsScreen />;
            case "Notifications":
                return <NotificationScreen />;
            default:
                return <HomeScreen />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderScreen()}
                <BottomNav
                    selected={this.state.selectedTab}
                    onSelect={(tab) => this.setState({ selectedTab: tab })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F5F5F5" },
});
