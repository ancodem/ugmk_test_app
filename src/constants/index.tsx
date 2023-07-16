import { Product } from "../types";

export const OPTIONS: { value: Product; label: string }[] = [
  { value: "product1", label: "Продукт 1" },
  { value: "product2", label: "Продукт 2" },
  { value: "product3", label: "Продукт 3" },
];

export const BAR = {
  WIDTH: 10,
  HEIGHT: 250,
  GAP: 13,
  COLORS: ["red", "blue"],
  COUNT: 2,
}

export const FACTORY_LETTER = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"];

export const MONTHS = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек"
] as const;
