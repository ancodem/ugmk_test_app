import { Col, Layout, Row, Select, Space, Typography } from "antd";
import React, { FC, useCallback, useState } from "react";
import BarChart from "../../components/barshart";
import { BAR, OPTIONS } from "../../constants";
import { Product } from "../../types";
import { getStoredSelection } from "../../utils";

const { Content } = Layout;

const BarChartPage: FC = () => {
  const [selection, setSelection] = useState<Product>(getStoredSelection());

  const handleChange = useCallback((value: Product) => {
    setSelection(value);
    localStorage.setItem("selection", value);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row style={{ marginTop: "20px" }}>
        <Col span={20} offset={4} flex="start">
          <Space style={{ border: "solid 1px black", padding: "10px", borderRadius: "10px", width: "80%" }}>
            <Typography>
              Фильтр по типу продукции
            </Typography>
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
          <Content style={{ margin: "10px auto", minHeight: "80%", minWidth: "100%", border: "solid 1px black", padding: "10px", borderRadius: "10px" }}>
            <BarChart
              barWidth={BAR.WIDTH}
              barCount={BAR.COUNT}
              barGap={BAR.GAP}
              colors={BAR.COLORS}
              categories={["jan", "feb"]}
              onClick={() => alert("click")}
            />
          </Content>
        </Col>
      </Row>
    </Layout>
  )
}

export default BarChartPage;
