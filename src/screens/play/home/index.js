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
      jifen: ['+5', '+10', '+15', '+20', '+25', '+30', '+35']
    };
  }
  static contextType = NavigationContext;

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  setModalVisibles = (visible) => {
    this.setState({ modalVisibles: visible });
  };
  render() {
    const { modalVisible } = this.state;
    const { modalVisibles } = this.state;
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
    return (
      <View>
        <Top title="越吟" />
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
                <Text style={styles.modalText4}>今日之约已了 我们明日再聚</Text>
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
        <ScrollView style={{ marginBottom: pxToDp(60) }}>
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
          {/*单人练唱 */}
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
              单人练唱
            </Text>
            <TouchableOpacity onPress={() => this.context.navigate('Study')}>
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
                  单人练唱
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/*双人剧本 */}
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
              双人剧本
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => this.Scrollable1.open()}>
                <Image
                  style={styles.image1}
                  source={require('../../../res/23.jpg')}
                />
              </TouchableOpacity>
              <View>
                <TouchableOpacity onPress={() => this.Scrollable2.open()}>
                  <Image
                    style={styles.image2}
                    source={require('../../../res/24.jpg')}
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
                  <TouchableOpacity>
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

            <RBSheet
              ref={(ref) => {
                this.Scrollable2 = ref;
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
                    <View style={styles.textbox}>
                      <Text style={styles.text}>热门剧本</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.textbox}>
                      <Text style={styles.text}>最新剧本</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.textbox}>
                      <Text style={styles.text}>快速加入</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </RBSheet>

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
                        style={styles.textinputbox}
                        placeholder="输入房间号"
                        textAlign="center"
                      ></TextInput>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.textbox}>
                      <Text style={styles.text}>加入房间</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </RBSheet>
          </View>
          {/*剧本推荐 */}
          <View>
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
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'grey',
                borderBottomWidth: pxToDp(0.5),
                margin: pxToDp(10),
                height: pxToDp(110)
              }}
            >
              <TouchableOpacity onPress={() => this.context.navigate('Drama')}>
                <Image
                  style={{
                    height: pxToDp(100),
                    width: pxToDp(100),
                    borderRadius: pxToDp(10)
                  }}
                  source={require('../../../res/play/1.jpg')}
                />
              </TouchableOpacity>
              <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                  追鱼 书馆
                </Text>
                <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(15) }}>
                  我张珍远道来投亲
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'grey',
                borderBottomWidth: pxToDp(0.5),
                margin: pxToDp(10),
                height: pxToDp(110)
              }}
            >
              <Image
                style={{
                  height: pxToDp(100),
                  width: pxToDp(100),
                  borderRadius: pxToDp(10)
                }}
                source={require('../../../res/play/2.jpg')}
              />
              <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                  周仁哭坟
                </Text>
                <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(15) }}>
                  冷冷雨飕飕风
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'grey',
                borderBottomWidth: pxToDp(0.5),
                margin: pxToDp(10),
                height: pxToDp(110)
              }}
            >
              <Image
                style={{
                  height: pxToDp(100),
                  width: pxToDp(100),
                  borderRadius: pxToDp(10)
                }}
                source={require('../../../res/play/3.jpg')}
              />
              <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                  梁祝 十八相送
                </Text>
                <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(15) }}>
                  书房门前一枝梅
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{ marginBottom: 200 }}
            onPress={() => this.context.navigate('VR')}
          >
            <Text>VR</Text>
          </TouchableOpacity>
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
  }
});
export default Index;
