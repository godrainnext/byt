import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { pxToDp } from '../../utils/styleKits';

const ENTRIES1 = [
  {
    title: '扇子在越剧中的应用',
    subtitle: '1',
    illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fy0.ifengimg.com%2Fnews_spider%2Fdci_2012%2F08%2F556d0bf3b26a800daca84b6fb1f01057.jpg&refer=http%3A%2F%2Fy0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632452780&t=6f391f56dc36ccd118c3d4fad984f8e0',
  },
  {
    title: '越剧的妆容与服饰',
    subtitle: '2',
    illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171224%2F7a4c8b3f2c88470486067eabbc3ef436.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631081945&t=98411174c1cee09113ae525a36933077',
  },
  {
    title: '越剧小生基本动作',
    subtitle: '3 ',
    illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages11.app.happyjuzi.com%2Fimages%2Fstar_pic%2F201612070000434krqaaknu6c7z0e62sui.jpg&refer=http%3A%2F%2Fimages11.app.happyjuzi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631083137&t=e5eb024b1ba283834d6474df43eed92c',
  },
];
const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View style={{alignItems:'center'}}>
          <Text
            style={{ fontSize: pxToDp(16), color: '#333333' }}
            numberOfLines={1}
          >
            {item.title}
          </Text>
        </View>
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
        inactiveSlideScale={0.9}
        sliderWidth={pxToDp(340)}
        firstItem={0}
        itemWidth={pxToDp(280)}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        // vertical={true}
        activeSlideOffset={0}
        loop={true}
      //autoplay={true}
      //autoplayDelay={500}
      //autoplayInterval={3000}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    height: pxToDp(200)
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: pxToDp(8)
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'
  }
});