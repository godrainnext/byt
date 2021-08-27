import React, { PureComponent } from "react";
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
        title: '家',
        author: '吴兆芬改编',
        year: '2003年',
        int1: '20世纪30年代初，高府长孙觉新与姨表妹梅从小青梅竹马，长成后又情投意合，但高老太爷却另为觉新聘定李瑞珏为妻，虽然觉新三弟觉慧鼓励他反抗封建婚姻，但生性懦弱的觉新却逆来顺受，被迫与瑞珏成婚。 ',
        int2: '次年，由于战乱，梅逃难来到高府，两人重逢于梅林，当梅看到觉新已经有了体贴善良的妻子和可爱的孩子时，便毅然离开了高府，不久病死。觉慧爱上了聪明的丫头鸣凤，高老太爷竟然把鸣凤作为礼物送给年过花甲的冯乐山，鸣凤不甘心命运的摆布，愤然投湖自尽。',
        int3: '二弟觉民爱上姑表妹琴，高老太爷又逼他另行婚配，觉慧激励觉民抗婚离家。高老太爷寿诞之日，读到觉民留下的抗婚信，接着又发现他的两个儿子——克安、克定在外面花天酒地，胡作非为，法院又送来了拘押克定的传票，深感脚底下这个“家”的根基在崩塌，当场昏死过去。',
        int4: '高老太爷死后，侍妾陈姨太借“血光之灾”，逼即将临产的瑞珏搬至乡下分娩，终使瑞珏因产后感染，含恨而死。这对刚获悉梅死的觉新更是一个晴天霹雳。经历了人生坎坷，觉新渐渐意识到只有反抗才有出路。最后，他终于支持叛逆的觉慧去寻找光明，离开了这个罪恶的家。',
        text1:
          '先后有1941年王杏花的演出版本，1953年新新越剧团的演出版本，1979年周水荷与朱铿编剧，上海越剧院演出的版本，以及2003年吴兆芬编剧，杨小青导演，上海越剧院演出的版本。1979年上海越剧院首演于虹口区第一工人俱乐部。朱铿导演，马良忠编曲，杨楚之、周剑青舞美设计，张娟娟服装设计，孙志贤造型设计，明道宣灯光设计，艺术顾问洪谟。沈嘉麟饰觉新，张月芳饰瑞珏，李璐饰梅，袁东饰高老太爷，陈文治饰觉慧，张菊华饰鸣凤。这个戏在改编演出过程中，得到原作者巴金的同意并多次亲自作了指导。该剧演出发挥了越剧长于抒情的特点，并对男女合演的对唱及现代剧的表演、音乐、布景、服装诸方面做了不少有益的探索。王杏花于1941年、高剑琳为首的新新越剧团于1953年均曾演过此剧。',
        text2:
          '越剧《家》由上海越剧院一团(男女合演团)演出。著名尹(桂芳)派小生赵志刚(饰演觉新)与王(文娟)派传人单仰萍(饰演梅芬)、吕(瑞英)派传人孙智君(饰演瑞珏)、陆(锦花)派传人许杰(饰演觉慧)、剧院新秀陈湜(饰鸣凤)等优秀演员成功塑造了个性化的角色，从内心深处揭示人物性格、情感与思想，从而形成激烈的戏剧冲突与心灵对碰，使观众受到强烈震撼。',
        text3:
          '导演杨小青注重发挥越剧写意抒情的特色，强化了男女合演的特点，展现了流派唱腔的魅力，凸现了越剧诗化的美感，在梅林、荷塘、喜堂等精心营造的唯美艺术氛围中，缠绵悱恻的唱腔给观众以酣畅淋漓的听觉享受。没有明确的幕序场次，没有华丽的舞台布景，没有花哨的歌舞陪衬，导演杨小青充分运用了戏曲表演上虚拟写意的手法，在演员的形体表现上下功夫，营造了一个空灵幻妙的空间。舞台除了梅林和屋内为实景，其余大多无实物，隐约的屋檐，平坦的转台使时空转换自由广阔，表演空间收放自如。',
        path1:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupfile.cuepa.cn%2Fnewspic%2F729924%2Fs_e03cd33ea1c27c9f4b29cb54a892eca1470688.jpg&refer=http%3A%2F%2Fupfile.cuepa.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632102134&t=531de26965b871545a793053f7c0a958',
        path2:
          'https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e709ab6e9ab9389b504ec26aea?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Top icon1="arrow-back" title="家" />
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
          &emsp;&emsp;作者：{this.state.dramalist[0].author} &emsp;创作年代:&emsp;
            {this.state.dramalist[0].year}
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

