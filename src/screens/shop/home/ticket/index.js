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
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '1',
          posters: require('../../../../res/ticket1.jpg'),
          name: '【杭州】【鼓楼剧场】钱塘戏社越剧专场-周日',
          type: '曲苑杂坛',
          date: '2021.08.15-10.01',
          place: '杭州|鼓楼剧场',
          detail: '中山南路501号鼓楼城墙二楼',
          choose: '可选座',
          price: '30.00',
          time: '约120分（以现场为准）'
        },
        {
          id: '2',
          posters: require('../../../../res/ticket2.jpg'),
          name: '【杭州】越剧六代同台《梁山伯与祝英台》',
          type: '曲苑杂坛',
          date: '2021.10.08周五 19:30',
          place: '杭州|杭州剧院',
          detail: '武林广场29号',
          choose: '可选座',
          price: '100.00',
          time: '约150分（以现场为准）'
        },
        {
          id: '3',
          posters: require('../../../../res/ticket3.jpg'),
          name: '【杭州】此情关分月 拾光谱新篇 ——杭州越剧院建院65周年“四季有越”2021年度巡演·杭州站',
          type: '曲苑杂坛',
          date: '2021.10.04-10.05',
          place: '杭州|杭州剧院',
          detail: '武林广场29号',
          choose: '可选座',
          price: '80.00',
          time: '以现场为准'
        },
        {
          id: '4',
          posters: require('../../../../res/ticket4.jpg'),
          name: '【杭州】浙江小百花越剧院（浙江小百花越剧团）·越剧新版《梁祝》',
          type: '曲苑杂坛',
          date: '2021.10.16周六19:00',
          place: '杭州|杭州临平大剧院',
          detail: '望梅路与汀兰街交叉口南100米',
          choose: '',
          price: '180.00',
          time: '约140分钟，仅供参考，最终以现场实际时长为准'
        },
        {
          id: '5',
          posters: require('../../../../res/ticket5.jpg'),
          name: '【杭州】浙江小百花越剧院（浙江小百花越剧团）·经典越剧《五女拜寿》',
          type: '曲苑杂坛',
          date: '2021.10.17周日19::00',
          place: '杭州|杭州临平大剧院',
          detail: '望梅路与汀兰街交叉口南100米',
          choose: '',
          price: '180.00',
          time: '约135分钟，仅供参考，最终以现场实际时长为准'
        },
        {
          id: '6',
          posters: require('../../../../res/ticket6.jpg'),
          type: '曲苑杂坛',
          name: '【嘉兴】越剧《双轿接亲》',
          date: '2021.10.10周日13:00',
          place: '嘉兴|海盐县大剧院',
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
      <View style={{ flex: 1 }}>
        <Top title="票务系统" icon1="arrow-back" />
        <View style={styles.topbox}>
          <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>演出</Text>
        </View>
        <ScrollView
          style={{ flex: 1, margin: pxToDp(20), marginTop: pxToDp(10) }}
        >
          {/* 演出盒子 */}
          <View style={styles.message}>
            <Text style={styles.boxtext1}>小百花越剧场大剧场</Text>
            <Text style={styles.boxtext2}>415粉丝|0场在售演出</Text>
            <Text style={styles.boxtext2}>去主页</Text>
          </View>
          {/* 票务选择 */}
          {this.state.data.map((item, index) => (
            <TouchableOpacity
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
                    flexDirection: 'row'
                  }}
                >
                  <ImageBackground
                    style={styles.img}
                    imageStyle={{
                      borderRadius: pxToDp(8)
                    }}
                    source={item.posters}
                  >
                    <View
                      style={{
                        width: pxToDp(45),
                        height: pxToDp(12),
                        backgroundColor: '#000',
                        margin: pxToDp(2),
                        borderRadius: pxToDp(3),
                        opacity: 0.6
                      }}
                    >
                      <Text style={{ fontSize: pxToDp(11), color: '#fff' }}>
                        {item.type}
                      </Text>
                    </View>
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
                        style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}
                        numberOfLines={2}
                      >
                        {item.name}
                      </Text>
                    </View>
                    <View>
                      <Text>{item.date}</Text>
                      <Text>{item.place}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <View
                        style={{
                          width: pxToDp(30),
                          height: pxToDp(15),
                          borderRadius: pxToDp(15),
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Text style={{ fontSize: pxToDp(8) }}>
                          {item.choose}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'red' }}>￥{item.price}</Text>
                        <Text>起</Text>
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
    marginLeft: pxToDp(30),
    marginTop: pxToDp(12),
    width: pxToDp(90),
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  boxtext1: {
    fontSize: pxToDp(20),
    marginLeft: pxToDp(10),
    fontWeight: 'bold',
    color: '#fff'
  },
  boxtext2: {
    fontSize: pxToDp(14),
    marginLeft: pxToDp(10),
    color: '#fff'
  },
  img: {
    width: pxToDp(90),
    height: pxToDp(120),
    marginLeft: pxToDp(10),
    marginTop: pxToDp(10),
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  message: {
    height: pxToDp(100),
    backgroundColor: '#62649f',
    borderRadius: pxToDp(16),
    justifyContent: 'space-around',
    elevation: 10, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowOffset: { width: 0, height: 0 }, // 阴影偏移
    shadowOpacity: 0.6, // 阴影不透明度
    shadowRadius: 18 //  圆角
  }
});
