/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import RBSheet from 'react-native-raw-bottom-sheet';
import { NavigationContext } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      activeTab: 1,
      way: ''
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
    } else {
      this.setState({ way: '银行卡支付' });
    }
  };

  static contextType = NavigationContext;

  render() {
    let total =
      this.props.route.params.price * 1 * this.props.route.params.count * 1 +
      this.props.route.params.count *
        1 *
        this.props.route.params.leaseday *
        this.props.route.params.leaseprice *
        1;
    const { count, tabs, activeTab, way, leaseprice } = this.state;
    console.log('day', this.props.route.params);
    console.log('message', this.props.route.params.count);
    return (
      <View style={{ backgroundColor: '#e2f4fe' }}>
        <Top icon1="arrow-back" title="确认订单" />
        <ScrollView style={{ height: pxToDp(675) }}>
          {/* 订单状态 */}
          <View
            style={{
              borderRadius: pxToDp(8),
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
          <TouchableOpacity
            onPress={() => this.context.navigate('address')}
            style={{
              marginTop: pxToDp(5),
              borderRadius: pxToDp(8),
              margin: pxToDp(5),
              backgroundColor: 'white'
            }}
          >
            <View
              style={{
                marginTop: pxToDp(20),
                marginLeft: pxToDp(20),
                flexDirection: 'row'
              }}
            >
              <Text style={{ fontSize: pxToDp(16) }}>真是厉害</Text>
              <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(40) }}>
                156****5137
              </Text>
              <Image
                style={{
                  width: pxToDp(20),
                  height: pxToDp(20),
                  marginLeft: pxToDp(130),
                  marginTop: pxToDp(15)
                }}
                source={require('../../../res/箭头.png')}
              />
            </View>
            <View style={{ marginLeft: pxToDp(20), marginBottom: pxToDp(10) }}>
              <Text style={{ fontSize: pxToDp(14) }}>
                浙江省 杭州市 拱墅区 浙江树人大学
              </Text>
            </View>
          </TouchableOpacity>
          {/* 商品信息 */}
          <TouchableOpacity
            style={{
              height: pxToDp(140),
              flexDirection: 'row',
              backgroundColor: 'white',
              margin: pxToDp(5),
              borderRadius: pxToDp(8)
            }}
          >
            <View style={{ justifyContent: 'center', marginLeft: pxToDp(15) }}>
              <Image
                style={{ width: pxToDp(110), height: pxToDp(110) }}
                source={{
                  uri: 'https://img20.360buyimg.com/imgzone/jfs/t1/173507/4/18790/68769/60e68718E0f0ea850/91903dd60a5c5707.jpg'
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
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: pxToDp(15),
                    fontWeight: 'bold',
                    width: pxToDp(230)
                  }}
                >
                  {this.props.route.params.comment}
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
                  <Text style={{ fontSize: pxToDp(12) }}>
                    {this.props.route.params.text}{' '}
                    {this.props.route.params.weight}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: pxToDp(12) }}>
                    X {this.props.route.params.count}
                  </Text>
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
                  {this.props.route.params.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
                borderRadius: pxToDp(8)
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
          {/* 租赁选项 */}
          <View
            style={{
              backgroundColor: 'white',
              margin: pxToDp(5),
              borderRadius: pxToDp(8),
              height: pxToDp(120),
              justifyContent: 'space-around'
            }}
          >
            <View style={styles.leasebox}>
              <Text>租赁天数</Text>
              <Text>{this.props.route.params.leaseday}</Text>
            </View>
            <View style={styles.leasebox}>
              <Text>租赁价格</Text>
              <Text>{this.props.route.params.leaseprice}</Text>
            </View>
            <View style={styles.leasebox}>
              <Text>押金价格</Text>
              <Text>{this.props.route.params.price}</Text>
            </View>
          </View>
          {/* 商品价格 */}
          <View
            style={{
              backgroundColor: 'white',
              margin: pxToDp(5),
              borderRadius: pxToDp(8)
            }}
          >
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
                ￥{total}
              </Text>
            </View>
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
              ￥{total}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              cisabled={this.props.disabled}
              onPress={() => {
                this.context.navigate('leasedetails');
              }}
              style={{
                borderRadius: pxToDp(24),
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
                  borderRadius: pxToDp(4),
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
  leasebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10)
  }
});
export default orders;
