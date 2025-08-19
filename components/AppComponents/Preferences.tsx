import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export const Preferences = () => {
    return (
        <View style={styles.container}>
            {/* Work Location Preferences */}
            <View style={styles.section}>
                <Text style={styles.heading}>Work Location Preferences</Text>
                <TouchableOpacity>
                    <Image
                        source={require("../../assets/icons/plus.png")}
                        style={styles.addIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.tag}><Text style={styles.tagText}>Bronx CB 1</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Bronx CB 2</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Near Me: 20 miles</Text></View>
            </View>

            {/* Service */}
            <View style={styles.section}>
                <Text style={styles.heading}>Service</Text>
                <TouchableOpacity>
                    <Image
                        source={require("../../assets/icons/plus.png")}
                        style={styles.addIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tag}><Text style={styles.tagText}>Child Care</Text></View>

            {/* Language */}
            <View style={styles.section}>
                <Text style={styles.heading}>Language</Text>
                <TouchableOpacity>
                    <Image
                        source={require("../../assets/icons/plus.png")}
                        style={styles.addIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tag}><Text style={styles.tagText}>English (American)</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 15 },
    section: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
        marginBottom: 5,
    },
    heading: { fontSize: 15, fontWeight: "500", color: "black",fontFamily: "ProximaNova-Regular" },
    row: { flexDirection: "row", flexWrap: "wrap" },
    tag: {
        backgroundColor: "#43B0D8",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginRight: 8,
        marginBottom: 8,
        alignSelf: "flex-start",
    },
    tagText: {
        color: "white",
        fontWeight: "700",
        fontSize: 15,
        fontFamily: "ProximaNova-semibold",
    },
    addIcon: {
        width: 25,
        height: 25,
    },
});
