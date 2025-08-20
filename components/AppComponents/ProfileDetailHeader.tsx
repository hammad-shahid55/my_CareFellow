import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
    name: string;
    role: string;
    location: string;
    onBack?: () => void;
    onMenu?: () => void;
}

const ProfileDetailHeader: React.FC<Props> = ({ name, role, location, onBack, onMenu }) => {
    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={onBack}>
                <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>

            {/* Profile Info */}
            <View style={styles.center}>
                <View style={styles.avatar} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.role}>{role}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>

            {/* Menu Button */}
            <TouchableOpacity onPress={onMenu}>
                <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileDetailHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingTop: 12,
        backgroundColor: "#fff",
    },
    center: {
        flex: 1,
        alignItems: "center",
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#78C45E",
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: "900",
        color: "#626A83",
        fontFamily: "ProximaNova-SemiBold",
    },
    role: {
        fontSize: 15,
        color: "#8F9BBA",
        fontFamily: "ProximaNova-Regular",
    },
    location: {
        fontSize: 15,
        color: "#8F9BBA",
        fontWeight: "800",
        fontFamily: "ProximaNova-SemiBold",
    },
});
