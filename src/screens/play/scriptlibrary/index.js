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
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#ecf6fc', flex: 1 }}>
        <Top icon1="arrow-back" title="剧本中心" />
        <ScrollView style={{ flex: 1 }}>
          {/* 他山之石 */}
          <View>
            <Text style={styles.text1}>他山之石</Text>
            <View style={{ flex: 1 }}>
              {/* 追鱼 */}
              <TouchableOpacity
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
                    <Image
                      style={styles.image}
                      source={require('../../../res/play/1.jpg')}
                    />
                  </View>
                  <View style={{ marginLeft: pxToDp(10) }}>
                    <Text style={styles.text2}>追鱼</Text>
                    <Text style={styles.text3} numberOfLines={3}>
                      北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* 庵堂认母 */}
              <TouchableOpacity
                onPress={() => this.context.navigate('Screenpaly2')}
                style={styles.botbox}
              >
                <View
                  style={{
                    height: pxToDp(130),
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Image
                      style={styles.image}
                      source={require('../../../res/play/juben4.jpg')}
                    />
                  </View>
                  <View style={{ marginLeft: pxToDp(10) }}>
                    <Text style={styles.text2}>庵堂认母</Text>
                    <Text style={styles.text3} numberOfLines={3}>
                      尼姑王志贞和申贵升相爱，于庵堂内生下一子，因碍于佛门清规，只得遗弃路旁，为徐家拾养，取名元宰。16年后，徐已为解元，得知此情，遂往庵堂寻母。两人相遇，经暗喻试探，母已知为其亲子，却不敢认，惊恐逃入云房，在申画像前哭诉。徐追入见画像题词，对照所带血书字迹，更断定生母无疑，遂跪地哀求，志贞不顾佛门清规，抛弃佛帚，元宰宁弃荣华富贵，摘下头冠，母子终于相认。
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* 梁祝 */}
              <TouchableOpacity
                onPress={() => this.context.navigate('Screenpaly3')}
                style={styles.botbox}
              >
                <View
                  style={{
                    height: pxToDp(130),
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Image
                      style={styles.image}
                      source={require('../../../res/play/3.jpg')}
                    />
                  </View>
                  <View style={{ marginLeft: pxToDp(10) }}>
                    <Text style={styles.text2}>梁祝</Text>
                    <Text style={styles.text3} numberOfLines={3}>
                      女扮男装的祝英台出门求学。途中，遇书生梁山伯，两人意趣投合，相谈甚欢，遂在草桥上以蝶为证，义结金兰。同窗三年，兄长梁山伯对“贤弟”祝英台处处呵护有加，而祝英台则对兄长的人品、学识充满仰慕，一首“执子之手，与子偕老”更激起她对梁山伯的爱恋，然梁山伯却不知祝英台本是妙龄女子。家中来信，催祝英台速归。祝英台与梁山伯一路相送，依依惜别。分手之际，祝英台假小九妹之名为梁山伯说媒，并再三叮嘱他定要早来提亲。书院师母将祝英台所托信物转交梁山伯，梁山伯恍然大悟，兴匆匆赶往祝府求婚。但此时的祝英台早已遵从父命与马家定亲。刻骨相思的一对恋人楼台重逢，竟成永诀……
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* 永恒经典 */}
          <View>
            <Text style={styles.text1}>永恒经典</Text>
            <View style={{ flex: 1 }}>
              {/* 五女拜寿 */}
              <TouchableOpacity
                onPress={() => this.context.navigate('Screenpaly4')}
                style={styles.botbox}
              >
                <View
                  style={{
                    height: pxToDp(130),
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Image
                      style={styles.image}
                      source={require('../../../res/play/juben2.jpg')}
                    />
                  </View>
                  <View style={{ marginLeft: pxToDp(10) }}>
                    <Text style={styles.text2}>五女拜寿</Text>
                    <Text style={styles.text3} numberOfLines={3}>
                      明朝嘉靖年间，户部侍郎杨继康因不满朝内奸臣严嵩专权，借口年事已高，欲告老还乡。在他六十寿辰之际，众女儿及夫婿前来拜寿，并争相提出养老送终。三女杨三春携夫婿邹应龙前来拜寿，因礼薄遭娘家人冷遇。二姐持宠欺凌妹妹和妹夫，并唆使杨夫人将三春和应龙逐出杨府。因受族弟诛连，杨继康全家被逐出京城。二姐见家父落魄，拒绝抚养，昔日同窗摄奸臣淫威，也不敢收留杨继康夫妇，致二老和婢女翠云流落街头。绝境中，三女杨三春念人伦，将二老接回家奉养。三女婿邹应龙设计斗倒严嵩，杨家冤案昭雪......
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* 王老虎抢亲 */}
              <TouchableOpacity
                onPress={() => this.context.navigate('Screenpaly5')}
                style={styles.botbox}
              >
                <View
                  style={{
                    height: pxToDp(130),
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Image
                      style={styles.image}
                      source={require('../../../res/play/7.jpg')}
                    />
                  </View>
                  <View style={{ marginLeft: pxToDp(10) }}>
                    <Text style={styles.text2}>王老虎抢亲</Text>
                    <Text style={styles.text3} numberOfLines={3}>
                      梅龙县蛟龙为患，一民女父亲被蛟龙所害，她声言只要有人替她斩蛟龙为父报仇，便愿意委身下嫁。天生好武的保长王老虎最大的心愿就是娶妻，此次机会不仅可以为民除害，更能一了终身大事。然而老虎有勇无谋，胸无城府。城中传来皇上征婚令，老虎怕妹妹王秀英被招进宫中一去不复返，竟在匆忙中抢了前去赴考的周文宾回王府。直至拜堂一刻才发现消息误传，老虎遂将文宾赶走。文宾因此错过考期，对老虎心生怨恨。老虎为姻缘往斩蛟龙，却遇上屠龙女侠─武三娘。文宾为了向老虎报复，义助三娘斩蛟龙。
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* 柳毅传书 */}
              <TouchableOpacity
                onPress={() => this.context.navigate('Screenpaly6')}
                style={styles.botbox}
              >
                <View
                  style={{
                    height: pxToDp(130),
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Image
                      style={styles.image}
                      source={require('../../../res/play/8.jpg')}
                    />
                  </View>
                  <View style={{ marginLeft: pxToDp(10) }}>
                    <Text style={styles.text2}>柳毅传书</Text>
                    <Text style={styles.text3} numberOfLines={3}>
                      写秀才柳毅赴京应试，途经泾河畔，见一牧羊女悲啼，询知为洞庭龙女三娘，遣嫁泾河小龙，遭受虐待，乃仗义为三娘传送家书，入海会见洞庭龙王。钱塘君惊悉侄女被囚，赶奔泾河，杀死泾河小龙，救回龙女。三娘得救后，深感柳毅传书之义，请乃叔钱塘君作伐求配。柳毅为避施恩图报之嫌，拒婚而归。三娘矢志不渝，偕其父洞庭君化身为渔家父女同柳家邻里相处，与柳毅感情日笃，遂以真情相告。柳毅与她订齐眉之约，结为伉俪。
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* 猜你喜欢 */}
          <View>
            <Text style={styles.text1}>猜你喜欢</Text>
            <View style={{ flex: 1 }}>
              {/* 碧玉簪 */}
              <TouchableOpacity
                onPress={() => this.context.navigate('Screenpaly7')}
                style={styles.botbox}
              >
                <View
                  style={{
                    height: pxToDp(130),
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Image
                      style={styles.image}
                      source={require('../../../res/play/9.jpg')}
                    />
                  </View>
                  <View style={{ marginLeft: pxToDp(10) }}>
                    <Text style={styles.text2}>碧玉簪</Text>
                    <Text style={styles.text3} numberOfLines={3}>
                      吏部尚书李廷甫赏识王玉林文才出众，将爱女秀英许配给他为妻，新婚之夜，王玉林拾得情书一封，内附碧玉簪，怀疑秀英有苟且之事，愤然离开洞房，从此冷落秀英。秀英为求夫妻和睦，忍受委屈，仍然对丈夫体贴温存，关怀备至。而玉林百般凌辱，秀英因不知原委，痛楚万分。及至李廷甫赶到王家评理，查清系受人诬陷，玉林悔恨不已。王玉林赶考得中状元，请来凤冠霞帔向秀英赔礼，秀英想起前情，满腹怨情，不愿接受凤冠，并对王玉林数落责备，尽情倾诉。在王玉林诚恳认错和婆婆等劝慰下，李秀英尽释前嫌，夫妻重归于好。
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* 祥林嫂 */}
              <TouchableOpacity
                onPress={() => this.context.navigate('Screenpaly8')}
                style={styles.botbox}
              >
                <View
                  style={{
                    height: pxToDp(130),
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Image
                      style={styles.image}
                      source={require('../../../res/play/6.jpg')}
                    />
                  </View>
                  <View style={{ marginLeft: pxToDp(10) }}>
                    <Text style={styles.text2}>祥林嫂</Text>
                    <Text style={styles.text3} numberOfLines={3}>
                      祥林嫂（袁雪芬
                      饰）是一名淳朴而又本分的农夫，丈夫早亡，孤苦伶仃的她和婆婆相依为命。贪心的婆婆背着祥林嫂将她卖给了山里的贺老六做老婆，祥玲嫂得知了这一消息，选择了离家出走。在鲁镇，祥林嫂好不容易找到了一份可以维持生计的工作，却在某一天在河边淘米时被卫老二发现并且绑架，祥林嫂再度面临嫁给贺老六的命运。虽然祥林嫂是一百个不情愿，但随着时间的推移，她渐渐了解了贺老六的身世，意识到他其实是一个老实的好人，便也认了命，很快，两人就有了一个可爱的儿子。然而数年过去，贺老六旧疾复发命不久矣，他们的儿子也在山间被狼叼走了。
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* 山河恋 */}
              <TouchableOpacity
                onPress={() => this.context.navigate('Screenpaly9')}
                style={styles.botbox}
              >
                <View
                  style={{
                    height: pxToDp(130),
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Image
                      style={styles.image}
                      source={require('../../../res/play/juben3.jpg')}
                    />
                  </View>
                  <View style={{ marginLeft: pxToDp(10) }}>
                    <Text style={styles.text2}>山河恋(送信选段)</Text>
                    <Text style={styles.text3} numberOfLines={3}>
                      春秋时期，梁僖公穷兵黩武，掳曹国美女绵姜为夫人。宰相黎瑟垂涎绵姜姿色，频加挑逗，屡被斥拒，怀恨在心，遂假传书信，召自幼与绵姜相好的纪苏公子进宫私会，以图陷害。幸宫女戴赢从中帮助，方化险为夷。不料绵姜赠
                      纪苏公子凤钗一事为黎瑟侦知，乃怂恿僖公逼问绵姜，又串通纪侯宠妃宓姬潜赴曹国窃取珠凤，加害公子。危急之时，戴赢通过宓姬婢女季娣的帮助，恳托禁军百户长钟兕、申息两人，跋涉关山，历尽艰险，终于在湘灵庙手刃宓姬，解救了绵姜。
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
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
