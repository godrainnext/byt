import React, { PureComponent } from "react";
import { View, Text,Image,TouchableOpacity} from "react-native";
import { pxToDp } from "../../../../utils/styleKits";
import Top from '../../../../component/common/top'

class Index extends PureComponent {
    render() {
        return (
            <View style={{backgroundColor:'#E2F4FE',flex:1}}>
                <Top icon1="arrow-back" title="售后/退款" />
                <View style={{ height: pxToDp(230), marginLeft: pxToDp(20), marginRight: pxToDp(20), borderBottomWidth: pxToDp(1), borderBottomColor: 'grey' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: pxToDp(20) }}>
                        <Text style={{ fontSize: pxToDp(17) }}>百越庭售卖店</Text>
                        <Text style={{ fontSize: pxToDp(13) }}>退款</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(10) }}>
                        <Image style={{ height: pxToDp(110), width: pxToDp(110), borderRadius: pxToDp(10) }} source={require('../../../../res/18.jpg')} />
                        <Text style={{ fontSize: pxToDp(15), marginLeft: pxToDp(10) }}>戏服儿童小生衣       退款：￥128</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: pxToDp(15) }}>退款成功</Text>
                        <Text style={{ fontSize: pxToDp(15), fontWeight: 'bold' }}> 退款成功￥128元</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: pxToDp(10) }}>
                        <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center', marginRight: pxToDp(10) }}>
                            <Text style={{ fontSize: pxToDp(15) }}>删除记录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: pxToDp(15) }}>查看详情</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default Index;