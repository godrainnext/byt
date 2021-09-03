import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';
import { NavigationContext } from '@react-navigation/native';
import { right } from '../../../common/iconSvg';
import Svg from 'react-native-svg-uri';
import { pxToDp } from '../../../../utils/styleKits';
export default class SliderEntry extends PureComponent {
  static contextType = NavigationContext;

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image() {
    const {
      data: { picurl },
      parallax,
      parallaxProps,
      even
    } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: picurl }}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {}
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <Image source={{ uri: picurl }} style={styles.image} />
    );
  }

  render() {
    const {
      data: { title, ezcontent, id },
      even
    } = this.props;

    const uppercaseTitle = title ? (
      <View style={{height:20}}>
        <Text
          style={[styles.title, even ? styles.titleEven : {}]}
          numberOfLines={1}
        >
          {title.toUpperCase()}
        </Text>
        <View style={{marginLeft:pxToDp(250),zIndex:999}}>
        <Svg width="38" height="38" svgXmlData={right} />
      </View>
    </View>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => this.context.navigate('Pagefive', id)}
      >
        <View style={styles.shadow} />
        <View
          style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        >
          {this.image}
          <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          />
        </View>
        <View
          style={[styles.textContainer, even ? styles.textContainerEven : {}]}
        >
          {uppercaseTitle}
          <Text
            style={[styles.ezcontent, even ? styles.ezcontentEven : {}]}
            numberOfLines={1}
          >
            {ezcontent}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}