import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { changeOriderStatus } from '../../../../service/mine';
import { pxToDp } from '../../../../utils/styleKits';
import { getUserOriderListAction } from '../../../first/home/store/actions';
import { connect } from 'react-redux';
import Mybtn from '../../../../component/common/mybtn';
class Index extends PureComponent {
  changeStatus(id, status) {
    changeOriderStatus(id, status).then(() => {
      this.props.getUserOriderListAction();
    });
  }
  render() {
    return this.props.page.map((item) => (
      <View style={{ flex: 1 }}>
        <View
          key={item.oriderId}
          style={{
            marginLeft: pxToDp(16),
            paddingBottom: pxToDp(16),
            marginTop: pxToDp(16),
            marginBottom: pxToDp(-40),
            marginRight: pxToDp(16),
            borderRadius: pxToDp(8),
            backgroundColor: '#fff',
            elevation: 2,
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
              margin: pxToDp(10)
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(18),
                color: '#000000',
                fontWeight: 'bold'
              }}
            >
              百越庭官方旗舰店
            </Text>
            <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>
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
              marginLeft: pxToDp(10)
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
                width: pxToDp(216)
              }}
            >
              <Text style={{ fontSize: pxToDp(16) }}>{item.title}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: pxToDp(16)
                }}
              >
                <Text style={{ fontSize: pxToDp(14), color: '#999999' }}>
                  {item.color}
                </Text>
                <Text
                  style={{
                    fontSize: pxToDp(14),
                    color: '#333333',
                    marginRight: pxToDp(8)
                  }}
                >
                  ×{item.count}
                </Text>
              </View>

              <Text style={{ color: '#62bfad', marginTop: pxToDp(24) }}>
                原创正品
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(10),
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(14),
                marginLeft: pxToDp(10),
                color: '#999999'
              }}
            >
              总价
            </Text>
            <Text
              style={{
                fontSize: pxToDp(12),
                color: '#999999'
              }}
            >
              ￥
            </Text>
            <Text
              style={{
                fontSize: pxToDp(14),
                color: '#999999'
              }}
            >
              {item.price * item.count}
            </Text>

            <Text
              style={{
                fontSize: pxToDp(14),
                color: '#999999',
                marginLeft: pxToDp(16)
              }}
            >
              优惠
            </Text>
            <Text
              style={{
                fontSize: pxToDp(12),
                color: '#999999'
              }}
            >
              ￥
            </Text>
            <Text
              style={{
                fontSize: pxToDp(14),
                color: '#999999'
              }}
            >
              0
            </Text>

            <Text
              style={{
                fontSize: pxToDp(14),
                color: '#333333',
                fontWeight: 'bold',
                marginLeft: pxToDp(16)
              }}
            >
              实付款
            </Text>

            <Text
              style={{
                fontSize: pxToDp(12),
                color: '#333333',
                fontWeight: 'bold'
              }}
            >
              ￥
            </Text>
            <Text
              style={{
                fontSize: pxToDp(14),
                fontWeight: 'bold',
                color: '#333333'
              }}
            >
              {' '}
              {item.price * item.count}
            </Text>
            <View
              style={{
                position: 'absolute',
                bottom: -2,
                right: 0
              }}
            >
              <Mybtn
                onPress={() =>
                  this.changeStatus(item.oriderId, item.status + 1)
                }
                title={
                  item.status === 0
                    ? '去支付'
                    : item.status === 1
                    ? '确认收货'
                    : '评价'
                }
                titleStyle={{
                  height: 30,
                  color: 'white',
                  fontSize: pxToDp(14),
                  marginTop: pxToDp(5)
                }}
                container
                buttonStyle={{
                  width: pxToDp(90),
                  marginRight: pxToDp(8),
                  height: pxToDp(30),
                  borderRadius: pxToDp(32),
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            </View>
          </View>
        </View>
        {/* 底部 */}
        <View style={{}}></View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: pxToDp(10),
            height: pxToDp(32),
            alignItems: 'center'
          }}
        >
          {/* <Text style={{ marginLeft: pxToDp(8), fontSize: pxToDp(14) }}>
            {item.createAt}
          </Text> */}
        </View>
      </View>
    ));
  }
}
export default connect(() => ({}), { getUserOriderListAction })(Index);
