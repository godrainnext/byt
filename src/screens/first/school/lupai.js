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
        'https://bkimg.cdn.bcebos.com/pic/55e736d12f2eb9380f5ea049d5628535e5dd6f5e?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image2:
        'https://bkimg.cdn.bcebos.com/pic/242dd42a2834349b9994e2dfc8ea15ce37d3bede?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_auto',
      history1:
        '陆锦花，越剧小生演员。上海少壮越剧团创建者，为该团团长。陆锦花13岁进越剧四季班学艺，改用母姓为陆，拜男班演员张福奎为师。四季班解散后，到金门大戏院唱三肩小生。1942年进袁雪芬领衔的大来剧场唱二肩小生，因身材瘦小，多演童生戏。',
      history2:
        '1946年与邢竹琴合作演出。1947年秋与王文娟合作，成立少壮越剧团任团长，演于皇后大戏院。演过《礼拜天》《天伦之乐》《金蝉记》《女伶受辱记》等不少时装戏。之后曾与张茵、许金彩、张云霞、筱月英等搭档。1949年7月，参加上海市军管会文艺处举办的第一届地方戏剧研究班学习。1954年参加华东戏曲研究院越剧实验剧团。同年在华东区戏曲观摩演出大会中，扮演《盘夫索夫》中的曾荣，获表演二等奖。',
      school1:
        '陆锦花于1947年五月在“龙门”大戏院与邢竹琴合作，演出了《新月夜归人》《黑暗天堂》《金玉良言》等剧目。其中尤其以新编时装剧《黑暗天堂》轰动越坛，成为陆锦花的成名作。她所饰演的大学生有一段“悲切切，泪淋淋，坐起半身”的十八句弦下腔十字调组成的唱段，一时风靡上海越剧观众。陆派唱腔在这时已见雏形。',
      school2:
        '陆锦花自己组班领衔演出《礼拜六》，这是她艺术生涯中的分水岭和突破口。当时剧团的演出剧目和演出时间，基本上是老板说了算。陆锦花与王文娟的演出，看戏的不但有基本观众，还招来了一批青年学生。由此老板对她们刮目相看，演什么戏，定什么新剧目，均与她们共同商定。这一时期，陆锦花的聪明才智得到了充分的施展。“少壮”编演了家庭伦理悲喜剧《天伦之乐》、海上实事《女伶受辱记》、社会实事大悲剧《人难做》、家庭大悲剧《青春误》、社会醒世剧《人之初》等。是年《黑暗天堂》《礼拜六》《义》等剧由大中华、百代、百歌等唱片公司灌制发行了唱片，陆派唱腔脱颖而出。',
      development1:
        '1954年，她进入上海越剧院后，随着环境的变化，悉心专攻儒生、穷生戏。她力求同类不同型，一戏一个样。她不以花俏悦人，而以洗练取胜。分别成功地塑造了众多艺术形象。如先后与傅全香、吕瑞英合演的《珍珠塔》是一出传统骨子戏，唯独她所塑造的方卿，广撷博采，奇峰突起；《情探》中的王魁是概念定型的反面角色，唯独她赋予王魁特有的血肉灵魂，又别出一番风光。',
      development2:
        '1958年，《情探》拍成电影。“陆派”艺术更为大家熟悉和喜爱。“陆派”唱腔艺术，是从“闪电小生”马樟花的唱腔中衍变、发展、创造出来的，深受广大民众喜爱。她的演唱擅用中音区，飘逸自如，舒展流畅，显得异常松弛自然；其吐词清晰，咬字准、送音远，讲究“字正腔园”；运腔转调，清丽优美；运气润腔，刚柔调和。唱腔着眼于塑造人物，“在平稳中传情”，“在平淡中出奇”，做到字字送听，声声入耳。其中大量精彩唱段至今在海内外传唱不绝。',
      art1: '陆锦花最擅演穷生戏，演“鞋皮生”和“破巾生”堪称一绝。她表演潇洒儒雅，含蓄大方，动作简练传神；她的嗓音清亮，音质纯净，音调朴实流畅，行腔松弛舒展，尤其讲究吐字清爽，声声送听，听她的唱犹如一股清泉潺潺流入人的心田，清新柔美，耐人寻味。',
      art2: '陆锦花的唱腔有鲜明特色，但她不是仅仅从形式、技巧上着眼，而是始终把塑造人物放在中心位置。行腔、润腔都是为了深刻揭示人物内心世界。由于陆锦花的唱腔是在马樟花唱腔基础上发展起来的，她演唱[尺调腔]时仍保留着不少[四工腔]的因素，因此听起来别有风味。',
      title: '越剧陆派集锦',
      ad: '陆派唱腔，不是以江河奔腾般的气势取胜，而以清晰明丽引人。陆派是与尹派、范派、徐派、毕派齐名的越剧五大小生流派。'
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <Top icon1="arrow-back" title="陆派" />
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