import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Top from '../../../component/common/top'
import { pxToDp } from "../../../utils/styleKits";
import Ionicons from 'react-native-vector-icons/Ionicons';


class Index extends PureComponent {
  state = {
    dramalist: {
      title: '五女拜寿',
      author: '顾锡东',
      year: '1982年',
      int1: '明代嘉靖年间，户部侍郎杨继康（董柯娣），因对严嵩专横擅权深为不满，欲告老还乡。在他六十寿诞之期，众女儿女婿均奉厚礼进京拜寿，并争着逢迎二老去欢度晚年。贫寒的三女杨三春（何英）偕胸怀大志的三女婿邹应龙（方雪雯）一片至诚前来拜寿却遭到冷遇，二姐双桃恃宠欺凌，并挑唆杨夫人将三春夫妇赶出杨府。杨继康的族弟杨继盛诛奸未成，反遭屈斩，株连杨继康削职抄家，逐出京都。',
      int2: '顷刻之间，阂家逃散，骨肉分离。只有婢女翠云仗义相伴二老千里投亲。不料二女双桃见二老落魄，无利可图，拒绝奉养。同窗兼亲家陈松年惧怕严嵩淫威，也不敢接纳，满口仁义的大女婿为图飞黄腾达，竟认严嵩为干爹，自然更不肯收留。',
      int3: '杨继康夫妇和翠云流落街头，当时天寒地冻，濒于绝境，巧遇三女杨三春，她不计前愆，将二老接回家中，悉心奉养，虽是粗茶淡饭，却使二老温暖无比。三年后，三女婿邹应龙出仕朝堂，施计斗倒严嵩，杨家冤案昭雪，适逢杨夫人六秩寿期，众女婿又前来拜寿，杨老夫妇逐走寡廉鲜耻的大女婿。惟利是图的二女双桃，见二老已将患难相从的翠云收为义女，无地自容，羞愧离去。亲家陈松年也前来赔礼道歉。',
      int4: '杨家经受了一场兴衰荣辱的变迁，寿堂上呈现出一派尊老爱幼、姐妹互敬互爱、乐享天伦的动人景象。',
      text1: '《五女拜寿》是浙江小百花越剧团的立团剧目。1984年长春电影制片厂将该剧拍摄为电影，由张骏声执导，浙江小百花越剧团演出，获得第五届中国电影“金鸡奖”最佳戏曲片。',
      text2: '此剧不仅寓教于乐，且行当齐全，生旦多对，使唱腔设计流派纷呈，有利演员的实践与培养。由浙江嘉兴地区青年越剧团首演。艺术顾问邢竹琴，导演朱顺庆、朱敏，作曲朱国柱，舞美设计刘祖鹏。1983年浙江越剧小百花演出团在浙江省首届戏剧节演出获得优秀剧本奖，并选为该团首次赴香港演出剧目，享誉海内外。',
      text3: '1984年由该团演出、长春电影制片厂拍摄成戏曲艺术片，评为第五届全国电影“金鸡奖”最佳戏曲片。在长影厂第七届“小百花奖”评选中，何赛飞获优秀女主角奖、董柯娣获特别奖。',
      text4:'同年赴京参加国庆35周年献礼演出获广泛好评，并在怀仁堂、人民大会堂作专场演出。邓颖超同志在家亲切接见“小百花”们并亲笔题词：“不骄不满，才能进步，精益求精，后来居上。”此年获文化部、中国剧协颁发的全国优秀剧本奖。剧本收入浙江文艺出版社出版的《顾锡东剧作选》。',
      path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs8.sinaimg.cn%2Fmw690%2F002XzAS3zy6JRdvbswL17%26690&refer=http%3A%2F%2Fs8.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631879343&t=f02277c8d4a2cc9d84a93d0aecfedaed'
    }
  };
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE' }}>
        <Top icon1="arrow-back" title="剧本简介" />
        <ScrollView
          style={{
            marginLeft: pxToDp(10),
            marginRight: pxToDp(10),
          }}
        >
          <Image
            style={{ height: pxToDp(178), borderRadius: pxToDp(8), width: '100%' }}
            source={{ uri: this.state.dramalist.path }}
          />
          <Text style={{ fontSize: pxToDp(24), fontWeight: 'bold', marginBottom: pxToDp(20) }}>
            {this.state.dramalist.title}
          </Text>
          <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(10) }}>
            &emsp;&emsp;作者：{this.state.dramalist.author}  创作年代:  {this.state.dramalist.year}
          </Text>
          <View
            style={{
              marginTop: pxToDp(10)
            }}
          >
            <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', marginBottom: pxToDp(10) }}>
              剧情简介
            </Text>
            <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
              &emsp;&emsp;{this.state.dramalist.int1}
            </Text>
            <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
              &emsp;&emsp;{this.state.dramalist.int2}
            </Text>
            <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
              &emsp;&emsp;{this.state.dramalist.int3}
            </Text>
            <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(10) }}>
              &emsp;&emsp;{this.state.dramalist.int4}
            </Text>
          </View>
          <View style={{ marginTop: pxToDp(10) }}>
            <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', marginBottom: pxToDp(10) }}>
              演出历史
            </Text>
            <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
              &emsp;&emsp;{this.state.dramalist.text1}
            </Text>
            <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
              &emsp;&emsp;{this.state.dramalist.text2}
            </Text>
            <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
              &emsp;&emsp;{this.state.dramalist.text3}
            </Text>
            <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(80) }}>
              &emsp;&emsp;{this.state.dramalist.text4}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Index;