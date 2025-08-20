import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Message {
    id: number;
    name: string;
    message: string;
    time: string;
    borderColor: string;
    dotColor: string;
}

const messages: Message[] = [
    {
        id: 1,
        name: "Chris John",
        message: "Hello! How are you doing",
        time: "6:00 am",
        borderColor: "#FF6B6B",
        dotColor: "#4CAF50",
    },
    {
        id: 2,
        name: "Miles, Esther",
        message: "Hello! How are you doing..",
        time: "5:59 am",
        borderColor: "#4CAF50",
        dotColor: "#4CAF50",
    },
    {
        id: 3,
        name: "Nguyen, Shane",
        message: "Hello! How are you doing today?",
        time: "10:00 pm",
        borderColor: "#9C27B0",
        dotColor: "#9E9E9E",
    },
    {
        id: 4,
        name: "Black, Marvin",
        message: "Hello! How are you doing today?",
        time: "9:00 am",
        borderColor: "#FFB74D",
        dotColor: "#9E9E9E",
    },
    {
        id: 5,
        name: "Flores, Juanita",
        message: "Hello! How are you doing today?",
        time: "12 hrs ago",
        borderColor: "#FF6B6B",
        dotColor: "#4CAF50",
    },
    {
        id: 6,
        name: "Henry, Arthur",
        message: "Hello! How are you doing today?",
        time: "1 day ago",
        borderColor: "#FF7043",
        dotColor: "#9E9E9E",
    },
    {
        id: 7,
        name: "Flores, Juanita",
        message: "Hello! How are you doing today?",
        time: "3 days ago",
        borderColor: "#9E9E9E",
        dotColor: "#9E9E9E",
    },
];

const MessagesScreen: React.FC = () => {
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleSelectMessage = (id: number) => {
        if (selectedId === id) {
            setSelectedId(null); // Deselect if clicked again
        } else {
            setSelectedId(id); // Select new message
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Message Heading with Menu Icon */}
            <View style={styles.messageHeading}>
                <Text style={styles.headingText}>Messages</Text>
                <TouchableOpacity style={styles.menuButton}>
                    <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Search Bar with Icon */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#999"
                    style={styles.searchInput}
                />
            </View>

            {/* Messages List */}
            <ScrollView contentContainerStyle={styles.listContainer}>
                {messages.map((msg) => (
                    <TouchableOpacity
                        key={msg.id}
                        style={[
                            styles.messageItem,
                            selectedId === msg.id && styles.selectedMessage, // Highlight selected item
                        ]}
                        onPress={() => {
                            handleSelectMessage(msg.id);
                            router.push("/screens/OpenMessageScreen");
                        }}
                    >
                        {/* Avatar Circle with Status Dot */}
                        <View style={[styles.avatar, { borderColor: msg.borderColor }]}>
                            <View
                                style={[styles.statusDot, { backgroundColor: msg.dotColor }]}
                            />
                        </View>

                        {/* Message Details */}
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{msg.name}</Text>
                            <Text style={styles.message}>{msg.message}</Text>
                        </View>

                        {/* Time */}
                        <Text style={styles.time}>{msg.time}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
    },
    messageHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    headingText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
    },
    menuButton: {
        padding: 6,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F3F6FB",
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        width: "90%",
        paddingVertical: 6,
        left: 14,
    },
    searchIcon: {
        marginRight: 10,
        color: "#2B3674",
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
        color: "#000",
    },
    listContainer: {
        paddingBottom: 20,
    },
    messageItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    selectedMessage: {
        backgroundColor: "#E0E0E0",
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    statusDot: {
        width: 10,
        height: 10,
        marginTop: 40,
        left: 10,
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 14,
        fontWeight: "700",
        color: "#626A83",
    },
    message: {
        fontSize: 13,
        color: "#8F9BBA",
        marginTop: 2,
    },
    time: {
        fontSize: 12,
        color: "#8F9BBA",
        marginLeft: 8,
        marginTop: -20,
        left: -20,
    },
});
