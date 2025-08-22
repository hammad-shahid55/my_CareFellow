import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {Entypo, Ionicons} from "@expo/vector-icons";

interface LinkItem {
    id: string;
    url: string;
}

interface Props {
    title?: string;
    linkCount?: number;
    links: LinkItem[];
}

const Links: React.FC<Props> = ({
                                    title = "Links",
                                    linkCount = 0,
                                    links,
                                }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <View style={styles.container}>
            {/* Header */}
            <TouchableOpacity
                style={styles.header}
                onPress={() => setExpanded(!expanded)}
            >
                <View>
                    <Text style={styles.headerTitle}>{title}</Text>
                    <Text style={styles.subText}>{linkCount} links</Text>
                </View>
                <Ionicons
                    name={expanded ? "chevron-up" : "chevron-down"}
                    size={20}
                    color="#667085"
                />
            </TouchableOpacity>

            {/* Links list */}
            {expanded && (
                <View style={styles.listContainer}>
                    {links.map((item) => (
                        <View key={item.id} style={styles.linkRow}>
                            <Entypo name="link" size={20} color="#626A83" />
                            <Text style={styles.linkText}>{item.url}</Text>
                            <Ionicons
                                name="ellipsis-horizontal"
                                size={18}
                                color="#626A83"
                            />
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

export default Links;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 16,
        overflow: "hidden",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D1FEC2",
        padding: 15,
    },
    headerTitle: {
        fontWeight: "800",
        fontSize: 16,
        color: "#626A83",
        fontFamily: "ProximaNova-semibold",
    },
    subText: {
        fontSize: 13,
        color: "#8F9BBA",
    },
    listContainer: {
        paddingBottom: 10,
    },
    linkRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    linkText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: "#626A83",
    },
});
