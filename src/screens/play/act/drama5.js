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
        title: '碧玉簪',
        author: '马潮水和张云标',
        year: '1918年',
        int1: '明代吏部尚书李廷甫之女李秀英，聪明贤惠，容貌秀丽，父母爱若珍宝。秀英年已及笄，尚待字闺中。李廷甫50寿诞之日，好友王裕夫妇偕子玉林前来祝寿。李廷甫见玉林品貌端庄，仪表不俗，有意试试他的才华，就叫他题写寿联一副。玉林即席挥毫，顺手而成。李廷甫大喜，就以秀英许配为妻。李秀英的表兄顾文友，原有娶秀英之心，今见她被许配王玉林，心中恼恨，遂与孙媒婆密谋定下奸计。孙媒婆在秀英出嫁之日，暗中偷得她的首饰碧玉簪一支，连同伪造的情书一封，在洞房花烛之夜，有意使王玉林拾得，从中破坏他们的姻缘。',
        int2: '王玉林拾得情书与玉簪，果然中计，气愤万分。他撇下新房中的李秀英，回到书房，任她冷清清地良宵虚度。王玉林的母亲陆氏，偶于秀英侍婢春香口中，得悉玉林婚后迄未与秀英同房，她还以为玉林年少，读书心切，不解温存，便将他拖上楼去，锁于房中。是夜，这一边王玉林余恨未消，坐待天明；那一边李秀英心中疑虑，百思不解。僵持良久，李秀英终于上前探问情由，不料反遭玉林一番凌辱。李秀英满月归家之时，王玉林不肯同去。陆氏只好劝慰秀英独自回去省亲。回家后，秀英在母亲面前强颜欢笑，处处掩饰，以免母亲知道真情。王玉林见秀英独自回去，以为她与顾文友有约在先，随即写信一封，迫令她当日回转，不许留宿一宵，并以休弃相威胁。',
        int3: '这时，李秀英既不能向母亲说明真相，又不愿因此被休弃，玷辱家声，只得不顾母亲的盛怒，返回夫家。王玉林见秀英居然当天返回，不但使他的休妻目的未能如愿，自己反而又被母亲锁在房内，他心中郁闷，又独自坐待天明。夜深天寒，风雨凄凄。满腹委屈无处诉的李秀英，见了伏案而睡的王玉林，怕他受风，冻坏了身体，就想替他盖衣御寒，但想起王玉林素无夫妻情义，又屡次被他无故凌辱，心中一再犹豫，欲盖又止者三次，最后终因想起嫁前母亲的再三叮嘱，以及婆婆平时骨肉相待之情，毅然将衣盖上。',
        int4: '天明，玉林醒来，见给他盖的是件女人衣衫，就责怪秀英存心不善，一怒之下，又将她一顿殴辱。李夫人得到春香的通报，赶到王家，她见玉林盛气凌人，蛮不讲理，立即写信上京，要李廷甫回来评理。李廷甫匆匆赶回，到王府面责玉林，谁知玉林以情书及玉簪相反诘，李廷甫一时无词以对，也疑秀英行为不正，拔剑欲斩。李秀英含冤有口难辩，亏得婆婆相护。',
        int5: '他们追查情书与玉簪的来由，真相终于大白，李廷甫痛惜秀英被折磨成病，想带她回家调养。哪知道秀英为了遵守三从四德，执意不去。玉林深感愧疚，悔恨不已。于是，尊母之命，赴京赶考，得中状元后，送上凤冠霞帔，秀英不受。经过双方家长，特别是婆婆的劝慰，和玉林的再三恳求，严责己过，直至跪地请罪，秀英方才回心，夫妻终重归于好。',
        text1:
          '《碧玉簪》是越剧经典传统剧目，倾注几代艺人的心血。1918年，艺人马潮水、张云标根据《李秀英宝卷》和《碧玉簪全传》等书的故事，再参照婺剧《三家绝》的情节编成全剧。两年后，《碧玉簪》在上海演出获得成功，越剧从而在上海的舞台上占据了一席之地。',
        text2:
          '1962年，越剧电影《碧玉簪》在中国大陆上映，获得了极大的成功。1963年03月29日，该片在香港上映，创造了1963年香港华语电影的最高票房纪录（750,000港元）。',
        text3:
          '该剧为上海越剧院保留剧目，是金采风代表作之一。其艺术样式为悲喜剧，既悲得催人泪下，又喜得令人捧腹。剧中以《三盖衣》《归宁》《送凤冠》三场戏最为经典，至今传唱不衰。',
        text4:
          '1962年拍摄电影时，特邀“越剧皇后”姚水娟出演李夫人一角，为姚水娟留下了唯一一份影像资料，更显弥足珍贵。',
        path1:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181026%2F0b8155cf6e3045b8adb2eeba7f262ad6.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631883284&t=26f935af9e9aa15c18f679a9fc1d7890',
        path2:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzj.people.com.cn%2Fmediafile%2F201105%2F16%2FF201105161650460546607207.jpg&refer=http%3A%2F%2Fzj.people.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631926228&t=05fd4a8b65674809d9debed0b95b24c3'
      }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Top icon1="arrow-back" title="碧玉簪" />
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
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].int5}
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
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].text4}
            </Text>
          </View>
          <View>
          <Text style={styles.text}>
              剧本详情
            </Text>
            <TouchableOpacity
              style={styles.book}
              onPress={() => this.context.navigate('Screenpaly7', {
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
