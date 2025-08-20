import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";

const ProfileHeaderChat: React.FC = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.headerContainer}>
            {/* Back Button + Avatar in same row */}
            <View style={styles.leftContainer}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>

                {/* Avatar Circle */}
                <View style={styles.avatar}>
                    {/* custom avatar icon/image can go here if needed */}
                </View>

                {/* Name & Status */}
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Chris John</Text>
                    <View style={styles.statusContainer}>
                        <View style={styles.onlineDot} />
                        <Text style={styles.statusText}>Online</Text>
                    </View>
                </View>
            </View>

            {/* Call Button with Local Asset */}
            <TouchableOpacity style={styles.callButton}>
                <Image source={require("../../assets/icons/phone.png")} style={styles.callIcon} />
                <Text style={styles.callText}>Call</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "transparent",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
       paddingBottom:40,
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        marginRight: 4,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        borderWidth: 1.5,
        borderColor: "#43B0D8",
    },
    callButton: {
        backgroundColor: "#E2FFD8",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    callIcon: {
        width: 19,
        height: 19,
        color: "#78C45E",
        resizeMode: "contain",
    },
    callText: {
        color: "#78C45E",
        marginLeft: 6,
        fontWeight: "bold",
    },
    nameContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3,
    },
    onlineDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#5AC95A",
        marginRight: 5,
    },
    statusText: {
        fontSize: 14,
        color: "#000000",
    },
});

export default ProfileHeaderChat;
