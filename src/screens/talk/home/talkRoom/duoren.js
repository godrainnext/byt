import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { MarqueeHorizontal } from 'react-native-marquee-ab';
import SvgUri from 'react-native-svg-uri';

class DuoRen extends PureComponent {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}>
                <ImageBackground
                    style={{ flex: 1 }}
                    source={
                        require('../../../../res/sucai/13.jpg')
                    }
                >
                    {/**顶部 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: pxToDp(8), marginRight: pxToDp(8) }}>
                        <View
                            style={{
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                height: pxToDp(50),
                                width: pxToDp(190),
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: pxToDp(24),
                                padding: pxToDp(4),
                                marginTop: pxToDp(8)
                            }}
                        >
                            <View style={{ marginRight: pxToDp(8) }}>
                                <Image
                                    style={{
                                        width: pxToDp(45),
                                        height: pxToDp(45),
                                        backgroundColor: 'gray',
                                        borderRadius: pxToDp(32)
                                    }}
                                    source={{
                                        uri: 'https://img1.baidu.com/it/u=1822128875,2988950390&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'
                                    }}
                                ></Image>
                            </View>
                            <View>
                                <MarqueeHorizontal
                                    textList={[
                                        { label: '1', value: 12345 },
                                        { label: '2', value: 12345 },
                                        { label: '3', value: 12345 }
                                    ]}
                                    speed={20}
                                    width={80}
                                    height={30}
                                    direction={'left'}
                                    reverse={false}
                                    bgContainerStyle={{ backgroundColor: 'transparent' }}
                                    textStyle={{ fontSize: 16, color: 'white' }}
                                />
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    避雨
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    borderRadius: pxToDp(32),
                                    backgroundColor: '#62bfad',
                                    marginLeft: pxToDp(8),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: pxToDp(26)
                                }}
                            >
                                <View
                                    style={{
                                        padding: pxToDp(2),
                                        width: pxToDp(40),
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text style={{ color: 'white', fontSize: 12 }}>关注</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={{
                                height: pxToDp(24),
                                width: pxToDp(24),
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: pxToDp(24),
                                padding: pxToDp(4),
                                marginTop: pxToDp(8)
                            }}
                        >
                            <SvgUri svgXmlData='<svg t="1631176303657" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2963" width="200" height="200"><path d="M1013.44 484.736l-170.24-212.992a42.752 42.752 0 0 0-47.488-13.632 42.688 42.688 0 0 0-28.416 40.192v127.808H426.432a85.12 85.12 0 0 0 0 170.304h340.736v127.872a42.496 42.496 0 0 0 75.84 26.56l170.432-212.992a42.176 42.176 0 0 0 0-53.12z m-416.64 367.36H255.36c-46.72 0-84.608-38.08-84.608-85.12v-512c0-46.72 38.144-84.544 85.312-84.544h340.736a85.12 85.12 0 0 0 0-170.24H170.88A170.432 170.432 0 0 0 0.448 170.496v681.6a170.432 170.432 0 0 0 170.432 170.432h425.984a85.12 85.12 0 0 0 0-170.432z" p-id="2964" fill="#707070"></path></svg>' width='20' height='20' />
                        </TouchableOpacity>
                    </View>
                    {/**房主头像 */}
                    <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', marginTop: pxToDp(24) }}>
                        <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30) }} source={{ uri: 'https://img1.baidu.com/it/u=1822128875,2988950390&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500' }} />
                        <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(4) }}>避雨</Text>
                    </TouchableOpacity>
                    {/**伙伴头像 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={styles.box}>
                            <Image style={styles.image} source={{ uri: 'https://img2.baidu.com/it/u=1299709147,2175986875&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500' }} />
                            <Text style={styles.name}>猪倌</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <Image style={styles.image} source={{ uri: 'https://img0.baidu.com/it/u=447812639,2223354455&fm=253&fmt=auto&app=120&f=JPEG?w=300&h=275' }} />
                            <Text style={styles.name}>倚楼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <Image style={styles.image} source={{ uri: 'https://img2.baidu.com/it/u=649750005,2251881577&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=519' }} />
                            <Text style={styles.name}>木已成舟</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/加号.png')} />
                            <Text style={styles.name}>等待上麦</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/加号.png')} />
                            <Text style={styles.name}>等待上麦</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/加号.png')} />
                            <Text style={styles.name}>等待上麦</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/加号.png')} />
                            <Text style={styles.name}>等待上麦</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <Image style={styles.image} source={require('../../../../res/加号.png')} />
                            <Text style={styles.name}>等待上麦</Text>
                        </TouchableOpacity>
                    </View>
                    {/**讨论 */}
                    <WebView
                        style={{
                            width: pxToDp(300),
                            height: pxToDp(400),
                            backgroundColor: 'transparent'
                        }}
                        // source={{ html: HTML }}
                        source={{ uri: 'file:///android_asset/static.bundle/liuyan.html' }}
                        originWhitelist={['*']}
                        // source={{ html:this.props.html,baseUrl:'file:///android_asset/web/'}}
                        // source={{ html:this.props.html,baseUrl:'http://127.0.0.1:5500/src/page/test/index.html'}}
                        javaScriptEnabled={true} //是否开启js
                        domStorageEnabled={true} //是否开启存储
                        scalesPageToFit={false} //用户是否可以改变页面
                        scrollEnabled={false}
                        // injectedJavaScript={`	`}
                        onMessage={(event) => {
                            '接收h5页面传过来的消息';
                        }}
                    />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: pxToDp(24)
    },
    image: {
        height: pxToDp(50),
        width: pxToDp(50),
        borderRadius: pxToDp(25)
    },
    name: {
        fontSize: pxToDp(14),
        marginTop: pxToDp(4)
    }
})
export default DuoRen;
