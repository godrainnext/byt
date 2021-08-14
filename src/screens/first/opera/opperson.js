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
                        <Text style={styles.text1}>名角唱段</Text>
                    </View>
                </ImageBackground>
                <View style={styles.botbox}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/performer/1.jpg')} style={styles.image} />
                            <Text style={styles.text2}>方亚芬《梁祝》</Text>
                            <Text style={styles.text3}>第23届梅花奖</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/performer/2.jpg')} style={styles.image} />
                            <Text style={styles.text2}>王文娟《追鱼》</Text>
                            <Text style={styles.text3}>流派宗师</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/performer/3.jpg')} style={styles.image} />
                            <Text style={styles.text2}>王君《玉蜻蜓》</Text>
                            <Text style={styles.text3}>第27届梅花奖</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/performer/4.jpg')} style={styles.image} />
                            <Text style={styles.text2}>越剧·茅威涛《西厢记》</Text>
                            <Text style={styles.text3}>三度梅</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/performer/5.jpg')} style={styles.image} />
                            <Text style={styles.text2}>吴凤花《狸猫换太子》</Text>
                            <Text style={styles.text3}>二度梅</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/performer/6.jpg')} style={styles.image} />
                            <Text style={styles.text2}>单仰萍《红楼梦》</Text>
                            <Text style={styles.text3}>第17届梅花奖</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/performer/7.jpg')} style={styles.image} />
                            <Text style={styles.text2}>蔡浙飞《陆游与唐琬》</Text>
                            <Text style={styles.text3}>第29届梅花奖</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/performer/9.jpg')} style={styles.image} />
                            <Text style={styles.text2}>何赛飞《双珠凤》</Text>
                            <Text style={styles.text3}>五朵金花</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/genre/2.jpg')} style={styles.image} />
                            <Text style={styles.text2}>范瑞娟集锦</Text>
                            <Text style={styles.text3}>流派宗师</Text>
                        </View>
                        <View style={styles.imagebox}>
                            <Image source={require('../../../res/performer/10.jpg')} style={styles.image} />
                            <Text style={styles.text2}>陈丽君《陆唐》</Text>
                            <Text style={styles.text3}>浙江小百花越剧团</Text>
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