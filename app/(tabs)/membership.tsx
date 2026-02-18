import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MembershipCard from "../ui/components/MembershipCard";

export default function Memberships() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <SafeAreaView
        edges={["top"]}
        style={{ backgroundColor: "transparent" }}
      />

      <View style={styles.header}>
        <View style={styles.cartRow}>
          <Ionicons
            name="cart-outline"
            size={30}
            color="white"
            style={{ alignSelf: "flex-end", marginTop: 12 }}
          />
        </View>
        <Text style={styles.title}>Memberships & Credits</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.locationBox}>
          <Text style={styles.locationLabel}>Location: </Text>
          <Text style={styles.locationText}>Silverado</Text>
        </View>

        <Text style={styles.sectionTitle}>Memberships</Text>

        <MembershipCard price="$99.99" title="All Access Membership-Biweekly" />

        <MembershipCard
          price="$50.00"
          title="Two Week  INTRO"
          badge="READY TO TRY US OUT? THIS PASS IS FOR YOU!"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
  cartRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginTop: 40,
  },
  content: {
    flex: 1,
    padding: 15,
    gap: 12,
    marginTop: -25,
  },
  locationBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    borderColor: "#EDEDED",
    borderWidth: 1,
  },
  locationLabel: {
    fontSize: 15,
    fontWeight: "800",
  },
  locationText: {
    fontSize: 15,
    fontWeight: "400",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#333333",
  },
});
