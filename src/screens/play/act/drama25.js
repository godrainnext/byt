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
                title: '玉堂春',
                author:
                    '暂无',
                year: '清代',
                int1: '吏部尚书王大人革职返乡前，把少公子王景隆留在京城完成未完的学业，顺便督促管家王定把多年前借出去的几万两银子收回来。爹娘起程回南京後，平日里受爹娘管教甚严的景隆第二天就在胭脂胡同的宜春院里看中了颇有几分姿色的苏三小姐。苏三小姐虽沦落风尘，但心地善良的她决非见利忘义、水性扬花之辈。正因为如此，景隆不顾管家王定的再三劝阻，执意与苏三小姐私定终身，并定做一块刻有「玉堂春」的金牌送给苏三。见景隆身系官家大少爷，且身带万贯银两，宜春院的鸨妈妈乾脆把景隆连同他的行李都接到宜春院。鸨妈妈看中的是景隆手上的钱，而为了苏三，景隆也是出手大方，结果没多长时间，王定收回来的三万两银子被花销一空。',
                int2: '没有了银子，鸨妈妈就开始设法赶景隆走人。幸亏苏三情义厚，百般阻拦，但尽管如此景隆还是受尽鸨妈妈的欺凌，为此还牵连上苏三。见赶不走景隆，鸨妈妈又心生一计。在谎称去吕祖庙上香的路上，把景隆甩弃於闹市之中。此时，王定已被景隆赶回了南京，可怜孤苦伶仃的景隆由一个花天酒地、挥霍无度的少年公子，沦落为一个栖身於关公庙的更夫，其中人生凄凉的味道算是有了一次切身的体会。',
                int3: '在景隆落魄关王庙的日子里，是酒楼卖瓜子的小金哥和宜春院的门童小廝帮景隆得以再次见到日夜思念的苏三。後来，景隆用苏三送来的几两碎银，重新打扮一新，并用满满两箱石头当作银两，骗回了鸨妈妈的笑脸相迎。岂知这是苏三和景隆合演的一出戏。在苏三的帮助下，景隆趁夜席卷了原本就是自己置办的贵重物品，返回南京发奋读书，从举人到进士，直取金榜二甲第八名，留在刑部听命，不日将择官上任。',
                int4: '景隆离开宜春院後，苏三被鸨妈妈卖给了山西一个叫沈洪的富商。沈洪被妻子皮氏和J夫合谋害死後，苏三成了替罪羊，被打入死牢。一个偶然的机会，苏三的案子被山西报给刑部後落在景隆的手里。在景隆的直接过问下，苏三很快得到昭雪。然而，景隆把苏三带回南京後却遭到爹娘的一致反对。就在苏三看破红尘，为景隆前程大计而决定削发为尼时，景隆毅然弃官不做，与心爱的人儿苏三廝守终身。',
                text1:
                    '1919年4月7日，男班王永春、白玉梅戏班上演于上海第一戏院。合作越剧团于1952年12月编演。开始演出时受当时思潮影响，认为王金龙是做了官的统治阶级，苏三是苦难妓女，阶级不能调和，戏演到“三堂会审”结束，不让两人团圆。后来才到“监会团圆”结束。',
                text2:
                    '《玉堂春》演出后，因故事情节群众熟悉，在“起解”、“会审”中有大段唱腔能发挥戚雅仙的艺术特色，故受到观众欢迎。1959年再度复演，成为剧团保留剧目之一。',
                text3: '1980年静安越剧团重建以后，复演《玉堂春》，仍由戚雅仙、毕春芳主演，剧本由傅骏整理，导演李卓云、孔敏，编曲贺孝忠。从剧本到唱腔都作了加工提高，几经修改，成为该团演出场次最多、观众最为欢迎的保留剧目。',
                text4: '“苏三起解”和“三堂会审”的唱段，20世纪50年代，由中国唱片社出版唱片。80年代又由中国唱片社出版全本《玉堂春》录音带。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170808%2F0c44df1606ce4e99a572f0892f6a4ffa_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633528791&t=07768da195246f5cf71be8fa600e98ed',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs4.sinaimg.cn%2Fmiddle%2F5d4f1521g9c8b2b8e89f3%26690&refer=http%3A%2F%2Fs4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633678753&t=c7bb03024ba4d55f6112c33623958620'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="玉堂春" />
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
                            onPress={() => this.context.navigate('Screenpaly17', {
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
      alignSelf:'center'
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

