import { Col, Layout, Row, Select, Space, Typography } from "antd";
import { observer, Observer } from "mobx-react";
import React, { FC, SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VictoryLegend } from "victory";
import BarChart from "../../components/barshart";
import { BAR, MONTHS, OPTIONS } from "../../constants";
import Store from "../../stores/Store";
import { Product,  VictoryDatum } from "../../types";
import { getStoredSelection } from "../../utils";

const { Content } = Layout;

const BarChartPage: FC = () => {
  const navigate = useNavigate();

  const [selection, setSelection] = useState<Product>(getStoredSelection());
  const { fetchInfo, getSortedBy } = Store;

  useEffect(() => {
      fetchInfo();
  });

  const handleChange = useCallback((value: Product) => {
    setSelection(value);
    localStorage.setItem("selection", value);
  }, []);

  const getData = useCallback((selection: Product) => {
    let count = 1;
    const arr = [];

    while (count <= BAR.COUNT) {
      arr.push(getSortedBy(selection, count));
      count++;
    }

    return arr;
  }, [getSortedBy]);

  const handleBarClick = useCallback(
    <T extends VictoryDatum>(_e: SyntheticEvent, { datum }: T) => {
      if (!datum) return;

      const { factoryId, _xName: month } = datum;
      const monthAsNumber = MONTHS.findIndex(elem => elem === month) + 1;

      navigate(`/details/${factoryId}/${monthAsNumber}`);
    }, [navigate]);

  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100%" }}>
      <Row style={{ marginTop: "20px" }}>
        <Col span={20} offset={4} flex="start">
          <Space style={{ border: "solid 1px black", padding: "10px", borderRadius: "10px", width: "80%" }}>
            <Typography> Фильтр по типу продукции </Typography>
            <Select
              defaultValue={selection}
              onChange={handleChange}
              options={OPTIONS}
            />
          </Space>
        </Col>
      </Row>
      <Row style={{ width: "80%", marginTop: "20px" }}>
        <Col span={20} offset={5} >
          <Content style={{ margin: "20px auto", minHeight: "80%", minWidth: "100%", border: "solid 1px black", padding: 0, borderRadius: "10px" }}>
            <Observer>
              {() => (
                <BarChart
                  onClick={handleBarClick}
                  data={getData(selection)}
                  height={BAR.HEIGHT}
                  barWidth={BAR.WIDTH}
                  barCount={BAR.COUNT}
                  barGap={BAR.GAP}
                  colors={BAR.COLORS}
                />
              )}
            </Observer>
            <Row style={{ position: "relative", top: "-25px" }}>
              <Col span={12} offset={7} >
                <VictoryLegend
                  orientation="horizontal"
                  height={40}
                  gutter={50}
                  style={{ labels: { fontSize: 25 } }}
                  colorScale={BAR.COLORS}
                  data={[{ name: "Фабрика А", symbol: { type: "square" } }, { name: "Фабрика Б", symbol: { type: "square" } }]}
                />
              </Col>
            </Row>
          </Content>
        </Col>
      </Row>
    </Layout>
  )
}

export default observer(BarChartPage);
