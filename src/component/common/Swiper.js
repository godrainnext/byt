import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import { pxToDp } from '../../utils/styleKits';

const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    console.log(props);
    setEntries([...props.shopbanner]);
  }, [props]);

  const renderItem = ({ item }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.imgrl }}
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
      {/* <TouchableOpacity onPress={goForward}>
                <Text>go to next slide</Text>
            </TouchableOpacity> */}
      <Carousel
        ref={carouselRef}
        sliderWidth={pxToDp(380)}
        sliderHeight={pxToDp(380)}
        itemWidth={pxToDp(250)}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        // vertical={true}
        activeSlideOffset={0}
        loop={true}
        //自动播放
        // autoplay={true}
        // autoplayDelay={500}
        // autoplayInterval={3000}
      />
    </View>
  );
};

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
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain'
  }
});
