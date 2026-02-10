import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Membership() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.leftGroup}>
            <Text style={styles.title}>Silverado</Text>
            <AntDesign name="down" size={20} color="black" />
          </View>

          <Ionicons
            name="options-outline"
            size={24}
            color="black"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </View>
      </View>

      <View style={styles.dateStrip}>
        <Text></Text>
      </View>

      <View style={styles.dayTitle}>
        <Text></Text>
      </View>

      <View style={styles.classList}>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ED2D38",
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
  dateStrip: {},
  dayTitle: {},
  classList: {},
});
