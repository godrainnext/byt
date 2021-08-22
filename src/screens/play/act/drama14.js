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
            title: '庵堂认母',
            author: '陈静改编',
            year: '1954年',
            int1: '尼姑王志贞和申贵升相爱，于庵堂内生下一子，因碍于佛门清规，只得遗弃路旁，为徐家拾养，取名元宰。',
            int2: '16年后，徐已为解元，得知此情，遂往庵堂寻母。两人相遇，经暗喻试探，母已知为其亲子，却不敢认，惊恐逃入云房，在申画像前哭诉。',
            int3: '徐追入见画像题词，对照所带血书字迹，更断定生母无疑，遂跪地哀求，志贞不顾佛门清规，抛弃佛帚，元宰宁弃荣华富贵，摘下头冠，母子终于相认。',
            text1: '《庵堂认母》改编本由浙江越剧团首演，导演陈静、姚传芗，作曲卢炳容，舞美设计裘云飞。金宝花饰徐元宰，薛莺饰王志贞。1954年先后参加浙江省与华东区戏曲观摩演出，均获剧本奖。上海唱片公司录制唱片。',
            text2: '1955年由姚水娟饰王志贞，何贤芬饰徐元宰，以男女合演形式重排后赴上海演出，影响颇大。',
            text3: '剧本编入《华东戏曲会演剧本选集》，浙江人民出版社出版。1955年江苏锡剧团移植演出，同年由上海电影制片公司拍成舞台艺术纪录片。',
            path1: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.wenhuayun.cn%2F00%2F201809%2FImg%2FImg5b692468237a43e495e94bf5751f7a59_750_500.jpg&refer=http%3A%2F%2Fimg1.wenhuayun.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632205546&t=937c8eb866ada9f2f4c261f32e6b51f4',
            path2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2018%2F06%2F14%2F2675237445000798727_320x320.jpg&refer=http%3A%2F%2Fcdnimg103.lizhi.fm&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632205751&t=a059c5eb26655bc153281aaac598cba2'
        }
    };
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' }}>
                <Top icon1="arrow-back" title="庵堂认母" />
                <ScrollView
                    style={{
                        marginLeft: pxToDp(8),
                        marginRight: pxToDp(8),
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
                        <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
                            &emsp;&emsp;{this.state.dramalist.int1}
                        </Text>
                        <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
                            &emsp;&emsp;{this.state.dramalist.int2}
                        </Text>
                        <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(10) }}>
                            &emsp;&emsp;{this.state.dramalist.int3}
                        </Text>
                    </View>
                    <View style={{ marginTop: pxToDp(10) }}>
                        <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', marginBottom: pxToDp(20) }}>
                            演出历史
                        </Text>
                        <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
                            &emsp;&emsp;{this.state.dramalist.text1}
                        </Text>
                        <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
                            &emsp;&emsp;{this.state.dramalist.text2}
                        </Text>
                        <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
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
                            onPress={() => this.context.navigate('Screenpaly2')}
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