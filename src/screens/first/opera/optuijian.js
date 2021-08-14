import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from "@react-navigation/native";
import { pxToDp } from '../../../utils/styleKits'

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#E2F4FE', flex: 1 ,marginBottom:pxToDp(10)}}>
                <ImageBackground source={require('../../../res/8.jpg')} style={{ height: pxToDp(150) }}>
                    <View style={styles.box}>
                        <TouchableOpacity onPress={() => this.context.goBack()}>
                            <Ionicons name="chevron-back" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.text1}>经典推荐</Text>
                    </View>
                </ImageBackground>
                <View style={styles.botbox}>
                    <View style={styles.imagebox}>
                        <ImageBackground source={require('../../../res/play/9.jpg')} style={styles.image}>
                            <Text style={styles.text2}>越剧经典电影《情探》傅全香/陆锦花</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.imagebox}>
                        <ImageBackground source={require('../../../res/play/10.jpg')} style={styles.image}>
                            <Text style={styles.text2}>精彩折子戏：越剧《红楼梦·宝玉哭灵》</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.imagebox}>
                        <ImageBackground source={require('../../../res/play/11.jpg')} style={styles.image}>
                            <Text style={styles.text2}>《何文秀传奇》萧雅/华怡青主演</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.imagebox}>
                        <ImageBackground source={require('../../../res/play/12.jpg')} style={styles.image}>
                            <Text style={styles.text2}>精彩越剧《屈原》叹人世黑白颠倒无是非</Text>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text1: {
        color: 'white',
        fontSize: pxToDp(24)
    },
    box: {
        height: pxToDp(120),
        justifyContent: 'space-between',
        marginLeft: pxToDp(10),
        marginTop: pxToDp(20)
    },
    botbox: {
        backgroundColor: '#ecf6fc',
        marginTop: pxToDp(-10),
        borderTopLeftRadius: pxToDp(10),
        borderTopRightRadius: pxToDp(10)
    },
    image: {
        height: pxToDp(160),
        width: pxToDp(355),
        borderRadius: pxToDp(10)
    },
    imagebox: {
        borderRadius: pxToDp(10),
        marginLeft: pxToDp(15),
        marginRight: pxToDp(15),
        marginTop: pxToDp(15),
        overflow: 'hidden'
    },
    text2: {
        color: 'white',
        fontSize: pxToDp(18),
        marginTop: pxToDp(120),
        marginLeft:pxToDp(10)
    }
})
export default Index;