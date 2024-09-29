import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {memo, useContext} from 'react';
import {external} from '../../style/external.css';
import colors from '../../theme/colors';

const SafeContainer = ({value}) => {
  return (
    <SafeAreaView
      style={[
        external.fx_1,
        {
          backgroundColor: colors.ScreenBG,
          paddingTop: StatusBar.currentHeight,
        },
      ]}>
      <View>{value}</View>
    </SafeAreaView>
  );
};

export default memo(SafeContainer);
