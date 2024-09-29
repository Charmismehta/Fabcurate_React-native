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
    height: windowHeight(340),
    width: windowWidth(300),
    ...external.as_center,
  },
  carouselTextMainView: {
    backgroundColor: colors.modal,
    padding: windowWidth(10),
    paddingVertical: windowWidth(18),
    position: 'absolute',
    bottom: 0,
    width: windowWidth(300),
    height: windowHeight(70),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  carouselText: {
    fontSize: fontSizes.FONT20,
    color: colors.ScreenBG,
    ...external.ti_center,
  },
  carouselSubText: {
    fontSize: fontSizes.FONT36,
    color: colors.ScreenBG,
    ...external.ti_center,
    textTransform: 'uppercase',
  },
});

export {styles};
