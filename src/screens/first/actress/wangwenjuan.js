import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
  state = {
    person: {
      name: '王文娟',
      place: '浙江绍兴',
      birth: '1926年12月19日',
      death: '2021年8月6日',
      genre: '王派',
      job: '花旦',
      work: '《红楼梦》《春香传》《西园记》《追鱼》',
      success: '第7届上海文学艺术奖终身成就奖，第27届上海白玉兰戏剧表演艺术奖终身成就奖',
      evaluate1: '王文娟待人亲切周到。她平时内向寡言，骨子里却有一股闯劲儿。她的人生哲学一如她创立的唱腔，虽是朴实平易之语，却蕴含丰富多变的舞台张力。循着表演惯性，怎么省事儿怎么来，从来不是王文娟的风格，越是有挑战，她越要迎难而上。（《文汇报》评）',
      evaluate2: '王文娟和她所演的林黛玉，都是气质高贵的。王文娟对于自己饰演的角色的态度极度严肃认真，忠于角色的性格，绝不把非属角色所有的东西外加到角色身上，这是任何一个优秀演员的必具美德。她从政治到艺术，都有着强烈的进步要求。（中国戏剧家协会原副主席刘厚生评）',
      image: 'https://bkimg.cdn.bcebos.com/pic/94cad1c8a786c91773a2ca5ccb3d70cf3bc75735?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg',
      image1: 'https://bkimg.cdn.bcebos.com/pic/b8389b504fc2d56208fb1c96e71190ef77c66cde?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image2: 'https://bkimg.cdn.bcebos.com/pic/34fae6cd7b899e51b71310c64ca7d933c9950d46?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image3: 'https://bkimg.cdn.bcebos.com/pic/c9fcc3cec3fdfc038be867ddd63f8794a5c226c6?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto',
      image4: 'https://bkimg.cdn.bcebos.com/pic/21a4462309f790529822b3e76fb9c0ca7bcb0b467f9d?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5/format,f_auto',
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" title="王文娟" />
        <ScrollView >
          {/*基本信息 */}
          <View style={{ flex: 1, backgroundColor: 'white', padding: pxToDp(16), paddingBottom: 0 }}>
            <Text style={styles.title}>基本信息</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: '65%' }}>
                <Text style={styles.text}>姓名：{this.state.person.name}</Text>
                <Text style={styles.text}>籍贯：{this.state.person.place}</Text>
                <Text style={styles.text}>出生日期：{this.state.person.birth}</Text>
                <Text style={styles.text}>逝世日期：{this.state.person.death}</Text>
                <Text style={styles.text}>流派：{this.state.person.genre}</Text>
                <Text style={styles.text}>行当：{this.state.person.job}</Text>
                <Text style={styles.text}>代表作品：{this.state.person.work}</Text>
              </View>
              <Image style={{ height: pxToDp(168), width: pxToDp(120), borderRadius: pxToDp(8) }} source={{ uri: this.state.person.image }} />
            </View>
            <Text style={styles.text}>主要成就：{this.state.person.success}</Text>
            {/**人物评价 */}
            <View style={{ marginTop: pxToDp(16) }}>
              <Text style={styles.title}>人物评价</Text>
              <Text style={styles.text}>{this.state.person.evaluate1}</Text>
              <Text style={styles.text}>{this.state.person.evaluate2}</Text>
            </View>
            {/**图片 */}
            <View style={{ marginTop: pxToDp(16), marginBottom: pxToDp(16) }}>
              <Text style={styles.title}>人物图集</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Image style={styles.image} source={{ uri: this.state.person.image1 }} />
                <Image style={styles.image} source={{ uri: this.state.person.image2 }} />
                <Image style={styles.image} source={{ uri: this.state.person.image3 }} />
                <Image style={styles.image} source={{ uri: this.state.person.image4 }} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: pxToDp(18),
    color: '#000000',
    fontWeight: 'bold'
  },
  text: {
    fontSize: pxToDp(16),
    color: '#333333',
    lineHeight: pxToDp(22),
    marginTop: pxToDp(8)
  },
  image: {
    height: pxToDp(200),
    width: pxToDp(160),
    borderRadius: pxToDp(8),
    marginTop: pxToDp(16)
  }
})
export default Index;