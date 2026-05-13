import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

type IconTextPillProps = {
  Icon: React.FC<SvgProps>;
  text: string;
  iconSize?: number;
  style?: ViewStyle;
};

const IconTextPill = ({
  Icon,
  text,
  iconSize = 48,
  style,
}: IconTextPillProps) => {
  return (
    <View style={[styles.container, style]}>
      <Icon width={iconSize} height={iconSize} style={styles.icon} />
      <View style={[styles.textContainer, { minHeight: iconSize * 0.7}]}>
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    zIndex: 1,
  },
  textContainer: {
    marginLeft: -10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    backgroundColor: "#A6A6A6",
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
  },
  text: {
    color: "#FFF",
    fontFamily: "Pretendard",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

export default IconTextPill;
