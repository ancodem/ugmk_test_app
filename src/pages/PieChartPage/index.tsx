import { Col, Layout, Row, Space, Typography } from "antd";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { FACTORY_LETTER, MONTHS } from "../../constants";
import { Params } from "../../types";

const PieChartPage: FC = () => {
  const { factoryId, monthNumber } = useParams<Params>();

  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100%" }}>
      <Row style={{ marginTop: "20px" }}>
        <Col span={15} offset={7} flex="start">
          <Space style={{ width: "80%" }}>
            <Typography.Title level={3}>
              {`Статистика по продукции фабрики ${FACTORY_LETTER[Number(factoryId) - 1]} за ${MONTHS[Number(monthNumber) - 1]}`}
            </Typography.Title>
          </Space>
        </Col>
      </Row>
      <Row style={{ width: "80%", marginTop: "20px" }}>
        <Col span={20} offset={5} >
          <Layout.Content style={{ margin: "20px auto", minHeight: "80%", minWidth: "100%", border: "solid 1px black", padding: 0, borderRadius: "10px" }}>
            <div>hello</div>
            <Row style={{ position: "relative", top: "-25px" }}>
              <Col span={12} offset={7} >
              </Col>
            </Row>
          </Layout.Content>
        </Col>
      </Row>
    </Layout>
  )
}

export default PieChartPage;
