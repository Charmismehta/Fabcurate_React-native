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
    borderRadius: windowWidth(120),
  },
  mainViewStyle: {
    flex: 1,
    margin: windowWidth(5),
    justifyContent: 'flex-start',
  },
  bottomText: {
    width: windowWidth(100),
    paddingBottom: windowWidth(15),
    position: 'absolute',
    bottom: windowHeight(2),
    fontSize: fontSizes.FONT17,
    alignSelf: 'center',
    color: colors.ScreenBG,
    ...external.ti_center,
    textTransform: 'uppercase',
    borderRadius: windowWidth(120),
  },
});

export {style};
