// import React from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     Image,
//     TouchableOpacity,
//     ScrollView,
//     SafeAreaView,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";// or use react-native-vector-icons
//
// export default function ProfileDashboardScreen() {
//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ScrollView
//                 style={styles.container}
//                 contentContainerStyle={{ paddingBottom: 100 }}
//                 showsVerticalScrollIndicator={false}
//             >
//                 {/* Welcome Header */}
//                 <Text style={styles.welcomeText}>
//                     Welcome to Carefellow 👋
//                 </Text>
//                 <Text style={styles.welcomeDesc}>
//                     CareFellows will conduct a background check, and once completed, a
//                     ‘Background Checked’ badge will be added to your profile, enabling you
//                     to access and apply for jobs.
//                 </Text>
//
//                 {/* Profile Card */}
//                 <View style={styles.profileCard}>
//                     <Image
//                         source={require("../../assets/images/profile1.png")}
//                         style={styles.avatar}
//                     />
//                     <View style={{ flex: 1 }}>
//                         <Text style={styles.name}>Jake Vincent</Text>
//                         <Text style={styles.city}>New York City</Text>
//                         <Text style={styles.rate}>$25/Hour</Text>
//                         <Text style={styles.response}>Response time: Within 1 hours</Text>
//                     </View>
//                     <View style={styles.actions}>
//                         <Ionicons name="search" size={24} color="#444" />
//                         <Ionicons
//                             name="notifications-outline"
//                             size={24}
//                             color="#444"
//                             style={{ marginLeft: 12 }}
//                         />
//                     </View>
//                 </View>
//
//                 {/* Stats Row */}
//                 <View style={styles.statsRow}>
//                     <View style={styles.statBox}>
//                         <Text style={styles.statValue}>36</Text>
//                         <Text style={styles.statLabel}>Reviews</Text>
//                     </View>
//                     <View style={styles.statBox}>
//                         <Text style={styles.statValue}>2+yr.</Text>
//                         <Text style={styles.statLabel}>Experience</Text>
//                     </View>
//                     <View style={styles.statBox}>
//                         <Text style={styles.statValue}>⭐ 5.0</Text>
//                         <Text style={styles.statLabel}>Rating</Text>
//                     </View>
//                 </View>
//
//                 {/* Availability */}
//                 <View style={styles.section}>
//                     <Text style={styles.availBtn}>Available</Text>
//                     <Text style={styles.sectionTitle}>Working days</Text>
//                     <View style={styles.daysRow}>
//                         {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((d, i) => (
//                             <View key={i} style={styles.dayBox}>
//                                 <Text style={styles.dayText}>{d}</Text>
//                             </View>
//                         ))}
//                     </View>
//                     <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Working hours</Text>
//                     <Text style={styles.hoursText}>08:00AM - 4:00PM</Text>
//                 </View>
//
//                 {/* Work Location Preferences */}
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle}>Work Location Preferences</Text>
//                     <View style={styles.tagRow}>
//                         <Text style={styles.tag}>Bronx CB 1</Text>
//                         <Text style={styles.tag}>Bronx CB 2</Text>
//                         <Text style={styles.tag}>Near Me: 20 miles</Text>
//                     </View>
//                 </View>
//
//                 {/* Services */}
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle}>Service</Text>
//                     <Text style={styles.tag}>Child Care</Text>
//                 </View>
//
//                 {/* Language */}
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle}>Language</Text>
//                     <Text style={styles.tag}>English (American)</Text>
//                 </View>
//
//                 {/* Jobs */}
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle}>Jobs</Text>
//                     {[1, 2, 3].map((job, idx) => (
//                         <View key={idx} style={styles.jobCard}>
//                             <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//                                 <Text style={styles.jobType}>Child care</Text>
//                                 <View style={{ flexDirection: "row" }}>
//                                     <TouchableOpacity style={styles.jobBtn}>
//                                         <Text style={styles.jobBtnText}>Favorite</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity style={[styles.jobBtn, { marginLeft: 6 }]}>
//                                         <Text style={styles.jobBtnText}>Apply</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                             <Text style={styles.jobRate}>5 hours   $25/Hour</Text>
//                             <Text style={styles.jobDesc}>
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                             </Text>
//                             <Image
//                                 source={require("../../assets/images/map-placeholder.png")}
//                                 style={styles.mapImg}
//                             />
//                         </View>
//                     ))}
//                 </View>
//
//                 {/* Services Summary */}
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle}>Services</Text>
//                     <View style={styles.tagRow}>
//                         {Array(6)
//                             .fill("Bronx CB 1")
//                             .map((t, i) => (
//                                 <Text key={i} style={styles.tag}>
//                                     {t}
//                                 </Text>
//                             ))}
//                     </View>
//                 </View>
//
//                 {/* Earnings */}
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle}>Total Earnings</Text>
//                     {/* Chart Placeholder */}
//                     <View style={styles.chartBox}>
//                         <Text style={{ color: "#999" }}>📊 Chart Placeholder</Text>
//                     </View>
//                 </View>
//             </ScrollView>
//
//             {/* Bottom Navigation */}
//             <View style={styles.bottomNav}>
//                 <Ionicons name="home" size={24} color="#fff" />
//                 <Ionicons name="time-outline" size={24} color="#fff" />
//                 <Ionicons name="stats-chart-outline" size={24} color="#fff" />
//                 <Ionicons name="person-outline" size={24} color="#fff" />
//             </View>
//         </SafeAreaView>
//     );
// }
//
// const styles = StyleSheet.create({
//     safeArea: { flex: 1, backgroundColor: "#fff" },
//     container: { flex: 1, padding: 16 },
//     welcomeText: { fontSize: 18, fontWeight: "700", marginBottom: 4 },
//     welcomeDesc: { fontSize: 14, color: "#555", marginBottom: 16 },
//     profileCard: {
//         flexDirection: "row",
//         alignItems: "center",
//         padding: 12,
//         borderRadius: 12,
//         backgroundColor: "#fff",
//         elevation: 3,
//         marginBottom: 16,
//     },
//     avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
//     name: { fontSize: 16, fontWeight: "700", color: "#111" },
//     city: { fontSize: 14, color: "#666" },
//     rate: { fontSize: 14, color: "#2E7D32", fontWeight: "600" },
//     response: { fontSize: 12, color: "#888" },
//     actions: { flexDirection: "row", alignItems: "center" },
//     statsRow: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginBottom: 16,
//     },
//     statBox: { alignItems: "center", flex: 1 },
//     statValue: { fontSize: 16, fontWeight: "700" },
//     statLabel: { fontSize: 13, color: "#555" },
//     section: { marginBottom: 20 },
//     sectionTitle: { fontSize: 15, fontWeight: "700", marginBottom: 8 },
//     availBtn: {
//         backgroundColor: "#4CAF50",
//         color: "#fff",
//         paddingVertical: 6,
//         paddingHorizontal: 12,
//         borderRadius: 8,
//         alignSelf: "flex-start",
//         marginBottom: 12,
//     },
//     daysRow: { flexDirection: "row", flexWrap: "wrap" },
//     dayBox: {
//         borderWidth: 1,
//         borderColor: "#ccc",
//         borderRadius: 8,
//         paddingVertical: 6,
//         paddingHorizontal: 10,
//         margin: 4,
//     },
//     dayText: { fontSize: 13, color: "#333" },
//     hoursText: { fontSize: 14, color: "#333" },
//     tagRow: { flexDirection: "row", flexWrap: "wrap" },
//     tag: {
//         backgroundColor: "#E9FCE5",
//         color: "#2E7D32",
//         paddingVertical: 6,
//         paddingHorizontal: 12,
//         borderRadius: 8,
//         marginRight: 6,
//         marginBottom: 6,
//         fontSize: 13,
//     },
//     jobCard: {
//         borderWidth: 1,
//         borderColor: "#ddd",
//         borderRadius: 12,
//         padding: 12,
//         marginBottom: 12,
//         backgroundColor: "#fff",
//     },
//     jobType: { fontSize: 15, fontWeight: "700", color: "#111" },
//     jobRate: { fontSize: 13, color: "#2E7D32", marginVertical: 4 },
//     jobDesc: { fontSize: 12, color: "#555", marginBottom: 6 },
//     jobBtn: {
//         backgroundColor: "#4CAF50",
//         borderRadius: 6,
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//     },
//     jobBtnText: { fontSize: 12, color: "#fff" },
//     mapImg: { width: "100%", height: 100, borderRadius: 8, marginTop: 6 },
//     chartBox: {
//         height: 150,
//         borderWidth: 1,
//         borderColor: "#ddd",
//         borderRadius: 12,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     bottomNav: {
//         position: "absolute",
//         bottom: 0,
//         left: 0,
//         right: 0,
//         flexDirection: "row",
//         justifyContent: "space-around",
//         backgroundColor: "#4CAF50",
//         paddingVertical: 12,
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//     },
// });
