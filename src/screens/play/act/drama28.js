import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Svg from 'react-native-svg-uri';
import { right } from '../../../component/common/iconSvg';
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dramalist: [{
                title: '盘夫索夫',
                author:
                    '暂无',
                year: '暂无',
                int1: '曾荣因父亲被奸相严嵩陷害，逃奔在外，由严党鄢茂卿收为义子，并与严嵩之孙女兰贞结为夫妇，婚后，兰贞见曾荣不与其亲近，十分怨恨，待等盘明曾荣身世，便深明大义，力图救夫。',
                int2: '其后，兰贞母亲寿诞之日，曾荣到严府祝贺，乘机闯入机密重地，想找到严嵩罪证；不料归路披阻，幸被婢女引入严党赵文华之女婉贞书楼，才保安全。',
                int3: '入夜，兰贞不见曾荣，恐遭不测，便前来娘家索夫，言语不合，引起争吵。婉贞获悉，告以实情，并引曾荣出见。最后兰贞令赵文华立下伏辨才罢。',
                text1:
                    '越剧《十美图》于1918年6月14日，由男班费翠棠、王永春、马潮水、马阿顺等上演于上海华兴戏园。后为绍兴文戏时期男、女班的常演剧目，有“骨子老戏”之称。',
                text2:
                    '1941年12月19日，徐玉兰在上海老闸戏院与施银花搭档正式挂牌改演当头肩小生,与三大名旦之一的施银花首演《盘夫索夫》，一举获得成功。',
                text3: '这个整理本已经成为上海越剧院的保留剧目之一。著名越剧演员袁雪芬、范瑞娟、傅全香、徐玉兰、王文娟、陆锦花、金采风等都演过这出戏。',
                text4: '1954年10月，由黄沙导演，苏石风美术设计，薛传钢舞蹈指导，金采风饰严兰贞，陆锦花饰曾荣，任棣华饰严世藩，朱东韵饰赵婉贞，冯笑侬饰赵文华，演出该剧于长江剧场，获华东区戏曲会演演出奖，金采风获表演一等奖，陆锦花获表演二等奖。该剧沿袭传统的表演形式，人物登场仍用上场引子、定场诗、自报家门一套，唱腔全部采用[四工调]，旦角化装采用大包头贴水片，舞台装置在“守旧”基础上稍加装饰。',
                text5: '1954年，由姚水娟口述金松整理的《盘夫》一折，由浙江越剧团先参加浙江省首届戏曲会演，姚水娟饰严兰贞、陈佩卿饰曾荣皆获演员一等奖，胡汝慧获导演奖。后参加华东区戏曲会演，姚水娟获演员一等奖，陈佩卿获演员二等奖。后整理全剧演出，屠笑飞饰演的赵文华极受称赞。此本与上越改本，为各越剧团采用演出。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload2007.cnool.net%2Ffiles2010%2F20120412%2F20120412000743875.jpg&refer=http%3A%2F%2Fupload2007.cnool.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633535203&t=03decc84d3bb160f9fd4ad7015fde400',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload2007.cnool.net%2Ffiles2010%2F20120412%2F20120412000630687.jpg&refer=http%3A%2F%2Fupload2007.cnool.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633535239&t=dade67424c4094e0ae4992c8eb1c5426'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="" />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        flex: 1
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <Image
                        style={{
                            height: pxToDp(180),
                            borderRadius: pxToDp(8),
                            marginLeft: pxToDp(16),
                            marginRight: pxToDp(16),
                            marginTop: pxToDp(8)
                        }}
                        source={{ uri: this.state.dramalist[0].path1 }}
                    />
                    <Text style={styles.text}>
                        {this.state.dramalist[0].title}
                    </Text>
                    <Text style={styles.title}>
                        &emsp;&emsp;作者：{this.state.dramalist[0].author}
                    </Text>
                    <Text style={styles.title}>
                        &emsp;&emsp;创作年代：{this.state.dramalist[0].year}
                    </Text>
                    <View>
                        <Text style={styles.text}>剧情简介</Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int1}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int2}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int3}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>演出历史</Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text1}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text2}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text3}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text4}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text5}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly20', {
                                ...this.state.dramalist,
                                title: this.state.dramalist[0].title
                            }
                            )}
                        >
                            <Image
                                style={{
                                    height: pxToDp(100),
                                    borderRadius: pxToDp(8),
                                    marginLeft: pxToDp(16),
                                    marginRight: pxToDp(16),
                                    marginTop: pxToDp(24)
                                }}
                                source={{ uri: this.state.dramalist[0].path2 }}
                            />
                            <View style={{ marginTop: pxToDp(-60), marginLeft: pxToDp(300) }}>
                                <Svg width="32" height="32" svgXmlData={right} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: pxToDp(16),
        lineHeight: pxToDp(24),
        color: '#333333',
        marginTop: pxToDp(16),
        marginLeft: pxToDp(16),
        marginRight: pxToDp(16)
    },
    text: {
        fontSize: pxToDp(18),
        color: '#000000',
        fontWeight: 'bold',
        marginTop: pxToDp(24),
        marginLeft: pxToDp(16)
    },
    book: {
        height: pxToDp(100),
        borderRadius: pxToDp(8),
        marginBottom: pxToDp(50)
    }
});
export default Index;

