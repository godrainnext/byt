import React, { PureComponent } from "react";
import { View, Text,Image} from "react-native";
import Top from '../../../component/common/top';
import { pxToDp } from "../../../utils/styleKits";


class Index extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE',flex:1}}>
                <Top icon1="arrow-back" title="点赞" />
                <View style={{ margin: pxToDp(10) }}>
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
                </View>
            </View>
        );
    }
}
export default Index;