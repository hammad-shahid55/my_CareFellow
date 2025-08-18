import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

export const Availability = () => {
    return (
        <View style={{ padding: 15 }}>
            <TouchableOpacity style={styles.availableBtn}>
                <Text style={styles.availableText}>Available</Text>
            </TouchableOpacity>

            <Text style={styles.heading}>Working days</Text>
            <View style={styles.daysRow}>
                {days.map((d) => (
                    <View key={d} style={styles.dayBox}>
                        <Text>{d}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.heading}>Working hours</Text>
            <Text style={styles.time}>08:00AM - 04:00PM</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    availableBtn: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 6,
        alignItems: "center",
        marginBottom: 15,
    },
    availableText: { color: "white", fontWeight: "600" },
    heading: { marginTop: 10, fontWeight: "500" },
    daysRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 8 },
    dayBox: {
        borderWidth: 1,
        borderColor: "green",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginRight: 5,
        marginBottom: 5,
    },
    time: { marginTop: 5, color: "gray" },
});
