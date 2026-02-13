import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Schedule() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView edges={["top"]} style={{ backgroundColor: "#ED2D38" }} />

      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.leftGroup}>
            <Text style={styles.title}>Silverado</Text>
            <AntDesign
              name="down"
              size={20}
              color="black"
              style={styles.downIcon}
            />
          </View>

          <Ionicons
            name="options-outline"
            size={30}
            color="black"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </View>

        <View style={styles.dateStrip}>
          <View style={styles.dateItem}>
            <View style={[styles.datePill, styles.datePillSelected]}>
              <Text style={styles.dateNumber}>9</Text>
              <Text style={styles.dateDay}>MON</Text>
            </View>
          </View>

          <View style={styles.dateItem}>
            <View style={styles.datePill}>
              <Text style={styles.dateNumber}>10</Text>
              <Text style={styles.dateDay}>TUE</Text>
            </View>
          </View>

          <View style={styles.dateItem}>
            <View style={styles.datePill}>
              <Text style={styles.dateNumber}>11</Text>
              <Text style={styles.dateDay}>WED</Text>
            </View>
          </View>

          <View style={styles.dateItem}>
            <View style={styles.datePill}>
              <Text style={styles.dateNumber}>12</Text>
              <Text style={styles.dateDay}>THU</Text>
            </View>
          </View>

          <View style={styles.dateItem}>
            <View style={styles.datePill}>
              <Text style={styles.dateNumber}>13</Text>
              <Text style={styles.dateDay}>FRI</Text>
            </View>
          </View>

          <View style={styles.dateItem}>
            <View style={styles.datePill}>
              <Text style={styles.dateNumber}>14</Text>
              <Text style={styles.dateDay}>SAT</Text>
            </View>
          </View>

          <View style={styles.dateItem}>
            <View style={styles.datePill}>
              <Text style={styles.dateNumber}>15</Text>
              <Text style={styles.dateDay}>SUN</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.dayTitle}>
        <Text>Monday, February 9, 2026</Text>
      </View>

      <View style={styles.classList}>
        <Text>
          10:20 AM <Text>HotShop Spin & Fire (45/30)</Text>
        </Text>
        <Image
          style={styles.hotShopIcon}
          source={require("../../../assets/images/HotShopIcon.png")}
        />
        <Text>Sammi Muys</Text>
        <Text>Silverado</Text>
        <Text style={styles.mins}>75 min.</Text>
        {/* INSERT RESERVE BUTTON HERE */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ED2D38",
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
  downIcon: {
    marginTop: 6,
    marginLeft: 8,
  },
  dateNumber: {
    color: "black",
    fontWeight: "700",
    fontSize: 25,
    lineHeight: 25,
  },
  dateDay: {
    color: "black",
    fontSize: 10,
    lineHeight: 12,
    marginTop: 1,
    letterSpacing: 0.5,
  },
  dateStrip: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateItem: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 56,
  },
  datePill: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  datePillSelected: {
    backgroundColor: "white",
  },
  dayTitle: {
    paddingHorizontal: 15,
    backgroundColor: "#F5F5F5",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
  },
  classList: {
    paddingHorizontal: 15,
  },
  hotShopIcon: {},
  mins: {},
});
