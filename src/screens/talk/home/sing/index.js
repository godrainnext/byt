import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground, Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '@utils/styleKits';
import LinearGradient from 'react-native-linear-gradient';
export default class hello extends Component {
    static contextType = NavigationContext;
    state = {

    };

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width }}>
                <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: pxToDp(20) }}>
                    <TouchableOpacity style={{ width: '32%', height: 70, backgroundColor: 'yellow', borderRadius: 8, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: pxToDp(15) }}>创建歌房</Text>
                        <Text style={{ fontSize: 12, color: '#ccc', marginLeft: pxToDp(15) }}>点击创建</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '32%', height: 70, backgroundColor: 'yellow', borderRadius: 8, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: pxToDp(15) }}>单人练唱</Text>
                        <Text style={{ fontSize: 12, color: '#ccc', marginLeft: pxToDp(15) }}>输入房间号</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '32%', height: 70, backgroundColor: 'yellow', borderRadius: 8, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: pxToDp(15) }}>加入歌房</Text>
                        <Text style={{ fontSize: 12, color: '#ccc', marginLeft: pxToDp(15) }}>点击开启</Text>
                    </TouchableOpacity>
                </View>
                <LinearGradient
                    style={{ width: '90%', height: 200, alignSelf: 'center', marginTop: pxToDp(30), borderRadius: 8 }}
                    colors={['#b0a4e3', 'white']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={{ marginTop: pxToDp(10) }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: pxToDp(15) }}>我的歌房</Text>
                        <Text style={{ fontSize: 12, color: 'gray', marginLeft: pxToDp(15) }}>输入房间号</Text>
                    </View>
                    <View style={{ width: '100%', borderRadius: 8, opacity: .8, marginTop: pxToDp(20), marginLeft: pxToDp(15), flexDirection: 'row' }}>
                        <Image
                            style={{ width: pxToDp(100), height: pxToDp(100), borderRadius: 8 }}
                            source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F9964797201%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126834&t=6f83c03046ff8f1731e50f76fcab6680' }} />
                        <View style={{justifyContent:'space-around'}}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: pxToDp(15) }}>
                                石斑的歌房
                            </Text>
                            <Text style={{ fontSize: 12, color: 'orange', marginLeft: pxToDp(15) }}>输入房间号</Text>
                            <Text style={{ fontSize: 12, color: 'gray', marginLeft: pxToDp(15) }}>输入房间号</Text>
                        </View>
                    </View>
                </LinearGradient>
                <LinearGradient
                    style={{ width: '90%', height: 200, alignSelf: 'center', marginTop: pxToDp(30), borderRadius: 8 }}
                    colors={['#b0a4e3', 'white']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={{ marginTop: pxToDp(10) }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: pxToDp(15) }}>我的歌房</Text>
                        <Text style={{ fontSize: 12, color: 'gray', marginLeft: pxToDp(15) }}>输入房间号</Text>
                    </View>
                    <View style={{ width: '100%', borderRadius: 8, opacity: .8, marginTop: pxToDp(20), marginLeft: pxToDp(15), flexDirection: 'row' }}>
                        <Image
                            style={{ width: pxToDp(100), height: pxToDp(100), borderRadius: 8 }}
                            source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F9964797201%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126834&t=6f83c03046ff8f1731e50f76fcab6680' }} />
                        <View style={{justifyContent:'space-around'}}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: pxToDp(15) }}>
                                石斑的歌房
                            </Text>
                            <Text style={{ fontSize: 12, color: 'orange', marginLeft: pxToDp(15) }}>输入房间号</Text>
                            <Text style={{ fontSize: 12, color: 'gray', marginLeft: pxToDp(15) }}>输入房间号</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}
