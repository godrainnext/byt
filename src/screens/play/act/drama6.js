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
            title: '周仁哭坟',
            author: '朱福侠编导',
            year: '暂无',
            int1: '明代嘉靖年间，严嵩当权，朝臣杜宪被害身死。其子杜文学，结交友人凤承东，见杜家势败，落井下石以求邀功，向严嵩进谗，谓杜文学会对严嵩不利，严派人往杜家搜捕文学，杜文学仓卒之间将其妻托付予义弟周仁，请求照顾其妻，而杜文学在审讯之后，被发配充至云南。',
            int2: '严府总管严年垂涎杜妻美貌，胁迫周仁献出杜妻，威迫利诱，既许以富贵，又以杜文学性命以为要挟。周仁夫妇迫于无奈，为免杜文学被害、又不忍献出杜妻，遂由周妻代嫁，洞房之时，周妻谋刺严年失手，自剔而死。',
            int3: '周仁将其妻殓葬，只能当作杜妻，因为他献出杜妻，被世人误解、以为卖兄求荣，于是受尽世人唾骂。',
            text1: '《周仁哭坟》越剧折子戏，选材自京剧《周仁献嫂》。由朱福侠编导。《周仁哭坟》一折专为《吴凤花越剧舞台艺术风采》专场表演而编写排演，集中演绎周仁在其妻坟前哭诉冤屈的情绪。',
            text2: '2019年4月24日，蔡浙飞演出的《周仁哭坟》入选第七届中国戏剧奖·梅花表演奖（第29届中国戏剧梅花奖）戏曲类获奖公示名单。',
            path1: 'https://img2.baidu.com/it/u=3264834321,2161118406&fm=26&fmt=auto&gp=0.jpg',
            path2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstc-new.8531.cn%2Fassets%2F20190530%2F1559174521113_5cef1d79159bb8144ed90266.png&refer=http%3A%2F%2Fstc-new.8531.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631926163&t=0f7eb5e01a1e7801be30ec9976adf7f2'
        }
    };
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' }}>
                <Top icon1="arrow-back" title="周仁哭坟" />
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