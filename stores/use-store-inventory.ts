import { STORE_PRODUCTS } from "@/constants/store-products";
import { create } from "zustand";

type PurchaseResult =
  | { success: true }
  | { success: false; reason: "not-enough-cash" | "not-found" };

type StoreInventoryState = {
  cash: number;
  inventory: Record<string, number>;
  purchaseProduct: (productId: string) => PurchaseResult;
};

export const useStoreInventory = create<StoreInventoryState>((set, get) => ({
  cash: 1244,
  inventory: {},
  purchaseProduct: (productId) => {
    const product = STORE_PRODUCTS.find((item) => item.id === productId);

    if (!product) {
      return { success: false, reason: "not-found" };
    }

    if (get().cash < product.price) {
      return { success: false, reason: "not-enough-cash" };
    }

    set((state) => ({
      cash: state.cash - product.price,
      inventory: {
        ...state.inventory,
        [productId]: (state.inventory[productId] ?? 0) + 1,
      },
    }));

    return { success: true };
  },
}));
