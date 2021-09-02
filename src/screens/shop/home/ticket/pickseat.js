import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal
} from 'react-native';
import Top from '../../../../component/common/top';
import SvgUri from 'react-native-svg-uri';
import { pxToDp } from '../../../../utils/styleKits';
import { seat1, seat2, seat3 } from '../../../../component/common/iconSvg';
import Mybtn from '../../../../component/common/mybtn';
import Seat from './Seat';
import { NavigationContext } from '@react-navigation/native';
import CodeFieldzz from '../../../my/order/components/codefield';
const back =
  '<svg t="1630480820345" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2172" width="200" height="200"><path d="M759.3984 276.6848a25.6 25.6 0 0 1 0 36.181333L560.298667 512l199.099733 199.168a25.6 25.6 0 0 1 0 36.181333l-12.0832 12.0832a25.6 25.6 0 0 1-36.181333 0L512 560.264533l-199.168 199.133867a25.6 25.6 0 0 1-36.181333 0l-12.0832-12.0832a25.6 25.6 0 0 1 0-36.181333l199.133866-199.168-199.133866-199.099734a25.6 25.6 0 0 1 0-36.181333l12.0832-12.0832a25.6 25.6 0 0 1 36.181333 0l199.168 199.099733 199.099733-199.099733a25.6 25.6 0 0 1 36.181334 0l12.0832 12.0832z" p-id="2173" fill="#8a8a8a"></path></svg>';
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
      isvisiable: false,
      chooseArr: [],
      chooseCount: 0
    };
  }

  addOrder = () => {
    this.setState({ isvisiable: false });
    this.context.navigate('MyTicket');
  };
  addSeat = (id) => {
    this.setState({ chooseArr: [...this.state.chooseArr, id] });
    this.setState({ chooseCount: this.state.chooseCount + 1 });
  };
  removeSeat = (id) => {
    this.setState({
      chooseArr: [...this.state.chooseArr.filter((item) => item !== id)]
    });
    this.setState({ chooseCount: this.state.chooseCount - 1 });
  };
  static contextType = NavigationContext;
  render() {
    console.log(this.state.chooseCount);
    console.log(this.state.chooseArr);
    const { chooseCount } = this.state;
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
                <Seat
                  key={item.id}
                  item={item}
                  addSeat={this.addSeat}
                  removeSeat={this.removeSeat}
                />
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

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isvisiable}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => this.setState({ isvisiable: false })}
                    style={{ position: 'absolute', top: -20, left: -20 }}
                  >
                    <SvgUri svgXmlData={back} width="30" height="30" />
                  </TouchableOpacity>
                  <CodeFieldzz onPress={this.addOrder} />
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
        <Mybtn
          onPress={() => this.setState({ isvisiable: true })}
          title={
            chooseCount === 0 ? '选择座位' : chooseCount * 30 + '元    确认选座'
          }
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
        {/* <CodeFieldzz  onPress={this.addOrder}/> */}
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(16)
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff'
  }
});
