import Svg, {Circle, Rect} from 'react-native-svg';
import React, {useContext} from 'react';

export function MoreDisable() {
  const color = '#414449';
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="24" height="24" fill="white" />
      <Circle
        cx="7"
        cy="12"
        r="0.5"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="12"
        cy="12"
        r="0.5"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="17"
        cy="12"
        r="0.5"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
