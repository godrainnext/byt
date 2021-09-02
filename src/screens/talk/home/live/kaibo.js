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
  ToastAndroid
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
import Top from '../../../../component/common/top';
import { launchImageLibrary } from 'react-native-image-picker';
import request from '@service/index';
import { connect } from 'react-redux';
import Mybtn from '../../../../component/common/mybtn';
import SvgUri from 'react-native-svg-uri';
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
class App extends Component {
  //   _engine?: RtcEngine;
  static contextType = NavigationContext;

  constructor(props) {
    super(props);

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
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this._openPicker()}>
        <Image
          source={require('../../../../res/addimg.png')}
          style={{ width: pxToDp(40), height: pxToDp(40) }}
        />
      </TouchableOpacity>
    );
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
      const result = await request.post({
        url: '/stream',
        data: fd
      });

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
      .then(() => this.context.navigate('Tabbar'));
  };

  render() {
    const { roomName, channelName, roomImg, joinSucceed } = this.state;
    return joinSucceed ? (
      <View style={{ flex: 1 }}>{this._renderVideos(this.props.userInfo)}</View>
    ) : (
      <View style={styles.max}>
        <Top title="开直播" icon1="arrow-back" />
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
              填写相关信息，让观众快速找到您
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
        <View style={styles.buttonHolder}>
          <Mybtn
            title="开始直播"
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
      <View style={styles.fullView}>
        <RtcLocalView.SurfaceView
          style={styles.max}
          // channelId={this.props.route.params.channelName}
          channelId={this.state.channelName}
          renderMode={VideoRenderMode.Hidden}
        />
        {this._renderRemoteVideos(userInfo)}
      </View>
    ) : null;
  };

  _renderRemoteVideos = (userInfo) => {
    const { peerIds } = this.state;
    return (
      <View
        style={styles.remoteContainer}
        // contentContainerStyle={{ paddingHorizontal: 2.5 }}
        // horizontal={true}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              height: pxToDp(50),
              width: pxToDp(168),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: pxToDp(24),
              padding: pxToDp(4)
            }}
          >
            <View style={{ marginRight: pxToDp(8), marginLeft: pxToDp(-8) }}>
              <Image
                style={{
                  width: pxToDp(45),
                  height: pxToDp(45),
                  backgroundColor: 'gray',
                  borderRadius: pxToDp(32)
                }}
                source={{
                  uri: userInfo.avatar
                }}
              ></Image>
            </View>
            <View style={{ marginBottom: pxToDp(4) }}>
              <MarqueeHorizontal
                textList={[
                  { label: '1', value: this.state.roomName },
                  { label: '2', value: this.state.roomName },
                  { label: '3', value: this.state.roomName }
                ]}
                speed={20}
                width={80}
                height={30}
                direction={'left'}
                reverse={false}
                bgContainerStyle={{ backgroundColor: 'transparent' }}
                textStyle={{ fontSize: 16, color: 'white' }}
                onTextClick={(item) => {
                  alert('' + JSON.stringify(item));
                }}
              />
              {/* <Text style={{ color: 'white', fontSize: 18 }}>{this.props.route.params.roomName}</Text> */}
              <Text style={{ color: 'white', fontSize: 16 }}>
                {userInfo.nickName}
              </Text>
              {/* <Text style={{ fontSize: 12, color: 'gray' }}>40热度</Text> */}
            </View>
            {/* <TouchableOpacity style={{ borderRadius: pxToDp(30), backgroundColor: 'orange', marginLeft: pxToDp(8), justifyContent: 'center', alignItems: 'center', height: pxToDp(26) }}>
              <View style={{ padding: pxToDp(2), width: pxToDp(40), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 12 }}>关注</Text>
              </View>
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: pxToDp(16)
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: pxToDp(8)
              }}
            >
              {/* <LottieView style={{ width: pxToDp(70), marginLeft: pxToDp(16) }} source={require('../../lottie/705-linear-line.json')} autoPlay loop /> */}
              <LottieView
                style={{ width: pxToDp(70), marginLeft: pxToDp(16) }}
                source={require('../../../../lottie/16773-fire.json')}
                autoPlay
                loop
              />
              <Text>40热度</Text>
            </View>
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
                <Text
                  style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
                >
                  ×
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <WebView
          style={{
            width: pxToDp(350),
            height: pxToDp(400),
            backgroundColor: 'transparent',
            marginTop: pxToDp(320)
          }}
          // source={{ html: HTML }}
          source={{ uri: 'file:///android_asset/static.bundle/index.html' }}
          originWhitelist={['*']}
          // source={{ html:this.props.html,baseUrl:'file:///android_asset/web/'}}
          // source={{ html:this.props.html,baseUrl:'http://127.0.0.1:5500/src/page/test/index.html'}}
          javaScriptEnabled={true} //是否开启js
          domStorageEnabled={true} //是否开启存储
          scalesPageToFit={false} //用户是否可以改变页面
          scrollEnabled={false}
          // injectedJavaScript={`	`}
          onMessage={(event) => {
            '接收h5页面传过来的消息';
          }}
        />
        <TouchableOpacity
          onPress={() => this._engine.switchCamera()}
          style={{
            position: 'absolute',
            bottom: pxToDp(20),
            right: pxToDp(40)
          }}
        >
          <SvgUri
            svgXmlData='<svg t="1630203432296" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2320" width="200" height="200"><path d="M909.232 160l-159.6 0c-3.584-32-33.856-48-70.672-48L352.256 112c-36.832 0-67.088 16-70.656 48L129.088 160C89.568 160 48 196.88 48 236.096l0 539.76C48 815.072 89.568 848 129.088 848l780.144 0C948.752 848 976 815.072 976 775.856L976 236.096C976 196.88 948.752 160 909.232 160zM514.128 769.008c-141.136-0.816-255.968-116.288-255.968-257.408 0-60.912 21.696-119.824 61.056-166.304l-28.864-26.624 155.184-48.608-35.92 158.608-38.032-35.088c-27.28 33.28-42.384 74.928-42.384 118.016 0 102.176 83.152 185.808 185.344 186.4L514.128 769.008zM758.144 690.336l-153.76 52.96 30.752-159.312 35.6 30.768c20.432-30.592 31.328-66.048 31.328-103.136 0-95.856-74.72-177.408-170.096-185.664l6.128-70.752c131.76 11.424 234.992 124.064 234.992 256.432 0 54.224-16.72 105.968-48.272 149.904L758.144 690.336z" p-id="2321" fill="#515151"></path></svg>'
            width="30"
            height="30"
          />
        </TouchableOpacity>
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
export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(App);
