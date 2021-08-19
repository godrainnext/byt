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
    arr: [], id: 1,
    bcimg:
      'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
    userimg:
      'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
    username: 'ppp',
    userqm: 'aaaaaaaaaaaaaaaaaaaaa',
    userfans: 10,
    usergz: 10,
    userhz: 1,
    collect: [
      { collectid: 1, collectimg: '', title: '乌拉乌拉乌拉', playnum: 111 }
    ],
    dongtai: [
      {
        dtid: 1,
        dtimg:
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
        name: 'wulawulaaaa',
        date: '03月20日',
        dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉',
        dz: 123,
        dtimg2: [
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
        ]
      }
    ],

    soucang: [
      {
        scid: 1,
        scimg:
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
        bookname: '111111',
        name: '12111',
        date: '2019-05-02'
      }
    ]
  };
  componentDidMount() {
    getVideList(0).then((res) => {
      this.setState({ arr: res });
    });
  }

  render() {
    const { userinfo } = this.state
    return (

      <ParallaxScrollView
        renderStickyHeader={() => (<Top icon1="arrow-back" title="个人中心" />)}
        stickyHeaderHeight={40}
        parallaxHeaderHeight={380}
        navBarColor='#fa9222'
        rendernavBar={<Top />}
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130307%2F8984340_113532918000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631857652&t=03b4f1cf6deeb6e50010fe5e59eb881d' }}

              style={{
                width: '100%',
                height: 400,
              }}>
            </Image>
            <View style={{ position: 'absolute', top: 0, width: window.width, backgroundColor: 'rgba(0,0,0,.4)', height: 300 }} />
          </View>
        )
        }
        //自定义头部内容
        renderForeground={() => (
          <CustormerBar />
        )

        }

        scrollableViewStyle={{ backgroundColor: '#fcfcfc' }}
      >
        <ImageBackground source={require('./myback.png')}
          style={{ width: 400, height: 200, }} />

        <Dongtai userId={this.props.route.params} />

      </ParallaxScrollView>
    )
  }
}
