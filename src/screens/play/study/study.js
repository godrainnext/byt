import React, { PureComponent } from 'react';
import { View, Image, ScrollView, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import SongItem from '../components/songitem'

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    title: '穆桂英挂帅',
                    content: "猛听得金鼓响画角声震",
                    listener: "13526人听过",
                    image: "https://img0.baidu.com/it/u=35873461,1923186899&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 2,
                    title: '梁祝',
                    content: "历尽磨难真情在， 天长地久不分开。",
                    listener: "22546人听过",
                    image: "https://img2.baidu.com/it/u=207643023,600080192&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 3,
                    title: '柳永',
                    content: "尤红殢翠、耽溺诗酒的放浪生涯",
                    listener: "12112人听过",
                    image: "https://img1.baidu.com/it/u=720064541,3497357660&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 4,
                    title: '红楼梦',
                    content: "红楼金犹在，唯有风月鉴空",
                    listener: "17758人听过",
                    image: "https://img2.baidu.com/it/u=2932484343,1004633708&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 5,
                    title: '追鱼',
                    content: "对纯真爱情的追求",
                    listener: "9846人听过",
                    image: "https://img1.baidu.com/it/u=4103620704,420644192&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 6,
                    title: '白兔记',
                    content: "悲欢离合的故事",
                    listener: "13663人听过",
                    image: "https://img1.baidu.com/it/u=3612396864,2823727184&fm=26&fmt=auto&gp=0.jpg"
                }
            ],
        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' }}>
                <Top icon1='arrow-back' title="单人练唱" />
                <View style={{ flexDirection: "row", marginLeft: pxToDp(10), marginRight: pxToDp(10), marginTop: pxToDp(10), marginBottom: pxToDp(5), backgroundColor: "white", height: pxToDp(35), alignItems: "center", borderRadius: pxToDp(16) }}>
                    <Text style={{ marginLeft: pxToDp(20), fontWeight: "bold" }}>搜索</Text>
                    <TextInput style={{ marginLeft: pxToDp(5), width: pxToDp(290) }}
                        placeholder="" />
                </View>
                <ScrollView >
                    {this.state.products.map((item, index) => (
                        <TouchableOpacity onPress={() => this.context.navigate("Details")}>
                            <View style={styles.box}>
                                <Image style={styles.image} source={{ uri: item.image }}></Image>
                                <View>
                                    <Text style={styles.text1}>{item.title}</Text>
                                    <Text style={styles.text2}>{item.content}</Text>
                                    <Text style={styles.text3}>{item.listener}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    box: {
        flexDirection: 'row',
        height: pxToDp(120),
        marginLeft: pxToDp(10),
        marginRight: pxToDp(10),
        marginTop: pxToDp(10),
        borderRadius: pxToDp(8),
        backgroundColor: "white",
        alignItems: "center",
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    image: {
        height: pxToDp(80),
        width: pxToDp(80),
        marginLeft: pxToDp(15)
    },
    text1: {
        fontSize: pxToDp(14),
        color: '#000000',
        marginLeft: pxToDp(10)
    },
    text2: {
        fontSize: pxToDp(14),
        color: '#696969',
        marginLeft: pxToDp(10)
    },
    text3: {
        fontSize: pxToDp(11),
        color: '#808080',
        marginTop: pxToDp(25),
        marginLeft: pxToDp(10)
    }
})
export default Index;