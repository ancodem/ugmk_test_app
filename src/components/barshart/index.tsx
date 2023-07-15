import React, { FC } from "react";
import { VictoryBar, VictoryChart, VictoryContainer, VictoryGroup, VictoryLabel, VictoryTheme } from "victory";

type Props = {
  categories: string[];
  onClick: () => void;
  // chartBars: []
  barCount: number;
  colors: string[];
  barWidth: number;
  barGap: number;
}

const data = [
  { x: 1, y: 2 }, { x: 2, y: 1 },
  { x: 2, y: 2 }, { x: 5, y: 1 },
  { x: 3, y: 2 }, { x: 5, y: 1 },
  { x: 9, y: 2 }, { x: 10, y: 1 },
  { x: 11, y: 2 }, { x: 12, y: 1 },
];

const BarChart: FC<Props> = ({
  categories,
  // chartBars,
  colors,
  barCount = 2,
  barWidth = 10,
  barGap = 10,
}) => {
  return (
    <VictoryChart
      domainPadding={20}
      containerComponent={<VictoryContainer responsive />}
    >
      <VictoryGroup
        colorScale={colors}
        offset={barGap}>
        {Array.from({ length: barCount }, (_, index) => index + 1).map((c, i) => (
          <VictoryBar
            barWidth={barWidth}
            data={data}
          />
        ))
        }
      </VictoryGroup>
    </VictoryChart>
  )
}

export default BarChart;
