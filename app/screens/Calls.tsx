import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as NavigationBar from "expo-navigation-bar";

const Call: React.FC = () => {
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#242424");
        NavigationBar.setButtonStyleAsync("light");
    }, []);

    return (
        <View style={styles.container}>
            {/* Status Bar */}
            <StatusBar barStyle="light-content" backgroundColor="#242424" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Incoming Call</Text>
                <Text style={styles.subTitle}>Calling.........</Text>
            </View>

            {/* Profile Avatar with Gradient */}
            <LinearGradient
                colors={["#FFFFFF", "#CCD7E5"]}
                style={styles.avatar}
            >
                <Ionicons name="person" size={65} color="#3E3A39" />
            </LinearGradient>

            {/* Bottom Controls */}
            <View style={styles.controls}>
                {/* Speaker */}
                <TouchableOpacity activeOpacity={0.8}>
                    <LinearGradient
                        colors={["#FFFFFF", "#CDD8E6"]}
                        style={[styles.controlButton, styles.withBorder]}
                    >
                        <Ionicons name="volume-high" size={26} color="#3E3A39" />
                    </LinearGradient>
                </TouchableOpacity>

                {/* Mic */}
                <TouchableOpacity activeOpacity={0.8}>
                    <LinearGradient
                        colors={["#FFFFFF", "#CDD8E6"]}
                        style={[styles.controlButton, styles.withBorder]}
                    >
                        <Ionicons name="mic-off" size={26} color="#3E3A39" />
                    </LinearGradient>
                </TouchableOpacity>

                {/* Video */}
                <TouchableOpacity activeOpacity={0.8}>
                    <LinearGradient
                        colors={["#FFFFFF", "#CDD8E6"]}
                        style={[styles.controlButton, styles.withBorder]}
                    >
                        <Ionicons name="videocam" size={26} color="#3E3A39" />
                    </LinearGradient>
                </TouchableOpacity>

                {/* End Call */}
                <TouchableOpacity activeOpacity={0.8}>
                    <LinearGradient
                        colors={["#FF7232", "#EA0000"]}
                        style={[styles.controlButton, styles.withBorder]}
                    >
                        <Ionicons
                            name="call-sharp"
                            size={26}
                            color="#fff"
                            style={{ transform: [{ rotate: "135deg" }] }}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Call;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#242424",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 50,
    },
    header: {
        marginTop: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff",
    },
    subTitle: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "700",
        marginTop: 5,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 65,
        alignItems: "center",
        justifyContent: "center",
    },
    controls: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#0C0C0C",
        borderRadius: 19,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    controlButton: {
        width: 55,
        height: 55,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
    },
    withBorder: {
        borderWidth: 2,
        borderColor: "white",
    },
});
