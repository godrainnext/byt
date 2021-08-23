import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Top from '../../../component/common/top'
import { pxToDp } from "../../../utils/styleKits";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import Svg from 'react-native-svg-uri';
import { right } from '../../../component/common/iconSvg'
class Index extends PureComponent {
    state = {
        dramalist: {
            title: '早春二月',
            author: '暂无',
            year: '暂无',
            int1: '上世纪20年代，大革命爆发前夕，青年知识分子肖涧秋在杭州葛岭的湖边写生，初识女学生陶岚。两年后，历尽沧桑的肖涧秋应同学陶幕侃之邀到芙蓉镇中学任教，在船上遇见了留洋归来的阔少爷钱正兴与故去同学的遗孀文嫂。陶幕侃在家中设宴款待涧秋，让涧秋与陶岚再次相见。同时，钱正兴对陶岚也是一见钟情。肖涧秋出于同情经常照顾文嫂及两个孩子，这让文嫂对肖涧秋产生了爱慕之情。钱正兴正式向陶家求婚。被陶岚断然拒绝。钱正兴因得不到陶岚而对肖涧秋产生更加强烈的嫉恨，不仅在学校里处处与肖作对，而且在镇上到处散发传单，诽谤肖涧秋与文嫂的关系，甚至诬告他参与赤色活动，将他关进县监狱。 ',
            int2: '为了救肖涧秋，陶岚答应了钱正兴的求婚，而文嫂也答应一直追求她的商人吴子豪的求婚。涧秋出狱了，但文嫂已经搬家，陶岚也和钱正兴去了上海。 ',
            int3: '几经周折，肖涧秋终于找到了文嫂，他决定照顾文嫂一辈子，而文嫂却从肖涧秋的表情里看到他爱的其实是陶岚。夕阳中，文嫂在河边洗衣服，涧秋带着采莲在河边吹泡泡，等他们回到河边，只见筐里放着整齐的衣服，却不见文嫂。肖涧秋大病一场，他决定带着采莲离开芙蓉镇。临行前，他来到文嫂的墓前辞行，遇见吴子豪，吴对他说出文嫂对他的牺牲，这让肖涧秋万分内疚。 ',
            int4: '赶回芙蓉镇的陶岚悲痛欲绝，他一定要找到肖涧秋。陶岚辗转各地，几经艰难。在上海的一个广场上。人们正在集会游行。俯瞰下去，各色各样的伞组成不同的色块，这当中，相邻的两朵红伞分外显眼。陶岚一副修女打扮依然打着那把红伞，涧秋下意识的茫然四顾，但谁也没有看见谁……',
            text1: '北京长安大戏院的舞台上，飞飞扬扬的雪花飘洒在江南小镇和盛开的迎春花上，委婉悲怆、朴实流畅的越剧唱腔随之在戏院里响起。上海越剧院新编现代题材剧《早春二月》，拉开了“纪念越剧百年上海越剧北京演出周”的大幕。',
            text2: '早在半个多月前，北京各媒体就已纷纷将上海越剧再次晋京演出作为重要文化新闻，以醒目的版面和时段向首都观众介绍，《早春二月》的票很快销售一空。临近昨晚开演前几分钟，记者匆匆赶到剧场时，竟先后被十多个等退票的“越剧迷”拦住，询问有没有多余的戏票,而走进剧院，全场已是座无虚席。',
            text3: '这台改编自柔石小说《二月》，由男女合演，被专家和观众一起公认为“越剧现代戏的成功之作”，表现了“五四”过后的大革命前夜，城乡青年知识分子普遍的心理彷徨和当时中国社会的凄凉。许杰、方亚芬、张永梅、张伟忠、徐标新等首都观众平时难得一见的名家名角的大段唱腔和一串串优美的舞台动作，赢得全场阵阵掌声。演出结束后，演员们一再谢幕，观众们仍久久站立鼓掌，不肯离去。',
            path1: 'http://5b0988e595225.cdn.sohucs.com/images/20200115/a4f3107f50264554a0c3b6e677004958.jpeg',
            path2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11201662577%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632111621&t=3e7131e501e792769782f7a5acf9ee79'
        }
    };
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' }}>
                <Top icon1="arrow-back" title="早春二月" />
                <ScrollView
                     showsVerticalScrollIndicator={false}
                     style={{
                       marginLeft: pxToDp(20),
                       marginRight: pxToDp(20),
                     }}
                >
                    <Image
                        style={{ height: pxToDp(178), borderRadius: pxToDp(8), width: '100%' }}
                        source={{ uri: this.state.dramalist.path1 }}
                    />
                    <Text style={{ fontSize: pxToDp(24), fontWeight: 'bold', marginBottom: pxToDp(20), marginTop: pxToDp(10) }}>
                        {this.state.dramalist.title}
                    </Text>
                    <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(10) }}>
                        &emsp;&emsp;作者：{this.state.dramalist.author}  创作年代:  {this.state.dramalist.year}
                    </Text>
                    <View
                        style={{
                            marginTop: pxToDp(10)
                        }}
                    >
                        <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', marginBottom: pxToDp(10) }}>
                            剧情简介
                        </Text>
                        <Text style={{ fontSize: pxToDp(14), marginBottom: pxToDp(20),lineHeight:pxToDp(22),color:'#333333'}}>
                            &emsp;&emsp;{this.state.dramalist.int1}
                        </Text>
                        <Text style={{ fontSize: pxToDp(14), marginBottom: pxToDp(20),lineHeight:pxToDp(22),color:'#333333'}}>
                            &emsp;&emsp;{this.state.dramalist.int2}
                        </Text>
                        <Text style={{ fontSize: pxToDp(14), marginBottom: pxToDp(20),lineHeight:pxToDp(22),color:'#333333'}}>
                            &emsp;&emsp;{this.state.dramalist.int3}
                        </Text>
                        <Text style={{ fontSize: pxToDp(14), marginBottom: pxToDp(20),lineHeight:pxToDp(22),color:'#333333'}}>
                            &emsp;&emsp;{this.state.dramalist.int4}
                        </Text>
                    </View>
                    <View style={{ marginTop: pxToDp(10) }}>
                        <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', marginBottom: pxToDp(20) }}>
                            演出历史
                        </Text>
                        <Text style={{ fontSize: pxToDp(14), marginBottom: pxToDp(20),lineHeight:pxToDp(22),color:'#333333'}}>
                            &emsp;&emsp;{this.state.dramalist.text1}
                        </Text>
                        <Text style={{ fontSize: pxToDp(14), marginBottom: pxToDp(20),lineHeight:pxToDp(22),color:'#333333'}}>
                            &emsp;&emsp;{this.state.dramalist.text2}
                        </Text>
                        <Text style={{ fontSize: pxToDp(14), marginBottom: pxToDp(20),lineHeight:pxToDp(22),color:'#333333'}}>
                            &emsp;&emsp;{this.state.dramalist.text3}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', marginBottom: pxToDp(10) }} onPress={() => this.context.navigate('ScreenPlay')}>
                            剧本详情
                        </Text>
                        <TouchableOpacity style={{
                            marginBottom: pxToDp(80),
                            height: pxToDp(100),
                            width: '100%',
                            borderRadius: pxToDp(8),
                            //elevation: 5,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
                            //shadowColor: 'black',  //  阴影颜色
                            //shadowRadius: pxToDp(8),  //  圆角,
                            //shadowOffset: { width: 0, height: 0 },
                            // shadowOpacity: 1,
                        }}
                            onPress={() => this.context.navigate('Screenpaly')}
                        >
                            <Image style={{ height: pxToDp(100), width: '100%', borderRadius: pxToDp(8) }} source={{ uri: this.state.dramalist.path2 }} />
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
export default Index;