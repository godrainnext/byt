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
    const { nickName, avatar, id } = this.props.userInfo;
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
                  fontSize: pxToDp(12),
                  color: '#666666',
                }}
              >
                我爱越剧
              </Text>
              <SvgUri
                width='20' height='12'
                svgXmlData='<svg t="1629697652445" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3372" width="200" height="200"><path d="M906.752 906.2912a32 32 0 0 1 4.7616 63.6416l-4.7104 0.3584H120.576a32 32 0 0 1-4.7104-63.6416l4.7104-0.3584H906.752z m-281.4976-845.824a32 32 0 0 1 45.2608 0l205.5168 205.568a32 32 0 0 1 0 45.2608l-478.1568 478.1568a32 32 0 0 1-23.6544 9.3184l-212.48-6.9632a32 32 0 0 1-30.976-33.0752l6.9632-198.6048a32 32 0 0 1 9.3696-21.504z m-111.7184 202.24l-312.32 312.2688-5.376 153.9584 166.5536 5.4272L673.792 422.912l-160.256-160.256z m134.2976-134.3488l-89.088 89.088 160.256 160.256 89.1392-89.088-160.3072-160.256z" p-id="3373" fill="#666666"></path></svg>' />

            </View>
            <View style={{ flexDirection: 'row', marginTop: pxToDp(6), alignItems: 'center', marginLeft: pxToDp(8) }}>
              <View style={{ flexDirection: 'row', paddingRight: pxToDp(8), }}>
                {/* <TouchableOpacity
              onPress={() => {
                this.context.navigate('Follow', id);
              }}
              
            > */}

                <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>关注</Text><Text
                  style={{
                    fontSize: pxToDp(12),
                    color: '#333333',
                    alignItems: 'center',
                  }}
                >
                  {followCount}
                </Text>
                {/* </TouchableOpacity> */}
              </View>
              <View style={{ height: pxToDp(12), borderWidth: .5, margin: pxToDp(4), marginRight: pxToDp(12), borderColor: '#333333' }}></View>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                {/* <TouchableOpacity
              onPress={() => {
                this.context.navigate('Fan', id);
              }}
            > */}
                <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>粉丝</Text>
                <Text
                  style={{
                    fontSize: pxToDp(12),
                    color: '#33333',
                    alignSelf: 'center'
                  }}
                >
                  {fansCount}
                </Text>
                {/* </TouchableOpacity> */}
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
