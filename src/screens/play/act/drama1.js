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
      title: '追鱼',
      author: '康德',
      year: '北宋嘉佑年间',
      int1: ' 北宋嘉佑年间,应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金宠嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。',
      int2: '张珍独居客乡，遭受冷落，万般愁肠，经常在夜深人静的时候，到碧波潭自叹心事。碧波潭里的鲤鱼精见张珍纯朴，一表人才，不甘水府寂寥，便变做牡丹小姐的模样，去书房与张珍约会，两人情投意合，形影难分，遂约定每日二更在后花园相会，不料被真牡丹小姐发现被赶出金门。',
      int3: '鲤鱼精见张珍受到冤屈，急忙出府找到张珍，巧言释去张珍之疑，表白了自己愿随张珍回乡度日。两人在街上欣赏花灯，被金宰相看见，被金宠见到误以为其女与张珍私奔，将他们两人双双抓回府内。到府内真假牡丹相逢引起纷争，宰相府里的人无法识别，金宰相决定请包公来辨别。鲤鱼精见事不妙，急忙回到碧波潭邀请水族兄妹前来帮忙。',
      int4: '师兄妹变作假包公，真假包公带着真假张龙、赵虎，一起来审真假牡丹。假包公暗示真包公，假牡丹情深义重，真牡丹嫌贫爱富，真包公因不愿拆散这对姻缘，便推辞不问。金宠又请来张天师调动天兵天将捉拿张珍和鲤鱼精。张珍、鲤鱼精逃到荒郊，天兵紧紧追来，鲤鱼精见形势紧急，就将自己的真实身份告诉了张珍。张珍爱之更深。天兵天将凶猛追杀，鲤鱼精虽然发起洪水阻拦，但始终不能突出包围。危急时刻，观音菩萨前来相救，要度千年鲤鱼精到南海修炼成仙。',
      int5: '鲤鱼精忠贞于自己的爱情，忍痛让观音菩萨拔掉了自己身上的三片金鳞，转为凡人，与张珍结为夫妻。从此，她与张珍同甘共苦，过着幸福美满的生活。',
      text1:
        '该剧1956年11月21日，由上海越剧院二团首演于大众剧场。剧本根据康德改编的湘剧本移植整理，黄沙导演，顾振遐、杜春阳音乐整理，黄子希、顾大良舞台设计，薛传刚舞蹈指导。筱桂芳饰张珍、王文娟饰鲤鱼精、郑忠梅饰金宠、陈兰芳饰金牡丹、钱妙花饰假包公、徐慧琴饰真包公，周宝奎饰金夫人，魏小云饰乌龟精，、金采风饰观音。',
      text2:
        '1957年4月，在杭州为苏联最高苏维埃主席团主席伏罗希洛夫招待演出，陪同观看的有周恩来总理及贺龙副总理。演毕，伏罗希洛夫上台和演员们一一握手，并风趣地对乌龟精说：“你是好人，成全了别人”。他两手握着真假包公的手说：“你们两个也要团结啊！”',
      text3:
        '1959年8月，由天马电影制片厂摄制成彩色戏曲艺术片。12月，上海文艺出版社出版了该剧的单行本。 1960年，上海越剧院携该剧赴香港演出。同年，香港万里书店将该剧收入《越剧精华》第二集出版发行。该剧主要唱段已由中国唱片社和音像出版单位，制成唱片和音带发行。',
      path1:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190621%2F7d6310d2b139428cb9d2879fce7f1815.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631878939&t=ec2f52b347c1bdefb233546a0dac57c7',
      path2:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190614%2F1e3e605bfd104fe7b78a71ac22b33080.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631924206&t=a33d3574aac710c72a8b2b7805f51081'
    }
  };
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="追鱼" />
        <ScrollView
        showsVerticalScrollIndicator={false}
          style={{
            padding: pxToDp(20),
            flex: 1
          }}
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
          作者：&ensp;{this.state.dramalist.author} &emsp;&emsp;创作年代:&ensp;
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
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.int5}
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
          </View>
          <View>
          <Text
              style={{
                fontSize: pxToDp(18),
                fontWeight: 'bold',
                marginTop: pxToDp(40),
                marginBottom:pxToDp(20)
              }}
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
    marginTop: pxToDp(4),
    lineHeight:pxToDp(24),
    color:'#333333',
    alignSelf:'center',
    marginTop:pxToDp(20)
    
  },
  title: {
    fontSize: pxToDp(16),
 
    lineHeight:pxToDp(24),
    color:'#333333'
  },
  text: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginBottom: pxToDp(20),
    marginTop:pxToDp(40)
  },
  text2: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginBottom: pxToDp(20),
    marginTop:pxToDp(40)
  },

  book: {
    marginTop: pxToDp(8),
    marginBottom: pxToDp(32),
    height: pxToDp(100),
    borderRadius: pxToDp(8)
  }
});
export default Index;
