import React, { PureComponent } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
  ToastAndroid
} from 'react-native';
import { Input } from 'react-native-elements';
import RtcEngine, {
  ChannelProfile,
  ClientRole
} from 'react-native-agora';
import { pxToDp } from '../../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Top from '@components/common/top';
import { launchImageLibrary } from 'react-native-image-picker';
import Mybtn from '../../../../component/common/mybtn';
import request from '@service/index';
import { playmusic } from '../../../../component/common/iconSvg';
import SvgUri from 'react-native-svg-uri';
import Swiper from 'react-native-swiper';
import VideoPlayScreen from '../../../../component/videoplayer/VideoPlayScreen';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux'
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
// interface Props { }

/**
 * @property peerIds Array for storing connected peers
 * @property appId
 * @property channelName Channel Name for the current session
 * @property joinSucceed State variable for storing success
 */
// interface State {
//   appId: string;
//   token: string;
//   channelName: string;
//   joinSucceed: boolean;
//   peerIds: number[];
// }
class App extends PureComponent {
  //   _engine?: RtcEngine;
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    console.log(this.props.route.params);

    this.state = {
      appId: '29792ec3eded410facd609fb7ad76fef',
      token:
        '00629792ec3eded410facd609fb7ad76fefIABpETFY+6FE43RijdulLOEgxp1roHUSSYalrUbZyLMofMu4JTQAAAAAIgAm/Chp5B0eYQQAAQB02hxhAgB02hxhAwB02hxhBAB02hxh',
      // channelName: 'ABC',
      channelName: '',
      joinSucceed: false, //默认进入直播
      peerIds: [],
      roomName: '',
      roomImg: '',
      image: {},
      result: {},
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
        { id: '10', title: '双烈记 夸夫', autor: '吴凤花 方亚芬' },
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
        { id: '10', title: '红花曲', autor: '金采风' },
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
        { id: '10', title: '春香传 心歌', autor: '王文娟' },
      ],
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
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1
      },
      (response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          try {
            const pickerResult = response?.assets[0];
            console.log(pickerResult);
            this.setState({ image: pickerResult });
          } catch (error) {
            ToastAndroid.show('请选择正确的图片', ToastAndroid.SHORT);
          }
        }
      }
    );
  }

  componentDidMount() {
    this.init();
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
      const { peerIds } = this.state;
      if (peerIds.indexOf(uid) === -1) {
        this.setState({
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
    const fd = new FormData();
    const file = {
      uri: this.state.image.uri,
      type: 'multipart/form-data',
      name: this.state.image.type
    };
    fd.append('file', file);
    if (
      this.state.roomName &&
      this.state.token &&
      this.state.channelName &&
      this.state.image
    ) {
      const token = await request.post({
        url: `/stream/token/${this.state.channelName}`
      });
      fd.append('name', this.state.roomName);
      fd.append('token', token);
      fd.append('cannalName', this.state.channelName);
      fd.append('status', 1);
      const result = await request.post({
        url: '/stream',
        data: fd
      });
      console.log(result);
      this.setState({ result });
      await this._engine?.joinChannel(token, this.state.channelName, null, 0);
    } else {
      ToastAndroid.show('请输入房间信息与封面图', ToastAndroid.SHORT);
    }
  };

  /**
   * @name endCall
   * @description Function to end the call
   */
  endCall = async () => {
    await this._engine?.leaveChannel();
    this.setState({ peerIds: [], joinSucceed: false });
  };

  closeCall = () => {
    request
      .delete({ url: `/stream/${this.state.result.insertId}` })
      .then((res) => {
        console.log(res);
        this.endCall();
      })
      .then(this.context.navigate('Tabbar'));
  };

  render() {
    const { roomName, channelName, roomImg, joinSucceed } = this.state;

    return joinSucceed ? (
      <View style={{ flex: 1 }}>{this._renderVideos(this.props.userInfo)}</View>
    ) : (
      <View style={styles.max}>
        <Top icon1="arrow-back" title="开房间" />
        <View style={[styles.max, { padding: pxToDp(16) }]}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: pxToDp(32),
              marginBottom: pxToDp(8)
            }}
          >
            <Text style={{ color: '#62bfad' }}>
              填写相关信息，让小伙伴快速找到您
            </Text>
          </View>
          <View
            style={{
              borderRadius: pxToDp(8),
              elevation: 1,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10, //  圆角
              backgroundColor: 'white'
            }}
          >
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                height: pxToDp(240)
              }}
            >
              <View>
                <Input
                  placeholder="请输入房间名"
                  // rightIcon={<Text style={{ color: 'gray' }}></Text>}
                  value={roomName}
                  inputStyle={{ fontSize: pxToDp(16) }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    width: 200
                  }}
                  onChangeText={(roomName) => this.setState({ roomName })}
                  leftIcon={
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: pxToDp(4)
                      }}
                    >
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          color: 'red',
                          marginBottom: pxToDp(4)
                        }}
                      >
                        *
                      </Text>
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          color: '#333333'
                        }}
                      >
                        房间名
                      </Text>
                    </View>
                  }
                />
              </View>
              <View>
                <Input
                  placeholder="请输入房间号"
                  value={channelName}
                  inputStyle={{ fontSize: pxToDp(16) }}
                  inputContainerStyle={{
                    borderBottomWidth: 0
                  }}
                  onChangeText={(channelName) => this.setState({ channelName })}
                  // rightIcon={<Text style={{ color: 'gray' }}>请选择房间号</Text>}
                  leftIcon={
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: pxToDp(4)
                      }}
                    >
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          color: 'red',
                          marginBottom: pxToDp(4)
                        }}
                      >
                        *
                      </Text>
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          color: '#333333'
                        }}
                      >
                        房间号
                      </Text>
                    </View>
                  }
                />
              </View>
              <View>
                <Input
                  rightIcon={this.tianjia()}
                  disabled={true}
                  inputContainerStyle={{
                    borderBottomWidth: 0
                  }}
                  leftIcon={
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: pxToDp(4)
                      }}
                    >
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          color: 'red',
                          marginBottom: pxToDp(4)
                        }}
                      >
                        *
                      </Text>
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          color: '#333333'
                        }}
                      >
                        封面图
                      </Text>
                    </View>
                  }
                />
              </View>
            </View>
            {this.state.image?.uri ? (
              <Image
                source={{ uri: this.state.image?.uri }}
                style={{ height: pxToDp(240) }}
              />
            ) : (
              <View></View>
            )}
          </View>
        </View>
        <View style={styles.buttonHolder}>
          <Mybtn
            title="创建房间"
            onPress={this.startCall}
            buttonStyle={{
              width: pxToDp(320),
              height: pxToDp(40),
              alignSelf: 'center',
              borderRadius: pxToDp(32)
            }}
            titleStyle={{
              color: '#fcfcfc',
              fontWeight: 'bold',
              fontSize: pxToDp(16)
            }}
          />
        </View>
      </View>
    );
  }

  _renderVideos = (userInfo) => {
    const { joinSucceed } = this.state;
    return joinSucceed ? (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.fullView}>{this._renderRemoteVideos(userInfo)}</View>
      </ImageBackground>
    ) : null;
  };

  _renderRemoteVideos = (userInfo) => {
    const { peerIds } = this.state;
    return (
      <View
        style={styles.remoteContainer}
      >
        <Top title='小剧场' icon1="arrow-back" />
        <View style={{ width: '100%' }}>
          <Image style={{ height: pxToDp(115), width: '100%', resizeMode: 'contain', zIndex: 9999 }} source={require('../../../../res/tv2.png')} />
          <Image style={{ height: pxToDp(225), width: pxToDp(42), resizeMode: 'contain', zIndex: 9999, marginLeft: pxToDp(1.7), marginTop: pxToDp(-12) }} source={require('../../../../res/tv1.png')} />
          <Image style={{ height: pxToDp(230), width: pxToDp(134), resizeMode: 'contain', zIndex: 9999, marginLeft: pxToDp(264), marginTop: pxToDp(-225) }} source={require('../../../../res/tv3.png')} />
          <Image style={{ height: pxToDp(45), width: '100%', resizeMode: 'contain', zIndex: 9999, marginLeft: pxToDp(-20), marginTop: pxToDp(-40.5) }} source={require('../../../../res/tv4.png')} />
          <View style={{ height: pxToDp(210), width: pxToDp(300), marginLeft: pxToDp(18), marginTop: pxToDp(-250) }}>
            <VideoPlayScreen videoInfo={{ video: this.state.video }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: pxToDp(50) }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: pxToDp(65), height: pxToDp(65), borderRadius: pxToDp(35) }} source={{ uri: userInfo.avatar }}></Image>
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
              {autoPlay ? (<TouchableOpacity style={{ width: pxToDp(90), height: pxToDp(30), borderRadius: pxToDp(32), backgroundColor: '#62bfad', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.toContr();
                  this.setState({ autoPlay: !autoPlay });
                }}>
                <Text style={{ fontSize: pxToDp(14) }}>
                  暂停演唱
                </Text>
              </TouchableOpacity>) : (<TouchableOpacity style={{ width: pxToDp(90), height: pxToDp(30), borderRadius: pxToDp(32), backgroundColor: '#62bfad', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.toContr();
                  this.setState({ autoPlay: !autoPlay });
                }}>
                <Text style={{ fontSize: pxToDp(14) }}>
                  开始演唱
                </Text>
              </TouchableOpacity>)}
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: pxToDp(65), height: pxToDp(65), borderRadius: pxToDp(35) }} source={require('../../../../res/addimg.png')}></Image>
              <Text style={{ fontSize: pxToDp(16) }}>等待伙伴加入</Text>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
    flex: 1,
    backgroundColor: '#D5E8E6'
  },
  buttonHolder: {
    position: 'absolute',
    bottom: pxToDp(8),
    left: 0,
    right: 0
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
    position: 'absolute',
    // marginTop:80
  },
  remote: {
    width: pxToDp(150),
    height: pxToDp(150),
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
    marginTop: pxToDp(16),
    backgroundColor: 'white',
    borderBottomLeftRadius: pxToDp(16),
    borderBottomRightRadius: pxToDp(16),
    elevation: 8,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black',  //  阴影颜色
    shadowRadius: pxToDp(10),  //  圆角
  }
});
export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(App);