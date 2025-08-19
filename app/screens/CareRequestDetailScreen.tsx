import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from "react-native";
import JobDescriptionBlock from "@/components/AppComponents/JobDescriptionBlock";


const CareRequestDetailScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Profile Row */}
                <View style={styles.profileRow}>
                    {/* Avatar */}
                    <Image
                        source={require("../../assets/images/avatar1.png")}
                        style={styles.avatar}
                    />

                    {/* Middle Content */}
                    <View style={styles.info}>
                        <Text style={styles.name}>Alice Oh</Text>

                        {/* Duration & Rate */}
                        <View style={styles.inlineRow}>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>5 hours</Text>
                            </View>
                            <Text style={styles.rate}>
                                <Text style={{ color: "#0BA02C" }}>$25</Text>/Hour
                            </Text>
                        </View>

                        {/* Location with icon */}
                        <View style={styles.inlineRow}>
                            <Image
                                source={require("../../assets/icons/location.png")}
                                style={styles.locationIcon}
                            />
                            <Text style={styles.location}>New York, 4.3 miles</Text>
                        </View>

                        {/* Add to Favorites */}
                        <TouchableOpacity>
                            <Text style={styles.favText}>♡ Add to Favorites</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Right Action Buttons */}
                    <View style={styles.actionsRow}>
                        <TouchableOpacity style={styles.hireBtn}>
                            <Text style={styles.hireText}>Hire Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.msgBtn}>
                            <Text style={styles.msgText}>Message me</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* --- Job Description (below profile) --- */}
                <JobDescriptionBlock
                    title="Reliable Caregiver Needed in Deerwood, MN for My Son"
                    body={
                        "Seeking a caring and reliable caregiver near Deerwood, MN to assist with my son’s care. " +
                        "The job requires 4 days of care per week, covering morning, afternoon, and evening shifts. " +
                        "The caregiver’s responsibilities will include companionship, meal preparation, housekeeping, " +
                        "and transportation. We are looking for committed and serious applicants."
                    }
                    footerNote="Don’t miss out on this excellent opportunity!"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default CareRequestDetailScreen;

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#fff" },
    container: { paddingHorizontal: 10, paddingTop: 30, paddingBottom: 30 },

    profileRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
    },
    avatar: {
        width: 70,
        height: 75,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#78C45E",
        marginRight: 6,
    },
    info: { flex: 1 },

    name: { fontSize: 14, fontWeight: "700", marginBottom: 6 },

    inlineRow: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
    badge: {
        backgroundColor: "#E7F6EA",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 8,
    },
    badgeText: { fontSize: 10, fontWeight: "600", color: "#0BA02C" },
    rate: { fontSize: 10, color: "#666", fontWeight: "600", left: -5 },

    locationIcon: { width: 12, height: 12, resizeMode: "contain", marginRight: 4 },
    location: { fontSize: 9, color: "#767F8C" },
    favText: {
        fontSize: 11,
        color: "#0BA02C",
        fontWeight: "500",
        left: 2,
        marginTop: -2,
    },

    actionsRow: {
        flexDirection: "row",
        alignItems: "center",
        flexShrink: 0,
    },
    hireBtn: {
        borderWidth: 1,
        borderColor: "#78C45E",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginRight: 6,
    },
    hireText: { color: "#78C45E", fontWeight: "600", fontSize: 12 },

    msgBtn: {
        backgroundColor: "#78C45E",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    msgText: { color: "white", fontWeight: "600", fontSize: 12 },
});
