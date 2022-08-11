import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      width={20}
      height={20}
      x={2}
      y={2}
      fill="none"
      stroke="#000"
      strokeWidth={2}
	  {...props}
    />
  </Svg>
);

export default SVGComponent;
