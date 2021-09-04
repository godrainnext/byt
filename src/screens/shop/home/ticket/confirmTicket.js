import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  ToastAndroid
} from 'react-native';
import { Input } from 'react-native-elements';
import Top from '../../../../component/common/top';
import { pxToDp } from '../../../../utils/styleKits';
import RBSheet from 'react-native-raw-bottom-sheet';
import SvgUri from 'react-native-svg-uri';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Mybtn from '../../../../component/common/mybtn';
import CodeFieldzz from '../../../my/order/components/codefield';
import { NavigationContext } from '@react-navigation/native';
const back =
  '<svg t="1630480820345" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2172" width="200" height="200"><path d="M759.3984 276.6848a25.6 25.6 0 0 1 0 36.181333L560.298667 512l199.099733 199.168a25.6 25.6 0 0 1 0 36.181333l-12.0832 12.0832a25.6 25.6 0 0 1-36.181333 0L512 560.264533l-199.168 199.133867a25.6 25.6 0 0 1-36.181333 0l-12.0832-12.0832a25.6 25.6 0 0 1 0-36.181333l199.133866-199.168-199.133866-199.099734a25.6 25.6 0 0 1 0-36.181333l12.0832-12.0832a25.6 25.6 0 0 1 36.181333 0l199.168 199.099733 199.099733-199.099733a25.6 25.6 0 0 1 36.181334 0l12.0832 12.0832z" p-id="2173" fill="#8a8a8a"></path></svg>';
export default class confirmTicket extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      paidway: [
        {
          id: 1,
          image: require('../../../../res/微信支付.png'),
          text: '微信支付'
        },
        {
          id: 2,
          image: require('../../../../res/支付宝.png'),
          text: '支付宝支付'
        },
        {
          id: 3,
          image: require('../../../../res/银行卡支付.png'),
          text: '银行卡支付'
        }
      ],
      way: '',
      isvisiable: false,
      activeTab: -1
    };
  }
  static contextType = NavigationContext;
  addOrder = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var Hours = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    if (Hours < 10) {
      Hours = '0' + Hours;
    }
    if (Minutes < 10) {
      Minutes = '0' + Minutes;
    }
    if (Seconds < 10) {
      Seconds = '0' + Seconds;
    }
    var create_time =
      year +
      '-' +
      month +
      '-' +
      day +
      ' ' +
      Hours +
      ':' +
      Minutes +
      ':' +
      Seconds;
    if (this.state.activeTab !== -1) {
      const { chooseCount } = this.props.route.params;
      const data = {
        chooseCount,
        create_time
      };
      this.setState({ isvisiable: false });
      this.context.navigate('MyTicket', {
        ...data
      });
    } else {
      ToastAndroid.show('请选择支付方式', ToastAndroid.SHORT);
    }
  };
  addOrder1 = () => {
    if (this.state.activeTab !== -1) {
      this.setState({ isvisiable: !this.state.isvisiable });
    } else {
      ToastAndroid.show('请选择支付方式', ToastAndroid.SHORT);
    }
  };
  changeTab = (index) => {
    this.setState({ activeTab: index });
    if (index == 0) {
      this.setState({ way: '微信支付' });
    } else if (index == 1) {
      this.setState({ way: '支付宝支付' });
    } else if (index === 2) {
      this.setState({ way: '银行卡支付' });
    }
    this.Scrollable.close();
  };
  render() {
    console.log(this.props.route.params);
    const { chooseCount } = this.props.route.params;
    return (
      <View style={{ flex: 1 }}>
        <Top title="确认订单" icon1="arrow-back" />
        <View style={{ padding: pxToDp(16), flex: 1, backgroundColor: '#fff' }}>
          <View
            style={{
              height: pxToDp(160),
              backgroundColor: '#fff',
              justifyContent: 'space-around',
              padding: pxToDp(16),
              borderRadius: pxToDp(8),
              elevation: 4,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 1,
              shadowRadius: 10
            }}
          >
            <Text style={{ fontSize: pxToDp(18) }}>钱塘戏社越剧专场</Text>
            <Text style={{ fontSize: pxToDp(16) }}>2021.08.15-10.01</Text>
            <Text style={{ fontSize: pxToDp(16) }}>单价：￥30</Text>
            <Text style={{ fontSize: pxToDp(16) }}>
              总价：￥{chooseCount * 30}
            </Text>
          </View>
          <View
            style={{
              padding: pxToDp(16),
              backgroundColor: '#fff',
              marginTop: pxToDp(16),
              borderRadius: pxToDp(8),
              elevation: 4,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 1,
              shadowRadius: 10
            }}
          >
            <Text style={{ fontSize: pxToDp(20) }}>购票须知</Text>
            <Text style={{ fontSize: pxToDp(16) }}>
              1.请确认场次和时间无误，购买成功后将不予退换
            </Text>
            <Text style={{ fontSize: pxToDp(16) }}>
              2.由于设备故障等不可抗力因素，存在少量场次取消的情况，会进行退票退款
            </Text>
            <Text style={{ fontSize: pxToDp(16) }}>
              3.由于剧院系统不稳定等因素，存在出票失败的情况，会进行退款
            </Text>
            <Text style={{ fontSize: pxToDp(16) }}>
              4.取票码可以在“票据详情”中查看
            </Text>
          </View>
          {/* 支付方式 */}
          <TouchableOpacity
            onPress={() => this.Scrollable.open()}
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: pxToDp(40),
              flexDirection: 'row',
              backgroundColor: 'white',
              marginTop: pxToDp(16),
              borderRadius: pxToDp(8),
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <Text style={{ marginLeft: pxToDp(8) }}>支付方式:</Text>
            <Text style={{ marginLeft: pxToDp(180) }}>{this.state.way}</Text>
            <Image
              style={{
                width: pxToDp(15),
                height: pxToDp(15),
                marginRight: pxToDp(16)
              }}
              source={require('../../../../res/箭头.png')}
            />
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.isvisiable}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => this.setState({ isvisiable: false })}
                      style={{ position: 'absolute', top: -20, left: -20 }}
                    >
                      <SvgUri svgXmlData={back} width="30" height="30" />
                    </TouchableOpacity>
                    <CodeFieldzz onPress={this.addOrder} />
                  </View>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
        </View>
        {/* 支付弹窗 */}
        <RBSheet
          ref={(ref) => {
            this.Scrollable = ref;
          }}
          height={200}
          closeOnDragDowncustomStyles={{
            container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
          }}
        >
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text
                style={{
                  marginLeft: pxToDp(25),
                  fontSize: pxToDp(16),
                  marginTop: pxToDp(10)
                }}
              >
                支付方式
              </Text>
              <TouchableOpacity onPress={() => this.Scrollable.close()}>
                <View
                  style={{
                    marginTop: pxToDp(10),
                    marginRight: pxToDp(20)
                  }}
                >
                  <AntDesign
                    name="closecircleo"
                    size={pxToDp(18)}
                    color="#666"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              {this.state.paidway.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.changeTab(index)}
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: pxToDp(15),
                    marginLeft: pxToDp(20)
                  }}
                >
                  <Image
                    style={{ width: pxToDp(30), height: pxToDp(30) }}
                    source={item.image}
                  />
                  <Text style={{ marginLeft: pxToDp(10) }}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </RBSheet>
        {/* 底部按钮 */}
        <Mybtn
          onPress={(() => this.setState({ isvisiable: true }), this.addOrder1)}
          title="立即付款"
          containerStyle={{
            position: 'absolute',
            bottom: 0,
            fontSize: 30,
            alignSelf: 'center'
          }}
          buttonStyle={{
            width: pxToDp(320),
            height: pxToDp(40),
            borderRadius: pxToDp(32)
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(16)
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff'
  }
});
