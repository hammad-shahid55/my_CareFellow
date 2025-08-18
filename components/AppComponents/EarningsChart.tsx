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
                    resizeMode="contain"
                />
            </View>

            {/* Legend */}
            <View style={styles.legend}>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: "orange" }]} />
                    <Text style={styles.legendText}>Pay 63%</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: "purple" }]} />
                    <Text style={styles.legendText}>Hours 25%</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: "gold" }]} />
                    <Text style={styles.legendText}>Earnings 25%</Text>
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
        marginBottom: 10,
    },
    chartImg: {
        width: "100%",
        height: "100%",
    },
    legend: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 5,
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 5,
    },
    legendText: {
        fontSize: 12,
        color: "gray",
    },
});
