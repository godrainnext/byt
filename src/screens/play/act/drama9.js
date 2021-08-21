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
            title: '蝴蝶梦',
            author: '陈薪伊',
            year: '2012年',
            int1: '《越剧 蝴蝶梦》剧情是庄周之妻田秀为助夫学道，苦守南华十年，常常顾影自怜，夜梦蝴蝶。',
            int2: '后庄周终成道林圣贤，楚国王孙造访南华，诚请庄周赴楚任相，被田秀拒绝，却引起庄周猜忌。',
            int3: '庄周又在宣道途中，偶遇小寡妇煽坟。经讯问，方知其夫临终遗言：“须待坟干方可再嫁”。于是庄周据此推理，荒唐试妻。',
            int4: '试妻过程中，他既疑又爱，既爱又疑，身不由己，时露破绽。那么这场荒诞游戏，终究如何结局，又验证了什么呢？',
            text1: '《蝴蝶梦》是我国首部水墨越剧电影，在嵊州市首映后取得观众的一致好评。',
            text2: '剧中以庄周试妻的情节，摒弃了以往男尊女卑、女人是祸水的封建思想，而且注入了许多的女性人文关怀，强烈地突出了以田秀为代表的中国古代女子自尊自强、追求人格独立的精神。',
            text3: '《蝴蝶梦》取材于明代冯梦龙“三言二拍”中“庄周试妻”的故事。这部电影采用数字虚拟合成技术，把戏曲艺术与水墨画结合在一起，记录在大银幕上，既节约成本，又可以为戏曲艺术电影开辟一条新的拍摄路径。',
            text4: '这部戏被誉为是中国越剧的一个里程碑式的作品。影片制片人是曾经担任中央电视台戏曲频道主持人的韦翔东，影片主演王志萍和郑国凤是当今越剧界王文娟、徐玉兰两位大师的顶尖传人。',
            path1: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Fab086b0965b5001548cb29bc6b5d35375e5c2c3e.jpg&refer=http%3A%2F%2Fi2.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632100517&t=94958bffbfd453bab61ed549bf650fcf',
            path2: 'https://img0.baidu.com/it/u=856597818,4242309343&fm=26&fmt=auto&gp=0.jpg'
        }
    };
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' }}>
                <Top icon1="arrow-back" title="蝴蝶梦" />
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
                        <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(10) }}>
                            &emsp;&emsp;{this.state.dramalist.int4}
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
                        <Text style={{ fontSize: pxToDp(17), marginBottom: pxToDp(20) }}>
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