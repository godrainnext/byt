import React,{ Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image, textarea, Button, TextInput, } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
class index extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ marginVertical: 2, padding: 10, }}>
                    <View style={{ marginVertical: 2, padding: 10, }}>
                        <View>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}></Text>
                            <Text style={{ fontSize: pxToDp(14), color: 'gray' }}>1687播放&emsp;321喜欢</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(16), marginBottom: pxToDp(16) }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon1 name="thumb-up" size={26} color={'gray'} />
                                <Text>2.1w</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon1 name="grade" size={32} color={'gray'} />
                                <Text>2.1w</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon1 name="get-app" size={32} color={'gray'} />
                                <Text>缓存</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon1 name="share" size={30} color={'gray'} />
                                <Text>分享</Text>
                            </View>
                        </View>
                        <View>
                            <View><Text style={{ fontSize: pxToDp(20), fontWeight: "bold" }}>为你推荐</Text></View>
                            {/* <TouchableOpacity onPress={() => { this.switchVideo("http://124.129.157.208:8810/SD/zhishidian/grade_8_1/wuli_shu/01.mp4", 0) }}> */}
                            <TouchableOpacity>
                                <View style={{ width: "100%", height: pxToDp(110), borderRadius: pxToDp(10), justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }} >
                                    <View style={{ flexDirection: 'row', marginBottom: pxToDp(5), marginTop: pxToDp(5) }}>
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../res/4.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>《梁祝哀史》</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>《越剧：梁祝》可以说是越剧舞台上演出历史最悠久、留存录音最多的骨子老戏，从落地唱书到女子越剧，它经过几代艺术家的舞台实践，已成为越剧小生、旦角演员必修的看家戏。</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Icon name="control-play" size={12} color={'black'} />
                                                <Text>96.7万</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: "100%", height: pxToDp(110), borderRadius: pxToDp(10), justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }} >
                                    <View style={{ flexDirection: 'row', marginBottom: pxToDp(5), marginTop: pxToDp(5) }}>
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../res/3.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>《祥林嫂》</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>祥林嫂年轻守寡，婆婆在重债逼迫和卫老二的怂恿下，将她卖给山里猎户贺老六为妻。祥林嫂不愿再婚，逃至鲁四老爷家帮工，数月后被卫老二发现，抢至山中与贺老六成亲，婚后生子阿毛。</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Icon name="control-play" size={12} color={'black'} />
                                                <Text>24.7万</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: "100%", height: pxToDp(110), borderRadius: pxToDp(10), justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }} >
                                    <View style={{ flexDirection: 'row', marginBottom: pxToDp(5), marginTop: pxToDp(5) }}>
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../res/1.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>追鱼 </Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>追鱼，越剧剧目。其主要剧情为：北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭.</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Icon name="control-play" size={12} color={'black'} />
                                                <Text>24.7万</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: "100%", height: pxToDp(110), borderRadius: pxToDp(10), justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }} >
                                    <View style={{ flexDirection: 'row', marginBottom: pxToDp(5), marginTop: pxToDp(5) }}>
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../res/16.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>越剧《红楼梦》</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>优美的山水园林，抒情的越剧音乐，演唱出《红楼梦》中一系列女性悲歌：王熙凤、林黛玉、薛宝钗、元春、迎春、探春、惜春、湘云、秦可卿、尤二姐、尤三姐、金钏、司棋、晴雯、鸳鸯、紫鹃等人</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Icon name="control-play" size={12} color={'black'} />
                                                <Text>24.7万</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(16) }}>
                            <Text style={{ fontSize: pxToDp(16) }}>暂无更多</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

export default index;