import { StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

type InventoryItemCardProps = {
  Icon: React.FC<SvgProps>;
  title: string;
  count: number;
};

const InventoryItemCard = ({ Icon, title, count }: InventoryItemCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrap}>
        <Icon width="100%" height="100%" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 76,
    alignItems: "center",
    gap: 6,
  },
  imageWrap: {
    width: "100%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: 3,
    left: 0,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#EF4452",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#FFF",
    fontFamily: "Pretendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  title: {
    color: "#000",
    fontFamily: "Pretendard",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

export default InventoryItemCard;
