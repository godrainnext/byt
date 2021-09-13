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
  constructor(props) {
    super(props);
    this.state = {
      dramalist: [{
        title: '甄嬛',
        author: '李莉',
        year: '2012年',
        int1: '越剧擅演才子佳人，浪漫唯美，因而《甄嬛》没有延续电视剧版的“清宫戏”，而是将戏定位在“大古代”。而在角色定位、情节铺排等方面，都有不同于电视剧的改编。越剧将皇后和华妃两个角色合二为一，抓住了皇后与华妃“想方设法不让其他嫔妃生子”这一主线，使集皇后与华妃于一身的华贵妃，人物性格更为鲜明、更加突出。',
        int2: '而温实初与沈眉庄也在此剧中有一场荡气回肠、情浓意浓的爱情戏。上本选择了“入宫册封”、“失子出宫”、“清河王雪地护甄嬛”、“眉庄与温实初定情”、“重逢回宫”、“滴血验亲”等几个精华章节，着墨于美好的爱情和友情。',
        int3: '下本主要人物只有甄嬛、皇帝（玄凌）、清河王（玄清）与华贵妃四人。剧情围绕甄嬛与清河王的私情泄露、甄嬛与皇帝的爱恨纠葛、甄嬛与华贵妃恩怨了结等展开，尤其是皇帝的部分着墨更多，这就使得全剧蕴含了反封建皇权的立题立意，使得全剧除了儿女情长、诗情画意外，更增添了几分悲剧的力量。',
        text1:
          '2012年播出的电视剧《甄嬛传》堪称“现象级”，上海越剧院的章瑞虹、王志萍等著名演员也是该剧的粉丝，她们向时任上海越剧院院长的李莉建议改编成越剧。为了改编这部戏，李莉花了三天三夜补看电视剧，思考如何把150万字的小说和76小时的电视剧搬上越剧舞台上。',
        text2:
          '在2013年和2014年，越剧《甄嬛》分为上下两本推出，由于作品本身的知名度，整个创排过程也受到戏迷关注。相较于话剧里四个甄嬛的穿越和分裂，越剧《甄嬛》分上下两本，5个小时的演出保留了原著中最精华的人物和情节，但不重“宫斗”，而着力刻画剧中人的情感经历，发挥舞台剧尤其是越剧擅长抒情的特点，表现生死不渝的爱情和不离不弃的姐妹情，既忠实于原著，又具有鲜明的剧种特色。',
        text3:
          '《甄嬛》虽然剧情不同以往的才子佳人戏，但在舞台表现手法基本是遵循上越一贯的越剧风格的，因此老少通吃，喜闻乐见。温太医见到初恋情人眉庄，紧张到老是擦汗，就引发现场一片笑声。业内人士则认为，越剧的新剧目本身就不多，而传统剧目难免会让人审美疲劳。向热门影视剧借力无疑是让新剧目打开市场最快捷的方法。',
        text4:
          '上下本《甄嬛》2014年获得了第三届中国越剧艺术节“优秀剧目奖”。2015年驻场天蟾逸夫舞台，连演20场，引起了市场轰动。据统计，首演至今，《甄嬛》演出场次多达70余场，为原创戏曲剧目所少有。首都的越迷们，正拭目以待。',
        path1:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2FB%2FBE%2FBEAF9013BDDEECB7D60E709FD8B0F393.jpg&refer=http%3A%2F%2Fimg1.cache.netease.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632101473&t=707d9385711061e4a4df8c8a970fb41c',
        path2:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.itc.cn%2Fq_70%2Fimages03%2F20201124%2Fe9ede02bd37e40bc926a9f4fbe285420.png&refer=http%3A%2F%2Fp5.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632111572&t=44c47d220cdf7255c4cccd7cf24315de'
      }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Top icon1="arrow-back" title="甄嬛" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1
          }}
          showsVerticalScrollIndicator={false}
        >
          <Image
            style={{
              height: pxToDp(180),
              borderRadius: pxToDp(8),
              marginLeft: pxToDp(16),
              marginRight: pxToDp(16),
              marginTop: pxToDp(8)
            }}
            source={{ uri: this.state.dramalist[0].path1 }}
          />
        <Text style={styles.text}>
            {this.state.dramalist[0].title}
          </Text>
          <Text style={styles.title}>
            &emsp;&emsp;作者：{this.state.dramalist[0].author}
          </Text>
          <Text style={styles.title}>
            &emsp;&emsp;创作年代：{this.state.dramalist[0].year}
          </Text>
          <View>
            <Text style={styles.text}>剧情简介</Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].int1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].int2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].int3}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>演出历史</Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].text1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].text2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].text3}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].text4}
            </Text>
          </View>
          <View>
          <Text style={styles.text}>
              剧本详情
            </Text>
            <TouchableOpacity
              style={styles.book}
              onPress={() => this.context.navigate('Screenpaly29', {
                ...this.state.dramalist,
                title: this.state.dramalist[0].title
              }
              )}
            >
              <Image
                style={{
                  height: pxToDp(100),
                  borderRadius: pxToDp(8),
                  marginLeft: pxToDp(16),
                  marginRight: pxToDp(16),
                  marginTop: pxToDp(24)
                }}
                source={{ uri: this.state.dramalist[0].path2 }}
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
  title: {
    fontSize: pxToDp(16),
    lineHeight: pxToDp(30),
    color: '#333333',
    marginTop: pxToDp(16),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16)
  },
  text: {
    fontSize: pxToDp(18),
    color: '#000000',
    fontWeight: 'bold',
    marginTop: pxToDp(24),
    marginLeft: pxToDp(16)
  },
  book: {
    height: pxToDp(100),
    borderRadius: pxToDp(8),
    marginBottom: pxToDp(50)
  }
});
export default Index;
