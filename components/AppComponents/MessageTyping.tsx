import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const MessageTyping: React.FC = () => {
    const [message, setMessage] = useState("");

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {/* Input & Icons */}
                <View style={{ flex: 1 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type Message...."
                        placeholderTextColor="#8E9BAE"
                        value={message}
                        onChangeText={setMessage}
                        multiline
                    />

                    {/* Bottom Icons (Link & Image) */}
                    <View style={styles.bottomIcons}>
                        <TouchableOpacity style={{ marginLeft: 9 }}>
                            <Entypo name="link" size={20} color="#626A83" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 11 }}>
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
    );
};

export default MessageTyping;

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#E5E5E5",
        marginBottom:-22
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
    },
    input: {
        fontSize: 16,
        paddingVertical: 6,
        color: "#333",
        maxHeight: 100, // prevent too tall input
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
