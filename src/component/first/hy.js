import React, { PureComponent } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './scorll/styles/SliderEntry.style';
import SliderEntry from './scorll/components/SliderEntry';
// import styles, { colors } from './scorll/styles/index.style';
import { getListByStatus } from '@service/home';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';

export default class Hy extends PureComponent {
  state = { enter: [] };
  componentDidMount() {
    getListByStatus(1).then((res) => {
      this.setState({ enter: res });
    });
  }
  static contextType = NavigationContext;
  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }
  _renderLightItem({ item, index }) {
    return <SliderEntry data={item} even={false} />;
  }
  layoutExample(number, title, type) {
    const isTinder = type === 'tinder';
    return (
      <View style={{marginTop:pxToDp(16) }}>
        <Carousel
          data={this.state.enter}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout={type}
          loop={true}
        />
      </View>
    );
  }
  render() {
    const example3 = this.layoutExample('', '', 'stack');
    return (
      <SafeAreaView  style={{marginLeft:pxToDp(16),marginRight:pxToDp(16),}}>
        <View >
          <ScrollView     
            scrollEventThrottle={pxToDp(200)}
            directionalLockEnabled={true}
            showsVerticalScrollIndicator = {false}
          >
            {example3}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
