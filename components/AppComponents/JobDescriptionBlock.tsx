import React from "react";
import { View, Text, StyleSheet } from "react-native";

type JobDescriptionBlockProps = {
    title?: string;
    body?: string;
    footerNote?: string;
};

const JobDescriptionBlock: React.FC<JobDescriptionBlockProps> = ({
                                                                     title = "",
                                                                     body = "",
                                                                     footerNote = "",
                                                                 }) => {
    return (
        <View style={styles.wrap}>
            {!!title && <Text style={styles.title}>{title}</Text>}
            {!!body && <Text style={styles.body}>{body}</Text>}
            {!!footerNote && <Text style={styles.footer}>{footerNote}</Text>}
        </View>
    );
};

export default JobDescriptionBlock;

const styles = StyleSheet.create({
    wrap: { paddingTop: 16 },
    title: {
        fontSize: 18,
        fontWeight: "800",
        lineHeight: 24,
        color: "#000",
        marginBottom: 8,
    },
    body: {
        fontSize: 14,
        lineHeight: 22,
        color: "#222",
    },
    footer: {
        fontSize: 14,
        lineHeight: 22,
        color: "#222",
        marginTop: 14,
        fontWeight: "600",
    },
});
