import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const StatsRow = () => {
    return (
        <View style={styles.row}>
            <View style={styles.item}>
                <Text style={styles.number}>36</Text>
                <Text>Reviews</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.number}>2+yr.</Text>
                <Text>Experience</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.number}>5.0 ⭐</Text>
                <Text>Rating</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginHorizontal: 15,
        paddingVertical: 15,
    },
    item: { alignItems: "center" },
    number: { fontWeight: "bold", fontSize: 16 },
});
