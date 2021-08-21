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
            image1: 'https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580;cp=tieba,10,403;ap=%D4%BD%BE%E7%B0%C9,90,411/sign=50f194d26681800a6ee58906810e508a/b984918fa0ec08fad0947efa53ee3d6d54fbda5a.jpg',
            image2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Faliimg.changba.com%2Fcache%2Fphoto%2F3554af18-64c2-41fe-83b8-176cea4e6ac0_640_640.jpg&refer=http%3A%2F%2Faliimg.changba.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632121691&t=9a94a1673b4c701cda05fdbca73e8127',
            history1: '毕春芳，籍贯宁波，长于上海。1940年进上海鸿兴舞台科班学艺。1943年满师后，先后与邢竹琴、徐天红、王文娟、裘爱花，金艳芳等搭班。1946年参加徐天红组织的天红剧团。1948年参加雪声剧团。1949年进东山越艺社唱二肩小生。',
            history2: '1980年起，在静安越剧团先后排演的《光绪皇帝》《卖油郎》和阿拉伯神话《天方夜谭》等剧目中，塑造了光绪皇帝、卖油郎、格洛梅王子等各具特色的艺术形象。1986年她的舞台艺术集锦，由江苏电视台拍摄成3集电视艺术片《春华秋实皆芳菲》，获全国第二届戏曲电视剧“长城奖”，并被中央电视台评选为“星光杯”优秀电视戏曲艺术片奖和优秀演出奖。',
            school1: '毕春芳12岁入鸿兴舞台学戏，1948年参加袁雪芬领衔的雪声剧团，后转入范瑞娟、傅全香领衔东山越艺社。1950年与戚雅仙搭档共组合作越剧团，二人进行了长达半世纪的合作。',
            school2: '她在唱腔和表演上向范瑞娟学习，后又吸收了尹桂芳的某些特点，在实践中不断创新，唱腔形成独自的风格，被公认为“毕派”。',
            development1: '毕春芳在创腔时，根据塑造人物需要常吸收越剧其他流派、行当和兄弟剧种的音调融化在自己的唱腔中，使唱腔生动活泼，富有新意。如《三笑·点秋香》中的起腔“秋香姐姐呀”，吸收的是传统名剧《盘夫》中旦角严兰贞的起腔“官人啊”的音调略加变化，使唐伯虎潇洒飘逸的形象更为鲜明。',
            development2: '毕春芳唱腔吸收融合了尹桂芳、范瑞娟的音调，嗓音清脆而富有弹性，自成一格，被称为“毕派”。毕派的传人有杨文蔚、丁莲芳、董蓓芬、王丽珍、戚小红、毕继芳、张镇英、徐文芳、丁素芬、丁小蛙、赵海平、杨童华、徐宁生、阮建绒、孙建红、李晓旭等。',
            art1: '毕春芳唱腔明朗豪放，流畅自如，具有粗犷的男性特点。她的嗓音脆亮，音域较宽，底气充足，唱腔中常出现一种切分符点音型，因此行腔棱角分明，音调富有弹性。她咬字有力，字音清晰，并强调重音处理。她能运用多种方法塑造不同人物形象，使唱腔呈现不同色彩。',
            art2: '在《卖油郎》中，她塑造的是一位的卖油郎秦钟的形象，性格善良质朴、厚道诚实，唱腔在洒脱飘逸中含有畅快悠扬的韵味，如“耳听得四更响”这一唱段，用[尺调腔·男调板]，非常别致地表现了秦钟憨厚的性格。毕春芳尤其擅长表现喜剧人物，善于在唱腔中运用夸张多变的唱法处理，使曲调活泼、轻松、诙谐，妙趣横生。这是毕春芳唱腔的独到之处。这种风格在越剧中不多见。',
            title: '越剧毕派集锦',
            ad: '毕派是毕春芳创立的越剧小生流派。毕春芳唱腔明朗豪放，流畅自如，具有粗犷的男性特点。'
        }
    }
    render() {
        return (
            <View style={styles.view}>
                <Top icon1="arrow-back" title="毕派" />
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
                    <Text style={styles.title}>流派的发展</Text>
                    <Text style={styles.text1}>&emsp;&emsp;{this.state.schoolstate.development1}</Text>
                    <Text style={styles.text2}>&emsp;&emsp;{this.state.schoolstate.development2}</Text>
                    <Text style={styles.title}>艺术特色</Text>
                    <Text style={styles.text1}>&emsp;&emsp;{this.state.schoolstate.art1}</Text>
                    <Text style={styles.text1}>&emsp;&emsp;{this.state.schoolstate.art2}</Text>
                    {/*流派专辑 */}
                    <TouchableOpacity style={styles.zhuanji} onPress={() => this.context.navigate('Album')}>
                        <Image style={styles.image3} source={{ uri: this.state.schoolstate.image2 }} />
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