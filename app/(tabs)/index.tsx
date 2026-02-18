import Entypo from "@expo/vector-icons/Entypo";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ClassCard from "../ui/components/ClassCard";
import StatCard from "../ui/components/StatCard";

//parent: row (class card)
// children: time and icon (column)
//children2: date, classname, instructor, location, duration (column)

export default function Index() {
  return (
    <View>
      <SafeAreaView edges={["top"]} style={{ backgroundColor: "#ED2D38" }} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome back, {"\n"}Jenna!</Text>
      </View>
      <View style={styles.stats}>
        <StatCard number="28" subtitle="Classes Completed" nav="View Stats" />
        <StatCard subtitle="4 Classes / Month Membership" nav="View Passes" />
      </View>
      <View style={styles.upcoming}>
        <Text style={styles.upcomingText}>Upcoming Reservations</Text>
        <View style={styles.viewAll}>
          <Text style={styles.upcomingText}>View All</Text>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </View>
      <View style={styles.classes}>
        <ClassCard
          time="10:20 AM"
          date="Wednesday, Feb 11"
          className="HotShop Spin & Sculpt (45/30)"
          instructor="Madi Hirsekon"
          location="Silverado"
          duration="75 min."
        />
        <ClassCard
          time="5:25 PM"
          date="Thursday, Feb 12"
          className="HotShop Spin & Fire (30/30)"
          instructor="Becca Schindel"
          location="Silverado"
          duration="60 min."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ED2D38",
    width: "100%",
    height: 280,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingBottom: 120,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "700",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 210,
    right: 30,
    left: 30,
  },
  upcoming: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 80,
  },
  upcomingText: {
    fontWeight: "700",
    fontSize: 16,
    padding: 2,
  },
  viewAll: {
    flexDirection: "row",
    alignItems: "center",
  },
  classes: {
    flexDirection: "column",
  },
});
