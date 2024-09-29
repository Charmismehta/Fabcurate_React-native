import {StyleSheet} from 'react-native';
import {external} from '../../../style/external.css';
import {fontSizes, windowHeight, windowWidth} from '../../../theme/appConstant';
import colors from '../../../theme/colors';

const style = StyleSheet.create({
  flatListView: {
    width: windowWidth(70),
    height: windowHeight(40),
    ...external.ai_center,
    justifyContent: 'space-around',
    borderRadius: windowHeight(6),
  },
  imageContainer: {
    height: windowHeight(90),
    width: windowWidth(135),
    ...external.rm_cover,
  },
  mainViewStyle: {
    flex: 1,
    margin: windowWidth(5),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomText: {
    paddingHorizontal: 4,
    fontSize: fontSizes.FONT12,
    color: colors.DarkText,
    ...external.ti_center,
    marginVertical: windowHeight(5),
    textTransform: 'uppercase',
  },
  subBottomText: {
    paddingHorizontal: 4,
    fontSize: fontSizes.FONT10,
    marginTop: windowHeight(4),
    marginBottom: windowHeight(8),
    textTransform: 'uppercase',
  },
  LinearGradientstyle: {
    borderRadius: windowHeight(7),
  },
});

export {style};
