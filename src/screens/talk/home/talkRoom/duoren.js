import React, { PureComponent } from 'react';
import { View, Text, Image, Animated, Easing, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { MarqueeHorizontal } from 'react-native-marquee-ab';
import SvgUri from 'react-native-svg-uri';
import RBSheet from 'react-native-raw-bottom-sheet';
import LottieView from 'lottie-react-native';
import Mybtn from '../../../../component/common/mybtn';
const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
};
class DuoRen extends PureComponent {
    static contextType = NavigationContext;

    constructor(props) {
        super(props);
        for (let i = 0; i < 10; i++) {
            this[`HeartArg${i}`] = new Animated.Value(0)
        }
        this.viewNum = 0
        this.state = {
            gift: [
                {
                    img: require('../../zhiboye/蓝玫瑰.png'), name: '鲜花'
                },
                {
                    img: require('../../zhiboye/666.png'), name: '666'
                },
                {
                    img: require('../../zhiboye/棒棒糖.png'), name: '棒棒糖'
                },
                {
                    img: require('../../zhiboye/红包.png'), name: '炸弹'
                },
                {
                    img: require('../../zhiboye/爱心.png'), name: '爱心'
                },
                {
                    img: require('../../zhiboye/礼盒.png'), name: '礼盒'
                },
                {
                    img: require('../../zhiboye/红包.png'), name: '红包'
                },
                {
                    img: require('../../zhiboye/火箭.png'), name: '火箭'
                },
            ],
            activeTab: 0,
            sendrocket: false
        }
    }
    changeTab = (index) => {
        this.setState({ activeTab: index });
    };
    sendGift() {

        this.setState({ sendrocket: true })
        setTimeout(() => {
            this.setState({ sendrocket: false })
        }, 1900);
        console.log(this.state.sendrocket);
    };
    startAnimate = () => {
        const COLOR_ARR = [
            '#9C89B8',
            '#F0A6CA',
            '#EFC3E6',
            '#F0E6EF',
            '#B8BEDD',
            '#5BC0EB',
            '#FDE74C',
            '#9BC53D',
            '#E55934',
            '#FA7921'
        ]
        this[`HeartArg${this.viewNum}`].setValue(0)
        //设置随机颜色
        let colorIndex = Math.floor(Math.random() * 10)
        this[`animImg${this.viewNum}`].setNativeProps({
            style: {
                tintColor: COLOR_ARR[colorIndex]
            }
        })
        //根据当前动画驱动值进行判断是否对新VIEW进行驱动
        let currentValue = this[`HeartArg${this.viewNum}`].__getValue()
        if (currentValue !== 0) {
            this.viewNum++
        }
        Animated.timing(
            this[`HeartArg${this.viewNum}`],
            {
                toValue: 3,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => {
            this[`HeartArg${this.viewNum}`].setValue(0)
        })
        //如果当前正在驱动的VIEW的数量大于8,则重置回0,让动画循环
        if (this.viewNum > 8) {
            this.viewNum = 0
        }
        this.viewNum++
    }
    render() {
        return (
            <View
                style={styles.remoteContainer}
            // contentContainerStyle={{ paddingHorizontal: 2.5 }}
            // horizontal={true}
            >

                {this.state.sendrocket ?
                    (<LottieView
                        style={{ marginLeft: pxToDp(-16), marginTop: pxToDp(-50), display: 'none' }}
                        source={require('../../../../../lottie/61505-rocket-acceleration.json')}
                        loop
                        autoPlay
                    />) : null}
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
                        <View style={{ position: 'absolute', bottom: pxToDp(283), right: pxToDp(20), height: pxToDp(30), width: pxToDp(30) }}>
                            <View style={{}} >
                                {
                                    Array(10).fill().map((_, index) => {
                                        return <Animated.Image
                                            key={index}
                                            ref={_ => this[`animImg${index}`] = _}
                                            style={[{ width: 30, height: 30 }, {
                                                top: this[`HeartArg${index}`].interpolate({
                                                    inputRange: [0, 1, 2, 3],
                                                    outputRange: [10, -100, -200, -300]
                                                }),
                                                right: this[`HeartArg${index}`].interpolate({
                                                    inputRange: [0, 1, 2, 3],
                                                    outputRange: Math.floor(Math.random() + 0.5) === 0 ? [7, 30, 15, 7] : [7, 0, 30, 10]
                                                }),
                                                transform: [{
                                                    scale: this[`HeartArg${index}`].interpolate({
                                                        inputRange: [0, 1, 2, 3],
                                                        outputRange: [0.5, 1, 1.5, 1]
                                                    })
                                                }],
                                                opacity: this[`HeartArg${index}`].interpolate({
                                                    inputRange: [0, 1, 2, 3],
                                                    outputRange: [0, 1, 0.5, 0]
                                                })
                                            }]}
                                            source={require('../../zhiboye/爱心zz.png')}
                                        />
                                    })
                                }
                            </View>
                            <TouchableOpacity onPress={this.startAnimate}
                                style={{ width: 30, height: 30 }}
                            ><Image source={require('../../zhiboye/爱心zz.png')} style={{ width: 30, height: 30 }} /></TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={{ position: 'absolute', bottom: pxToDp(33), right: pxToDp(70), height: pxToDp(30), width: pxToDp(30) }}
                            onPress={() => this.Scrollable.open()}>
                            <SvgUri
                                style={{ marginTop: pxToDp(10) }}
                                width='30' height='30'
                                svgXmlData='<svg t="1631534600864" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2543" width="200" height="200"><path d="M925.392593 227.555556H731.97037c15.17037-17.066667 24.651852-39.822222 28.444445-62.577778 3.792593-32.237037-5.688889-62.577778-24.651852-89.125926-39.822222-53.096296-117.57037-62.577778-170.666667-22.755556-28.444444 20.859259-47.407407 72.059259-60.681481 115.674074-13.274074-43.614815-32.237037-94.814815-60.681482-115.674074-53.096296-39.822222-128.948148-30.340741-170.666666 22.755556-18.962963 26.548148-28.444444 56.888889-24.651852 89.125926 3.792593 22.755556 13.274074 45.511111 28.444444 62.577778H109.985185c-26.548148 0-47.407407 20.859259-47.407407 47.407407v227.555556c0 26.548148 20.859259 47.407407 47.407407 47.407407h18.962963v369.777778c0 26.548148 20.859259 47.407407 47.407408 47.407407h680.77037c26.548148 0 47.407407-20.859259 47.407407-47.407407V549.925926h18.962963c26.548148 0 47.407407-20.859259 47.407408-47.407407v-227.555556c0-26.548148-20.859259-47.407407-45.511111-47.407407zM599.22963 98.607407c28.444444-20.859259 68.266667-15.17037 91.022222 11.377778 9.481481 13.274074 15.17037 30.340741 13.274074 47.407408-1.896296 17.066667-11.377778 32.237037-24.651852 41.718518-17.066667 13.274074-73.955556 17.066667-127.051852 15.17037 11.377778-51.2 32.237037-102.4 47.407408-115.674074z m-280.651852 11.377778c13.274074-17.066667 32.237037-24.651852 51.2-24.651852 13.274074 0 26.548148 3.792593 39.822222 13.274074 17.066667 13.274074 36.02963 66.37037 49.303704 117.570371-49.303704 1.896296-109.985185-1.896296-127.051852-15.170371-13.274074-9.481481-22.755556-24.651852-24.651852-41.718518-3.792593-18.962963 1.896296-36.02963 11.377778-49.303704zM117.57037 493.037037V284.444444H398.222222v208.592593H117.57037z m68.266667 417.185185V549.925926H398.222222v360.296296H185.837037zM455.111111 910.222222V284.444444h113.777778v625.777778h-113.777778z m394.42963 0H625.777778V549.925926h223.762963v360.296296z m64.474074-417.185185H625.777778V284.444444h288.237037v208.592593z" p-id="2544" fill="#515151"></path></svg>'
                            />
                        </TouchableOpacity>

                        <RBSheet
                            animationType='fade'
                            ref={(ref) => {
                                this.Scrollable = ref;
                            }}
                            height={pxToDp(300)}
                            closeOnDragDowncustomStyles={{
                                container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
                            }}
                        >
                            <View style={{ backgroundColor: '#D5E8E6' }}>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '92%', margin: 16 }}>
                                    {
                                        this.state.gift.map((item, index) => (
                                            <View style={{
                                                width: '25%', height: pxToDp(90), marginTop: pxToDp(20),
                                                borderColor:
                                                    index === this.state.activeTab ? '#62bfad' : 'white',

                                                borderWidth:
                                                    index === this.state.activeTab ? pxToDp(1) : pxToDp(0),
                                            }}>
                                                <TouchableOpacity
                                                    onPress={() => this.changeTab(index)}
                                                    style={{
                                                        justifyContent: 'center', alignItems: 'center',
                                                    }}>
                                                    <Image source={item.img} style={{ width: pxToDp(50), height: pxToDp(50), }} />
                                                    <Text>{item.name}</Text>
                                                </TouchableOpacity>

                                            </View>
                                        ))
                                    }

                                    <Mybtn
                                        title="发送"
                                        onPress={() => {
                                            this.sendGift()
                                            this.Scrollable.close()

                                        }}
                                        buttonStyle={{
                                            width: pxToDp(90),
                                            height: pxToDp(30),
                                            borderRadius: pxToDp(32),
                                            marginRight: pxToDp(0),
                                            marginTop: pxToDp(20),
                                            marginLeft: pxToDp(256),
                                            marginBottom: pxToDp(20),

                                        }}
                                        titleStyle={{
                                            height: 30,
                                            color: 'white',
                                            fontSize: pxToDp(14),
                                            marginTop: pxToDp(10)
                                        }}
                                    />
                                </View>
                            </View>
                        </RBSheet>
                    </ImageBackground>
                </View>
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
    },
    remoteContainer: {
        width: '100%',
        height: dimensions.height,
        position: 'absolute'
        // marginTop:80
    }
})
export default DuoRen;
