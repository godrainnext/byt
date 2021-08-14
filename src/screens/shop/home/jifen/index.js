import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Top from '../../../../component/common/top';
import { pxToDp } from '../../../../utils/styleKits';

export default class index extends PureComponent {
  render() {
    console.log('day', this.props.route.params);
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
              source={this.props.route.params.img}
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
                  {this.props.route.params.name}
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: pxToDp(15), flexDirection: 'row' }}>
              <Text style={{ fontSize: pxToDp(25) }}>
                {this.props.route.params.value}
              </Text>
              <Text style={{ fontSize: pxToDp(16), alignSelf: 'flex-end' }}>
                积分
              </Text>
            </View>
          </View>
          <View style={{ margin: pxToDp(10) }}>
            <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>
              商品详情
            </Text>
            <Text style={{ marginTop: pxToDp(8) }}>
              价值：{this.props.route.params.price}
            </Text>
            <Text style={{ marginTop: pxToDp(8) }}>
              色彩：{this.props.route.params.color}
            </Text>
            <Text style={{ marginTop: pxToDp(8) }}>
              材质：{this.props.route.params.material}
            </Text>
            <Text style={{ marginTop: pxToDp(8) }}>
              尺寸：{this.props.route.params.size}
            </Text>
            <Text style={{ marginTop: pxToDp(8) }}>
              规格：{this.props.route.params.specs}
            </Text>
            <Text style={{ marginTop: pxToDp(8) }}>
              工艺：{this.props.route.params.made}
            </Text>
            <Text
              style={{
                fontSize: pxToDp(16),
                fontWeight: 'bold',
                marginTop: pxToDp(8)
              }}
            >
              具体介绍
            </Text>
            <Text style={{ marginTop: pxToDp(8) }}>
              {this.props.route.params.detail}
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity>
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
    borderRadius: pxToDp(20),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
