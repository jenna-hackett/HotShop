import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import ClassCard from "../ui/components/ClassCard";

export default function Schedule() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Change this page to show Jenna screen</Text>
      <Pressable onPress={() => router.push("/classDetails")}>
        <ClassCard
          time="10:20 AM"
          date="Wednesday, Feb 11"
          className="HotShop Spin & Sculpt (45/30)"
          instructor="Sammi Muys"
          location="Silverado"
          duration="75 min."
        />
      </Pressable>
    </View>
  );
}
