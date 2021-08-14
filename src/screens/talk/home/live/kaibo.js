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
  StyleSheet
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
        '00629792ec3eded410facd609fb7ad76fefIADCc8H70U749XGwDaAgInl0TjHWz2j6gN0U1okFKIK5sUgDg6MAAAAAEACcjToMHqkYYQEAAQAeqRhh',
      // channelName: 'ABC',
      channelName: '',
      joinSucceed: false, //默认进入直播
      peerIds: [],
      roomName: '',
      roomImg: '',
      arr: []
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
    await this._engine?.joinChannel(
      // this.props.route.params.token,
      // this.props.route.params.channelName,
      this.state.token,
      this.state.channelName,
      null,
      0
    );
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
    this.endCall().then(this.context.navigate('Tabbar'));
  };

  render() {
    const { roomName, channelName, roomImg, joinSucceed } = this.state;
    return joinSucceed ? (
      <View style={{ flex: 1 }}>{this._renderVideos()}</View>
    ) : (
      <View style={styles.max}>
        <View style={styles.max}>
          <View>
            <View style={{ marginTop: 4 }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: pxToDp(32),
                  marginBottom: pxToDp(8)
                }}
              >
                <View
                  style={{
                    margin: pxToDp(4),
                    height: pxToDp(32),
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ fontSize: pxToDp(20) }}>开播</Text>
                </View>
                <Text style={{ color: '#50935E' }}>
                  请您如实准确填写本人信息，否则将认证失败
                </Text>
              </View>
              <Input
                placeholder="请输入房间名"
                // rightIcon={<Text style={{ color: 'gray' }}></Text>}
                value={roomName}
                onChangeText={(roomName) => this.setState({ roomName })}
                leftIcon={<Text style={{ fontSize: pxToDp(16) }}>*房间名</Text>}
              />
              <Input
                placeholder="请选择房间号"
                value={channelName}
                onChangeText={(channelName) => this.setState({ channelName })}
                // rightIcon={<Text style={{ color: 'gray' }}>请选择房间号</Text>}
                leftIcon={<Text style={{ fontSize: pxToDp(16) }}>*房间号</Text>}
              />
              <Input
                rightIcon={
                  <View>
                    {this.tianjia()}

                    {this.state.arr.map((v, k) => {
                      return (
                        <View style={styles.Box} key={k}>
                          <TouchableOpacity
                            onPress={() => this.setState({ roomImg: v.path })}
                          >
                            <Image
                              style={{ height: pxToDp(40), width: pxToDp(40) }}
                              source={{ uri: v.path }}
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </View>
                }
                disabled={true}
                leftIcon={<Text style={{ fontSize: pxToDp(16) }}>*封面图</Text>}
              />
              {/* <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this._openPicker()}>
                                    <View style={{ marginTop: pxToDp(8) }}>
                                        <Image style={{ width: pxToDp(100), height: pxToDp(100) }} source={require("../../images/addimg.png")}></Image>
                                    </View>
                                </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.buttonHolder}>
            <TouchableOpacity onPress={this.startCall} style={styles.button}>
              <Text style={styles.buttonText}> 开始直播 </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={this.endCall} style={styles.button}>
              <Text style={styles.buttonText}> 结束直播 </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    );
  }

  _renderVideos = () => {
    const { joinSucceed } = this.state;
    return joinSucceed ? (
      <View style={styles.fullView}>
        <RtcLocalView.SurfaceView
          style={styles.max}
          // channelId={this.props.route.params.channelName}
          channelId={this.state.channelName}
          renderMode={VideoRenderMode.Hidden}
        />
        {this._renderRemoteVideos()}
      </View>
    ) : null;
  };

  _renderRemoteVideos = () => {
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
                  borderRadius: pxToDp(30)
                }}
                source={{
                  uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa4.att.hudong.com%2F40%2F67%2F01300000375382124123679222720.jpg&refer=http%3A%2F%2Fa4.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630999562&t=6c0560e4b4201a4592ec342b0fa58f50'
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
              <Text style={{ color: 'white', fontSize: 16 }}>猪倌不养猪</Text>
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
                  X
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
        {/* <WebView
          style={{ width: pxToDp(80), height: pxToDp(80), backgroundColor: 'transparent',marginTop:pxToDp(200)}}
          // source={{ html: HTML }}
          source={{uri:"file:///android_asset/static.bundle/index1.html"}}
          originWhitelist={['*']}
          // source={{ html:this.props.html,baseUrl:'file:///android_asset/web/'}}
          // source={{ html:this.props.html,baseUrl:'http://127.0.0.1:5500/src/page/test/index.html'}}
          javaScriptEnabled={true}//是否开启js
          domStorageEnabled={true}//是否开启存储
          scalesPageToFit={false}//用户是否可以改变页面
          scrollEnabled={false}
          // injectedJavaScript={`	`}
          onMessage={event => { '接收h5页面传过来的消息' }}
        /> */}
        {/* <View style={{ backgroundColor: 'red', height: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 24, padding: 4, marginTop: 500, }}>
          <Input
            placeholder='请输入评论'
            inputStyle={{ color: "#333" }}
          />
        </View> */}

        {/* {peerIds.map((value) => {
          return (
            <RtcRemoteView.SurfaceView
              style={styles.remote}
              uid={value}
              channelId={this.state.channelName}
              renderMode={VideoRenderMode.Hidden}
              zOrderMediaOverlay={true}
            />
          );
        })} */}
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
