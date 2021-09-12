import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  DeviceEventEmitter,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { pxToDp } from '@utils/styleKits';
import changeImgSize from '@utils/changeImgSize';
import { NavigationContext } from '@react-navigation/native';
import { getUserFollow, getUserFans } from '@service/mine';
import { changeUserFollowAction } from '../../screens/my/follow/store/action';
import Qiandao from '../common/qiandao';
import SvgUri from 'react-native-svg-uri';
class UserInner extends PureComponent {
  state = {
    fansCount: 0,
    followCount: 0
  };
  static contextType = NavigationContext;
  componentDidMount() {
    this.addFollow = DeviceEventEmitter.addListener('addFollow', () => {
      getUserFans().then((res) => {
        this.setState({ fansCount: res.fansCount });
      });
      getUserFollow().then((res) => {
        this.setState({ followCount: res.followCount });
        this.props.changeUserFollowAction(res.follow);
      });
    });

    this.removeFollows = DeviceEventEmitter.addListener('removeFollow', () => {
      getUserFollow().then((res) => {
        this.setState({ followCount: res.followCount });
        this.props.changeUserFollowAction(res.follow);
      });
      getUserFans().then((res) => {
        this.setState({ fansCount: res.fansCount });
      });
    });
    getUserFans().then((res) => {
      this.setState({ fansCount: res.fansCount });
    });
    getUserFollow().then((res) => {
      this.props.changeUserFollowAction(res.follow);
      this.setState({ followCount: res.followCount });
    });
  }
  componentWillUnmount() {
    this.addFollow.remove();
    this.removeFollows.remove();
  }
  render() {
    const { nickName, avatar, id, ownSay } = this.props.userInfo;
    const { fansCount = 0, followCount = 0 } = this.state;
    return (
      <ImageBackground
        source={require('./userback1.jpg')}
        style={{
          borderRadius: pxToDp(8),
          backgroundColor: '#f0fcff',
          height: pxToDp(140),
          elevation: 3,
          borderWidth: 0,
          marginLeft: pxToDp(16),
          marginRight: pxToDp(16),
          marginTop: pxToDp(8)
        }}
      >
        <View style={{ position: 'absolute', right: -2, top: pxToDp(80) }}>
          <Qiandao />
        </View>

        <View style={{ flexDirection: 'row', padding: pxToDp(16), marginTop: pxToDp(20) }}>
          <TouchableOpacity onPress={() => this.context.navigate('Myhome', id)}>
            <ImageBackground
              style={{
                height: pxToDp(72),
                width: pxToDp(72),
                borderRadius: pxToDp(36),
              }}
              imageStyle={{
                height: pxToDp(72),
                width: pxToDp(72),
                borderRadius: pxToDp(36),
              }}
              source={
                this.props.avatar
                  ? {
                    uri: this.props.avatar
                  }
                  : avatar
                    ? { uri: changeImgSize(avatar, 'small') }
                    : require('../../res/initAvatar.jpeg')
              }
            >
              <Image style={{ height: pxToDp(93), width: pxToDp(93), marginTop: pxToDp(-10), marginLeft: pxToDp(-12) }} source={require('../../res/头像框2.png')} />
            </ImageBackground>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              width: '70%',
              marginLeft: pxToDp(8)
            }}
          >
            <View>
              <Text
                style={{
                  marginLeft: pxToDp(8),
                  fontSize: pxToDp(16),
                  color: '#333333',
                  fontWeight: 'bold'
                }}
              >
                {nickName ? nickName : '新用户8888'}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(8) }}>
              <Text
                style={{
                  marginLeft: pxToDp(8),
                  fontSize: pxToDp(14),
                  color: '#666666',
                }}
              >
                {ownSay ? ownSay : '这个人很神秘，什么都没写'}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(8) }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <TouchableOpacity
                  onPress={() => this.context.navigate('Fan')}
                  style={{ marginRight: pxToDp(4), flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: pxToDp(16),
                      fontWeight: 'bold',
                      color: '#333333',
                      alignSelf: 'center',
                      marginLeft: pxToDp(8)
                    }}
                  >
                    {fansCount}
                  </Text>
                  <Text style={{ fontSize: pxToDp(14), color: '#666666', marginLeft: pxToDp(4) }}>
                    粉丝
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.context.navigate('Follow')}
                  style={{ marginLeft: pxToDp(4), flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: pxToDp(16),
                      fontWeight: 'bold',
                      color: '#333333',
                      alignSelf: 'center'
                    }}
                  >
                    {followCount}
                  </Text>
                  <Text style={{ fontSize: pxToDp(14), color: '#666666', marginLeft: pxToDp(4) }}>
                    关注
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default connect(
  (state) => ({
    userInfo: state.getIn(['homeReducer', 'userInfo']),
    avatar: state.getIn(['SettingReducer', 'avatar'])
  }),
  { changeUserFollowAction }
)(UserInner);
