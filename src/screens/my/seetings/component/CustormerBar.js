import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  DeviceEventEmitter
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import SvgUri from 'react-native-svg-uri';
import { NavigationContext } from '@react-navigation/native';
import { connect } from 'react-redux';
import changeImgSize from '@utils/changeImgSize';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
const jubao =
  '<svg t="1627606303248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5636" width="200" height="200"><path d="M377.3056 990.0032a30.08 30.08 0 0 1-30.0032-29.9008 29.952 29.952 0 0 1 29.9008-30.1056l463.3984-1.408h0.1024a30.0672 30.0672 0 0 1 29.9904 29.9136 30.0288 30.0288 0 0 1-29.888 30.0928l-463.5008 1.408c0.0896 0 0.0896 0 0 0z" fill="#2c2c2c" p-id="5637"></path><path d="M853.6064 958.5024a29.952 29.952 0 0 1-30.0032-30.0032V639.0016c0-84.9024-32.3968-164.608-91.3024-224.6016-58.7008-59.8016-136.8064-92.8-219.8016-92.8s-160.9984 32.896-219.8016 92.8c-58.8928 60.0064-91.3024 139.6992-91.3024 224.6016v289.4976a29.952 29.952 0 0 1-29.9904 30.0032 29.952 29.952 0 0 1-30.0032-30.0032V639.0016c0-50.9056 9.792-100.1984 29.0944-146.7008a379.6224 379.6224 0 0 1 79.5008-120 370.624 370.624 0 0 1 117.9008-80.9984 364.032 364.032 0 0 1 144.6016-29.696c50.0992 0 98.8032 9.984 144.6016 29.696a367.9232 367.9232 0 0 1 117.888 80.9984 378.3296 378.3296 0 0 1 79.4112 119.8976 380.8768 380.8768 0 0 1 29.0944 146.7008v289.4976a29.9008 29.9008 0 0 1-29.888 30.1056z" fill="#2c2c2c" p-id="5638"></path><path d="M796.8 284.0064c-5.1968 0-10.496-1.408-15.3984-4.3008a29.9904 29.9904 0 0 1-10.4064-41.1008l45.504-76.1088a29.9904 29.9904 0 0 1 51.4944 30.7072l-45.4912 76.096a29.7088 29.7088 0 0 1-25.7024 14.6944z m-579.8016 0a29.9904 29.9904 0 0 1-25.792-14.6048l-45.504-76.096a29.9008 29.9008 0 0 1 10.3936-41.1008 29.9008 29.9008 0 0 1 41.1008 10.3936l45.504 76.096a29.9008 29.9008 0 0 1-25.7024 45.312z m296.9984-119.104a29.9648 29.9648 0 0 1-29.9904-29.4016l-1.408-70.7072A29.9648 29.9648 0 0 1 512 34.2016h0.6016a29.9648 29.9648 0 0 1 30.0032 29.4016l1.3952 70.6944a29.9648 29.9648 0 0 1-29.4016 30.592h-0.6016zM345.1008 614.784a30.0416 30.0416 0 0 1-29.6064-35.3024 175.8336 175.8336 0 0 1 72.8064-113.792 175.7184 175.7184 0 0 1 131.9936-29.0048c11.904 2.0992 23.6032 5.504 34.7008 9.9968a30.0032 30.0032 0 0 1-22.2976 55.7056 115.1744 115.1744 0 0 0-22.8992-6.6048 115.584 115.584 0 0 0-87.104 19.1104 116.096 116.096 0 0 0-48.0896 75.0976 29.9776 29.9776 0 0 1-29.504 24.7936z" fill="#2c2c2c" p-id="5639"></path></svg>';
const dianzan =
  '<svg t="1627563384559" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1994" width="200" height="200"><path d="M 905.6 345.631 c -37.44 -9.79125 -125.472 -9.6 -254.304 -13.0556 c 6.14437 -28.1278 7.48875 -53.4712 7.48875 -98.4 C 658.88 126.656 580.544 32 511.231 32 c -48.9591 0 -89.2791 40.0313 -89.8556 89.1844 c -0.67125 60.2878 -19.2 164.447 -119.808 217.343 c -7.39219 3.84 -28.4156 14.2078 -31.4878 15.6478 l 1.53562 1.34438 a 95.04 95.04 0 0 0 -59.9034 -24 H 121.856 A 89.9522 89.9522 0 0 0 32 421.376 V 900.8 c 0 49.5356 40.32 89.8556 89.8556 89.8556 h 89.8566 a 88.8 88.8 0 0 0 79.9678 -51.7434 l 1.34438 0.384375 l 7.2 1.91906 c 0.48 0 0.767812 0.0965625 1.34344 0.28875 c 17.28 4.32 50.4966 12.1912 121.44 28.5112 c 15.36 3.45656 95.6156 20.64 178.944 20.64 h 163.776 c 49.92 0 86.88 -18.6234 107.232 -57.7912 c 19.9688 -34.7531 117.696 -221.28 117.6 -484.224 c 0 -37.8244 -26.2078 -86.1122 -84.96 -102.912 Z M 241.664 900.8 c 0 16.5122 -13.44 29.9522 -29.9531 29.9522 H 121.857 a 29.9522 29.9522 0 0 1 -29.9513 -29.9522 V 421.376 c 0 -16.5112 13.44 -29.9513 29.9513 -29.9513 h 89.8566 c 16.6078 0 29.9522 13.44 29.9522 29.9513 V 900.8 Z M 929.984 467.456 c -12.48 300.96 -109.824 437.184 -109.824 437.184 c -9.12 16.32 -23.6156 26.1122 -54.5278 26.1122 H 601.952 c -82.2722 0 -163.872 -18.6244 -165.984 -19.2 c -124.416 -28.6078 -130.943 -30.8156 -138.72 -33.0244 l 4.32 -440.16 c 0 -45.5034 0.96 -33.9844 0 -33.4078 C 438.464 348.32 480.128 224 481.28 121.952 A 30.0478 30.0478 0 0 1 511.232 92 c 31.68 0 87.6478 63.5522 87.6478 142.272 c 0 71.04 -2.88 83.2312 -27.7444 157.248 c 299.52 0 297.504 4.32 323.904 11.2312 c 32.8312 9.40875 35.52 36.4809 35.52 45.8887 c 0 10.2722 -0.192188 8.83125 -0.575625 18.8156 Z" fill="#2c2c2c" p-id="1995"></path></svg>';
class Index extends PureComponent {
  static contextType = NavigationContext;
  state = { avatar: '' };
  componentDidMount() {
    this.subscript = DeviceEventEmitter.addListener(
      'valueChange',
      this.changeAvatar
    );
  }
  changeAvatar = (avatar) => {
    this.setState({ avatar });
  };
  componentWillUnmount() {
    this.subscript.remove();
  }
  render() {
    //console.log(this.props);
    const {
      fansCount = 0,
      followCount = 0,
      nickName = '新用户888',
      avatar = 'http://c-ssl.duitang.com/uploads/item/201205/04/20120504234528_UAfcM.jpeg',
      ownSay,
      sex,
      birthday
    } = this.props.userInfo;

    //goToPag 函数 负责跳转页面
    //tabs 标题数组
    //activeTab 当前激活索引
    return (
      <View style={{ flexDirection: 'column' }}>
        <View>
          <ImageBackground
            style={{
              height: pxToDp(320)
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                marginTop: pxToDp(32)
              }}
              TouchableOpacity={1}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: pxToDp(100),
                  alignSelf: 'center',
                  elevation: 10,
                  shadowColor: 'black', //  阴影颜色
                  shadowOffset: { width: 0, height: 0 }, // 阴影偏移
                  shadowOpacity: 1, // 阴影不透明度
                  shadowRadius: 10 //  圆角
                }}
              >
                <Image
                  source={
                    this.props.avatar
                      ? {
                          uri: this.props.avatar
                        }
                      : avatar
                      ? { uri: changeImgSize(avatar, 'small') }
                      : require('../../../../res/initAvatar.jpeg')
                  }
                  style={{
                    width: pxToDp(90),
                    height: pxToDp(90),
                    borderRadius: pxToDp(48),
                    margin: pxToDp(3)
                  }}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: pxToDp(20),
                fontWeight: 'bold',
                color: '#333333',
                alignSelf: 'center',
                marginTop: pxToDp(8)
              }}
              numberOfLines={1}
            >
              {nickName ? nickName : '新用户8888'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <View style={{ marginRight: pxToDp(8) }}>
                <Text
                  style={{
                    fontSize: pxToDp(18),
                    fontWeight: 'bold',
                    color: '#333333',
                    alignSelf: 'center'
                  }}
                >
                  {fansCount}
                </Text>
                <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                  粉丝
                </Text>
              </View>
              <View style={{ marginLeft: pxToDp(8) }}>
                <Text
                  style={{
                    fontSize: pxToDp(18),
                    fontWeight: 'bold',
                    color: '#333333',
                    alignSelf: 'center'
                  }}
                >
                  {followCount}
                </Text>
                <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                  关注
                </Text>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: '80%',
                height: pxToDp(30)
              }}
            >
              <Text
                style={{
                  color: '#333333',
                  fontSize: pxToDp(16),
                  alignSelf: 'center',
                  marginTop: pxToDp(4)
                }}
                numberOfLines={1}
              >
                {ownSay}
              </Text>
            </View>
              <Button
                title="编辑资料"
                onPress={() =>
                  this.context.navigate('Ziliao', this.props.userInfo)
                }
                ViewComponent={LinearGradient}
                buttonStyle={{
                  width:160,
                  height:40,
                  borderRadius:pxToDp(32),
                  alignSelf:'center',
                  color: '#fcfcfc',
                  fontWeight: 'bold',
                  fontSize: pxToDp(18),marginTop:pxToDp(16)
                }}
                linearGradientProps={{
                  colors: ['#fa9222', '#ffd501'],
                  start: { x: 0, y: 0.5 },
                  end: { x: 1, y: 0.5 }
                }}
              />
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo']),
  avatar: state.getIn(['SettingReducer', 'avatar'])
}))(Index);
