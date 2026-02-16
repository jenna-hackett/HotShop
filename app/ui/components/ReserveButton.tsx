import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  text: string;
  textColor: string;
  bgColor: string;
};

export default function ReserveButton({
  text,
  textColor,
  bgColor,
}: ButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
        },
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
    borderWidth: 1,
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
