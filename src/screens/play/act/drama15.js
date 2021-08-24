import React, { PureComponent } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import Svg from 'react-native-svg-uri';
import { right } from '../../../component/common/iconSvg';
class Index extends PureComponent {
  state = {
    dramalist: {
      title: '王老虎抢亲',
      author: '《弹词》',
      year: '暂无',
      int1: '江南才子——周文宾爱慕兵部尚书之女王秀英，托人去说媒，遭王老夫人拒绝。老友祝枝山为解周文宾忧愁，让他在元宵节灯会上男扮女装来游玩、嬉戏。',
      int2: '王秀英的哥哥王天豹外号“王老虎”，平时倚仗权势，作恶多端，趁灯会之际抢劫良家妇女。把一个美丽的“女子”抢回家中，强迫当晚成亲，这个女子不答应，于是王天豹就把他送到妹妹房中去过夜，谁知这个女子竟是周文宾男扮女装而成。',
      int3: '结果，王秀英与周文宾一夜相互倾诉爱慕之情，对天盟誓，结为夫妻。王老虎一觉醒来，看到自己抢来的“新娘”成了妹妹的新郎，辛辛苦苦准备的喜宴也变成了妹妹的送亲宴，新郎变大舅，成全一对有情人。',
      text1:
        '该剧故事源于弹词《三笑》，越剧男班时期即有演出。新编本突出了王老虎因抢亲所造成的一连串被动可笑的情节，讽刺和抨击了他的丑恶行为。其中“错认”、“戏豹”、“寄闺”、“赔妹”等场，具有强烈的喜剧效果。',
      text2:
        '1958年2月1日，由合作越剧团首演于瑞金剧场。李卓云导演，毕春芳饰周文宾、戚雅仙饰王秀英、潘笑笑饰王天豹、陈金莲饰祝枝山。演出受到观众欢迎，成为剧团保留剧目。',
      text3:
        '1961年该剧被收入《中国地方戏曲集成·上海卷》。1962年由香港长城电影公司拍摄成戏曲艺术片。同年，中央新闻电影制片厂拍摄成新闻纪录片。据不完全统计，全国有30多个越剧团排演该剧，北京曲剧团曾移植演出。',
      text4: '1982年、1987年，中国唱片公司灌制了毕春芳、戚雅仙等演唱的唱片。',
      path1:
        'https://img0.baidu.com/it/u=537626629,2516311535&fm=26&fmt=auto&gp=0.jpg',
      path2:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5e301ec1g65c625235f68&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632206452&t=5240d586f2186cfac42bda11caaf838a'
    }
  };
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="王老虎抢亲" />
        <ScrollView
          style={{
            padding: pxToDp(20),
            flex: 1
          }}
        >
          <Image
            style={{
              height: pxToDp(180),
              borderRadius: pxToDp(8)
            }}
            source={{ uri: this.state.dramalist.path1 }}
          />
          <Text
            style={{
              fontSize: pxToDp(18),
              color: '#000',
              fontWeight: 'bold',
              marginTop: pxToDp(8)
            }}
          >
            {this.state.dramalist.title}
          </Text>
          <Text style={styles.title1}>
          作者：&ensp;{this.state.dramalist.author} &emsp;&emsp;创作年代:&ensp;
            {this.state.dramalist.year}
          </Text>
          <View
            style={{
              marginTop: pxToDp(4)
            }}
          >
            <Text style={styles.text}>剧情简介</Text>
            <Text style={styles.title1}>
              &emsp;&emsp;{this.state.dramalist.int1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.int2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.int3}
            </Text>
          </View>
          <View style={{ marginTop: pxToDp(4) }}>
            <Text style={styles.text2}>演出历史</Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text3}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text4}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: pxToDp(18),
                fontWeight: 'bold',
                marginBottom: pxToDp(4)
              }}
              onPress={() => this.context.navigate('ScreenPlay')}
            >
              剧本详情
            </Text>
            <TouchableOpacity
              style={styles.book}
              onPress={() => this.context.navigate('Screenpaly5')}
            >
              <Image
                style={{
                  height: pxToDp(100),
                  borderRadius: pxToDp(8)
                }}
                source={{ uri: this.state.dramalist.path2 }}
              />
              <View style={{ marginTop: pxToDp(-60), marginLeft: pxToDp(300) }}>
                <Svg width="32" height="32" svgXmlData={right} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title1: {
    fontSize: pxToDp(16),
    marginTop: pxToDp(4),
    lineHeight:pxToDp(24),
    color:'#333333',
    alignSelf:'center',
    marginTop:pxToDp(20)
    
  },
  title: {
    fontSize: pxToDp(16),
 
    lineHeight:pxToDp(24),
    color:'#333333'
  },
  text: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginBottom: pxToDp(20),
    marginTop:pxToDp(40)
  },
  text2: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginBottom: pxToDp(20),
    marginTop:pxToDp(40)
  },

  book: {
    marginTop: pxToDp(8),
    marginBottom: pxToDp(32),
    height: pxToDp(100),
    borderRadius: pxToDp(8)
  }
});
export default Index;
