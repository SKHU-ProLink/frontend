import CashBalance from "@/components/store/cash-balance";
import CategoryTabs, { StoreCategory } from "@/components/store/category-tabs";
import StoreProductCard from "@/components/store/store-product-card";
import { STORE_PRODUCTS } from "@/constants/store-products";
import { useStoreInventory } from "@/stores/use-store-inventory";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const handleBack = () => {
  if (router.canGoBack()) {
    router.back();
    return;
  }

  router.replace("/(tabs)/home");
};

export default function StoreScreen() {
  const [selectedCategory, setSelectedCategory] = useState<StoreCategory>("food");
  const cash = useStoreInventory((state) => state.cash);
  const purchaseProduct = useStoreInventory((state) => state.purchaseProduct);

  const products = useMemo(() => {
    if (selectedCategory === "all") {
      return STORE_PRODUCTS;
    }

    return STORE_PRODUCTS.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handlePurchase = (productId: string, title: string) => {
    const result = purchaseProduct(productId);

    if (!result.success) {
      Alert.alert(result.reason === "not-enough-cash" ? "캐시가 부족해요" : "상품을 찾을 수 없어요");
      return;
    }

    Alert.alert(`${title} 구매 완료`);
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" backgroundColor="#D8F7FF" />
      <LinearGradient
        colors={["#D8F7FF", "#E9FFE5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.hero}
      >
        <SafeAreaView edges={["top"]}>
          <View style={styles.heroContent}>
            <View style={styles.header}>
              <View style={styles.titleGroup}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                  <MaterialIcons name="chevron-left" size={30} color="#111827" />
                </Pressable>
                <Text style={styles.title}>상점</Text>
              </View>
              <CashBalance amount={cash} />
            </View>
            <CategoryTabs
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.productGrid}>
          {products.map((product) => (
            <StoreProductCard
              key={product.id}
              Icon={product.Icon}
              categoryLabel={product.categoryLabel}
              title={product.title}
              effectText={product.effectText}
              price={product.price}
              onPress={() => handlePurchase(product.id, product.title)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  hero: {
    backgroundColor: "#D8F7FF",
  },
  heroContent: {
    gap: 18,
    paddingHorizontal: 28,
    paddingTop: 18,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  titleGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  backButton: {
    width: 34,
    height: 34,
    marginLeft: -10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#000",
    fontFamily: "Pretendard",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "700",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 12,
    rowGap: 24,
  },
});
