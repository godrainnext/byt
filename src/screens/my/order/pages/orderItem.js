import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';

class Index extends PureComponent {
  render() {
    console.log(this.props.page);
    return this.props.page.map((item) => (
      <View
        key={item.oriderId}
        style={{
          height: pxToDp(230),
          margin: pxToDp(16),
          padding: pxToDp(8),
          borderRadius: pxToDp(8),
          backgroundColor: '#fff',
          elevation: 4,
          shadowColor: 'black', //  阴影颜色
          shadowOffset: { width: 0, height: 0 }, // 阴影偏移
          shadowOpacity: 1, // 阴影不透明度
          shadowRadius: 10 //  圆角
        }}
      >
        {/* 头部 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: pxToDp(10)
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
        {/* 中间 */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: pxToDp(10)
          }}
        >
          <Image
            style={{
              height: pxToDp(110),
              width: pxToDp(110),
              borderRadius: pxToDp(8)
            }}
            source={{ uri: item.img }}
          />
          <View
            style={{
              marginLeft: pxToDp(8),
              width: pxToDp(216),
              justifyContent: 'space-around'
            }}
          >
            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: pxToDp(15) }}>{item.color}</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: pxToDp(8)
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  marginRight: pxToDp(4)
                }}
              >
                ￥{item.price}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(14),
                  alignSelf: 'flex-end'
                }}
              >
                X{item.count}
              </Text>
            </View>
          </View>
        </View>
        {/* 底部 */}
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
              borderRadius: pxToDp(8),
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: pxToDp(8)
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
