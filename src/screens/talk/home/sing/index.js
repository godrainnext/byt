import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    TouchableNativeFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '@utils/styleKits';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';
import Mybtn from '../../../../component/common/mybtn';
export default class hello extends Component {
    static contextType = NavigationContext;
    state = {
        color: '#468cd3',
        text: '',
        appId: '29792ec3eded410facd609fb7ad76fef',
        peerIds: [],
        token:
            '00629792ec3eded410facd609fb7ad76fefIADCc8H70U749XGwDaAgInl0TjHWz2j6gN0U1okFKIK5sUgDg6MAAAAAEACcjToMHqkYYQEAAQAeqRhh',
        channelName: 'ABC',
        arr: [
            {
                bacUriL:
                    'https://anchorpost.msstatic.com/cdnimage/anchorpost/1033/27/a678d87465509b7483726f82dfba20_2168_1627155664.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                nameL: '糖可爱',
                titleL: '恭喜镇长超皇恭喜真爷超皇！ 大象np',
                numL: '2.5万',
                bacUriR:
                    'https://anchorpost.msstatic.com/cdnimage/anchorpost/1032/dc/d7e5883b0e124c0c0834e960090c95_5883_1606125262.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                nameR: '郭德纲于谦相声24小时',
                titleR: '【无唱段】郭德纲于谦相声德云晚安音频轮播',
                numR: '7546',
                appId: '29792ec3eded410facd609fb7ad76fef',
                channelName: 'ABC',
                token:
                    '00629792ec3eded410facd609fb7ad76fefIAAbKUcPA8ZKD6c3OvRQ3dLsbHqp9OSHU+zfE7bUrcatNkgDg6MAAAAAEACcjToMxfsZYQEAAQDE+xlh',
                roomName: 'hdia'
            }
        ],
    };

    render() {
        const { text } = this.state;
        const chafang = () => {
            this.Scrollable3.close();
            this.context.navigate('SeeFang', {
                roomName: this.state.arr[0].roomName,
                channelName: this.state.text,
                token: this.state.arr[0].token,
                startCall: this.startCall,
                peerIds: this.state.peerIds
            });
        };
        return (
            <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
                <View style={styles.touchbox}>
                    <TouchableNativeFeedback
                        useForeground={true}
                        onPress={() => this.context.navigate('Study')}>
                        <View style={styles.touch} >
                            <View>
                                <Text style={styles.text1}>单人练唱</Text>
                                <Text style={styles.text2}>个人练习</Text>
                            </View>
                            <Image style={styles.touchimage} source={require('../../../../res/麦.png')} />
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        useForeground={true}
                        onPress={() => this.context.navigate('KaiFang')}>
                        <View style={styles.touch} >
                            <View>
                                <Text style={styles.text1}>创建歌房</Text>
                                <Text style={styles.text2}>点击创建</Text>
                            </View>
                            <Image style={styles.touchimage} source={require('../../../../res/房子.png')} />
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        useForeground={true}
                        onPress={() => this.Scrollable3.open()}>
                        <View style={styles.touch} >
                            <View>
                                <Text style={styles.text1}>加入歌房</Text>
                                <Text style={styles.text2}>双人合唱</Text>
                            </View>
                            <Image style={styles.touchimage} source={require('../../../../res/加入.png')} />
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        useForeground={true}>
                        <View style={styles.touch} >
                            <View>
                                <Text style={styles.text1}>快速匹配</Text>
                                <Text style={styles.text2}>随机寻找伙伴</Text>
                            </View>
                            <Image style={styles.touchimage} source={require('../../../../res/加入.png')} />
                        </View>
                    </TouchableNativeFeedback>
                    {/**查找房间 */}
                    <RBSheet
                        ref={(ref) => {
                            this.Scrollable3 = ref;
                        }}
                        height={160}
                        width={375}
                        closeOnDragDown
                        customStyles={{
                            container: {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        }}
                    >
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.gridContainer}>
                                <TouchableOpacity>
                                    <View>
                                        <TextInput
                                            value={text}
                                            onChangeText={(t) => this.setState({ text: t })}
                                            style={styles.textinputbox}
                                            placeholder="输入房间号"
                                            textAlign="center"
                                        ></TextInput>
                                    </View>
                                </TouchableOpacity>
                                <Mybtn
                                    title="进入房间"
                                    onPress={chafang}
                                    ViewComponent={LinearGradient}
                                    buttonStyle={{
                                        width: pxToDp(180),
                                        height: pxToDp(40),
                                        alignSelf: 'center',
                                        borderRadius: pxToDp(32),
                                        marginTop: pxToDp(29)

                                    }}
                                    titleStyle={{
                                        color: '#fcfcfc',
                                        fontWeight: 'bold',
                                        fontSize: pxToDp(16)
                                    }}
                                    linearGradientProps={{
                                        colors: ['#fa9222', '#ffd501'],
                                        start: { x: 0, y: 0.5 },
                                        end: { x: 1, y: 0.5 }
                                    }} />
                            </View>
                        </ScrollView>
                    </RBSheet>
                </View>
                <LinearGradient
                    style={styles.linear}
                    colors={['rgba(249,203,139,0.5)', 'white']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={{ marginTop: pxToDp(10), marginLeft: pxToDp(16) }}>
                        <Text style={styles.text1}>我的歌房</Text>
                        <Text style={styles.text2}>房间号</Text>
                    </View>
                    <View style={{ width: '100%', borderRadius: 8, opacity: .8, marginTop: pxToDp(10), marginLeft: pxToDp(16), flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F9964797201%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126834&t=6f83c03046ff8f1731e50f76fcab6680' }} />
                        <View style={{ marginLeft: pxToDp(16), justifyContent: 'center' }}>
                            <Text style={styles.text1}>石斑的歌房</Text>
                            <Text style={styles.text2}>私人房间</Text>
                        </View>
                    </View>
                </LinearGradient>

                <LinearGradient
                    style={styles.linear}
                    colors={['rgba(249,203,140,0.5)', 'white']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={{ marginTop: pxToDp(10), marginLeft: pxToDp(16) }}>
                        <Text style={styles.text1}>2222的歌房</Text>
                        <Text style={styles.text2}>房间号</Text>
                    </View>
                    <View style={{ width: '100%', borderRadius: 8, opacity: .8, marginTop: pxToDp(10), marginLeft: pxToDp(16), flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://www.zhongguofeng.com/uploads/allimg/170621/8-1F621153120.jpg' }} />
                        <View style={{ marginLeft: pxToDp(16), justifyContent: 'center' }}>
                            <Text style={styles.text1}>2222的歌房</Text>
                            <Text style={styles.text2}>公开房间</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: 'white',
        padding: pxToDp(16)
    },
    touchbox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    touch: {
        width: pxToDp(165),
        height: pxToDp(70),
        backgroundColor: 'rgba(143,178,201,0.5)',
        borderRadius: pxToDp(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: pxToDp(8)
    },
    text1: {
        fontSize: pxToDp(18),
        color: '#000000',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: pxToDp(14),
        color: '#666666'
    },
    linear: {
        height: pxToDp(200),
        marginTop: pxToDp(16),
        borderRadius: pxToDp(8)
    },
    image: {
        width: pxToDp(100),
        height: pxToDp(100),
        borderRadius: pxToDp(8)
    },
    text: {
        fontSize: pxToDp(13),
        color: 'white'
    },
    textbox: {
        height: pxToDp(40),
        width: pxToDp(180),
        borderRadius: pxToDp(32),
        backgroundColor: '#468cd3',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: pxToDp(8)
    },
    textinputbox: {
        height: pxToDp(40),
        width: pxToDp(180),
        borderRadius: pxToDp(32),
        backgroundColor: 'white',
        marginTop: pxToDp(8),
        borderColor: 'grey',
        borderWidth: pxToDp(1)
    },
    gridContainer: {
        height: '100%',
        width: pxToDp(375),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    touchimage: {
        height: pxToDp(50),
        width: pxToDp(50),
        borderRadius: pxToDp(25)
    }
});