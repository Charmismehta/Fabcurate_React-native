import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style.css';
import {external} from '../../style/external.css';

const H3HeadingCategory = ({value, seeall, onPress}) => {
  return (
    <View style={[styles.container, external.fd_row, external.js_space]}>
      <Text style={[styles.valueText]}>{value}</Text>
    </View>
  );
};

H3HeadingCategory.propTypes = {
  value: PropTypes.string.isRequired,
  seeall: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default memo(H3HeadingCategory);
