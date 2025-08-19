import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

export const Availability = () => {
    return (
        <View style={{ padding: 15 }}>
            {/* Available Button */}
            <TouchableOpacity style={styles.availableBtn}>
                <Text style={styles.availableText}>Available</Text>
            </TouchableOpacity>

            {/* Working Days */}
            <Text style={styles.heading}>Working days</Text>
            <View style={styles.daysRow}>
                {days.map((d) => (
                    <LinearGradient
                        key={d}
                        colors={["#6FCF97", "#56CCF2"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.dayBox}
                    >
                        <View style={styles.dayInner}>
                            <Text style={styles.dayText}>{d}</Text>
                        </View>
                    </LinearGradient>
                ))}
            </View>

            {/* Working Hours */}
            <Text style={styles.heading}>Working hours</Text>
            <Text style={styles.time}>08:00AM - 4:00PM</Text>

            {/* Divider */}
            <View style={styles.divider} />
        </View>
    );
};

const styles = StyleSheet.create({
    availableBtn: {
        backgroundColor: "#78C45E",
        paddingVertical: 12,
        paddingHorizontal: 40,
        alignSelf: "flex-start",
        borderRadius: 15,
        marginBottom: 20,
    },
    availableText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
        fontFamily: "ProximaNova-semibold",
    },
    heading: {
        marginTop: 10,
        fontWeight: "600",
        fontSize: 16,
        marginBottom: 6,
        fontFamily: "ProximaNova-Regular",
    },
    daysRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 5
    },
    dayBox: {
        borderRadius: 10,
        padding: 1,
        marginRight: 8,
        marginBottom: 8,
    },
    dayInner: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 14,
    },
    dayText: {
        fontSize: 15,
        fontWeight: "500",
        fontFamily: "ProximaNova-Regular",
    },
    time: {
        marginTop: 5,
        fontSize: 15,
        color: "black",
        fontWeight: "400",
        fontFamily: "ProximaNova-Regular",
    },
    divider: {
        marginTop: 25,
        height: 1,
        backgroundColor: "#D9D9D9",
        width: "100%",
        marginBottom:-30,
    }
});
