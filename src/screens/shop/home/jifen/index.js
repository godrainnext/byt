import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Top from '../../../../component/common/top';
import { pxToDp } from '../../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import { addOrider } from '../../../../../src/service/shop/index';

export default class index extends PureComponent {
  static contextType = NavigationContext;
  goCreateOrder = () => {
    const { color, img, name, value } = this.props.route.params;
    const data = {
      color,
      img,
      name,
      value
    };
    addOrider(data).then((res) =>
      this.context.navigate('Jifenorder', {
        ...data
        //  address: this.state.defaultAddress
      })
    );
  };
  render() {
    const {
      color,
      img,
      name,
      value,
      price,
      material,
      size,
      specs,
      made,
      detail
    } = this.props.route.params;
    return (
      <View style={{ flex: 1,backgroundColor:'white'}}>
        <Top title="积分兑换" icon1="arrow-back" />
        <ScrollView
          style={{
            flex: 1,
            backgroundColor:'white',
            paddingBottom: pxToDp(50)
          }}
        >
          <View>
            <ImageBackground
              source={img}
              style={{ height: pxToDp(375), width: pxToDp(375) }}
            />
            <View style={styles.botbox}>
              <View
                style={{
                  margin: pxToDp(8),
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{ color: '#468cd3', fontSize: pxToDp(18), fontWeight: 'bold' }}
                  numberOfLines={2}
                >
                  百越庭
                </Text>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', marginLeft: pxToDp(5) }}>
                  {name}
                </Text>
              </View>
              <View style={{ marginLeft: pxToDp(8), flexDirection: 'row'}}>
                <Text style={{ fontSize: pxToDp(18), color: '#333333' }}>{value}</Text>
                <Text style={{ fontSize: pxToDp(16), alignSelf: 'flex-end', color: '#333333' }}>
                  积分
                </Text>
              </View>
            </View>
            <View style={{ margin: pxToDp(8)}}>
              <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>
                商品详情
              </Text>
              <View
                style={{ height: pxToDp(200), justifyContent: 'space-around' }}
              >
                <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>价值：{price}</Text>
                <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>色彩：{color}</Text>
                <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>材质：{material}</Text>
                <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>尺寸：{size}</Text>
                <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>规格：{specs}</Text>
                <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>工艺：{made}</Text>
              </View>
              <Text
                style={{
                  fontSize: pxToDp(18),
                  fontWeight: 'bold',
                  marginTop: pxToDp(8)
                }}
              >
                具体介绍
              </Text>
              <Text style={{ marginTop: pxToDp(8), color: '#333333', fontSize: pxToDp(16) }}>{detail}</Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={this.goCreateOrder}>
          <View style={styles.button}>
            <Text style={{ fontSize: pxToDp(20) }}>立即兑换</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: pxToDp(40),
    backgroundColor: '#468cd3',
    margin: pxToDp(8),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16),
    borderRadius: pxToDp(24),
    justifyContent: 'center',
    alignItems: 'center'
  },
  botbox: {
    backgroundColor: 'white',
    marginTop: pxToDp(-10),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
});
