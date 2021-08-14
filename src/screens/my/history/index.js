import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image,ScrollView } from "react-native";
import { pxToDp } from "../../../utils/styleKits";
import Top from '../../../component/common/top'

class Index extends PureComponent {
    render() {
        return (
            <ScrollView style={{backgroundColor:"#e2f4fe"}}>
                <Top icon1="arrow-back" title="历史浏览" />
                <View style={{ margin: pxToDp(10) }}>
                    <Text style={{ fontSize: pxToDp(16) }}>2021-7-28</Text>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(10), borderBottomColor: 'grey', borderBottomWidth: pxToDp(1), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(10) }} source={require('../../../res/play/1.jpg')} />
                        <View>
                            <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(0), marginLeft: pxToDp(7) }}>追鱼·书馆</Text>
                            <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(7) }}>上海越剧院</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(10), borderBottomColor: 'grey', borderBottomWidth: pxToDp(1), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(10) }} source={require('../../../res/play/2.jpg')} />
                        <View>
                            <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(0), marginLeft: pxToDp(7) }}>周仁哭坟</Text>
                            <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(7) }}>绍兴越剧院</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(10), borderBottomColor: 'grey', borderBottomWidth: pxToDp(1), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(10) }} source={require('../../../res/play/3.jpg')} />
                        <View>
                            <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(0), marginLeft: pxToDp(7) }}>梁祝·十八相送</Text>
                            <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(7) }}>杭州越剧院</Text>
                        </View>
                    </View>
                </View>
                <View style={{ margin: pxToDp(10) }}>
                    <Text style={{ fontSize: pxToDp(16) }}>2021-7-27</Text>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(10), borderBottomColor: 'grey', borderBottomWidth: pxToDp(1), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(10) }} source={require('../../../res/play/4.jpg')} />
                        <View>
                            <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(0), marginLeft: pxToDp(7) }}>越剧追鱼</Text>
                            <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(7) }}>今日推荐官</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: pxToDp(10), borderBottomColor: 'grey', borderBottomWidth: pxToDp(1), height: pxToDp(110) }}>
                    <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(10) }} source={require('../../../res/14.jpg')} />
                    <View>
                        <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(0), marginLeft: pxToDp(7) }}>打上一个莲花落</Text>
                        <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(7) }}>今日推荐官</Text>
                    </View>
                </View>
            </ScrollView >
        )
    }
}
const styles = StyleSheet.create({
})
export default Index;