import {Dimensions, Image, View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {topCategoryData} from '../../../../data/topCategoryData';
import {styles} from './style.css';
import {windowWidth} from '../../../../theme/appConstant';

const CarouselSlide = () => {
  const [index, setIndex] = useState(0);
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.carouselImage} source={{uri: item.image}} />
        <View style={styles.carouselTextMainView}>
          <Text style={styles.carouselText}>{item.title}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={topCategoryData['main_sticky_menu'][0]['slider_images']}
        loop={true}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width - windowWidth(40)}
        itemWidth={Dimensions.get('window').width - windowWidth(140)}
        onSnapToItem={index => setIndex(index)}
      />
    </View>
  );
};

export default CarouselSlide;
