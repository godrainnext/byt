import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';

class Index extends PureComponent {
  render() {
    return this.props.page.map((item) => (
      <View
        key={item.oriderId}
        style={{
          height: pxToDp(230),
          marginLeft: pxToDp(20),
          marginRight: pxToDp(20),
          borderBottomWidth: pxToDp(1),
          borderBottomColor: 'grey'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: pxToDp(20)
          }}
        >
          <Text style={{ fontSize: pxToDp(17) }}>百越庭官方旗舰店</Text>
          <Text style={{ fontSize: pxToDp(13) }}>
            {item.status === 0
              ? '待支付'
              : item.status === 1
              ? '待收货'
              : '待评价'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: pxToDp(10),
            justifyContent: 'space-between'
          }}
        >
          <Image
            style={{
              height: pxToDp(110),
              width: pxToDp(110),
              borderRadius: pxToDp(10)
            }}
            source={{ uri: item.img }}
          />
          <View>
            <Text style={{ fontSize: pxToDp(15) }}>{item.title}</Text>
            <Text style={{ fontSize: pxToDp(15), alignSelf: 'flex-end' }}>
              ￥{item.price}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={{ fontSize: pxToDp(15) }}>
            总价￥{item.price * item.count}
          </Text>
          <Text style={{ fontSize: pxToDp(15), fontWeight: 'bold' }}>
            {' '}
            实付款￥{item.price * item.count}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginTop: pxToDp(10)
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: 'grey',
              borderWidth: pxToDp(1),
              height: pxToDp(23),
              width: pxToDp(70),
              borderRadius: pxToDp(10),
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: pxToDp(10)
            }}
          >
            <Text style={{ fontSize: pxToDp(15) }}>
              {item.status === 0
                ? '去支付'
                : item.status === 1
                ? '确认收货'
                : '评价'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  }
}
export default Index;
