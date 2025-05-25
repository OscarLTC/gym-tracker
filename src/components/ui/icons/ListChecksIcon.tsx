import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Icon.types";

export const ListChecksIcon = ({ color, size }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m3 17 2 2 4-4" />
      <Path d="m3 7 2 2 4-4" />
      <Path d="M13 6h8" />
      <Path d="M13 12h8" />
      <Path d="M13 18h8" />
    </Svg>
  );
};
