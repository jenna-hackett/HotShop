import { Text, View } from "react-native";
import ReserveButton from "../ui/components/ReserveButton";

export default function Index() {
  return (
    <View>
      <Text>Welcome page</Text>
      <ReserveButton text="Reserved" bgColor="black" textColor="white" />
      <ReserveButton text="Reserve" bgColor="white" textColor="black" />
    </View>
  );
}
