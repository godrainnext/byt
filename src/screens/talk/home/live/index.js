import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import { FAB } from 'react-native-elements'
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      appId: '29792ec3eded410facd609fb7ad76fef',
      peerIds: [],
      token:
        '00629792ec3eded410facd609fb7ad76fefIAAbKUcPA8ZKD6c3OvRQ3dLsbHqp9OSHU+zfE7bUrcatNkgDg6MAAAAAEACcjToMxfsZYQEAAQDE+xlh',
      channelName: 'ABC',
      arr: [
        {
          bacUriL:
            'https://anchorpost.msstatic.com/cdnimage/anchorpost/1033/27/a678d87465509b7483726f82dfba20_2168_1627155664.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
          nameL: '糖可爱',
          titleL: '恭喜镇长超皇恭喜真爷超皇！ 大象np',
          numL: '2.5万',
          bacUriR:
            'https://anchorpost.msstatic.com/cdnimage/anchorpost/1032/dc/d7e5883b0e124c0c0834e960090c95_5883_1606125262.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
          nameR: '郭德纲于谦相声24小时',
          titleR: '【无唱段】郭德纲于谦相声德云晚安音频轮播',
          numR: '7546',
          appId: '29792ec3eded410facd609fb7ad76fef',
          channelName: 'ABC',
          token:
            '00629792ec3eded410facd609fb7ad76fefIAAbKUcPA8ZKD6c3OvRQ3dLsbHqp9OSHU+zfE7bUrcatNkgDg6MAAAAAEACcjToMxfsZYQEAAQDE+xlh',
          roomName: 'hdia'
        }
      ]
    };

  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  componentDidMount() {
    // this.init();r
  }

  /**
   * @name init
   * @description Function to initialize the Rtc Engine, attach event listeners and actions
   */
  init = async () => {
    console.log(123);
    const { appId } = this.state;
    // this._engine = await RtcEngine.create(appId);
    // await this._engine.enableVideo();

    this._engine = await RtcEngine.create(appId)
    // 启用视频模块。
    await this._engine.enableVideo()
    // 开启本地视频预览。
    await this._engine.startPreview()
    // 将频道场景设为直播。
    await this._engine.setChannelProfile(ChannelProfile.LiveBroadcasting)
    // 设置用户角色为主播。
    await this._engine.setClientRole(ClientRole.Audience)
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
          peerIds: [...peerIds, uid],
        });
      }
    });

    this._engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      const { peerIds } = this.state;
      this.setState({
        // Remove peer ID from state array
        peerIds: peerIds.filter((id) => id !== uid),
      });
    });

    // If Local user joins RTC channel
    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);
      // Set state variable to true
      this.setState({
        joinSucceed: true,
      });
    });
    console.log(1234);
  };

  startCall = async () => {
    // console.log(this.props.route.params.token)
    // await this.init()
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
  static contextType = NavigationContext;

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf6fc' }}>
        <ScrollView >
          <View >
            <TouchableOpacity onPress={() => this.context.navigate('SeeZhiBo', {
              roomName: this.state.arr[0].roomName,
              channelName: this.state.arr[0].channelName,
              token: this.state.arr[0].token,
              startCall: this.startCall,
              peerIds: this.state.peerIds
            })}>
              <ImageBackground style={styles.image} imageStyle={{ borderRadius: pxToDp(8) }} source={require('../../../../res/13.jpg')} >
                <Text style={{ color: "white", fontSize: pxToDp(20), margin: pxToDp(10), left: pxToDp(220) }}>直播间名字</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Text style={{ color: "white", fontSize: pxToDp(15), margin: pxToDp(10) }}>主播名字</Text>
                  <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: pxToDp(150) }}>
                    <Icon name="eyeo" size={24} color={'grey'} />
                    <Text style={{ color: "white", marginLeft: pxToDp(5) }}>66</Text>
                  </View>
                  <LottieView style={{ width: pxToDp(70), }} source={require('../../../../res/705-linear-line.json')} autoPlay loop />
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.context.navigate('SeeFang', {
              roomName: this.state.arr[0].roomName,
              channelName: this.state.arr[0].channelName,
              token: this.state.arr[0].token,
              startCall: this.startCall,
              peerIds: this.state.peerIds
            })}>
              <ImageBackground style={styles.image} imageStyle={{ borderRadius: pxToDp(8) }} source={require('../../../../res/14.jpg')} >
                <Text style={{ color: "white", fontSize: pxToDp(20), margin: pxToDp(10), left: pxToDp(220) }}>直播间名字</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Text style={{ color: "white", fontSize: pxToDp(15), margin: pxToDp(10) }}>主播名字</Text>
                  <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: pxToDp(150) }}>
                    <Icon name="eyeo" size={24} color={'grey'} />
                    <Text style={{ color: "white", marginLeft: pxToDp(5) }}>66</Text>
                  </View>
                  <LottieView style={{ width: pxToDp(70), }} source={require('../../../../res/705-linear-line.json')} autoPlay loop />
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <ImageBackground style={styles.image} imageStyle={{ borderRadius: pxToDp(8) }} source={require('../../../../res/15.jpg')} >
              <Text style={{ color: "white", fontSize: pxToDp(20), margin: pxToDp(10), left: pxToDp(220) }}>直播间名字</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: pxToDp(15), margin: pxToDp(10) }}>主播名字</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: pxToDp(150) }}>
                  <Icon name="eyeo" size={24} color={'grey'} />
                  <Text style={{ color: "white", marginLeft: pxToDp(5) }}>66</Text>
                </View>
                <LottieView style={{ width: pxToDp(70), }} source={require('../../../../res/705-linear-line.json')} autoPlay loop />
              </View>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground style={styles.image} imageStyle={{ borderRadius: pxToDp(8) }} source={require('../../../../res/16.jpg')} >
              <Text style={{ color: "white", fontSize: pxToDp(20), margin: pxToDp(10), left: pxToDp(220) }}>直播间名字</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: pxToDp(15), margin: pxToDp(10) }}>主播名字</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: pxToDp(150) }}>
                  <Icon name="eyeo" size={24} color={'grey'} />
                  <Text style={{ color: "white", marginLeft: pxToDp(5) }}>66</Text>
                </View>
                <LottieView style={{ width: pxToDp(70), }} source={require('../../../../res/705-linear-line.json')} autoPlay loop />
              </View>
            </ImageBackground>
          </View>
        </ScrollView >
        <FAB size="large" placement="right" color="#B0C4DE" onPress={() => this.context.navigate("KaiBo")} />
        {/* <FAB size="large" placement="right" color="red" onPress={() => this.context.navigate("KaiFang")} /> */}

      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  image: {
    borderRadius: pxToDp(10),
    justifyContent: "space-between",
    height: pxToDp(200),
    width: pxToDp(355),
    borderRadius: pxToDp(10),
    margin: pxToDp(10)
  }
});
0
export default Index;