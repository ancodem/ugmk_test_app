import { Col, Layout, Row, Typography } from "antd";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100%" }}>
      <Row style={{ width: "80%", marginTop: "20px" }}>
        <Col span={16} offset={6} >
          <Layout.Content style={{ margin: "0px auto", minWidth: "100%", padding: 0 }}>
            <Row>
              <Col span={24} offset={5} >
                <Typography.Title level={1}>
                  Страница не найдена :(
                </Typography.Title>
              </Col>
            </Row>
          </Layout.Content>
        </Col>
      </Row>
    </Layout>
  )
}

export default PageNotFound;
