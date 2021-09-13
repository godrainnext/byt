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
                title: '西园记',
                author:
                    '吴炳',
                year: '明朝末期',
                int1: '襄阳才子张继华游学杭州。一日，偶游西园，行至红楼下，被一枝红梅砸中头顶。原来是西园主人赵礼的养女王玉真登西园红楼看望卧病的赵礼亲生女赵玉英小姐，见红梅绽，伸手折取，想借此安慰病中人，不料失手花落，刚巧打在张继华头上。张继华抬头看见玉真，误认为这是园主之女玉英有意借花传情以示爱慕，故喜心翻倒，想入非非。',
                int2: '不久，张继华得人引荐暂寓西园，却未能如愿再见佳人。一天，他闻知赵小姐染病在床，以为赵小姐是为他相思成疾，心中哀痛，跑去拜神求祷。回园时又遇玉真，以为是祷告灵验使得小姐康复，大喜。谁知转眼间即听园公说赵小姐刚刚病故，大吃一惊，认定方才看见的玉真身影是赵小姐的鬼魂。',
                int3: '玉真已被张继华的痴情感动，但权高势大的丁伯宁欲强行逼娶玉真，玉真不愿屈从，夜半来到书馆找张继华表明心迹。张继华认定心上人已死，正在馆中设位追悼亡灵，并准备返回襄阳，此时突然看见玉真，以为是赵小姐亡魂赴招，吓得张口结舌，浑身颤栗。',
                int4: '几天后，赵礼来访张继华，想成就他和玉真的姻缘，但张继华认定玉真是鬼，死死不肯应允。第二天，张继华启程回家，被热心的老秀才夏玉从路上追了回来，要给他和玉真办喜事。洞房花烛，张继华以为是与鬼成婚，吓得魂不附体。后在使女香筠的指点下，才恍然大悟，与心上人玉真结成美满姻缘。',
                text1:
                    '该剧是一出抒情喜剧，上海越剧院二团于1980年国庆节首演于北京影剧院。',
                text2:
                    '该剧通过误会巧合的情节产生喜剧效果。徐玉兰扮演的张继华，具有迂阔味和书呆气，表现出人物纯朴、憨厚、对爱情笃诚专一的性格。王文娟扮演的王玉真，外表端庄文静、柔顺矜持，内心爱憎分明、热情奔放，敢于冲破封建礼教，该剧屡演均满座。',
                text3: '1980年，由上海越剧院携该剧赴香港演出亦受好评。1982年，被上海电视台摄制成戏曲电视连续剧播放，同年获全国戏曲电视剧“金鹰奖”。剧中主要唱腔已由中国唱片公司和音像出版单位制成唱片和音带发行。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190822%2Faa1317f888b4484ca2e18092f7dc49ee.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633524744&t=b7d7e16a6223804e5ca067cc1cfd8dce',
                path2:
                    'https://img2.baidu.com/it/u=37446075,3109548362&fm=26&fmt=auto&gp=0.jpg'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="西园记" />
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
                            onPress={() => this.context.navigate('Screenpaly13', {
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

