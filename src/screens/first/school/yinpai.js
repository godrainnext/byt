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
            image1: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10826696251%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632115517&t=65245b7141d301b25ef52dfa0c43b41f',
            image2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbusiness.china.com.cn%2Fpic%2F2019-12%2F04%2F058b9074-85c4-405b-be16-81c37ceb54a2.jpg&refer=http%3A%2F%2Fbusiness.china.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632115491&t=926585a2248289d46ed3572e85d88605',
            history1: '尹桂芳原名尹喜花，浙江新昌人，越剧女演员，工小生，越剧尹派艺术创始人，被称为“越剧皇帝”，是“越剧十姐妹”之一。',
            history2: '1929年，进入醒狮剧社学习，后加入大华舞台。出科后在宁波、绍兴、杭州等地演出。1946年在上海创建芳华越剧团，1959年随越剧团迁往福建。历任上海、福建芳华越剧团团长，上海老闸区第一届政协副主席，黄浦区第一届政协副主席，中国文联第四届委员，中国剧协福建分会副主席。',
            school1: '1942年6月，尹桂芳与来自四季春班的傅全香在老闸大戏院演出了《黄金与美人》、《春花泣秋风》等新戏。1944年，尹桂芳不顾剧场老板的反对，在竺水招的支持下，请来了编导人员，并采用立体布景、写实的道具和效果、新颖的灯光，在龙门大戏院演出了《云破月圆》，又演出了《殉情》，观众反应良好。',
            school2: '1945年春，她聘请洪钧、徐进、弘英、兰明等先后编演了《石达开》、《夜短情长》、《宝玉与黛玉》、《春闺梦里人》、《几时重相见》、《荒岛恩仇记》、《沙漠王子》等新戏，影响进一步扩大。尤其是《宝玉与黛玉》中的《宝玉哭灵》和《沙漠王子》中的《算命》唱段，在电台播唱后，听众反响强烈，越剧改革取得了一定的交果。这时尹桂芳的演技也日臻成熟，逐渐形成了自己的风格与流派。',
            school3: '20世纪五六十年代，尹派越剧的发展进入了第二个高峰期，无论是表演、唱腔还是其他舞台艺术都更趋成熟、完美，标志着尹派艺术已经自成体系。1959年，越剧尹派艺术随芳华越剧团从发祥地上海迁移到福建。',
            development1: '越剧（尹派）以独特的风格、长存的魅力倾倒了无数的福建观众，同时对福建地方戏曲的发展创新产生了积极的影响。',
            development2: '2006年，尹派传承式微。越剧迷更爱看的还是经典戏。可经典戏不好演，因为芳华所有经典戏都是小生戏，小生在舞台上的戏份很重，很考验演员的唱功，但青年演员的唱腔是弱点。戏曲大环境挺好的，国家很重视，但福建省芳华越剧团的主要难题在于人才难找。越剧的土壤还是在浙江、上海，很多人才不愿意到福建，在福建招生是一大困难。但如果不出福建招生，就更难有学生了。',
            development3:'自越剧（尹派）列入国家非物质文化遗产以来，福建省芳华越剧团开展向社会征集尹派资料的工作，从戏迷手里找到很多尹派的资料与节目单，并重新排练，使传统剧目得以传承。王君安曾推出个人CD《越韵风流——君安怀念先生尹桂芳》，其中有九个尹派唱段被翻译成英文。她还在哈佛大学等美国高校举办越剧讲座，用英语演讲示范，并带去了她演出的经典剧目。',
            art: '越剧（尹派）的特点是委婉缠绵，洒脱深沉，纯朴隽永，是一种典型的以柔为主，柔中寓刚的风格。尹派越剧艺术的表演，既非常讲究手眼身法步之戏曲传统基本功底，又极其注意戏情戏理，集中力量塑造人物形象，这是尹派表演的重要特色。越剧（尹派）艺术不仅体现在表演和唱腔艺术上，而且注重舞台艺术的综合性，融编，导，演，音，美等为一体，力求整体效果的完美无缺。',
            title: '越剧尹派集锦',
            ad: '尹派是尹桂芳创立的越剧流派。尹派越剧表演风格质朴高雅、逼真传神，演唱洒脱流畅、醇厚隽永。'
        }
    }
    render() {
        return (
            <View style={styles.view}>
                <Top icon1="arrow-back" title="尹派" />
                <ScrollView style={styles.box}>
                    {/*流派图片 */}
                    <Image style={styles.image1} source={{ uri: this.state.schoolstate.image1 }} />
                    {/*流派信息 */}
                    <Text style={styles.title}>个人经历</Text>
                    <Text style={styles.text1}>&emsp;&emsp;{this.state.schoolstate.history1}</Text>
                    <Text style={styles.text2}>&emsp;&emsp;{this.state.schoolstate.history2}</Text>
                    <Text style={styles.title}>流派的创立</Text>
                    <Text style={styles.text1}>&emsp;&emsp;{this.state.schoolstate.school1}</Text>
                    <Text style={styles.text2}>&emsp;&emsp;{this.state.schoolstate.school2}</Text>
                    <Text style={styles.text2}>&emsp;&emsp;{this.state.schoolstate.school3}</Text>
                    <Text style={styles.title}>流派的发展</Text>
                    <Text style={styles.text1}>&emsp;&emsp;{this.state.schoolstate.development1}</Text>
                    <Text style={styles.text2}>&emsp;&emsp;{this.state.schoolstate.development2}</Text>
                    <Text style={styles.text2}>&emsp;&emsp;{this.state.schoolstate.development3}</Text>
                    <Text style={styles.title}>艺术特色</Text>
                    <Text style={styles.text1}>&emsp;&emsp;{this.state.schoolstate.art}</Text>
                    {/*流派专辑 */}
                    <TouchableOpacity style={styles.zhuanji} onPress={() => this.context.navigate('Album')}>
                        <Image style={styles.image3} source={{ uri: this.state.schoolstate.image2}} />
                        <View style={{ width: pxToDp(220), justifyContent: 'center' }}>
                            <Text style={styles.zhuanjititle}>{this.state.schoolstate.title}</Text>
                            <Text style={styles.zhuanjitext} numberOfLines={1}>{this.state.schoolstate.ad}</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#E2F4FE',
        flex: 1
    },
    box: {
        marginLeft: pxToDp(8),
        marginRight: pxToDp(8),
        marginBottom: pxToDp(8)
    },
    image1: {
        width: pxToDp(355),
        borderRadius: pxToDp(8),
        height: pxToDp(170)
    },
    image2: {
        height: pxToDp(70),
        width: pxToDp(70),
        margin: pxToDp(8),
        alignItems: 'center',
        justifyContent: "center"
    },
    image22: {
        height: pxToDp(70),
        width: pxToDp(70),
        borderRadius: pxToDp(8)
    },
    title: {
        fontSize: pxToDp(18),
        color: '#468CD3',
        fontWeight: 'bold',
        marginTop: pxToDp(10)
    },
    text1: {
        fontSize: pxToDp(17),
        marginTop: pxToDp(10)
    },
    text2: {
        fontSize: pxToDp(17),
        marginTop: pxToDp(15)
    },
    zhuanji: {
        flexDirection: 'row',
        width: '100%',
        height: pxToDp(100),
        borderRadius: pxToDp(8),
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginTop: pxToDp(10)
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
    },
    song: {
        flexDirection: 'row',
        width: '100%',
        height: pxToDp(80),
        borderRadius: pxToDp(8),
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginTop: pxToDp(8)
    }
})
export default Index;