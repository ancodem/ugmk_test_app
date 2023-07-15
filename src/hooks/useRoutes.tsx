import { ReactNode } from "react";
import BarChartPage from "../pages/Barchart";
import PieChartPage from "../pages/PieChartPage";

type Route = {
  path: string;
  element: ReactNode;
};

export default function useRoutes(): Route[] {
  return [
    {
      path: "/",
      element: <BarChartPage />,
    },
    {
      path: "/details/:factoryId/:monthNumber",
      element: <PieChartPage />,
    },
  ];
}
