// components/AppComponents/CareRequestDetailInfo.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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

const CareRequestDetailInfo: React.FC = () => {
    return (
        <View>
            <Text style={styles.label}>Who Requires care?</Text>
            <View style={styles.row}>
                <GradientValue text="My Son" />
            </View>

            <Text style={styles.label}>Address</Text>
            <View style={styles.row}>
                <GradientValue text="Deerwood, MN 56444" />
                <GradientValue text="Street Address" />
            </View>

            <Text style={styles.label}>Address line 2</Text>
            <View style={styles.row}>
                <GradientValue text="Apartment or suite #" />
            </View>

            <Text style={styles.label}>Age Group</Text>
            <View style={styles.row}>
                <GradientValue text="70s" />
            </View>

            <Text style={styles.label}>City</Text>
            <View style={styles.row}>
                <GradientValue text="American" />
                <GradientValue text="Texas" />
                <GradientValue text="73001" />
            </View>

            <Text style={styles.label}>Start Date</Text>
            <View style={styles.row}>
                <GradientValue text="07/31/2025" />
            </View>

            <Text style={styles.label}>
                How long do you anticipate needing care for your son?
            </Text>
            <View style={styles.row}>
                <GradientValue text="1–3 Months" />
            </View>

            <Text style={styles.label}>
                How many days of care is required each week?
            </Text>
            <View style={styles.row}>
                <GradientValue text="1 Day" />
            </View>

            <Text style={styles.label}>
                How many hours of care per week will be required?
            </Text>
            <View style={styles.row}>
                <GradientValue text="5 Hours" />
            </View>
        </View>
    );
};

export default CareRequestDetailInfo;

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: "500",
        marginTop: 14,
        marginBottom: 6,
        color: "#000",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 8,
    },
    valueBox: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    valueText: { fontSize: 13, fontWeight: "600", color: "#fff" },
});
