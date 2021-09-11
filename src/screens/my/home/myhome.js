import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '@utils/styleKits';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import CustormerBar from '../seetings/component/CustormerBar';
import Dongtai from '../seetings/component/dontai';
import LottieView from 'lottie-react-native';

export default class hello extends PureComponent {
  static contextType = NavigationContext;
  state = {
    sctop: 0
  };
  componentDidMount() { }

  render() {
    const { userinfo } = this.state;
    return (
      <ParallaxScrollView
        onScroll={(event) => {
          this.setState({
            sctop:
              event.nativeEvent.contentOffset.y -
              event.nativeEvent.contentOffset.y / 3
          });
        }}
        renderStickyHeader={() => {
          <View style={{ backgroundColor: '#fff' }}>
            <Text>11111</Text>
          </View>;
        }}
        showsVerticalScrollIndicator={false}
        parallaxHeaderHeight={300}
        navBarColor="#fa9222"
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image
              source={{
                uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.wendangwang.com%2Fpic%2Fee1ba231ab39401c350878d6%2F8-810-jpg_6-1080-0-0-1080.jpg&refer=http%3A%2F%2Fwww.wendangwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632230670&t=ca7b12369e096cee037d293434454e18'
              }}
              style={{
                width: '100%',
                height: 400
              }}
            ></Image>
          </View>
        )}
        //自定义头部内容
        renderForeground={() => <CustormerBar />}
        scrollableViewStyle={{ backgroundColor: '#fcfcfc' }}
      >
        <View style={{ flex: 1 }}>
          <View style={[style.top, { top: this.state.sctop }]}>
            <ImageBackground
              source={require('./myback.png')}
              style={{ width: 400, height: 600 }}
            />
          </View>
          <View style={style.bottom}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <LottieView
                style={{ marginRight: pxToDp(40) }}
                source={require('../../../../lottie/房车.json')}
                autoPlay
                loop={false}
              />
              <Text style={{ fontSize: pxToDp(18), color: '#333333', marginLeft: pxToDp(40) }}>
                我的动态
              </Text>
            </View>
            <Dongtai userId={this.props.route.params} />
          </View>
        </View>
      </ParallaxScrollView>
    );
  }
}
const style = StyleSheet.create({
  sv: {
    flex: 1
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
    position: 'absolute'
  },
  bottom: {
    marginTop: pxToDp(8),
    justifyContent: 'center',
    zIndex: 1
  }
});
