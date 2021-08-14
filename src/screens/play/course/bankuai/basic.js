import React, { PureComponent } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Top from '../../../../component/common/top';
import { pxToDp } from "../../../../utils/styleKits";

class Index extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: '#ECF6FC', flex: 1 }}>
                <Top icon1="arrow-back" title="越剧基本功" />
                <ScrollView style={{ marginLeft: pxToDp(10), marginRight: pxToDp(10) }} >
                    {/*形体训练 */}
                    <View>
                        <Text style={styles.title}>形体训练</Text>
                        <Text style={styles.text}>形体训练从站法、手法、腿功、腰功开始，属共同训练项目。</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <View style={styles.box}>
                                <Image style={styles.image} source={require('../../../../res/31.jpg')} />
                                <Text style={styles.head}>【越剧基本功】手的造型</Text>
                                <Text style={styles.head}>裘鑫琴</Text>
                            </View>
                            <View style={styles.box}>
                                <Image style={styles.image} source={require('../../../../res/32.jpg')} />
                                <Text style={styles.head}>【越剧基本功】臂膀训练</Text>
                                <Text style={styles.head}>裘鑫琴</Text>
                            </View>
                            <View style={styles.box}>
                                <Image style={styles.image} source={require('../../../../res/16.jpg')} />
                                <Text style={styles.head}>【越剧基本功】脚位</Text>
                                <Text style={styles.head}>裘鑫琴</Text>
                            </View>
                            <View style={styles.box}>
                                <Image style={styles.image} source={require('../../../../res/33.jpg')} />
                                <Text style={styles.head}>【越剧基本功】身段组合</Text>
                                <Text style={styles.head}>裘鑫琴</Text>
                            </View>
                        </View>
                    </View>
                    {/*练嗓子 */}
                    <Text style={styles.title}>练嗓子</Text>
                    <Text style={styles.text}>尺调弦下哀婉情，起调拖腔意无穷。</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/19-1.jpg')} />
                            <Text style={styles.head}>学唱越剧前的开嗓训练</Text>
                            <Text style={styles.head}>演艺培训</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/19-2.jpg')} />
                            <Text style={styles.head}>越剧的正确发声方法</Text>
                            <Text style={styles.head}>跟我学唱</Text>
                        </View>
                    </View>
                    {/*练台步 */}
                    <Text style={styles.title}>练台步</Text>
                    <Text style={styles.text}>手为势，身为主，步为根，缺一不可。基本的步法有快步、慢步、便步、蹉步、跪步、云步、醉步、腾步、踮步等。</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/14.jpg')} />
                            <Text style={styles.head}>花旦台步训练</Text>
                            <Text style={styles.head}>越剧之家</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/15.jpg')} />
                            <Text style={styles.head}>小生台步训练</Text>
                            <Text style={styles.head}>越剧之家</Text>
                        </View>
                    </View>
                    {/*水袖功 */}
                    <Text style={styles.title}>水袖功</Text>
                    <Text style={styles.text}>为传统剧中穿长服宽袖（如蟒、帔、褶子等）服装的男女角色使用的表演程式。根据不同角色、不同性别、不同行当各有不同。</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/7.jpg')} />
                            <Text style={styles.head}>【越剧基本功】旦角水袖</Text>
                            <Text style={styles.head}>裘鑫琴</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/8.jpg')} />
                            <Text style={styles.head}>【越剧基本功】长水袖</Text>
                            <Text style={styles.head}>裘鑫琴</Text>
                        </View>
                    </View>
                    {/*扇子功 */}
                    <Text style={styles.title}>扇子功</Text>
                    <Text style={styles.text}>越剧传统戏中常用的道具。小生常以扇子舞动衬托环境，表现人物情绪，体现儒雅风度。闺门旦以及黑髯老生也使用得较多，变化也比较丰富。</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/16.jpg')} />
                            <Text style={styles.head}>【越剧基本功】小生扇子</Text>
                            <Text style={styles.head}>裘鑫琴</Text>
                        </View>
                    </View>
                </ScrollView >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: pxToDp(18),
        color: '#468CD3',
        fontWeight: 'bold',
        marginTop: pxToDp(10)
    },
    text: {
        fontSize: pxToDp(14)
    },
    box: {
        height: pxToDp(143),
        width: pxToDp(170),
        borderRadius: pxToDp(10),
        backgroundColor: 'white',
        marginTop: pxToDp(10)
    },
    image: {
        height: pxToDp(100),
        width: pxToDp(170),
        borderTopLeftRadius: pxToDp(10),
        borderTopRightRadius: pxToDp(10)
    },
    head: {
        fontSize: pxToDp(14),
        marginLeft: pxToDp(5)
    }
})
export default Index;