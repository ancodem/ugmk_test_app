import { Product } from "../types";

export default function getStoredSelection(): Product {
  const stored = localStorage.getItem("selection") as Product;
  return stored || "product1";
}
