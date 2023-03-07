import React from "react";
import Section from "./Section";

function ModelX() {
  return (
    <div>
      <Section
        title="Model X"
        description="Plaid"
        Img="/images/model-x.jpg"
        downArrow="/images/down-arrow.svg"
        range="333 mi"
        rangeText="Range (EPA est.)"
        acceleration="2.5s"
        accelerationText="0-60 mph*"
        topSpeed="175 mph"
        topSpeedText="Top Speed"
        peakPower="1,020 hp"
        peakPowerText="Peak Power"
      />
    </div>
  );
}

export default ModelX;
