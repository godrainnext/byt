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
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F8517449090%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632117511&t=328f2abfc50a3bdc70f0bf79452a0b46',
      image2:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.tianya999.com%2Fuploads%2Fallimg%2F170420%2F2295-1F420101P1.jpg&refer=http%3A%2F%2Fwww.tianya999.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632117526&t=96d0a6189eac11989fbcece70bb97afc',
      history1:
        '徐玉兰，浙江新登人，杰出的越剧表演艺术家，国家级非物质文化遗产项目“越剧”代表性传承人。其表演富有激情，善于塑造人物形象，具有俊逸潇洒、神采夺人的艺术魅力。',
      history2:
        '1933年，为方便徐玉兰学戏，由其祖母出资，她的父亲徐官生和同学陆国英组织女子戏班“东安舞台”，徐玉兰遂入科班学艺，初学花旦，后习文武老生，文戏师傅是俞传海，武戏师傅是徽班文武老生袁世昌。她的开蒙戏是越剧《梅龙镇》，在剧中扮正德皇帝。',
      history3:
        '1953年2月18日，赴旅顺、大连鞍钢等地慰问演出。4月24日，赴朝鲜前线慰问演出，演出剧目《梁祝》《西厢记》等，并参加中国人民志愿军停战谈判代表团政治部文工队，为中朝部队进行慰问演出并做“战俘”服务工作。12月，获朝鲜民主主义共和国三级国旗勋章和志愿军司令部授予的二等功。',
      school1:
        '1941年8月29日（农历七月初七），与旦角演员赵瑞花合作演出剧目《天河记》《孟丽君》，这是她首次以小生身份亮相。12月19日，在上海老闸戏院挂牌头肩小生，与施银花搭档演出传统戏《盘夫索夫》，在剧中饰演曾荣。自此以后，她正式改演小生行当。',
      school2:
        '1946年1月，在天宫剧场，与筱丹桂合演《痴儿怨女》《大劈棺》《蝴蝶梦》《元元红》等剧目。8月，在国泰大戏院主演喜剧《是我错》，在剧中扮演知错肯改的赵文骏。《是我错》的上演标志着越剧小生行当中的流派“徐派”成型。',
      development1:
        '1952年7月25日，率玉兰剧团参军，成为中央军委总政治部文工团下属越剧队。10月，参加中央文化部举办的第一届全国戏曲观摩演出大会，在越剧《西厢记》中饰张生，获演员一等奖。年末，随越剧队前往南京、上海、杭州、宁波等地为部队演出。1954年1月，玉兰剧团全体人员转业回上海，编为华东戏曲研究院越剧实验剧团二团。2月17日至3月20日，赴福建前线慰问解放军。8月1日，根据朝鲜唱剧移植改编的越剧《春香传》首演于大众剧场，在剧中塑造了忠于爱情的古代朝鲜贵族子弟李梦龙。9月25日，参加华东戏曲观摩大会，凭借《春香传》获表演一等奖。同年，当选为上海市人民代表、上海妇联执行委员。',
      development2:
        '徐玉兰演出了三百多部剧作，塑造了无数性格鲜明的人物形象，其中徐玉兰主演的《北地王》、《红楼梦》被誉为徐派小生的两大丰碑之作，至今无人逾越。越剧的小生流派之中，唯徐玉兰的声腔最为阳刚，但又不失越剧本体的隽永和优雅。徐玉兰为越剧艺术的创新和发展作出了杰出的贡献，被授予“国家非物质文化遗产项目越剧代表性传承人”和“百年越剧特殊贡献艺术家”等称号。 获中国戏剧节终身成就奖。',
      art: '徐玉兰的唱腔以高亢、激昂、豪爽、潇洒著称。她的唱腔在曲调上吸收了高亢、悲壮的绍剧曲调因素，刚强、坚定的京剧唱调因素，温厚、朴实的越剧前期男班唱调因素；在唱法上，溶化了京剧、绍剧、杭剧等与越剧风格相近的因素，突破了越剧曲调较为平稳婉约的格调，形成了音醇清深、高亢激越的刚柔兼备的特有风格。她的音域宽，音色较细，音量中等，能运用充裕、自然的气息，结实有力的吐字方法，深沉的共鸣、使字字清楚，腔腔圆润，声声有力。她运用“见字用腔”“按词设拍”的方法，加上丰富多彩的唱法技巧，使曲调与唱法、发声浑成一体。',
      title: '越剧徐派集锦',
      ad: '徐派是徐玉兰创立的越剧小生流派。唱腔的特点是高亢激昂，热情奔放，刚柔并蓄，华彩跌宕。'
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <Top icon1="arrow-back" title="徐派" />
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
