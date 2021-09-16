import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import Top from '../../../../component/common/myTop1';
import { pxToDp } from '../../../../utils/styleKits';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: '越彩江南晴雨伞'
        },
        {
          id: 2,
          name: '越剧人物圆形鼠标垫'
        },
        {
          id: 3,
          name: '越彩江南马克杯'
        },
        {
          id: 4,
          name: '上越国风文创·春夏款发布'
        },
        {
          id: 5,
          name: '王星记·上越联名四季手绘折扇'
        }
      ],
      data2: [
        {
          id: 1,
          name: '红楼梦·主题文化衫'
        },
        {
          id: 2,
          name: '越彩江南晴雨伞'
        },
        {
          id: 3,
          name: '上越国风文创·春夏款发布'
        },
        {
          id: 4,
          name: '越彩江南马克杯'
        },
        {
          id: 5,
          name: '越韵四季帆布包'
        },
        {
          id: 6,
          name: '越剧人物方形鼠标垫'
        }
      ],
      data3: [
        {
          id: 1,
          img: 'http://120.79.86.32:3000/shop/shopBanner/d1b1bb7025063dfdd9cd851389456b50',
          name: '越剧人物方形鼠标垫',
          renqi: '1921312'
        },
        {
          id: 2,
          img: 'http://120.79.86.32:3000/shop/shopBanner/10f7b1639c665cdf8ae136f0093b458d',
          name: '上越国风文创·春夏款发布',
          renqi: '785534'
        },
        {
          id: 3,
          img: 'http://120.79.86.32:3000/shop/shopBanner/f08f9fe6dd424d09d8af360d92f8319d',
          name: '越彩江南晴雨伞',
          renqi: '721344'
        },
        {
          id: 4,
          img: 'http://120.79.86.32:3000/shop/shopBanner/9ec84fc65a454d009b7031f6e1439beb',
          name: '红楼梦·主题文化衫',
          renqi: '514121'
        }
      ]
    };
  }
  render() {
    return (
      <View>
        <Top />
        <ScrollView
          style={{ padding: pxToDp(16), marginBottom: pxToDp(80) }}
          showsVerticalScrollIndicator={false}
        >
          {/* 历史搜索 */}
          <Text style={{ fontSize: pxToDp(18) }}>历史搜索</Text>
          <View
            style={{
              width: pxToDp(340),
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start'
            }}
          >
            {this.state.data.map((item) => (
              <TouchableOpacity style={styles.box1}>
                <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* 搜索发现 */}
          <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(16) }}>
            搜索发现
          </Text>
          <View
            style={{
              width: pxToDp(340),
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start'
            }}
          >
            {this.state.data2.map((item) => (
          
                 
                 <TouchableOpacity style={styles.box1}>
              
                <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
        
            ))}
           </View>
          {/* 热搜榜 */}
          <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(16) }}>
            热搜榜
          </Text>
          <View
            style={{
              width: pxToDp(340)
            }}
          >
            {this.state.data3.map((item) => (
              <TouchableOpacity
                style={{
                  height: pxToDp(90),
                  alignItems: 'center',
                  flexDirection: 'row',
                  padding: pxToDp(8)
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    width: pxToDp(80),
                    height: pxToDp(80),
                    borderRadius: pxToDp(8)
                  }}
                />
                <View style={{ marginLeft: pxToDp(8) }}>
                  <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>
                    人气值 {item.renqi}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box1: {
    marginTop: pxToDp(8),
    padding: pxToDp(8),
    height: pxToDp(40),
    borderRadius: pxToDp(20),
    backgroundColor: '#D5E8E6',
    alignItems: 'center',
    marginLeft: pxToDp(16),
    justifyContent: 'center'
  }
});
