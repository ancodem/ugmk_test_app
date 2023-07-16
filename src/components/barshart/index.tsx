import { observer } from "mobx-react";
import React, { FC, SyntheticEvent } from "react";
import { VictoryBar, VictoryChart, VictoryContainer, VictoryGroup } from "victory";
import { BAR } from "../../constants";
import { FactoryAxisData, VictoryDatum } from "../../types";

type Props = {
  /**
   * @param event - событие клика
   *
   * @param data - содержит внутреннее состояние data чарта
   * действие по клику на колонку
   */
  onClick: <T extends VictoryDatum>(_e: SyntheticEvent, data: T) => void;
  /** данные для построения чарта {x, y, factoryId} */
  data: FactoryAxisData[][]
  /** цвета для колонок */
  colors?: string[];
  /** ширина колонок */
  barWidth?: number;
  /** количество колонок на единицу х координаты */
  barCount?: number;
  /** расстояние между колонками по оси х*/
  barGap?: number;
  /** высота всего чарта */
  height?: number;
}

const BarChart: FC<Props> = ({
  data,
  onClick,
  colors = BAR.COLORS,
  barCount = BAR.COUNT,
  barWidth = BAR.WIDTH,
  barGap = BAR.GAP,
  height = BAR.HEIGHT,
}) => {
  return (
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
  )
}

export default observer(BarChart);
