import React from "react";
import Interior from "./Interior";
import Section from "./Section";

function ModelY() {
  return (
    <div>
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        Img="/images/modely_2.jpeg"
        downArrow="/images/down-arrow.svg"
        range="330 mi"
        rangeText="Range (EPA est.)"
        acceleration="3.5s"
        accelerationText="0-60 mph*"
        topSpeed="155 mph"
        topSpeedText="Top Speed"
      />
      <Interior />
    </div>
  );
}

export default ModelY;
