import { observer } from "mobx-react";
import React, { FC, SyntheticEvent } from "react";
import { VictoryBar, VictoryChart, VictoryContainer, VictoryGroup, VictoryLegend } from "victory";
import { FactoryAxisData, VictoryDatum } from "../../types";

type Props = {
  onClick: <T extends VictoryDatum>(_e: SyntheticEvent, data: T) => void;
  data: FactoryAxisData[][]
  colors: string[];
  barWidth?: number;
  barCount?: number;
  barGap?: number;
  height?: number;
}

const BarChart: FC<Props> = ({
  data,
  colors,
  onClick,
  barCount = 2,
  barWidth = 10,
  barGap = 10,
  height = 200,
}) => {
  return (
    <>
      <VictoryChart
        domainPadding={20}
        containerComponent={<VictoryContainer responsive />}
        height={height}
      >
        <VictoryGroup
          style={{
            labels: { fontSize: "10px" },
          }}
          colorScale={colors}
          offset={barGap}
        >
          {[...Array.from(Array(barCount).keys())].map((_, index) => (
            <VictoryBar
              key={index}
              labels={({ datum }) => datum.factory_id}
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
    </>
  )
}

export default observer(BarChart);
