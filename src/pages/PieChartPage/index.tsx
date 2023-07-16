import { Col, Layout, Row, Space, Typography } from "antd";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FACTORY_LETTER, MONTHS } from "../../constants";
import { Params } from "../../types";
import PieChart from "../../components/piechart"
import Store from "../../stores/Store";
import { Observer } from "mobx-react";
import { VictoryLegend } from "victory";

const PieChartPage: FC = () => {
  const { factoryId, monthNumber } = useParams<Params>();
  const { getPieChartFor, fetchInfo } = Store;

  useEffect(() => {
    fetchInfo();
  });

  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100%" }}>
      <Row style={{ marginTop: "20px" }}>
        <Col span={15} offset={7} flex="start">
          <Typography.Title level={3}>
            {`Статистика по продукции фабрики ${FACTORY_LETTER[Number(factoryId) - 1]} за ${MONTHS[Number(monthNumber) - 1]}`}
          </Typography.Title>
        </Col>
      </Row>
      <Row style={{ width: "80%", marginTop: "20px" }}>
        <Col span={20} offset={5} >
          <Layout.Content style={{ margin: "20px auto", minHeight: "80%", minWidth: "100%", padding: 0 }}>
            <Observer>
              {() => (
                <PieChart data={getPieChartFor(Number(factoryId), Number(monthNumber))} />
              )}
            </Observer>
            <Row style={{ position: "relative", top: "-25px" }}>
              <Col span={12} offset={7} >
                <VictoryLegend
                  orientation="horizontal"
                  height={40}
                  gutter={10}
                  style={{ labels: { fontSize: 20 } }}
                  colorScale={["green", "orange", "red"]}
                  data={[{ name: "Продукт 1", symbol: { type: "square" } }, { name: "Продукт 2", symbol: { type: "square" } }, { name: "Продукт 3", symbol: { type: "square" } }]}
                />
              </Col>
            </Row>
          </Layout.Content>
        </Col>
      </Row>
    </Layout>
  )
}

export default PieChartPage;
