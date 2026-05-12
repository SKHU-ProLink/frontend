import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

type ImageActionCardProps = {
  Icon: React.FC<SvgProps>;
  title: string;
  subtitle?: string;
  onPress: () => void;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
};

const ImageActionCard = ({
  Icon,
  title,
  subtitle,
  onPress,
  iconSize = 52,
  style,
}: ImageActionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Icon width={iconSize} height={iconSize} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  pressed: {
    opacity: 0.75,
  },
  textContainer: {
    alignItems: "center",
    gap: 4,
  },
  title: {
    color: "#444",
    fontFamily: "Pretendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
  },
  subtitle: {
    color: "#B5B5B5",
    fontFamily: "Pretendard",
    fontSize: 9,
    fontStyle: "normal",
    fontWeight: "600",
  },
});

export default ImageActionCard;
