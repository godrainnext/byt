import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { changeOriderStatus } from '../../../../service/mine';
import { pxToDp } from '../../../../utils/styleKits';
import { getUserOriderListAction } from '../../../first/home/store/actions';
import { connect } from 'react-redux';
import Mybtn from '../../../../component/common/mybtn';
class Index extends PureComponent {
  changeStatus(id, status) {
    console.log(status);
    changeOriderStatus(id, status).then(() => {
      this.props.getUserOriderListAction();
    });
  }
  render() {
    return this.props.page.map((item) => (
      <View
        key={item.oriderId}
        style={{
          height: pxToDp(260),
          margin: pxToDp(8),
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
            margin: pxToDp(10)
          }}
        >
          <Text style={{ fontSize: pxToDp(18),color:'#000000',fontWeight:'bold' }}>百越庭官方旗舰店</Text>
          <Text style={{ fontSize: pxToDp(14),color:'#666666' }}>
            {item.status === 0
              ? ''
              : item.status === 1
              ? '待收货'
              : '待评价'}
          </Text>
        </View>
        {/* 中间 */}
        <View
          style={{
            flexDirection: 'row',
            marginLeft:pxToDp(10)
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
            <Text style={{ fontSize: pxToDp(18) }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: pxToDp(16),color:'#333333' }}>{item.color}</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight:pxToDp(10)
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(14),
                  color:'#333333',
                  marginRight: pxToDp(8)
                }}
              >
                ￥{item.price}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(14),
                  color:'#333333',
                  alignSelf: 'flex-end'
                }}
              >
                X{item.count}
              </Text>
            </View>
          </View>
        </View>
        {/* 底部 */}
        <View style={{ alignSelf: 'flex-end', marginRight:pxToDp(10)}}>
          <Text style={{ fontSize: pxToDp(14), alignSelf: 'flex-end' }}>
            总价￥{item.price * item.count}
          </Text>
          <Text
            style={{
              fontSize: pxToDp(19),
              fontWeight: 'bold',
              marginTop: pxToDp(4)
            }}
          >
            {' '}
            实付款￥{item.price * item.count}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: pxToDp(10),
            height: pxToDp(32),
            alignItems: 'center'
          }}
        >
          <Text style={{ marginLeft: pxToDp(8), fontSize: pxToDp(14) }}>
            {item.createAt}
          </Text>
   
          <Mybtn
                            onPress={() => this.changeStatus(item.oriderId, item.status + 1)}
                        title={item.status === 0
                          ? '去支付'
                          : item.status === 1
                          ? '确认收货'
                          : '评价'}
                          titleStyle={{
                           height:30,
                            color: '#fcfcfc',
                            fontWeight: 'bold',
                            fontSize: pxToDp(14),marginTop:pxToDp(10)
  
                          
                          }}
                          container
                          buttonStyle={{
                            width: pxToDp(90),
                            height: pxToDp(30),
                            alignSelf: 'flex-end',
                            borderRadius: pxToDp(32),
                            marginRight: pxToDp(8),

                          }}
                    />
                       
        </View>
      </View>
    ));
  }
}
export default connect(() => ({}), { getUserOriderListAction })(Index);
