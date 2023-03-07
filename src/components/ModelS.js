import React from "react";
import Section from "./Section";

function ModelS() {
  return (
    <div>
      <Section
        title="Model S"
        description="Plaid"
        Img="/images/model-s.jpg"
        downArrow="/images/down-arrow.svg"
        range="396 mi"
        rangeText="Range (EPA est.)"
        acceleration="1.99s"
        accelerationText="0-60 mph*"
        topSpeed="200 mph"
        topSpeedText="Top Speed"
        peakPower="1,020 hp"
        peakPowerText="Peak Power"
      />
    </div>
  );
}

export default ModelS;
