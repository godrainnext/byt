import React, { PureComponent } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { pxToDp } from "../../../utils/styleKits";
import Top from '../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';

class Index extends PureComponent {
    constructor(props) {
        super(props);
    }
    static contextType = NavigationContext;
    state = {
        schoolstate: {
            image1:
                'https://img2.baidu.com/it/u=350023428,4234988700&fm=26&fmt=auto&gp=0.jpg',
            image2:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffwimage.cnfanews.com%2Fwebsiteimg%2F2017%2F20170217%2F34325%2F00188b2bb8aa1a10e6b82f.png&refer=http%3A%2F%2Ffwimage.cnfanews.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632115407&t=f284a9f3e5cb071d6d9fbadfe6c0d086',
            history1:
                '范瑞娟，浙江嵊县东乡黄泽镇人。由于家境困难，1935年3月，她听说镇上戏班招收学徒。马上赶去报了名，进了龙凤舞台。',
            history2:
                '开蒙师傅黄炳文教她第一个戏是《一女换太子》。她学成的第一个戏是《失罗衫》，接着又学了《玉如意》《碧玉簪》《杀妻救主》等戏，随即随科班到绍兴一带演出。1937年，13岁的范瑞娟已成为龙凤舞台的佼佼者，挂了头牌。',
            school1:
                '范瑞娟戏路极宽，表演上稳健大方，质朴无华。善演梁山伯、焦仲卿、郑元和、贾宝玉这类正直、厚道、儒雅的古代书生——能把梁山伯、焦仲卿、贾宝玉这类正直、厚道、儒雅的古代书生演绎得温文而雅；又能把文天祥、韩世忠、李秀成这样的忠臣良将塑造得铿锵刚韧。还善演贺老六、扎西这样的近现代人物。',
            school2:
                '范瑞娟在长期的舞台实践中，成功地塑造了梁山伯、许仙、韩世忠、李秀成、文天祥、岳飞等包括才子、书生、历史人物等艺术形象。特别是她塑造的梁山伯，更深得观众喜爱，梁山伯的形象已家喻户晓。1953年，她与袁雪芬主演的《梁祝》，拍摄成我国第一部彩色戏曲片。第二年，参加第八届国际电影节，获得音乐奖。当时，周恩来总理正在日内瓦出席国际会议，他打电报把正在捷克斯洛伐克参加电影节的范瑞娟叫到日内瓦，会见了世界著名电影艺术家卓别林。卓别林高兴地对周总理说：“她的梁山伯演得好。” 1945年演出《梁祝哀史·山伯临终》时，她与琴师周宝才合作，在传统[六字调]的基础上，吸收京剧[反二簧]，首创了越剧[弦下调]，为越剧音乐发展作出巨大贡献。',
            school3:
                '瑞娟唱腔淳朴滋实，稳健大方，热情内涵，旋律华采，拖腔丰富，咬字坚实，发音宽厚，具有男性稳健、轩昂的气质。嗓音实，声宏亮，中气足，音域宽，演唱追求刚劲的男性美。演唱时从不追求单纯的舞台效果，而是致力于深入开掘角色内心的思想感情。范瑞娟创立了越剧流派中的“范派”艺术。唱腔在继承男班[正调]的基础上，吸收了京剧马连良、高庆奎等名家的唱腔音调和润腔处理，形成音调宽厚响亮、咬字坚实稳重、行腔迂回流畅的特点，被称为“范派”。',
            development1:
                '1939年，范瑞娟与尹桂芳搭档，两人同住一个房间，早起一同练功。平日一同练毛笔字，尹大姐还主动地把“行头”借给她。这期间，范瑞娟演出了《玉连环》《孟丽君》等戏，在上海初露头角。',
            development2:
                '1941年，范瑞娟与竺素娥、邢竹琴合作，更显示了精湛的表演技艺。1942年下半年，范瑞娟终于正式挑起头肩小生的重担，在越剧舞台上红起来了。',
            art: '范派唱腔音域宽，旋律起伏大，长句多，擅长运用抒情性较强的[慢板]揭示各种人物的情感，曲调显得华彩而有气派；起腔小腔和甩腔更具特色，往往通过对唱句尾音的装饰加花，或把伴奏的过门作为唱腔延伸的手法，使唱腔更深情缠绵。如《梁祝·楼台会》中“一路上奔得汗淋如雨”这句起腔的三个腔节，尾腔都通过音调的加花扩展，使起腔幅度宽广，音调起伏回荡。《梁祝·十八相送》中“恭喜贤弟一路平安把家回”这句的甩腔，音调由高而低，音量由轻而响，在“把家回”三字上，用越剧过门中同韵加花的手法，使唱腔连绵不断，生动表现了梁山伯抑制不住的内心喜悦，这是典型的范派甩腔。',
            title: '越剧范派集锦',
            ad: '范派是范瑞娟创立的越剧小生流派。她能自如地运用丹田之气和头腔共鸣相结合的发声方法，中低音厚实，高音响亮有力，使唱腔凝重大方，富有阳刚之美。'
        }
    };
    render() {
        return (
            <View style={styles.view}>
                <Top icon1="arrow-back" title="范派" />
                <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
                    {/*流派图片 */}
                    <Image
                        style={styles.image1}
                        source={{ uri: this.state.schoolstate.image1 }}
                    />
                    {/*流派信息 */}
                    <Text style={styles.title1}>个人经历</Text>
                    <Text style={styles.text1}>
                        &emsp;&emsp;{this.state.schoolstate.history1}
                    </Text>
                    <Text style={styles.text2}>
                        &emsp;&emsp;{this.state.schoolstate.history2}
                    </Text>
                    <Text style={styles.title}>流派的创立</Text>
                    <Text style={styles.text1}>
                        &emsp;&emsp;{this.state.schoolstate.school1}
                    </Text>
                    <Text style={styles.text2}>
                        &emsp;&emsp;{this.state.schoolstate.school2}
                    </Text>
                    <Text style={styles.title}>流派的发展</Text>
                    <Text style={styles.text1}>
                        &emsp;&emsp;{this.state.schoolstate.development1}
                    </Text>
                    <Text style={styles.text2}>
                        &emsp;&emsp;{this.state.schoolstate.development2}
                    </Text>
                    <Text style={styles.title}>艺术特色</Text>
                    <Text style={styles.text1}>
                        &emsp;&emsp;{this.state.schoolstate.art}
                    </Text>
                    {/*流派专辑 */}
                    <TouchableOpacity
                        style={styles.zhuanji}
                        onPress={() => this.context.navigate('Album')}
                    >
                        <Image
                            style={styles.image3}
                            source={{ uri: this.state.schoolstate.image2 }}
                        />
                        <View style={{ width: pxToDp(220), justifyContent: 'center' }}>
                            <Text style={styles.zhuanjititle}>
                                {this.state.schoolstate.title}
                            </Text>
                            <Text style={styles.zhuanjitext} numberOfLines={1}>
                                {this.state.schoolstate.ad}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#E2F4FE',
        flex: 1
    },
    box: {
        padding: pxToDp(20),
        paddingBottom: 0,
        flex: 1
    },
    image1: {
        borderRadius: pxToDp(8),
        height: pxToDp(180)
    },
    title: {
        fontSize: pxToDp(18),
        color: '#333333',
        fontWeight: 'bold',
        marginTop: pxToDp(4),
        marginTop:pxToDp(40),
        marginBottom:pxToDp(20)
      },
      title1: {
        fontSize: pxToDp(18),
        color: '#333333',
        fontWeight: 'bold',
        marginTop: pxToDp(8),    
        marginTop:pxToDp(40),
        marginBottom:pxToDp(20)
      
      },
      text1: {
        fontSize: pxToDp(16),
        color: '#333333',
        lineHeight: pxToDp(24)
    },
    text2: {
        fontSize: pxToDp(16),
        color: '#333333',
        lineHeight: pxToDp(24)
    },
    zhuanji: {
        flexDirection: 'row',
        width: '100%',
        height: pxToDp(100),
        borderRadius: pxToDp(8),
        backgroundColor: '#fff',
        marginTop: pxToDp(8),
        marginBottom: pxToDp(32),
        elevation: 4,
        shadowColor: 'black', //  阴影颜色
        shadowOffset: { width: 0, height: 0 }, // 阴影偏移
        shadowOpacity: 1, // 阴影不透明度
        shadowRadius: 10 //  圆角
    },
    image3: {
        height: pxToDp(80),
        width: pxToDp(80),
        borderRadius: pxToDp(8),
        margin: pxToDp(8)
    },
    zhuanjititle: {
        fontSize: pxToDp(18),
        fontWeight: 'bold',
        color: 'black'
    },
    zhuanjitext: {
        fontSize: pxToDp(15),
        color: 'grey',
        marginTop: pxToDp(8)
    }
});
export default Index;