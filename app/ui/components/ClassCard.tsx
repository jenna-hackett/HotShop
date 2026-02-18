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
};

export default function ClassCard({
  time,
  date,
  className,
  instructor,
  location,
  duration,
  reserved = true,
  titleLines = 1,
}: ClassProps) {
  const buttonText = reserved ? "Reserved" : "Reserve";
  const bgColor = reserved ? "black" : "white";
  const textColor = reserved ? "white" : "black";

  const isSingleLineTitle = titleLines === 1;

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
          numberOfLines={titleLines}
          ellipsizeMode={isSingleLineTitle ? "clip" : "tail"}
          adjustsFontSizeToFit={isSingleLineTitle}
          minimumFontScale={0.9}
          allowFontScaling
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
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderColor: "#EDEDED",
    borderWidth: 1,
    padding: 15,
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
    flexShrink: 1,
    lineHeight: 20,
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
    flex: 1,
    marginRight: 12,
  },
  button: {
    alignSelf: "center",
    marginLeft: "auto",
    marginTop: 35,
  },
});
