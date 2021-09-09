import React, { PureComponent, createRef } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import { Video } from 'react-native-video'
import Mybtn from '../../../component/common/mybtn';

class Index extends PureComponent {

    state = {
        status: {},
        recording: '',
        isrecoding: false,
        playingsong: '',
        sound: [],
        isplay: false,
        URI: []
    }


    static contextType = NavigationContext;
    render() {
        const video = createRef()
        return (
            <View style={{ flex: 1, backgroundColor: '#D5E8E6', justifyContent: "space-between" ,fontSize:pxToDp(16)}}>

                <View style={{ alignItems: "center", }}>
                    <Top icon1='arrow-back' title="穆桂英挂帅"/>
                    <Text style={{ fontSize: pxToDp(18), color: '#000000', fontWeight: "bold", marginTop: pxToDp(15) }}>穆桂英挂帅 - 猛听得金鼓响画角声震</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ height: '70%' }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>猛听得金鼓响画角声震</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>唤起我破天门壮志凌云</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>想当年桃花马上威风凛凛</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>敌血飞溅石榴裙</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>有生之日责当尽</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>寸土怎能够属于他人</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>番王小丑何足论</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>我一剑能当百万的兵</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>猛听得金鼓响画角声震 </Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>唤起我破天门壮志凌云</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>想当年桃花马上威风凛凛</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>敌血飞溅石榴裙</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>有生之日责当尽</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>寸土怎能够属于他人</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>番王小丑何足论</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center", color: '#333333' }}>我一剑能当百万的兵</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                {/*<Video
                                    ref={video}
                                    source={require('./越剧追鱼.mp3')}
                                    resizeMode="contain"
                                    onPlaybackStatusUpdate={status => this.setState({ status })}
                                />*/}
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={() => this.context.navigate("Sing")} style={{ marginBottom: pxToDp(15), backgroundColor: "#468CD3", width: pxToDp(180), height: pxToDp(40), borderRadius: pxToDp(24), justifyContent: "center", alignItems: "center", alignSelf: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: pxToDp(16), color: "white" }}>开始独唱</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        height: pxToDp(90),
        marginTop: pxToDp(5),
        marginLeft: pxToDp(17),
        borderBottomWidth: pxToDp(1),
        borderBottomColor: '#696969'
    },
    image: {
        height: pxToDp(80),
        width: pxToDp(80)
    },
    text1: {
        fontSize: pxToDp(16),
        color: '#000000'
    },
    text2: {
        fontSize: pxToDp(16),
        color: '#696969'
    },
    text3: {
        fontSize: pxToDp(11),
        color: '#808080',
        marginTop: pxToDp(40)
    }
})

export default Index;