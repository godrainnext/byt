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
        image: { uri: 'https://tse1-mm.cn.bing.net/th/id/R-C.4d64ec8d5ea064e1b14707fe373e1a89?rik=KFSCz99y13EYdw&riu=http%3a%2f%2fp1.itc.cn%2fq_70%2fimages03%2f20201211%2f8d992a2634ee437986d9bea1cbb6a39c.jpeg&ehk=ghbi9ROlSIy6DokeBtjTC8Nl4f7hPl44GS94GFIHXw8%3d&risl=&pid=ImgRaw&r=0' },
        title: '现代越剧《云水渡》：让人耳目一新的绍百新剧',
        startNum: 29.5,
        info: '绍兴小百花越剧团表演的现代越剧《云水渡》，由年轻的导演、编剧李卓群编导，国家一级演员陈飞担纲女主。以纱代幕、以雾化仙的飘逸与空灵中，营造的是生死对话的场景，也聚焦了剧的主题在轻纺行业、在柯桥人。随着剧情的展开，戏的创意一次次刷新观者的思维定势。从剧种的发展需求看，越剧现代戏《云水渡》的意义具有不可估量的意义。越剧是善于演才子佳人戏的知名剧种，现代戏的涉入不多，女子越剧演现代戏更是充满挑战。然而，作为一个成熟的剧种，题材的丰富性、流派的纷呈以及演员与创作人才的梯队建设都是其生命活力的重要表征。因此，禁锢于单一题材的剧目创作一定不是一个成熟剧种的应有表现。换句话说，一个优秀院团的代表性剧目越丰富，越能彰显其实力与水平。戏曲的发展规律也显示了从田间地头到庙堂厅堂、从“三小戏”到袍带戏、从以俗为美到精雅呈现，戏曲不仅能够跨越，而且可以兼美。没有谁的路是被先天划定的，人如此，戏亦如此。就艺术特色来分析，《云水渡》开创了四个“新”，即“新故事”“新形象”“新创意”和“新追求”。创意方面，《云水渡》的可圈可点处甚多。前已分析了故事的创意、人物的创意，这里重点聚焦于舞台的创意。越剧《云水渡》将以“最越剧的方式，最都市的气质，最细腻的情感”彰显当代越剧风采。能说出这样的追求，说明主创对越剧是敬畏的，同时对越剧又是充满期待的。（图文：景俊美）'
    },
    {
        image: { uri: 'https://pic.rmb.bdstatic.com/bjh/news/09adaeca95f56e246e887e3ae33a2ae6.jpeg' },
        title: '何止林姝鲤鱼精 花魂鸟魂总难留',
        startNum: 165,
        info: '王文娟去世，新旧媒体上都是铺天盖地的“‘永远的林妹妹’走了”。在大众记忆中，这个老太太直接挂钩越剧电影《红楼梦》中那抹冷月葬花魂，或者1984年春节联欢晚会上那个身着蓝底暗花旗袍清唱，“句句话儿含意长”“情深如海难测量”的黛玉化身。但在越剧戏迷心中，一个林黛玉完全无法概括王文娟的全部魅力。1984年春晚是央视办的第二届直播电视春晚，却不是王文娟第一次上“春晚”。大约三十年前，1956年中央新影拍摄了电影《春节大联欢》。电影里众星云集，有刚刚度过演艺生涯五十周年纪念的梅兰芳、周信芳两位京剧大师，也有不满三十岁的王文娟，她和她的搭档徐玉兰一起献上了一曲《春香传·爱歌》。《春香传》当时是新创排的越剧，移植自朝鲜民间爱情传说，诞生于徐王两位去朝鲜前线慰问志愿军和朝鲜人民军时，在烽烟间歇获得的灵感。梦龙和春香为世俗不容却又终成眷属的坎坷爱情，和越剧最重要的母题“私订终身后花园，落难公子中状元”异质而同构，这是创排成功最重要的基础。而如何将朝鲜脚尖着地的民间舞步和脚跟着地的传统戏曲台步结合起来，如何将色彩明艳的朝鲜传统服饰审美融进清新淡雅的越剧服装，主创们颇费了一番工夫，最后给越剧舞台留下了一出久演不衰的保留剧目，周总理看过后也评价：“王文娟扮起朝鲜人来很像咧。”比同为越剧流派创始人但略长几岁的“十姐妹”稍晚，王文娟在1940年代末期唱红，但她真正有意识地进行人物塑造和剧目编排，还是在新中国成立之后。《春香传》开启了王文娟1950年代艺术创作的高峰，鲤鱼精、武则天、晴雯、林黛玉，一个个性格迥异却又生动饱满的形象逐渐出现在越剧舞台上，丰富了这个曾经局限于太太小姐和纺织女工审美取向的剧种。其中创排于“大跃进”中的《则天大帝》，抻长了王文娟作为主演扮演人物的年龄跨度，而“天生我才必有用，帝王将相本无种”的唱词，和要争男女平等的人物心理更是和时代主题同气连声。王文娟一点“天真的女权主义”，成为戏剧界最早为武则天翻案的火星之一。当然更为越剧戏迷所津津乐道的，是早于《红楼梦》就拍成彩色电影的《追鱼》。古灵精怪的鲤鱼精奉献了现下越剧舞台上难得一见的火爆武打，“拔鳞”一场中繁重的翻滚、旋转，尤其是连续的“鹞子翻身”“乌龙绞柱”，淋漓展现了鲤鱼精对爱情和自由的执著。在“拔鳞”一场之前，鲤鱼精已向秀才张珍将真相和盘托出，她是天天在池中听他读书的精怪，而非嫌贫爱富的相府小姐，秀才知道后“不因异类变心肠”，这使得鲤鱼精的执著不再雷同于《白蛇传》的“他一往，我情深”，是基于心气相通的合意，也逸出了传统越剧痴心女子负心汉的桎梏。是更重情重义的张珍而不是另一个许仙，这是王文娟在创排此戏时提出的修改，是另一种意义上的平等和女权，也更容易获得女性观众的共鸣，台上台下一起庆幸虽然开头是传统的“草堂灯下选才郎”，结局却是翻新的“我鲤鱼真是眼睛亮”。刚柔并济的春香、斯文内敛的林黛玉、活泼跳脱的鲤鱼精、老谋深算的武则天，光是王文娟三四十岁艺术黄金年龄的几次创作，彼此之间性格悬殊，艺术表现手段也各异，其艺术的传承和学习之难已不言而喻，更不用说背后所需要的幼功和苦练。后代传人或擅“黛玉焚稿”，或擅“追鱼拔鳞”，极难全面继承王文娟所有的代表剧目。王派继承自四工调时期支兰芳的朴素行腔和随情赋腔的华丽落调还可“传真”，但限于传人自身性格和表演风格，王文娟“性格演员”、千人千面的本事或难再现。比如改编自传统剧目，并曾在上世纪90年代中期由孙道临执导、拍成电视剧的《孟丽君》，因为女主时而大家闺秀、时而朝堂重臣，多重身份转换浓缩于几场之间，要演出孟丽君背负的家仇与抱负，使得她有别于传统戏《沉香扇》中乔装改扮的蔡兰英已是不易。而同样是面对男性爱慕者的语带双关、机锋频出，要在场次相近的探病皇甫少华和与皇帝游上林苑中演出双方关系、身份的差异，对演员的考验尤其大。而“游上林”场面好看，更需要双方的身段配合，方能体现“孟丽君”的做功之妙。这出戏可以说是最能体现王文娟塑造人物功力和戏曲功底的剧目，后来搬演多请几位王派传人一起献艺，固然有传承的噱头，更多是在扬长避短。用“林妹妹”来概括王文娟固然化约了她其他的艺术贡献，也体现了对宝黛背后的徐王生旦配对的刻板印象。徐王携手半世纪创作了无数经典，徐派刚劲峭拔的唱腔和王派质朴流畅、字字送听的演唱风格自然相得益彰。除此之外，王文娟无论是少壮时期和陆锦花的合作，还是新中国成立后和丁赛君、陈少春搭档演戏，不同流派演唱和表演风格的碰撞都能有耀眼的火花。尤其是和艺兼徐范、表演风格温柔敦厚的丁赛君的合作，更是留下了《孟丽君》和《沉香扇》两段“书房会”的经典，女扮男装的旦角欺负蒙在鼓里或对真相略有察觉的小生，效果和笑果都十分突出。我有一位挚友，QQ头像常年是这两天被媒体频繁使用的王老《红楼梦》里“读西厢”的倩影，但我们俩一致认为，王老留下的演出资料，最好的一段就是上世纪80年代和丁赛君合作的便装《书房会》。80年代这一辈戏曲演员的艺术生命重新点燃，身着白西装的王文娟此时尚值盛年，又因为《红楼梦》的上映获得了全国性的声名，但向观众致意后她后退一步，把话筒让给首先开唱的丁赛君，为人谦逊和戏字当先都在这一让里面了。而演唱中王文娟的意气风发，和剧中皇榜得中、爱情也即将圆满的蔡兰英同声共调，应和了满眼春风的时代旋律。花魂鸟魂总难留，丁赛君早早谢世，王文娟的黄金搭档徐玉兰四年前告别人间，观众在送别一位位流派创始人的悲痛中，自然暗含对当下越剧演出的不满。审美的变迁或许使得戏曲的传承和创新比徐王当年从异国移植《春香传》更难，但徐王去前线给异国人民演出尚且能感动他们，当下的戏曲创作又何至于“自己打钟自己听，自己打钟自己懂”？（来源：青瞳视角）'
    },
    {
        image: { uri: 'https://pics1.baidu.com/feed/b3b7d0a20cf431ad693f3db14d3cd3a72fdd985f.jpeg?token=1b4514f128ecc2fee87b6c85bf82c071' },
        title: '越剧现代戏《黎明新娘》讲述杭州女杰的上海传奇',
        startNum: 87.5,
        info: '作为杭州越剧院建院65周年“四季有越”2021年度巡演的重头戏，越剧现代戏《黎明新娘》首度登陆上海滩，在保利上海城市剧院隆重上演，以致敬我党革命先烈“孤岛女杰”茅丽瑛英勇抗日的红色青春，献礼建党百年。出生于杭州的茅丽瑛，是上海抗战“孤岛”时期在沪积极投身抗日救亡的革命先烈。2019年，是茅丽瑛牺牲80周年。为纪念革命英烈、追寻建党初心、传承红色经典，杭州越剧院用越剧这一最具江南地域文化代表的艺术样式，以舞台剧《七月流火》和同名电影为蓝本，重新改编创作了越剧《黎明新娘》，主角秦凤英为“茅丽瑛”的“今生”舞台形象。面对红色经典，《黎明新娘》的改编选择了以越剧最擅长的“才子佳人”为切入口，以主人公秦凤英与未婚夫元乔筹备婚礼倒计时为线索，将秦凤英为新四军筹备冬衣组织爱心义卖筹款活动，与汪伪特务头子杜金光斗智斗勇的主线交错在艺术结构中，把特殊年代中烽火佳人的儿女情长和家国抉择、革命先烈英勇斗争顽强不屈，用越剧的“浪漫唯美”进行了极致的诠释。《黎明新娘》可谓是杭越集合业内“艺术新势力”——优秀青年艺术人才创作的一部现代红色作品。上海越剧院优秀青年编剧莫霞担纲编剧、上海昆剧团知名青年舞台剧导演俞鳗文执导，主演由杭越80后、85后、90后、95后优秀青年演员担纲，其中，王派花旦陈群瑶饰演秦凤英。天地一片红，人间几多美。这一夜，与“孤岛女杰”遥相呼应的当代青春力量，在舞台时空的交错中在上海“重逢”，重述一代年轻共产党人为国为民挥洒热血、献出生命的“血色浪漫”。（来源：杭州日报）'
    },
    {
        image: { uri: 'https://img.tmuyun.com/assets/20210719/1626655861775_60f4cc75b40eef0ec3022f98.jpeg' },
        title: '缘何一台越剧感动首都观众',
        startNum: 149,
        info: '越剧现代戏《核桃树之恋》作为庆祝建党100周年全国唯一一部晋京展演的越剧舞台艺术作品，于7月9日至10日在北京天桥剧场成功演出。现场座无虚席，中国剧协、中国艺术研究院等30余家单位专家以及北京观众出席观看。在长达2个多小时的演出里，无论专家学者还是普通观众，都无声落泪，报以一次次热烈掌声，身边有一名大学生感动于平凡而又伟大的故事，有感而发“哪有什么岁月静好，不过是有人替你负重前行”。强烈的情感共鸣让人久久难以忘怀，缘何一台越剧能感动这么多专家和满场观众？这里面，既有对倾情演出的充分肯定，更有对家国情怀的崇高致敬。习近平总书记说过，人民既是历史的创造者、也是历史的见证者，既是历史的“剧中人”、也是历史的“剧作者”。《核桃树之恋》便是一部来自人民的作品，该剧取材于嵊州市仙人坑村的真人真事。从事核弹技术工作的王荣浩，因工作保密，退休前与妻子王贤琴常年两地分居。四十多年前，他从工作地带回三颗大核桃种在自家门前，因夫妻二人没有子女，王贤琴就如养育子女般细心照料。如今，其中一颗核桃已长成直径50余厘米、高度近20米的参天大树。每一个故事都有着时代的印记，《核桃树之恋》在吟唱唯美纯真恋歌的同时，更多回荡的是壮怀激烈的家国颂歌，展现的是协力奋斗的伟大时代。散场时，有不少观众红着眼眶，当记者问起缘由时，有一位年老的观众深情地说：“这个家庭很真实，让我回忆起了那个时代和那些人。 ”建党百年，风雨沐栉。《核桃树之恋》通过艺术的凝练传达，通过真实的情感渗透，将时代精神润泽人心，让我们牢牢铭记，无论走得多远，都不能忘记来时的路，都不能忘记无数先辈的奋斗历史。家是最小的国，国是千万家。家国一体、家国同心，既是中华文明薪火相传的深层逻辑，也是中华民族发展进步的内在支撑。在小家与大国之间，王荣浩与王贤琴无疑都选择了后者。从事核弹事业20年，王荣浩每年只回家探亲一次，妻子王贤琴也只去探亲过两次，短住不足十天。这20年，王贤琴默默操持着整个家，悉心照顾年迈的公婆，并对丈夫许下诺言：绝不过问任何关于工作的事。等到丈夫退休，王贤琴才知晓其真实身份。对于这段聚少离多、“蒙在鼓里”的婚姻，王贤琴说：“没有祖国的强大，哪有老百姓的好日子？老伴为了国家，很值得！所以我敬重他，也不后悔嫁给他。”大爱成就家国，小爱温暖人心。王荣浩走了，但他亲手种下的核桃树，永远陪着王贤琴。有一位女观众感慨说，“同样是女人，特别能感受女主人公的不容易，但同时，又非常理解她的坚持。”《核桃树之恋》用小家故事叙述大国之事，表现出民族命运与人民生活息息相关的家国情怀，让我们牢记对国之大者一定要心中有数，只有心怀国之大者、践行国之小我，才能担当民族复兴重任、成就时代使命。“春有花香，夏有荫凉，秋有果实，冬有暖阳，执子之手，与子偕老，与爱人岁月静好度时光。”《核桃树之恋》诠释了家国情怀的伟大，也唱出了人民群众对美好生活的向往。习近平总书记、党中央赋予浙江高质量发展建设共同富裕示范区的光荣使命，嵊州将切实扛起忠实践行“八八战略”、奋力打造“重要窗口”的责任担当，以《核桃树之恋》全国巡演为契机，不断丰富人民群众精神文化生活，通过文艺的力量感染人、凝聚人、振奋人，更好实现精神富裕，为助力高水平建设社会主义现代化先行省、高质量发展建设共同富裕示范区贡献更大越剧力量。'
    },
    {
        image: { uri: 'https://imagepphcloud.thepaper.cn/pph/image/120/770/287.jpg' },
        title: '越剧和时代的对话和拥抱',
        startNum: 70,
        info: '“最大的一场挑战、最强档的团队组合、最具风险的一次创新，近20年来最强大的一次阵容，完成了一场时代与越剧的完美结合，唱出了上海越剧院的精气神，唱出了越剧的时代之音”，3月10日，上海越剧院院长梁弘钧在接受采访时，这样评价即将到北京国家大剧院以及上海对口帮扶滇、黔、渝等地区巡演的脱贫题材当代戏《山海情深》。该剧是去年10月，由中国上海国际艺术节委约，上海越剧院倾全院之力创作而成。由编剧李莉、章楚吟，导演杨小青等各个领域佼佼者组成了阵容强大的主创团队，全剧时长近130分钟。据介绍，《山海情深》以西部山区某苗族苗岭寨为背景，通过一对上海援黔父女（蒋大海、蒋蔚）、一对苗家婆媳（应花、龙阿婆）从隔阂到理解的情感历程，贯穿起一群苗家女在脱贫致富过程中的喜怒哀乐。讲述了上海扶贫干部在苗族扶贫期间的故事以及在扶贫干部帮助下，苗家留守女子进取、自强通过手艺脱贫和振兴的故事，以发展特色民族产业经济，吸引劳动力回归，振兴乡村，建设家园，共同奔赴美好生活的过程,将脱贫攻坚与乡村振兴有机衔接，生动地展现了扶贫干部这一群体创造、守护美好生活的奉献和努力。《山海情深》上海扶贫干部父女的矛盾冲突和当地婆媳之间摩擦的两条主线唱戏，讴歌了脱贫攻坚战中黔沪两地的大爱情怀。早在2019年，上海越剧院主创团队40多人次分批在9天时间跑遍了黔滇两省的9个贫困县，了解了上海的扶贫干部在那里为扶贫战役所做的一切，在多名生活原型的基础上创作了立体丰满的人物，《山海情深》的剧名就是上海扶贫干部在他工作的也是上海援建的学校里题写的匾额的内容，生动地展现了脱贫攻坚战中的沪黔两地的血肉鱼水情。载歌载舞、当代生活，对于越剧来说，这似乎很是不搭，很容易脱节和牵强附会，但是《山海情深》却不是这样，几场演出在上海的反响是这样的：老一代的越剧迷说这就是越剧，唱腔好听旋律优美；青年人说，越剧这样创新，是我们喜欢的文艺样式和剧种；专业剧评家、新闻记者、文化工作者认为，越剧旋律、流派和特色唱腔以及艺术灵魂都在，与经典传统剧目《红楼梦》、《西厢记》、《梁祝》、《碧玉簪》等所有经典剧目一样，不同的只是故事，一脉相承的是那越剧的灵魂和气质。如今，《山海情深》已成功入选今年上海首批重点文艺创作项目，成为上海越剧院又一改革创新的里程碑意义的剧目。（来源：澎湃新闻）'
    },
    {
        image: { uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F19%2F75%2F5b6443f4b3962_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632966246&t=3342027f49fcd1ad0c59023dca01386a' },
        title: '让越剧迈向更远的未来',
        startNum: 53.4,
        info: '自我革新，是越剧一脉相承的精神基因。唯有贴近时代、与时俱进，坚守审美风格，越剧才能承载更多的文化内涵和艺术价值，引发当代观众尤其是年轻观众的共鸣。中国戏曲原先没有学校，老戏班只是一个教授技艺的地方。是新中国让中国戏曲有了学校，有了正规的教学体系。今年适逢越剧诞生115周年。经过几代人的共同努力，越剧早已从发端之地浙江、兴盛之城上海，走向各地乃至海外，成为中国五大剧种之一。越剧前辈锐意革新的艺术实践，化为精神薪火，在传承中发展。正是秉承着与时俱进、开拓进取的创新精神和扎根民间、关注民生的大众情怀，不断学习和吸收各种优秀文化的艺术养分，越剧才得以超越地域和语言的局限，创造了一个多世纪的灿烂辉煌。如何在继承的基础上创新，让越剧迈向更远的未来，是我们这一代越剧人的课题。在上世纪五六十年代，《梁山伯与祝英台》《红楼梦》等越剧电影风靡全国，促进了越剧的传播普及。以才子佳人的爱情故事为题材的越剧，以委婉细腻的抒情风格，让更多观众熟悉并爱上了这门艺术。但越剧题材如果仅有“儿女情长”，发展空间会受到很大制约。正如袁雪芬所言：“越剧要提高大众功能。表现现实题材，不但可以探索许多艺术上的新课题，还能增强剧种的生命力和发展潜力。为越剧艺术的表现寻找新的增长点，要在题材的广泛性和人物塑造的深入性方面积极探索。近年来，各类题材层出不穷，比如绍兴小百花越剧团推出的《吴王悲歌》《越王勾践》《劈山救母》等一系列英武小生花旦戏。创作者也开始借鉴话剧对人物的塑造手法，表现人物性格、品质等精神层面的主题。在塑造先进人物、讲述廉政故事的越剧剧目中，这类创作手法常被运用。浙江越剧团作为男女合演实验团，创作了一批红色主题剧目，如《江姐》《刑场上的婚礼》《红色浪漫》。在浙江小百花越剧团担任主演和团长期间，我出演了《陆游与唐婉》《西厢记》等经典传统剧目，也创作参演了《寒情》《孔乙己》《二泉映月》《江南好人》《寇流兰与杜丽娘》等“新越剧”。我们在遵循越剧“写意性不变、女子主体不变、浙江方言不变”的前提下，试图拓宽越剧题材。我也曾塑造与传统小生相距甚远的艺术形象，如《寇流兰与杜丽娘》里的骁悍雄杰、《江南好人》中的生旦同台，以及从其他剧种或艺术门类借鉴的表演手段，比如《西厢记》中有川剧的“踢褶子”、《孔乙己》中有传统戏曲的“叠披”以及京剧麒派的“磋步”，常引起越剧戏迷的讨论。这种探索是必要的，也是值得的。因为自我革新，正是越剧一脉相承的精神基因。袁雪芬当年突破性地将鲁迅的短篇小说《祝福》改为越剧《祥林嫂》，提升了越剧的艺术品位。唯有贴近时代、与时俱进，坚守审美风格，越剧才能承载更多的文化内涵和艺术价值，引发当代观众尤其是年轻观众的共鸣。（文：茅威涛） '
    }
]

export default Home;