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
  LayoutAnimation
} from 'react-native';
import RtcEngine, {
  RtcLocalView,
  RtcRemoteView,
  VideoRenderMode,
  ChannelProfile,
  ClientRole
} from 'react-native-agora';
import RBSheet from 'react-native-raw-bottom-sheet';
import { WebView } from 'react-native-webview';
import { MarqueeHorizontal, MarqueeVertical } from 'react-native-marquee-ab';
import { pxToDp } from '@utils/styleKits';
import LottieView from 'lottie-react-native';
import { NavigationContext } from '@react-navigation/native';
import { connect } from 'react-redux';
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
class App extends PureComponent {
  //   _engine?: RtcEngine;
  static contextType = NavigationContext;

  constructor(props) {
    super(props);

    this.state = {
      appId: '29792ec3eded410facd609fb7ad76fef',
      channelName: '',
      joinSucceed: false, //默认进入直播
      peerIds: [],
      roomName: '',
      roomImg: '',
      arr: [],
   
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
            source={require('../../../res/addimg.png')}
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
    this.startCall(this.props.route.params.user.id);
  }

  /**
   * @name init
   * @description Function to initialize the Rtc Engine, attach event listeners and actions
   */
  init = async (id) => {
    const { appId } = this.state;

    this._engine = await RtcEngine.create(appId);
    // 启用视频模块。
    await this._engine.enableVideo();
    // 开启本地视频预览。
    await this._engine.startPreview();
    // 将频道场景设为直播。
    // if (this.props.userInfo.id === id) {
    //   await this._engine.setClientRole(ClientRole.Broadcaster);
    // } else {
    await this._engine.setChannelProfile(ChannelProfile.LiveBroadcasting);
    // 设置用户角色为主播。
    // }

    await this._engine.setClientRole(ClientRole.Audience);
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
  startCall = async (id) => {
    await this.init(id);
    await this._engine?.joinChannel(
      this.props.route.params.token,
      this.props.route.params.channelName,
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

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderVideos(this.props.route.params.user)}
      </View>
    );
  }

  _renderVideos = (stream) => {
    const { peerIds } = this.state;
    console.log(peerIds);
    return (
      <View style={styles.fullView}>
        <View style={{ flex: 1 }}>
          {peerIds.map((value) => {
            return (
              <RtcRemoteView.SurfaceView
                style={styles.remote}
                uid={value}
                channelId={this.props.route.channelName}
                renderMode={VideoRenderMode.Hidden}
                zOrderMediaOverlay={true}
              />
            );
          })}
        </View>

        {/* <RtcLocalView.SurfaceView
                    style={styles.max}
                    // channelId={this.props.route.params.channelName}
                    channelId={this.props.route.params.channelName}
                    renderMode={VideoRenderMode.Hidden}
                /> */}
        {this._renderRemoteVideos(stream)}
      </View>
    );
  };

  _renderRemoteVideos = (stream) => {
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
              width: pxToDp(190),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: pxToDp(24),
              padding: pxToDp(4)
            }}
          >
            <View style={{ marginRight: pxToDp(8) }}>
              <Image
                style={{
                  width: pxToDp(45),
                  height: pxToDp(45),
                  backgroundColor: 'gray',
                  borderRadius: pxToDp(32)
                }}
                source={{
                  uri: stream.avatar
                }}
              ></Image>
            </View>
            <View>
              <MarqueeHorizontal
                textList={[
                  { label: '1', value: this.props.route.params.roomName },
                  { label: '2', value: this.props.route.params.roomName },
                  { label: '3', value: this.props.route.params.roomName }
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
              <Text style={{ color: 'white', fontSize: 16 }}>
                {stream.nickName}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: pxToDp(32),
                backgroundColor: 'orange',
                marginLeft: pxToDp(8),
                justifyContent: 'center',
                alignItems: 'center',
                height: pxToDp(26)
              }}
            >
              <View
                style={{
                  padding: pxToDp(2),
                  width: pxToDp(40),
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ color: 'white', fontSize: 12 }}>关注</Text>
              </View>
            </TouchableOpacity>
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
                source={require('../../../lottie/16773-fire.json')}
                autoPlay
                loop
              />
              <Text style={{ color: 'white', fontWeight: 'bold' }}>10热度</Text>
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
            width: pxToDp(300),
            height: pxToDp(400),
            backgroundColor: 'transparent',
            marginTop: pxToDp(300)
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
          style={{ position: 'absolute', bottom: 20, right: 20, height: 30, width: 30 }}
          onPress={() => this.Scrollable1.open()}>
          <SvgUri
            width='30' height='30'
            svgXmlData='<svg t="1629613855898" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2155" width="200" height="200"><path d="M921 266.4H781.3l26.6-26.5c39.6-39.4 39.8-103.4 0.4-143l-0.4-0.4c-38.5-38.3-100.8-38.3-139.3 0L542.3 222.2c-12.7 12.6-20.8 28-25.1 44.2h-0.9c-3.5-18.9-12.2-37-26.8-51.5L363.9 89.4c-38.3-38.2-100.3-38.2-138.6 0l-0.2 0.2c-39.4 39.5-39.3 103.5 0.2 142.9l34 33.9H103c-21.7 0-39.3 17.6-39.3 39.3v120.4c0 21.7 17.6 39.3 39.3 39.3h35v438.8c0 32.6 26.4 59 59 59h629.9c32.6 0 59-26.4 59-59V465.5h35c21.7 0 39.3-17.6 39.3-39.3V305.7c0.1-21.7-17.5-39.3-39.2-39.3zM578.7 861.2c0 21.7-17.6 39.3-39.3 39.3H500c-21.7 0-39.3-17.6-39.3-39.3V550.6c0-21.7 17.6-39.3 39.3-39.3h39.3c21.7 0 39.3 17.6 39.3 39.3v310.6z m0-475.6c0 21.7-17.6 39.3-39.3 39.3H500c-21.7 0-39.3-17.6-39.3-39.3v-19.7c0-21.7 17.6-39.3 39.3-39.3h39.3c21.7 0 39.3 17.6 39.3 39.3v19.7z" fill="#FF5D66" p-id="2156"></path></svg>'
          />
        </TouchableOpacity>
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
  }
});
export default connect((state) => ({
  userInfo: state.getIn(['homeReduer', 'userInfo'])
}))(App);
