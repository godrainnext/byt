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
        'https://img0.baidu.com/it/u=3755505946,3931956555&fm=26&fmt=auto&gp=0.jpg',
      image2:
        'https://img2.baidu.com/it/u=3738236468,3342797455&fm=26&fmt=auto&gp=0.jpg',
      history1:
        '袁雪芬于1933年7月入四季春科班学戏，工青衣、闺门旦，兼学绍兴大班和徽班的武戏。师傅为绍兴文戏男班艺人鲍金龙。满师后，一度与女子越剧早期名旦王杏花同台，唱腔、表演受到她的影响。',
      history2:
        '1936年到杭州演出，初次挂头牌。同年秋随科班初次到上海，并参加灌制了女子越剧的第一张唱片。1938年2月再次随科班来上海，曾与“同春舞台”的绍兴大班演员同台演出。此后一直在上海从事艺术活动。“孤岛”时期与小生演员马樟花合演3年余，曾对《梁祝哀史》作了初步的去芜存菁。演出《恒娘》等新戏，并上电台演唱，扩大了越剧影响，在艺术上崭露头角，被誉为越剧“新后”。为了摆脱当时社会上恶势力的纠缠，她洁身自励，持斋茹素，不唱堂会，不拜“过娘”。',
      school1:
        '1942年10月起，在进步话剧的影响下，在大来剧场开始越剧改革，拿出自己的大部分包银，聘请专职编剧、导演、舞美设计、舞台监督，成立剧务部主持演出活动，在越剧界首次建立起正规的编戏、排戏制度；废除幕表制，使用完整的剧本；废除衣箱制，参照古代绘画，根据人物身份设计服装；打破传统的舞台形式，采用立体布景、油彩化装、灯光、音响，逐步形成综合的艺术机制。',
      school2:
        '在表演上，博采众长，将话剧、电影重视刻画人物性格和内心活动的写实主义表演特点，与昆曲载歌载舞、重视形体动作美化的长处吸收到越剧中，加以融化、创新。1943年11月演出《香妃》时，与琴师周宝财合作，创造了新的〔尺调〕腔，后被其他越剧演员吸收、不断丰富，发展成越剧的主腔，并在此基础上衍化出不同的流派。其唱腔旋律淳朴，节奏多变，感情真挚深沉，韵味醇厚，委婉缠绵，声情并茂，被称“袁派”。',
      development1:
        '1946年5月，把根据鲁迅名著《祝福》改编的《祥林嫂》，首次搬上越剧舞台，受到田汉、许广平、欧阳山尊、白杨、胡风、梅朵、田钟洛等进步文艺界和新闻界人士的称赞，被舆论称为“新越剧的里程碑”。该剧于1948年拍摄成电影。在中国共产党地下组织的支持下，在1947年8月《山河恋》联合义演及同年10月筱丹桂之死事件中，同国民党当局进行了坚决斗争，遭到反动势力的多次迫害。',
      development2:
        '1949年7月，参加上海市军管会文艺处举办的第一届地方戏剧研究班学习，任表演系中队长。是年9月，她和梅兰芳、周信芳、程砚秋作为戏曲界特邀代表参加了第一届中国人民政治协商会议，并出席了10月1日的开国大典。',
      art: '其唱腔旋律淳朴，节奏多变，感情真挚深沉，韵味醇厚，委婉缠绵，声情并茂，被称“袁派”，为戚雅仙、张云霞、金采风、吕瑞英等一批越剧演员所继承和发展。在日本帝国主义侵占期间，演出了《香妃》、《红粉金戈》、《木兰从军》、《黑暗家庭》、《王昭君》等表现爱国思想、歌颂民族气节、反对封建礼教的剧目。',
      title: '越剧袁派集锦',
      ad: '袁派是袁雪芬创立的越剧旦角流派,袁派十分讲究重点唱句的演唱，擅用喷口、气口、加虚词以及强音、顿音等技巧进行特殊处理，造成演唱上的高潮。'
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <Top icon1="arrow-back" title="袁派" />
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
            <View style={{ width: pxToDp(240),marginTop:pxToDp(10),marginBottom:pxToDp(10),justifyContent:'space-between'}}>
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
    marginTop:pxToDp(8)
  },
  title: {
    fontSize: pxToDp(18),
    color: '#000000',
    fontWeight: 'bold',
    marginTop: pxToDp(24),
    marginLeft: pxToDp(16)
  },
  title1: {
    fontSize: pxToDp(18),
    color: '#000000',
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
    color: '#666666',
    marginTop: pxToDp(8)
  }
});
export default Index;
