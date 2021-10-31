import React from "react";
import styled from "styled-components";
import Section from "./Section";

export default function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImg="model-y.jpg"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImg="model-3.jpg"
      />

      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels"
        description="Money-back guarantee"
        leftBtnText="Order now"
        rightBtnText="Learn More"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="Order now"
        rightBtnText="Learn More"
        backgroundImg="solar-roof.jpg"
      />

      <Section
        title="Accessories"
        description=""
        leftBtnText="Shop now"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
