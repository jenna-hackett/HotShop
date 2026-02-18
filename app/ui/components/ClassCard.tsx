import { StyleSheet, Text, View } from "react-native";
import Icon from "./Icon";
import ReserveButton from "./ReserveButton";

type ClassProps = {
  time: string;
  date?: string;
  className: string;
  instructor: string;
  location: string;
  duration: string;
  reserved?: boolean;
  titleLines?: number;
  onPress?: () => void;
};

export default function ClassCard({
  time,
  date,
  className,
  instructor,
  location,
  duration,
  reserved = true,
  onPress,
}: ClassProps) {
  const buttonText = reserved ? "Reserved" : "Reserve";
  const bgColor = reserved ? "black" : "white";
  const textColor = reserved ? "white" : "black";

  return (
    <View style={styles.container}>
      <View style={styles.timeAndIcon}>
        <Text style={styles.bold} numberOfLines={1} ellipsizeMode="clip">
          {time}
        </Text>
        <Icon />
      </View>
      <View style={styles.info}>
        {date ? <Text style={[styles.bold, styles.date]}>{date}</Text> : null}

        <Text
          style={[styles.bold, styles.title]}
          numberOfLines={2}
          ellipsizeMode="clip"
        >
          {className}
        </Text>
        <Text style={styles.semibold}>{instructor}</Text>
        <Text style={styles.semibold}>{location}</Text>
        <Text style={styles.grey}>{duration}</Text>
      </View>
      <View style={styles.button}>
        <ReserveButton
          text={buttonText}
          bgColor={bgColor}
          textColor={textColor}
          onPress={onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderColor: "#EDEDED",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 22,
    position: "relative",
    minHeight: 120,
  },
  timeAndIcon: {
    flexDirection: "column",
    marginRight: 16,
    alignItems: "center",
    width: 68,
  },
  date: {
    marginBottom: 4,
  },
  bold: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },
  title: {
    lineHeight: 20,
    flexWrap: "wrap",
  },
  semibold: {
    fontWeight: "400",
    marginBottom: 4,
  },
  grey: {
    fontSize: 12,
    color: "#969696",
    marginBottom: 4,
  },
  info: {
    flexDirection: "column",
    lineHeight: 20,
    marginRight: 90,
  },
  button: {
    position: "absolute",
    right: 15,
    top: "50%",
    marginTop: 18,
  },
});
