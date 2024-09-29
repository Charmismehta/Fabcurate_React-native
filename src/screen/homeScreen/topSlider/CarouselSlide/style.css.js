import {Dimensions, StyleSheet} from 'react-native';
import {external} from '../../../../style/external.css';
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from '../../../../theme/appConstant';
import colors from '../../../../theme/colors';

const styles = StyleSheet.create({
  carouselContainer: {
    ...external.mt_10,
  },
  slide: {
    width: Dimensions.get('window').width - windowWidth(40),
    ...external.as_center,
    borderRadius: windowHeight(8),
    ...external.mh_20,
  },
  carouselImage: {
    height: windowHeight(170),
    width: windowWidth(340),
    ...external.as_center,
    borderRadius: windowHeight(4),
  },
  carouselTextMainView: {
    padding: windowWidth(10),
    backgroundColor: colors.ScreenBG,
    position: 'absolute',
    bottom: windowHeight(8),
    width: windowWidth(220),
    height: windowHeight(50),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  carouselText: {
    fontSize: fontSizes.FONT15,
    color: colors.DarkText,
    ...external.ti_center,
  },
});

export {styles};
