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
                title: '沉香扇',
                author:
                    '暂无',
                year: '1919年',
                int1: '兵部尚书千金蔡兰英在庙中与书生徐文秀一见钟情。兰英临走时失落沉香扇，为文秀所拾。文秀为物归原主，卖身为奴入蔡府。',
                int2: '不久，文秀与兰英再次相会，互盟终身，后文秀上京赴考，蔡夫人硬将兰英许配官家子昌义范，兰英女扮男装逃婚出走，被文秀舅父陆绍龙收为义子。',
                int3: '京试中文秀中状元、义范中榜眼、兰英中探花，蔡兵部又将女儿许给探花，从而造成“三元夺妻”的局面。',
                int4: '文秀与兰英在书房相会后，得陆绍龙之助，为兰英解除了父母做主的婚姻，玉成文秀与兰英的姻缘。一代佳话流传于世。',
                text1:
                    '1919年2月27日，男班王永春、白玉梅戏班首演于闸北第一戏院。',
                text2:
                    '解放后，不少剧团整理演出。上海越剧院于1960年1月演出，剧本由金艳芳、吕瑞英、张桂凤、陈少春整理，石景山导演。是年6月16日，该剧在锦江饭店小礼堂为董必武、陈毅等作招待演出，由朱东韵、陈少春、张桂凤主演。',
                text3: '1939年，丽歌唱片公司灌制由姚水娟、竺素娥演唱的《书房会》唱片。1961年，中国唱片社灌制由陈少春、朱东韵演唱的《沉香扇》唱片。1986年，中国唱片上海公司灌制了筱月英演唱的《沉香扇》唱片。',
                path1:
                    'https://img1.baidu.com/it/u=3348469471,264037698&fm=26&fmt=auto&gp=0.jpg',
                path2:
                    'https://img0.baidu.com/it/u=569906552,3655858351&fm=26&fmt=auto&gp=0.jpg'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="沉香扇" />
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
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <View style={styles.line}></View>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly24', {
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