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
                title: '浪荡子',
                author:
                    '徐进编剧',
                year: '1947年',
                int1: '青年教员金育青与李萍情投意合结为夫妇，后育青受纨绔子王波儿引诱蜕变，沉湎于荡妇杨柳丝的艳窟里，赌牌、酗酒、吸鸦片直到床头金尽，被一脚踢开。',
                int2: '此时，李萍为供养公公和抚养女儿小青，当了女佣。一天夜里，家中失火，育青拖着沉重的脚步归来，见在瓦砾堆中哭泣的小青，只好带她在芦苇棚内安家，靠拾垃圾、乞讨度日。',
                int3: '小青生病，育青为买药抢了一个从当铺中出来的女子的钱，不料她正是为给公公买药当掉衣服的李萍，育青羞愧无颜，徘徊在黄埔江边，回忆往事，悔恨交加，欲跳入江心自杀，巧遇朋友朱复华，引他走上正路。',
                text1:
                    '该剧1947年4月8日，芳华越剧团首演于上海九星大戏院。由严进导演、仲美舞美设计。尹桂芳 饰金育青，竺水招 饰李萍，余彩琴饰杨柳丝，焦月娥饰王波儿，赵雅麟饰朱复华，戚雅仙 饰花含英。该剧内容贴近现实，有鲜明的上海特色，演出说明中称“是剧能告诉我们的：是一个人在花花世界里被卷入堕落旋涡的过程”，“你们看了此剧感到有所警惕吗?”演出后反响强烈，连演1个月，每日两场，场场客满。',
                text2:
                    '剧中“叹钟点”一段唱，长达116句，但结构严谨、层次清晰，行腔间速度变化频繁，松紧有致、对比鲜明。演唱以[清板]为主，气口运用灵活多变，感情表现细腻，犹如同观众娓娓而谈。掼腔突破常规，上句不是像越剧常用的落在6上，而是通过6为装饰音巧妙地过渡到5，构成特殊的色彩和韵味，是尹派唱腔的代表作之一。',
                text3: '1947年，大中华唱片公司灌制了由尹桂芳和竺水招演唱的该唱段3张唱片。1979年在上海万人争看的尹派演唱会上，尹小芳演唱了长段“叹钟点”， 1981年，连波又对该唱段进行了修改。上海越剧院1982年排演此剧时，由徐进重新编剧，赵志刚主演，对“叹钟点”一段唱又作了加工。1992年，赵志刚将该段唱录制成越剧卡拉OK。',
                path1:
                    'https://img2.baidu.com/it/u=3557870824,2394787607&fm=26&fmt=auto&gp=0.jpg',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fr4.ykimg.com%2F05410408517CAB726A0A470A242D6DC1&refer=http%3A%2F%2Fr4.ykimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633538011&t=9bc7e540e19c0b4e4c5cdf56f2596ddf'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="浪荡子" />
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
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly25', {
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
        lineHeight: pxToDp(30),
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

