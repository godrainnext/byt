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
                title: '沙漠王子',
                author:
                    '取材于《天方夜谭》中的《越光宝盒》',
                year: '1946年',
                int1: '蒙古西萨部落年甫一岁的王子罗兰，因父王被反叛的酋长安达杀害，流亡沙漠。',
                int2: '十余年后，罗兰邂逅沙龙酋长的公主伊丽，二人一见倾心，相约一年后重聚。一年后，罗兰赴约，知公主已被安达抢去，乃乔装入宫与公主相会。安达作妖术使王子双目失明，公主身藏王子世传玉佩逃离。',
                int3: '后王子得沙龙相助，起兵复国杀安达。因思念公主，遂弃王位，乔装算命人抱古琴四处寻访。伊丽此时已留居霍逊酋长营中，一日闻琴，遂召进帐中，算命间认出王子，喜极而拥吻之，王子复得玉佩双目复明，二人团圆。',
                text1:
                    '全剧共分四幕，民国三十五年（即1946年）2月1日(农历正月初一)芳华越剧团首演于九星大戏院。剧中“算命”一段唱，行腔自然，随人物情绪的进展起伏跌宕，它从【尺调腔】的【慢板】开始，经【缓中板】再转为【慢中板】、【快中板】、【连板】、【散板】、【慢中板】，疾徐错落，层次分明，拖腔、落腔典型地体现了“尹派”的特点，深受听众喜爱，广为流传。民国三十五年曾由百代唱片公司灌制成唱片。1981年尹佳芳在作曲家连波的协助下，又对这段唱作了修改加工，由中国唱片社重新灌制唱片。',
                text2:
                    '1986年尹派演唱会上，尹桂芳，傅全香，李金凤，尹小芳，张效芳，茅威涛，王君安，五代同唱沙漠王子·算命片段。',
                text3: '1987年，上海电视台将该剧摄制成戏曲艺术片，陈曼等编剧，赵慧娟导演，赵志刚主演沙漠王子罗兰，周晓芬演伊丽公主。史济华演安达，张承好演沙龙，许杰演霍逊，宓丰演逊杰。',
                text4:'1988年，福建省芳华越剧团重排《沙漠王子》，由王君安、张群力主演。2014年，福建省芳华越剧团再次复排《沙漠王子》，由徐伟钗、张倩倩等优秀青年演员担纲主演，并赴温州参加2014年第三届中国越剧节。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F0023TJcAty6PyzOduCx25%26690&refer=http%3A%2F%2Fs6.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633526534&t=4d8a48f4613799b4a753fa561d458567',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fvmsri%2Fscreenshot%2F343204949.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633678600&t=a9ed31c0316fcac98d6281bd262e8947'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="沙漠王子" />
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
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly15', {
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

