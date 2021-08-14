import React, { PureComponent } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from "@react-navigation/native";

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: '闰先生',
                    time: "08-02 16:00",
                    title: "穆桂英挂帅",
                    image: require("../../../res/播放.png")
                },
                {
                    id: 2,
                    name: '闰先生',
                    time: "08-02 16:00",
                    title: "穆桂英挂帅",
                    image: require("../../../res/播放.png")
                },
                {
                    id: 3,
                    name: '闰先生',
                    time: "08-02 16:00",
                    title: "穆桂英挂帅",
                    image: require("../../../res/播放.png")
                },
                {
                    id: 4,
                    name: '闰先生',
                    time: "08-02 16:00",
                    title: "穆桂英挂帅",
                    image: require("../../../res/播放.png")
                },
                {
                    id: 5,
                    name: '闰先生',
                    time: "08-02 16:00",
                    title: "穆桂英挂帅",
                    image: require("../../../res/播放.png")
                },
                {
                    id: 6,
                    name: '闰先生',
                    time: "08-02 16:00",
                    title: "穆桂英挂帅",
                    image: require("../../../res/播放.png")
                }
            ],
        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
                <View>
                    <Top icon1='arrow-back' title="详情" />
                </View>
                <ScrollView>
                    <View style={styles.top}>
                        <Image style={styles.image} source={require('../../../res/6.png')}></Image>
                        <View style={{ justifyContent: "center", marginLeft: pxToDp(10) }}>
                            <Text style={styles.text1}>穆桂英挂帅</Text>
                            <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                            <Text style={styles.text3}>1959人唱过</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ backgroundColor: "#6666", width: pxToDp(80), height: pxToDp(25), justifyContent: "center", alignItems: "center", marginLeft: pxToDp(25), borderRadius: pxToDp(16) }}>
                            <Text style={{ fontSize: pxToDp(12), fontWeight: "bold", color: "white" }}>练唱</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.context.navigate("Singbefore")} style={{ backgroundColor: "#468CD3", width: pxToDp(230), height: pxToDp(25), justifyContent: "center", alignItems: "center", marginLeft: pxToDp(25), borderRadius: pxToDp(16) }}>
                            <Text style={{ fontSize: pxToDp(12), fontWeight: "bold", color: "white" }}>我要跟唱</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center}>
                        <View style={{ borderRadius: pxToDp(8), marginLeft: pxToDp(10), marginRight: pxToDp(10), marginTop: pxToDp(15), backgroundColor: "#E2F4FE" }}>
                            <Text style={{ fontSize: pxToDp(15), margin: pxToDp(10) }}>曲子简介{'\n'}
                                猛听得金鼓响画角声震，唤起我破天门壮志凌云。{'\n'}
                                想当年桃花马上威风凛凛，敌血飞溅石榴裙。{'\n'}
                                有生之日责当尽，寸土怎能够属于他人。{'\n'}
                                番王小丑何足论，我一剑能当百万的兵。
                            </Text>
                        </View>
                        {this.state.products.map((item, index) => (
                            <View style={{ borderRadius: pxToDp(8), marginLeft: pxToDp(10), marginRight: pxToDp(10), marginTop: pxToDp(10), backgroundColor: "#E2F4FE" }}>
                                <View style={{ flexDirection: "row", margin: pxToDp(15), alignItems: "center", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image source={require('../../../res/7.jpg')} style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(40) }} />
                                        <View style={{ marginLeft: pxToDp(10) }}>
                                            <Text style={{ fontSize: pxToDp(14), fontWeight: "bold" }}>{item.name}</Text>
                                            <Text style={{ fontSize: pxToDp(12), color: "#666", marginTop: pxToDp(5) }}>{item.time}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{ backgroundColor: "white", width: pxToDp(50), height: pxToDp(25), justifyContent: "center", alignItems: "center", borderRadius: pxToDp(16) }}>
                                        <Text style={{ fontWeight: "bold", color: "red" }}>关注</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "100%", alignItems: "center" }}>
                                    <TouchableOpacity style={{ width: pxToDp(200), height: pxToDp(230), justifyContent: "flex-end" }}>
                                        <ImageBackground imageStyle={{ borderRadius: pxToDp(8) }} style={{ width: "100%", height: "100%" }} source={require('../../../res/8.jpg')}>
                                            <View style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}>
                                                <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", marginLeft: pxToDp(10), marginRight: pxToDp(10), marginBottom: pxToDp(10) }}>
                                                    <Text style={{ fontSize: pxToDp(15), color: "white" }}>{item.title}</Text>
                                                    <TouchableOpacity>
                                                        <Image style={{ width: pxToDp(30), height: pxToDp(30) }} source={require("../../../res/播放.png")} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <View style={{ width: "100%", height: pxToDp(20) }} />
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text1: {
        fontSize: pxToDp(16),
        fontWeight: "bold",
        color: '#000000'
    },
    text2: {
        fontSize: pxToDp(13),
        color: '#696969',
        marginTop: pxToDp(5)
    },
    text3: {
        fontSize: pxToDp(13),
        color: '#808080',
        marginTop: pxToDp(5)
    },
    top: {
        height: pxToDp(110),
        backgroundColor: '#E2F4FE',
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        height: pxToDp(100),
        width: pxToDp(130),
        marginLeft: pxToDp(10),
        marginBottom: pxToDp(10)
    },
    center: {
        width: "100%",
        backgroundColor: "white",
        marginTop: pxToDp(15),
        borderTopLeftRadius: pxToDp(16),
        borderTopRightRadius: pxToDp(16),
    },
    bottom: {
        height: pxToDp(50),
        width: '100%',
        backgroundColor: '#3399cc',
        alignSelf: 'center',
        alignItems: 'center'
    }
})


export default Index;