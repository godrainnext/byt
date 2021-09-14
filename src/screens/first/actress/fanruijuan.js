import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
    state = {
        person: {
            name: '范瑞娟',
            place: '浙江绍兴',
            birth: '1924年1月6日',
            death: '2017年2月17日',
            genre: '范派',
            job: '小生',
            work: '《梁山伯与祝英台》《孔雀东南飞》',
            success: '第一届演员一等奖，首届“金唱片奖”',
            evaluate1: '在唱腔和表演上，继承了越剧前辈小生竺素娥的朴实的风格，并博采众长，尤其是学习京剧马连良、高庆奎的运腔特色和唱腔因素，融化于自己唱腔之中。她能自如地运用丹田之气和头腔共鸣相结合的发声方法，中低音厚实，高音响亮有力，使唱腔凝重大方，富有阳刚之美。（中国中央电视台官网）',
            evaluate2: '眼前就是旧时景，回忆往事却无法喜又惊。袁雪芬范瑞娟这一辈的大师，“到今夕，今夕人儿已难觅”，如果她们的贡献，无论是内容与形式，也是“到今夕，今夕唯有空成迹”，也不知道越剧如何千丝万缕，万缕千丝把她的观众系。不过也不好说，人事有代谢，娱乐形式乃至审美趣味也有代谢。（解三酲评）',
            image: 'https://bkimg.cdn.bcebos.com/pic/2cf5e0fe9925bc31f68cd77353df8db1ca13700c?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
            image1: 'https://bkimg.cdn.bcebos.com/pic/8326cffc1e178a8291019dbff503738da977e8f4?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image2: 'https://bkimg.cdn.bcebos.com/pic/8644ebf81a4c510f2e5b98b96759252dd52aa5f2?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image3: 'https://bkimg.cdn.bcebos.com/pic/3b87e950352ac65c00a9030ffbf2b21193138a19?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image4: 'https://bkimg.cdn.bcebos.com/pic/2934349b033b5bb5cf7b458236d3d539b600bc19?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
        }
    }
    render() {
        return (
          <View style={{ flex: 1 }}>
            <Top icon1="arrow-back" title="范瑞娟" />
            <ScrollView showsVerticalScrollIndicator={false}>
              {/*基本信息 */}
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  padding: pxToDp(16),
                  paddingBottom: 0
                }}
              >
                <Text style={styles.title}>基本信息</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <View style={{ width: '65%' }}>
                    <Text style={styles.text}>
                      姓名：{this.state.person.name}
                    </Text>
                    <Text style={styles.text}>
                      籍贯：{this.state.person.place}
                    </Text>
                    <Text style={styles.text}>
                      出生日期：{this.state.person.birth}
                    </Text>
                    <Text style={styles.text}>
                      逝世日期：{this.state.person.death}
                    </Text>
                    <Text style={styles.text}>
                      流派：{this.state.person.genre}
                    </Text>
                    <Text style={styles.text}>
                      行当：{this.state.person.job}
                    </Text>
                    <Text style={styles.text}>
                      代表作品：{this.state.person.work}
                    </Text>
                  </View>
                  <Image
                    style={{
                      height: pxToDp(168),
                      width: pxToDp(120),
                      borderRadius: pxToDp(8)
                    }}
                    source={{ uri: this.state.person.image }}
                  />
                </View>
                <Text style={styles.text}>
                  主要成就：{this.state.person.success}
                </Text>
                {/**人物评价 */}
                <View style={{ marginTop: pxToDp(12) }}>
                  <Text style={styles.title}>人物评价</Text>
                  <Text style={styles.text}>{this.state.person.evaluate1}</Text>
                  <Text style={styles.text}>{this.state.person.evaluate2}</Text>
                </View>
                {/**图片 */}
                <View
                  style={{ marginTop: pxToDp(12), marginBottom: pxToDp(16) }}
                >
                  <Text style={styles.title}>人物图集</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={{ uri: this.state.person.image1 }}
                    />
                    <Image
                      style={styles.image}
                      source={{ uri: this.state.person.image2 }}
                    />
                    <Image
                      style={styles.image}
                      source={{ uri: this.state.person.image3 }}
                    />
                    <Image
                      style={styles.image}
                      source={{ uri: this.state.person.image4 }}
                    />
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
        lineHeight: pxToDp(30),
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