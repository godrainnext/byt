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
      dramalist: [
        {
          title: '五女拜寿',
          author: '顾锡东',
          year: '1982年',
          int1: '明代嘉靖年间，户部侍郎杨继康（董柯娣），因对严嵩专横擅权深为不满，欲告老还乡。在他六十寿诞之期，众女儿女婿均奉厚礼进京拜寿，并争着逢迎二老去欢度晚年。贫寒的三女杨三春（何英）偕胸怀大志的三女婿邹应龙（方雪雯）一片至诚前来拜寿却遭到冷遇，二姐双桃恃宠欺凌，并挑唆杨夫人将三春夫妇赶出杨府。杨继康的族弟杨继盛诛奸未成，反遭屈斩，株连杨继康削职抄家，逐出京都。',
          int2: '顷刻之间，阂家逃散，骨肉分离。只有婢女翠云仗义相伴二老千里投亲。不料二女双桃见二老落魄，无利可图，拒绝奉养。同窗兼亲家陈松年惧怕严嵩淫威，也不敢接纳，满口仁义的大女婿为图飞黄腾达，竟认严嵩为干爹，自然更不肯收留。',
          int3: '杨继康夫妇和翠云流落街头，当时天寒地冻，濒于绝境，巧遇三女杨三春，她不计前愆，将二老接回家中，悉心奉养，虽是粗茶淡饭，却使二老温暖无比。三年后，三女婿邹应龙出仕朝堂，施计斗倒严嵩，杨家冤案昭雪，适逢杨夫人六秩寿期，众女婿又前来拜寿，杨老夫妇逐走寡廉鲜耻的大女婿。惟利是图的二女双桃，见二老已将患难相从的翠云收为义女，无地自容，羞愧离去。亲家陈松年也前来赔礼道歉。',
          int4: '杨家经受了一场兴衰荣辱的变迁，寿堂上呈现出一派尊老爱幼、姐妹互敬互爱、乐享天伦的动人景象。',
          text1:
            '《五女拜寿》是浙江小百花越剧团的立团剧目。1984年长春电影制片厂将该剧拍摄为电影，由张骏声执导，浙江小百花越剧团演出，获得第五届中国电影“金鸡奖”最佳戏曲片。',
          text2:
            '此剧不仅寓教于乐，且行当齐全，生旦多对，使唱腔设计流派纷呈，有利演员的实践与培养。由浙江嘉兴地区青年越剧团首演。艺术顾问邢竹琴，导演朱顺庆、朱敏，作曲朱国柱，舞美设计刘祖鹏。1983年浙江越剧小百花演出团在浙江省首届戏剧节演出获得优秀剧本奖，并选为该团首次赴香港演出剧目，享誉海内外。',
          text3:
            '1984年由该团演出、长春电影制片厂拍摄成戏曲艺术片，评为第五届全国电影“金鸡奖”最佳戏曲片。在长影厂第七届“小百花奖”评选中，何赛飞获优秀女主角奖、董柯娣获特别奖。',
          text4:
            '同年赴京参加国庆35周年献礼演出获广泛好评，并在怀仁堂、人民大会堂作专场演出。邓颖超同志在家亲切接见“小百花”们并亲笔题词：“不骄不满，才能进步，精益求精，后来居上。”此年获文化部、中国剧协颁发的全国优秀剧本奖。剧本收入浙江文艺出版社出版的《顾锡东剧作选》。',
          path1:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs8.sinaimg.cn%2Fmw690%2F002XzAS3zy6JRdvbswL17%26690&refer=http%3A%2F%2Fs8.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631879343&t=f02277c8d4a2cc9d84a93d0aecfedaed',
          path2:
            'https://img1.baidu.com/it/u=838358760,1964554786&fm=26&fmt=auto&gp=0.jpg'
        }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Top icon1="arrow-back" title="五女拜寿" />
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
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist[0].text4}
            </Text>
          </View>
          <View>
            <Text
              style={styles.text}>
              剧本详情
            </Text>
            <TouchableOpacity
              style={styles.book}
              onPress={() => this.context.navigate('Screenpaly4', {
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

