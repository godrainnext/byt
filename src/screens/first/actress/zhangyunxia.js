import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
    state = {
        person: {
            name: '张云霞',
            place: '上海',
            birth: '1926年7月',
            death: '2004年4月18日',
            genre: '张派',
            job: '花旦',
            work: '《游龙戏凤》《金殿让子》《相思曲》',
            success: '中国剧协上海分会常务理事，卢湾越剧团名誉团长',
            evaluate1: '张云霞的唱腔别具一格、委婉细腻。初宗“袁派”，后兼蓄并收。戏路宽广、表演细腻、唱腔华美，塑造了大批传统剧和现代剧中性格迥异的人物形象。（上海音乐出版社评）',
            evaluate2: '张云霞擅演花旦，也擅演青衣、刀马旦、闺门旦，对同一行当的不同人物，她根据各自的性格赋予不同的音乐形象。如《李翠英告状》中李翠英的唱腔音调爽朗流畅，强调其性格泼辣的一面；《春草闯堂》中春草的唱腔则多运用婉转圆滑的小腔以表现其活泼俏皮的性格。（上海音乐出版社评）',
            image: 'https://bkimg.cdn.bcebos.com/pic/b3b7d0a20cf431adeb6f31f54036acaf2fdd98b8?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image1: 'https://bkimg.cdn.bcebos.com/pic/3b292df5e0fe992507878f703fa85edf8db17103?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
            image2: 'https://bkimg.cdn.bcebos.com/pic/9d82d158ccbf6c811d1214efbc3eb13533fa408b?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image3: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F5963855249%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632356687&t=25471599b320d57eb2dac1e0099fe5ad',
            image4: 'http://t14.baidu.com/it/u=1326165658,3143248406&fm=224&app=112&f=JPEG?w=500&h=500&s=FD02EF1715047EEC89F0E4640300E07A',
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Top icon1="arrow-back" title="张云霞" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/*基本信息 */}
                    <View style={{ flex: 1, backgroundColor: 'white', padding: pxToDp(16), paddingBottom: 0 }}>
                        <View>
                            <Text style={styles.title}>基本信息</Text>
                            <View style={{ height: pxToDp(20), width: pxToDp(342), backgroundColor: '#D5E8E6', marginTop: pxToDp(-16), flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ width: pxToDp(32), height: pxToDp(8), backgroundColor: 'white', borderRadius: pxToDp(4), marginTop: pxToDp(7), marginRight: pxToDp(16) }}></View>
                                <View style={{ width: pxToDp(8), height: pxToDp(8), backgroundColor: 'white', borderRadius: pxToDp(4), marginTop: pxToDp(7), marginRight: pxToDp(16) }}></View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: pxToDp(10) }}>
                            <View style={{ width: '65%' }}>
                                <Text style={styles.text}>姓名：{this.state.person.name}</Text>
                                <Text style={styles.text}>籍贯：{this.state.person.place}</Text>
                                <Text style={styles.text}>出生日期：{this.state.person.birth}</Text>
                                <Text style={styles.text}>逝世日期：{this.state.person.death}</Text>
                                <Text style={styles.text}>流派：{this.state.person.genre}</Text>
                                <Text style={styles.text}>行当：{this.state.person.job}</Text>
                            </View>
                            <Image style={{ height: pxToDp(168), width: pxToDp(120), borderRadius: pxToDp(8) }} source={{ uri: this.state.person.image }} />
                        </View>
                        <Text style={styles.text}>代表作品：{this.state.person.work}</Text>
                        <Text style={styles.text}>主要成就：{this.state.person.success}</Text>
                        {/**人物评价 */}
                        <View style={{ marginTop: pxToDp(12) }}>
                            <View>
                                <Text style={styles.title}>人物评价</Text>
                                <View style={{ height: pxToDp(20), width: pxToDp(342), backgroundColor: '#D5E8E6', marginTop: pxToDp(-16), flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <View style={{ width: pxToDp(32), height: pxToDp(8), backgroundColor: 'white', borderRadius: pxToDp(4), marginTop: pxToDp(7), marginRight: pxToDp(16) }}></View>
                                    <View style={{ width: pxToDp(8), height: pxToDp(8), backgroundColor: 'white', borderRadius: pxToDp(4), marginTop: pxToDp(7), marginRight: pxToDp(16) }}></View>
                                </View>
                            </View>
                            <Text style={styles.text}>{this.state.person.evaluate1}</Text>
                            <Text style={styles.text}>{this.state.person.evaluate2}</Text>
                        </View>
                        {/**图片 */}
                        <View style={{ marginTop: pxToDp(12), marginBottom: pxToDp(16) }}>
                            <View>
                                <Text style={styles.title}>人物图集</Text>
                                <View style={{ height: pxToDp(20), width: pxToDp(342), backgroundColor: '#D5E8E6', marginTop: pxToDp(-16), flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <View style={{ width: pxToDp(32), height: pxToDp(8), backgroundColor: 'white', borderRadius: pxToDp(4), marginTop: pxToDp(7), marginRight: pxToDp(16) }}></View>
                                    <View style={{ width: pxToDp(8), height: pxToDp(8), backgroundColor: 'white', borderRadius: pxToDp(4), marginTop: pxToDp(7), marginRight: pxToDp(16) }}></View>
                                </View>
                            </View>
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
        fontWeight: 'bold',
        marginLeft: pxToDp(16),
        zIndex: 9999
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