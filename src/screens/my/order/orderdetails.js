import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  ToastAndroid
} from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContext } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Mybtn from '../../../component/common/mybtn';
class orderdetails extends PureComponent {
  state = {
    way: '',
    Application: '确认收货',
    colors: '#ecf6fc',
    isshoushuo: false,
    modalVisible: false
  };
  static defaultProps = {
    style: {},
    textStyle: {},
    cisabled: false
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  static contextType = NavigationContext;
  render() {
    let invoice = [
      { id: 7, content: '已签收,签收人：门卫', ctime: '2021-9-1 16:00' },
      { id: 6, content: '派送中,您的快递即将送达', ctime: '2021-9-1 15:41' },
      {
        id: 5,
        content:
          '【杭州市】已离开浙江杭州分拨交付中心；发往 浙江省杭州拱墅区建华公司',
        ctime: '2021-9-1 7:17'
      },
      {
        id: 4,
        content: '【泉州市】 已到达福建晋江分拨交付中心',
        ctime: '2021-8-31 13:22'
      },
      { id: 3, content: '已揽件', ctime: '2021-8-31 8:06' },
      { id: 2, content: '已发货', ctime: '2021-8-30 14:10' },
      { id: 1, content: '已下单', ctime: '2021-8-30 12:59' }
    ];
    let items = [];
    invoice.map((el, index) => {
      let colorValue = index === 0 ? '#62bfad' : '#888';
      let backgroundColor = index === 0 ? '#62bfad' : '#e0e0e0';
      items.push(
        <View style={styles.expressItem} key={index}>
          <View style={styles.expressRightFirst}>
            <View style={styles.process}>
              <Text style={{ color: colorValue, fontSize: 14 }}>
                {el.content}
              </Text>
              <Text style={{ color: colorValue, fontSize: 12 }}>
                {el.ctime}
              </Text>
            </View>
          </View>
          <View
            style={[styles.expressLeft, { backgroundColor: backgroundColor }]}
          />
        </View>
      );
    });
    const {
      count,
      shopId,
      shopCarId,
      howPay,
      addressId,
      color,
      title,
      price,
      img,
      create_time
    } = this.props.route.params;
    const { name, address, phoneNum } = this.props.route.params.address;
    const { modalVisible } = this.state;
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Top title="我的订单" icon1="arrow-back" />
        <View style={{ flex: 1, padding: pxToDp(14) }}>
          {/* 地址 */}
          <View
            style={{
              margin: pxToDp(2),
              height: pxToDp(100),
              backgroundColor: '#fff',
              borderRadius: pxToDp(8),
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <View
              style={{
                height: pxToDp(50),
                alignItems: 'center',
                marginLeft: pxToDp(8),
                flexDirection: 'row'
              }}
            >
              <Text style={{ fontSize: pxToDp(16) }}>{name}</Text>
              <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(40) }}>
                {phoneNum}
              </Text>
              {/* 地址 */}
            </View>
            <View style={{ marginLeft: pxToDp(8) }}>
              <Text style={{ fontSize: pxToDp(14) }}>{address}</Text>
            </View>
          </View>
          {/* 商品 */}
          <View
            style={{
              margin: pxToDp(2),
              height: pxToDp(124),
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              marginTop: pxToDp(14),
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <View style={{ justifyContent: 'center' }}>
              <Image
                style={{
                  width: pxToDp(110),
                  height: pxToDp(110),
                  margin: pxToDp(8),
                  borderRadius: pxToDp(8)
                }}
                source={{
                  uri: img
                }}
              />
            </View>
            <View
              style={{
                marginTop: pxToDp(8),
                marginBottom: pxToDp(8),
                justifyContent: 'space-around'
              }}
            >
              <Text style={{ fontSize: pxToDp(15), fontWeight: 'bold' }}>
                {title}
              </Text>
              <View
                style={{
                  width: pxToDp(210),
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Text style={{ fontSize: pxToDp(12) }}>{color}</Text>
                <Text style={{ fontSize: pxToDp(12) }}>X{count}</Text>
              </View>
              <View style={{ marginBottom: pxToDp(15) }}>
                <Text
                  style={{
                    fontSize: pxToDp(18),
                    color: '#62bfad',
                    fontWeight: 'bold'
                  }}
                >
                  ￥{price * count}
                </Text>
              </View>
            </View>
          </View>
          {/* 订单 */}
          <View
            style={{
              margin: pxToDp(2),
              marginTop: pxToDp(14),
              borderRadius: pxToDp(8),
              height: pxToDp(130),
              backgroundColor: 'white',
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <View
              style={{
                marginLeft: pxToDp(8),
                marginTop: pxToDp(8),
                height: pxToDp(80),
                justifyContent: 'space-around'
              }}
            >
              <Text>订单编号: 109878783472</Text>
              <Text>下单时间: {create_time}</Text>
              <Text>
                支付方式:{' '}
                {howPay === 0
                  ? '微信支付'
                  : howPay === 1
                    ? '支付宝支付'
                    : '银行卡支付'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flex: 1
              }}
            >
              <TouchableOpacity style={styles.smallbox1}
                onPress={() => this.context.navigate('GiftedChat')}
              >
                <Image
                  style={{ width: pxToDp(25), height: pxToDp(25) }}
                  source={require('../../../res/客服.png')}
                />
                <Text>我的客服</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* 价格 */}
          <View
            style={{
              backgroundColor: 'white',
              height: pxToDp(120),
              margin: pxToDp(2),
              marginTop: pxToDp(14),
              borderRadius: pxToDp(8),
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <View style={styles.pricebox}>
              <Text style={{ fontSize: pxToDp(14) }}>商品金额</Text>
              <Text style={styles.textbox}>￥{price * count}</Text>
            </View>
            <View style={styles.pricebox}>
              <Text style={{ fontSize: pxToDp(14) }}>运费</Text>
              <Text style={styles.textbox}>包邮</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: pxToDp(10),
                justifyContent: 'space-around',
                alignItems: 'center'
              }}
            >
              <Mybtn
                onPress={() => this.Scrollable.open()}
                title="查看物流"
                buttonStyle={{
                  left: pxToDp(8),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: pxToDp(24),
                  marginRight: pxToDp(20),
                  width: pxToDp(120),
                  height: pxToDp(40)
                }}
                titleStyle={{
                  color: '#fcfcfc',
                  fontWeight: 'bold',
                  fontSize: pxToDp(16)
                }}
              />
              <Mybtn
                onPress={() => this.setModalVisible(!modalVisible)}
                title="确认收货"
                buttonStyle={{
                  borderRadius: pxToDp(32),
                  marginRight: pxToDp(16),
                  width: pxToDp(120),
                  height: pxToDp(40),
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                titleStyle={{
                  color: '#fcfcfc',
                  fontWeight: 'bold',
                  fontSize: pxToDp(16)
                }}
              />
            </View>
          </View>
          <RBSheet
            ref={(ref) => {
              this.Scrollable = ref;
            }}
            height={pxToDp(600)}
            closeOnDragDowncustomStyles={{
              container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
            }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: '#62bfad',
                  height: pxToDp(150),
                  paddingLeft: pxToDp(8)
                  // marginLeft: pxToDp(8),
                  // marginRight: pxToDp(8)
                }}
              >
                <View
                  style={{
                    height: pxToDp(40),
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text style={{ fontSize: pxToDp(20), color: '#ecf6fc' }}>
                    已签收
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: pxToDp(8),
                    marginTop: 0,
                    height: pxToDp(100)
                  }}
                >
                  <Image
                    style={{
                      width: pxToDp(100),
                      borderRadius: pxToDp(8)
                    }}
                    source={{ uri: img }}
                  />
                  <View
                    style={{
                      marginLeft: pxToDp(8),
                      marginRight: pxToDp(8),
                      width: pxToDp(210),
                      justifyContent: 'space-around'
                    }}
                  >
                    <Text style={{ color: '#ecf6fc' }}>
                      {title} {color}
                    </Text>
                    <Text style={{ color: '#ecf6fc' }}>
                      中通快递:CC176548554455
                    </Text>
                    <Text style={{ fontSize: pxToDp(18), color: '#ecf6fc' }}>
                      已送达
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginRight: pxToDp(12)
                    }}
                  >
                    <AntDesign name="right" size={pxToDp(18)} color="#ecf6fc" />
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: pxToDp(450),
                  marginTop: pxToDp(20)
                }}
              >
                <View>{items}</View>
              </View>
            </ScrollView>
          </RBSheet>
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
                <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>是否确认收货</Text>
                <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>收货后可在订单页查看</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: pxToDp(32) }}>
                  <Mybtn
                    title="取消"
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      borderRadius: pxToDp(32),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: pxToDp(8)
                    }}
                    titleStyle={{
                      height: 30,
                      color: 'white',
                      fontSize: pxToDp(14),
                      marginTop: pxToDp(10)
                    }}
                  />
                  <Mybtn
                    title="确认"
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                      this.context.navigate('Tabbar');
                      ToastAndroid.show('已确认收货', ToastAndroid.SHORT);
                    }}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      borderRadius: pxToDp(32),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: pxToDp(8)
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
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxToDp(15),
    paddingRight: pxToDp(15),
    borderRadius: pxToDp(4),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: pxToDp(15),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  smallbox1: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallbox2: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pricebox: {
    marginTop: pxToDp(8),
    flexDirection: 'row',
    marginLeft: pxToDp(8),
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  textbox: {
    fontSize: pxToDp(14),
    marginRight: pxToDp(8),
    fontWeight: 'bold',
    color: '#62bfad'
  },
  process: {
    paddingVertical: pxToDp(8),
    flexDirection: 'column',
    paddingRight: pxToDp(20)
  },
  expressRightFirst: {
    width: Dimensions.get('window').width,
    paddingLeft: pxToDp(25),
    borderLeftWidth: pxToDp(1),
    borderLeftColor: '#e0e0e0',
    flexDirection: 'column'
  },
  expressItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: pxToDp(40),
    width: Dimensions.get('window').width
  },
  expressLeft: {
    width: pxToDp(10),
    height: pxToDp(10),
    borderRadius: pxToDp(4),
    backgroundColor: '#e0e0e0',
    position: 'relative',
    right: Dimensions.get('window').width + 4,
    top: pxToDp(20)
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: pxToDp(20),
    backgroundColor: 'white',
    borderRadius: pxToDp(24),
    padding: pxToDp(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
});
export default orderdetails;
