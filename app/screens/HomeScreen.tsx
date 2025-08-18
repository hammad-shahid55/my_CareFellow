import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { router } from "expo-router";

// 🔹 Reusable Menu Item
const MenuItem = ({
                      icon,
                      label,
                      isActive,
                      onPress,
                  }: {
    icon: any;
    label: string;
    isActive: boolean;
    onPress: () => void;
}) => (
    <TouchableOpacity
        style={[styles.menuItem, isActive && styles.activeItem]}
        onPress={onPress}
    >
        <Image
            source={icon}
            style={[styles.menuIcon, isActive && styles.activeIcon]}
            resizeMode="contain"
        />
        <Text style={[styles.menuLabel, isActive && styles.activeLabel]}>
            {label}
        </Text>
    </TouchableOpacity>
);

export default function HomeScreen() {
    const [activeItem, setActiveItem] = useState<string>("");

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <Image
                        source={require("../../assets/images/profile1.png")}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.profileName}>David Pokorny</Text>
                        <Text style={styles.profileHandle}>@DavidPokorny5</Text>
                    </View>
                </View>

                {/* Menu List */}
                <View style={styles.menuList}>
                    <MenuItem
                        icon={require("../../assets/icons/Profile.png")}
                        label="Profile"
                        isActive={activeItem === "Profile"}
                        onPress={() => {
                            setActiveItem("Profile");
                            router.push("/screens/ProfileDashboardScreen");
                        }}
                    />
                    <MenuItem
                        icon={require("../../assets/icons/Setting.png")}
                        label="Setting"
                        isActive={activeItem === "Setting"}
                        onPress={() => setActiveItem("Setting")}
                    />
                    <MenuItem
                        icon={require("../../assets/icons/Billing.png")}
                        label="Billing"
                        isActive={activeItem === "Billing"}
                        onPress={() => setActiveItem("Billing")}
                    />
                    <MenuItem
                        icon={require("../../assets/icons/Invite.png")}
                        label="Invite Friends"
                        isActive={activeItem === "Invite"}
                        onPress={() => setActiveItem("Invite")}
                    />
                    <MenuItem
                        icon={require("../../assets/icons/Export.png")}
                        label="Export Account"
                        isActive={activeItem === "Export"}
                        onPress={() => setActiveItem("Export")}
                    />
                    <MenuItem
                        icon={require("../../assets/icons/Logout.png")}
                        label="Logout"
                        isActive={activeItem === "Logout"}
                        onPress={() => setActiveItem("Logout")}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50,
    },
    profileCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 16,
        borderColor: "#E6E6E68A",
        borderRadius: 16,
        elevation: 2,
        marginBottom: 24,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    profileName: {
        fontSize: 20,
        fontFamily: "ProximaNova-Bold",
        fontWeight: "600",
        color: "#111827",
    },
    profileHandle: {
        fontSize: 14,
        fontFamily: "ProximaNova-Regular",
        color: "#525866",
    },
    menuList: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginBottom: 6,
        backgroundColor: "#fff",
    },
    menuIcon: {
        width: 22,
        height: 22,
        tintColor: "#78C45E",
        marginRight: 16,
    },
    menuLabel: {
        fontSize: 15,
        fontFamily: "ProximaNova-Bold",
        fontWeight: "600",
        color: "#111827",
    },
    activeItem: {
        backgroundColor: "#E9FCE5",
    },
    activeIcon: {
        tintColor: "#34751E",
    },
    activeLabel: {
        fontFamily: "ProximaNova-Bold",
        color: "#34751E",
    },
});
