import { MONTHS } from "../constants";

export type Product = `product${1 | 2 | 3}` | "all";

export type Month = typeof MONTHS[number];

export enum Status {
  Full = "Filled",
  Empty = "Empty"
}

export type PieChartData = { y: number };

export type Params = {
  monthNumber: `${number}`;
  factoryId: `${number}`;
}

export type VictoryDatum = {
  datum: {
    xName: Month;
    factoryId: number
  }
};

export type FactoryAxisData = {
  y: number;
  x: Month;
  factoryId: number;
}

export type FactoryData = {
  id: number;

  factory_id: number;
  date: string;
  product1: number;
  product2: number;
  product3: number;
};
