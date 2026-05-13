import { StoreCategory } from "@/components/store/category-tabs";
import { STORE_PRODUCTS } from "@/constants/store-products";
import { useStoreInventory } from "@/stores/use-store-inventory";
import { useMemo, useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import InventoryItemCard from "./inventory-item-card";

type InventoryBottomSheetProps = {
  visible: boolean;
  onClose: () => void;
};

const TABS: { label: string; value: StoreCategory }[] = [
  { label: "전체", value: "all" },
  { label: "비료", value: "fertilizer" },
  { label: "영양제", value: "food" },
];

const InventoryBottomSheet = ({ visible, onClose }: InventoryBottomSheetProps) => {
  const [selectedCategory, setSelectedCategory] = useState<StoreCategory>("all");
  const inventory = useStoreInventory((state) => state.inventory);

  const items = useMemo(() => {
    return STORE_PRODUCTS
      .filter((product) => (inventory[product.id] ?? 0) > 0)
      .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
      .map((product) => ({
        ...product,
        count: inventory[product.id] ?? 0,
      }));
  }, [inventory, selectedCategory]);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalRoot}>
        <Pressable style={styles.dimmed} onPress={onClose} />
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <View style={styles.tabList}>
            {TABS.map((tab) => {
              const selected = tab.value === selectedCategory;

              return (
                <Pressable
                  key={tab.value}
                  onPress={() => setSelectedCategory(tab.value)}
                  style={[styles.tab, selected && styles.selectedTab]}
                >
                  <Text style={[styles.tabText, selected && styles.selectedTabText]}>
                    {tab.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {items.length > 0 ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.itemList}
            >
              {items.map((item) => (
                <InventoryItemCard
                  key={item.id}
                  Icon={item.Icon}
                  title={item.title}
                  count={item.count}
                />
              ))}
            </ScrollView>
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>보유한 아이템이 없어요</Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    justifyContent: "flex-end",
  },
  dimmed: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
  sheet: {
    maxHeight: "34%",
    paddingTop: 10,
    paddingBottom: 22,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#FFF",
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 12,
  },
  handle: {
    alignSelf: "center",
    width: 44,
    height: 5,
    borderRadius: 999,
    backgroundColor: "#E5E5E5",
  },
  tabList: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 20,
  },
  tab: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#FAFAFA",
  },
  selectedTab: {
    backgroundColor: "#36CC75",
  },
  tabText: {
    color: "#444",
    fontFamily: "Pretendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  selectedTabText: {
    color: "#FFF",
  },
  itemList: {
    gap: 22,
    paddingHorizontal: 24,
    paddingBottom: 4,
  },
  emptyContainer: {
    minHeight: 96,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "#B5B5B5",
    fontFamily: "Pretendard",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
  },
});

export default InventoryBottomSheet;
