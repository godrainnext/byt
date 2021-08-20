import React, { PureComponent } from "react";
import { View, Text, Image,ScrollView } from "react-native";
import Top from '../../../component/common/top'
import { pxToDp } from "../../../utils/styleKits";

class Index extends PureComponent {
    render() {
        return (
            <ScrollView style={{ backgroundColor: "#e2f4fe" }}>
                <Top icon1="arrow-back" title="收藏" />
                <View style={{ margin: pxToDp(8) }}>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(8), borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(10) }} source={require('../../../res/play/1.jpg')} />
                        <View>
                            <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(0), marginLeft: pxToDp(8) }}>追鱼·书馆</Text>
                            <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(8) }}>上海越剧院</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(8), borderBottomColor: 'grey', borderBottomWidth: pxToDp(1), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(8) }} source={require('../../../res/play/2.jpg')} />
                        <View>
                            <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(0), marginLeft: pxToDp(8) }}>周仁哭坟</Text>
                            <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(8) }}>绍兴越剧院</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(8), borderBottomColor: 'grey', borderBottomWidth: pxToDp(1), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(10) }} source={require('../../../res/play/3.jpg')} />
                        <View>
                            <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(8), marginLeft: pxToDp(8) }}>梁祝·十八相送</Text>
                            <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(8) }}>杭州越剧院</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(8), borderBottomColor: 'grey', borderBottomWidth: pxToDp(1), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(10) }} source={require('../../../res/play/4.jpg')} />
                        <View>
                            <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(0), marginLeft: pxToDp(8) }}>越剧追鱼</Text>
                            <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(8) }}>今日推荐官</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: pxToDp(8), borderBottomColor: 'grey', borderBottomWidth: pxToDp(1), height: pxToDp(110) }}>
                    <Image style={{ height: pxToDp(100), width: pxToDp(150), borderRadius: pxToDp(8) }} source={require('../../../res/14.jpg')} />
                    <View>
                        <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(0), marginLeft: pxToDp(8) }}>打上一个莲花落</Text>
                        <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(50), marginLeft: pxToDp(8) }}>今日推荐官</Text>
                    </View>
                </View>
            </ScrollView >
        );
    }
}
export default Index;