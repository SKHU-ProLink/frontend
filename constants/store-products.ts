import FertilizerAIcon from "@/assets/images/fertilizer-a.svg";
import FertilizerBIcon from "@/assets/images/fertilizer-b.svg";
import FertilizerCIcon from "@/assets/images/fertilizer-c.svg";
import FoodAIcon from "@/assets/images/food-a.svg";
import FoodBIcon from "@/assets/images/food-b.svg";
import FoodCIcon from "@/assets/images/food-c.svg";
import { StoreCategory } from "@/components/store/category-tabs";
import { SvgProps } from "react-native-svg";

export type StoreProduct = {
  id: string;
  category: Exclude<StoreCategory, "all">;
  categoryLabel: string;
  title: string;
  effectText: string;
  price: number;
  Icon: React.FC<SvgProps>;
};

export const STORE_PRODUCTS: StoreProduct[] = [
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
