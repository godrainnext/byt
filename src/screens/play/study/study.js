import React, { PureComponent } from 'react';
import { View, Image, ScrollView, TextInput, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback } from 'react-native';
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
                    content: "秀鸾刀破天门阵, 桃花马踏西夏川。",
                    listener: "13526人唱过",
                    image: "https://img0.baidu.com/it/u=35873461,1923186899&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 2,
                    title: '梁祝',
                    content: "思往事渺茫茫不堪烟梦，多少悔无边恨苦涩酸辛。",
                    listener: "22546人唱过",
                    image: "https://img2.baidu.com/it/u=207643023,600080192&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 3,
                    title: '柳永',
                    content: "思绵绵，恨绵绵，难堪屈指想当年。",
                    listener: "12112人唱过",
                    image: "https://img1.baidu.com/it/u=720064541,3497357660&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 4,
                    title: '红楼梦',
                    content: "红楼今犹在，唯有风月鉴空。",
                    listener: "17758人唱过",
                    image: "https://img2.baidu.com/it/u=2932484343,1004633708&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 5,
                    title: '追鱼',
                    content: "碧波潭微波荡漾，桂花金黄影横窗。空对此一轮明月，怎奈我百转愁肠。",
                    listener: "9846人唱过",
                    image: "https://img1.baidu.com/it/u=4103620704,420644192&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    id: 6,
                    title: '白兔记',
                    content: "望东方雪茫茫心驰神往，似看见玉桂树含泪相望。",
                    listener: "13663人唱过",
                    image: "https://img1.baidu.com/it/u=3612396864,2823727184&fm=26&fmt=auto&gp=0.jpg"
                }
            ],
        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <Top icon1='arrow-back' title="单人练唱" />
                <View style={{paddingBottom: 1, flex: 1,}}>
                    {/* <View style={{ flexDirection: "row", backgroundColor: "white", height: pxToDp(35), alignItems: "center", borderRadius: pxToDp(16) }}>
                        <Text style={{ marginLeft: pxToDp(20), fontSize: pxToDp(14) }}>搜索</Text>
                        <TextInput style={{ marginLeft: pxToDp(5), width: pxToDp(290) }}
                            placeholder="" />
                    </View> */}
                    <ScrollView showsVerticalScrollIndicator = {false} >
                        <View style={{marginBottom:pxToDp(10)}}>
                        {this.state.products.map((item, index) => (
                            <TouchableNativeFeedback onPress={() => this.context.navigate("Details")}>
                                <View style={styles.box}>
                                    <Image style={styles.image} source={{ uri: item.image }}></Image>
                                    <View style={{marginTop:pxToDp(10),marginBottom:pxToDp(10),justifyContent:'space-between'}}>
                                        <Text style={styles.text1}>{item.title}</Text>
                                        <Text style={styles.text2}>{item.content}</Text>
                                        <Text style={styles.text3}>{item.listener}</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    box: {
        flexDirection: 'row',
        borderRadius: pxToDp(8),
        elevation: 2,
        shadowColor: '#999999',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius:pxToDp(8),
        marginRight:pxToDp(16),
        marginLeft:pxToDp(16),
        marginTop:pxToDp(8)
    },
    image: {
        height: pxToDp(110),
        width: pxToDp(90),
        borderRadius: pxToDp(8),
        margin:pxToDp(8)
    },
    text1: {
        fontSize: pxToDp(18),
        color: '#000000',
        fontWeight: 'bold',
    },
    text2: {
        fontSize: pxToDp(14),
        color: '#333333',
        width:pxToDp(230)
    },
    text3: {
        fontSize: pxToDp(12),
        color: '#666666',
    }
})
export default Index;