import { observer } from "mobx-react";
import React, { FC, SyntheticEvent } from "react";
import { VictoryBar, VictoryChart, VictoryContainer, VictoryGroup, VictoryLabel, VictoryTheme } from "victory";
import { FactoryAxisData, VictoryDatum } from "../../types";

type Props = {
  categories: string[];
  onClick: <T extends VictoryDatum>(_e: SyntheticEvent, data: T) => void;
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
  onClick,
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
        {Array.from({ length: barCount }, (_, index) => index + 1).map((_, index) => (
          <VictoryBar
            labels={({ datum }) => datum.factory_id}
            key={index}
            barWidth={barWidth}
            data={data[index]}
            style={{
              data: {
                cursor: "pointer"
              }
            }}
            events={[
              {
                childName: "data",
                target: "data",
                eventHandlers: {
                  onClick: onClick,
                },
              },
            ]}
          />
        ))}
      </VictoryGroup>
    </VictoryChart>
  )
}

export default observer(BarChart);
