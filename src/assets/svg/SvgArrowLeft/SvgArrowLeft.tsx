import * as React from "react";
import { SVGProps } from "react";

export const SvgArrowLeft = ({
  width = 42,
  height = 42,
  stroke,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M6 9.5-.4 16 6 22.5c3.5 3.6 6.8 6.5 7.2 6.5.4 0 .8-1.6.8-3.5V22h18V10H14V6.5c0-1.9-.4-3.5-.8-3.5S9.5 5.9 6 9.5z" />
  </svg>
);
