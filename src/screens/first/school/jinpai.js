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
        'https://img1.baidu.com/it/u=961167418,3334215442&fm=26&fmt=auto&gp=0.jpg',
      image2:
        'https://bkimg.cdn.bcebos.com/pic/8644ebf81a4c510f8df72ebb6059252dd42aa564?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      history1:
        '金采风原名金翠凤，祖籍浙江省鄞县，生于上海，1946年考入雪声剧团训练班，工小生，因唱电台而露名声。后转东山越艺社改演旦角，与吕瑞英、丁赛君，被称为“东山”的三鼎甲。',
      history2:
        '1951年夏进入华东戏曲研究院越剧团，1955年随团入新建的上海越剧院。金采风以闺门旦应工，兼擅花旦。唱腔师承袁派，并根据自己嗓音条件吸收傅派等其他流派唱腔因素，融会贯通，自成一格，被公认为“金派”。熟悉越剧的人，大概都看过越剧影片《红楼梦》想必对金采风饰演的王熙凤会留下深刻的印象。',
      school1:
        '金采风不但唱做俱佳，而且戏路甚广。她擅长青衣、闺门旦一类角色，也演过像《拾玉镯》《杨八姐盗刀》等花衫、刀马旦的戏。她善于运用其特有的演唱技巧，根据不同人物的不同经历、不同特点，塑造出性格迥异、各具魅力的艺术形象。',
      school2:
        '唱腔师承袁派，并根据自己嗓音条件吸收傅派等其他流派唱腔因素，融会贯通，自成一格，被公认为金派。',
      development1:
        '1946年考入雪声剧团训练班，工小生，因唱电台而露名声。后转东山越艺社改演旦角。1948年东山越艺社在明星大戏院演出《王魁负桂英》时，傅全香突然嗓音失润，临时由她顶上，使她第一次扮演主角。',
      development2:
        '1952年演出传统老戏《桑园访妻》一折，在第一届全国戏曲观摩演出大会上，获演员三等奖。1954年主演的传统剧《盘夫索夫》，参加华东地区戏曲观摩演出大会时，获表演一等奖。之后又主演了《碧玉簪》《彩楼记》等剧目。文化大革命后，参与男女合演。在1978年拍摄的宽银幕越剧艺术影片《祥林嫂》中，扮演青年祥林嫂。在反映周恩来领导上海工人第三次武装起义的现代剧《三月春潮》中，扮演女主角玲娣。',
      art1: '金采风的唱腔婉转秀丽，刚柔相济。她的嗓音明亮，行腔自然流畅，质朴中展风采，秀婉中显棱角，柔中寓刚，端庄大方；咬字清楚，特别讲究念白的抑扬顿挫，具有音乐性。她曾演唱袁派名剧《西厢记》、《祥林嫂》，在演唱时既保持了袁派委婉流畅的特点，又发挥了自己嗓音较亮、力度较强的唱法，赋予唱腔另一种艺术特色，被音乐家称为“袁腔金唱”。由此也可以看出流派继承、衍化的轨迹。',
      art2: '金采风在继承传统的基础上，按照自己对角色的体验和理解，不断对唱腔进行新的探索和创造，尤其是对传统的[四工腔]，在音调板式、润腔处理等方面加以丰富发展，使其焕发出新的光彩。譬如《盘夫》这出戏，是越剧的骨子老戏，几乎每个越剧旦角演员都会演唱，有“女子越剧花衫鼻祖”之称的施银花在上世纪30年代便录制过唱片，非常流行。金采风的演唱，既有继承，又有创新。剧中“官人好比天上月”这段脍炙人口的唱段，原来唱腔处理比较简单朴实，金采风将原来的[四工腔·中板]发展为[四工腔·慢中板]，增加了唱腔的抒情性。唱腔主体部分八句主要吸收施银花的唱腔，但在[四工腔]唱腔中糅进了委婉的[尺调腔]润腔因素，显得更细腻优美。如果与施银花唱的这一段相比较，就会发现金采风的唱显得更细致、精美，感情色彩更浓郁。',
      art3: '金采风的唱腔结构严谨，善于用不同板式和节奏、音调润腔的处理，细致揭示人物感情深处的波澜，表演动作和唱腔音乐紧紧相扣。《碧玉簪》也是越剧骨子老戏，其中的“三盖衣”是核心唱段。这段长达70句的大型唱段，以迟缓的[尺调腔·慢板]开头，后转入速度稍快的[中板]，又加入[男调板]，中间用叠句唱法描述紧张胆怯的情绪；第三次盖衣时，人物内心冲突达到高潮，在一声凄切的哭腔后，转入对定亲回忆的叙述性[清板]；到打四更时则转入急切的[嚣板]，最后一句以传统的[清板]落调结束。整段唱由慢而快，由快转散，生动刻划了李秀英善良的性格，有较强的艺术感染力。',
      title: '越剧金派集锦',
      ad: '金派是越剧表演艺术家金采风创立的越剧旦角艺术流派。擅长青衣花衫并兼演花旦的金采风是一位风采别具的性格演员，她的唱腔继承袁雪芬流派，并吸收了施银花、范瑞娟、傅全香等各家精华，音色圆润，味浓情挚，自成一格。'
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <Top icon1="arrow-back" title="金派" />
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
          <Text style={styles.text2}>
            &emsp;&emsp;{this.state.schoolstate.school2}
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
            &emsp;&emsp;{this.state.schoolstate.art1}
          </Text>
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.art2}
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
            <View style={{ width: pxToDp(240), marginTop: pxToDp(10), marginBottom: pxToDp(10), justifyContent: 'space-between' }}>
              <Text style={styles.zhuanjititle}>
                {this.state.schoolstate.title}
              </Text>
              <Text style={styles.zhuanjitext} numberOfLines={2}>
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
    marginTop: pxToDp(8)
  },
  title: {
    fontSize: pxToDp(18),
    color: '#000000',
    fontWeight: 'bold',
    marginTop: pxToDp(24),
    marginLeft: pxToDp(16)
  },
  title1: {
    fontSize: pxToDp(18),
    color: '#000000',
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
    marginRight: pxToDp(16),
    marginLeft: pxToDp(16),
    marginBottom: pxToDp(16),
    borderRadius: pxToDp(8),
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000000', //  阴影颜色
    shadowOffset: { width: 0, height: 0 }, // 阴影偏移
    shadowOpacity: 1, // 阴影不透明度
    shadowRadius: pxToDp(8) //  圆角
  },
  image3: {
    height: pxToDp(80),
    width: pxToDp(80),
    borderRadius: pxToDp(8),
    margin: pxToDp(8)
  },
  zhuanjititle: {
    fontSize: pxToDp(16),
    fontWeight: 'bold',
    color: '#333333'
  },
  zhuanjitext: {
    fontSize: pxToDp(14),
    color: '#666666',
    marginTop: pxToDp(8)
  }
});
export default Index;