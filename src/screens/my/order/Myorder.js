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
  ToastAndroid
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '@utils/styleKits';
import RBSheet from 'react-native-raw-bottom-sheet';
import { NavigationContext } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Address from '../../../component/my/address';
import { addOrider } from '../../../service/shop';

class orders extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
    if (this.state.addressId !== -1 && this.state.activeTab !== -1) {
      const { count, shopId, id } = this.props.route.params;
      const data = {
        shopId,
        shopCarId: id,
        count,
        howPay: this.state.activeTab,
        addressId: this.state.addressId
      };
      addOrider(data).then((res) => this.context.navigate('Pay'));
      ToastAndroid.show('请选择支付方式', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('请选择支付方式', ToastAndroid.SHORT);
    }
  };
  componentDidMount() {}
  static contextType = NavigationContext;

  render() {
    console.log(this.props.route.params);
    const { count, title, color, img, price } = this.props.route.params;
    return (
      <View style={{ backgroundColor: '#e2f4fe', flex: 1 }}>
        <Top icon1="arrow-back" title="确认订单" />
        <ScrollView style={{ height: pxToDp(675) }}>
          {/* 订单状态 */}
          <View
            style={{
              borderRadius: pxToDp(10),
              margin: pxToDp(5),
              height: pxToDp(50),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white'
            }}
          >
            <Text style={{ fontSize: pxToDp(16) }}>订单状态: 待确认</Text>
          </View>
          {/* 收获地址 */}
          <Address changeAddressId={this.changeAddressId} />
          {/* 商品信息 */}
          <TouchableOpacity
            style={{
              height: pxToDp(140),
              flexDirection: 'row',
              backgroundColor: 'white',
              margin: pxToDp(5),
              borderRadius: pxToDp(10)
            }}
          >
            <View style={{ justifyContent: 'center', marginLeft: pxToDp(15) }}>
              <Image
                style={{ width: pxToDp(110), height: pxToDp(110) }}
                source={{
                  uri: img
                }}
              />
            </View>
            <View
              style={{
                marginLeft: pxToDp(8),
                marginTop: pxToDp(18),
                justifyContent: 'space-between'
              }}
            >
              <View style={{}}>
                <Text style={{ fontSize: pxToDp(15), fontWeight: 'bold' }}>
                  {title}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: pxToDp(30),
                  width: pxToDp(220),
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View style={{ width: pxToDp(150) }}>
                  <Text style={{ fontSize: pxToDp(12) }}>{color}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: pxToDp(12) }}>X{count}</Text>
                </View>
              </View>
              <View style={{ marginBottom: pxToDp(15) }}>
                <Text
                  style={{
                    fontSize: pxToDp(18),
                    color: 'red',
                    fontWeight: 'bold'
                  }}
                >
                  {price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* 商品价格 */}
          <View
            style={{
              backgroundColor: 'white',
              margin: pxToDp(5),
              borderRadius: pxToDp(10)
            }}
          >
            <View
              style={{
                marginRight: pxToDp(10),
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginLeft: pxToDp(20),
                marginTop: pxToDp(10)
              }}
            >
              <Text style={{ opacity: 0.6 }}>商品价格</Text>
              <Text style={{ opacity: 0.6 }}>￥{price}</Text>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: pxToDp(10),
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: pxToDp(10),
                marginBottom: pxToDp(15),
                marginLeft: pxToDp(20)
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
                ￥{price}
              </Text>
            </View>
          </View>
          {/* 支付方式 */}
          <View>
            <TouchableOpacity
              onPress={() => this.Scrollable.open()}
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                height: pxToDp(40),
                margin: pxToDp(10),
                flexDirection: 'row',
                backgroundColor: 'white',
                margin: pxToDp(5),
                borderRadius: pxToDp(10)
              }}
            >
              <Text style={{ marginLeft: pxToDp(15) }}>支付方式:</Text>
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
            height: pxToDp(70)
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

          <TouchableOpacity
            cisabled={this.props.disabled}
            onPress={this.addOrder}
            style={{
              borderRadius: pxToDp(25),
              marginRight: pxToDp(20),
              width: pxToDp(130),
              height: pxToDp(40),
              ...this.props.style,
              overflow: 'hidden'
            }}
          >
            {/* <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#55B3F0', '#537ED7']}
            style={styles.linearGradient}>
            <Text style={{...styles.buttonText, ...this.props.textStyle}}>
              提交订单
            </Text>
          </LinearGradient> */}
            <View
              style={{
                flex: 1,
                paddingLeft: pxToDp(15),
                paddingRight: pxToDp(15),
                borderRadius: pxToDp(5),
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ecf6fc'
              }}
            >
              <Text>提交订单</Text>
            </View>
          </TouchableOpacity>
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
    borderRadius: pxToDp(5),
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
export default orders;
