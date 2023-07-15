import { MONTHS } from "../constants";

export type Product = `product${1 | 2 | 3}`;

export type FactoryAxisData = {
  y: number,
  x: typeof MONTHS[number],
}

export type FactoryData = {
  id: number;

  factory_id: number;
  date: string;
  product1: number;
  product2: number;
  product3: number;
};

