import React, { Component } from 'react';
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
  ImageBackground
} from 'react-native';
import { Input } from 'react-native-elements';
import RtcEngine, {
  RtcLocalView,
  RtcRemoteView,
  VideoRenderMode,
  ChannelProfile,
  ClientRole
} from 'react-native-agora';
import { WebView } from 'react-native-webview';
import { MarqueeHorizontal, MarqueeVertical } from 'react-native-marquee-ab';
import { pxToDp } from '../../../../utils/styleKits';
import LottieView from 'lottie-react-native';
import { NavigationContext } from '@react-navigation/native';
import axios from 'axios';
import PulseLoader from 'react-native-pulse-loader';
import Top from '@components/common/top';
import { launchImageLibrary } from 'react-native-image-picker';
import Mybtn from '../../../../component/common/mybtn';
import request from '@service/index';

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
export default class App extends Component {
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
      result: {}
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
          const pickerResult = response.assets[0];
          console.log(pickerResult);
          this.setState({ image: pickerResult });
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
      <View style={{ flex: 1 }}>{this._renderVideos()}</View>
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

  _renderVideos = () => {
    const { joinSucceed } = this.state;
    return joinSucceed ? (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={{
          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.vjshi.com%2F2015-07-03%2F1435906279772_102%2F00002.jpg%3Fx-oss-process%3Dstyle%2Fwatermark&refer=http%3A%2F%2Fpic.vjshi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631528779&t=9aa6e3fc4a10ebf05c0ad6f581c2c98e'
        }}
      >
        <View style={styles.fullView}>{this._renderRemoteVideos()}</View>
      </ImageBackground>
    ) : null;
  };

  _renderRemoteVideos = () => {
    const { peerIds } = this.state;
    return (
      <View style={styles.remoteContainer}>
        <TouchableOpacity
          onPress={this.closeCall}
          style={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            height: pxToDp(24),
            width: pxToDp(24),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: pxToDp(24),
            padding: pxToDp(4)
          }}
        >
          <View
            style={{
              height: pxToDp(20),
              width: pxToDp(20),
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              X
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ height: pxToDp(412) }}>
          <WebView
            style={{
              width: '100%',
              height: pxToDp(320),
              backgroundColor: 'transparent'
            }}
            // source={{ html: HTML }}
            source={{ uri: 'file:///android_asset/static.bundle/music.html' }}
            originWhitelist={['*']}
            javaScriptEnabled={true} //是否开启js
            domStorageEnabled={true} //是否开启存储
            scalesPageToFit={false} //用户是否可以改变页面
            scrollEnabled={false}
            // injectedJavaScript={`	`}
            onMessage={(event) => {
              '接收h5页面传过来的消息';
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{
                  width: pxToDp(65),
                  height: pxToDp(65),
                  borderRadius: pxToDp(24)
                }}
                source={{
                  uri: 'https://pics2.baidu.com/feed/bd315c6034a85edf1a928e0e0da87425dc547587.jpeg?token=119b3f2abe0889ed0753ea8c3e8b288d'
                }}
              ></Image>
              <Text style={{ fontSize: pxToDp(16) }}>野原新之助</Text>
            </View>
            <TouchableOpacity
              style={{
                width: pxToDp(80),
                height: pxToDp(40),
                borderRadius: pxToDp(32),
                backgroundColor: '#468cd3',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ fontSize: pxToDp(16) }}>开始演唱</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{
                  width: pxToDp(65),
                  height: pxToDp(65),
                  borderRadius: pxToDp(24)
                }}
                source={{
                  uri: 'https://img0.baidu.com/it/u=4203889072,870375471&fm=26&fmt=auto&gp=0.jpg'
                }}
              ></Image>
              <Text style={{ fontSize: pxToDp(16) }}>蜡笔小新</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: pxToDp(8)
          }}
        >
          <Text style={{ fontSize: pxToDp(14), color: '#468cd3' }}>
            开始演唱啦，请留意各自演唱的分段哦
          </Text>
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
    position: 'absolute'
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
  }
});
