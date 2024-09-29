import React, {memo, useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style.css';
import {LeftArrow} from '../../utils/images/icon';
import {external} from '../../style/external.css';

const HeadingContainer = ({value, onPress}) => {
  const flexDirection = 'row';

  return (
    <View style={[external.fd_row, {flexDirection, padding: 10}]}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={[external.fg_half, {marginLeft: 10}]}>
        <LeftArrow />
      </TouchableOpacity>
      <Text style={[styles.headingText]}>{value}</Text>
    </View>
  );
};

HeadingContainer.propTypes = {
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default memo(HeadingContainer);
