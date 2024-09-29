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
    height: windowHeight(100),
    width: windowWidth(135),
    ...external.rm_cover,
  },
  mainViewStyle: {
    margin: windowWidth(5),
    justifyContent: 'flex-start',
  },
  textStyleView: {
    width: windowWidth(135),
    backgroundColor: colors.whiteOpacity,
    position: 'absolute',
    bottom: 0,
    ...external.ti_center,
  },
  bottomText: {
    paddingHorizontal: 4,
    fontSize: fontSizes.FONT12,
    color: colors.DarkText,
    ...external.ti_center,
    fontWeight: 'bold',
    marginVertical: windowHeight(5),
    textTransform: 'uppercase',
  },
  subNameStyle: {
    paddingLeft: 4,
    fontSize: fontSizes.FONT10,
    color: colors.DarkText,
    ...external.ti_center,
    marginBottom: windowHeight(5),
    textTransform: 'uppercase',
  },
  subBottomText: {
    paddingLeft: 4,
    fontSize: fontSizes.FONT10,
    color: colors.DarkText,
    ...external.ti_center,
    marginBottom: windowHeight(5),
    textTransform: 'uppercase',
    // paddingHorizontal: 4,
    // fontSize: fontSizes.FONT8,
    // marginBottom: windowHeight(5),
    // textTransform: 'uppercase',
  },
  LinearGradientstyle: {
    borderRadius: windowHeight(7),
  },
});

export {style};
