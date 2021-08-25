import React, { PureComponent } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { pxToDp } from "../../../utils/styleKits";
import Top from '../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';

class Index extends PureComponent {
  constructor(props) {
    super(props);
  }
  static contextType = NavigationContext;
  state = {
    schoolstate: {
      image1:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.91ddcc.com%2F14269218655278.jpg&refer=http%3A%2F%2Fimg.91ddcc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632116733&t=31b4d68a1b30fb5d29fd63b29a81ae2f',
      image2:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20120227%2Fbki-20120227214019-2087403286.jpg&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632116759&t=3da425a1674ecf9eded828b42e5755b7',
      history1:
        '傅全香，原名孙泉香，浙江嵊县后庄村人。1933年入四季春科班学艺，工花旦，师傅为绍兴文戏男班艺人鲍金龙，同科者有青衣演员袁雪芬、老生演员钱妙花。',
      history2:
        '1940年在新戏《恒娘》中扮演恒娘而声誉鹊起。1941年与尹桂芳、竺水招搭班演出，同竺水招并立头肩旦，合演了《盘夫索夫》《白蛇传》《玉蜻蜓》等剧目。90年代初，她与昆曲演员计镇华合作，演出了反映古代女诗人李清照生平的戏曲电视剧《人比黄花瘦》，又一次获得全国电视剧"飞天奖"荣誉奖。1993年拍摄了她的艺术集锦电视片《她在丛中笑》。同年，“傅全香艺术研究会”成立。',
      school1:
        '傅派是傅全香创立的越剧旦角流派傅全香十岁时进四季春科班学艺，应工花旦，出后师承有女子越剧花衫鼻祖之称的施银花的唱腔和唱法特点，进入上海后向小白玉梅等越剧艺人学习演唱技巧，并吸收借鉴京剧大师程砚秋和评弹艺人徐云志的发声、运气、吐字等演唱特点，根据自己的条件融会贯通，运用真假声结合的方法，开拓了唱腔的声域，增强了表现力，逐渐形成独自的演唱风格。',
      development1:
        '傅派代表作有《梁山伯与祝英台》中的祝英台、《情探》中的敫桂英、《李娃传》中的李亚仙、《杜十娘》中的杜十娘、《孔雀东南飞》中的刘兰芝、《人比黄花瘦》中的李清照等。',
      development2:
        '傅派优秀传人有薛莺、胡佩娣、洪芬飞、张腊娇、何英、陈颖、颜恝、陈岚、陈飞等。',
      art: '傅派的唱腔极具特色，尤其是她的甩腔，吸收了京剧长拖腔的特点，迂回曲折，为突出总结性唱段和渲染人物情感，常用句幅扩展、节奏顿挫、调式交替等手段，形成句幅特别长，又变化多的甩腔，如《梁祝·十八相送》“就送小弟到长亭”这句甩腔，在“到长亭”三个字上都运用了加花扩展，并配合运用了两个小气口，旋律抑扬有致。《梁祝·楼台会》中，“记得草桥两结拜”这一段唱的甩腔“马家势大亲难退”“势”字以重音演唱，又运用六度下滑音的运气，唱完“大”字，戛然停顿，“亲难退”三个字上加花扩展，在“亲、难”上用两个短促的小气口，抑扬顿挫，表现了英台难以言状的悲痛和愤恨，这都是傅派典型的甩腔。',
      title: '越剧傅派集锦',
      ad: '傅派是傅全香创立的越剧花旦流派。她演唱的时候真假声结合，强调声音的位置和共鸣，中低音委婉柔美，高音区峭拔明亮，高低音衔接很自然，这样就形成傅派唱腔与众不同的特点，婉转圆润，华彩绮丽，曲调跳跃多姿，小腔丰富，演唱的时候富有激情。'
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <Top icon1="arrow-back" title="傅派" />
        <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
          {/*流派图片 */}
          <Image
            style={styles.image1}
            source={{ uri: this.state.schoolstate.image1 }}
          />
          {/*流派信息 */}
          <Text style={styles.title1}>个人经历</Text>
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.history1}
          </Text>
          <Text style={styles.text2}>
            &emsp;&emsp;{this.state.schoolstate.history2}
          </Text>
          <Text style={styles.title}>流派的创立</Text>
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.school1}
          </Text>
          <Text style={styles.title}>流派的发展</Text>
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.development1}
          </Text>
          <Text style={styles.text2}>
            &emsp;&emsp;{this.state.schoolstate.development2}
          </Text>
          <Text style={styles.title}>艺术特色</Text>
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.art}
          </Text>
          {/*流派专辑 */}
          <TouchableOpacity
            style={styles.zhuanji}
            onPress={() => this.context.navigate('Album')}
          >
            <Image
              style={styles.image3}
              source={{ uri: this.state.schoolstate.image2 }}
            />
            <View style={{ width: pxToDp(220), justifyContent: 'center' }}>
              <Text style={styles.zhuanjititle}>
                {this.state.schoolstate.title}
              </Text>
              <Text style={styles.zhuanjitext} numberOfLines={1}>
                {this.state.schoolstate.ad}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1
  },
  box: {
    paddingBottom: 0,
    flex: 1,
  },
  image1: {
    borderRadius: pxToDp(8),
    height: pxToDp(180),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16),
    marginTop:pxToDp(8)
  },
  title: {
    fontSize: pxToDp(18),
    color: '#333333',
    fontWeight: 'bold',
    marginTop: pxToDp(24),
    marginLeft: pxToDp(16)
  },
  title1: {
    fontSize: pxToDp(18),
    color: '#333333',
    fontWeight: 'bold',
    marginTop: pxToDp(24),
    marginLeft: pxToDp(16)
  },
  text1: {
    fontSize: pxToDp(16),
    color: '#333333',
    lineHeight: pxToDp(24),
    marginTop: pxToDp(16),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16)
  },
  text2: {
    fontSize: pxToDp(16),
    color: '#333333',
    lineHeight: pxToDp(24),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16)
  },
  zhuanji: {
    flexDirection: 'row',
    marginTop: pxToDp(16),
    marginRight:pxToDp(16),
    marginLeft:pxToDp(16),
    marginBottom: pxToDp(16),
    height: pxToDp(100),
    borderRadius: pxToDp(8),
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: 'black', //  阴影颜色
    shadowOffset: { width: 0, height: 0 }, // 阴影偏移
    shadowOpacity: 1, // 阴影不透明度
    shadowRadius: 10 //  圆角
  },
  image3: {
    height: pxToDp(80),
    width: pxToDp(80),
    borderRadius: pxToDp(8),
    margin: pxToDp(8)
  },
  zhuanjititle: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    color: 'black'
  },
  zhuanjitext: {
    fontSize: pxToDp(15),
    color: 'grey',
    marginTop: pxToDp(8)
  }
});
export default Index;