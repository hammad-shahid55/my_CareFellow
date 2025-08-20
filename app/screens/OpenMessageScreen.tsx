import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    View,
    Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ProfileHeaderChat from "@/components/AppComponents/ProfileHeaderChat";
import ReceiverBubble from "@/components/AppComponents/ReceiverBubble";
import SenderBubble from "@/components/AppComponents/SenderBubble";
import MessageTyping from "@/components/AppComponents/MessageTyping";
import {router, useRouter} from "expo-router";

const messages = [
    { id: 1, sender: "Chris John", type: "sender", time: "6:00 am", text: "Hello! How are you?" },
    { id: 2, sender: "Chris John", type: "sender", time: "6:00 am", text: "Can you send me the Invoice in pdf?" },
    { id: 3, sender: "Me", type: "receiver", time: "6:01 am", text: "Fine! Yes sure" },
    { id: 4, sender: "Chris John", type: "sender", time: "6:00 am", text: "Hello! How are you?" },
    { id: 5, sender: "Chris John", type: "sender", time: "6:01 am", text: "Can you send me the Invoice in pdf?" },
];

const OpenMessageScreen: React.FC = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const showSub = Keyboard.addListener("keyboardDidShow", () =>
            setKeyboardVisible(true)
        );
        const hideSub = Keyboard.addListener("keyboardDidHide", () =>
            setKeyboardVisible(false)
        );

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar style="dark" backgroundColor="#fff" />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={20}
            >
                <View style={{ flex: 1 }}>
                    {/* Messages List */}
                    <ScrollView
                        contentContainerStyle={[
                            styles.content,
                            { paddingBottom: keyboardVisible ? 10 : 40 },
                        ]}
                        showsVerticalScrollIndicator={false}
                    >
                        <ProfileHeaderChat
                            onBack={() => router.back()}
                            onProfilePress={() => router.push("/screens/ProfileDetailScreen")}
                        />

                        {messages.map((msg, index) => {
                            const prev = messages[index - 1];
                            const showAvatar = !prev || prev.sender !== msg.sender;

                            if (msg.type === "sender") {
                                return (
                                    <SenderBubble
                                        key={msg.id}
                                        name={msg.sender}
                                        time={msg.time}
                                        message={msg.text}
                                        showAvatar={showAvatar}
                                    />
                                );
                            } else {
                                return (
                                    <ReceiverBubble
                                        key={msg.id}
                                        time={msg.time}
                                        message={msg.text}
                                    />
                                );
                            }
                        })}
                    </ScrollView>

                    {/* Typing Box always bottom */}
                    <MessageTyping />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default OpenMessageScreen;

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: "#fff" },
    content: { paddingBottom: 16 },
});
