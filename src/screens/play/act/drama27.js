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
                title: '大观园',
                author:
                    '胡小孩根据《红楼梦》改编',
                year: '1983',
                int1: '写贵妃贾元春省亲，将省亲别墅赐名大观园，谕示贾宝玉与薛宝钗、林黛玉、探春、迎春、惜春诸姐妹入园居住，一时群芳荟萃，赏尽春花秋月。',
                int2: '然而好景不长，变故渐多，在大观园的盛衰荣枯中，展示了宝、黛、钗之间的爱情婚姻悲剧，青年女性们的种种不幸遭遇及悲惨结局，最后人亡、花谢、园冷、雪浓、风大、云沉，落了个白茫茫大地真干净。',
                int3: '戏共分九场，其次序为《元春省亲》、《群芳闹春》、《金钏跳井》、《送药赠帕》、《夜雨惊梦》、《宝玉悲秋》、《宝钗藏忧》、《黛玉断魂》、《真干净》。',
                int4: '这个戏力求体现“万艳同悲，千红一哭”的曹雪芹原作精神，既写贾宝玉、林黛玉、晴雯等叛逆封建礼教的不幸遭遇，也写了薛宝钗因顺从封建礼教而成牺牲品的不幸遭遇；既描绘了众多女性的悲剧痛苦，也描绘了贾宝玉总负荷了众多女性的悲剧痛苦，悲凉之雾笼罩着大观园，而呼吸领会之者，唯宝玉一人而已。',
                text1:
                    '1986年由浙江小百花越剧团首演，1987年参加浙江省第三届戏剧节获剧本二等奖。',
                text2:
                    '程维嘉、胡其娴、杨小青导演，胡梦桥、顾达昌作曲，罗志摩舞美设计。茅威涛饰贾宝玉、何赛飞饰林黛玉、何英饰薛宝钗、应惠珠饰元春、陶慧敏饰晴雯、周美姣饰袭人、陈辉玲饰紫鹃、俞会珍饰贾太君、王连琴饰贾政、洪瑛饰王夫人、吴海丽饰王熙凤。',
                text3: '为该团赴香港、泰国等地演出剧目。剧本发表于1983年《戏文》。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180911%2Fd98a86cf5a174f54916847c375563027.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633534782&t=76f85dcb33f245790b6530be3b5ca39e',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs8.sinaimg.cn%2Fmw690%2F001A09gzzy7jOQzBUV137%26690&refer=http%3A%2F%2Fs8.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633534865&t=e4fe8f6820bdc6d18ea064daa8e178d5'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="大观园" />
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
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int4}
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
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly19', {
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

