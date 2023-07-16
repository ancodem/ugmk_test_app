import { ReactNode } from "react";
import { Routes } from "../enums";
import BarChartPage from "../pages/Barchart";
import PageNotFound from "../pages/NotFound";
import PieChartPage from "../pages/PieChartPage";

type Route = {
  path: string;
  element: ReactNode;
};

export default function useRoutes(): Route[] {
  return [
    {
      path: Routes.BarChart,
      element: <BarChartPage />,
    },
    {
      path: Routes.PieChart,
      element: <PieChartPage />,
    },
    {
      path: Routes.NotFound,
      element: <PageNotFound />,
    },
  ];
}
