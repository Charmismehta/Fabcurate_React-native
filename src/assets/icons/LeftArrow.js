import Svg, {Path} from 'react-native-svg';
import React, {useContext} from 'react';

export function LeftArrow() {
  const color = '#414449';
  return (
    <Svg
      width="20"
      height="25"
      viewBox="0 0 9 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.75018 16.26L1.77352 10.2833C1.06768 9.57749 1.06768 8.42249 1.77352 7.71666L7.75018 1.73999"
        stroke={color}
        stroke-width="5"
        stroke-miterlimit="14"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
