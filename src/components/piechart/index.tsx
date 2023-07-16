import React, { FC } from "react";
import { VictoryLabel, VictoryPie } from "victory";
import { PieChartData } from "../../types";

type Props = {
  data: PieChartData[];
}

const colors = ["green", "orange", "red"];

const PieChart: FC<Props> = ({ data }) => {

  return (
    <VictoryPie
      data={data}
      colorScale={colors}
      labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
      height={250}
      width={300}
      labels={({ datum }) => datum.y}
      style={{
        labels: { fontSize: 15 },
      }}
    />
  );
};

export default PieChart;
