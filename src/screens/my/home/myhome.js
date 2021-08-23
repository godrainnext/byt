import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  RefreshControl
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import CustormerBar from '../seetings/component/CustormerBar';
import Dongtai from '../seetings/component/dontai';

export default class hello extends Component {
  static contextType = NavigationContext;
  state = {
    sctop: 0,
    text: '初始状态', 
    refreshing: false 
  };
  componentDidMount() {}
  wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  _onRefresh() {

    if (this.state.refreshing === false) {
        this._updateState('正在刷新......', true);

        //5秒后结束刷新
        setTimeout( ()=>{
            this._updateState('结束状态', false)
        }, 2000)

    }
}

//更新State
_updateState(message, refresh){
    this.setState({text:message,refreshing: refresh});
}
  render() {
    const { userinfo } = this.state;
    return (
      <ParallaxScrollView
      contentContainerStyle={{flex: 1, alignItems: 'center',justifyContent: 'center'}}
      indicatorStyle={'black'}
      showsHorizontalScrollIndicator={true}
      bounces={true}
      refreshControl={
          <RefreshControl
              tintColor={'red'}
              titleColor={'brown'}
              title={'正在刷新......'}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
          />}
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
                style={{ width: pxToDp(40), height: pxToDp(40) }}
              />
              <Text style={{ fontSize: pxToDp(18), color: '#333333' }}>
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
