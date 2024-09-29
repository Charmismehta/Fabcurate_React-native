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
    borderTopLeftRadius: windowHeight(7),
    borderTopRightRadius: windowHeight(7),
    height: windowHeight(50),
    width: windowWidth(180),
    ...external.rm_cover,
  },
  mainViewStyle: {
    width: windowWidth(180),
    height: windowHeight(70),
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(7),
    borderColor: colors.LightText,
    borderWidth: 0.56,
    padding: 5,
  },
  bottomText: {
    fontSize: fontSizes.FONT17,
    color: colors.DarkText,
    ...external.ti_center,
    marginVertical: windowHeight(2),
   
  },
  LinearGradientstyle: {
    borderRadius: windowHeight(7),
  },
});

export {style};
