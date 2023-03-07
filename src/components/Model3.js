import React from "react";
import Section from "./Section";
import { Fade } from "react-awesome-reveal";

function Model3() {
  return (
    <div>
      <Section
        title="Model 3"
        description="Order online for touchless delivery"
        Img="/images/model3_2.jpeg"
        downArrow="/images/down-arrow.svg"
        range="358 mi"
        rangeText="Range (EPA est.)"
        acceleration="3.1s"
        accelerationText="0-60 mph*"
        topSpeed="162 mph"
        topSpeedText="Top Speed"
      />
    </div>
  );
}

export default Model3;
