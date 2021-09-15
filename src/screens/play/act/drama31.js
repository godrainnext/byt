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
                title: '白蛇传',
                author:
                    '暂无',
                year: '暂无',
                int1: '峨眉山修炼千年的蛇精白蛇（白素贞）和青蛇（小青），以主婢身份下山往苏杭寻觅恩人。至临安西湖畔遇夙世恩人药店伙汁许仙，素贞乃作风雨，使许仙登舟，邀至其家，由青儿做媒，素贞与许仙成婚，许仙因钱塘县库银失窃案，发配苏州，素贞与青儿寻到苏州，夫妻重圆，生活幸福。',
                int2: '金山寺长老法海知道此事，认为大逆不道，设法破坏许仙与素贞的感情。许仙受法海教唆，在端午节劝素贞与其同饮雄黄酒。素贞饮后，酒醉现了原形，许仙受惊，昏厥过去。素贞醒来，嘱青儿护其尸，不顾艰险，只身去昆仑山盗得仙草，救了许仙的命。许仙为求全家吉庆，私自至金山寺烧香。法海乘机再次留许仙出家。',
                int3: '。白素贞闻讯，就带了小青前往金山寺索夫，法海坚决不放许仙，素贞乃令长江水族，水漫金山，与法海斗法，终因力敌神将时，动了胎气，不得已只好返回。许仙幸得小和尚相助，从后山逃脱返回临安，在西湖断桥边与素贞、小青重逢。',
                int4: '素贞斥责许仙听谗负心，许仙表示妻子纵是蛇仙，以后也决不变心，于是夫妻又言归于好。不料在素贞产儿满月那天，法海又登门，差护法神持金钵罩住素贞，把她收进金钵，镇压在雷峰塔下，不知多少年以后，小青炼成神火，烧毁雷峰塔，救出素贞，姐妹重圆。',
                text1:
                    '《订盟》折子戏是《白蛇传》中一折。写白素贞作法让天下雨，使许仙登舟，舟至清波门，邀许仙至其家，由小青做媒，素贞与许仙结为夫妇。',
                text2:
                    '《盗仙草》折子戏是《白蛇传》中一折。写端阳节白素贞饮雄黄酒后，身现原形，许仙见床上有巨蛇，受惊毙命。素贞醒后令小青守尸，亲往昆仑山去盗灵芝仙草，守护仙草的鹿童、鹤童追赶素贞，素贞不敌，南极仙翁念其救夫心诚，救素贞下山。',
                text3: '《断桥》折子戏是《白蛇传》中一折。写许仙逃出金山寺在西湖断桥边与素贞、小青相遇，小青恨其薄幸，几次欲杀许仙，均为素贞拦阻。素贞斥责许仙听谗负心，经许仙再三哀求，小青怒稍解，与素贞分手，许仙与素贞言归于好。',
                text4: '《仕林祭塔》折子戏是《白蛇传》中一折。写白素贞被法海收入金钵，将其压于雷峰塔下，素贞之子仕林长大后，得中状元，衣锦还乡，至雷峰塔前祭母。仕林哭塔，感动塔神，为其母子引见。素贞尽诉前情，母子相会，互诉别离之苦后，终于忍痛分手。南马樟花、袁雪芬主演。',
                path1:
                    'https://img0.baidu.com/it/u=2301901313,2810872424&fm=26&fmt=auto&gp=0.jpg',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10519539719%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633537539&t=78d0fa99d957981b7b9ef7520d68f431'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="白蛇传" />
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
                            onPress={() => this.context.navigate('Screenpaly23', {
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

