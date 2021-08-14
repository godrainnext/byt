import React, { PureComponent } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import Top from '../../../component/common/top'
import { pxToDp } from "../../../utils/styleKits";

class Index extends  PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: '#E2F4FE' ,flex:1}}>
                <Top icon1="arrow-back" title="粉丝" />
                <View>
                    <View>
                        <TextInput style={styles.textinput}
                            placeholder="搜索我的粉丝" />
                    </View>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.image} source={require('../../../res/4.jpg')} />
                            <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(10) }}>Jauua</Text>
                        </View>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={{ fontSize: pxToDp(16) ,color:'pink'}}>已互粉</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.image} source={require('../../../res/4.jpg')} />
                            <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(10) }}>qwerdsjos</Text>
                        </View>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={{ fontSize: pxToDp(16),color:'pink' }}>已互粉</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.image} source={require('../../../res/4.jpg')} />
                            <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(10) }}>风</Text>
                        </View>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={{ fontSize: pxToDp(16),color:'pink' }}>关注</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textinput: {
        backgroundColor: '#F5F5F5',
        textAlign: 'center',
        height: pxToDp(40),
        borderRadius: pxToDp(30),
        marginLeft: pxToDp(10),
        marginRight: pxToDp(10),
        marginTop: pxToDp(5)
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: pxToDp(10),
        borderBottomWidth: pxToDp(1),
        borderBottomColor:'#D3D3D3',
        height: pxToDp(65)
    },
    image: {
        height: pxToDp(50),
        width: pxToDp(50),
        borderRadius: pxToDp(25),
        marginLeft: pxToDp(10)
    },
    touch:{ 
        height: pxToDp(30), 
        width: pxToDp(80), 
    
        marginRight: pxToDp(10), 
        alignSelf: 'center', 
        borderRadius: pxToDp(20), 
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 1,
            backgroundColor: 'white', 
        borderColor:'pink'
    }
})
export default Index;