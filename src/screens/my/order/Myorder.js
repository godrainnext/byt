/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  DeviceEventEmitter,
  Modal,
  ImageBackground
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '@utils/styleKits';
import RBSheet from 'react-native-raw-bottom-sheet';
import { NavigationContext } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Address from '../../../component/my/address';
import { addOrider } from '../../../service/shop';
import { connect } from 'react-redux';
import { getUserOriderListAction } from '../../first/home/store/actions';
import Mybtn from '../../../component/common/mybtn';
import SvgUri from 'react-native-svg-uri';
import CodeFieldzz from './components/codefield'
const back='<svg t="1630480820345" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2172" width="200" height="200"><path d="M759.3984 276.6848a25.6 25.6 0 0 1 0 36.181333L560.298667 512l199.099733 199.168a25.6 25.6 0 0 1 0 36.181333l-12.0832 12.0832a25.6 25.6 0 0 1-36.181333 0L512 560.264533l-199.168 199.133867a25.6 25.6 0 0 1-36.181333 0l-12.0832-12.0832a25.6 25.6 0 0 1 0-36.181333l199.133866-199.168-199.133866-199.099734a25.6 25.6 0 0 1 0-36.181333l12.0832-12.0832a25.6 25.6 0 0 1 36.181333 0l199.168 199.099733 199.099733-199.099733a25.6 25.6 0 0 1 36.181334 0l12.0832 12.0832z" p-id="2173" fill="#8a8a8a"></path></svg>'
class orders extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      defaultAddress: {},
      paidway: [
        {
          id: 1,
          image: require('../../../res/微信支付.png'),
          text: '微信支付'
        },
        {
          id: 2,
          image: require('../../../res/支付宝.png'),
          text: '支付宝支付'
        },
        {
          id: 3,
          image: require('../../../res/银行卡支付.png'),
          text: '银行卡支付'
        }
      ],
      activeTab: -1,
      way: '',
      addressId: -1,
      isvisiable:false
    };
  }
  static defaultProps = {
    style: {},
    textStyle: {},
    cisabled: false
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
  changeAddressId = (addressId) => {
    this.setState({ addressId });
  };
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
    if (this.state.addressId !== -1 && this.state.activeTab !== -1) {
      const { count, shopId, id, color, title, price, img } =
        this.props.route.params;
      const data = {
        shopId,
        shopCarId: id,
        count,
        howPay: this.state.activeTab,
        addressId: this.state.addressId,
        color,
        title,
        price,
        img,
        create_time
      };
      addOrider(data)
        .then((res) => this.props.getUserOriderListAction())
        .then((ress) =>{
          this.setState({isvisiable:false})
          this.context.navigate('paySuccess', {
            ...data,
            address: this.state.defaultAddress
          })}
        );
    } else {
      ToastAndroid.show('请选择支付方式', ToastAndroid.SHORT);
    }
  };

  addOrder1= () => {
  
    if (this.state.addressId !== -1 && this.state.activeTab !== -1) {
 

         this.setState({isvisiable:!this.state.isvisiable})
        
    } else {
      ToastAndroid.show('请选择支付方式', ToastAndroid.SHORT);
    }
  };

  static contextType = NavigationContext;
  changeDefaultAddress = (payload) => {
    this.setState({ defaultAddress: payload });
  };
  render() {
    console.log(this.props.route.params);
    const { count, title, color, img, price } = this.props.route.params;

    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>

        <Top icon1="arrow-back" title="确认订单" />
        <ScrollView
          style={{ flex: 1, padding: pxToDp(14) }}
          showsVerticalScrollIndicator={false}
        >

          {/* 订单状态 */}
          <View
            style={{
              margin: pxToDp(2),
              borderRadius: pxToDp(8),
              height: pxToDp(50),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <Text style={{ fontSize: pxToDp(16) }}>订单状态: 待确认</Text>
          </View>
          {/* 收货地址 */}
          <View
            style={{
              margin: pxToDp(2),
              marginTop: pxToDp(16),
              backgroundColor: '#fff',
              height: pxToDp(100),
              borderRadius: pxToDp(8),
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <Address
              orider={this.props.route.params}
              defaultAddress={this.state.defaultAddress}
              changeAddressId={this.changeAddressId}
              changeDefaultAddresses={this.changeDefaultAddress}
            />
          </View>
          {/* 商品信息 */}
          <TouchableOpacity
            style={{
              margin: pxToDp(2),
              height: pxToDp(124),
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              marginTop: pxToDp(16),
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <View
              style={{
                justifyContent: 'center'
              }}
            >
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
              <View>
                <Text style={{ fontSize: pxToDp(15), fontWeight: 'bold' }}>
                  {title}
                </Text>
              </View>
              <View
                style={{
                  width: pxToDp(220),
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
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
              </View>
              <View>
                <Text
                  style={{
                    fontSize: pxToDp(18),
                    color: '#62bfad',
                    fontWeight: 'bold'
                  }}
                >
                  ￥{price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* 商品价格 */}
          <View
            style={{
              margin: pxToDp(2),
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              marginTop: pxToDp(16),
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <View
              style={{
                margin: pxToDp(8),
                justifyContent: 'space-between',
                flexDirection: 'row'
              }}
            >
              <Text style={{ opacity: 0.6 }}>商品价格</Text>
              <Text style={{ opacity: 0.6 }}>￥{price}</Text>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexDirection: 'row',
                margin: pxToDp(8)
              }}
            >
              <Text style={{ fontSize: pxToDp(18) }}>合计</Text>
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
          {/* 支付方式 */}
          <View>
            <TouchableOpacity
              onPress={() => this.Scrollable.open()}
              style={{
                margin: pxToDp(2),
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
                source={require('../../../res/箭头.png')}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: 'white',
            height: pxToDp(70),
            elevation: 2,
            shadowColor: 'black', //  阴影颜色
            shadowOffset: { width: 0, height: 0 }, // 阴影偏移
            shadowOpacity: 1, // 阴影不透明度
            shadowRadius: 10 //  圆角
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginLeft: pxToDp(15),
              alignItems: 'flex-end'
            }}
          >
            <Text style={{ fontSize: pxToDp(13) }}>合计金额</Text>
            <Text
              style={{
                fontSize: pxToDp(18),
                marginLeft: pxToDp(5),
                fontWeight: 'bold',
                color: '#62bfad'
              }}
            >
              ￥{price * count}
            </Text>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={ this.state.isvisiable}
            >

              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={()=>this.setState({isvisiable:false})} style={{position:'absolute',top:-20,left:-20}}>
                    <SvgUri svgXmlData={back} width='30' height='30'/>
                    </TouchableOpacity>
                    <CodeFieldzz  onPress={this.addOrder}/>
                  </View>
                </View>
              </View>
            </Modal>

          </View>
          <Mybtn
            cisabled={this.props.disabled}
            title="提交订单"
            onPress={this.addOrder1}
            buttonStyle={{
              width: pxToDp(120),
              height: pxToDp(40),
              alignSelf: 'flex-end',
              borderRadius: pxToDp(32),
              marginRight: pxToDp(8)
            }}
            titleStyle={{
              color: '#fcfcfc',
              fontWeight: 'bold',
              fontSize: pxToDp(16)
            }}
          />
        </View>

        {/* 支付方式弹窗 */}
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(16),


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
    backgroundColor: "#fff"
  },
});
export default connect(() => ({}, { getUserOriderListAction }))(orders);
