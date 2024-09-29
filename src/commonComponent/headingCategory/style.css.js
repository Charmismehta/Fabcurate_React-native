import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '../../theme/appConstant';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(10),
  },
  valueText: {
    color: colors.DarkText,
    fontSize: fontSizes.FONT22,
    fontWeight: 'bold',
  },
});

export default styles;
