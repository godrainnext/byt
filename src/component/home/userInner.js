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

class UserInner extends PureComponent {
  state = { follow: [], fans: [] };
  static contextType = NavigationContext;
  componentDidMount() {
    DeviceEventEmitter.addListener('removeFollow', () => {
      getUserFollow().then((res) => {
        this.setState({ follow: res });
      });
    });
    getUserFollow().then((res) => {
      this.setState({ follow: res });
    });
    getUserFans().then((res) => {
      this.setState({ fans: res });
    });
  }

  render() {
    const { nickName, avatar } = this.props.userInfo;
    const { followCount = 0 } = this.state.follow;
    const { fansCount = 0 } = this.state.fans;
    return (
      <View
        style={{
          borderRadius: pxToDp(10),
          backgroundColor: 'rgba(255,255,255,0.5)',
          margin: pxToDp(10),
          height: pxToDp(140)
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.context.navigate('Myhome')}>
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
                this.context.navigate('Follow', this.state.follow.follow);
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
                this.context.navigate('Fan');
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
export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo']),
  avatar: state.getIn(['SettingReducer', 'avatar'])
}))(UserInner);
