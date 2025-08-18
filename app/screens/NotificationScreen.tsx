import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    SafeAreaView,
} from "react-native";

// 🔹 Reusable Tab Button
const TabButton = ({
                       label,
                       active,
                       onPress,
                   }: {
    label: string;
    active: boolean;
    onPress: () => void;
}) => (
    <TouchableOpacity
        style={[styles.tabButton, active && styles.activeTab]}
        onPress={onPress}
    >
        <Text style={[styles.tabText, active && styles.activeTabText]}>
            {label}
        </Text>
    </TouchableOpacity>
);

// 🔹 Notification Item (reusable)
const NotificationItem = ({
                              text,
                              isUnread = false,
                          }: {
    text: string;
    isUnread?: boolean;
}) => (
    <View style={styles.row}>
        <View
            style={[
                styles.iconWrapper,
                isUnread && styles.unreadIconWrapper,
            ]}
        >
            <Image
                source={require("../../assets/icons/bell1.png")}
                style={styles.icon}
            />
        </View>
        <RenderText text={text} />
    </View>
);

// 🔹 Parse mentions and bold them
const RenderText = ({ text }: { text: string }) => {
    const words = text.split(" ");

    return (
        <Text style={styles.text}>
            {words.map((word, index) => {
                if (word === "@johncampbell" || word === "@terrymaguire") {
                    return (
                        <Text key={index} style={styles.boldMention}>
                            {word}{" "}
                        </Text>
                    );
                }
                return word + " ";
            })}
        </Text>
    );
};

export default function NotificationScreen() {
    const [activeTab, setActiveTab] = useState("All");

    // 🔹 All Notifications
    const allNotifications = [
        "Someone replied to your comment! Check out their response and continue the discussion.",
        "@johncampbell mentioned you in a comment! Join the conversation and respond to their message.",
        "@terrymaguire mentioned you in a comment! They're praising your expertise and seeking your input on an important topic.",
        "You've been tagged in a photo! Take a look and leave a comment to share your experience or memory related to the image.",
    ];

    // 🔹 Mentions
    const unreadMentions = [
        "Your post just went viral! It's trending across the platform, garnering thousands of likes and shares.",
        "You were tagged in a photo! View the image and share your thoughts in the comments.",
    ];

    const pastMentions = [
        "Someone replied to your comment! Check out their response and continue the discussion.",
        "@johncampbell mentioned you in a comment! Join the conversation and respond to their message.",
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: 50 }} />

            {/* Tabs */}
            <View style={styles.tabRow}>
                <TabButton
                    label="All Notifications"
                    active={activeTab === "All"}
                    onPress={() => setActiveTab("All")}
                />
                <TabButton
                    label="Mentions"
                    active={activeTab === "Mentions"}
                    onPress={() => setActiveTab("Mentions")}
                />
            </View>

            {/* Content */}
            {activeTab === "All" ? (
                <>
                    <Text style={styles.heading}>All Notifications</Text>
                    <View style={styles.box}>
                        <FlatList
                            data={allNotifications}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={() => (
                                <View style={styles.divider} />
                            )}
                            renderItem={({ item }) => (
                                <NotificationItem text={item} />
                            )}
                        />
                    </View>
                </>
            ) : (
                <>
                    {/* Unread Mentions */}
                    <Text style={styles.heading}>Unread Mentions</Text>
                    <View style={styles.box}>
                        <FlatList
                            data={unreadMentions}
                            keyExtractor={(item, index) =>
                                "unread-" + index.toString()
                            }
                            ItemSeparatorComponent={() => (
                                <View style={styles.divider} />
                            )}
                            renderItem={({ item }) => (
                                <NotificationItem text={item} isUnread />
                            )}
                        />
                    </View>

                    {/* Past Mentions */}
                    <Text style={[styles.heading, { marginTop: 20 }]}>
                        Past Mentions
                    </Text>
                    <View style={styles.box}>
                        <FlatList
                            data={pastMentions}
                            keyExtractor={(item, index) =>
                                "past-" + index.toString()
                            }
                            ItemSeparatorComponent={() => (
                                <View style={styles.divider} />
                            )}
                            renderItem={({ item }) => (
                                <NotificationItem text={item} />
                            )}
                        />
                    </View>
                </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
        padding: 16,
    },
    tabRow: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#F1F4F8",
        borderRadius: 25,
        marginBottom: 20,
        borderColor: "#E3EBF0",
        padding: 4,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: "center",
    },
    activeTab: {
        backgroundColor: "white",
        elevation: 3,
    },
    tabText: {
        fontSize: 14,
        color: "#6B7280",
        fontWeight: "500",
        fontFamily: "ProximaNova-Regular",
    },
    activeTabText: {
        color: "#000",
        fontWeight: "700",
        fontFamily: "ProximaNova-Bold",
    },
    heading: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 12,
        color: "#111827",
        fontFamily: "ProximaNova-Bold",
    },
    box: {
        backgroundColor: "white",
        borderRadius: 12,
        paddingHorizontal: 12,
        elevation: 2,
    },
    row: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 14,
    },
    iconWrapper: {
        width: 60,
        height: 60,
        borderRadius: 230,
        backgroundColor: "#E9F6E5", // default light green
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    unreadIconWrapper: {
        backgroundColor: "#E9F6E5",
       borderColor: "#78C45E",
        borderWidth: 2.3,
    },
    icon: {
        width: 25,
        height: 25,
    },
    text: {
        flex: 1,
        fontSize: 14,
        color: "#374151",
        lineHeight: 20,
        fontFamily: "ProximaNova-Regular",
    },
    boldMention: {
        fontFamily: "ProximaNova-Bold",
        color: "#111827",
    },
    divider: {
        height: 1,
        backgroundColor: "#E5E7EB",
    },
});
