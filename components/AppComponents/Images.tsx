import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
    title?: string;
    imageCount?: number;
}

const Images: React.FC<Props> = ({
                                     title = "Images",
                                     imageCount = 20,
                                 }) => {
    const [expanded, setExpanded] = useState(true);

    // dummy 20 items
    const dummyData = Array.from({ length: imageCount }, (_, i) => i);

    return (
        <View style={styles.container}>
            {/* Header */}
            <TouchableOpacity
                style={styles.header}
                onPress={() => setExpanded(!expanded)}
            >
                <View>
                    <Text style={styles.headerTitle}>{title}</Text>
                    <Text style={styles.subText}>{imageCount} images</Text>
                </View>
                <Ionicons
                    name={expanded ? "chevron-up" : "chevron-down"}
                    size={20}
                    color="#667085"
                />
            </TouchableOpacity>

            {/* Dummy black blocks */}
            {expanded && (
                <View>
                    {dummyData.map((_, index) => (
                        <View key={index} style={styles.blackRow} />
                    ))}
                </View>
            )}
        </View>
    );
};

export default Images;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 16,
        overflow: "hidden",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D1FEC2",
        padding: 15,
    },
    headerTitle: {
        fontWeight: "800",
        fontSize: 16,
        color: "#626A83",
        fontFamily: "ProximaNova-semibold",
    },
    subText: {
        fontSize: 13,
        color: "#8F9BBA",
    },
    blackRow: {
        height: 10,
        backgroundColor: "#fff",
    },
});
