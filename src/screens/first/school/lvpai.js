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
        'https://img2.baidu.com/it/u=3059226094,2105980469&fm=26&fmt=auto&gp=0.jpg',
      image2:
        'https://img0.baidu.com/it/u=4183250456,3801196475&fm=26&fmt=auto&gp=0.jpg',
      history1:
        '吕瑞英，越剧吕派艺术创始人，一级演员，1933年1月19日出生于上海。1940年，入四友社（又称四季班）科班，拜男班艺人盖月棠为师，工花旦，学艺两年半。1945年抗战胜利前后回到上海，先后在小剧团唱头肩旦，后分别进入林黛音、邢竹琴领衔的剧团担任三肩旦。1950年歇夏期间，与丁赛君联袂主演《梁山伯与祝英台》而崭露头角。与丁赛君、金采风，被观众美称为东山越艺社的“三鼎甲”。',
      history2:
        '1951年6月，进入国营华东戏曲研究院越剧实验剧团（后转为上海越剧院），成为重点培养对象，开始比较系统的文化和专业知识学习，例如定期向朱传茗、张传芳、方传芸等“传字辈”昆曲老师学习身段；中文、历史、政治的高中课程；试唱、练耳、钢琴等音乐专业知识和技能，等等。1953年，参加了第一部国产彩色电影《梁山伯与祝英台》的拍摄，该片于1954年在国内外放映后，她扮演的银心，戏虽不多，却受到观众青睐，声誉鹊起。',
      school1:
        '吕瑞英戏路宽广，专长花旦，兼擅花衫、青衣，刀马旦，嗓子音域较宽，音色甜美，唱腔师承袁派，后根据自己条件和擅演剧目创新发展，自成一格，被公认为“吕派”。',
      school2:
        '吕派唱腔在继承袁派委婉典雅、细腻隽永的风格的基础上，又增加了活泼娇美、昂扬明亮的旋律色彩。吕派唱腔曲调活跃多变，擅长在中高音区运用俏丽的小腔，较多采用大幅度的音程跳动使唱腔旋律华彩，富有活力。',
      development1:
        '1963年1月22日，由上海市外事处主办，上海越剧院吕瑞英、张桂凤、陈少春等主演的《打金枝》，在友谊电影院招待尼泊尔国家副主席。周恩来总理、陈毅副总理、柯庆施市长、曹荻秋副市长陪同观剧。观后上台与演员合影。10月7日，由上海市外事处主办，上海越剧院演出的《打金枝》（吕瑞英、陈少春等主演）和《母子会》（徐玉兰、周宝奎主演），在友谊电影院招待以范文同总理率领的越南党政代表团。',
      development2:
        '2006年3月27日，中国越剧诞生100周年，一台《百年流声——纪念中国越剧诞辰100周年电视文艺晚会》上演，特别选择越剧的发源地嵊州和越剧的发祥地上海进行双向传送异地直播。吕瑞英与袁雪芬、傅全香、范瑞娟、徐玉兰、王文娟、张桂凤、周宝奎、毕春芳、张小巧、吕瑞英、金采风等悉数到场。11月5日，“我最喜欢的越剧名曲、越剧名票”评选活动揭晓，吕瑞英与吴兆芬、单仰萍等坐镇评委席。',
      art1: '在吕派唱腔的音调中常出现4音和7音两个偏音，由此又促使了唱腔中频繁的宫徵调式转换；板式运用也灵活多变，根据人物情绪变化，通过速度快慢、节奏松紧，使旋律色彩丰富，对比鲜明，富于层次，具有新鲜感。',
      art2: '在润腔方法上，常用各种装饰音和切分音型细致传达人物内心活动。如《红楼梦》中薛宝钗的“常言道主雅客来勤，谁不想高朋能盈门”两句唱，在“常”和“勤”二字用了上倚音，“雅”字的小腔中加以颤音，“能”字上用了七度下滑音，这不但使唱词的音韵四声清晰正确，而且曲调圆润而不轻飘，更真切体现了薛宝钗的性格风貌。',
      title: '越剧吕派集锦',
      ad: '吕派是吕瑞英创立的越剧旦角艺术流派。吕瑞英独具个性的艺术追求和人格魅力，赢得了众多年轻的追随者。'
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <Top icon1="arrow-back" title="吕派" />
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
    color: '#62bfad',
    fontWeight: 'bold',
    marginTop: pxToDp(24),
    marginLeft: pxToDp(16)
  },
  title1: {
    fontSize: pxToDp(18),
    color: '#62bfad',
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