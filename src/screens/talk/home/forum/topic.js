import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getMomentListByStatus } from '@service/moment';
import Tiebar from './luntan';

export default class topic extends Component {
  static contextType = NavigationContext;
  changeVisible = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  state = {
    dongtai: []
  };
  componentDidMount() {
    this.changeListener = DeviceEventEmitter.addListener('momentChange', () => {
      getMomentListByStatus(0, 0, 10).then((res) => {
        this.setState({ dongtai: [...res].reverse() });
      });
    });
    getMomentListByStatus(0, 0, 10).then((res) => {
      this.setState({ dongtai: [...res].reverse() });
    });
  }
  componentWillUnmount() {
    this.changeListener.remove();
  }
  render() {
    const { id, text, img, detail, number } = this.props.route.params;
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf6fc' }}>
        <ScrollView
          stickyHeaderIndices={[2]}
          style={{
            flex: 1
          }}
        >
          {/* 头部背景 */}
          <ImageBackground
            style={{ height: pxToDp(250) }}
            source={{ uri: img }}
          >
            <TouchableOpacity onPress={() => this.context.goBack()}>
              <Ionicons
                name="arrow-back"
                size={pxToDp(30)}
                style={{ margin: pxToDp(16) }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: pxToDp(135),
                marginRight: pxToDp(16),
                alignItems: 'center'
              }}
            >
              <Text style={{ fontSize: pxToDp(16) }}>{number}人参与讨论</Text>
              <AntDesign name="right" size={pxToDp(20)} />
            </TouchableOpacity>
          </ImageBackground>
          {/* 中间内容 */}
          <View
            style={{
              margin: pxToDp(8),
              marginTop: pxToDp(24),
              paddingBottom: pxToDp(24),
              borderRadius: pxToDp(16),
              backgroundColor: '#fff',
              elevation: 10,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(20),
                fontWeight: 'bold',
                margin: pxToDp(8)
              }}
            >
              {text}
            </Text>
            <Text
              style={{
                marginTop: pxToDp(8),
                fontWeight: 'bold',
                margin: pxToDp(8)
              }}
            >
              {detail}
            </Text>
          </View>
          {/* 评论区 */}
          <View
            style={{
              height: pxToDp(40),
              margin: pxToDp(8),
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center'
              //    borderRadius: pxToDp(16)
            }}
          >
            <Text style={{ fontSize: pxToDp(18), marginLeft: pxToDp(16) }}>
              全部
            </Text>
          </View>
          <View style={{ marginTop: pxToDp(-16) }}>
            <Tiebar dongtai={this.state.dongtai} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
