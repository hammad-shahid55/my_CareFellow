import { ProfileHeader } from "@/components/ProfileHeader";
import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import {StatsRow} from "@/components/StatsRow";
import {Availability} from "@/components/Availability";
import {Preferences} from "@/components/Preferences";
import {JobsList} from "@/components/JobsList";
import {ServicesSection} from "@/components/ServicesSection";


function Stat() {
    return null;
}

function EarningsChart() {
    return null;
}

export default function ProfileDashboardScreen() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={styles.welcome}>Welcome to Carefellow 👋</Text>
            <Text style={styles.desc}>
                CareFellows will conduct a background check, and once completed,
                a ‘Background Checked’ badge will be added to your profile,
                enabling you to access and apply for jobs.
            </Text>

            <ProfileHeader />
            <StatsRow />
            <Availability />
            <Preferences />
            <JobsList />
            <ServicesSection />
            <EarningsChart />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    welcome: { fontSize: 18, fontWeight: "bold", margin: 15 },
    desc: { fontSize: 14, color: "gray", marginHorizontal: 15, marginBottom: 10 },
});
