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
  LayoutAnimation, Animated, Easing
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
import Mybtn from '../../../component/common/mybtn'
import Danmu from './danmu'
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
    for (let i = 0; i < 10; i++) {
      this[`HeartArg${i}`] = new Animated.Value(0)
    }
    this.viewNum = 0
    this.state = {
      appId: '29792ec3eded410facd609fb7ad76fef',
      channelName: '',
      joinSucceed: false, //默认进入直播
      peerIds: [],
      roomName: '',
      roomImg: '',
      arr: [],
      gift: [
        {
          img: require('./蓝玫瑰.png'), name: '鲜花'
        },
        {
          img: require('./666.png'), name: '666'
        },
        {
          img: require('./棒棒糖.png'), name: '棒棒糖'
        },
        {
          img: require('./红包.png'), name: '炸弹'
        },
        {
          img: require('./爱心.png'), name: '爱心'
        },
        {
          img: require('./礼盒.png'), name: '礼盒'
        },
        {
          img: require('./红包.png'), name: '红包'
        },
        {
          img: require('./火箭.png'), name: '火箭'
        },
      ],
      activeTab: 0,
      sendrocket: false
    }
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
  changeTab = (index) => {
    this.setState({ activeTab: index });
  };
  sendGift() {

    this.setState({ sendrocket: true })
    setTimeout(() => {
      this.setState({ sendrocket: false })
    }, 1900);
    console.log(this.state.sendrocket);
  };
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
  startAnimate = () => {
    const COLOR_ARR = [
      '#9C89B8',
      '#F0A6CA',
      '#EFC3E6',
      '#F0E6EF',
      '#B8BEDD',
      '#5BC0EB',
      '#FDE74C',
      '#9BC53D',
      '#E55934',
      '#FA7921'
    ]
    this[`HeartArg${this.viewNum}`].setValue(0)
    //设置随机颜色
    let colorIndex = Math.floor(Math.random() * 10)
    this[`animImg${this.viewNum}`].setNativeProps({
      style: {
        tintColor: COLOR_ARR[colorIndex]
      }
    })
    //根据当前动画驱动值进行判断是否对新VIEW进行驱动
    let currentValue = this[`HeartArg${this.viewNum}`].__getValue()
    if (currentValue !== 0) {
      this.viewNum++
    }
    Animated.timing(
      this[`HeartArg${this.viewNum}`],
      {
        toValue: 3,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => {
      this[`HeartArg${this.viewNum}`].setValue(0)
    })
    //如果当前正在驱动的VIEW的数量大于8,则重置回0,让动画循环
    if (this.viewNum > 8) {
      this.viewNum = 0
    }
    this.viewNum++
  }

  _renderRemoteVideos = (stream) => {
    const { peerIds } = this.state;


    return (
      <View
        style={styles.remoteContainer}
      // contentContainerStyle={{ paddingHorizontal: 2.5 }}
      // horizontal={true}
      >

        {this.state.sendrocket ?
          (<LottieView
            style={{ marginLeft: pxToDp(-16), marginTop: pxToDp(-50), display: 'none' }}
            source={require('../../../../lottie/61505-rocket-acceleration.json')}
            loop
            autoPlay
          />) : null}
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

                height: pxToDp(24),
                width: pxToDp(24),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: pxToDp(24),
                padding: pxToDp(4)
              }}
            >
              <SvgUri svgXmlData='<svg t="1631176303657" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2963" width="200" height="200"><path d="M1013.44 484.736l-170.24-212.992a42.752 42.752 0 0 0-47.488-13.632 42.688 42.688 0 0 0-28.416 40.192v127.808H426.432a85.12 85.12 0 0 0 0 170.304h340.736v127.872a42.496 42.496 0 0 0 75.84 26.56l170.432-212.992a42.176 42.176 0 0 0 0-53.12z m-416.64 367.36H255.36c-46.72 0-84.608-38.08-84.608-85.12v-512c0-46.72 38.144-84.544 85.312-84.544h340.736a85.12 85.12 0 0 0 0-170.24H170.88A170.432 170.432 0 0 0 0.448 170.496v681.6a170.432 170.432 0 0 0 170.432 170.432h425.984a85.12 85.12 0 0 0 0-170.432z" p-id="2964" fill="#707070"></path></svg>' width='20' height='20' />
            </TouchableOpacity>
          </View>
        </View>
        <Danmu />
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
        <View style={{ position: 'absolute', bottom: pxToDp(345), right: pxToDp(20), height: pxToDp(30), width: pxToDp(30) }}>
          <View style={{}} >
            {
              Array(10).fill().map((_, index) => {
                return <Animated.Image
                  key={index}
                  ref={_ => this[`animImg${index}`] = _}
                  style={[{ width: 30, height: 30 }, {
                    top: this[`HeartArg${index}`].interpolate({
                      inputRange: [0, 1, 2, 3],
                      outputRange: [10, -100, -200, -300]
                    }),
                    right: this[`HeartArg${index}`].interpolate({
                      inputRange: [0, 1, 2, 3],
                      outputRange: Math.floor(Math.random() + 0.5) === 0 ? [7, 30, 15, 7] : [7, 0, 30, 10]
                    }),
                    transform: [{
                      scale: this[`HeartArg${index}`].interpolate({
                        inputRange: [0, 1, 2, 3],
                        outputRange: [0.5, 1, 1.5, 1]
                      })
                    }],
                    opacity: this[`HeartArg${index}`].interpolate({
                      inputRange: [0, 1, 2, 3],
                      outputRange: [0, 1, 0.5, 0]
                    })
                  }]}
                  source={require('./爱心zz.png')}
                />
              })
            }
          </View>
          <TouchableOpacity onPress={this.startAnimate}
            style={{ width: 30, height: 30 }}
          ><Image source={require('./爱心zz.png')} style={{ width: 30, height: 30 }} /></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ position: 'absolute', bottom: pxToDp(33), right: pxToDp(70), height: pxToDp(30), width: pxToDp(30) }}
          onPress={() => this.Scrollable.open()}>
          <SvgUri
            width='30' height='30'
            svgXmlData='<svg t="1631534600864" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2543" width="200" height="200"><path d="M925.392593 227.555556H731.97037c15.17037-17.066667 24.651852-39.822222 28.444445-62.577778 3.792593-32.237037-5.688889-62.577778-24.651852-89.125926-39.822222-53.096296-117.57037-62.577778-170.666667-22.755556-28.444444 20.859259-47.407407 72.059259-60.681481 115.674074-13.274074-43.614815-32.237037-94.814815-60.681482-115.674074-53.096296-39.822222-128.948148-30.340741-170.666666 22.755556-18.962963 26.548148-28.444444 56.888889-24.651852 89.125926 3.792593 22.755556 13.274074 45.511111 28.444444 62.577778H109.985185c-26.548148 0-47.407407 20.859259-47.407407 47.407407v227.555556c0 26.548148 20.859259 47.407407 47.407407 47.407407h18.962963v369.777778c0 26.548148 20.859259 47.407407 47.407408 47.407407h680.77037c26.548148 0 47.407407-20.859259 47.407407-47.407407V549.925926h18.962963c26.548148 0 47.407407-20.859259 47.407408-47.407407v-227.555556c0-26.548148-20.859259-47.407407-45.511111-47.407407zM599.22963 98.607407c28.444444-20.859259 68.266667-15.17037 91.022222 11.377778 9.481481 13.274074 15.17037 30.340741 13.274074 47.407408-1.896296 17.066667-11.377778 32.237037-24.651852 41.718518-17.066667 13.274074-73.955556 17.066667-127.051852 15.17037 11.377778-51.2 32.237037-102.4 47.407408-115.674074z m-280.651852 11.377778c13.274074-17.066667 32.237037-24.651852 51.2-24.651852 13.274074 0 26.548148 3.792593 39.822222 13.274074 17.066667 13.274074 36.02963 66.37037 49.303704 117.570371-49.303704 1.896296-109.985185-1.896296-127.051852-15.170371-13.274074-9.481481-22.755556-24.651852-24.651852-41.718518-3.792593-18.962963 1.896296-36.02963 11.377778-49.303704zM117.57037 493.037037V284.444444H398.222222v208.592593H117.57037z m68.266667 417.185185V549.925926H398.222222v360.296296H185.837037zM455.111111 910.222222V284.444444h113.777778v625.777778h-113.777778z m394.42963 0H625.777778V549.925926h223.762963v360.296296z m64.474074-417.185185H625.777778V284.444444h288.237037v208.592593z" p-id="2544" fill="#515151"></path></svg>'
          />
        </TouchableOpacity>

        <RBSheet
          animationType='fade'
          ref={(ref) => {
            this.Scrollable = ref;
          }}
          height={pxToDp(290)}
          closeOnDragDowncustomStyles={{
            container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
          }}
        >
          <View style={{backgroundColor:'#D5E8E6'}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '92%', margin: 16 }}>
              {
                this.state.gift.map((item, index) => (
                  <View style={{
                    width: '25%', height: pxToDp(90), marginTop: pxToDp(20),
                    borderColor:
                      index === this.state.activeTab ? '#62bfad' : 'white',

                    borderWidth:
                      index === this.state.activeTab ? pxToDp(1) : pxToDp(0),
                  }}>
                    <TouchableOpacity
                      onPress={() => this.changeTab(index)}
                      style={{

                        justifyContent: 'center', alignItems: 'center',
                      }}>
                      <Image source={item.img} style={{ width: pxToDp(50), height: pxToDp(50), }} />
                      <Text>{item.name}</Text>
                    </TouchableOpacity>

                  </View>
                ))
              }

              <Mybtn
                title="发送"
                onPress={() => {
                  this.sendGift()
                  this.Scrollable.close()

                }}
                buttonStyle={{
                  width: pxToDp(90),
                  height: pxToDp(30),
                  borderRadius: pxToDp(32),
                  marginRight: pxToDp(0),
                  marginTop: pxToDp(20),
                  marginLeft: pxToDp(256),
                  marginBottom: pxToDp(20),

                }}
                titleStyle={{
                  height: 30,
                  color: 'white',
                  fontSize: pxToDp(14),
                  marginTop: pxToDp(10)
                }}
              />
            </View>
          </View>
        </RBSheet>
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
