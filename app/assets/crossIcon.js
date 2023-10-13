import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const CrossIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24.000000pt"
    height="24.000000pt"
    viewBox="0 0 24.000000 24.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}>
    <G
      transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
      fill="red"
      stroke="none">
      <Path d="M50 183 c0 -4 12 -20 27 -35 l27 -28 -29 -30 c-37 -39 -24 -52 15 -15 l30 29 30 -29 c16 -16 33 -25 37 -22 3 4 -6 21 -22 37 l-29 30 29 30 c37 39 24 52 -15 15 l-30 -29 -28 27 c-28 27 -42 33 -42 20z" />
    </G>
  </Svg>
);
export default CrossIcon;
