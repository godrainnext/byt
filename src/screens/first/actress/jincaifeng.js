import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
  state = {
    person: {
      name: '金采风',
      place: '上海',
      birth: '1930年',
      death: '无',
      genre: '金派',
      job: '闺门旦、花旦',
      work: '《汉文皇后》《碧玉簪》《西厢记》',
      success: '1993年“亚洲最杰出艺人奖”',
      evaluate1: '她擅演大家闺秀，唱腔婉转回荡，吐字清晰，运气自然、运腔委婉流畅、刚柔相济。韵味浓郁。好听易学。念白讲究抑扬顿挫，富有音乐性。她也擅长青衣，表演细腻隽永，善于刻划人物的内在感情，在舞台上塑造过不少性格迥异、各具魅力的古代妇女的艺术典型，也扮演过不同时期的现代妇女形象。（上海音乐出版社评）',
      evaluate2: '《碧玉簪》是越剧骨子老戏，其中的“三盖衣”是核心唱段。这段长达70句的大型唱段，以迟缓的[尺调腔·慢板]开头，后转入速度稍快的[中板]，又加入[男调板]，中间用叠句唱法描述紧张胆怯的情绪；第三次盖衣时，人物内心冲突达到高潮，在一声凄切的哭腔后，转入对定亲回忆的叙述性[清板]；到打四更时则转入急切的[嚣板]，最后一句以传统的[清板]落调结束。整段唱由慢而快，由快转散，生动刻划了李秀英善良的性格，有较强的艺术感染力。（中国网评）',
      image: 'https://bkimg.cdn.bcebos.com/pic/10dfa9ec8a136327c0e789e49a8fa0ec09fac7db?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image1: 'https://bkimg.cdn.bcebos.com/pic/c9fcc3cec3fdfc03c091acc1d43f8794a5c226d9?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image2: 'https://bkimg.cdn.bcebos.com/pic/a5c27d1ed21b0ef44101d727ddc451da80cb3ed9?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      image3: 'https://bkimg.cdn.bcebos.com/pic/55e736d12f2eb9389284358bd5628535e4dd6fd9?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
      image4: 'https://bkimg.cdn.bcebos.com/pic/58ee3d6d55fbb2fb68e1666e4f4a20a44723dc87?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" title="金采风" />
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