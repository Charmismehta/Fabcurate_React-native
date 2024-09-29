import {Dimensions, Image, View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {topCategoryData} from '../../../../data/topCategoryData';
import {styles} from './style.css';
import {windowWidth} from '../../../../theme/appConstant';
import {middleCategory} from '../../../../data/middleCategory';
import H3HeadingCategory from '../../../../commonComponent/headingCategory/H3HeadingCategory';

const CarouselSlide = () => {
  const [index, setIndex] = useState(0);
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.carouselImage} source={{uri: item.image}} />
        <View style={styles.carouselTextMainView}>
          <Text style={styles.carouselText}>{item.description}</Text>
          <Text style={styles.carouselSubText}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.carouselContainer}>
      <H3HeadingCategory value={'Unstitched'} />
      <Carousel
        data={middleCategory['Unstitched']}
        loop={true}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width - windowWidth(40)}
        itemWidth={Dimensions.get('window').width - windowWidth(195)}
        onSnapToItem={index => setIndex(index)}
      />
    </View>
  );
};

export default CarouselSlide;
