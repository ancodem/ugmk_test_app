import { Skeleton, Spin } from "antd";
import { lazy, ReactNode, Suspense } from "react";
import Loader from "../components/Loader";
import { Routes } from "../enums";
import BarChartPage from "../pages/Barchart";

const PageNotFound = lazy(
  () =>
    import(
      /* webpackChunkName: "PieChartPage" */
      "../pages/PieChartPage"
    )
);

const PieChartPage = lazy(
  () =>
    import(
      /* webpackChunkName: "PieChartPage" */
      "../pages/PieChartPage"
    )
);

type Route = {
  path: Routes;
  element: ReactNode;
};

const STATIS: Route[] = [
  {
    path: Routes.BarChart,
    element: <BarChartPage />,
  },
  {
    path: Routes.PieChart,
    element: (
      <Suspense fallback={<Loader />}>
        <PieChartPage />
      </Suspense>
    ),
  },
  {
    path: Routes.NotFound,
    element: (
      <Suspense fallback={<Loader />}>
        <PageNotFound />
      </Suspense>
    ),
  },
];

export default function useRoutes(): Route[] {
  /* in case there are more routes that demand dynamic info, they can be put here*/
  return STATIS;
}
