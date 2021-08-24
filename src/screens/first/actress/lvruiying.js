import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
    state = {
        person: {
            name: '吕瑞英',
            place: '上海',
            birth: '1933年1月19日',
            death: '无',
            genre: '吕派',
            job: '花旦',
            work: '《打金枝》《西厢记》《凄凉辽宫月》',
            success: '中国戏剧家协会理事，上海戏剧家协会副主席',
            evaluate1: '创造一个流派是难能可贵的，而创造生动的人物形象更是演员的天职。在这两者之间如何平衡，如何取舍，吕瑞英作出了榜样，她给后人的启示，也许就在于此。（上海《文汇报》评',
            evaluate2: '吕瑞英坚持：“唱腔代表人物的语言，不同的人物，不可能说一样的话。唱腔是否符合人物性格、是否好听，这是我可以左右的；至于好不好学，能不能学，我无法左右。”在这个问题上，被人议论多了，吕瑞英发下狠话：“我只想着创造人物，从不想要刻意去创造流派。如果为了形成我的流派，而要我去反复唱一些容易让人辨认的固定唱腔，我不愿意。如果因此要我改变自己的艺术追求，我宁可让这个流派断子绝孙。”（张裕评）',
            image: 'https://bkimg.cdn.bcebos.com/pic/b90e7bec54e736d12cd0c56c99504fc2d4626996?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image1: 'https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266d0a7d576ab18972bd50736c7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image2: 'https://bkimg.cdn.bcebos.com/pic/aec379310a55b319f4756b1743a98226cefc17c7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image3: 'https://bkimg.cdn.bcebos.com/pic/0b55b319ebc4b74562185e74cffc1e178b8215c7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image4: 'https://bkimg.cdn.bcebos.com/pic/ac6eddc451da81cbc4056aaf5266d016082431f5?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Top icon1="arrow-back" title="吕瑞英" />
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