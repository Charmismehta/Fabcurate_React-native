import {StyleSheet} from 'react-native';
import {fontSizes} from '../../theme/appConstant';
import colors from '../../theme/colors';
import {external} from '../../style/external.css';
const styles = StyleSheet.create({
  headingText: {
    fontWeight: '700',
    fontSize: fontSizes.FONT28,
    color: colors.DarkText,
    marginBottom: 15,
    ...external.ti_center,
  },
  headingTextDark: {
    color: colors.ScreenBG,
  },
});

export default styles;
