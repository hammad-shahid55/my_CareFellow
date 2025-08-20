import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    name: string;
    time: string;
    message: string;
    showAvatar?: boolean;
};

const SenderBubble: React.FC<Props> = ({ name, time, message, showAvatar }) => {
    return (
        <View style={styles.row}>
            {showAvatar ? (
                <View style={styles.avatarWrap}>
                    <View style={styles.avatar} />
                    <View style={styles.onlineDot} />
                </View>
            ) : (
                <View style={{ width: 50 }} />
            )}

            <View style={styles.col}>

                {showAvatar && (
                    <View style={styles.headerRow}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.time}>{time}</Text>
                    </View>
                )}

                <View style={styles.leftBubble}>
                    <Text style={styles.msg}>{message}</Text>
                </View>
            </View>
        </View>
    );
};

export default SenderBubble;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 18,
        marginTop: 6,
    },
    avatarWrap: {
        width: 40,
        height: 40,
        marginRight: 10,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1.2,
        borderColor: "#43B0D8",
    },
    onlineDot: {
        position: "absolute",
        left: 22,
        bottom: -2,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#5AC95A",
        borderColor: "#43B0D8",
        borderWidth: 1.5,
    },
    col: { maxWidth: "78%" },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: "700",
        color: "#626A83",
        marginRight: 10,
    },
    time: { left: 18, fontSize: 12, color: "#8F9BBA" },
    leftBubble: {
        backgroundColor: "#DEF6FF",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderBottomRightRadius:12,
        borderTopRightRadius:12,
        borderBottomLeftRadius:12,
        alignSelf: "flex-start",
        marginBottom: 15,
    },
    msg: { fontSize: 14, color: "#323232" ,fontFamily:"ProximaNova-Regular"},
});
