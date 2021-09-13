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
                title: '忠魂曲',
                author:
                    '薛允璜、薛宝根、张森兴',
                year: '1977年',
                int1: '1931年，毛泽东在井冈山粉碎了蒋介石的第二次“围剿”，蒋介石恼羞成怒，命令湖南省军阀何健秘密逮捕了毛泽东的夫人杨开慧。',
                int2: '在国民党湖南省陆军监狱里，杨开慧度过了她生命的最后22天，她在监狱里经受了敌人的严刑拷打、威逼利诱、挑拨离间的考验，用生命坚守了一个共产党员的信仰和对毛泽东矢志不渝、坚贞不渝的爱情。',
                text1:
                    '上海越剧院1977年10月首演于中国剧场。导演黄沙、张森兴，编曲苏进邹、杜春阳、陈钧、李子川，舞美设计苏石凤、杨楚之、王强华，灯光设计明道宣、周银根，服装、化装、造型设计陈利华。王文娟饰杨开慧，张国华饰毛委员，范瑞娟饰杨母，徐玉兰饰赵阿婆，傅全香饰孙嫂，丁沙生饰何键，杨同时饰梁正熙，李秉衡饰张老先生，王正伟饰毛岸英。',
                text2:
                    '该剧以对敌斗争为主线、党内两条路线斗争为副线，第一次在越剧舞台上出现革命领袖毛泽东的艺术形象。由于当时有戏曲演领袖人物不能唱的规定，因此在戏中毛泽东只有念白(念湖南语音)没有安排唱。',
                text3: '剧中《洒泪缝衣》、《送百家饭》、《狱中示儿》等场戏，发挥了越剧细腻抒情的特点，感人肺腑，催人泪下。该剧获上海市文化局1976年—1979年创作演出奖。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.uczzd.cn%2F16390597171191541681.jpg%3Fid%3D0&refer=http%3A%2F%2Fimage.uczzd.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633678026&t=fc46fa6f45d13b58cf50c8239f64e9b9',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic5.997788.com%2Fpic_search%2F00%2F13%2F13%2F26%2Fse13132658.jpg&refer=http%3A%2F%2Fpic5.997788.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633522630&t=257ee89118c232a202649cba7dc5e510'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="忠魂曲" />
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
                            onPress={() => this.context.navigate('Screenpaly12', {
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

