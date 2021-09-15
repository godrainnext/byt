import React, { PureComponent } from 'react';
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
        title: '北地王',
        author: '庄志',
        year: '1957年',
        int1: '魏征西将军邓艾，领军攻蜀，以奇兵偷渡阴平，降江油，攻绵竹，成都震动，后主刘禅，决意降魏。',
        int2: '其五子北地王刘谌，挡驾于御街，泣血谏奏，力阻父王降魏，刘禅不纳。',
        int3: '刘谌悲愤回宫，与妻崔氏共议殉国，崔氏先行碰死，谌乃杀其三子，然后至昭烈帝庙中，伏地哭诉，羞见祖宗基业弃于他人，全家赴难盟志，旋即自刎而死。蜀国随告灭亡。',
        text1:
          '该剧于民国三十六年(1947)秋由玉兰剧团在龙门戏院首演，初名《国破山河在》。庄志编剧，吴琛导演，丝纪扬作曲，张坚安舞美设计。徐玉兰饰北地王，许金彩饰崔氏，郑采君饰巫婆。洪深、田汉、陈白尘、蓝马、安娥等观剧座谈。演出连满五个星期。',
        text2:
          '1957年，上海越剧院二团重演，更名《北地王》。导演石景山，作曲顾振遐，舞台设计幸熙，服装设计陈利华，灯光设计吴报章、金秀谋，技导汪传钤。徐玉兰饰刘谌、王文娟饰崔氏、周宝奎饰谯周、郑忠梅饰黄皓、魏小云饰刘禅、徐慧琴饰郤正。首轮演出35场均满座，观众达53 935人。该剧“哭祖庙”一场，唱做繁重，特别是大段〔弦下调〕，运用了〔导板〕、〔快板〕、〔跺板〕等多种板式，音调高亢激越，感情悲愤壮烈，发展了〔弦下调〕的表现功能，受到周恩来总理的赞赏。“哭祖庙”是徐玉兰的代表作之一，常作为折子戏演出，并作为小生行当的教材剧目。剧中“叹月”、“杀宫”、“哭祖庙”等场的唱段，由中国唱片社灌制成唱片发行。1948年大中华唱片公司灌制了徐玉兰、许金彩演唱的《国破山河在》唱片2张。',
        text3:
          '时隔近半个世纪，由杭州越剧院创新重排、徐、王派的优秀传人郑国凤、陈晓红领衔的《北地王》于2013年3月11日在杭州红星剧院首演，并获得巨大成功。新编排的剧本中加重了刘谌与其妻崔氏的感情戏，让“杀宫”一折更加生动贴切。',
        path1:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180515%2F639996a955844c4daaf8dc7f12a7c492.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632101400&t=ef8149f3926a106587ef024446292f29',
        path2:
          'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/bba1cd11728b4710db769619c4cec3fdfd03238d.jpg'
      }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Top icon1="arrow-back" title="北地王" />
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
          <View style={styles.line}></View>
          <Text style={styles.title}>
            &emsp;&emsp;作者：{this.state.dramalist[0].author}
          </Text>
          <Text style={styles.title}>
            &emsp;&emsp;创作年代：{this.state.dramalist[0].year}
          </Text>
          <View>
            <Text style={styles.text}>剧情简介</Text>
            <View style={styles.line}></View>
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
            <View style={styles.line}></View>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].text1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].text2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].text3}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              剧本详情
            </Text>
            <View style={styles.line}></View>
            <TouchableOpacity
              style={styles.book}
              onPress={() => this.context.navigate('Screenpaly30', {
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
    alignSelf: 'center'
  },
  book: {
    height: pxToDp(100),
    borderRadius: pxToDp(8),
    marginBottom: pxToDp(50)
  },
  line: {
    alignSelf: 'center',
    height: pxToDp(5),
    width: pxToDp(100),
    backgroundColor: '#62bfad',
    marginTop: pxToDp(4)
  }
});
export default Index;