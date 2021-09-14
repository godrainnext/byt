import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Svg from 'react-native-svg-uri';
import { right } from '../../../component/common/iconSvg';
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dramalist: [{
        title: '桃花扇',
        author:
          '吕仲改编',
        year: '1948年',
        int1: '明末崇祯年间，癸未三月，复社名士侯朝宗与名妓李香君定情于秦淮媚香楼。香君“梳栊”之夜，宾客盈门，侯生诗扇赠香君，以示永结鸳盟。是时，阉党阮大铖为笼络侯生，托杨龙友送来丰厚贺礼，被香君严词拒绝，恼羞成怒，转而投靠权臣马士英，诬陷侯生参与谋反，下令逮捕。侯生得杨龙友报，无奈逃匿于故旧史可法处，逮侯不成，阮大铖又转而逼迫香君改嫁田仰。香君誓死不从，以头撞墙，血溅诗扇。情急之下，香君假母贞娘乔装替嫁，以成香君之志。',
        int2: '才子佳人，天各一方。香君坚守媚香楼以待。杨龙友以侯生诗扇，香君之血，画成桃花，名曰桃花扇。适艺人苏昆生欲返中原故乡探亲，又闻侯生随高总兵在黄河，遂托苏携扇探侯，寄托香君思念之情。苏昆生买舟黄河，固然与侯生相逢。',
        int3: '侯生历经流离，得香君消息，决意潜回南京，与香君相会。不意此时崇祯皇帝已然煤山以身殉国，马士英阮大铖等拥立福王为南明皇帝，把持朝政，荒淫无耻。秦淮诸姬，尽掳入宫闱，香君亦难逃厄运。一日，马、阮等赏雪于秦淮，令香君筵前歌舞。香君怒不可遏，权当“击鼓骂曹女祢衡”，把奸权们痛斥一番，被殴打致死。',
        int4: '而侯生则返回南京秦淮，人去楼空。适画家蓝瑛闻香君骂筵事迹，作画记之。侯生闻之大恸，作诗赞叹，复避权奸搜捕，又投奔史可法。不久，南明亡，满清立。幸存于乱离中的侯生香君，重逢于栖霞山道观。久别骤聚，万千感慨，两人重叙“桃花扇”旧情，被张道士撕裂诗扇，斥为耽于儿女之情不知家国之恨的“痴虫”。国破家亡，尘缘何处归宿？两人终于大彻大悟。双双归隐山林。',
        text1:
          '1948年尹桂芳先生首演于上海，《追念》是该剧的主要唱段，内容是侯朝宗凝视香君遗像，深情地追念历历往事，心绪起伏难平，无限感慨。',
        text2:
          '2019年3月9日，由南京市文学艺术界联合会、中共秦淮区委宣传部、南京市演艺集团越剧团和安琪工作室联合打造的大型原创越剧《桃花扇》在南京市文化艺术中心剧场首演，这是时隔半个世纪，越剧《桃花扇》在南京的再次亮相。',
        text3: '剧中的侯方域一角由越剧名家，著名尹派小生梅花奖得主王君安扮演。剧中的李香君一角由越剧名家，著名袁派花旦梅花奖得主陶琪扮演。这是两位艺术家自2010年联合主演南京市越剧团的优秀保留剧目《柳毅传书》　获第二届全国优秀保留剧目大奖后的再度合作。这些主创和主演们这次相聚金陵，竭尽全力来打造一部好听好看又能流传下来的《桃花扇》。越迷朋友们对此剧一直给予了充分的关注。',
        path1:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190618%2Ffafe144d8d94452fa3a97d2826debb5b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633677754&t=333265482a87255f4ffe05b8aa1c1319',
        path2:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190630%2Fce05106068a04b5dbc1b3570334989ba.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633677824&t=d01584e78897658bd6d3bd0e61e1960b'
      }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Top icon1="arrow-back" title="桃花扇" />
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
          <Text style={styles.title}>
            &emsp;&emsp;作者：{this.state.dramalist[0].author}
          </Text>
          <Text style={styles.title}>
            &emsp;&emsp;创作年代：{this.state.dramalist[0].year}
          </Text>
          <View>
            <Text style={styles.text}>剧情简介</Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].int1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].int2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].int3}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].int4}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>演出历史</Text>
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
            <TouchableOpacity
              style={styles.book}
              onPress={() => this.context.navigate('Screenpaly10', {
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
    marginLeft: pxToDp(16)
  },
  book: {
    height: pxToDp(100),
    borderRadius: pxToDp(8),
    marginBottom: pxToDp(50)
  }
});
export default Index;

