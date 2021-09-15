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
                title: '情探',
                author:
                    '王玉峰',
                year: '明代',
                int1: '落第举子王魁，为贫寒所迫，流落山东莱阳，在海神庙前与名妓殷桂英相遇。桂英爱其才貌双全，将他领回妓院，结为夫妻，并以私蓄相助其攻读诗书。',
                int2: '两年后，王魁赴京赶考，与桂英盟于海神庙，相约永不变心。临别桂英剪下青丝一缕赠王魁，并嘱咐切莫丢失定情信物玉扇坠。王魁得中状元，韩丞相欲招赘为婿，王魁贪图权势名利、荣华富贵，终于弃了桂英，又以玉扇坠为聘礼，变心另娶丞相之女为妻。',
                int3: '桂英自送别王魁后，思念之心日切。一天，正与王魁裁衣，忽见老家人前来报喜，说王魁已中状元，并带来信一封、银子200两。桂英拆读来信，竟是休书，于是她奔至海神庙，哭诉王魁罪状，之后自缢身死。',
                int4: '判官与小鬼奉海神爷之命，引桂英鬼魂进京与王魁对证。桂英决定以“情”试探。不料王魁忘恩负义，见了桂英，初则驱逐，后拔剑刺杀。桂英盛怒之下，与判官小鬼活捉了王魁。',
                text1:
                    '1950年代初，范瑞娟等人演出《情探》，范瑞娟饰演王魁，并留存录音。',
                text2:
                    '1957年10月28日，首演于大众剧场。该剧为上海越剧院保留剧目，傅全香代表作之一。她在"阳告"、"行路"、"情探"等场戏中，学习、借鉴了川剧、昆剧的表演技艺。在"行路"的戏里，运用四尺长袖，边歌边舞，表现出敫桂英美丽动人的鬼魂形象。其中一段〔弦下调〕唱腔，声情并茂，宣泄出人物满腔哀怨、悲伤之情，成了傅派唱腔的精品。《行路》、《阳告》两场戏，常作为两个优秀折子戏演出和教学之用。',
                text3: '1958年初，傅全香陆锦花灌录该剧“送别”、“阳告”、“行路”粗纹唱片8面，同年4月，由江南电影制片厂拍成电影。',
                text4: '上海越剧院于1960年、1980年、1985年、1986年，四度赴香港演出，都曾携带《行路》和《阳告》。这两折戏的剧本，已由香港万里书店编入《越剧精华》第一集出版，剧中精彩唱腔已由音像出版单位制成唱片和音带发行。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fb3e2cd5d63959ce3ae078df4d3b2f5981ed6cf39.png&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633525052&t=e27e498d75eb8d6b32916df7df966ba0',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171113%2F460c7789d58d483a86590433aae8619b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633525074&t=56671c544d547b83e99b293ed87e9417'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="情探" />
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
                    <View style={styles.line}></View>
                    <Text style={styles.title}>
                        &emsp;&emsp;作者：{this.state.dramalist[0].author}
                    </Text>
                    <Text style={styles.title}>
                        &emsp;&emsp;创作年代：{this.state.dramalist[0].year}
                    </Text>
                    <View>
                        <Text style={styles.text}>剧情简介</Text>
                        <View style={styles.line}></View>
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
                        <View style={styles.line}></View>
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
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <View style={styles.line}></View>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly14', {
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
        alignSelf: 'center'
    },
    book: {
        height: pxToDp(100),
        borderRadius: pxToDp(8),
        marginBottom: pxToDp(50)
    },
    line: {
        alignSelf: 'center',
        height: pxToDp(5),
        width: pxToDp(100),
        backgroundColor: '#62bfad',
        marginTop: pxToDp(4)
    }
});
export default Index;