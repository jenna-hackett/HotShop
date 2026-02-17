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
};

export default function ClassCard({
  time,
  date,
  className,
  instructor,
  location,
  duration,
  reserved = true,
}: ClassProps) {
  const buttonText = reserved ? "Reserved" : "Reserve";
  const bgColor = reserved ? "black" : "white";
  const textColor = reserved ? "white" : "black";

  return (
    <View style={styles.container}>
      <View style={styles.timeAndIcon}>
        <Text style={styles.bold}>{time}</Text>
        <Icon />
      </View>
      <View style={styles.info}>
        <Text style={styles.bold}>{date}</Text>
        <Text style={styles.bold}>{className}</Text>
        <Text style={styles.semibold}>{instructor}</Text>
        <Text style={styles.semibold}>{location}</Text>
        <Text style={styles.grey}>{duration}</Text>
      </View>
      <View style={styles.button}>
        <ReserveButton
          text={buttonText}
          bgColor={bgColor}
          textColor={textColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderColor: "#EDEDED",
    borderWidth: 1,
    padding: 15,
  },
  timeAndIcon: {
    flexDirection: "column",
    marginRight: 10,
  },
  bold: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
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
  },
  button: {
    marginTop: 75,
  },
});
