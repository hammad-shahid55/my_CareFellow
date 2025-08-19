import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // expo install expo-linear-gradient

export const StatsRow = () => {
    return (
        <LinearGradient
            colors={["#4CAF50", "#2196F3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBorder}
        >
            <View style={styles.row}>
                {/* Reviews */}
                <View style={styles.item}>
                    <Text style={styles.label}>Reviews</Text>
                    <View style={styles.inline}>
                        <Text style={styles.number}>36</Text>
                        <Image
                            source={require("../../assets/icons/thumb.png")}
                            style={styles.icon}
                        />
                    </View>
                </View>

                <View style={styles.divider} />

                {/* Experience */}
                <View style={styles.item}>
                    <Text style={styles.label}>Experience</Text>
                    <Text style={styles.number}>2+yr.</Text>
                </View>

                <View style={styles.divider} />

                {/* Rating */}
                <View style={styles.item}>
                    <Text style={styles.label}>Rating</Text>
                    <View style={styles.inline}>
                        <Image
                            source={require("../../assets/icons/star.png")}
                            style={styles.icon}
                        />
                        <Text style={styles.number}>5.0</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientBorder: {
        borderRadius: 10,
        padding: 1,
        marginHorizontal: 15,
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 15,
    },
    item: {
        flex: 1,
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        color: "black",
        marginBottom: 6,
        fontFamily: "ProximaNova-Regular",
    },
    number: {
        fontWeight: "700",
        fontSize: 22,
        color: "#000",
        fontFamily: "ProximaNova-bold",
    },
    inline: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: "contain",
    },
    divider: {
        width: 1,

        backgroundColor: "#D9D9D9",
    },
});
