import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity,StyleSheet,Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pxToDp } from "../../../utils/styleKits";
import Top from '../../../component/common/top';
import { NavigationContext } from "@react-navigation/native";

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{backgroundColor:"#e2f4fe",flex:1}}>
                <Top icon1="arrow-back" title="积分商城" />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: pxToDp(40) }}>110</Text>
                    <Ionicons style={{ marginTop: pxToDp(10) }} name="server-outline" size={25} color="#000000" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: 'black', borderBottomWidth: pxToDp(1), height: pxToDp(50) }}>
                    <TouchableOpacity style={{ height: pxToDp(35), width: pxToDp(90), borderRadius: pxToDp(20), borderColor: 'black', borderWidth: pxToDp(1), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: pxToDp(15) }}>积分明细</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: pxToDp(35), width: pxToDp(90), borderRadius: pxToDp(20), borderColor: 'black', borderWidth: pxToDp(1), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: pxToDp(15) }}>兑换记录</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: pxToDp(18), margin: pxToDp(10) }}>积分兑换</Text>
                <View style={styles.tcard}>
                    <View style={styles.ocard}>
                        <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                            <Image style={styles.image} source={require('../../../res/shop/14.jpg')}></Image>
                            <Text style={{ fontSize: pxToDp(15), margin: pxToDp(5)}}>越剧书签</Text>
                            <View style={styles.bottext}>
                                <Text>1000积分</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ocard}>
                        <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                            <Image style={styles.image} source={require('../../../res/shop/8.jpg')}></Image>
                            <Text style={{ fontSize: pxToDp(15),margin: pxToDp(5)}}>《柳毅传书》笔记本</Text>
                            <View style={styles.bottext}>
                                <Text>4500积分</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tcard: {
        flexDirection: 'row',
    },
    ocard: {
        backgroundColor: 'white',
        width: pxToDp(170),
        borderRadius: pxToDp(10),
        marginLeft:pxToDp(8),
        marginRight:pxToDp(8)
    },
    image: {
        height: pxToDp(170),
        width: pxToDp(170),
        borderTopLeftRadius: pxToDp(10),
        borderTopRightRadius: pxToDp(10)
    },
    bottext: {
        flexDirection: 'row',
        margin: pxToDp(5),
        justifyContent: 'space-between'
    }
})
export default Index;