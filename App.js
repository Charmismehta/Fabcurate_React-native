import React, {createContext, useEffect, useState} from 'react';
import {LogBox, View} from 'react-native';
import Navigator from './src/navigator';

LogBox.ignoreAllLogs();

export const CommonContext = createContext();

export default function App() {
  const containerStyle = {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  };

  return (
    <View style={containerStyle}>
      <Navigator />
    </View>
  );
}
