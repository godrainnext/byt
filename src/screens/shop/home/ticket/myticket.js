import React, { PureComponent } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import Top from '../../../../component/common/top';
import { pxToDp } from '../../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import { phone, right } from '../../../../component/common/iconSvg';
import Mybtn from '../../../../component/common/mybtn';
import AnimatedLoader from 'react-native-animated-loader';

export default class myticket extends PureComponent {
  state = {
    visible: true
  };
  componentDidMount() {
    new Promise((res, rej) => {
      setTimeout(() => {
        res(123);
      }, 1500);
    }).then((res) =>
      this.setState({
        visible: !this.state.visible
      })
    );
  }

  static contextType = NavigationContext;
  render() {
    const { chooseCount, create_time } = this.props.route.params;
    const { visible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Top title="票据详情" icon1="arrow-back" />
        <AnimatedLoader
          visible={visible}
          overlayColor="rgba(255,255,255,1)"
          source={require('../../../../../lottie/paysuccess.json')}
          animationStyle={{
            width: 100,
            height: 100
          }}
          speed={1}
        >
          <Text style={{ fontSize: pxToDp(24), marginTop: pxToDp(16) }}>
            购票成功
          </Text>
        </AnimatedLoader>
        <ScrollView
          style={{
            flex: 1,
            padding: pxToDp(16)
          }}
        >
          <View style={{ alignSelf: 'center' }}>
            <Text style={{ fontSize: pxToDp(18) }}>未开始演出</Text>
          </View>
          <ImageBackground
            source={require('../../../../res/ticket.png')}
            style={{ width: '100%', height: pxToDp(1400) }}
          >
            {/* 顶部logo */}
            <Image
              source={require('../../../../res/logo.png')}
              style={{
                width: pxToDp(64),
                height: pxToDp(64),
                alignSelf: 'center',
                marginTop: pxToDp(5),
                marginLeft: pxToDp(5)
              }}
            />
            {/* 越剧信息盒子 */}
            <View
              style={{
                padding: pxToDp(16),
                height: pxToDp(170),
                flexDirection: 'row'
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: pxToDp(24),
                    color: '#000',
                    fontWeight: 'bold'
                  }}
                >
                  钱塘戏社越剧专场
                </Text>
                <Text style={{ marginTop: pxToDp(16), fontSize: pxToDp(16) }}>
                  2021.08.15-10.01
                </Text>
                <Text style={{ marginTop: pxToDp(16), fontSize: pxToDp(16) }}>
                  鼓楼剧场
                </Text>
              </View>
              <View>
                <Image
                  source={require('../../../../res/ticket1.jpg')}
                  style={{
                    width: pxToDp(90),
                    height: pxToDp(120),
                    borderRadius: pxToDp(8),
                    marginLeft: pxToDp(16)
                  }}
                />
              </View>
            </View>
            {/* 剧票二维码 */}
            <View
              style={{
                padding: pxToDp(16),
                height: pxToDp(385)
              }}
            >
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                取剧票
              </Text>
              <Image
                source={require('../../../../res/二维码.png')}
                style={{
                  width: pxToDp(200),
                  height: pxToDp(200),
                  alignSelf: 'center',
                  marginTop: pxToDp(24)
                }}
              />
              <View
                style={{
                  marginTop: pxToDp(16),
                  height: pxToDp(80),
                  padding: pxToDp(16),
                  flexDirection: 'row'
                }}
              >
                <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                  取票号：
                </Text>
                <Text style={{ fontSize: pxToDp(20) }}>2414158814</Text>
              </View>
            </View>
            {/* 地址 */}
            <View
              style={{
                padding: pxToDp(16),
                height: pxToDp(120),
                flexDirection: 'row'
              }}
            >
              <View>
                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                  杭州 鼓楼剧场
                </Text>
                <Text
                  style={{
                    fontSize: pxToDp(16),
                    marginTop: pxToDp(16),
                    color: '#666666'
                  }}
                >
                  中山南路501号鼓楼城墙二楼
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  right: pxToDp(24)
                }}
              >
                <SvgUri svgXmlData={phone} width="230" height="30" />
              </TouchableOpacity>
            </View>
            {/* 价格 */}
            <View
              style={{
                padding: pxToDp(16),
                height: pxToDp(160),
                justifyContent: 'space-around'
              }}
            >
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                实付金额：￥{chooseCount * 30}
              </Text>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                订单号:1817592456164
              </Text>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                购买时间:{create_time}
              </Text>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                剧票由百越亭有限公司提供
              </Text>
            </View>
            {/* 观剧须知 */}
            <View
              style={{
                padding: pxToDp(16),
                height: pxToDp(410),
                justifyContent: 'space-around'
              }}
            >
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                观剧须知
              </Text>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                1.请提前到达剧院现场，找到自助取票机，打印纸质剧票，完成取票。
              </Text>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                2.如到达自助取票机无法打印剧票，请联系剧院工作人员处理。
              </Text>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                3.凭打印好的纸质剧票，检票入场观剧。
              </Text>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                4.如果订单购买了特殊场次，暂不支持退票和改签。
              </Text>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                5.如有开具所购越剧发票的需求，请保留好剧票票根，尽量在观影当天联系剧院工作人员进行开具，如遇特殊情况请及时联系百越亭人工客服咨询。
              </Text>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                6.改签，退票服务由剧院决定。
              </Text>
            </View>
            {/* 底部按钮 */}
          </ImageBackground>
        </ScrollView>
        <Mybtn
          title="返回首页"
          onPress={() => this.context.navigate('Tabbar')}
          containerStyle={{
            position: 'absolute',
            bottom: 0,
            fontSize: 30,
            width: pxToDp(320),
            height: pxToDp(40),
            borderRadius: pxToDp(40),
            alignSelf: 'center',
            color: 'red',
            display: 'none'
          }}
          buttonStyle={{
            width: '100%',
            height: '100%',
            alignSelf: 'flex-end',
            borderRadius: pxToDp(32)
          }}
        />
      </View>
    );
  }
}
