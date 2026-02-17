import { StyleSheet, Text, View } from "react-native";

type StatProps = {
  number?: string;
  subtitle: string;
  nav: string;
};

export default function StatCard({ number, subtitle, nav }: StatProps) {
  return (
    <View>
      <View style={styles.card}>
        {number && <Text style={styles.number}>{number}</Text>}
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={[styles.nav, !number && { paddingTop: 30 }]}>{nav}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    height: 140,
    width: 165,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    padding: 5,
  },
  number: {
    fontSize: 40,
    fontWeight: "800",
  },
  subtitle: {
    fontWeight: "700",
    textAlign: "center",
  },
  nav: {
    color: "#969696",
  },
});
