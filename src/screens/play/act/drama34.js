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
                title: '张羽煮海',
                author:
                    '陈曼编剧',
                year: '1983年',
                int1: '秀才张羽借寓于东海岸边石佛寺中。一日，他的琴声引来了东海龙宫的琼莲公主，两人志趣相投，琼莲临别相赠龙宫之宝鲛鮹帕，暗许婚姻，并相约八月十五在海边相见。',
                int2: '谁知琼莲为拒天龙之婚，被龙王关入鲛人洞中受苦，张羽闻报借助鲛鮹帕闯入龙宫求见，反遭天龙之辱，被绑在鲛人洞外化成礁石。',
                int3: '琼莲得讯舍出颌下骊珠救张羽出龙宫，张羽生还人间，并得龙母指点至蓬莱岛求仙相助。蓬莱仙姑赠他三件法宝，在沙门岛煮海，烧死天龙，降服龙王，最终成全了张羽和琼莲的美好心愿。张羽与龙女喜结良缘，夫妻二人拜谢着赤松子师徒。',
                text1:
                    '20世纪50年代，上海春光越剧团曾演出此剧，由尹树春、李慧琴、田振芳主演。',
                text2:
                    '该剧1983年7月4日，虹口越剧团首演于上海北京影剧院(美琪大戏院)。艺术顾问尹桂芳，艺术指导郑传鉴，徐为导演，连波作曲，陈必华舞美设计，金长烈灯光设计，孙志贤服装设计。尹小芳饰张羽，张蓓丽饰琼莲，程心如饰碧莲，李青君饰龙王，刘亚琴饰天龙，刘素素饰龟相。',
                text3: '该剧的神话故事美丽动人，布景灯光具有神奇变幻的特色。“龙宫”一场布景制成模型，参加了’89上海国际舞台美术展。全剧由上海电视台摄成录像多次播放。中国唱片上海公司录制音带1盒和灌成唱片1张。杭州西泠印社印成彩色年画16幅，向全国发行。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.xijucn.com%2Fupimg%2Fuserup%2F1603%2F2515241M138.jpg&refer=http%3A%2F%2Fm.xijucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633538320&t=73126027df35451663d1ec823a1fdf01',
                path2:
                    'https://img2.baidu.com/it/u=716431643,1784592489&fm=15&fmt=auto&gp=0.jpg'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="张羽煮海" />
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
                            onPress={() => this.context.navigate('Screenpaly26', {
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

