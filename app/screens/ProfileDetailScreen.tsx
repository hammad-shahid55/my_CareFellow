import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

import ProfileDetailHeader from "@/components/AppComponents/ProfileDetailHeader";
import RecentFiles from "@/components/AppComponents/RecentFiles";

const ProfileDetailScreen: React.FC = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar style="dark" backgroundColor="#fff" />

            {/* Space on top */}
            <View style={{ height: 10 }} />

            <ProfileDetailHeader
                name="Chris John"
                role="Project Manager"
                location="New York, USA"
                onBack={() => router.back()}
                onMenu={() => console.log("Menu pressed")}
            />
            <View style={styles.divider} />

            <RecentFiles
                fileCount={71}
                files={[
                    { id: "1", name: "Contracts.pdf" },
                    { id: "2", name: "Invoice.txt" },
                    { id: "3", name: "Proposal.pdf" },
                ]}
            />


        </SafeAreaView>
    );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#fff",
    },
    divider: {
        height: 1,
        backgroundColor: "#D9D9D9",
        marginTop: 35,
        marginHorizontal:15
    },
});
