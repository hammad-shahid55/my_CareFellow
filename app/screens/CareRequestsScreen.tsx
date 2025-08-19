import React, { JSX } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router"; // ✅ for navigation

export default function CareRequestsScreen(): JSX.Element {
    const router = useRouter();
    const jobs = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Top Filter Row */}
                <View style={styles.topRow}>
                    <View style={styles.searchBox}>
                        <Image
                            source={require("../../assets/icons/search.png")}
                            style={styles.searchIcon}
                        />
                        <TextInput
                            placeholder="Search"
                            style={styles.searchInput}
                            placeholderTextColor="#999"
                        />
                    </View>

                    <TouchableOpacity style={styles.filterBtn}>
                        <Text style={styles.filterText}>Filter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dropdownBox}>
                        <Text style={styles.dropdownText}>Best Match ▼</Text>
                    </TouchableOpacity>
                </View>

                {/* Jobs Header */}
                <View style={styles.jobsHeader}>
                    <View>
                        <Text style={styles.jobsTitle}>Job Posts</Text>
                        <Text style={styles.updatedText}>
                            Availability last updated 01/03/2025
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.refreshBtn}>
                        <Text style={styles.refreshText}>Refresh</Text>
                    </TouchableOpacity>
                </View>

                {/* Job Cards */}
                {jobs.map((j, i) => (
                    <View key={i} style={styles.card}>
                        {/* Top Row: Category + buttons */}
                        <View style={styles.jobTopRow}>
                            <Text style={styles.category}>Child care</Text>
                            <View style={styles.topButtons}>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnTextWhite}>Favorite</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() =>
                                        router.push({
                                            pathname: "../screens/CareRequestDetailScreen",
                                          // send jobId
                                        })
                                    }
                                >
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
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#fff" },
    scrollContent: { padding: 15, paddingTop: 50, paddingBottom: 30 },

    /* Top Row */
    topRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#F5F5F5",
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    searchIcon: { width: 18, height: 18, marginRight: 6 },
    searchInput: { flex: 1, fontSize: 14 },
    filterBtn: {
        backgroundColor: "#78C45E", // green background
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginLeft: 8,
    },
    filterText: { fontSize: 14, fontWeight: "500", color: "white" },
    dropdownBox: {
        backgroundColor: "#F5F5F5",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginLeft: 8,
    },
    dropdownText: { fontSize: 14, color: "#8F9BBA" },

    /* Jobs Header */
    jobsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    jobsTitle: { fontSize: 16, fontWeight: "600", marginBottom: 2 },
    updatedText: { fontSize: 12, color: "#666" },
    refreshBtn: {
        borderWidth: 0.75,
        borderColor: "#43B0D8",
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 14,
    },
    refreshText: { color: "#43B0D8" },

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
    jobTopRow: {
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
    map: { width: 130, height: 122, borderRadius: 6, marginTop: -15 },
});
