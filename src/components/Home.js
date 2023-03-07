import React from "react";
import Section from "./Section";

function Home() {
  document.title = "Electric Cars, Solar and Clean Energy | Tesla";
  return (
    <div>
      <Section
        title="Model 3"
        Img="/images/model-3.jpg"
        description="Leasing starting at $349/mo"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
        downArrow="/images/down-arrow.svg"
      />

      <Section
        title="Model Y"
        Img="/images/model-y.jpg"
        description=""
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
        id="section2"
      />

      <Section
        title="Model S"
        Img="/images/model-s.jpg"
        description="Schedule a Demo Drive"
        leftButtonText="Custom Order"
        rightButtonText="View Inventory"
      />

      <Section
        title="Model X"
        Img="/images/model-x.jpg"
        description="Schedule a Demo Drive"
        leftButtonText="Custom Order"
        rightButtonText="View Inventory"
        id=""
      />

      <Section
        title="Solar Panels"
        Img="/images/solar-panel.jpg"
        description="Lowest Cost Solar Panels in America"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />

      <Section
        title="Solar Roof"
        Img="/images/solar-roof.jpg"
        description="Produce Clean Energy From Your Roof"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />

      <Section
        title="Accessories"
        Img="/images/accessories.jpg"
        description="Produce Clean Energy From Your Roof"
        leftButtonText="Shop Now"
      />
    </div>
  );
}

export default Home;
