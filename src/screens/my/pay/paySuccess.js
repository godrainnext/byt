import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Top from '../../../component/common/top';
import LottieView from 'lottie-react-native';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Mybtn from '../../../component/common/mybtn';

export default class paySuccess extends PureComponent {
  sendOrder = () => {
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
    console.log(this.props.route.params);
    const data = {
      shopId,
      shopCarId,
      count,
      howPay,
      addressId,
      color,
      title,
      price,
      img,
      create_time
    };
    this.context.navigate('orderdetails', this.props.route.params);
  };
  static contextType = NavigationContext;
  render() {
    console.log(this.props.route.params);
    return (
      <View>
        <Top title="" icon1="arrow-back" />
        <View style={{ alignSelf: 'center', marginTop: pxToDp(60) }}>
          <LottieView
            style={{ width: pxToDp(200) }}
            source={require('../../../../lottie/okey.json')}
            autoPlay
            loop={false}
          />
          <Text
            style={{
              fontSize: pxToDp(24),
              alignSelf: 'center',
              marginTop: pxToDp(20),
              color: '#62bfad'
            }}
          >
            支付成功
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: pxToDp(20),
            justifyContent: 'space-around'
          }}
        >
          <Mybtn
            title="返回首页"
            onPress={() => this.context.navigate('Tabbar')}
            buttonStyle={{
              width: pxToDp(120),
              height: pxToDp(40),
              alignSelf: 'flex-end',
              borderRadius: pxToDp(32)
            }}
            titleStyle={{
              color: 'white',
              fontSize: pxToDp(16)
            }}
          />
          <Mybtn
            title="查看订单"
            onPress={this.sendOrder}
            buttonStyle={{
              width: pxToDp(120),
              height: pxToDp(40),
              alignSelf: 'flex-end',
              borderRadius: pxToDp(32)
            }}
            titleStyle={{
              color: 'white',
              fontSize: pxToDp(16)
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    height: pxToDp(36),
    width: pxToDp(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToDp(24),
    backgroundColor: '#468cd3',
    elevation: 10, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: '#468cd3', //  阴影颜色
    shadowOffset: { width: 0, height: 0 }, // 阴影偏移
    shadowOpacity: 1, // 阴影不透明度
    shadowRadius: 10 //  圆角
  },
  text: { fontSize: pxToDp(20), color: '#ecf6fc' }
});
