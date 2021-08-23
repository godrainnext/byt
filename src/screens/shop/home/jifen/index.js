import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
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
      <View style={{ flex: 1 }}>
        <Top title="积分兑换" icon1="arrow-back" />
        <ScrollView
          style={{
            flex: 1,
            paddingBottom: pxToDp(50)
          }}
        >
          <View>
            <Image
              source={img}
              style={{ height: pxToDp(375), width: pxToDp(375) }}
            />
            <View
              style={{
                margin: pxToDp(15),
                flexDirection: 'row'
              }}
            >
              <View style={styles.box}>
                <Text
                  style={{ color: '#468cd3', fontSize: pxToDp(16) }}
                  numberOfLines={2}
                >
                  百越庭
                </Text>
              </View>
              <View
                style={{
                  height: pxToDp(30),
                  justifyContent: 'center'
                }}
              >
                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                  {name}
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: pxToDp(15), flexDirection: 'row' }}>
              <Text style={{ fontSize: pxToDp(25) }}>{value}</Text>
              <Text style={{ fontSize: pxToDp(16), alignSelf: 'flex-end' }}>
                积分
              </Text>
            </View>
          </View>
          <View style={{ margin: pxToDp(10) }}>
            <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>
              商品详情
            </Text>
            <View
              style={{ height: pxToDp(200), justifyContent: 'space-around' }}
            >
              <Text>价值：{price}</Text>
              <Text>色彩：{color}</Text>
              <Text>材质：{material}</Text>
              <Text>尺寸：{size}</Text>
              <Text>规格：{specs}</Text>
              <Text>工艺：{made}</Text>
            </View>
            <Text
              style={{
                fontSize: pxToDp(16),
                fontWeight: 'bold',
                marginTop: pxToDp(8)
              }}
            >
              具体介绍
            </Text>
            <Text style={{ marginTop: pxToDp(8) }}>{detail}</Text>
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
  box: {
    backgroundColor: '#ecf6fc',
    height: pxToDp(30),
    marginRight: pxToDp(10),
    borderRadius: pxToDp(16),
    justifyContent: 'center'
  },
  button: {
    height: pxToDp(40),
    backgroundColor: '#468cd3',
    margin: pxToDp(8),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16),
    borderRadius: pxToDp(24),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
