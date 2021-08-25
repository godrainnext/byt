import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
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
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190726%2F7f6237c3f2b947eeb43679c6cea5da87.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632118083&t=86c2fe10b6bbb79fd7d9f9a8d5fc4df2',
      image2:
        'https://bkimg.cdn.bcebos.com/pic/3b87e950352ac65c0c981720fbf2b21192138ac7?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_auto',
      history1:
        '戚雅仙，原名戚爱英，原籍余姚。1941年进入上海陶叶剧团科班学戏，师从陶素莲、叶琴芳，工花旦。1943年春，该科班进入上海大来剧场作为班底后，时值袁雪芬提倡“新越剧”，她们参加演出《人海飘航》《雨夜惊梦》《香妃》等剧。在《明月重圆夜》中，袁雪芬演姐姐，戚雅仙演妹妹，徐天红演父亲，三人还合灌了一张唱片。为袁雪芬配戏，使她从一般演员能逐渐胜任重要角色，在越剧观众中开始产生了影响。',
      history2:
        '1947年参加玉兰剧团，和徐玉兰合演《香笺泪》时初挑大梁，任头肩花旦。因戏路开阔，表演细腻动人而脱颖而出，成为当时旦角中的后起之秀。解放初期，拍摄了越剧彩色电影《石榴红》（1950年和徐天红合演）《卖婆记》（1949年和竺水招合演）。灌录的唱片《婚姻曲》，曾风靡一时。1950年2月组建合作越剧团。在合作剧团期间，主演过《龙凤花烛》《玉堂春》《血手印》《卓文君》《王老虎抢亲》《琵琶记》《白蛇传》《文姬归汉》及现代戏《红色医生》《祝福》等剧目。',
      school1:
        '戚雅仙15岁入陶叶剧团科班学戏，翌年即1943年随科班到袁雪芬领衔的大来剧场为班底，在为袁雪芬同台配戏时耳濡目染，学习袁雪芬的唱腔和表演，被观众称为“袁派小花旦”。',
      school2:
        '1947年参加刚成立的玉兰剧团，与徐玉兰搭档，从首演剧目《香笺泪》开始以“悲旦”著称，唱腔初步显露自己的风格；1950年组织合作越剧团，在长期艺术实践中，她根据自己的嗓音条件和擅演悲剧的特点，在继承“袁派”的基础上变化发展，不断创造，形成独特的特征音调和润腔唱法，创立了“戚派”。',
      development1:
        '旧社会受苦的妇女时常为自己的悲惨命运伤心，戚雅仙的唱腔如泣如诉，赢得了很多女性观众的同情之泪，使她在越剧观众中的影响逐渐扩大，成为当时越剧界杰出的后起之秀。解放后，党和政府对越剧事业的扶植和关怀，“百花齐放”文艺方针的指引，兄弟剧种的营养滋润，加上她本人在艺术上的勤学苦练和革新创造，使她和以她为首的合作越剧团得到迅速的成长和发展。',
      development2:
        '“四人帮”被粉碎之后，戚雅仙以满腔热情重新打开了被禁锢12年的歌喉。1979年，她和舞台老伙伴毕春芳再度携手合作，重建了静安越剧团，演出了她们的保留剧目《楼台会》《血手印》等，风采不减当年，受到上海观众的热烈欢迎。这一年，已53岁的她挑起了剧团团长的重担，正如戏剧故事里的穆桂英53岁挂帅再出征一样。',
      art1: '根据自己的嗓音条件，戚雅仙在袁派唱腔基础上不断加以发展变化，逐渐形成了韵味醇厚、缠绵委婉、朴素深沉的“戚派”唱腔。擅演善良、温柔、多情的女性。如《白蛇传》中的白娘子、《血手印》中的王千金、《玉堂春》中的苏三、《玉蜻蜓》中的志贞、《文姬归汉》中的蔡文姬等。',
      art2: '表演细腻动人，擅演善良、温柔、多情的女性。如《白蛇传》中的白娘子、《血手印》中的王千金、《玉堂春》中的苏三、《玉蜻蜓》中的志贞、《文姬归汉》中的蔡文姬等数十个动人的舞台形象，为发展和繁荣越剧艺术作出了卓越贡献。',
      title: '越剧戚派集锦',
      ad: '戚派是戚雅仙创立的越剧旦角流派。戚派唱腔善于通过特征音调的变化发展，赋予传统老戏特殊的色彩。'
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <Top icon1="arrow-back" title="戚派" />
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
