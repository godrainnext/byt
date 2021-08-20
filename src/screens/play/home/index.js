import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Modal
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import StepIndicator from 'react-native-step-indicator';
import Svg from 'react-native-svg-uri';
import {
  star,
  right,
  jinpai,
  yinpai,
  tongpai
} from '../../../component/common/iconSvg';
import { Carousel } from '../../../component/common/teaset';
class Index extends PureComponent {
  onSharePress() {
    this.setState({ showSharePop: !this.state.showSharePop });
  }
  constructor(props) {
    super(props);
    this.state = {
      showSharePop: false, //分享弹窗，默认不显示
      modalVisible: false,
      modalVisibles: false,
      color: '#468cd3',
      currentPosition: 0,
      isclick: false,
      jifen: ['+5', '+10', '+15', '+20', '+25', '+30', '+35'],
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
      book: [
        {
          id: '1',
          title: '追鱼',
          context:
            '追鱼,其主要剧情为：北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。',
          path: 'https://tse1-mm.cn.bing.net/th/id/R-C.09c6e90235b64a74e410e32c0b066740?rik=NXUt3kmSNer%2fVA&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2feb476a0eed8d390ccbb89a76ec9eba802412b473.jpg&ehk=H7uDdyzqoosCQAGzv2tmz240YETTBtixjDqyWGBeXZg%3d&risl=&pid=ImgRaw&r=0',
          drama: 'Drama1'
        },
        {
          id: '2',
          title: '五女拜寿',
          context:
            '该剧讲述的是尚书杨继康做寿，五个女儿女婿前来祝寿，因养女三春及婿邹应龙贫贱，杨夫人不悦赶出府去。后杨因得罪严嵩革职，诸女皆不能依靠，唯三春将其收留。后邹中状元，扳倒严嵩，杨沉冤得雪，诸女又来拜寿。一番沉浮，杨夫人方知人间冷暖。',
          path: 'https://img1.baidu.com/it/u=838358760,1964554786&fm=26&fmt=auto&gp=0.jpg',
          drama: 'Drama2'
        },
        {
          id: '3',
          title: '梁山伯与祝英台',
          context:
            '《梁山伯与祝英台》是中国古代民间四大爱情故事之一（另外三个为《白蛇传》、《孟姜女传说》和《牛郎织女》），是中国最具魅力的口头传承艺术及国家级非物质文化遗产，也是在世界上产生广泛影响的中国民间传说。',
          path: 'https://img0.baidu.com/it/u=1223018592,1263472188&fm=26&fmt=auto&gp=0.jpg',
          drama: 'Drama3'
        }
      ],
      books: [
        {
          id: '1',
          title: '红楼梦',
          context:
            '新版越剧《红楼梦》创作于1999年，首演于同年8月。它从调整戏剧结构入手，别样营造大悲大喜、大实大虚的舞台意境，并提高舞美空间层次，丰富音乐形象，整合流派表演，精缩演出时间，实现了一次富有创意的新编。',
          path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage8.pinlue.com%2Fimg3%2Ftu_jpg%2FksnrPhRhOUPIvAqAbKCblUE58P73JL45ksk6RoStOt1QqsyGRULuDNlm589MJep46BicicicnEeYd9uoxplOgImkg%2F640.jpeg&refer=http%3A%2F%2Fimage8.pinlue.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631837799&t=26164c70c17997051e585d51c8be88fd',
          icon: jinpai,
          drama: 'Drama4'
        },
        {
          id: '2',
          title: '碧玉簪',
          context:
            '碧玉簪《碧玉簪》讲述了王玉林得尚书李廷甫赏识，获许配廷甫女秀英为妻。秀英的表兄顾文友因妒生恨，骗取秀英的碧玉簪放进伪造情书里，诬陷秀英与他有染。最终玉林送凤冠请罪，夫妇冰释前嫌。',
          path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fweixin.sanbiaoge.com%2Fcunchu5%2F2021-03-05%2F6_16149534226318178.jpg&refer=http%3A%2F%2Fweixin.sanbiaoge.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631837861&t=bccaf84652f1353d90b378e7225577c7',
          icon: yinpai,
          drama: 'Drama5'
        },
        {
          id: '3',
          title: '周仁哭坟',
          context:
            '《周仁哭坟》越剧折子戏，选材自京剧《周仁献嫂》。由朱福侠编导。《周仁哭坟》一折专为《吴凤花越剧舞台艺术风采》专场表演而编写排演，集中演绎周仁在其妻坟前哭诉冤屈的情绪。',
          path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F10088823340%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631837909&t=641368304e82a93e756196f93fd1d805',
          icon: tongpai,
          drama: 'Drama6'
        }
      ]
    };
  }
  static contextType = NavigationContext;

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  setModalVisibles = (visible) => {
    this.setState({ modalVisibles: visible });
  };

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

  render() {
    const { modalVisible, modalVisibles, text } = this.state;
    const labels = [
      '第一天',
      '第二天',
      '第三天',
      '第四天',
      '第五天',
      '第六天',
      '第七天'
    ];
    const customStyles = {
      stepIndicatorSize: 35,
      currentStepIndicatorSize: 40,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: '#468cd3',
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: '#468cd3',
      stepStrokeUnFinishedColor: '#aaaaaa',
      separatorFinishedColor: '#468cd3',
      separatorUnFinishedColor: '#aaaaaa',
      stepIndicatorFinishedColor: '#468cd3',
      stepIndicatorUnFinishedColor: '#ffffff',
      stepIndicatorCurrentColor: '#ffffff',
      stepIndicatorLabelFontSize: 13,
      currentStepIndicatorLabelFontSize: 13,
      stepIndicatorLabelCurrentColor: '#468cd3',
      stepIndicatorLabelFinishedColor: '#ffffff',
      stepIndicatorLabelUnFinishedColor: '#aaaaaa',
      labelColor: '#999999',
      labelSize: 13,
      currentStepLabelColor: '#468cd3'
    };

    const kaifang = () => {
      this.Scrollable1.close();
      this.context.navigate('KaiFang'), console.log(123);
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
        <ScrollView>
          {/*签到的内容 */}
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisibles}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                this.setModalVisible(!modalVisibles);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText4}>
                    今日之约已了 我们明日再聚
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisibles(!modalVisibles);
                    }}
                  >
                    <View style={styles.button}>
                      <Text style={styles.modalText5}>确认</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                this.setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{ marginLeft: pxToDp(330) }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(!modalVisible);
                      }}
                    >
                      <Ionicons
                        name="md-close-circle-outline"
                        size={30}
                        color="grey"
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.modalText1}>-每日签到-</Text>
                  <View style={{ flexDirection: 'row', width: pxToDp(334) }}>
                    {this.state.jifen.map((item, index) => (
                      <Text style={{ marginRight: pxToDp(31), color: 'grey' }}>
                        {item}
                      </Text>
                    ))}
                  </View>
                  <View style={{ width: pxToDp(370) }}>
                    <StepIndicator
                      stepCount={7}
                      customStyles={customStyles}
                      currentPosition={this.state.currentPosition}
                      labels={labels}
                    />
                  </View>
                  <TouchableOpacity
                    disabled={this.state.isclick}
                    style={{
                      ...styles.openButton,
                      backgroundColor: this.state.color
                    }}
                    onPress={() => {
                      this.setState({
                        currentPosition: this.state.currentPosition + 1
                      });
                      this.setState({ color: 'grey' });
                      this.setState({ isclick: true });
                      this.setModalVisibles(true);
                    }}
                  >
                    <Text style={styles.textStyle}>
                      {this.state.isclick ? '已签到' : '签到'}
                    </Text>
                  </TouchableOpacity>
                  <View style={{ marginBottom: pxToDp(20) }}>
                    <Text style={styles.modalText2}>-签到说明-</Text>
                    <Text style={styles.modalText3}>
                      每日签到一次，连续签到奖励更多
                    </Text>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          {/*戏服体验馆 */}
          <View style={{ borderRadius: pxToDp(10) }}>
            <TouchableOpacity onPress={() => this.context.navigate('Change')}>
              <View
                style={{
                  borderRadius: pxToDp(10),
                  height: pxToDp(170),
                  width: pxToDp(355),
                  borderRadius: pxToDp(10),
                  margin: pxToDp(10),
                  backgroundColor: 'rgba(255,255,255,0.5)'
                }}
              >
                <Text
                  style={{
                    fontSize: pxToDp(25),
                    marginTop: pxToDp(20),
                    alignSelf: 'center'
                  }}
                >
                  戏服体验馆
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: pxToDp(30)
                  }}
                >
                  <Image
                    style={{
                      height: pxToDp(60),
                      width: pxToDp(60),
                      borderRadius: pxToDp(30)
                    }}
                    source={require('../../../res/performer/1.jpg')}
                  />
                  <Image
                    style={{
                      height: pxToDp(60),
                      width: pxToDp(60),
                      borderRadius: pxToDp(30)
                    }}
                    source={require('../../../res/performer/2.jpg')}
                  />
                  <Image
                    style={{
                      height: pxToDp(60),
                      width: pxToDp(60),
                      borderRadius: pxToDp(30)
                    }}
                    source={require('../../../res/performer/3.jpg')}
                  />
                  <Image
                    style={{
                      height: pxToDp(60),
                      width: pxToDp(60),
                      borderRadius: pxToDp(30)
                    }}
                    source={require('../../../res/performer/4.jpg')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginLeft: pxToDp(30),
              marginRight: pxToDp(30)
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Ionicons name="today-sharp" size={28} color="#468CD3" />
                <Text>签到</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.context.navigate('Scriptlibrary')}
            >
              <View style={{ alignItems: 'center' }}>
                <Ionicons name="layers-outline" size={28} color="#468CD3" />
                <Text>剧本</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.context.navigate('Course')}>
              <View style={{ alignItems: 'center' }}>
                <Ionicons name="md-logo-octocat" size={28} color="#468CD3" />
                <Text>教程</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.context.navigate('Timeline')}>
              <View style={{ alignItems: 'center' }}>
                <Entypo name="colours" size={28} color="#468CD3" />
                <Text>时间轴</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/*VR */}
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
              VR
            </Text>
            <TouchableOpacity onPress={() => this.context.navigate('VR')}>
              <View
                style={{
                  height: pxToDp(130),
                  width: pxToDp(355),
                  borderRadius: pxToDp(10),
                  backgroundColor: 'rgba(255,255,255,0.5)'
                }}
              >
                <Text
                  style={{
                    fontSize: pxToDp(25),
                    marginTop: pxToDp(43),
                    alignSelf: 'center'
                  }}
                >
                  VR
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
          {/* 轮播图 */}
          <View
            style={{
              flexDirection: 'row',
              width: pxToDp(350),
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(18),
                margin: pxToDp(10),
                color: '#468CD3',
                fontWeight: 'bold'
              }}
            >
              本周热门
            </Text>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => this.context.navigate('HotList')}
            >
              <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                查看更多
              </Text>
              <Ionicons name="chevron-forward" size={20} color="grey" />
            </TouchableOpacity>
          </View>
          <View style={styles.carousel}>
            <Carousel control style={{ height: pxToDp(155) }}>
              {this.state.books.map((item) => (
                <TouchableOpacity
                  style={styles.bookbox}
                  onPress={() => this.context.navigate(item.drama)}
                >
                  <View style={styles.bookbotton}>
                    <View
                      style={{ marginLeft: pxToDp(130), marginTop: pxToDp(10) }}
                    >
                      <View style={styles.bookinf1}>
                        <View>
                          <Text
                            style={{ fontSize: pxToDp(17), fontWeight: 'bold' }}
                          >
                            {item.title}
                          </Text>
                        </View>
                        <View>
                          <Svg width="32" height="32" svgXmlData={item.icon} />
                        </View>
                      </View>
                      <Text style={{ fontSize: pxToDp(14) }} numberOfLines={3}>
                        {item.context}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.book11}>
                    <Image
                      style={styles.bookimage}
                      source={{ uri: item.path }}
                    />
                    <View
                      style={{
                        height: pxToDp(104),
                        width: pxToDp(4),
                        backgroundColor: 'lightgrey',
                        borderTopLeftRadius: pxToDp(8),
                        borderTopRightRadius: pxToDp(8)
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
              ))}
            </Carousel>
          </View>
          {/*剧本推荐 */}
          <View
            style={{
              flexDirection: 'row',
              width: pxToDp(350),
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(18),
                margin: pxToDp(10),
                color: '#468CD3',
                fontWeight: 'bold'
              }}
            >
              剧本推荐
            </Text>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => this.context.navigate('Scriptlibrary')}
            >
              <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                查看更多
              </Text>
              <Ionicons name="chevron-forward" size={20} color="grey" />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: pxToDp(80) }}>
            {this.state.book.map((item) => (
              <View style={styles.bookbox}>
                <View style={styles.bookbotton}>
                  <View
                    style={{ marginLeft: pxToDp(120), marginTop: pxToDp(10) }}
                  >
                    <View style={styles.bookinf}>
                      <Text
                        style={{ fontSize: pxToDp(17), fontWeight: 'bold' }}
                      >
                        {item.title}
                      </Text>
                      <TouchableOpacity
                        onPress={() => this.context.navigate(item.drama)}
                      >
                        <Svg width="32" height="32" svgXmlData={right} />
                      </TouchableOpacity>
                    </View>
                    <Text stlye={{ fontSize: pxToDp(13) }} numberOfLines={2}>
                      {item.context}
                    </Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Text>推荐指数</Text>
                      <View
                        style={{ flexDirection: 'row', marginLeft: pxToDp(5) }}
                      >
                        <Svg width="20" height="20" svgXmlData={star} />
                        <Svg width="20" height="20" svgXmlData={star} />
                        <Svg width="20" height="20" svgXmlData={star} />
                        <Svg width="20" height="20" svgXmlData={star} />
                        <Svg width="20" height="20" svgXmlData={star} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.book}>
                  <Image style={styles.bookimage} source={{ uri: item.path }} />
                  <View
                    style={{
                      height: pxToDp(104),
                      width: pxToDp(4),
                      backgroundColor: 'lightgrey',
                      borderTopLeftRadius: pxToDp(8),
                      borderTopRightRadius: pxToDp(8)
                    }}
                  ></View>
                </View>
              </View>
            ))}
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
    borderRadius: pxToDp(30),
    backgroundColor: '#468cd3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: pxToDp(10)
  },
  image1: {
    height: pxToDp(160),
    width: pxToDp(160),
    margin: pxToDp(5),
    borderRadius: pxToDp(10)
  },
  image2: {
    height: pxToDp(75),
    width: pxToDp(175),
    margin: pxToDp(5),
    borderRadius: pxToDp(10)
  },
  textinputbox: {
    height: pxToDp(40),
    width: pxToDp(180),
    borderRadius: pxToDp(30),
    backgroundColor: 'white',
    marginTop: pxToDp(10),
    borderColor: 'grey',
    borderWidth: pxToDp(1)
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 12,
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
    borderRadius: 5,
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
    marginTop: 5,
    textAlign: 'center',
    fontSize: pxToDp(13)
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: pxToDp(40),
    width: pxToDp(30),
    backgroundColor: '#f5f5f5',
    borderRadius: pxToDp(10)
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
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
    borderRadius: pxToDp(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pxToDp(10)
  },
  book: {
    marginTop: pxToDp(-128),
    // marginLeft: pxToDp(4),
    height: pxToDp(120),
    width: pxToDp(100),
    borderRadius: pxToDp(8),
    elevation: 5, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8), //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookbox: {
    height: pxToDp(130),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10),
    marginTop: pxToDp(10)
  },
  bookbotton: {
    height: pxToDp(110),
    backgroundColor: 'white',
    borderRadius: pxToDp(8),
    marginTop: pxToDp(30),
    elevation: 5, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8), //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1
  },
  bookinf: {
    flexDirection: 'row',
    width: pxToDp(220),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bookimage: {
    height: pxToDp(128),
    width: pxToDp(100),
    borderRadius: pxToDp(8)
  },
  book11: {
    marginTop: pxToDp(-136),
    marginLeft: pxToDp(16),
    height: pxToDp(120),
    width: pxToDp(100),
    borderRadius: pxToDp(8),
    elevation: 5, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8), //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookinf1: {
    flexDirection: 'row',
    width: pxToDp(190),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  carousel: {
    borderRadius: pxToDp(20),
    height: pxToDp(155),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10),
    marginTop: pxToDp(8)
  }
});
export default Index;
