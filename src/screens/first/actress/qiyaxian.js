import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
    state = {
        person: {
            name: '戚雅仙',
            place: '浙江余姚',
            birth: '1928年2月',
            death: '2003年1月27日',
            genre: '戚派',
            job: '花旦',
            work: '《玉堂春》《蔡文姬》',
            success: '上海合作越剧团、上海静安越剧团团长，中国剧协第三、四届理事',
            evaluate1: '“戚派”的表演和唱腔朴实、真挚、深沉，初听似乎平淡，却在单调中有韵味，在朴实中寓深情。特别是她的“慢清板”，长长的一大段，句句含情，丝丝入扣，在表现中国古代妇女善良温柔的性格和缠绵、悲愤等情绪方面特别感人肺腑，如玉堂春落难遇夫、王千金法场祭夫、赵五娘千里寻夫等，令观众回味无穷。（越韵华章评）',
            evaluate2: '“四人帮”被粉碎之后，戚雅仙以满腔热情重新打开了被禁锢12年的歌喉。1979年，她和舞台老伙伴毕春芳再度携手合作，重建了静安越剧团，演出了她们的保留剧目《楼台会》《血手印》等，风采不减当年，受到上海观众的热烈欢迎。这一年，已53岁的她挑起了剧团团长的重担，正如戏剧故事里的穆桂英53岁挂帅再出征一样。（上海音乐出版社评）',
            image: 'https://bkimg.cdn.bcebos.com/pic/bf096b63f6246b60a68511d7e3f81a4c500fa28e?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image1: 'https://bkimg.cdn.bcebos.com/pic/b3b7d0a20cf431ade54f326a4b36acaf2fdd98c7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image2: 'https://bkimg.cdn.bcebos.com/pic/b8014a90f603738d6d737b5eb31bb051f819ec95?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image3: 'https://bkimg.cdn.bcebos.com/pic/4e4a20a4462309f76a28da6e720e0cf3d7cad603?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5/format,f_auto',
            image4: 'https://bkimg.cdn.bcebos.com/pic/e61190ef76c6a7ef20420335fdfaaf51f3de66b9?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Top icon1="arrow-back" title="戚雅仙" />
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