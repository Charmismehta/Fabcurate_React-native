import React, {memo, useContext} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {fontSizes, windowHeight, windowWidth} from '../../theme/appConstant';

const FlatListComponent = ({
  horizontal,
  showsHorizontalScrollIndicator,
  data,
  numColumns,
  imageStyle,
  mainView,
  textStyle,
  subtextStyle,
  numberOfLines,
  textStyleView,
  showsVerticalScrollIndicator,
  subNameStyle,
}) => {
  const naviagtion = useNavigation();

  const handleChnage = () => {
    naviagtion.navigate('FoodCategories');
  };

  return (
    <View>
      <FlatList
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        numColumns={numColumns}
        horizontal={horizontal}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        data={data}
        renderItem={({item}) => {
          return (
            <Pressable
              style={[
                mainView,
                subtextStyle != null && {backgroundColor: item.tint_color},
              ]}
              onPress={handleChnage}>
              <Image source={{uri: item.image}} style={imageStyle} />
              <View style={textStyleView}>
                <Text numberOfLines={numberOfLines} style={textStyle}>
                  {item.title == null ? item.name : item.title}
                </Text>
                {subtextStyle != null && (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: windowHeight(-4),
                    }}>
                    {textStyleView != null && (
                      <Text
                        style={[subNameStyle, {paddingLeft: windowWidth(8)}]}>
                        {item.sub_name}
                      </Text>
                    )}
                    <Text
                      style={[
                        subtextStyle,
                        item.cta != null && {
                          fontSize: fontSizes.FONT9,
                          paddingHorizontal: windowWidth(8),
                          marginTop: windowHeight(2),
                        },
                      ]}>
                      {' '}
                      {item.cta != null ? item.cta : '+explore'}
                    </Text>
                  </View>
                )}
              </View>
            </Pressable>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
FlatListComponent.propTypes = {
  horizontal: PropTypes.bool,
  numberOfLines: PropTypes.number,
  showsHorizontalScrollIndicator: PropTypes.bool,
  start: PropTypes.object,
  end: PropTypes.object,
  LinearGradientstyle: PropTypes.object,
  LinearGradientcolor: PropTypes.array,
  data: PropTypes.array,
  FlatListViewStyle: PropTypes.object,
  numColumns: PropTypes.number,
  imageStyle: PropTypes.object,
  mainView: PropTypes.object,
  textStyle: PropTypes.object,
  showsVerticalScrollIndicator: PropTypes.bool,
  text: PropTypes.string,
  ReccomendedImagestyle: PropTypes.object,
};
export default memo(FlatListComponent);
