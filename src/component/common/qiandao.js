import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  Alert
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';
import LinearGradient from 'react-native-linear-gradient';
import Mybtn from './mybtn';
import { Button } from 'react-native-elements/dist/buttons/Button';
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showSharePop: false, //分享弹窗，默认不显示
      modalVisible: false,
      modalVisibles: false,
      color: '#62bfad',
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
      stepStrokeCurrentColor: '#62bfad',
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: '#62bfad',
      stepStrokeUnFinishedColor: '#aaaaaa',
      separatorFinishedColor: '#62bfad',
      separatorUnFinishedColor: '#aaaaaa',
      stepIndicatorFinishedColor: '#62bfad',
      stepIndicatorUnFinishedColor: '#ffffff',
      stepIndicatorCurrentColor: '#ffffff',
      stepIndicatorLabelFontSize: 13,
      currentStepIndicatorLabelFontSize: 13,
      stepIndicatorLabelCurrentColor: '#62bfad',
      stepIndicatorLabelFinishedColor: '#ffffff',
      stepIndicatorLabelUnFinishedColor: '#aaaaaa',
      labelColor: '#999999',
      labelSize: pxToDp(12),
      currentStepLabelColor: '#62bfad'
    };
    return (
      <View>
        <View style={styles.centeredView}>
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
                <View
                  style={{ marginLeft: pxToDp(330), marginTop: pxToDp(10) }}
                >
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
                <View style={{ flexDirection: 'row', width: pxToDp(335) }}>
                  {this.state.jifen.map((item, index) => (
                    <Text
                      style={{
                        marginRight: pxToDp(32.7),
                        color: '#999999',
                        fontSize: pxToDp(12)
                      }}
                    >
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

                <Button
                  onPress={() => {
                    this.setState({
                      currentPosition: this.state.currentPosition + 1
                    });
                    this.setState({ color: 'grey' });
                    this.setState({ isclick: true });
                    this.setModalVisibles(true);
                  }}
                  title={this.state.isclick ? '已签到' : '签到'}
                  titleStyle={{ color: '#fff' }}
                  disabled={this.state.isclick}
                  disabledStyle={{ backgroundColor: 'gray', color: 'white', }}
                  disabledTitleStyle={{ color: 'white' }}
                  buttonStyle={{
                    width: pxToDp(100),
                    height: pxToDp(100),
                    borderRadius: pxToDp(100),
                    marginTop:pxToDp(40),
                    backgroundColor: '#62bfad'
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginBottom:pxToDp(-20),
                  }}
                >
                  <Image
                    style={{ width: pxToDp(80), height: pxToDp(160) }}
                    source={require('../../res/sucai/9.jpg')}
                  />
                  <View style={{marginBottom:pxToDp(60)}}>
                    <Text style={styles.modalText2}>-签到说明-</Text>
                    <Text style={styles.modalText3}>
                      每日签到一次，连续签到奖励更多
                    </Text>
                  </View>
                  <Image
                    style={{ width: pxToDp(80), height: pxToDp(160) }}
                    source={require('../../res/sucai/11.jpg')}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <Mybtn
          title="签 到"
          onPress={() => {
            this.setModalVisible(true);
          }}
          buttonStyle={{
            width: pxToDp(80),
            height: pxToDp(30),
            borderTopLeftRadius: pxToDp(32),
            borderBottomLeftRadius: pxToDp(32)
          }}
          titleStyle={{
            color: 'white',
            fontSize: pxToDp(16),
            height: 40,
            marginTop: pxToDp(16),
            marginLeft: pxToDp(8)
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: pxToDp(13),
    color: 'white'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: pxToDp(8),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: pxToDp(8),
    marginTop: pxToDp(35),
    elevation: 2,
    width: pxToDp(240),
    height: pxToDp(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText1: {
    textAlign: 'center',
    fontSize: pxToDp(18),
    marginBottom: pxToDp(35),
    color: '#333333',
    fontWeight: 'bold'
  },
  modalText2: {
    marginTop: pxToDp(16),
    textAlign: 'center',
    fontSize: pxToDp(16),
    color: '#666666'
  },
  modalText3: {
    fontSize: pxToDp(14),
    color: '#999999'
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
    alignItems: 'center'
  },
  modalText4: {
    margin: pxToDp(25),
    fontSize: pxToDp(15)
  },
  modalText5: {
    fontSize: pxToDp(12)
  },
  button: {
    backgroundColor: '#62bfad',
    height: pxToDp(20),
    width: pxToDp(50),
    borderRadius: pxToDp(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pxToDp(10)
  },
  textqian: {
    fontSize: pxToDp(14)
  }
});
export default Index;