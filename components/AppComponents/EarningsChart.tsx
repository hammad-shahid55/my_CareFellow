import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const EarningsChart: React.FC = () => {
    return (
        <View style={styles.section}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Total Earnings</Text>
                <Text style={styles.dropdown}>Monthly ▼</Text>
            </View>

            {/* Chart Image */}
            <View style={styles.chartBox}>
                <Image
                    source={require("../../assets/images/earnings-chart.png")}
                    style={styles.chartImg}
                    resizeMode="stretch"
                />
            </View>

            {/* Legend Box */}
            <View style={styles.legendBox}>
                {/* Pay */}
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: "orange" }]} />
                    <View style={styles.textCol}>
                        <Text style={styles.legendLabel}>Pay</Text>
                        <Text style={styles.legendValue}>63%</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* Hours */}
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: "purple" }]} />
                    <View style={styles.textCol}>
                        <Text style={styles.legendLabel}>Hours</Text>
                        <Text style={styles.legendValue}>25%</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* Earnings */}
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: "gold" }]} />
                    <View style={styles.textCol}>
                        <Text style={styles.legendLabel}>Earnings</Text>
                        <Text style={styles.legendValue}>25%</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default EarningsChart;

const styles = StyleSheet.create({
    section: {
        margin: 15,
        padding: 12,
        borderWidth: 1,
        borderColor: "#4CAF50",
        borderRadius: 12,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
    },
    dropdown: {
        fontSize: 14,
        color: "gray",
    },
    chartBox: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    chartImg: {
        width: "100%",
        height: "100%",
    },
    legendBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 12,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        paddingVertical: 12,
    },
    legendItem: {
        flex: 1,
        flexDirection: "row", // dot left, text right
        justifyContent: "center",
        alignItems: "center",
    },
    textCol: {
        alignItems: "center",
        marginLeft: 6,
    },
    divider: {
        width: 1,
        height: "70%",
        backgroundColor: "#5A3E85",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    legendLabel: {
        fontSize: 13,
        fontWeight: "600",
        color: "#444",
    },
    legendValue: {
        fontSize: 14,
        fontWeight: "700",
        color: "#000",
        marginTop: 2,
    },
});
