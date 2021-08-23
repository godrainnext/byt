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
            title: '柳毅传书',
            author: '李朝威',
            year: '唐代',
            int1: '柳毅，湖北人，在前往长安赴考途中，在泾阳遇一位女子在冰天雪地下牧羊。多次打听，才知是洞庭湖龙宫的三公主，远嫁泾水龙王十太子。太子生性风流，娶妻之后没有洞房，独守空房之，反被翁姑欺凌，责带处于降雨降雪的羊群，到江边放牧。慑于龙王声威，三公主不敢传书回家求救。',
            int2: '柳毅义愤填膺，答应放弃科举，返回家乡送信。但洞庭君碍于与泾阳君多代姻缘，息事宁人。洞庭君的弟弟钱塘君则大表气愤，并带同水军前往解救三公主，并杀了泾水十太子。三公主回宫后，为柳毅奉酒答谢。钱塘君见二人眉来眼去，欲撮合二人。但柳毅碍于没有媒人，以及介怀自己间接杀了三公主的丈夫，拒绝婚事。',
            int3: '柳毅离开龙宫，经常望湖兴叹；而三公主亦日夜思念柳毅。双方家长为了子女的前途而大费思量。柳毅的母亲决意为柳毅寻找媳妇；而钱塘君也颇有同感，决意化身为媒婆，前往柳家说媒。于是有情人终成眷属。',
            text1: '1952年云华越剧团首演于上海，导演韩义。',
            text2: '1954年由竺水招、商芳臣，筱水招担纲首演。剧团归属南京后，由计大为重新改编，杨颀导演，竺水招饰柳毅，筱水招饰龙女三娘，商芳臣饰洞庭君，张玉琴饰洞庭夫人，蒋鸿鳌饰钱塘君，季雅芳饰泾河小龙，周福香饰柳母，扈鸣凤饰巡潮将军，俞韵饰紫绢。',
            text3: '1956年赴京汇报演出。剧本于1959年收入《中国地方戏曲集成·江苏省卷》。',
            text4: '1961年计大为、叶至诚改编为戏曲电影本，由长春电影制片厂摄制成彩色戏曲片。',
            path1: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi3.bbs.fd.zol-img.com.cn%2Ft_s1200x5000%2Fg1%2FM04%2F04%2F03%2FCg-4jVMi2fSIFRb7AAi6FyW6nLoAALQlgJ4K9gACLov423.jpg&refer=http%3A%2F%2Fi3.bbs.fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632206702&t=e707e61becf73bb6f505a3958ca2936c',
            path2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.epailive.com%2Fupload%2Fepailive%2F10584%2F14838%2F2050l.jpg&refer=http%3A%2F%2Fimages.epailive.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632208687&t=f4509e130cb9ba4914b3110722ec79c1'
        }
    };
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' }}>
                <Top icon1="arrow-back" title="柳毅传书" />
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
                            onPress={() => this.context.navigate('Screenpaly6')}
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