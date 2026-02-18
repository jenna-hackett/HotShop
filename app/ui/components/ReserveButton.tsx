import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  text: string;
  textColor: string;
  bgColor: string;
  width?: number;
  onPress?: () => void;
};

export default function ReserveButton({
  text,
  textColor,
  bgColor,
  width,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
        },
        width ? { width } : null,
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 80,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
