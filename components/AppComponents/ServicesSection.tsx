import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const ServicesSection: React.FC = () => {
    return (
        <LinearGradient
            colors={["#4CAF50", "#2196F3"]}
            style={styles.gradientBorder}
        >
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.title}>Services</Text>
                        <View style={styles.countBox}>
                            <Text style={styles.countText}>12</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.viewBtn}>
                        <Text style={styles.viewText}>View</Text>
                    </TouchableOpacity>
                </View>

                {/* Tags */}
                <View style={styles.tagsContainer}>
                    <Text style={styles.tag}>Bronx CB 1</Text>
                    <Text style={styles.tag}>Bronx CB 1</Text>
                    <Text style={styles.tag}>Bronx CB 1</Text>
                    <Text style={styles.tag}>Near Me: 20 miles</Text>
                    <Text style={styles.tag}>Near Me: 20 miles</Text>
                    <Text style={styles.tag}>Bronx CB 1</Text>
                    <Text style={styles.tag}>Bronx CB 1</Text>
                    <Text style={styles.tag}>Bronx CB 1</Text>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientBorder: {
        margin: 15,
        borderRadius: 12,
        padding: 1.25,
    },
    container: {
        borderRadius: 12,
        backgroundColor: "#fff",
        padding: 15,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        marginRight: 8,
    },
    countBox: {
        backgroundColor: "#C5F8B3",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4

    },
    countText: {
        color: "#000",
        fontWeight: "900",
        fontSize: 14,
    },
    viewBtn: {
        borderWidth: 1,
        borderColor: "#78C45E",
        paddingHorizontal: 14,
        paddingVertical: 4,
        borderRadius: 6,
    },
    viewText: {
        color: "#78C45E",
        fontSize: 14,
        fontWeight: "500",
    },
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5,
    },
    tag: {
        borderWidth: 1,
        borderColor: "#43B0D8",
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 14,
        fontFamily: "ProximaNova-Regular",
        fontSize: 14,
        color: "#000",
    },
});
