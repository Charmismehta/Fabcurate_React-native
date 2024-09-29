import {Dimensions, Image, View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {styles} from './style.css';
import {middleCategory} from '../../../../data/middleCategory';
import H3HeadingCategory from '../../../../commonComponent/headingCategory/H3HeadingCategory';

const CarouselSlide = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.carouselImage} source={{uri: item.banner_image}} />
        <View style={styles.carouselTextMainView}>
          <Text style={styles.carouselText}>{item.name}</Text>
          <Text style={styles.carouselSubText}>{item.cta}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.carouselContainer}>
      <H3HeadingCategory value={'Boutique Collection'} />
      <Carousel
        data={middleCategory['boutique_collection']}
        loop={true}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setIndex(index)}
      />

      <Pagination
        dotsLength={middleCategory['boutique_collection'].length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        containerStyle={{paddingTop: 10}}
        dotContainerStyle={{marginHorizontal: 0}}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={[styles.inactivedot]}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default CarouselSlide;
