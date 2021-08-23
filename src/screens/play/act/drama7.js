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
            title: '皇帝与村姑',
            author: '洪潮、李志浦',
            year: '暂无',
            int1: '《越剧：皇帝与村姑》讲述古代有位年轻皇帝，迫于敌兵入侵，乔装南逃。途中，幸得村姑张桂兰冒死相救，约定日后报恩于村姑。三年后，张桂兰得悉皇帝报恩，便让恩于众。钦差曹子彬原是叛臣，村姑知其隐情。',
            int2: '曹为掩盖其当年罪行，命曹知县之女贾玉屏以李代桃冒认皇恩。',
            int3: '贾玉屏被迫进宫，感于皇帝对张桂兰得一片真心，终于吐露了实情。皇帝惊悉桂兰遭难，思度其中定有蹊跷，决定微服私访，经“测字”“相会”“告状”等波折，终于真相大白。为表彰桂兰，皇帝亲笔御批：“浙江女子尽封王”传喻天下以示敬意。',
            text1: '改编自《康王告状》，上海越剧院红楼剧团曾上演。',
            text2: '剧本经苏鄂生整理，摄成舞台艺术片，徐玉兰、王文娟主演，上海音像出版社出版发行。',
            path1: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.3uYlccOS7MjJeNKceXoUyAHaHa?pid=ImgDet&rs=1',
            path2: 'https://wenhui.whb.cn/u/cms/www/201905/262039340whi.jpg'
        }
    };
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' }}>
                <Top icon1="arrow-back" title="皇帝与村姑" />
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