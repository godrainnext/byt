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
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F90931a0333cca5444e77bbec1c9312655b5eb49c.jpg&refer=http%3A%2F%2Fi2.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632122277&t=917299fe57ec56d8f0419bac20dedd11',
      image2:
        'https://img2.baidu.com/it/u=3831967098,2181125388&fm=15&fmt=auto&gp=0.jpg',
      history1:
        '张云霞，原名陶涤民，祖籍杭州。1939年在更新舞台代师顶演《乌盆记》和《捉放曹》获得成功，被时人传为“十龄童”。1943年入玉牡丹越剧戏班。1944年至1945年，搭班于皇宫、老闸等戏院，又拜越剧男班艺人刘金玉为师。',
      history2:
        '1946年上半年，参加天红剧团唱三肩花旦，与徐天红合灌了唱片《孝女心》。下半年参加了袁雪芬、范瑞娟领衔的雪声剧团为三肩旦。期间，对新越剧潜心钻研，一丝不苟地学习袁派艺术，并与范派小生胡少鹏搭档，经常上电台演唱袁、范的《梁祝哀史》、《香妃》、《一缕麻》等剧的精彩唱腔，很快在观众中造成影响，被称为“袁派花旦”而崭露头角。继又转入范瑞娟与傅全香为首的东山越艺社，参加了1947年越剧“十姐妹”的义演，在《山河恋》剧中，先饰秋隗，后顶替傅全香饰演戴赢。',
      school1:
        '张云霞童年时曾学习京剧余派须生戏，1946年加入雪声剧团后，受袁派艺术熏陶，初期模仿袁雪芬的唱腔和表演，后又参加过东山越艺社和芳华剧团；1953年起主持少壮越剧团，任团长和主要演员。',
      school2:
        '她的唱腔在委婉细腻的袁派基础上，融入傅派俏丽多变的华彩，并吸收京剧和昆剧的营养，借鉴西洋声乐的发声方法，使用真假声结合，开拓了音域，其唱腔的音域可达二个八度，而且高低音衔接自如，有独特的韵味和魅力。张云霞的唱腔旋律性强，起伏较大，小腔丰富，变化灵活，擅用多种装饰音加以润腔，以婉转柔和、华丽多姿的风格独树一帜，尤其是演唱[尺调腔.慢板]更具特色。',
      development1:
        '1952年1月重入少壮越剧团，任头肩花旦兼副团长，与陆锦花合作主演了《琴瑟缘》、《许仙与白娘子》等剧目。继而辍演一年，拜昆曲名家方传芸为师，学昆剧文武旦角艺术，学会了昆剧《游园惊梦》、《贩马记》和《扈家庄》等戏。',
      development2:
        '1960年被聘为上海越剧院学馆兼职教师，1985年应聘到上海市戏曲学校越剧班执教。1989年春，上海艺术研究所、上海剧协等12家单位联合为她举办了“张云霞表演艺术研讨（演唱）会”。1990年，记载其艺术道路和表演经验的《张云霞表演艺术》一书，由学林出版社出版发行。',
      art1: '张云霞的唱腔中行腔变化丰富，真假音结合运用自如，吐字清晰，在《李翠英告状》中诉状一段唱，她根据人物感情的发展，用[尺调腔.慢清板]、[慢中板]、[中板]、[急快板]等不同速度的板式，生动细致地表达了人物感情的层次。如自然流畅，真假声衔接不露痕迹；尤其是最后段落从较快的〔中板〕转入急遽的〔急快板〕，这种板式的速度之快在越剧中少见，但张云霞凭着极强的吐字基本功，做到字正腔圆，快而不乱。这段唱也成为代表张派特色的典型唱段。',
      art2: '张云霞擅演花旦，也擅演青衣、刀马旦、闺门旦，对同一行当的不同人物，她根据各自的性格赋予不同的音乐形象。如《李翠英告状》中李翠英的唱腔音调爽朗流畅，强调其性格泼辣的一面；《春草闯堂》中春草的唱腔则多运用婉转圆滑的小腔以表现其活泼俏皮的性格。',
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