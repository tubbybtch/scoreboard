import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      d="M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6"
	  {...props}
    />
  </Svg>
);

export default SVGComponent;
