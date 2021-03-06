import React, { PureComponent } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { pxToDp } from "../../../utils/styleKits";
import Top from '../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';
import Title from '../component/title';
import Bottom from '../component/bottom'

class Index extends PureComponent {
  constructor(props) {
    super(props);
  }
  static contextType = NavigationContext;
  state = {
    schoolstate: {
      image1:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200304%2F48895845538a4b5ea5506cedd7eb8c46.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632124091&t=bf7f4b6f0c45445dec81f25e172c4935',
      image2:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0725%252F132b56edj00qwsl6y0015c000g400bqg.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632124132&t=42114bafa8023ab687f40b22937a3f72',
      history1:
        '张桂凤，越剧表演艺术家，越剧张派老生创始人。1922年出生，浙江萧山人。1936年入嵊县招龙桥科班学艺，工老生。',
      history2:
        '942年10月进上海大来剧场，是袁雪芬倡导的越剧改革的第一批参加者之一，1945年再加入袁雪芬、范瑞娟领衔的雪声剧团，1947年加盟范瑞娟、傅全香领衔的“东山越艺社”。解放后入华东越剧实验剧团，后转入上海越剧院。',
      history3:
        '2012年3月4日凌晨，越剧表演艺术家张桂凤因病在沪去世，享年89岁。张桂凤一生为越剧艺术发展作出了卓越贡献，2008年2月，被文化部命名为“国家级非物质文化遗产项目越剧代表性传承人”。',
      school1:
        '张桂凤的戏路宽，在表演上坚持现实主义原则，注重刻划不同人物的个性，有“性格演员”之称，譬如在《祥林嫂》中，她一人饰二角，一个是卫癞子，是典型的浙江流民的形象，一个是吴妈，仅仅一句台词，但把精神麻木的形象表现得入木三分；在唱腔上较多吸收绍剧高亢的音调和棱角分明的润腔方法使唱腔激昂奔放，富有力度，从而增强了男性气质。',
      school2:
        '如《二堂放子》，“何日骨肉能聚首”这段【尺调腔·慢板】，是刘彦昌在二堂看书偶见落花瓣瓣、秋风瑟瑟不禁思念圣母时唱的，唱腔旋律流畅，刚健质朴，韵味浓郁；该剧中的“华山圣母是儿的娘亲”唱段，是以【尺调腔·二凡】为基础组织起来的，其过门和唱腔都吸收自绍剧，但又加以越剧化，唱得感情真切深厚。',
      development1:
        '1961年9月8日至10月18日，应金日成首相邀请，上海越剧院二团以“中国上海越剧团”名义，赴朝鲜民主主义人民共和国访问演出。朱光任团长，袁雪芬任副团长，章力挥任秘书长。演出剧目有《红楼梦》、《西厢记》、《春香传》、《打金枝》、《盘夫》、《挡马》等。主要演员有袁雪芬、徐玉兰、王文娟、张桂凤、吕瑞英、金采风、陆锦花等。《红楼梦》特为庆祝朝鲜劳动党第四次代表大会作了演出。金日成、崔庸健等朝鲜党政领导和以邓小平为首的中共中央代表团、以科兹洛夫为首的苏共中央代表团，观看了演出。',
      development2:
        '2006年，时值中国越剧诞生100周年，一台《百年流声——纪念中国越剧诞辰100周年电视文艺晚会》上演，特别选择越剧的发源地嵊州和越剧的发祥地上海进行双向传送异地直播。这台晚会开创两个“第一次”，即首次以双向传送异地直播的现代电视传媒手段来运作戏曲节目；首次让艺术家们以“走红地毯”的方式拉开晚会的序幕。',
      art1: '张桂凤组织唱腔的能力很强，能根据人物感情变化灵活运用各种曲调、板式，使唱腔富有新意。如《凄凉辽宫月》第六场中道宗猜疑皇后时唱的“一石投水激波涛”这段[弦下腔]，以尺调式、正调式、北调式、自由式的[弦下腔]混合组成，旋律丰富，节奏多变，唱腔深沉、粗犷，符合人物的身份、性格，运腔又十分细腻。《李娃传》中的“训子”吸收了绍剧的音调，充分表现出人物激愤的情绪。',
      art2: '张桂凤创腔时善于根据塑造不同行当、不同个性的人物的需要，采取不拘一格、移花接木的方法选择和运用不同的音乐素材。《凄凉辽宫月》中道宗唱的“眼前丽人赛观音”这段唱，根据这位骠悍人物的特点和具体情境，吸收借鉴了绍剧的[平阳调]因素；《祥林嫂》中卫癞子的“东南西北全走遍”这段唱，根据人物不务正业、四处游晃的特点，继承运用了越剧早期的[平板]唱腔。这样做既突出了人物的个性，又使唱腔富有地方色彩。',
      title: '越剧张派集锦',
      ad: '张派是张云霞创立的越剧旦角流派。张云霞的唱腔中行腔变化丰富，真假音结合运用自如，吐字清晰。'
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <Top icon1="arrow-back" title="张派" />
        <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
          {/*流派图片 */}
          <Image
            style={styles.image1}
            source={{ uri: this.state.schoolstate.image1 }}
          />
          {/*流派信息 */}
          <Title title="个人经历" />
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.history1}
          </Text>
          <Text style={styles.text2}>
            &emsp;&emsp;{this.state.schoolstate.history2}
          </Text>
          <Bottom />
          <Title title="流派创立" />
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.school1}
          </Text>
          <Text style={styles.text2}>
            &emsp;&emsp;{this.state.schoolstate.school2}
          </Text>
          <Bottom />
          <Title title="流派发展" />
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.development1}
          </Text>
          <Text style={styles.text2}>
            &emsp;&emsp;{this.state.schoolstate.development2}
          </Text>
          <Bottom />
          <Title title="艺术特色" />
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.art1}
          </Text>
          <Text style={styles.text1}>
            &emsp;&emsp;{this.state.schoolstate.art2}
          </Text>
          <Bottom />
          {/*流派专辑 */}
          <View style={{ alignSelf: 'center', alignItems: 'center', width: pxToDp(100) }} >
            <View
              style={{
                height: pxToDp(30),
                width: pxToDp(30),
                borderRadius: pxToDp(15),
                backgroundColor: '#D5E8E6',
                marginBottom: pxToDp(-25),
                marginRight: pxToDp(65),
              }}></View>
            <Text style={{ fontSize: pxToDp(18), color: '#000000', fontWeight: 'bold' }}>流派专辑</Text>
            <View style={{
              width: pxToDp(80),
              height: pxToDp(1),
              backgroundColor: '#000000',
              marginTop: pxToDp(4)
            }}></View>
          </View>
          <TouchableOpacity
            style={styles.zhuanji}
            onPress={() => this.context.navigate('Album')}
          >
            <Image
              style={styles.image3}
              source={{ uri: this.state.schoolstate.image2 }}
            />
            <View style={{ width: pxToDp(240), marginTop: pxToDp(10), marginBottom: pxToDp(14), justifyContent: 'space-between' }}>
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
    lineHeight: pxToDp(30),
    marginTop: pxToDp(16),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16)
  },
  text2: {
    fontSize: pxToDp(16),
    color: '#333333',
    lineHeight: pxToDp(30),
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
    color: '#666666'
  }
});
export default Index;