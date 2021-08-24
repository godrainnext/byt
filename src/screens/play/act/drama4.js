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
  state = {
    dramalist: {
      title: '红楼梦',
      author: '曹雪芹',
      year: '清代',
      int1: '贾政长女贾元春加封贤德妃，皇帝恩准省亲。荣国府为了迎接这大典，修建极尽奢华的大观园，又采办女伶、女尼、女道士，出身世家、因病入空门的妙玉也进荣府。',
      int2: '元宵夜，元春回娘家待了一会儿，要宝玉和众姐妹献诗。宝玉和黛玉两小无猜，情意绵绵。书童茗烟将《西厢记》等书偷进园给宝玉，宝玉和黛玉一同欣赏。宝玉庶弟贾环嫉妒宝玉，抄写经书时装失手弄倒蜡烛烫伤宝玉，王夫人因此大骂赵姨娘。赵姨娘又深恨凤姐，便请马道婆施魔法，让凤姐、宝玉中邪。癞和尚、跛道人擦拭通灵玉，救好二人。',
      int3: '黛玉性格忧郁，暮春时节伤心落花，将它们埋葬，称为“花冢”，并作《葬花吟》。恰巧宝玉路过听到，深喜知心。王夫人丫环金钏与宝玉调笑，被王夫人赶出投井而死。宝玉结交琪官，贾政大怒，将其打得半死。袭人向王夫人进言，深得王夫人欢心，被王夫人看作心腹，并决定将来袭人给宝玉做妾。',
      int4: '元妃薨逝，贾家悬赏寻玉。宝玉变疯傻，老太太要给宝玉冲喜，凤姐献掉包计。黛玉从傻大姐那里得知宝玉娶亲后迷失本性，黛玉咳血病重，焚烧诗稿。宝玉、宝钗成亲。宝玉欲死，宝钗说黛玉已死，宝玉昏死做噩梦。贾府人去潇湘馆哭黛玉。',
      text1:
        '新版越剧《红楼梦》创作于1999年，首演于同年8月。它从调整戏剧结构入手，别样营造大悲大喜、大实大虚的舞台意境，并提高舞美空间层次，丰富音乐形象，整合流派表演，精缩演出时间，实现了一次富有创意的新编。它对原版既有承传，又有创新，是一个注入现代审美意识的新时期版本，被称为“展示上海文化风采的标志之作”。首演后，评论普遍认为：“《红楼梦》是越剧的经典之作，这次演出不是简单的复排，而是以现代审美观点进行加工修改。新版越剧《红楼梦》在剧本 、编导演、舞美、音乐等方面进行的可贵探索，使传统剧目焕发出新的光彩。”',
      text2:
        '在文本上，新版《红楼梦》对原版作了修改。首先，它删除了“黛玉进府”和“识金锁”两场戏。新增了“元妃省亲”一场戏，一下子把处于兴旺顶峰的贾府呈现在观众面前，形象地显示出封建大家族的时代背景，比之原版更深入地揭示了作品的社会历史内容。另外一处重大的修改是将宝玉弃玉出走的结尾改成了“太虚幻境”的宝玉咏叹，不仅凸显出贾府的兴衰荣枯的历史变迁，更表达了人物沉浮生灭的心路历程。因此全剧显得凄美缥缈，动人肺腑，引人深思，使观众在大力度的情感冲击下，不由自主地把自己和主人公的命运紧紧相连，感同身受，同悲同喜，剧场效果超过了以往的版本。文本上的突破，即强化了该剧蕴含的大悲剧感，更是对曹雪芹原著精神本质的深层把握与美学提升。',
      text3:
        '由于文本的不同，新版《红楼梦》对音乐包括唱腔进行了新的创作。唱腔有删有减，伴唱则增多于删。新版对原版7段伴唱采用了三段，新写了5段。新版在主旋律和配乐上作了全新的处理，即使保留的主要唱段及伴唱也重新处理了配器，而且在“读西厢”、“葬花”、“泄密”、“哭灵”等场次中进一步发挥，发展了伴唱的特有功能，掺入和声、哼鸣，富有感染力。音乐上的再创作加强了人物刻画，推动了剧情发展，提高了审美价值。',
      text4:
        '就舞台呈现而言，观众一走进剧场，首先看到的是具有贾府典型特征的环境：一对富有质感的石狮子与气派非凡的朱漆大门、雕梁画栋。大门一开，华美绝伦的大观园就呈现在观众眼前。亭台楼阁、水榭画舫、草木花树、小桥流水……舞台美术每一场都体现出迥然不同的美感特征，或华丽热闹、或清新淡雅、或古朴凝重……其中，“黛玉葬花”一场最为凄美。暮春时节，落英缤纷，一片桃树林中走来了扛着花锄的黛玉。远处传来隐隐约约的欢声笑语，这里却是冷冷清清。舞台上，冷色调的灯光衬托出黛玉的孤独落寞。当演员大段凄婉抒情的演唱进行中，台上数十株桃树忽然纷纷颤抖，落下片片花瓣，一时间舞台上犹如下了一场“花瓣雨”，凋谢飘零的花瓣满台飞舞，葬花的黛玉反被花葬，场面相当感人。到了全戏最后一场“太虚幻境”时，离家出走的宝玉回首往事，黛玉的形象在舞台深处升起，原版中“黛玉进府”宝黛初逢时的对唱，梦幻般地在此重现，两人遥遥相望，营造出一片“红楼一梦”的意境。2001年为适应一般剧场的演出，按原设计缩小改制了布景，取得了良好的效果。此外，人物服饰方面，则从样式、纹饰乃至制作上都力求创新，既不失古典神韵，又追求现代美感。',
      path1:
        'https://tse2-mm.cn.bing.net/th/id/OIP-C.q-Jw_8yCoOvabLwqrGclMgHaFK?w=257&h=180&c=7&o=5&dpr=1.75&pid=1.7',
      path2:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage8.pinlue.com%2Fimg3%2Ftu_jpg%2FksnrPhRhOUPIvAqAbKCblUE58P73JL45ksk6RoStOt1QqsyGRULuDNlm589MJep46BicicicnEeYd9uoxplOgImkg%2F640.jpeg&refer=http%3A%2F%2Fimage8.pinlue.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631926082&t=fc895f7b5140976131519792158bf07d'
    }
  };
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="红楼梦" />
        <ScrollView
          style={{
            padding: pxToDp(16),
            flex: 1
          }}
          showsVerticalScrollIndicator = {false}
        >
          <Image
            style={{
              height: pxToDp(180),
              borderRadius: pxToDp(8)
            }}
            source={{ uri: this.state.dramalist.path1 }}
          />
          <Text
            style={{
              fontSize: pxToDp(18),
              color: '#000',
              fontWeight: 'bold',
              marginTop: pxToDp(8)
            }}
          >
            {this.state.dramalist.title}
          </Text>
          <Text style={styles.title1}>
            &emsp;&emsp;作者：{this.state.dramalist.author} 创作年代:{' '}
            {this.state.dramalist.year}
          </Text>
          <View
            style={{
              marginTop: pxToDp(4)
            }}
          >
            <Text style={styles.text}>剧情简介</Text>
            <Text style={styles.title1}>
              &emsp;&emsp;{this.state.dramalist.int1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.int2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.int3}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.int4}
            </Text>
          </View>
          <View style={{ marginTop: pxToDp(4) }}>
            <Text style={styles.text2}>演出历史</Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text3}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text4}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: pxToDp(18),
                fontWeight: 'bold',
                marginTop: pxToDp(4)
              }}
              onPress={() => this.context.navigate('ScreenPlay')}
            >
              剧本详情
            </Text>
            <TouchableOpacity
              style={styles.book}
              onPress={() => this.context.navigate('Screenpaly')}
            >
              <Image
                style={{
                  height: pxToDp(100),
                  borderRadius: pxToDp(8)
                }}
                source={{ uri: this.state.dramalist.path2 }}
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
    marginTop: pxToDp(4)
  },
  title: {
    fontSize: pxToDp(16)
  },
  text: {
    fontSize: pxToDp(18),
    fontWeight: 'bold'
  },
  text2: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginBottom: pxToDp(4)
  },

  book: {
    marginTop: pxToDp(8),
    marginBottom: pxToDp(32),
    height: pxToDp(100),
    borderRadius: pxToDp(8)
  }
});
export default Index;
