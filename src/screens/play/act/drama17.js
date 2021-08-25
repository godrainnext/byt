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
        title: '山河恋',
        author:
          '南薇、韩义、成容据法国大仲马的小说《侠隐记》（现译《三个火枪手》）和我国小说《东周列国志》的部分情节改编',
        year: '1947年',
        int1: '春秋时期，梁僖公穷兵黩武，掳曹国美女绵姜为夫人（林清城饰）。宰相黎瑟垂涎绵姜姿色，频加挑逗，屡被斥拒，怀恨在心，遂假传书信，召自幼与绵姜相好的纪苏公子进宫私会，以图陷害。',
        int2: '幸宫女戴赢从中帮助，方化险为夷。不料绵姜赠纪苏公子凤钗一事为黎瑟侦知，乃怂恿僖公逼问绵姜，又串通纪侯宠妃宓姬潜赴曹国窃取珠凤，加害公子。',
        int3: '危急之时，戴赢通过宓姬婢女季娣的帮助，恳托禁军百户长钟兕、申息两人，跋涉关山，历尽艰险，终于在湘灵庙手刃宓姬，解救了绵姜。',
        text1:
          '1947年8月19日，越剧“十姐妹”为了筹款创建越剧实验剧场和越剧学校，联合公演此剧于黄金大戏院，至9月12日结束。南薇导演，韩义舞美设计。吴小楼饰梁僖公(原由徐天红饰，因徐生病，改为吴小楼饰)、竺水招饰绵姜、徐玉兰饰纪苏公子、张桂凤饰黎瑟(后因张生病，改由徐慧琴饰)、筱丹桂饰宓姬、尹桂芳饰申息、范瑞娟饰钟兕、傅全香饰戴赢(后因傅生病，改由张云霞饰)、袁雪芬饰季娣。该剧集中了沪上越剧各大剧团、各行当的头牌演员，又是为创办越剧学校和建造越剧实验剧场而举行的联合义演。从筹备、排练到演出期间，上海各家报纸相继发表消息、评论。田汉撰文指出：此剧演出的意义在于越剧演员“有了新的觉醒”，懂得了“必须求取团结，团结才是力量”。演出过程中被国民党当局勒令停演，经越剧姐妹团结斗争才恢复演出。该剧在艺术上的特点是，每个行当、每个主要演员的表演和唱腔都得到发挥，越剧各流派荟萃一台。尹桂芳、袁雪芬对唱的“送信”一段唱，流畅委婉，富有喜剧色彩，尤受观众喜爱，曾由百代唱片公司灌制成唱片发行。',
        text2:
          '1980年春，韩义与南薇凭记忆，重写此剧，并把原来的上下两本、共演五个小时的本子，改为十场近三个小时的演出时间，由虹口越剧团重排，演于徐汇剧场。程心如饰绵姜、丁育之饰公子柏、孙菊琴饰黎瑟、张蓓丽与李蓉芳分饰宓姬、陆锦娟饰申息、尹美娣饰费缇，朱惠芳饰钟兕、陆苏美饰戴赢、王美芳饰季娣。',
        text3: '1982年，西安市越剧团曾将该剧重新改编排演，带到上海演出。',
        text4:
          '此剧的“送信”唱段深受观众喜爱，曾被越剧演员多次演绎，广为流传，网络有各种音视频留存。1990年“霞飞杯”越剧电视大奖赛中，越剧小生萧雅和袁派花旦方亚芬曾演唱此段。2007年在“桂子飘香--纪念尹桂芳演唱会”和中央电视台的春节戏曲联欢晚会上，萧雅和方亚芬都上演了这个唱段。而在2010年11月23、24日，越剧尹派传人王君安专场《问君安》上，王君安、方亚芬亦演出此唱段。2011年的“纪念袁雪芬专场演唱会”上，尹派小生茅威涛和袁派花旦方亚芬演出此唱段。',
        path1:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi3.bbs.fd.zol-img.com.cn%2Ft_s1200x5000%2Fg1%2FM04%2F04%2F03%2FCg-4jVMi2fSIFRb7AAi6FyW6nLoAALQlgJ4K9gACLov423.jpg&refer=http%3A%2F%2Fi3.bbs.fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632206702&t=e707e61becf73bb6f505a3958ca2936chttps://img0.baidu.com/it/u=1842712967,2649028424&fm=26&fmt=auto&gp=0.jpg',
        path2:
          'https://bkimg.cdn.bcebos.com/pic/64380cd7912397ddb0b7f7005982b2b7d1a287e3?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Top icon1="arrow-back" title="山河恋" />
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
          <Text
            style={{
              fontSize: pxToDp(18),
              color: '#000',
              fontWeight: 'bold',
              marginTop: pxToDp(24),
              marginLeft: pxToDp(16)
            }}
          >
            {this.state.dramalist[0].title}
          </Text>
          <Text style={styles.title1}>
            作者：&emsp;{this.state.dramalist[0].author} &emsp;&emsp;创作年代:&emsp;
            {this.state.dramalist[0].year}
          </Text>
          <View>
            <Text style={styles.text}>剧情简介</Text>
            <Text style={styles.title1}>
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
            <Text style={styles.text2}>演出历史</Text>
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
            <Text
              style={{
                fontSize: pxToDp(18),
                fontWeight: 'bold',
                marginTop: pxToDp(24),
                marginLeft: pxToDp(16)
              }}
            >
              剧本详情
            </Text>
            <TouchableOpacity
              style={styles.book}
              onPress={() => this.context.navigate('Screenpaly', {
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
  title1: {
    fontSize: pxToDp(16),
    lineHeight: pxToDp(24),
    color: '#333333',
    alignSelf: 'center',
    marginTop: pxToDp(16),
    marginRight: pxToDp(16),
    marginLeft: pxToDp(16)
  },
  title: {
    fontSize: pxToDp(16),
    lineHeight: pxToDp(24),
    color: '#333333',
    marginTop: pxToDp(16),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16)
  },
  text: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginTop: pxToDp(24),
    marginLeft: pxToDp(16)
  },
  text2: {
    fontSize: pxToDp(18),
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
