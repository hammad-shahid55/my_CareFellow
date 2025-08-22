import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

import ProfileDetailHeader from "@/components/AppComponents/ProfileDetailHeader";
import RecentFiles from "@/components/AppComponents/RecentFiles";
import Images from "@/components/AppComponents/Images";
import Links from "@/components/AppComponents/Links";

const ProfileDetailScreen: React.FC = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar style="dark" />

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
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

                {/* Recent Files */}
                <RecentFiles
                    fileCount={71}
                    files={[
                        { id: "1", name: "Contracts.pdf" },
                        { id: "2", name: "Invoice.txt" },
                        { id: "3", name: "Proposal.pdf" },
                    ]}
                />

                {/* Images section */}
                <Images
                    title="Images"
                    imageCount={20}
                />

                {/* Links section */}
                <Links
                    linkCount={20}
                    links={[
                        { id: "1", url: "www.konmatfix.com" },
                        { id: "2", url: "www.conecom.com" },
                        { id: "3", url: "www.statholdings.com" },
                    ]}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        paddingTop: 40,
        paddingBottom: 30,
    },
    divider: {
        height: 1,
        backgroundColor: "#D9D9D9",
        marginTop: 35,
        marginHorizontal: 15,
    },
});
