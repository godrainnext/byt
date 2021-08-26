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
        'https://img2.baidu.com/it/u=3826064286,2932547240&fm=253&fmt=auto&app=120&f=JPEG?w=580&h=456',
      image2:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblogcache1.artron.net%2Fact%2F20140610%2F823302%2Fa73d2a1d6254e36831da592a618319ed.jpg&refer=http%3A%2F%2Fblogcache1.artron.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632120004&t=d84027b0d3c64277f49f26d65fbf6c98',
      history1:
        '王文娟，浙江绍兴人，原名王彩娟。1938年，王文娟拜越剧小生竺素娥为师，正式开始舞台生涯，先习小生，后改习花旦。1939年2月8日，演出开蒙戏《投军别窑》。1942年，学艺满师，以“小竺素娥”的艺名在上海郊区小型戏班担当主演。',
      history2:
        '1996年8月，由其主演、孙道临执导的10集越剧电视连续剧《孟丽君》拍摄完成。1997年6月，参加庆祝香港回归演出；10月26日，获得美国纽约中美艺术委员会颁发的“艺术终身成就奖”、美国同庆文化艺术中心颁发的“终身杰出艺术奖”，赴美领奖并演出。2013年6月，参演上海越剧院为纪念越剧改革七十周年排演的剧目《舞台姐妹情》。8月，《王文娟越剧唱腔精选》由上海音乐出版社、上海文艺音像出版社出版。2014年7月18日，其担任艺术指导、由福建芳华越剧团排演的越剧《女驸马》首演。',
      school1:
        '王文娟13岁到上海从竺素娥学艺，初学小生，两年后改旦角，1948年入玉兰剧团与徐玉兰搭档，从此二人开始了长达半个世纪的合作。',
      school2:
        '1955年随团入上海越剧院。王文娟的唱腔，早年曾受支兰芳、小白玉梅、王杏花的影响，后在长期艺术实践中，博采众长，融会贯通，形成自己的唱腔风格，被公认为王派。',
      development1:
        '1950年8月，参加第二届戏曲研究班。从这一年9月开始，随玉兰剧团在卡尔登剧场演出，与徐玉兰等人合作排演了一系列新编越剧，在反映太平天国斗争的历史剧《东王杨秀清》中饰演洪宣娇；在根据郭沫若的剧本《虎符》改编的越剧《信陵公子》中扮演如姬，该剧连演138天、256场，均是满座；在剧目《巾帼英雄》中饰击鼓战金山的女英雄梁红玉；在根据同名歌剧改编的现代剧《白毛女》中扮演喜儿。',
      development2:
        '1959年2月17日至4月3日，随中国越剧团赴越南民主共和国访问演出。6月，与郑忠梅共同主演新编历史剧《则天皇帝》，在剧中扮演女皇武则天，同时她也参与了剧本的编写工作。7月16日，其主演的彩色越剧艺术影片《追鱼》开拍，在片中她分饰鲤鱼精和金牡丹两角。9月23日，赴北京参加国庆10周年演出。',
      art1: '王文娟的唱腔平易朴实，自然流畅，韵味浓郁。在表演上，王文娟素有“性格演员”之称，其唱腔也情真意切，运腔平缓委婉而且深藏着一种内在的力量。王文娟的中低音区音色浑厚柔美，在唱段的重点唱句中，则运用高音以突出唱段的高潮，从而形成强烈的色彩对比。',
      art2: '演唱时她以真声为主，吐字雅中显浓艳。她善清晰，不追求花哨，在朴实中见华彩，于淡中把不同曲调、多种板式组织为成套唱腔，细致而有层次地揭示人物内在感情的细微变化。《红楼梦·焚稿》中的“一弯冷月照诗魂”也是集中体现王派特色的典型唱段。这段“弦下腔”随着人物感情的变化转折，运用旋律高低起伏、节奏顿挫，赋予人物鲜明的音乐形象。至“如今是知音已绝”的“绝”字，音调嘎然刹住，人物情绪猛然转折，从接着的“诗稿怎存”转入“正调流水”，由于吸收了绍剧高亢奔放的音调轮廓，鲜明的节奏，唱腔显得悲怆、激愤。',
      title: '越剧王派集锦',
      ad: '王派是越剧表演艺术家王文娟创立的越剧旦角艺术流派。王文娟博采众长，追求创新，逐步形成了自然流畅、平易质朴、情意真切的风格。王派艺术以善于表演人物神态、传达内心感情著称。'
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <Top icon1="arrow-back" title="王派" />
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
            &emsp;&emsp;{this.state.schoolstate.art1}
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
