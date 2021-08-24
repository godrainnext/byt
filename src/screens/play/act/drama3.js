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
  state = {
    dramalist: {
      title: '梁山伯与祝英台',
      author: '暂无',
      year: '暂无',
      int1: '东晋时期，会稽郡上虞县祝家庄，玉水河边，有个祝员外之女英台，美丽聪颖，自幼随兄习诗文与慕班昭、蔡文姬的才学，恨家无良师，一心想往会稽郡城（今绍兴）访师求学。英台开始了女扮男装的求学生涯。',
      int2: '祝员外拒绝了女儿的请求，会稽郡上虞县的祝英台求学心切，伪装卖卜者，对祝员外说："按卦而断，还是让令爱出门的好。"祝父见女儿乔扮男装，一无破绽，又不忍使她失望，只得勉强应允。英台女扮男装，去会稽郡城（绍兴）求学。',
      int3: '途中，邂逅了赴会稽郡城(今绍兴)求学的会稽书生梁山伯，一见如故，相读甚欢，在草桥亭上撮土为香，义结金兰。不一日，二人来到会稽城的万松书院，拜师入学。从此，同窗共读，形影不离。梁祝同学三年，情深似海。英台深爱山伯，但山伯却始终不知她是女子，只念兄弟之情，并没有特别的感受。',
      int4: '祝父思女，催归甚急，英台只得仓促回乡。梁祝分手，依依不舍。在十八里相送途中，英台不断借物抚意，暗示爱情。山伯忠厚纯朴，不解其故。英台无奈，谎称家中九妹，品貌与己酷似，愿替山伯作媒，可是梁山伯家贫穷，未能如期而至，待山伯去祝家求婚时，岂知祝父已将英台许配给家住会稽郡下辖鄮县(今鄞县)的太守之子马文才。美满姻缘，已成沧影。二人楼台相会，泪眼相向，凄然而别。',
      int5: '临别时，立下誓言：生不能同衾，死也要同穴！后梁山伯被朝廷沼为鄞县(今宁波市鄞州区)令。然山伯忧郁成疾，不久身亡。遗命葬鄮城九龙墟。英台闻山伯噩耗，誓以身殉。英台被迫出嫁时，绕道去梁山伯墓前祭奠，在祝英台哀恸感应下，风雨雷电大作，坟墓爆裂，英台翩然跃入坟中，墓复合拢，风停雨霁，彩虹高悬，梁祝化为蝴蝶，在人间蹁跹飞舞。',
      text1:
        '《梁山伯与祝英台》是中国汉族民间四大爱情故事之一，其他三个是《白蛇传》、《孟姜女哭长城》、《牛郎织女》。其中，《梁祝传说》是中国最具魅力的口头传承艺术及国家级非物质文化遗产，也是唯一在世界上产生广泛影响的中国民间传说。自西晋始，在民间流传已有一千七百多年，可谓中国家喻户晓，流传深远，被誉为爱情的千古绝唱。从古到今，有无数人被梁山伯与祝英台的悲惨爱情所感染。《梁山伯与祝英台》与《罗密欧与朱丽叶》齐名。后来被艺术家们搬到舞台上，经典剧目是越剧的《梁祝》。',
      text2:
        '《梁祝》是越剧传统骨子老戏，越剧诞生之初，男班老艺人便已在舞台上演出《梁山伯》。',
      text3:
        '三十年代女班兴起，《梁山伯》一剧被更多越剧艺人的搬上舞台，剧名也被更名为《梁祝哀史》。其中影响最大的当属袁雪芬马樟花的《梁祝哀史》，马樟花和袁雪芬觉得传统《梁祝》剧本内容充满迷信、色情等因素，于是重新整理剧本，去其糟粕，获得成功。',
      text4:
        '袁雪芬与范瑞娟初演《梁祝哀史》的时间是1945年，1951年，华东越剧实验剧团重排该剧，增尾“化蝶”，剧本由袁雪芬、范瑞娟口述，徐进等执笔，黄沙导演，陈捷、薛岩音乐整理，幸熙、苏石风布景设计。范瑞娟饰梁山伯、傅全香饰祝英台、张桂凤饰祝公远、吕瑞英饰银心、魏小云饰四九、金艳芳饰师母。该剧于1952年参加第一届全国戏曲观摩演出大会，获剧本奖、演出一等奖、音乐作曲奖、舞美设计奖，主演范瑞娟和傅全香获演员一等奖、张桂凤获演员二等奖、吕瑞英获演员三等奖。1953年，该剧由上海电影制片厂摄制成第一部国产彩色戏曲艺术片，由徐进、桑弧编剧，桑弧、黄沙导演，袁雪芬和范瑞娟主演。',
      path1:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201501%2F28%2F20150128210205_Zka5i.jpeg&refer=http%3A%2F%2Fimg3.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631880565&t=24bda8203bfc054bc37d4075cec2bc17',
      path2:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fopinion.zjol.com.cn%2Fbwgd%2F201804%2FW020180413267001471214.jpg&refer=http%3A%2F%2Fopinion.zjol.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631926023&t=99cc0afcdf337789da9d488023e41087'
    }
  };
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="梁山伯与祝英台" />
        <ScrollView
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
              onPress={() => this.context.navigate('ScreenPlay3')}
            >
              剧本详情
            </Text>
            <TouchableOpacity
              style={styles.book}
              onPress={() => this.context.navigate('Screenpaly3')}
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
