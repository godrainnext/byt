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
                title: '月照西厢',
                author:
                    '王实甫',
                year: '元代',
                int1: '唐贞元间书生张生，在普救寺邂逅已故崔相国之女莺莺，发生爱情。时河桥守将孙飞虎兵围普救寺，强索莺莺为妻，崔夫人当众许愿：有退得贼兵者以莺莺许之，张生驰函好友白马将军杜确发兵解围。',
                int2: '然崔夫人嫌张贫寒而赖婚，张生相思成疾，莺莺在侍婢红娘撮合下，夜奔西厢探慰张生，事为崔夫人发觉，拷问红娘，红娘据实以告。',
                int3: '夫人不得已而将莺莺许配张生，但又借口不招白衣女婿，迫张上京赶考，莺莺与张生满怀离愁而别。',
                text1:
                    '1939年，百代唱片公司灌制了由筱丹桂、贾灵凤演唱的《拷红》唱片。40年代后期，大中华唱片公司灌制了由王文娟、竺素芳演唱的《拷红》和《红娘叫门》的唱片。',
                text2:
                    '1953年10月，周恩来总理为了庆祝中朝协定的签订招待金日成首相，下达给华东越剧实验剧团排演越剧《西厢记》的任务。华东戏曲研究院编审室根据元王实甫的杂剧并参考何人改编本改编，由苏雪安执笔，导演黄沙、韩义、陈鹏，作曲刘如曾、陈捷、倪秋萍，舞美设计苏石风、幸熙，袁雪芬饰莺莺、范瑞娟饰张珙、傅全香饰红娘、张桂凤饰崔夫人，在10月下旬赶排后赴京。11月23日晚，该剧在怀仁堂招待朝鲜民主主义人民共和国首相金日成，周总理陪同观看。12月1日，中国文联和中国剧协联合召开了该剧座谈会，田汉、阳翰笙、光未然、张庚等出席。',
                text3: '1954年3月，在上海长江剧场公演越剧《西厢记》时，对剧本进行了修改，红娘一角改由吕瑞英扮演。10月，该剧作为国庆5周年观礼剧目进京演出，周总理陪同印度总理尼赫鲁及其女儿英迪拉·甘地夫人，在怀仁堂观看了该剧。11月，该剧参加华东区戏曲观摩演出大会，获剧本一等奖、导演奖、优秀演出奖。',
                text4: '1955年夏，上海越剧院携该剧出访民主德国和苏联，对该剧再次修改加工，删去了“佳期”一场戏，又在“赖简”一场戏前、后增加了“传书”和“寄方”两场戏。由吴琛、黄沙导演，刘如曾音乐整理，苏石风、幸熙舞美设计。袁雪芬饰莺莺，徐玉兰饰张珙，吕瑞英饰红娘，张桂凤饰崔夫人。随后剧本被收入1955年出版的《华东地方戏曲丛刊》第二集。',
                text5: '2008年，上海越剧院复排的越剧《西厢记》忠实于王实甫原作，删节了张生住客店这类剧情，对张生和莺莺爱情主线中的几次相遇、几个情感递进阶段予以了较为完整的保留。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200126%2F047cc4b728dc4901b4288b46548eba9b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633536414&t=3fe7e2ab97c79b62adfd7d4126fefe31',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180906%2F5dfe8dc83f7043dab480cfcbddf99e9a.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633679316&t=18f52d5a003edab7c7bd4252ca149113'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="月照西厢" />
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
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text4}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text5}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly22', {
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

