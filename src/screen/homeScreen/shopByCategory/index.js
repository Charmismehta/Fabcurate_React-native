import {View} from 'react-native';
import React, {useContext} from 'react';
import H3HeadingCategory from '../../../commonComponent/headingCategory/H3HeadingCategory';
import FlatListComponent from '../../../commonComponent/flatListComponent';
import {style} from './style.css';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {middleCategory} from '../../../data/middleCategory';

const ShopByCategory = () => {
  const navigation = useNavigation();

  const handleChange = () => {
    navigation.navigate('FoodCategories');
  };

  return (
    <View>
      <H3HeadingCategory value={'Shop By Category'} onPress={handleChange} />
      <FlatListComponent
        numColumns={3}
        data={middleCategory['shop_by_category']}
        FlatListViewStyle={[style.flatListView]}
        imageStyle={style.imageContainer}
        mainView={style.mainViewStyle}
        textStyle={[style.bottomText]}
        subtextStyle={[style.subBottomText]}
        numberOfLines={1}
      />
    </View>
  );
};

ShopByCategory.propTypes = {
  value: PropTypes.string,
  seeall: PropTypes.string,
  onPress: PropTypes.func,
  horizontal: PropTypes.bool,
  showsHorizontalScrollIndicator: PropTypes.bool,
  start: PropTypes.object,
  end: PropTypes.object,
  LinearGradientstyle: PropTypes.object,
  data: PropTypes.array,
  FlatListViewStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  mainView: PropTypes.object,
  textStyle: PropTypes.object,
};

export default ShopByCategory;
