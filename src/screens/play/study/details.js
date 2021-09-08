import React, { PureComponent } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import Mybtn from '../../../component/common/mybtn';
import LinearGradient from 'react-native-linear-gradient'
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#D5E8E6', flex: 1 }}>
                <Top icon1='arrow-back' title="详情" />
                <View>
                    <View style={styles.top}>
                        <Image style={styles.image} source={require('../../../res/6.png')}></Image>
                        <View style={{ justifyContent: 'space-between', marginLeft: pxToDp(8), height: pxToDp(70), marginTop: pxToDp(24), marginRight: pxToDp(8) }}>
                            <Text style={styles.text1}>穆桂英挂帅</Text>
                            <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                            <Text style={styles.text3}>1959人唱过</Text>
                        </View>
                    </View>
                    <View>
                        {/* <TouchableOpacity style={{ backgroundColor: "#6666", width: pxToDp(80), height: pxToDp(25), justifyContent: "center", alignItems: "center", marginLeft: pxToDp(25), borderRadius: pxToDp(16) }}>
                            <Text style={{ fontSize: pxToDp(12), fontWeight: "bold", color: "white" }}>练唱</Text>
                        </TouchableOpacity> */}
                        <Mybtn
                            onPress={() => this.context.navigate("Sing")}
                            title='开始独唱'
                            buttonStyle={{
                                width: pxToDp(160),
                                height: pxToDp(40),
                                borderRadius: pxToDp(32),
                                alignSelf: 'center',
                                marginTop: pxToDp(16)

                            }}
                        />
                    </View>
                    <View style={styles.center}>
                        <View style={{ borderRadius: pxToDp(8), marginLeft: pxToDp(10), marginRight: pxToDp(10), marginTop: pxToDp(16), backgroundColor: "#D5E8E6" }}>
                            <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold', marginLeft: pxToDp(8), marginTop: pxToDp(8) }}>曲子简介</Text>
                            <Text style={{ fontSize: pxToDp(14), lineHeight: pxToDp(24), marginLeft: pxToDp(8), marginTop: pxToDp(6), marginBottom: pxToDp(8) }}>
                                猛听得金鼓响画角声震，唤起我破天门壮志凌云。{'\n'}
                                想当年桃花马上威风凛凛，敌血飞溅石榴裙。{'\n'}
                                有生之日责当尽，寸土怎能够属于他人。{'\n'}
                                番王小丑何足论，我一剑能当百万的兵。
                            </Text>
                        </View>
                    </View>
                </View>
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
        fontSize: pxToDp(12),
        color: '#666666',
        marginTop: pxToDp(2)
    },
    text3: {
        fontSize: pxToDp(12),
        color: '#808080',
        marginTop: pxToDp(5)
    },
    top: {
        height: pxToDp(110),
        backgroundColor: 'white',
        flexDirection: "row",
        alignSelf: 'center',
        marginTop: pxToDp(8),
        borderRadius: pxToDp(8)
    },
    image: {
        height: pxToDp(100),
        width: pxToDp(130),
        marginLeft: pxToDp(8)
    },
    center: {
        width: "100%",
        height: pxToDp(700),
        backgroundColor: "white",
        marginTop: pxToDp(15),
        borderTopLeftRadius: pxToDp(8),
        borderTopRightRadius: pxToDp(8),
    },
    bottom: {
        height: pxToDp(50),
        width: '100%',
        backgroundColor: '#3399cc',
        alignSelf: 'center',
        alignItems: 'center'
    },
    box: {
        borderRadius: pxToDp(8),
        marginLeft: pxToDp(10),
        marginRight: pxToDp(10),
        marginTop: pxToDp(10),
        backgroundColor: "white",
        elevation: 8,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'black',  //  阴影颜色
        shadowRadius: pxToDp(10),  //  圆角
    }
})


export default Index;