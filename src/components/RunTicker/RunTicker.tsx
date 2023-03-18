import "./RunTicker.scss";
import React from "react";
// @ts-ignore
import Marquee from "react-double-marquee";

const RunTickerComponent = ({ text }: { text: string }) => {
  return (
    <div className="RunTicker_wrappeer">
      <Marquee speed={0.04} delay={0} direction="right" scrollWhen="always">
        {text}
      </Marquee>
    </div>
  );
};

export const RunTicker = React.memo(RunTickerComponent);
