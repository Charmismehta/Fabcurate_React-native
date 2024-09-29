import React from 'react';
import {Dimensions, Image, Text, TextInput, View} from 'react-native';
import HeadingContainer from '../../commonComponent/HeadingContainer';
import {styles} from './style.css';
import {CategoryData} from '../../data/CategoryData';
import SafeContainer from '../../commonComponent/safeContainer';
import {windowHeight, windowWidth} from '../../theme/appConstant';

const CategoryScreen = ({navigation}) => {
  var CategoryDataMap = CategoryData['categories'];
  var bgColor = [
    '#EFCF8C',
    '#9CB6C6',
    '#C6B29C',
    '#D6C7BD',
    '#C6B29C',
    '#A5C374',
    '#A5AA8C',
  ];

  const goBack = () => {
    navigation.goBack('');
  };

  const getRandomColor = () => {
    var item = bgColor[Math.floor(Math.random() * bgColor.length)];
    return item;
  };

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer value={'Category'} onPress={goBack} />
          {CategoryDataMap.map(item => (
            <View
              style={[
                styles.categoryBackground,
                {
                  backgroundColor: getRandomColor(),
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={[styles.categoryName]}>{item.category_name}</Text>
              </View>
            </View>
          ))}
        </View>
      }
    />
  );
};

export default CategoryScreen;
