import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';
import Svg from 'react-native-svg-uri';
import { shopCar } from '../../../../../component/common/iconSvg';
import { pxToDp } from '../../../../../utils/styleKits';
export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image() {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
                source={{ uri: illustration }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
            <Image
                source={{ uri: illustration }}
                style={styles.image}
            />
        );
    }

    render() {
        const { data: { title, subtitle, money }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
                style={[styles.title, even ? styles.titleEven : {}]}
                numberOfLines={3}
            >
                {title.toUpperCase()}
            </Text>
        ) : false;
        const uppercaseMoney = money ? (<Text
            style={[styles.money, even ? styles.titleEven : {}]}
            numberOfLines={1}
        >
            {money.toUpperCase()}
        </Text>
        ) : false;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => { alert(`You've clicked '${title}'`); }}
            >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    {this.image}
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    {uppercaseTitle}
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(16) }}>
                        <Text
                            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                            numberOfLines={2}
                        >
                            {uppercaseMoney}
                        </Text>
                        <View
                            style={{
                                height: pxToDp(30),
                                width: pxToDp(30),
                                borderRadius: pxToDp(15),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: pxToDp(2),
                                borderColor: '#62bfad',
                                marginLeft: pxToDp(16)
                            }}>
                            <Svg width="20" height="20" svgXmlData={shopCar} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
