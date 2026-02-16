import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "./ui/components/Icon";

export default function ClassDetails() {
  const router = useRouter();
  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Entypo name="chevron-small-left" size={45} color="black" />
        </Pressable>
        <Text style={styles.headerText}>Class Details</Text>
      </View>
      <View style={styles.classDetails}>
        <Text style={styles.classDetailsTitle}>HotShop Flow</Text>
        <Text style={styles.classDetailsDateTime}>
          Monday, February 9, 2026 at 4:45 PM
        </Text>
        <Text style={styles.classDetailsInfo}>
          Kathy Geimlich {"\n"}Silverado / Hot Yoga Studio {"\n"}60 min.
        </Text>
      </View>
      <View style={styles.instructorInfo}>
        <View style={styles.icon}>
          <Icon />
        </View>
        <View style={styles.scheduleLink}>
          <Text style={styles.bold}>Kathy Gehmlich</Text>
          <Text>View Schedule & Profile</Text>
        </View>
        <View style={styles.chevron}>
          <Entypo name="chevron-small-right" size={30} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ED2D38",
    width: "100%",
    height: 140,
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "700",
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  classDetails: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderColor: "#EDEDED",
    borderWidth: 1,
    padding: 25,
  },
  classDetailsTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
  },
  classDetailsDateTime: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  classDetailsInfo: {
    marginBottom: 4,
  },
  instructorInfo: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderColor: "#EDEDED",
    borderWidth: 1,
    padding: 25,
    alignItems: "flex-start",
  },
  bold: {
    fontWeight: "800",
    fontSize: 15,
  },
  scheduleLink: {
    flexDirection: "column",
    flex: 2,
  },
  chevron: {
    flex: 3,
  },
  icon: {
    flex: 1,
  },
});
