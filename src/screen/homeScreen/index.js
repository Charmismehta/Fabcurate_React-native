import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {external} from '../../style/external.css';
import {windowHeight} from '../../theme/appConstant';
import TopCategory from './topCategory/index';
import BoutiqueCarouselSlide from './boutiqueCollection/CarouselSlide';
import CarouselSlide from './topSlider/CarouselSlide';
import UnstitchedCarouselSlide from './unstitched/CarouselSlide';
import ShopByCategory from './shopByCategory';
import ShopByFabric from './shopByFabric';
import RangeOfPattern from './rangeOfPattern';
import DesignOccasion from './DesignAsPerOccasion';

const HomeScreen = ({navigation, props}) => {
  return (
    <SafeAreaView
      style={[
        external.fx_1,
        {
          paddingVertical: windowHeight(10),
        },
      ]}>
      <ScrollView style={[external.mh_20, {marginTop: 15}]}>
        <TopCategory />
        <CarouselSlide />
        <ShopByCategory />
        <ShopByFabric />
        <UnstitchedCarouselSlide />
        <BoutiqueCarouselSlide />
        <RangeOfPattern />
        <DesignOccasion />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
