import CashIcon from "@/assets/images/cash.svg";
import { StyleSheet, Text, View } from "react-native";

type CashBalanceProps = {
  amount: number;
};

const CashBalance = ({ amount }: CashBalanceProps) => {
  return (
    <View style={styles.container}>
      <CashIcon width={34} height={34} />
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingLeft: 4,
    paddingRight: 14,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: "#FFF",
  },
  amount: {
    color: "#444",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

export default CashBalance;
