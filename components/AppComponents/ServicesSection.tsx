import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const ServicesSection: React.FC = () => {
    return (
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
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 12,
        borderWidth: 1,
        borderColor: "#4CAF50",
        borderRadius: 12,
        backgroundColor: "#fff",
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
        backgroundColor: "#4CAF50",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    countText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 13,
    },
    viewBtn: {
        borderWidth: 1,
        borderColor: "#4CAF50",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 6,
    },
    viewText: {
        color: "#4CAF50",
        fontSize: 13,
        fontWeight: "500",
    },
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tag: {
        borderWidth: 1,
        borderColor: "skyblue",
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginRight: 6,
        marginBottom: 6,
        fontSize: 13,
    },
});
