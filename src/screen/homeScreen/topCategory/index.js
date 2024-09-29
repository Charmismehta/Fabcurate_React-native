import {View} from 'react-native';
import React, {useContext} from 'react';
import H3HeadingCategory from '../../../commonComponent/headingCategory/H3HeadingCategory';
import FlatListComponent from '../../../commonComponent/flatListComponent';
import {style} from './style.css';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {topCategoryData} from '../../../data/topCategoryData';

const TopCategory = () => {
  const navigation = useNavigation();

  const handleChange = () => {
    navigation.navigate('FoodCategories');
  };

  return (
    <View>
      <FlatListComponent
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={topCategoryData['main_sticky_menu']}
        FlatListViewStyle={[style.flatListView]}
        imageStyle={style.imageContainer}
        mainView={style.mainViewStyle}
        textStyle={[style.bottomText]}
      />
    </View>
  );
};

TopCategory.propTypes = {
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

export default TopCategory;
