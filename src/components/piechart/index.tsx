import React, { FC } from "react";
import { VictoryLabel, VictoryPie } from "victory";
import { PIE_CHART_COLORS } from "../../constants";
import { PieChartData } from "../../types";

type Props = {
  data: PieChartData[];
};

const PieChart: FC<Props> = ({ data }) => {
  return (
    <VictoryPie
      data={data}
      colorScale={PIE_CHART_COLORS}
      labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
      height={250}
      width={350}
      labels={({ datum }) => datum.y}
      style={{
        labels: { fontSize: 15 },
      }}
    />
  );
};

export default PieChart;
