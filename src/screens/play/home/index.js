import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import { TextInput } from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';


class Index extends PureComponent {
  onSharePress() {
    this.setState({ showSharePop: !this.state.showSharePop });
  }
  constructor(props) {
    super(props);
    this.state = {
      color: '#468cd3',
      text: '',
      appId: '29792ec3eded410facd609fb7ad76fef',
      peerIds: [],
      token:
        '00629792ec3eded410facd609fb7ad76fefIADCc8H70U749XGwDaAgInl0TjHWz2j6gN0U1okFKIK5sUgDg6MAAAAAEACcjToMHqkYYQEAAQAeqRhh',
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
      ],
    };
  }
  static contextType = NavigationContext;

  componentDidMount() {
    // this.init();r
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

  render() {
    const { text } = this.state;
    const kaifang = () => {
      this.Scrollable1.close();
      this.context.navigate('KaiFang');
    };
    const chafang = () => {
      this.Scrollable3.close();
      this.context.navigate('SeeFang', {
        roomName: this.state.arr[0].roomName,
        channelName: this.state.text,
        token: this.state.arr[0].token,
        startCall: this.startCall,
        peerIds: this.state.peerIds
      });
    };

    return (
      <View>
        <Top title="越吟" />
        <ScrollView showsVerticalScrollIndicator = {false}>
          {/*剧本练唱 */}
          <View style={{ marginLeft: pxToDp(10), marginRight: pxToDp(10) }}>
            <Text
              style={{
                fontSize: pxToDp(18),
                margin: pxToDp(10),
                marginLeft: pxToDp(0),
                color: '#468CD3',
                fontWeight: 'bold'
              }}
            >
              剧本练唱
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => this.Scrollable1.open()}>
                <Image
                  style={styles.image1}
                  source={require('../../../res/23.jpg')}
                />
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  onPress={() => this.context.navigate('Study')}
                >
                  <Image
                    style={styles.image2}
                    source={require('../../../res/34.jpg')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.Scrollable3.open()}>
                  <Image
                    style={styles.image2}
                    source={require('../../../res/25.jpg')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* 创建房间 */}
            <RBSheet
              ref={(ref) => {
                this.Scrollable1 = ref;
              }}
              height={300}
              width={375}
              closeOnDragDown
              customStyles={{
                container: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10
                }
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.gridContainer}>
                  <TouchableOpacity onPress={kaifang}>
                    <View style={styles.textbox}>
                      <Text style={styles.text}>创建公开房间</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.textbox}>
                      <Text style={styles.text}>创建私人房间</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </RBSheet>
            {/* 查找房间 */}
            <RBSheet
              ref={(ref) => {
                this.Scrollable3 = ref;
              }}
              height={300}
              width={375}
              closeOnDragDown
              customStyles={{
                container: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10
                }
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.gridContainer}>
                  <TouchableOpacity>
                    <View>
                      <TextInput
                        value={text}
                        onChangeText={(t) => this.setState({ text: t })}
                        style={styles.textinputbox}
                        placeholder="输入房间号"
                        textAlign="center"
                      ></TextInput>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={chafang}>
                    <View style={styles.textbox}>
                      <Text style={styles.text}>加入房间</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </RBSheet>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  gridContainer: {
    height: '100%',
    width: pxToDp(375),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: pxToDp(13),
    color: 'white'
  },
  textbox: {
    height: pxToDp(40),
    width: pxToDp(180),
    borderRadius: pxToDp(32),
    backgroundColor: '#468cd3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: pxToDp(10)
  },
  image1: {
    height: pxToDp(160),
    width: pxToDp(160),
    margin: pxToDp(5),
    borderRadius: pxToDp(8)
  },
  image2: {
    height: pxToDp(75),
    width: pxToDp(175),
    margin: pxToDp(5),
    borderRadius: pxToDp(8)
  },
  textinputbox: {
    height: pxToDp(40),
    width: pxToDp(180),
    borderRadius: pxToDp(32),
    backgroundColor: 'white',
    marginTop: pxToDp(10),
    borderColor: 'grey',
    borderWidth: pxToDp(1)
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: pxToDp(16),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: pxToDp(4),
    marginTop: pxToDp(35),
    elevation: 12,
    width: pxToDp(240),
    height: pxToDp(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText1: {
    marginBottom: pxToDp(15),
    textAlign: 'center',
    fontSize: pxToDp(15)
  },
  modalText2: {
    marginTop: pxToDp(35),
    textAlign: 'center',
    fontSize: pxToDp(15)
  },
  modalText3: {
    marginTop: pxToDp(5),
    textAlign: 'center',
    fontSize: pxToDp(13)
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: pxToDp(40),
    width: pxToDp(30),
    backgroundColor: '#f5f5f5',
    borderRadius: pxToDp(8)
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(22)
  },
  modalText4: {
    margin: pxToDp(25),
    fontSize: pxToDp(15)
  },
  modalText5: {
    fontSize: pxToDp(12)
  },
  button: {
    backgroundColor: '#468cd3',
    height: pxToDp(20),
    width: pxToDp(50),
    borderRadius: pxToDp(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pxToDp(10)
  }
});
export default Index;
