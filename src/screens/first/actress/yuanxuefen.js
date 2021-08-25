import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
    state = {
        person: {
            name: '袁雪芬',
            place: '浙江嵊县',
            birth: '1922年3月26日',
            death: '2011年2月19日',
            genre: '袁派',
            job: '青衣、闺门旦',
            work: '《祥林嫂》《梅花魂》《双烈记》',
            success: '首届中国戏剧奖“终身成就奖”，第一届中国金唱片奖',
            evaluate1: '袁雪芬率先发起越剧改革，体现了她坚持创新、不畏艰难的性格和勇气，这种勇气是袁雪芬出于对越剧事业的责任心和文化历史使命。“清清白白做人，认认真真演戏”是袁雪芬一生的朴素箴言，她在成就面前从不骄傲，遇到不幸更不后退。她从不拉帮结派、虚假团结，更不勾心斗角、排斥异已。她在性格上、工作中以及表演艺术方面不是没有缺点，但她一生正直无私、光明磊落。（中国戏剧家协会原副主席刘厚生评）',
            evaluate2: '袁雪芬不仅是一位杰出的艺术家，也是一位优秀戏剧表演团体的管理者，同时还是一位具有广泛社会影响力的戏剧活动家。她是上海戏剧界的一面旗帜，是中国戏剧界的骄傲。（中国戏剧家协会主席尚长荣评）',
            image: 'https://bkimg.cdn.bcebos.com/pic/0823dd54564e9258faa3c4ae9e82d158cdbf4ede?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
            image1: 'https://bkimg.cdn.bcebos.com/pic/bf096b63f6246b603495862ee4f81a4c500fa2d4?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
            image2: 'https://bkimg.cdn.bcebos.com/pic/30adcbef76094b36c90a2fb7accc7cd98c109dcb?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
            image3: 'https://bkimg.cdn.bcebos.com/pic/d788d43f8794a4c239725f520ef41bd5ad6e3971?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            image4: 'https://bkimg.cdn.bcebos.com/pic/e61190ef76c6a7efd868ee28fefaaf51f3de6675?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Top icon1="arrow-back" title="袁雪芬" />
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