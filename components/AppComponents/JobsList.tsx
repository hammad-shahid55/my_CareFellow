import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

type JobsListProps = {
    count?: number;   // how many jobs to render
    title?: string;   // custom title (default: "Jobs")
};

export const JobsList = ({ count = 3, title = "Jobs" }: JobsListProps) => {
    const jobs = Array.from({ length: count }, (_, i) => i + 1);
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header with Jobs & Menu */}
            <View style={styles.headerRow}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.countBox}>
                        <Text style={styles.countText}>{jobs.length}</Text>
                    </View>
                </View>

                {/* Right menu buttons */}
                <View style={styles.menuRow}>
                    <TouchableOpacity
                        style={styles.menuBtnGreen}

                    >
                        <Text style={styles.menuBtnTextWhite}
                              onPress={() => router.push("../screens/MessagesScreen")}>Messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuBtnGreen}
                                      onPress={() => router.push("../screens/CareRequestsScreen")}>
                        <Text style={styles.menuBtnTextWhite}>New orders ▼</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {jobs.map((j, i) => (
                <View key={i} style={styles.card}>
                    {/* Top Row: Category + buttons */}
                    <View style={styles.topRow}>
                        <Text style={styles.category}>Child care</Text>
                        <View style={styles.topButtons}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnTextWhite}>Favorite</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnTextWhite}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Time + Rate */}
                    <View style={styles.inlineRow}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>5 hours</Text>
                        </View>
                        <Text style={styles.rate}>
                            <Text style={{ color: "#78C45E" }}>$25</Text>/Hour
                        </Text>
                    </View>

                    {/* Profile + Map */}
                    <View style={styles.contentRow}>
                        {/* Profile */}
                        <View style={styles.profileCol}>
                            <View style={styles.profileRow}>
                                <Image
                                    source={require("../../assets/images/avatar1.png")}
                                    style={styles.avatar}
                                />
                                <View>
                                    <Text style={styles.name}>Alice Oh</Text>
                                    <View style={styles.locRow}>
                                        <Image
                                            source={require("../../assets/icons/location.png")}
                                            style={styles.locIcon}
                                        />
                                        <Text style={styles.location}>Lorem Ipsum is simply</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.desc}>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </Text>
                        </View>

                        {/* Map */}
                        <Image
                            source={require("../../assets/images/map-placeholder.png")}
                            style={styles.map}
                            resizeMode="cover"
                        />
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 15, flex: 1 },

    /* Header */
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    titleRow: { flexDirection: "row", alignItems: "center" },
    title: { fontWeight: "bold", fontSize: 18, marginRight: 6 },
    countBox: {
        backgroundColor: "#C5F8B3",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    countText: { fontWeight: "700", color: "black", fontSize: 15 },

    /* Menu Buttons */
    menuRow: { flexDirection: "row" },
    menuBtnGreen: {
        backgroundColor: "#78C45E",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
        marginLeft: 8,
    },
    menuBtnTextWhite: {
        color: "white",
        fontWeight: "600",
        fontSize: 14,
    },

    /* Card */
    card: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },

    /* Top Row */
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },
    category: { fontWeight: "600", fontSize: 15 },
    topButtons: { flexDirection: "row" },
    btn: {
        borderWidth: 1,
        borderColor: "#78C45E",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        backgroundColor: "#78C45E",
        marginLeft: 8,
        marginBottom: -10,
    },
    btnTextWhite: { color: "white", fontWeight: "600", fontSize: 12 },

    /* Info Row */
    inlineRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
    badge: {
        backgroundColor: "#E7F6EA",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 6,
    },
    badgeText: { fontSize: 12, fontWeight: "600", color: "#0BA02C" },
    rate: { fontWeight: "600", color: "#767F8C" },

    /* Content */
    contentRow: { flexDirection: "row", justifyContent: "space-between" },
    profileCol: { flex: 1, paddingRight: 10 },
    profileRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
    avatar: {
        width: 45,
        height: 50,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#78C45E",
        marginRight: 10,
    },
    name: { fontWeight: "700", fontSize: 16, left: -7 },
    locRow: { flexDirection: "row", alignItems: "center", marginTop: 2, left: -8 },
    locIcon: { width: 12, height: 12, marginRight: 4, tintColor: "gray" },
    location: {
        color: "#767F8C",
        fontSize: 11.5,
        left: -3,
        fontFamily: "ProximaNova-Regular",
    },
    desc: {
        color: "#767F8C",
        fontSize: 13,
        marginBottom: 10,
        fontFamily: "ProximaNova-Regular",
    },

    /* Map */
    map: { width: 130, height: 122, borderRadius: 6, marginTop: -15 },
});
