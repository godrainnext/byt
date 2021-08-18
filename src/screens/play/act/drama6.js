import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Top from '../../../component/common/top'
import { pxToDp } from "../../../utils/styleKits";
import Ionicons from 'react-native-vector-icons/Ionicons';


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
            path: 'https://img2.baidu.com/it/u=3264834321,2161118406&fm=26&fmt=auto&gp=0.jpg'
        }
    };
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' }}>
                <Top icon1="arrow-back" title="剧本简介" />
                <ScrollView
                    style={{
                        marginLeft: pxToDp(10),
                        marginRight: pxToDp(10),
                    }}
                >
                    <Image
                        style={{ height: pxToDp(178), borderRadius: pxToDp(8), width: '100%' }}
                        source={{ uri: this.state.dramalist.path }}
                    />
                    <Text style={{ fontSize: pxToDp(24), fontWeight: 'bold', marginBottom: pxToDp(20) }}>
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
                        <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(80) }}>
                            &emsp;&emsp;{this.state.dramalist.text2}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Index;