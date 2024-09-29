import Svg, {Path} from 'react-native-svg';
import React, {useContext} from 'react';

export function ProfileCircle() {
  const color = '#414449';
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.1385 14.9102C14.0569 14.8986 13.9519 14.8986 13.8585 14.9102C11.8052 14.8402 10.1719 13.1602 10.1719 11.0952C10.1719 8.98355 11.8752 7.26855 13.9985 7.26855C16.1102 7.26855 17.8252 8.98355 17.8252 11.0952C17.8135 13.1602 16.1919 14.8402 14.1385 14.9102Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.8634 22.6103C19.7867 24.512 17.0334 25.667 14.0001 25.667C10.9667 25.667 8.21339 24.512 6.13672 22.6103C6.25339 21.5136 6.95339 20.4403 8.20172 19.6003C11.3984 17.477 16.6251 17.477 19.7984 19.6003C21.0467 20.4403 21.7467 21.5136 21.8634 22.6103Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.0007 25.6663C20.444 25.6663 25.6673 20.443 25.6673 13.9997C25.6673 7.55635 20.444 2.33301 14.0007 2.33301C7.55733 2.33301 2.33398 7.55635 2.33398 13.9997C2.33398 20.443 7.55733 25.6663 14.0007 25.6663Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
