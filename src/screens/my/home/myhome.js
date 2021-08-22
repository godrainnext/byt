import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import { getVideList } from '../../../service/home';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import HighLights from '@components/first/HighLights';
import ImageFade from '@components/ImageFade/index';
import Hy from '@components/first/hy';
import Legend from '@components/first/legend';
import { connect } from 'react-redux';
import CustormerBar from '../seetings/component/CustormerBar';
import Dongtai from '../seetings/component/dontai';
export default class hello extends Component {
  static contextType = NavigationContext;
  state = {
    sctop: 0
  };
  componentDidMount() {}

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
        stickyHeaderHeight={40}
        parallaxHeaderHeight={380}
        navBarColor="#fa9222"
        rendernavBar={<Top />}
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image
              source={{
                uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130307%2F8984340_113532918000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631857652&t=03b4f1cf6deeb6e50010fe5e59eb881d'
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
              style={{ width: 400, height: 800 }}
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
              <Image
                source={require('./3.png')}
                style={{ width: pxToDp(50), height: pxToDp(50) }}
              />
              <Text style={{ fontSize: pxToDp(20), color: '#468cd3' }}>
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
