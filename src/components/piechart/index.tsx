import { observer } from "mobx-react-lite";
import React, { FC, useMemo } from "react";
import { VictoryContainer, VictoryLabel, VictoryLegend, VictoryPie } from "victory";
import { FactoryData, PieChartData } from "../../types";

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
      labelComponent={<VictoryLabel style={{fontSize: 8}} />}
    />
  );
};

export default observer(PieChart);
