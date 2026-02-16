import { Image, StyleSheet, View } from "react-native";

export default function Icon() {
  return (
    <View>
      <Image
        style={styles.icon}
        source={require("../../../assets/images/HotShopIcon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 55,
    width: 55,
  },
});
