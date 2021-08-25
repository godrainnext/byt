import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Top from '../../../../component/common/top';
import { pxToDp } from '../../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '1',
          posters: require('../../../../res/ticket1.jpg'),
          name: '【杭州】【鼓楼剧场】钱塘戏社越剧专场-周日',
          date: '2021.08.15-10.01',
          place: '杭州 鼓楼剧场',
          detail: '中山南路501号鼓楼城墙二楼',
          choose: '可选座',
          price: '30.00',
          time: '约120分（以现场为准）'
        },
        {
          id: '2',
          posters: require('../../../../res/ticket2.jpg'),
          name: '【杭州】越剧六代同台《梁山伯与祝英台》',
          date: '2021.10.08周五 19:30',
          place: '杭州 杭州剧院',
          detail: '武林广场29号',
          choose: '可选座',
          price: '100.00',
          time: '约150分（以现场为准）'
        },
        {
          id: '3',
          posters: require('../../../../res/ticket3.jpg'),
          name: '【杭州】此情关风月 拾光谱新篇 ——杭州越剧院建院65周年“四季有越”2021年度巡演·杭州站',
          date: '2021.10.04-10.05',
          place: '杭州 杭州剧院',
          detail: '武林广场29号',
          choose: '可选座',
          price: '80.00',
          time: '以现场为准'
        },
        {
          id: '4',
          posters: require('../../../../res/ticket4.jpg'),
          name: '【杭州】浙江小百花越剧院（浙江小百花越剧团）·越剧新版《梁祝》',
          date: '2021.10.16周六19:00',
          place: '杭州 杭州临平大剧院',
          detail: '望梅路与汀兰街交叉口南100米',
          choose: '',
          price: '180.00',
          time: '约140分钟，仅供参考，最终以现场实际时长为准'
        },
        {
          id: '5',
          posters: require('../../../../res/ticket5.jpg'),
          name: '【杭州】浙江小百花越剧院（浙江小百花越剧团）·经典越剧《五女拜寿》',
          date: '2021.10.17周日19::00',
          place: '杭州 杭州临平大剧院',
          detail: '望梅路与汀兰街交叉口南100米',
          choose: '',
          price: '180.00',
          time: '约135分钟，仅供参考，最终以现场实际时长为准'
        },
        {
          id: '6',
          posters: require('../../../../res/ticket6.jpg'),
          name: '【嘉兴】越剧《双轿接亲》',
          date: '2021.10.10周日13:00',
          place: '嘉兴 海盐县大剧院',
          detail: '新桥北路170号',
          choose: '可选座',
          price: '50.00',
          time: '约150分（以现场为准）'
        }
      ],
      activeTab: 1
    };
  }
  changeTab = (index) => {
    this.setState({ activeTab: index });
  };
  static contextType = NavigationContext;
  render() {
    const { activeTab } = this.state;
    return (
      <View style={{ backgroundColor: '#ecf6fc', flex: 1 }}>
        <Top title="票务系统" icon1="arrow-back" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          {/* 演出盒子 */}
          <View style={styles.message}>
            <Text style={styles.boxtext1}>小百花越剧场大剧场</Text>
            <Text style={styles.boxtext2}>415粉丝&ensp;|&ensp;0场在售演出</Text>
            <View
              style={{
                flexDirection: 'row',
                height: pxToDp(35)
              }}
            >
              <Text style={styles.boxtext2}>去主页</Text>
              <LottieView
                style={{
                  width: pxToDp(40),
                  marginTop: pxToDp(4.5),
                  marginLeft: pxToDp(3.5)
                }}
                source={require('../../../../../lottie/fast1.json')}
                autoPlay
                loop
              />
            </View>
          </View>
          {/* 票务选择 */}
          {this.state.data.map((item, index) => (
            <TouchableOpacity
              activeOpacity={1}
              key={item.id}
              onPress={() =>
                this.context.navigate('ticketdetail', {
                  ...this.state.data[index]
                })
              }
            >
              <View>
                <View
                  style={{
                    height: pxToDp(140),
                    marginRight:pxToDp(16),
                    marginLeft:pxToDp(16),
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    marginTop: pxToDp(8),
                    borderRadius: pxToDp(8),
                    elevation: 8,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
                    shadowColor: 'black',  //  阴影颜色
                    shadowRadius: pxToDp(8),  //  圆角,
                    marginBottom: pxToDp(8)
                  }}
                >
                  <ImageBackground
                    style={styles.img}
                    imageStyle={{
                      borderRadius: pxToDp(8)
                    }}
                    source={item.posters}
                  >
                  </ImageBackground>
                  <View
                    style={{
                      margin: pxToDp(8),
                      width: pxToDp(220),
                      justifyContent: 'space-between'
                    }}
                  >
                    <View>
                      <Text
                        style={{ fontSize: pxToDp(16), fontWeight: 'bold', color: '#000000' }}
                        numberOfLines={2}
                      >
                        {item.name}
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>{item.date}</Text>
                      <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>{item.place}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <View
                        style={{
                          width: pxToDp(40),
                          height: pxToDp(20),
                          borderRadius: pxToDp(16),
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>
                          {item.choose}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#f0bb51', fontSize: pxToDp(14) }}>￥{item.price}</Text>
                        <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>起</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topbox: {
    height: pxToDp(30),
    marginLeft: pxToDp(12),
    marginTop: pxToDp(12),
    width: pxToDp(90),
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  boxtext1: {
    fontSize: pxToDp(18),
    marginLeft: pxToDp(10),
    marginTop: pxToDp(6),
    fontWeight: 'bold',
    color: '#fff'
  },
  boxtext2: {
    fontSize: pxToDp(14),
    marginLeft: pxToDp(10),
    color: '#fff',
    marginTop: pxToDp(6)
  },
  img: {
    width: pxToDp(90),
    height: pxToDp(120),
    marginLeft: pxToDp(10),
    color:'#333333',
    marginTop: pxToDp(10),
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  message: {
    height: pxToDp(100),
    marginTop: pxToDp(8),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16),
    backgroundColor: '#995fbd',
    borderRadius: pxToDp(8),
    justifyContent: 'space-around',
    overflow:'hidden',
    elevation: 3, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）

  }
});
