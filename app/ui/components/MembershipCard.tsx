import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type MembershipCardProps = {
  price: string;
  title: string;
  badge?: string;
};

export default function MembershipCard({
  price,
  title,
  badge,
}: MembershipCardProps) {
  return (
    <View style={styles.container}>
      {badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
      <View style={styles.redSection}>
        <Ionicons name="infinite-outline" size={64} color="#111111" />
        <Text style={styles.unlimited}>Unlimited</Text>
      </View>
      <View style={styles.whiteSection}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    borderColor: "#EDEDED",
    borderWidth: 1,
  },
  badge: {
    backgroundColor: "#111111",
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.6,
    textAlign: "center",
  },
  redSection: {
    backgroundColor: "#D42B2B",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 18,
    paddingBottom: 14,
  },
  unlimited: {
    color: "#111111",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 6,
  },
  whiteSection: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  price: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
    color: "#555555",
    textAlign: "center",
  },
});
