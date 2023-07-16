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
      height={250}
      width={300}
      style={{
        labels: { fontSize: "15px" },
        data: { fontSize: "15px" }
      }}
      labels={({ datum }) => datum.y}
      data={data}
      colorScale={colors}
      labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
    />
  );
};

export default PieChart;
