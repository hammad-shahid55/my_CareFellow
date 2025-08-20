import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "expo-router"; // Import Ionicons for the back button

const ProfileHeader: React.FC = () => {
    const navigation = useNavigation(); // Initialize navigation

    const handleBackPress = () => {
        navigation.goBack(); // Go back to the previous screen
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                {/* Back Button using Ionicons */}
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Ionicons name="arrow-back" size={24} color="#000" /> {/* Back Arrow Icon */}
                </TouchableOpacity>

                {/* Profile Section */}
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: "https://placekitten.com/200/200" }} // Placeholder for profile picture
                        style={styles.profileImage}
                    />
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Chris John</Text>
                        {/* Status Below Name */}
                        <View style={styles.statusContainer}>
                            <View style={styles.onlineDot} />
                            <Text style={styles.statusText}>Online</Text>
                        </View>
                    </View>
                </View>

                {/* Call Button */}
                <TouchableOpacity style={styles.callButton}>
                    <Image source={require("../../assets/icons/phone.png")} style={styles.icon} />
                    <Text style={styles.callText}>Call</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "transparent", // No background for the header
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 40, // Adjust space from the top
    },
    backButton: {
        padding: 10,
    },
    callButton: {
        backgroundColor: "#E0FFE4",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    callText: {
        color: "#4CAF50",
        marginLeft: 8,
        fontWeight: "bold",
    },
    icon: {
        width: 20,
        height: 20,
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#4CAF50",
        marginRight: 10,
    },
    nameContainer: {
        flexDirection: "column", // Stack the name and status vertically
        alignItems: "flex-start",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5, // Moves the "Online" text and dot down below the name
    },
    onlineDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#4CAF50",
        marginRight: 5,
    },
    statusText: {
        fontSize: 14,
        color: "#4CAF50",
    },
});

export default ProfileHeader;
