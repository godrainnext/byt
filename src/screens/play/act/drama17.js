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
            title: '山河恋',
            author: '南薇、韩义、成容据法国大仲马的小说《侠隐记》（现译《三个火枪手》）和我国小说《东周列国志》的部分情节改编',
            year: '1947年',
            int1: '春秋时期，梁僖公穷兵黩武，掳曹国美女绵姜为夫人（林清城饰）。宰相黎瑟垂涎绵姜姿色，频加挑逗，屡被斥拒，怀恨在心，遂假传书信，召自幼与绵姜相好的纪苏公子进宫私会，以图陷害。',
            int2: '幸宫女戴赢从中帮助，方化险为夷。不料绵姜赠纪苏公子凤钗一事为黎瑟侦知，乃怂恿僖公逼问绵姜，又串通纪侯宠妃宓姬潜赴曹国窃取珠凤，加害公子。',
            int3: '危急之时，戴赢通过宓姬婢女季娣的帮助，恳托禁军百户长钟兕、申息两人，跋涉关山，历尽艰险，终于在湘灵庙手刃宓姬，解救了绵姜。',
            text1: '1947年8月19日，越剧“十姐妹”为了筹款创建越剧实验剧场和越剧学校，联合公演此剧于黄金大戏院，至9月12日结束。南薇导演，韩义舞美设计。吴小楼饰梁僖公(原由徐天红饰，因徐生病，改为吴小楼饰)、竺水招饰绵姜、徐玉兰饰纪苏公子、张桂凤饰黎瑟(后因张生病，改由徐慧琴饰)、筱丹桂饰宓姬、尹桂芳饰申息、范瑞娟饰钟兕、傅全香饰戴赢(后因傅生病，改由张云霞饰)、袁雪芬饰季娣。该剧集中了沪上越剧各大剧团、各行当的头牌演员，又是为创办越剧学校和建造越剧实验剧场而举行的联合义演。从筹备、排练到演出期间，上海各家报纸相继发表消息、评论。田汉撰文指出：此剧演出的意义在于越剧演员“有了新的觉醒”，懂得了“必须求取团结，团结才是力量”。演出过程中被国民党当局勒令停演，经越剧姐妹团结斗争才恢复演出。该剧在艺术上的特点是，每个行当、每个主要演员的表演和唱腔都得到发挥，越剧各流派荟萃一台。尹桂芳、袁雪芬对唱的“送信”一段唱，流畅委婉，富有喜剧色彩，尤受观众喜爱，曾由百代唱片公司灌制成唱片发行。',
            text2: '1980年春，韩义与南薇凭记忆，重写此剧，并把原来的上下两本、共演五个小时的本子，改为十场近三个小时的演出时间，由虹口越剧团重排，演于徐汇剧场。程心如饰绵姜、丁育之饰公子柏、孙菊琴饰黎瑟、张蓓丽与李蓉芳分饰宓姬、陆锦娟饰申息、尹美娣饰费缇，朱惠芳饰钟兕、陆苏美饰戴赢、王美芳饰季娣。',
            text3: '1982年，西安市越剧团曾将该剧重新改编排演，带到上海演出。',
            text4: '此剧的“送信”唱段深受观众喜爱，曾被越剧演员多次演绎，广为流传，网络有各种音视频留存。1990年“霞飞杯”越剧电视大奖赛中，越剧小生萧雅和袁派花旦方亚芬曾演唱此段。2007年在“桂子飘香--纪念尹桂芳演唱会”和中央电视台的春节戏曲联欢晚会上，萧雅和方亚芬都上演了这个唱段。而在2010年11月23、24日，越剧尹派传人王君安专场《问君安》上，王君安、方亚芬亦演出此唱段。2011年的“纪念袁雪芬专场演唱会”上，尹派小生茅威涛和袁派花旦方亚芬演出此唱段。',
            path1: 'https://img0.baidu.com/it/u=1842712967,2649028424&fm=26&fmt=auto&gp=0.jpg',
            path2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.17u1u.com%2Ffile%2Ffj%2F1w513981471u59220886t27.jpg&refer=http%3A%2F%2Fimg01.17u1u.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632208904&t=4e09f47bcc604723f1a052f4b2167763'
        }
    };
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' }}>
                <Top icon1="arrow-back" title="山河恋" />
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
                        &emsp;&emsp;作者：{this.state.dramalist.author}
                    </Text>
                    <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(10) }}>
                        &emsp;&emsp;创作年代：{this.state.dramalist.year}
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
                        <Text style={{ fontSize: pxToDp(14), marginBottom: pxToDp(20),lineHeight:pxToDp(22),color:'#333333'}}>
                            &emsp;&emsp;{this.state.dramalist.text4}
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
                            onPress={() => this.context.navigate('Screenpaly9')}
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