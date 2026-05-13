import { Pressable, StyleSheet, Text, View } from "react-native";

export type StoreCategory = "all" | "fertilizer" | "food";

type CategoryTabsProps = {
  selectedCategory: StoreCategory;
  onSelectCategory: (category: StoreCategory) => void;
};

const CATEGORIES: { label: string; value: StoreCategory }[] = [
  { label: "전체", value: "all" },
  { label: "비료", value: "fertilizer" },
  { label: "영양제", value: "food" },
];

const CategoryTabs = ({
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) => {
  return (
    <View style={styles.container}>
      {CATEGORIES.map((category) => {
        const isSelected = category.value === selectedCategory;

        return (
          <Pressable
            key={category.value}
            onPress={() => onSelectCategory(category.value)}
            style={[styles.tab, isSelected && styles.selectedTab]}
          >
            <Text style={[styles.tabText, isSelected && styles.selectedText]}>
              {category.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  tab: {
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#FFF",
  },
  selectedTab: {
    backgroundColor: "#36CC75",
  },
  tabText: {
    color: "#444",
    fontFamily: "Pretendard",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
  },
  selectedText: {
    color: "#FFF",
  },
});

export default CategoryTabs;
