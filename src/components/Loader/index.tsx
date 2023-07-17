import { Spin } from "antd";
import React, { FC } from "react";

const Loader: FC = () => (
  <Spin
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
    size="large"
  />
);

export default Loader;
