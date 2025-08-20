import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = { time: string; message: string };

const ReceiverBubble: React.FC<Props> = ({ time, message }) => {
    return (
        <View style={[styles.row, styles.right]}>
            {/* Text column (name/time + bubble) */}
            <View style={styles.colRight}>
                <View style={[styles.headerRow, styles.headerRight]}>
                    <Text style={styles.you}>You</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>

                <View style={styles.rightBubble}>
                    <Text style={styles.msg}>{message}</Text>
                </View>
            </View>

            {/* Avatar on the right with dot */}
            <View style={[styles.avatarWrap, { marginLeft: 10, marginRight: 18 }]}>
                <View style={[styles.avatar, { borderColor: "#43B0D8" }]} />
                <View style={styles.onlineDot} />
            </View>
        </View>
    );
};

export default ReceiverBubble;

const styles = StyleSheet.create({
    row: { flexDirection: "row", alignItems: "flex-start", marginTop: 50, marginBottom: 50 },
    right: { justifyContent: "flex-end" },
    avatarWrap: {
        width: 40,
        height: 40,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 1.2 },
    onlineDot: {
        position: "absolute",
        left: 22,
        bottom: -2,
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: "#43B0D8",
        borderWidth: 1.5,
        backgroundColor: "#5AC95A",
    },
    colRight: { maxWidth: "78%", paddingRight: 6 },
    headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
    headerRight: { justifyContent: "flex-end" },
    you: { fontSize: 14, fontWeight: "700", color: "#626A83", marginRight: 8 },
    time: { fontSize: 12, color: "#8F9BBA" },
    rightBubble: {
        backgroundColor: "#E3FFD9",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderBottomRightRadius:12,
        borderTopLeftRadius:12,
        borderBottomLeftRadius:12,
        alignSelf: "flex-end",
    },
    msg: { fontSize: 14, color: "#323232" ,fontFamily:"ProximaNova-Regular"},
});
