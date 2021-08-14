import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import { FAB } from 'react-native-elements';
import Top from '../../../component/common/top';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data1: [
        {
          id: 1,
          img: require('../../../res/play/1.jpg'),
          name: '追鱼',
          Details:
            '北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。'
        },
        {
          id: 2,
          img: require('../../../res/play/2.jpg'),
          name: '周仁哭坟',
          Details:
            '明代嘉靖年间，严嵩当权，朝臣杜宪被害身死。其子杜文学，结交友人凤承东，见杜家势败，落井下石以求邀功，向严嵩进谗，谓杜文学会对严嵩不利，严派人往杜家搜捕文学，杜文学仓卒之间将其妻托付予义弟周仁，请求照顾其妻，而杜文学在审讯之后，被发配充至云南。严府总管严年垂涎杜妻美貌，胁迫周仁献出杜妻，威迫利诱，既许以富贵，又以杜文学性命以为要挟。周仁夫妇迫于无奈，为免杜文学被害、又不忍献出杜妻，遂由周妻代嫁，洞房之时，周妻谋刺严年失手，自剔而死。'
        },
        {
          id: 3,
          img: require('../../../res/play/3.jpg'),
          name: '梁祝',
          Details:
            '女扮男装的祝英台出门求学。途中，遇书生梁山伯，两人意趣投合，相谈甚欢，遂在草桥上以蝶为证，义结金兰。同窗三年，兄长梁山伯对“贤弟”祝英台处处呵护有加，而祝英台则对兄长的人品、学识充满仰慕，一首“执子之手，与子偕老”更激起她对梁山伯的爱恋，然梁山伯却不知祝英台本是妙龄女子。家中来信，催祝英台速归。祝英台与梁山伯一路相送，依依惜别。分手之际，祝英台假小九妹之名为梁山伯说媒，并再三叮嘱他定要早来提亲。书院师母将祝英台所托信物转交梁山伯，梁山伯恍然大悟，兴匆匆赶往祝府求婚。但此时的祝英台早已遵从父命与马家定亲。刻骨相思的一对恋人楼台重逢，竟成永诀……'
        }
      ],
      data2: [
        {
          id: 1,
          img: require('../../../res/play/6.jpg'),
          name: '五女拜寿',
          Details:
            '明朝嘉靖年间，户部侍郎杨继康因不满朝内奸臣严嵩专权，借口年事已高，欲告老还乡。在他六十寿辰之际，众女儿及夫婿前来拜寿，并争相提出养老送终。三女杨三春携夫婿邹应龙前来拜寿，因礼薄遭娘家人冷遇。二姐持宠欺凌妹妹和妹夫，并唆使杨夫人将三春和应龙逐出杨府。因受族弟诛连，杨继康全家被逐出京城。二姐见家父落魄，拒绝抚养，昔日同窗摄奸臣淫威，也不敢收留杨继康夫妇，致二老和婢女翠云流落街头。绝境中，三女杨三春念人伦，将二老接回家奉养。三女婿邹应龙设计斗倒严嵩，杨家冤案昭雪......'
        },
        {
          id: 2,
          img: require('../../../res/play/7.jpg'),
          name: '王老虎抢亲',
          Details:
            '梅龙县蛟龙为患，一民女父亲被蛟龙所害，她声言只要有人替她斩蛟龙为父报仇，便愿意委身下嫁。天生好武的保长王老虎最大的心愿就是娶妻，此次机会不仅可以为民除害，更能一了终身大事。然而老虎有勇无谋，胸无城府。城中传来皇上征婚令，老虎怕妹妹王秀英被招进宫中一去不复返，竟在匆忙中抢了前去赴考的周文宾回王府。直至拜堂一刻才发现消息误传，老虎遂将文宾赶走。文宾因此错过考期，对老虎心生怨恨。老虎为姻缘往斩蛟龙，却遇上屠龙女侠─武三娘。文宾为了向老虎报复，义助三娘斩蛟龙。'
        },
        {
          id: 3,
          img: require('../../../res/play/8.jpg'),
          name: '柳毅传书',
          Details:
            '写秀才柳毅赴京应试，途经泾河畔，见一牧羊女悲啼，询知为洞庭龙女三娘，遣嫁泾河小龙，遭受虐待，乃仗义为三娘传送家书，入海会见洞庭龙王。钱塘君惊悉侄女被囚，赶奔泾河，杀死泾河小龙，救回龙女。三娘得救后，深感柳毅传书之义，请乃叔钱塘君作伐求配。柳毅为避施恩图报之嫌，拒婚而归。三娘矢志不渝，偕其父洞庭君化身为渔家父女同柳家邻里相处，与柳毅感情日笃，遂以真情相告。柳毅与她订齐眉之约，结为伉俪。'
        }
      ],
      data3: [
        {
          id: 1,
          img: require('../../../res/play/9.jpg'),
          name: '碧玉簪',
          Details:
            '吏部尚书李廷甫赏识王玉林文才出众，将爱女秀英许配给他为妻，新婚之夜，王玉林拾得情书一封，内附碧玉簪，怀疑秀英有苟且之事，愤然离开洞房，从此冷落秀英。秀英为求夫妻和睦，忍受委屈，仍然对丈夫体贴温存，关怀备至。而玉林百般凌辱，秀英因不知原委，痛楚万分。及至李廷甫赶到王家评理，查清系受人诬陷，玉林悔恨不已。王玉林赶考得中状元，请来凤冠霞帔向秀英赔礼，秀英想起前情，满腹怨情，不愿接受凤冠，并对王玉林数落责备，尽情倾诉。在王玉林诚恳认错和婆婆等劝慰下，李秀英尽释前嫌，夫妻重归于好。'
        },
        {
          id: 2,
          img: require('../../../res/play/10.jpg'),
          name: '云中落绣鞋',
          Details:
            '宋熙宁年间，勇平王高斌之女高蔼霞为黑妖蟒摄去。猎人石义见义勇为，冒死入黑洞灭妖，救出高蔼霞。石义义兄王恩得知王府寻找郡主，也假意赶去灭妖。俟高蔼霞出洞后，即将洞口堵死，再去冒功骗赏。石义在洞中被白兔仙子所救，但在回家途中，又被王恩骗去蔼霞所赠珠宝后推下山崖。石义又为白兔仙子救治。王恩被招为郡马。正当王府为蔼霞完婚时，石义赶到。经蔼霞亲自盘问，认出石义乃救命恩人，结为百年之好。王恩被送官究办。 '
        },
        {
          id: 3,
          img: require('../../../res/play/11.jpg'),
          name: '毛子佩闯宫',
          Details:
            '明朝正德年问。御史毛龙之子毛子佩，自幼与老师之女薛梅同窗读书，青梅竹马，相互钟情。有一年清明佳节，薛梅随父回乡扫墓，不料去后杳无音讯，子佩终日思念。第二年，子佩奉父命进京攻读。上元之夜，独自出游，不期误入皇帝离宫别院——“留春院”。他在梅林下，踏月徘徊，触景伤情，脑海中顿然浮起薛梅的面貌。正沉浸在思念中，子佩忽然听见琴声，细辨琴曲系为薛梅所谱，甚感诧异；他拿出洞箫相和，这箫声直传到在“引凤楼”抚琴的薛梅与张书昭耳中。原来薛梅返乡后，即被强选人宫。她 在宫中矢志不渝，终日怀念子佩。'
        }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" title="剧本中心" />
        <ScrollView style={{ flex: 1 }}>
          {/* 他山之石 */}
          <View>
            <Text style={styles.text1}>他山之石</Text>
            <View style={{ flex: 1 }}>
              {this.state.data1.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.context.navigate('Screenpaly')}
                  style={styles.botbox}
                >
                  <View
                    style={{
                      height: pxToDp(130),
                      flexDirection: 'row'
                    }}
                  >
                    <View>
                      <Image style={styles.image} source={item.img} />
                    </View>
                    <View style={{ marginLeft: pxToDp(10) }}>
                      <Text style={styles.text2}>{item.name}</Text>
                      <Text style={styles.text3} numberOfLines={3}>
                        {item.Details}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {/* 永恒经典 */}
          <View>
            <Text style={styles.text1}>永恒经典</Text>
            <View style={{ flex: 1 }}>
              {this.state.data2.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.context.navigate('Screenpaly')}
                  style={styles.botbox}
                >
                  <View
                    style={{
                      height: pxToDp(130),
                      flexDirection: 'row'
                    }}
                  >
                    <View>
                      <Image style={styles.image} source={item.img} />
                    </View>
                    <View style={{ marginLeft: pxToDp(10) }}>
                      <Text style={styles.text2}>{item.name}</Text>
                      <Text style={styles.text3} numberOfLines={3}>
                        {item.Details}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {/* 猜你喜欢 */}
          <View>
            <Text style={styles.text1}>猜你喜欢</Text>
            <View style={{ flex: 1 }}>
              {this.state.data3.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.context.navigate('Screenpaly')}
                  style={styles.botbox}
                >
                  <View
                    style={{
                      height: pxToDp(130),
                      flexDirection: 'row'
                    }}
                  >
                    <View>
                      <Image style={styles.image} source={item.img} />
                    </View>
                    <View style={{ marginLeft: pxToDp(10) }}>
                      <Text style={styles.text2}>{item.name}</Text>
                      <Text style={styles.text3} numberOfLines={3}>
                        {item.Details}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    fontSize: pxToDp(20),
    fontWeight: 'bold',
    marginTop: pxToDp(4),
    marginLeft: pxToDp(10)
  },
  botbox: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: pxToDp(0.5),
    margin: pxToDp(10),
    height: pxToDp(140)
  },
  text2: {
    marginTop: pxToDp(10),
    fontSize: pxToDp(18),
    fontWeight: 'bold'
  },
  image: {
    height: pxToDp(120),
    width: pxToDp(120),
    borderRadius: pxToDp(10)
  },
  text3: {
    fontSize: pxToDp(14),
    marginTop: pxToDp(5),
    width: pxToDp(220)
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
});
export default Index;
