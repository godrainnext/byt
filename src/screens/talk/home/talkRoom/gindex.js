import React, { PureComponent } from 'react';
import {
  Platform,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import RtcEngine, { ChannelProfile, ClientRole } from 'react-native-agora';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Top from '@components/common/top';
import { playmusic } from '../../../../component/common/iconSvg';
import SvgUri from 'react-native-svg-uri';
import LottieView from 'lottie-react-native';
import VideoPlayScreen from '../../../../component/videoplayer/VideoPlayScreen';
import AnimatedLoader from 'react-native-animated-loader';
import { connect } from 'react-redux';
const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};
const requestCameraAndAudioPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
    ]);
    if (
      granted['android.permission.RECORD_AUDIO'] ===
      PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.CAMERA'] ===
      PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('You can use the cameras & mic');
    } else {
      console.log('Permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

// const { width, height } = Dimensions.get('window');
const HTML = `
<!DOCTYPEhtml>\n
<html>
	<head>
		<meta charset="UTF-8">
		<title>每日签到</title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
	</head>
	<body>
  <div>每日签到</div>

	</body>
</html>

`;
class App extends PureComponent {
  //   _engine?: RtcEngine;
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    console.log(this.props.route.params);

    this.state = {
      appId: '29792ec3eded410facd609fb7ad76fef',
      // token: '00629792ec3eded410facd609fb7ad76fefIAAbKUcPA8ZKD6c3OvRQ3dLsbHqp9OSHU+zfE7bUrcatNkgDg6MAAAAAEACcjToMxfsZYQEAAQDE+xlh',
      // channelName: 'ABC',
      video: 'http://120.79.86.32:3000/video/7/file',

      channelName: '',
      joinSucceed: false, //默认进入直播
      peerIds: [],
      roomName: '',
      roomImg: '',
      arr: [],
      showSong: true,
      visible: true,
      data1: [
        { id: '1', title: '梁祝 十八相送', autor: '吴凤花 单仰萍' },
        { id: '2', title: '何文秀 哭牌算命', autor: '王君安 李敏' },
        { id: '3', title: '沉香扇', autor: '丁赛君 王文娟' },
        { id: '4', title: '春香传', autor: ' 王文娟 徐玉兰' },
        { id: '5', title: '孔雀东南飞', autor: '陈颖 吴凤花' },
        { id: '6', title: '打金枝', autor: '吴凤花 吴素英' },
        { id: '7', title: '宋弘传奇 和诗', autor: '王君安' },
        { id: '8', title: '杜十娘 沉宝', autor: '陈飞 吴凤花' },
        { id: '9', title: '吴王悲歌 刺王', autor: '吴凤花 董鉴鸿' },
        { id: '10', title: '双烈记 夸夫', autor: '吴凤花 方亚芬' }
      ],
      data2: [
        { id: '1', title: '梁祝 楼台会', autor: '章瑞虹 方亚芬' },
        { id: '2', title: '何文秀 算命', autor: '赵志刚 方亚芬' },
        { id: '3', title: '祥林嫂 洞房', autor: '方亚芬 许杰' },
        { id: '4', title: '白蛇传 合钵', autor: '戚雅仙 毕春芳' },
        { id: '5', title: '沉香扇 书房会', autor: '毕春芳 王文娟' },
        { id: '6', title: '玉蜻蜓 认子', autor: '戚雅仙 毕春芳' },
        { id: '7', title: '盘夫索夫', autor: '陆锦花 金采风' },
        { id: '8', title: '红楼梦 调包计', autor: '金采风 周宝奎' },
        { id: '9', title: '劈山救母', autor: '连玉澜 张国华' },
        { id: '10', title: '红花曲', autor: '金采风' }
      ],
      data3: [
        { id: '1', title: '宝莲灯 对月思家', autor: '吴凤花' },
        { id: '2', title: '孔雀东南飞 殉情', autor: '傅全香 范瑞娟' },
        { id: '3', title: '一缕麻', autor: '徐铭' },
        { id: '4', title: '红楼梦 试玉', autor: '郑国凤 盛舒扬' },
        { id: '5', title: '李娃传 剔目', autor: '盛舒扬 王舒雯' },
        { id: '6', title: '千里送京娘', autor: '盛舒扬 王柔桑' },
        { id: '7', title: '十八相送', autor: '钱惠丽 单仰萍' },
        { id: '8', title: '紫玉钗 洞房', autor: '钱惠丽 单仰萍' },
        { id: '9', title: '家 幻觉', autor: '赵志刚 孙智君' },
        { id: '10', title: '春香传 心歌', autor: '王文娟' }
      ],
      autoPlay: false
    };
    if (Platform.OS === 'android') {
      // Request required permissions from Android
      requestCameraAndAudioPermission().then(() => {
        console.log('requested!');
      });
    }
  }
  tianjia() {
    if (this.state.arr != null && this.state.arr.length >= 1) {
      //这里的判断根据所传图片张数定
      return;
    } else {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => this._openPicker()}>
          <Image
            source={require('../../../../res/addimg.png')}
            style={{ width: pxToDp(40), height: pxToDp(40) }}
          />
        </TouchableOpacity>
      );
    }
  }
  //打开本地图册
  _openPicker() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
      maxFiles: 9
    }).then((image) => {
      console.log('imag', image);
      this.setState({
        arr: image
      });
      //     const {arr} = this.state;
      //    arr.push(image);
      //     this.setState({arr})
      //     console.log('arr',arr[1])
    });
  }

  componentDidMount() {
    // this.init();
    console.log(this.props.route.params.user);
    // this.props.route.params.startCall? this.props.route.params.startCall():console.log(123);
    this.startCall();
    this.animation.pause();
    new Promise((res, rej) => {
      setTimeout(() => {
        res(123);
      }, 1000);
    }).then((res) =>
      this.setState({
        visible: !this.state.visible
      })
    );
  }

  /**
   * @name init
   * @description Function to initialize the Rtc Engine, attach event listeners and actions
   */
  init = async () => {
    const { appId } = this.state;
    // this._engine = await RtcEngine.create(appId);
    // await this._engine.enableVideo();

    this._engine = await RtcEngine.create(appId);
    // 启用视频模块。
    await this._engine.enableVideo();
    // 开启本地视频预览。
    await this._engine.startPreview();
    // 将频道场景设为直播。
    await this._engine.setChannelProfile(ChannelProfile.LiveBroadcasting);
    // 设置用户角色为主播。
    await this._engine.setClientRole(ClientRole.Broadcaster);
    this._engine.addListener('Warning', (warn) => {
      console.log('Warning', warn);
    });

    this._engine.addListener('Error', (err) => {
      console.log('Error', err);
    });

    this._engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed);
      // Get current peer IDs
      const { peerIds } = this.state;
      // If new user
      if (peerIds.indexOf(uid) === -1) {
        this.setState({
          // Add peer ID to state array
          peerIds: [...peerIds, uid]
        });
      }
    });

    this._engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      const { peerIds } = this.state;
      this.setState({
        // Remove peer ID from state array
        peerIds: peerIds.filter((id) => id !== uid)
      });
    });

    // If Local user joins RTC channel
    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);
      // Set state variable to true
      this.setState({
        joinSucceed: true
      });
    });
  };

  /**
   * @name startCall
   * @description Function to start the call
   */
  startCall = async () => {
    // console.log(this.props.route.params.token)
    // Join Channel using null token and channel name
    await this.init();
    await this._engine?.joinChannel(
      this.props.route.params.token,
      this.props.route.params.channelName,
      // this.state.token,
      // this.state.channelName,
      null,
      0
    );
  };
  // startCall = ()=>this.props.route.params.startCall(this.state.arr[i].token,this.state.arr[i].channelName)

  /**
   * @name endCall
   * @description Function to end the call
   */
  endCall = async () => {
    await this._engine?.leaveChannel();
    this.setState({ peerIds: [], joinSucceed: false });
  };

  closeCall = () => {
    this.endCall().then(this.context.navigate('Tabbar'));
  };
  toContr() {
    if (this.state.autoPlay == false) {
      this.animation.play();
    } else {
      this.animation.pause();
    }
  }

  render() {
    const { user } = this.props.route.params;
    const { userInfo } = this.props;
    const { roomName, channelName, roomImg, joinSucceed } = this.state;
    return (
      <View style={{ flex: 1 }}>{this._renderVideos(user, userInfo)}</View>
    );
  }

  _renderVideos = (user, userInfo) => {
    const { joinSucceed } = this.state;
    const { peerIds } = this.state;
    console.log(peerIds);
    return (
      <View style={styles.fullView}>
        {this._renderRemoteVideos(user, userInfo)}
      </View>
    );
  };
  _renderRemoteVideos = (user, userInfo) => {
    const { peerIds, showSong, autoPlay, visible } = this.state;
    console.log(autoPlay);
    return (
      <View style={styles.remoteContainer}>
        <Top title="小剧场" icon1="arrow-back" />
        {/* <AnimatedLoader
          visible={visible}
          overlayColor="rgba(255,255,255,1)"
          source={require('../../../../../lottie/匹配.json')}
          animationStyle={{
            width: 200,
            height: 200
          }}
          speed={1}
        >
          <Text style={{ fontSize: pxToDp(24) }}>匹配中...</Text>
        </AnimatedLoader> */}
        <View style={{ width: '100%' }}>
          <View style={{ marginTop: pxToDp(-24) }}>
            <Image
              style={{
                height: pxToDp(115),
                width: '100%',
                resizeMode: 'contain',
                zIndex: 9999
              }}
              source={require('../../../../res/tv2.png')}
            />
            <Image
              style={{
                height: pxToDp(225),
                width: pxToDp(42),
                resizeMode: 'contain',
                zIndex: 9999,
                marginLeft: pxToDp(1.7),
                marginTop: pxToDp(-12)
              }}
              source={require('../../../../res/tv1.png')}
            />
            <Image
              style={{
                height: pxToDp(230),
                width: pxToDp(134),
                resizeMode: 'contain',
                zIndex: 9999,
                marginLeft: pxToDp(264),
                marginTop: pxToDp(-225)
              }}
              source={require('../../../../res/tv3.png')}
            />
            <Image
              style={{
                height: pxToDp(45),
                width: '100%',
                resizeMode: 'contain',
                zIndex: 9999,
                marginLeft: pxToDp(-20),
                marginTop: pxToDp(-40.5)
              }}
              source={require('../../../../res/tv4.png')}
            />
            <View
              style={{
                height: pxToDp(210),
                width: pxToDp(300),
                marginLeft: pxToDp(18),
                marginTop: pxToDp(-250)
              }}
            >
              <VideoPlayScreen videoInfo={{ video: this.state.video }} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: pxToDp(30)
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{
                  width: pxToDp(65),
                  height: pxToDp(65),
                  borderRadius: pxToDp(35)
                }}
                source={{ uri: userInfo.avatar }}
              ></Image>
              <Text style={{ fontSize: pxToDp(16) }}>{userInfo.nickName}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <LottieView
                style={{ width: pxToDp(100), alignSelf: 'center' }}
                source={require('../../../../../lottie/直播live效果.json')}
                ref={(animation) => {
                  this.animation = animation;
                }}
              />
              {autoPlay ? (
                <TouchableOpacity
                  style={{
                    width: pxToDp(90),
                    height: pxToDp(30),
                    borderRadius: pxToDp(32),
                    backgroundColor: '#62bfad',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: pxToDp(-10)
                  }}
                  onPress={() => {
                    this.toContr();
                    this.setState({ autoPlay: !autoPlay });
                  }}
                >
                  <Text style={{ fontSize: pxToDp(14) }}>暂停演唱</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    width: pxToDp(90),
                    height: pxToDp(30),
                    borderRadius: pxToDp(32),
                    backgroundColor: '#62bfad',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: pxToDp(-10)
                  }}
                  onPress={() => {
                    this.toContr();
                    this.setState({ autoPlay: !autoPlay });
                  }}
                >
                  <Text style={{ fontSize: pxToDp(14) }}>开始演唱</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{
                  width: pxToDp(65),
                  height: pxToDp(65),
                  borderRadius: pxToDp(35)
                }}
                source={{ uri: user.avatar }}
              ></Image>
              <Text style={{ fontSize: pxToDp(16) }}>{user.nickName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.songbox}>
          <Swiper
            removeClippedSubviews={false}
            showsButtons={false}
            showsPagination={true}
            loop={false}
            autoplay={false}
            paginationStyle={{ bottom: pxToDp(-15) }} //dot的位置
          >
            <View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {this.state.data1.map((item) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: pxToDp(10),
                      alignItems: 'center'
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          fontWeight: 'bold',
                          color: '#333333'
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ fontSize: pxToDp(14), color: '#999999' }}>
                        {item.autor}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{ marginRight: pxToDp(20) }}
                      onPress={() => this.setState({ showSong: false })}
                    >
                      <SvgUri svgXmlData={playmusic} width="30" height="30" />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {this.state.data2.map((item) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: pxToDp(10),
                      alignItems: 'center'
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          fontWeight: 'bold',
                          color: '#333333'
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ fontSize: pxToDp(14), color: '#999999' }}>
                        {item.autor}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{ marginRight: pxToDp(20) }}
                      onPress={() => this.setState({ showSong: false })}
                    >
                      <SvgUri svgXmlData={playmusic} width="30" height="30" />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {this.state.data3.map((item) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: pxToDp(10),
                      alignItems: 'center'
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          fontWeight: 'bold',
                          color: '#333333'
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ fontSize: pxToDp(14), color: '#999999' }}>
                        {item.autor}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{ marginRight: pxToDp(20) }}
                      onPress={() => this.setState({ showSong: false })}
                    >
                      <SvgUri svgXmlData={playmusic} width="30" height="30" />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          </Swiper>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  max: {
    flex: 1
  },
  buttonHolder: {
    height: pxToDp(100),
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0093E9',
    borderRadius: pxToDp(24)
  },
  buttonText: {
    color: '#fff'
  },
  fullView: {
    width: dimensions.width,
    height: dimensions.height
  },
  remoteContainer: {
    width: '100%',
    height: dimensions.height,
    position: 'absolute'
    // marginTop:80
  },
  remote: {
    width: dimensions.width,
    height: dimensions.height,
    marginHorizontal: 2.5
  },
  noUserText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#0093E9'
  },
  songbox: {
    height: pxToDp(280),
    padding: pxToDp(16),
    marginTop: pxToDp(20),
    backgroundColor: 'white',
    borderBottomLeftRadius: pxToDp(16),
    borderBottomRightRadius: pxToDp(16),
    elevation: 8, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(10) //  圆角
  }
});
export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(App);
