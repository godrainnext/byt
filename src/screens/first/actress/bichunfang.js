import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
    state = {
        person: {
            name: '毕春芳',
            place: '浙江鄞县',
            birth: '1927年7月14日',
            death: '2016年8月14日',
            genre: '毕派',
            job: '小生',
            work: '《王老虎抢亲》《血手印》《光绪皇帝》',
            success: '中国戏剧家协会会员，越剧流派毕派创始人',
            evaluate1: '老师为人很和蔼。她给我上的第一门课就是作为以后演员，要耐得住清贫。（李旭丹评）',
            evaluate2: '她所创的毕派艺术表演飘逸潇洒、松弛自然，唱腔明朗豪放、流畅自如，在越剧界独具一格。有的专家认为，自从毕春芳主演了《王老虎抢亲》之后，越剧显得别开生面，喜剧在越剧剧目中得到彰显，成为以后越剧表演艺术的发展的一个拓展标志。（王虹评）',
            image: 'https://bkimg.cdn.bcebos.com/pic/21a4462309f79052e20ac98204f3d7ca7bcbd571?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image1: 'https://bkimg.cdn.bcebos.com/pic/024f78f0f736afc3b2f62719b319ebc4b64512d7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image2: 'https://bkimg.cdn.bcebos.com/pic/b219ebc4b74543a953e1e2b01e178a82b80114d7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5/format,f_auto',
            image3: 'https://bkimg.cdn.bcebos.com/pic/1b4c510fd9f9d72ab75d5d0dd42a2834349bbbe1?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image4: 'https://bkimg.cdn.bcebos.com/pic/a6efce1b9d16fdfafe8bcf61b68f8c5495ee7b5d?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Top icon1="arrow-back" title="毕春芳" />
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