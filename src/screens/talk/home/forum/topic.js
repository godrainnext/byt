import React, { PureComponent } from 'react';
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
import { getMomentListByTagId } from '@service/moment';
import Tiebar from './luntan';
import { linear } from 'react-native/Libraries/Animated/Easing';
import ActionButton from 'react-native-action-button';

export default class topic extends PureComponent {
  static contextType = NavigationContext;
  changeVisible = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  state = {
    dongtai: []
  };
  componentDidMount() {
    console.log(this.props.route.params.id);
    this.changeListener = DeviceEventEmitter.addListener('momentChange', () => {
      getMomentListByTagId(this.props.route.params.id).then((res) => {
        this.setState({ dongtai: [...res].reverse() });
      });
    });
    getMomentListByTagId(this.props.route.params.id).then((res) => {
      console.log(res);
      this.setState({ dongtai: [...res].reverse() });
    });
  }
  componentWillUnmount() {
    this.changeListener.remove();
  }
  render() {
    const { id, text, img, detail, number } = this.props.route.params;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {/* 头部背景 */}
          <ImageBackground
            style={{ height: pxToDp(250) }}
            source={{ uri: img }}
          >
            <TouchableOpacity onPress={() => this.context.goBack()}>
              <Ionicons
                name="arrow-back"
                size={25}
                color="#62bfad"
                style={{ paddingTop: pxToDp(16), paddingLeft: pxToDp(16) }}
              />
            </TouchableOpacity>
            <View
              style={{
                padding: pxToDp(8),
                margin: pxToDp(16),
                borderRadius: pxToDp(8)
              }}
            >
              <Text
                style={{
                  marginBottom: pxToDp(8),
                  fontSize: pxToDp(18),
                  color: '#000000',
                  fontWeight: 'bold'
                }}
              >
                {text}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  color: '#333333',
                  lineHeight: pxToDp(22)
                }}
              >
                &emsp;&emsp;{detail}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: pxToDp(16)
              }}
            >
              <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>
                {number}人参与讨论
              </Text>
            </View>
          </ImageBackground>
          {/* 中间内容 */}
          <View
            style={{
              marginTop: pxToDp(-10),
              width: '100%',
              backgroundColor: '#fff',
              borderTopRightRadius: pxToDp(8),
              borderTopLeftRadius: pxToDp(8)
            }}
          >
            {/* 评论区 */}
            <Text
              style={{
                fontSize: pxToDp(18),
                color: '#000000',
                fontWeight: 'bold',
                paddingLeft: pxToDp(16),
                marginTop: pxToDp(8)
              }}
            >
              全部
            </Text>
            <View style={{ marginTop: pxToDp(-12) }}>
              {this.state.dongtai[0]?.id ? (
                <Tiebar dongtai={this.state.dongtai} />
              ) : (
                <View style={{ marginTop: pxToDp(16), backgroundColor: 'white', height: pxToDp(450) }}>
                  <Text style={{ marginLeft: pxToDp(16), fontSize: pxToDp(14) }}>暂无人讨论该话题，成为第一个吧</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
        <ActionButton
          buttonColor="#62bfad"
          onPress={() => this.context.navigate('AddMoment')}
        />
      </View >
    );
  }
}
