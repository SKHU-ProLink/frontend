import FertilizerAIcon from "@/assets/images/fertilizer-a.svg";
import FertilizerBIcon from "@/assets/images/fertilizer-b.svg";
import FertilizerCIcon from "@/assets/images/fertilizer-c.svg";
import FoodAIcon from "@/assets/images/food-a.svg";
import FoodBIcon from "@/assets/images/food-b.svg";
import FoodCIcon from "@/assets/images/food-c.svg";
import CashBalance from "@/components/store/cash-balance";
import CategoryTabs, { StoreCategory } from "@/components/store/category-tabs";
import StoreProductCard from "@/components/store/store-product-card";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgProps } from "react-native-svg";

type StoreProduct = {
  id: string;
  category: Exclude<StoreCategory, "all">;
  categoryLabel: string;
  title: string;
  effectText: string;
  price: number;
  Icon: React.FC<SvgProps>;
};

const PRODUCTS: StoreProduct[] = [
  {
    id: "fertilizer-a",
    category: "fertilizer",
    categoryLabel: "비료",
    title: "A급 비료",
    effectText: "XP + 30",
    price: 80,
    Icon: FertilizerAIcon,
  },
  {
    id: "fertilizer-b",
    category: "fertilizer",
    categoryLabel: "비료",
    title: "B급 비료",
    effectText: "XP + 30",
    price: 80,
    Icon: FertilizerBIcon,
  },
  {
    id: "fertilizer-c",
    category: "fertilizer",
    categoryLabel: "비료",
    title: "C급 비료",
    effectText: "XP + 30",
    price: 80,
    Icon: FertilizerCIcon,
  },
  {
    id: "food-a",
    category: "food",
    categoryLabel: "영양제",
    title: "A급 영양제",
    effectText: "HP + 30",
    price: 80,
    Icon: FoodAIcon,
  },
  {
    id: "food-b",
    category: "food",
    categoryLabel: "영양제",
    title: "B급 영양제",
    effectText: "HP + 30",
    price: 80,
    Icon: FoodBIcon,
  },
  {
    id: "food-c",
    category: "food",
    categoryLabel: "영양제",
    title: "C급 영양제",
    effectText: "HP + 30",
    price: 80,
    Icon: FoodCIcon,
  },
];

const handleBack = () => {
  if (router.canGoBack()) {
    router.back();
    return;
  }

  router.replace("/(tabs)/home");
};

export default function StoreScreen() {
  const [selectedCategory, setSelectedCategory] = useState<StoreCategory>("food");

  const products = useMemo(() => {
    if (selectedCategory === "all") {
      return PRODUCTS;
    }

    return PRODUCTS.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

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
              <CashBalance amount={1244} />
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
              onPress={() => Alert.alert(`${product.title} 구매`)}
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
