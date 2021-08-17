import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  DeviceEventEmitter
} from 'react-native';
import { connect } from 'react-redux';
import { pxToDp } from '@utils/styleKits';
import changeImgSize from '@utils/changeImgSize';
import { NavigationContext } from '@react-navigation/native';
import { getUserFollow, getUserFans } from '@service/mine';
import { changeUserFollowAction } from '../../screens/my/follow/store/action';
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
    const { fansCount, followCount } = this.state;
    return (
      <View
        style={{
          borderRadius: pxToDp(10),
          backgroundColor: '#f0fcff',
          margin: pxToDp(10),
          height: pxToDp(140),
          elevation:3,borderWidth:0
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.context.navigate('Myhome', id)}>
            <Image
              style={{
                height: pxToDp(60),
                width: pxToDp(60),
                borderRadius: pxToDp(30),
                margin: pxToDp(10)
              }}
              source={{
                uri: this.props.avatar
                  ? this.props.avatar
                  : changeImgSize(avatar, 'small')
              }}
            ></Image>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '70%'
            }}
          >
            <View>
              <Text
                style={{
                  margin: pxToDp(10),
                  fontSize: pxToDp(20),
                  fontWeight: 'bold'
                }}
              >
                {nickName}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.context.navigate('Like');
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  fontWeight: 'bold',
                  alignSelf: 'center'
                }}
              >
                2
              </Text>
              <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>点赞</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.context.navigate('Collection');
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  fontWeight: 'bold',
                  alignSelf: 'center'
                }}
              >
                5
              </Text>
              <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>收藏</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.context.navigate('Follow', id);
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  fontWeight: 'bold',
                  alignSelf: 'center'
                }}
              >
                {followCount}
              </Text>
              <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>关注</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.context.navigate('Fan', id);
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  fontWeight: 'bold',
                  alignSelf: 'center'
                }}
              >
                {fansCount}
              </Text>
              <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>粉丝</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
