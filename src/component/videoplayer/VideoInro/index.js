import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image, textarea, Button, TextInput, } from 'react-native';
import { pxToDp } from '../../../utils/stylesKits';
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
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>看看关于茶叶那些事</Text>
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
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../images/4.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>《红色文物100讲》</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>《红色文物100》由国家广播电视总局、国家文物局联合出品，节目以革命文物为载体，以视听化表达来讲述党的故事、革命的故事、英雄的故事，让革命文物 “活起来”。</Text>
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
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../images/3.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>茶香</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>品茗茶香，回味无穷</Text>
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
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../images/2.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>商品茶与匠心茶的区别</Text>
                                            {/* <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>品茗茶香，回味无穷</Text> */}
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
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../images/dang6.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>百家讲坛</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>【百家讲坛】江英解读《建军大业》</Text>
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