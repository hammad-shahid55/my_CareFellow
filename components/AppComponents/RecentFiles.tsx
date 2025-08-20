import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FileItem {
    id: string;
    name: string;
}

interface Props {
    title?: string;
    fileCount?: number;
    files: FileItem[];
}

const RecentFiles: React.FC<Props> = ({
                                          title = "Recent Files",
                                          fileCount = 0,
                                          files
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
                    <Text style={styles.subText}>{fileCount} files</Text>
                </View>
                <Ionicons
                    name={expanded ? "chevron-up" : "chevron-down"}
                    size={20}
                    color="#667085"

                />
            </TouchableOpacity>

            {/* File list */}
            {expanded && (
                <FlatList
                    data={files}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.fileRow}>
                            <Ionicons name="document-text-outline" size={20} color="#626A83" />
                            <Text style={styles.fileName}>{item.name}</Text>
                            <Ionicons name="ellipsis-horizontal" size={18} color="#626A83" />
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default RecentFiles;

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
        fontWeight: "bold",
        fontSize: 16,
        color: "#626A83",
    },
    subText: {
        fontSize: 13,
        color: "#8F9BBA",
    },
    fileRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,


    },
    fileName: {
        flex: 1,
        marginLeft: 10,
        fontSize: 15,
        color: "#626A83",
    },
});
