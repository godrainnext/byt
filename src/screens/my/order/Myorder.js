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
  DeviceEventEmitter
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
      addressId: -1
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
        .then((ress) =>
          this.context.navigate('paySuccess', {
            ...data,
            address: this.state.defaultAddress
          })
        );
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
                    color: 'red',
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
                  color: 'red',
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
              <Text style={{ marginLeft: pxToDp(200) }}>{this.state.way}</Text>
              <Image
                style={{
                  width: pxToDp(15),
                  height: pxToDp(15),
                  marginRight: pxToDp(10)
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
                color: 'red'
              }}
            >
              ￥{price * count}
            </Text>
          </View>
          <Mybtn
            cisabled={this.props.disabled}
            title="提交订单"
            onPress={this.addOrder}
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
  }
});
export default connect(() => ({}, { getUserOriderListAction }))(orders);
