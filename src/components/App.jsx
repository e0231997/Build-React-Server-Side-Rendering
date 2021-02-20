import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default () => {
  const env = __isClientSide__ ? "client" :"server";
  return (
    <>
      <div>Hello from {env}!</div>
      <Card
        cover={<img src="/static/mars-rover.jpg" alt="mars" />}
      >
        <Meta
          title="Mission Name: Mars 2020"
          description="Rover Name: Perseverance"
        />
      </Card>
    </>
  );
};
