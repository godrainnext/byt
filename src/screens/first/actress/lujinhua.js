import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
  state = {
    person: {
      name: '陆锦花',
      place: '福建',
      birth: '1927年2月25日',
      death: '2018年1月10日',
      genre: '陆派',
      job: '小生',
      work: '《彩楼记》《情探》《盘夫索夫》',
      success: '越剧陆派（小生）创始人',
      evaluate1: '陆老飘去了极乐，其艺术精神永留人间，两场专场静悄悄的谢幕，就好比陆老的人生，静悄悄的来静悄悄的流过静悄悄的远离。领导是重视的，弟子是勤奋的，传承是完美的，专场是成功的，哀思是永恒的。（一枝花评）',
      evaluate2: '陆经常在阳台上看空中的飞鸟，数路边的梧桐树，回家注视鱼缸中游动的金鱼……其实陆锦花在13岁从师时，老师就刻意训练她的眼工，嘴上叼根筷子，目不转睛盯着筷尖。冰冻三尺实非一日之寒。（香港《文汇报》评）',
      image: 'https://bkimg.cdn.bcebos.com/pic/0bd162d9f2d3572c0af056128713632763d0c3ea?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image1: 'https://bkimg.cdn.bcebos.com/pic/e1fe9925bc315c60808f84f980b1cb134954778a?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
      image2: 'https://bkimg.cdn.bcebos.com/pic/838ba61ea8d3fd1f6be71e43304e251f94ca5fd8?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image3: 'https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd547d9368f51da81cb38db3dc7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image4: 'https://bkimg.cdn.bcebos.com/pic/3ac79f3df8dcd1006216265a728b4710b8122fc7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" title="陆锦花" />
        <ScrollView showsVerticalScrollIndicator = {false}>
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
            <View style={{ marginTop: pxToDp(12) }}>
              <Text style={styles.title}>人物评价</Text>
              <Text style={styles.text}>{this.state.person.evaluate1}</Text>
              <Text style={styles.text}>{this.state.person.evaluate2}</Text>
            </View>
            {/**图片 */}
            <View style={{ marginTop: pxToDp(12), marginBottom: pxToDp(16) }}>
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