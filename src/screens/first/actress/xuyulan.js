import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
  state = {
    person: {
      name: '徐玉兰',
      place: '浙江富阳',
      birth: '1921年12月27日',
      death: '2017年4月19日',
      genre: '徐派',
      job: '小生',
      work: '《红楼梦》《西厢记》《北地王》',
      success: '中国戏剧奖·终身成就奖，第27届上海白玉兰戏剧表演艺术奖',
      evaluate1: '徐玉兰不是很漂亮。但是，看下去就会完全被她带进去，她的声腔特色是如此刚烈。（中国人民大学文学院教授江棘评）她平时非常注重个人形象，90多岁高龄还总是打扮得精神利落，整个人神采奕奕，依然有贾宝玉风流倜傥的气质。（《北京晚报》评）',
      evaluate2: '在舞台上，徐玉兰是大胆的探索者，从行当、表演到演唱，她始终不断突破自我、创新发展。她是个率真、可爱的人。不过，她一辈子没有放松过对自身的高标准、严要求。人如其名，徐玉兰也如充沛饱满的玉兰，用自信应对挫折，秉毅力不断前行 。（上海广播电视台东方卫视中心编导杜竹敏评）',
      image: 'https://bkimg.cdn.bcebos.com/pic/30adcbef76094b36acafdd04ca866bd98d1000e9378d?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto',
      image1: 'https://bkimg.cdn.bcebos.com/pic/024f78f0f736afc3ef7a6819b319ebc4b7451253?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image2: 'https://bkimg.cdn.bcebos.com/pic/f636afc379310a552b528988b74543a982261053?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5/format,f_auto',
      image3: 'https://bkimg.cdn.bcebos.com/pic/78310a55b319ebc42d0e21e58226cffc1e171653?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image4: 'https://bkimg.cdn.bcebos.com/pic/d058ccbf6c81800a55ecee16bc3533fa828b4798?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" title="徐玉兰" />
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
    lineHeight: pxToDp(24),
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