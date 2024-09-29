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
    width: Dimensions.get('window').width,
    ...external.as_center,
    borderRadius: windowHeight(8),
    ...external.mh_20,
  },
  carouselImage: {
    height: windowHeight(320),
    width: Dimensions.get('window').width,
    ...external.as_center,
  },
  carouselTextMainView: {
    backgroundColor: colors.modal,
    padding: windowWidth(10),
    paddingVertical: windowWidth(8),
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: windowHeight(80),
  },
  carouselText: {
    fontSize: fontSizes.FONT26,
    color: colors.ScreenBG,
    textTransform: 'uppercase',
  },
  carouselSubText: {
    ...external.mt_10,
    fontSize: fontSizes.FONT15,
    color: colors.ScreenBG,
    textTransform: 'uppercase',
  },
  paginationDot: {
    width: windowWidth(10),
    height: windowHeight(7),
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: colors.DarkText,
  },
  inactivedot: {
    backgroundColor: colors.LightText,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export {styles};
