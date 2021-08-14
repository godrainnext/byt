import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
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
            <ScrollView style={{ backgroundColor: '#E2F4FE', flex: 1, marginBottom: pxToDp(10) }}>
                <ImageBackground source={require('../../../res/8.jpg')} style={{ height: pxToDp(150) }}>
                    <View style={styles.box}>
                        <TouchableOpacity onPress={() => this.context.goBack()}>
                            <Ionicons name="chevron-back" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.text1}>流派纷呈</Text>
                    </View>
                </ImageBackground>
                <View style={styles.botbox}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/1.jpg')} style={styles.image} />
                            <Text style={styles.text2}>华怡青演出专辑</Text>
                            <Text style={styles.text3}>袁派经典</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/2.jpg')} style={styles.image} />
                            <Text style={styles.text2}>越剧·范瑞娟专辑</Text>
                            <Text style={styles.text3}>范派经典</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/3.jpg')} style={styles.image} />
                            <Text style={styles.text2}>王君安尹派越剧专场</Text>
                            <Text style={styles.text3}>尹派经典</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/4.jpg')} style={styles.image} />
                            <Text style={styles.text2}>越剧·何英专辑</Text>
                            <Text style={styles.text3}>傅派经典</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/5.jpg')} style={styles.image} />
                            <Text style={styles.text2}>金美芳演出专辑</Text>
                            <Text style={styles.text3}>徐派经典</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/6.jpg')} style={styles.image} />
                            <Text style={styles.text2}>越剧·戚派精彩集锦</Text>
                            <Text style={styles.text3}>戚派经典</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/7.jpg')} style={styles.image} />
                            <Text style={styles.text2}>王派精彩折子戏</Text>
                            <Text style={styles.text3}>王派经典</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/8.jpg')} style={styles.image} />
                            <Text style={styles.text2}>越剧·陆派专辑</Text>
                            <Text style={styles.text3}>陆派经典</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/9.jpg')} style={styles.image} />
                            <Text style={styles.text2}>毕派经典唱段</Text>
                            <Text style={styles.text3}>毕派经典</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/10.jpg')} style={styles.image} />
                            <Text style={styles.text2}>越剧·张派传说</Text>
                            <Text style={styles.text3}>张派经典</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/11.jpg')} style={styles.image} />
                            <Text style={styles.text2}>越剧·吕派专辑</Text>
                            <Text style={styles.text3}>吕派经典</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/12.jpg')} style={styles.image} />
                            <Text style={styles.text2}>越剧·金派集锦</Text>
                            <Text style={styles.text3}>金派经典</Text>
                        </View>
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
        height: pxToDp(130),
        width: pxToDp(170),
        borderTopRightRadius: pxToDp(10),
        borderTopLeftRadius: pxToDp(10)
    },
    imagebox: {
        borderRadius: pxToDp(10),
        marginLeft: pxToDp(12),
        marginTop: pxToDp(15),
        height: pxToDp(190),
        width: pxToDp(170),
        backgroundColor: 'white'
    },
    text2: {
        color: 'black',
        fontSize: pxToDp(14),
        marginTop: pxToDp(5),
        marginLeft: pxToDp(5)
    },
    text3: {
        color: 'grey',
        fontSize: pxToDp(14),
        marginTop: pxToDp(5),
        marginLeft: pxToDp(5)
    }
})
export default Index;