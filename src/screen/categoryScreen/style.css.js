import {Dimensions, StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '../../theme/appConstant';
import {external} from '../../style/external.css';

const {width} = Dimensions.get('window');

const oval2Width = 200 * 0.4;
const styles = StyleSheet.create({
  categoryBackground: {
    width: '100%',
    height: 155,
    borderTopWidth: 0.5,
    justifyContent: 'center',
    margin: 2,
  },
  categoryName: {
    fontSize: fontSizes.FONT32,
    color: colors.DarkText,
    padding: 12,
    marginVertical: windowHeight(2),
  },
  oval2: {
    position: 'absolute',
    width: oval2Width,
    height: oval2Width,
    borderRadius: oval2Width / 2,
    backgroundColor: 'blue',
    top: -oval2Width / 2.5,
    right: -10,
    zIndex: 2,
  },
  categoryImage: {
    height: windowHeight(115),
    width: windowWidth(150),
    ...external.as_center,
  },
});

export {styles};
