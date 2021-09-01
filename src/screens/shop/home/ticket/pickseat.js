import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import Top from '../../../../component/common/top';
import SvgUri from 'react-native-svg-uri';
import { pxToDp } from '../../../../utils/styleKits';
import { seat1, seat2, seat3 } from '../../../../component/common/iconSvg';
import Mybtn from '../../../../component/common/mybtn';
import Seat from './Seat';

export default class pickseat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Seat: [
        {
          id: 1,
          seat: seat3
        },
        {
          id: 2,
          seat: seat3
        },
        {
          id: 3,
          seat: seat3
        },
        {
          id: 4,
          seat: seat3
        },
        {
          id: 5,
          seat: seat1
        },
        {
          id: 6,
          seat: seat1
        },
        {
          id: 7,
          seat: seat3
        },
        {
          id: 8,
          seat: seat3
        },
        {
          id: 9,
          seat: seat3
        },
        {
          id: 10,
          seat: seat3
        },
        {
          id: 11,
          seat: seat3
        },
        {
          id: 12,
          seat: seat1
        },
        {
          id: 13,
          seat: seat1
        },
        {
          id: 14,
          seat: seat1
        },
        {
          id: 15,
          seat: seat1
        },
        {
          id: 16,
          seat: seat3
        },
        {
          id: 17,
          seat: seat3
        },
        {
          id: 18,
          seat: seat3
        },
        {
          id: 19,
          seat: seat3
        },
        {
          id: 20,
          seat: seat1
        },
        {
          id: 21,
          seat: seat1
        },
        {
          id: 22,
          seat: seat1
        },
        {
          id: 23,
          seat: seat1
        },
        {
          id: 24,
          seat: seat3
        },
        {
          id: 25,
          seat: seat1
        },
        {
          id: 26,
          seat: seat1
        },
        {
          id: 27,
          seat: seat1
        },
        {
          id: 28,
          seat: seat3
        },
        {
          id: 29,
          seat: seat1
        },
        {
          id: 30,
          seat: seat1
        },
        {
          id: 31,
          seat: seat3
        },
        {
          id: 32,
          seat: seat3
        },
        {
          id: 33,
          seat: seat3
        },
        {
          id: 34,
          seat: seat3
        },
        {
          id: 35,
          seat: seat3
        },
        {
          id: 36,
          seat: seat3
        },
        {
          id: 37,
          seat: seat3
        },
        {
          id: 38,
          seat: seat3
        },
        {
          id: 39,
          seat: seat1
        },
        {
          id: 40,
          seat: seat1
        },
        {
          id: 41,
          seat: seat3
        },
        {
          id: 42,
          seat: seat1
        },
        {
          id: 43,
          seat: seat1
        },
        {
          id: 44,
          seat: seat1
        },
        {
          id: 45,
          seat: seat3
        },
        {
          id: 46,
          seat: seat3
        },
        {
          id: 47,
          seat: seat3
        },
        {
          id: 48,
          seat: seat3
        },
        {
          id: 49,
          seat: seat1
        },
        {
          id: 50,
          seat: seat1
        },
        {
          id: 51,
          seat: seat1
        },
        {
          id: 52,
          seat: seat1
        },
        {
          id: 53,
          seat: seat1
        },
        {
          id: 54,
          seat: seat1
        },
        {
          id: 55,
          seat: seat3
        },
        {
          id: 56,
          seat: seat3
        },
        {
          id: 57,
          seat: seat3
        },
        {
          id: 58,
          seat: seat3
        },
        {
          id: 59,
          seat: seat3
        },
        {
          id: 60,
          seat: seat3
        },
        {
          id: 61,
          seat: seat3
        },
        {
          id: 62,
          seat: seat3
        },
        {
          id: 63,
          seat: seat3
        },
        {
          id: 64,
          seat: seat3
        }
      ],
      count: 0
    };
  }
  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    console.log(this.state.count);
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" />
        <ScrollView style={{ padding: pxToDp(16), backgroundColor: '#fff' }}>
          {/* 顶部场次信息 */}
          <View>
            <Text
              style={{
                fontSize: pxToDp(16),
                fontWeight: 'bold',
                color: '#333333'
              }}
            >
              【杭州】【鼓楼剧场】钱塘戏社越剧专场-周日
            </Text>
            <Text style={{ fontSize: pxToDp(14), color: '#666' }}>
              今天13：30-16：00
            </Text>
          </View>
          {/* 舞台 */}
          <View
            style={{
              height: pxToDp(50),
              marginTop: pxToDp(16)
            }}
          >
            <Image
              source={require('../../../../res/screen.png')}
              style={{ height: pxToDp(50), marginLeft: pxToDp(12) }}
            />
          </View>
          {/* 座位 */}
          <View
            style={{
              flex: 1,
              marginTop: pxToDp(16),
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                width: pxToDp(322),
                height: pxToDp(378),
                flexWrap: 'wrap',
                flexDirection: 'row'
              }}
            >
              {this.state.Seat.map((item, index) => (
                <Seat item={item} count={this.state.count} />
              ))}
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginTop: pxToDp(17)
              }}
            >
              <Text style={[styles.text, { marginTop: 0 }]}>1</Text>
              <Text style={styles.text}>2</Text>
              <Text style={styles.text}>3</Text>
              <Text style={styles.text}>4</Text>
              <Text style={styles.text}>5</Text>
              <Text style={styles.text}>6</Text>
              <Text style={styles.text}>7</Text>
              <Text style={styles.text}>8</Text>
            </View>
          </View>
          {/* 座位状态 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgUri svgXmlData={seat3} width="30" height="30" />
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                可选
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgUri svgXmlData={seat1} width="30" height="30" />
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                已售
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgUri svgXmlData={seat2} width="30" height="30" />
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                已选
              </Text>
            </View>
          </View>
        </ScrollView>
        <Mybtn
          // onPress={() => this.Scrollable.open()}
          title="立刻购买"
          containerStyle={{
            position: 'absolute',
            bottom: 0,
            fontSize: 30,
            alignSelf: 'center'
          }}
          buttonStyle={{
            width: pxToDp(320),
            height: pxToDp(40),
            borderRadius: pxToDp(32)
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    height: pxToDp(30),
    marginTop: pxToDp(13.5)
  }
});
