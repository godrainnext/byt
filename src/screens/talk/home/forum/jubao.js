import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Top from '../../../../component/common/top'
import { pxToDp } from "../../../../utils/styleKits";
import Mybtn from "../../../../component/common/mybtn";

class Index extends PureComponent {
    state = {

    }
    render() {
        return (
            <View style={{ backgroundColor: '#D5E8E6', flex: 1 }}>
                <Top icon1="arrow-back" title="举报" />
                <View style={{ marginLeft: pxToDp(10), marginRight: pxToDp(10) }}>
                    <Text style={styles.title}>请选择你想要举报的类型</Text>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>垃圾营销</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>涉黄信息</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>不实信息</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>人身攻击</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>有害信息</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>内容抄袭</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>违法信息</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>诈骗信息</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>涉未成年人</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>添加文字描述</Text>
                    <TextInput style={styles.textinput} />
                    <Mybtn
                        title="提交"
                        buttonStyle={{
                            width: pxToDp(320),
                            marginTop: pxToDp(275),
                            height: pxToDp(40),
                            alignSelf: 'center',
                            borderRadius: pxToDp(32),
                        }}
                        titleStyle={{
                            color: 'white',
                            fontSize: pxToDp(16)
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    touch: {
        backgroundColor: '#DCDCDC',
        borderRadius: pxToDp(8),
        width: pxToDp(90),
        height: pxToDp(30),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: pxToDp(10)
    },
    title: {
        fontSize: pxToDp(16),
        marginTop: pxToDp(10),
        color: '#62bfad'
    },
    text: {
        fontSize: pxToDp(14)
    },
    box: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: pxToDp(350),
        justifyContent: 'space-around',
        marginTop: pxToDp(5),
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: pxToDp(135),
        borderRadius: pxToDp(8)
    },
    textinput: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: pxToDp(150),
        width: pxToDp(350),
        borderRadius: pxToDp(8),
        marginTop: pxToDp(5)
    },
    tijiao: {
        height: pxToDp(30),
        width: pxToDp(230),
        backgroundColor: '#468cd3',
        borderRadius: pxToDp(16),
        marginTop: pxToDp(50),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});
export default Index;