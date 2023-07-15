import { observer } from "mobx-react";
import React, { FC } from "react";
import { VictoryBar, VictoryChart, VictoryContainer, VictoryGroup, VictoryLabel, VictoryTheme } from "victory";
import { FactoryAxisData } from "../../types";

type Props = {
  categories: string[];
  onClick: () => void;
  data: FactoryAxisData[][]
  barCount: number;
  colors: string[];
  barWidth: number;
  barGap: number;
}

const BarChart: FC<Props> = ({
  categories,
  data,
  colors,
  barCount = 2,
  barWidth = 10,
  barGap = 10,
}) => {

  console.log(data)
  return (
    <VictoryChart
      domainPadding={20}
      containerComponent={<VictoryContainer responsive />}
    >
      <VictoryGroup
        colorScale={colors}
        offset={barGap}>
        {Array.from({ length: barCount }, (_, index) => index + 1).map((_, index) => (
          <VictoryBar
            key={index}
            barWidth={barWidth}
            data={data[index]}
          />
        ))}
      </VictoryGroup>
    </VictoryChart>
  )
}

export default observer(BarChart);
