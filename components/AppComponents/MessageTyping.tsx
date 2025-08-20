import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const MessageTyping: React.FC = () => {
    const [message, setMessage] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={70}
        >
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    {/* Left Input */}
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type Message...."
                            placeholderTextColor="#8E9BAE"
                            value={message}
                            onChangeText={setMessage}
                        />

                        {/* Bottom Icons (Link & Image) */}
                        <View style={styles.bottomIcons}>
                            <TouchableOpacity>
                                <Entypo name="link" size={20} color="#626A83" left="5"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 16 }}>
                                <Ionicons name="image-outline" size={20} color="#626A83" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Send Button */}
                    <TouchableOpacity style={styles.sendButton}>
                        <Ionicons name="send" size={22} color="#43B0D8" />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default MessageTyping;

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        backgroundColor: "#fff",
    },
    container: {
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 1,
        borderColor: "#D3D7DF",
        borderRadius: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    input: {
        fontSize: 16,
        paddingVertical: 6,
        color: "#333",
    },
    bottomIcons: {
        flexDirection: "row",
        marginTop: 6,
    },
    sendButton: {
        justifyContent: "flex-end",
        alignItems: "center",
        paddingLeft: 10,
        paddingBottom: 20,
    },
});
