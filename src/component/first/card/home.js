import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    PanResponder,
    Animated,
    Image,
    Dimensions
} from 'react-native'
import Card from './Card'


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class Home extends Component {
    state = {
        backgroundColor: 'transparent',
        pan: new Animated.ValueXY(0, 0),
        scale: new Animated.Value(0.9),
        translateY: new Animated.Value(40),
        thirdTranslateY: new Animated.Value(20),
        dataIndex: 0,
    }
    UNSAFE_componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (event, gestureState) => {
                if (gestureState.dx === 0 && gestureState.dy === 0) {
                    return false
                } else {
                    if (this.props.action === 'openCard') {
                        // console.log(123)
                        return false
                    } else {
                        return true
                    }
                }
            },
            onPanResponderGrant: () => {
                Animated.spring(this.state.scale, { toValue: 1, useNativeDriver: false }).start()
                Animated.spring(this.state.translateY, { toValue: 0, useNativeDriver: false }).start()
                this.setState({ backgroundColor: 'transparent' })
                Animated.spring(this.state.thirdTranslateY, { toValue: 45, useNativeDriver: false }).start()
            },
            onPanResponderMove: Animated.event([
                null,
                { dx: this.state.pan.x, dy: this.state.pan.y }
            ],
                { useNativeDriver: false }),
            onPanResponderRelease: () => {
                const currentY = this.state.pan.y.__getValue();
                if (currentY > 250) {
                    Animated.timing(this.state.pan, {
                        toValue: { x: 0, y: 800 },
                        duration: 200,
                        useNativeDriver: false
                    }).start(() => {
                        Animated.timing(this.state.pan, {
                            toValue: { x: 0, y: 0 },
                            duration: 0,
                            useNativeDriver: false
                        }).start()
                        this.setState({ dataIndex: shouldIndex(this.state.dataIndex) })
                        Animated.spring(this.state.scale, { toValue: 0.9, useNativeDriver: false }).start()
                    })
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false
                    }).start()
                    Animated.spring(this.state.scale, { toValue: 0.9, useNativeDriver: false }).start()
                    Animated.spring(this.state.translateY, { toValue: 40, useNativeDriver: false }).start()
                    Animated.spring(this.state.thirdTranslateY, { toValue: 20, useNativeDriver: false }).start()
                }
                this.setState({ backgroundColor: 'transparent' })
            }
        })
    }

    render() {
        const { scale, translateY, backgroundColor, thirdScale, thirdTranslateY, dataIndex } = this.state
        return (
            <View style={[styles.container, { backgroundColor: backgroundColor }]}>
                <Animated.View style={
                    {
                        transform: [
                            { translateX: this.state.pan.x, },
                            { translateY: this.state.pan.y, }
                        ]
                    }}
                    {...this._panResponder.panHandlers}
                >
                    <Card canOpen={true} {...CardData[dataIndex]} />
                </Animated.View>
                <Animated.View style={[
                    styles.otherCard,
                    {
                        transform: [
                            { scale: scale },
                            { translateY: translateY }
                        ]
                    }]}
                >
                    <Card {...CardData[shouldIndex(dataIndex)]} />
                </Animated.View>
                <Animated.View style={[
                    styles.otherCard,
                    {
                        transform: [
                            { scale: 0.9 },
                            { translateY: thirdTranslateY }
                        ],
                        zIndex: -2
                    }]}
                >
                    <Card {...CardData[shouldIndex(dataIndex + 1)]} />
                </Animated.View>
                {/* <Login /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    otherCard: {
        position: 'absolute',
        zIndex: -1
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        width: '100%',
        height: screenHeight - 80
    }
});

function shouldIndex(index) {
    let shouldIndex = index + 1
    if (shouldIndex > CardData.length - 1) {
        return 0
    }
    return shouldIndex
}

const CardData = [
    {
        image: { uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20201222%2F0c46dd4453d14afaa197f8ce3a9fb4f2.jpeg&refer=http%3A%2F%2Fp4.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633151337&t=10aa8d825f244ab9034d448bccde42de' },
        title: '现代越剧《云水渡》：让人耳目一新的绍百新剧',
        startNum: '景俊美',
        info: '绍兴小百花越剧团表演的现代越剧《云水渡》，由年轻的导演、编剧李卓群编导，国家一级演员陈飞担纲女主。以纱代幕、以雾化仙的飘逸与空灵中，营造的是生死对话的场景，也聚焦了剧的主题在轻纺行业、在柯桥人。\n\t\t\t\t随着剧情的展开，戏的创意一次次刷新观者的思维定势。从剧种的发展需求看，越剧现代戏《云水渡》的意义具有不可估量的意义。越剧是善于演才子佳人戏的知名剧种，现代戏的涉入不多，女子越剧演现代戏更是充满挑战。然而，作为一个成熟的剧种，题材的丰富性、流派的纷呈以及演员与创作人才的梯队建设都是其生命活力的重要表征。没有谁的路是被先天划定的，人如此，戏亦如此。'
    },
    {
        image: { uri: 'https://pic.rmb.bdstatic.com/bjh/news/09adaeca95f56e246e887e3ae33a2ae6.jpeg' },
        title: '何止林姝鲤鱼精 花魂鸟魂总难留',
        startNum: '青瞳视角',
        info: '王文娟去世，新旧媒体上都是铺天盖地的“‘永远的林妹妹’走了”。在大众记忆中，这个老太太直接挂钩越剧电影《红楼梦》中那抹冷月葬花魂，或者1984年春节联欢晚会上那个身着蓝底暗花旗袍清唱，“句句话儿含意长”“情深如海难测量”的黛玉化身。但在越剧戏迷心中，一个林黛玉完全无法概括王文娟的全部魅力。\n\t\t\t\t《春香传》开启了王文娟1950年代艺术创作的高峰，鲤鱼精、武则天、晴雯、林黛玉，一个个性格迥异却又生动饱满的形象逐渐出现在越剧舞台上，丰富了这个曾经局限于太太小姐和纺织女工审美取向的剧种。刚柔并济的春香、斯文内敛的林黛玉、活泼跳脱的鲤鱼精、老谋深算的武则天，光是王文娟三四十岁艺术黄金年龄的几次创作，彼此之间性格悬殊，艺术表现手段也各异，其艺术的传承和学习之难已不言而喻，更不用说背后所需要的幼功和苦练。'
    },
    {
        image: { uri: 'https://pics1.baidu.com/feed/b3b7d0a20cf431ad693f3db14d3cd3a72fdd985f.jpeg?token=1b4514f128ecc2fee87b6c85bf82c071' },
        title: '越剧现代戏《黎明新娘》讲述杭州女杰的上海传奇',
        startNum: '杭州日报',
        info: '作为杭州越剧院建院65周年“四季有越”2021年度巡演的重头戏，越剧现代戏《黎明新娘》首度登陆上海滩，在保利上海城市剧院隆重上演，以致敬我党革命先烈“孤岛女杰”茅丽瑛英勇抗日的红色青春，献礼建党百年。\n\t\t\t\t出生于杭州的茅丽瑛，是上海抗战“孤岛”时期在沪积极投身抗日救亡的革命先烈。2019年，是茅丽瑛牺牲80周年。为纪念革命英烈、追寻建党初心、传承红色经典，杭州越剧院用越剧这一最具江南地域文化代表的艺术样式，以舞台剧《七月流火》和同名电影为蓝本，重新改编创作了越剧《黎明新娘》，主角秦凤英为“茅丽瑛”的“今生”舞台形象。\n\t\t\t\t天地一片红，人间几多美。这一夜，与“孤岛女杰”遥相呼应的当代青春力量，在舞台时空的交错中在上海“重逢”，重述一代年轻共产党人为国为民挥洒热血、献出生命的“血色浪漫”。'
    },
    {
        image: { uri: 'https://img.tmuyun.com/assets/20210719/1626655861775_60f4cc75b40eef0ec3022f98.jpeg' },
        title: '缘何一台越剧感动首都观众',
        startNum: '嵊州新闻网',
        info: '越剧现代戏《核桃树之恋》作为庆祝建党100周年全国唯一一部晋京展演的越剧舞台艺术作品，于7月9日至10日在北京天桥剧场成功演出。现场座无虚席，中国剧协、中国艺术研究院等30余家单位专家以及北京观众出席观看。在长达2个多小时的演出里，无论专家学者还是普通观众，都无声落泪，报以一次次热烈掌声。强烈的情感共鸣让人久久难以忘怀，缘何一台越剧能感动这么多专家和满场观众？这里面，既有对倾情演出的充分肯定，更有对家国情怀的崇高致敬。\n\t\t\t\t“春有花香，夏有荫凉，秋有果实，冬有暖阳，执子之手，与子偕老，与爱人岁月静好度时光。”《核桃树之恋》诠释了家国情怀的伟大，也唱出了人民群众对美好生活的向往。'
    },
    {
        image: { uri: 'https://imagepphcloud.thepaper.cn/pph/image/120/770/287.jpg' },
        title: '越剧和时代的对话和拥抱',
        startNum: '澎湃新闻',
        info: '“最大的一场挑战、最强档的团队组合、最具风险的一次创新，近20年来最强大的一次阵容，完成了一场时代与越剧的完美结合，唱出了上海越剧院的精气神，唱出了越剧的时代之音”。《山海情深》以西部山区某苗族苗岭寨为背景，通过一对上海援黔父女（蒋大海、蒋蔚）、一对苗家婆媳（应花、龙阿婆）从隔阂到理解的情感历程，贯穿起一群苗家女在脱贫致富过程中的喜怒哀乐。讲述了上海扶贫干部在苗族扶贫期间的故事以及在扶贫干部帮助下，苗家留守女子进取、自强通过手艺脱贫和振兴的故事，以发展特色民族产业经济，吸引劳动力回归，振兴乡村，建设家园，共同奔赴美好生活的过程,将脱贫攻坚与乡村振兴有机衔接，生动地展现了扶贫干部这一群体创造、守护美好生活的奉献和努力。载歌载舞、当代生活，对于越剧来说，这似乎很是不搭，很容易脱节和牵强附会，但是《山海情深》却交出了优秀的答卷。'
    },
    {
        image: { uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.bjd.com.cn%2Fimages%2F201909%2F29%2F5d9065a8e4b024bf0df6c438.jpeg&refer=http%3A%2F%2Fwww.bjd.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633261990&t=321af8ec9703bd121675e9d96547bec4' },
        title: '让越剧迈向更远的未来',
        startNum: '茅威涛',
        info: '自我革新，是越剧一脉相承的精神基因。唯有贴近时代、与时俱进，坚守审美风格，越剧才能承载更多的文化内涵和艺术价值，引发当代观众尤其是年轻观众的共鸣。中国戏曲原先没有学校，老戏班只是一个教授技艺的地方。是新中国让中国戏曲有了学校，有了正规的教学体系。今年适逢越剧诞生115周年。经过几代人的共同努力，越剧早已从发端之地浙江、兴盛之城上海，走向各地乃至海外，成为中国五大剧种之一。越剧前辈锐意革新的艺术实践，化为精神薪火，在传承中发展。正是秉承着与时俱进、开拓进取的创新精神和扎根民间、关注民生的大众情怀，不断学习和吸收各种优秀文化的艺术养分，越剧才得以超越地域和语言的局限，创造了一个多世纪的灿烂辉煌。如何在继承的基础上创新，让越剧迈向更远的未来，是我们这一代越剧人的课题。在上世纪五六十年代，《梁山伯与祝英台》《红楼梦》等越剧电影风靡全国，促进了越剧的传播普及。以才子佳人的爱情故事为题材的越剧，以委婉细腻的抒情风格，让更多观众熟悉并爱上了这门艺术。但越剧题材如果仅有“儿女情长”，发展空间会受到很大制约,唯有贴近时代、与时俱进，坚守审美风格，越剧才能承载更多的文化内涵和艺术价值，引发当代观众尤其是年轻观众的共鸣。'
    }
]

export default Home;