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
        title: '越剧十姐妹和越剧十三流派',
        subtitle: '1',
        illustration: 'https://img0.baidu.com/it/u=2914752220,1542935670&fm=26&fmt=auto&gp=0.jpg',
    },
    {
        title: '了解越剧的妆容与服饰',
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

const MyCarousel = props => {
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
                <Text style={{ height: pxToDp(40), fontSize: pxToDp(16) }} numberOfLines={1}>
                    {item.title}
                </Text>

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
                sliderWidth={pxToDp(330)}
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
        flex: 1,
    },
    item: {
        width: pxToDp(290),
        height: pxToDp(240),
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
    },
});