import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export const JobsList = () => {
    const jobs = [1, 2, 3]; // dummy list

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jobs 1</Text>
            {jobs.map((j, i) => (
                <View key={i} style={styles.card}>
                    <View style={styles.topRow}>
                        <Text style={styles.category}>Child care</Text>
                        <Text style={styles.rate}>$25/Hour</Text>
                    </View>
                    <View style={styles.profileRow}>
                        <Image
                            source={{ uri: "https://via.placeholder.com/50" }}
                            style={styles.avatar}
                        />
                        <View>
                            <Text style={styles.name}>Alice Oh</Text>
                            <Text style={styles.desc}>
                                Lorem Ipsum is simply dummy text of the printing industry.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.bottomRow}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Favorite</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnApply}>
                            <Text style={styles.btnTextWhite}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 15 },
    title: { fontWeight: "bold", fontSize: 16, marginBottom: 10 },
    card: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        elevation: 2,
    },
    topRow: { flexDirection: "row", justifyContent: "space-between" },
    category: { fontWeight: "500" },
    rate: { color: "green", fontWeight: "500" },
    profileRow: { flexDirection: "row", marginVertical: 10 },
    avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
    name: { fontWeight: "600" },
    desc: { fontSize: 12, color: "gray", marginTop: 2, width: "80%" },
    bottomRow: { flexDirection: "row", justifyContent: "flex-end" },
    btn: {
        borderWidth: 1,
        borderColor: "green",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginRight: 8,
    },
    btnApply: {
        backgroundColor: "green",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    btnText: { color: "green" },
    btnTextWhite: { color: "white" },
});
