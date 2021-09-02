import React, { useRef, useState, useEffect, memo } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, StyleSheet, Platform } from 'react-native';
import { pxToDp } from '../../utils/styleKits';
import changeImgSize from '@utils/changeImgSize';

const MyCarousel = memo((props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries([...props.shopbanner]);
  }, [props]);

  const renderItem = ({ item }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: changeImgSize(item.imgrl, 'small') }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={pxToDp(380)}
        sliderHeight={pxToDp(380)}
        itemWidth={pxToDp(250)}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        activeSlideOffset={0}
        loop={true}
        
        // autoplay={true}
      />
    </View>
  );
});

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    height: pxToDp(200)
  },
  item: {
    flex: 1
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain'
  }
});
