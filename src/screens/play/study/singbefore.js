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
            <View style={{ flex: 1, backgroundColor: '#E2F4FE', justifyContent: "space-between" ,fontSize:pxToDp(16)}}>

                <View style={{ alignItems: "center", }}>
                    <Top icon1='arrow-back' title="穆桂英挂帅" icon2='star-outline' />
                    <Text style={{ fontSize: pxToDp(16), fontWeight: "bold", marginTop: pxToDp(15) }}>穆桂英挂帅 - 猛听得金鼓响画角声震</Text>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ height: '60%' }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>猛听得金鼓响画角声震</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>唤起我破天门壮志凌云</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>想当年桃花马上威风凛凛</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>敌血飞溅石榴裙</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>有生之日责当尽</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>寸土怎能够属于他人</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>番王小丑何足论</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>我一剑能当百万的兵</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>猛听得金鼓响画角声震 </Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>唤起我破天门壮志凌云</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>想当年桃花马上威风凛凛</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>敌血飞溅石榴裙</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>有生之日责当尽</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>寸土怎能够属于他人</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>番王小丑何足论</Text>
                            <Text style={{ fontSize: pxToDp(16), lineHeight: pxToDp(40), alignItems: "center" }}>我一剑能当百万的兵</Text>
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

                    <View style={styles.bottom}>

                    <Mybtn
                        onPress={() => this.context.navigate("Sing")}
                        title='开始独唱'           
                        buttonStyle={{
                            width: pxToDp(320),
                            height: pxToDp(40),
                            borderRadius:pxToDp(16),
                        }}
                    />
                    </View>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({

    bottom: {
        height: pxToDp(80),
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default Index;