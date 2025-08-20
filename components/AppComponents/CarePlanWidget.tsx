import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CarePlanWidget: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* --- Assistance with daily tasks --- */}
            <Text style={styles.label}>What assistance does he require with daily tasks?</Text>
            <View style={styles.assistRow}>
                {assistData.map((item, index) => (
                    <LinearGradient
                        key={index}
                        colors={["#43B0D8", "#78C45E"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.assistBox}
                    >
                        <Image source={item.icon} style={styles.icon} />
                        <Text style={styles.assistText}>{item.label}</Text>
                    </LinearGradient>
                ))}
            </View>

            {/* --- Health Issues --- */}
            <Text style={styles.label}>Any specific health issues or medical conditions? (if any)</Text>
            <GradientValue text="Home Health Care" />

            {/* --- Care Plan --- */}
            <Text style={styles.sectionTitle}>Care Plan and Schedule</Text>

            <Text style={styles.label}>What times of day will care be needed?</Text>
            <GradientValue text="Part-time" />

            <Text style={styles.label}>Is your care schedule flexible?</Text>
            <GradientValue text="Flexible schedule" />

            <Text style={styles.label}>What type of caregiver do you need?</Text>
            <Text style={styles.label1}>Our caregiver is…</Text>
            <GradientValue text="Any gender" />


            <Text style={styles.label}>Where will the caregiver live?</Text>
            <GradientValue text="Live–out (in her own home) / Live–in (in my son's home)" />

            <Text style={styles.label}>Which languages should the caregiver speak?</Text>
            <GradientValue text="English" />

            <Text style={styles.label}>How will the caregiver be compensated?</Text>
            <GradientValue text="Online Transfer via CareFellows" />
        </View>
    );
};

const GradientValue = ({ text }: { text: string }) => (
    <LinearGradient
        colors={["#43B0D8", "#78C45E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.valueBox}
    >
        <Text style={styles.valueText}>{text}</Text>
    </LinearGradient>
);

const assistData = [
    { label: "Personal care / hygiene", icon: require("../../assets/icons/personalcare.png") },
    { label: "Companionship", icon: require("../../assets/icons/companionship.png") },
    { label: "Mobility assistance", icon: require("../../assets/icons/mobility.png") },
    { label: "Medication reminders", icon: require("../../assets/icons/medication.png") },
    { label: "Meal preparation", icon: require("../../assets/icons/meal.png") },
    { label: "Light housekeeping", icon: require("../../assets/icons/housekeeping.png") },
];

export default CarePlanWidget;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingBottom: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        marginTop: 12,
        marginBottom: 6,
        color: "#000",
    },
    label1: {
        fontSize: 12,
        fontWeight: "600",
        marginBottom: 6,
        color: "#626A83",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginTop: 16,
        marginBottom: 8,
        color: "#333",
    },
    assistRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    assistBox: {
        width: "30%",
        borderRadius: 10,
         padding: 12,
        paddingVertical: 6,
        alignItems: "center",
        marginBottom: 12,
    },
    icon: {
        width: 36,
        height: 36,
        marginTop:5,
        marginBottom: 6,
        resizeMode: "contain",
    },
    assistText: {
        fontSize: 11,
        textAlign: "center",
        color: "#fff",
        fontWeight: "600",
    },
    valueBox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        alignSelf: "flex-start",
        marginBottom: 6,
    },
    valueText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#fff",
    },
});
