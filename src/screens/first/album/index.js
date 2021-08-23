import React, { PureComponent } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Top from '../../../component/common/top'
import { pxToDp } from "../../../utils/styleKits";
import { AlwaysOpen } from "../../../component/common/albummenu";
import { NavigationContext } from '@react-navigation/native';
import Mybtn from "../../../component/common/mybtn";
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ArrIndex: 0,
      data: {
        title: '越剧袁派集锦',
        information: '共10个节目，收藏后获取最新节目动态',
        brief:
          '袁派是袁雪芬创立的越剧旦角流派,袁派十分讲究重点唱句的演唱，擅用喷口、气口、加虚词以及强音、顿音等技巧进行特殊处理，造成演唱上的高潮。'
      }
    };
  }
  static contextType = NavigationContext;
  render() {
    const { ArrIndex } = this.state;
    return (
      <View style={{ backgroundColor: '#ecf6fc', flex: 1 }}>
        <Top icon1="arrow-back" />
        {/*头部信息 */}
        <View style={{ margin: pxToDp(8) }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(10),
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: pxToDp(8)
            }}
          >
            <Image
              style={styles.image}
              source={require('../../../res/genre/6.jpg')}
            />
            <View
              style={{
                justifyContent: 'space-between',
                height: pxToDp(90),
                marginTop: pxToDp(10)
              }}
            >
              <View>
                <Text style={styles.title}>{this.state.data.title}</Text>
                <Text style={styles.text}>{this.state.data.information}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: pxToDp(230),
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={styles.image2}
                    source={require('../../../res/8.jpg')}
                  />
                  <Text style={{ marginLeft: pxToDp(5), fontSize: pxToDp(13) }}>
                    听戏
                  </Text>
                </View>
                <Mybtn   cisabled={this.props.disabled}
                    title="收藏"
                
            onPress={this.addOrder}
                    buttonStyle={{
                      width: pxToDp(60),
                      height: pxToDp(35),
                      alignSelf: 'flex-end',
                      borderRadius: pxToDp(32),
                      marginRight: pxToDp(8),
                      
                    }}
                    titleStyle={{

                      fontSize: pxToDp(14)
                    }}
                  />

              </View>
              
            </View>
            
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
              width: '100%',
              marginTop: pxToDp(10)
            }}
          >
            <Text style={{ margin: pxToDp(8), fontSize: pxToDp(12),  color:'#33333' ,lineHeight: pxToDp(14) }}>
              {this.state.data.brief}
            </Text>
          </View>
        </View>
        {/*歌单信息 */}
        <AlwaysOpen ArrData={ArrIndex} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: pxToDp(90),
    width: pxToDp(90),
    borderRadius: pxToDp(8),
    margin: pxToDp(10)
  },
  title: {
    fontSize: pxToDp(16),
    fontWeight: 'bold'
  },
  text: {
    fontSize: pxToDp(13),
    color:'#6666'
  },
  image2: {
    height: pxToDp(40),
    width: pxToDp(40),
    borderRadius: pxToDp(40)
  },
  touch: {
    backgroundColor: '#468cd3',
    height: pxToDp(25),
    width: pxToDp(60),
    borderRadius: pxToDp(16),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Index;