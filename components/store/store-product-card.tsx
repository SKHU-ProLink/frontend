import CashIcon from "@/assets/images/cash.svg";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

type StoreProductCardProps = {
  Icon: React.FC<SvgProps>;
  categoryLabel: string;
  title: string;
  effectText: string;
  price: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const StoreProductCard = ({
  Icon,
  categoryLabel,
  title,
  effectText,
  price,
  onPress,
  style,
}: StoreProductCardProps) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.imageWrap}>
        <Icon width="54%" height="100%" />
      </View>

      <View style={styles.info}>
        <Text style={styles.category}>{categoryLabel}</Text>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.effect}>{effectText}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.priceWrap}>
          <CashIcon width={22} height={22} />
          <Text style={styles.price}>{price}</Text>
        </View>
        <Pressable onPress={onPress} style={styles.buyButton}>
          <Text style={styles.buyText}>구매</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexBasis: "47%",
    flexGrow: 0,
    minWidth: 140,
    padding: 14,
    borderRadius: 24,
    backgroundColor: "#FFF",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  imageWrap: {
    height: 92,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    gap: 2,
  },
  category: {
    color: "#B5B5B5",
    fontFamily: "Pretendard",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "600",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: 6,
  },
  title: {
    color: "#444",
    fontFamily: "Pretendard",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: "700",
  },
  effect: {
    color: "#B5B5B5",
    fontFamily: "Pretendard",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  priceWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  price: {
    color: "#D89300",
    fontFamily: "Pretendard",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
  },
  buyButton: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: "#36CC75",
  },
  buyText: {
    color: "#FFF",
    fontFamily: "Pretendard",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

export default StoreProductCard;
