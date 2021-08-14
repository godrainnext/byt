import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image, textarea, Button, FlatList, TextInput, ScrollView } from 'react-native';
//导入Video组件
import Video from 'react-native-video';
// 导入 Silder组件
import Slider from '@react-native-community/slider';
// 屏幕方向锁定: 他需要改变 原来Android文件代码，当然适配两端的话，IOS也是需要更改的。
import Orientation from 'react-native-orientation-locker';
import SvgUri from 'react-native-svg-uri'
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
console.log(screenWidth + "   " + screenHeight + "带有小数");

const mockBooks = [
    {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date: "2020-1-1",
    }, {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date: "2020-1-1",
    }, {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date: "2020-1-1",
    },
    {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date: "2020-1-1",
    },
    {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date: "2020-1-1",
    }, {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date: "2020-1-1",
    }, {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date: "2020-1-1",
    }, {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date: "2020-1-1",
    },

]

export default class videoplayer extends React.Component {
    constructor(props) {
        super(props);
        this.changePausedState = this.changePausedState.bind(this);
        this.customerSliderValue = this.customerSliderValue.bind(this);
        this.enterFullScreen = this.enterFullScreen.bind(this);
        this._changePauseSliderFullState = this._changePauseSliderFullState.bind(this);
        this._onStartShouldSetResponder = this._onStartShouldSetResponder.bind(this);
        this.state = {
            isPaused: true,  //是暂停
            duration: 0,      //总时长
            currentTime: 0, //当前播放时间
            sliderValue: 0,   //进度条的进度 
            isShowInput: false,
            videoWidth: screenWidth,
            videoHeight: 226,
            isFullScreen: false,
            isVisiblePausedSliderFullScreen: false,
            Listzzz: mockBooks,
            TextValue: ''
        }
    }
    setTextValue = (TextValue) => {
        this.setState({ TextValue })
        console.log(this.state.TextValue);
    }
    changePausedState() { //控制按钮显示播放，要显示进度条3秒钟，之后关闭显示
        this.setState({
            isPaused: this.state.isPaused ? false : true,
            isVisiblePausedSliderFullScreen: true
        })
        //这个定时调用失去了this指向
        let that = this;
        setTimeout(function () {
            that.setState({
                isVisiblePausedSliderFullScreen: false
            })
        }, 3000)
    }
    _changePauseSliderFullState() { // 单击事件，是否显示 “暂停、进度条、全屏按钮 盒子”
        let flag = this.state.isVisiblePausedSliderFullScreen ? false : true;
        this.setState({
            isVisiblePausedSliderFullScreen: flag
        })
        //这个定时调用失去了this指向
        let that = this;
        setTimeout(function () {
            that.setState({
                isVisiblePausedSliderFullScreen: false
            })
        }, 3000)
    }
    //格式化音乐播放的时间为0：00。借助onProgress的定时器调用，更新当前时间
    formatMediaTime(time) {
        let minute = Math.floor(time / 60);
        let second = parseInt(time - minute * 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return minute + ":" + second;

    }
    //加载视频调用，主要是拿到 “总时间”，并格式化
    customerOnload(e) {
        let time = e.duration;
        this.setState({
            duration: time
        })
    }
    // 获得当前的，播放时间数，但这个数是0.104，需要处理
    customerOnprogress(e) {
        let time = e.currentTime;   // 获取播放视频的秒数       
        this.setState({
            currentTime: time,
            sliderValue: time
        })
    }
    // 移动滑块，改变视频播放进度
    customerSliderValue(value) {
        this.player.seek(value);
    }
    enterFullScreen() { //1.改变宽高  2.允许进入全屏模式  3.如何配置屏幕旋转,不需要改变进度条盒子的显示和隐藏
        if (!this.state.isFullScreen) {
            this.setState({
                videoWidth: screenHeight,
                videoHeight: screenWidth,
                isFullScreen: true
            })
            // 直接设置方向
            Orientation.lockToLandscape();
        }
        else {

            this.setState({
                videoWidth: screenWidth,
                videoHeight: 226,
                isFullScreen: false
            })
            Orientation.lockToPortrait();
        }
    }

    _onStartShouldSetResponder(e) {
        console.log(e);
    }
    // _renderItem = ({ item }) => {
    //     return (
    //         <ListItem
    //             coverURL={item.book_image}
    //             username={item.username}
    //             subs={item.subs}
    //         />)

    // };
    sendComment = () => {
        if (this.state.TextValue == '')
            alert('输入为空')
        this.setState({ Listzzz: [{ rank: 5, username: "GATHERING PREY", subs: this.state.TextValue, date: "2020-1-1" }, ...this.state.Listzzz] })
        this.setState({ TextValue: '' })
    }
    componentDidMount() {
        var initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
            console.log('是竖屏');
        } else {
            console.log('如果是横屏，就将其旋转过来');
            Orientation.lockToPortrait();
        }
    }
    render() {
        // 播放按钮组件：是否显示
        let playButtonComponent = (
            <TouchableWithoutFeedback
                onPress={this.changePausedState}
            >
                <View style={styles.playBtn}>
                </View>
            </TouchableWithoutFeedback>
        );
        let pausedBtn = this.state.isPaused ? playButtonComponent : null;
        // 暂停按钮、进度条、全屏按钮 是否显示
        let pausedSliderFullComponent = (
            <View style={{ position: "absolute", bottom: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* 进度条按钮     */}
                    <View style={styles.sliderBox}>
                        <Text>{this.formatMediaTime(this.state.currentTime)}</Text>
                        <Slider
                            style={{ width: this.state.isFullScreen ? 226 : 226, height: 40 }}
                            value={this.state.sliderValue}
                            maximumValue={this.state.duration}
                            thumbTintColor="#000" //开关夹点的yanse              
                            minimumTrackTintColor="red"
                            maximumTrackTintColor="#ccc"
                            step={1}
                            onValueChange={this.customerSliderValue}
                        />
                        <Text>{this.formatMediaTime(this.state.duration)}</Text>
                    </View>
                    {/* 全屏按钮 */}
                    <View>
                        <TouchableOpacity
                            onPress={this.enterFullScreen}
                        >
                            <Text style={{ backgroundColor: '#eee', padding: 5 }}>全屏</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        );
        let pausedSliderFull = this.state.isVisiblePausedSliderFullScreen ? pausedSliderFullComponent : null;
        return (
            <View>
                <ScrollView>
                    <View>
                        <TouchableWithoutFeedback
                            onPress={this._changePauseSliderFullState}
                            onResponderMove={this._onStartShouldSetResponder}
                        >
                            <Video source={require('../../images/1.mp4')}
                                ref={(ref) => {
                                    this.player = ref
                                }}
                                style={{ width: this.state.videoWidth, height: this.state.videoHeight, backgroundColor: "#FFC1C1" }}
                                allowsExternalPlayback={false} // 不允许导出 或 其他播放器播放
                                paused={this.state.isPaused} // 控制视频是否播放
                                resizeMode="cover"
                                onLoad={(e) => this.customerOnload(e)}
                                onProgress={(e) => this.customerOnprogress(e)}
                                fullscreen={this.state.isFullScreen}
                            />
                        </TouchableWithoutFeedback>
                        {/* 播放的按钮：点击之后需要消失 */}
                        {pausedBtn}
                        {/* 暂停按钮，进度条，全屏按钮 */}
                        {pausedSliderFull}

                    </View>
{/* 
                    <ExpandableText1 /> */}
                    {/* <View style={{ backgroundColor: '#ECE4CE', height: 43 }}>
                        <View style={{ flexDirection: 'row', marginTop: 7, height: 30, backgroundColor: '#fff' }}>
                            <View style={{ flexDirection: 'row', position: 'absolute', left: 20 }}>
                                <TouchableOpacity>
                                    <SvgUri svgXmlData={like} width="30" height="30" />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15 }}>点赞:1111</Text>
                            </View>
                            <View style={{ flexDirection: 'row', position: 'absolute', left: 130 }}>
                                <TouchableOpacity onPress={this.sendComment}>
                                    <SvgUri svgXmlData={comment} width="30" height="30" style={{ bottom: 5 }} />
                                </TouchableOpacity >
                                <Text style={{ fontSize: 15 }}>评论:1111</Text>
                            </View>
                            <View style={{ flexDirection: 'row', position: 'absolute', right: 20 }}>
                                <TouchableOpacity>
                                    <SvgUri svgXmlData={trans} width="30" height="30" />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15 }}>收藏:1111</Text>
                            </View>
                        </View>
                    </View> */}
                    {/* <View>
                        <View style={{ borderBottomWidth: .2, borderBottomColor: 'gray', flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, marginLeft: 15, marginBottom: 10, fontSize: 20 }}>评论</Text>
                            <TextInput style={{ width: 200, height: 40, borderWidth: 2, borderRadius: 10, fontSize: 15, top: 4, left: 20 }} onChangeText={this.setTextValue} value={this.state.TextValue} />
                            <MyBtn style={{ width: 60, height: 25, position: 'absolute', right: 5 }} onPress={this.sendComment}>发表评论</MyBtn>
                        </View>
                        <View>
                            <FlatList
                                data={this.state.Listzzz} renderItem={this._renderItem} /></View>

                    </View> */}

                </ScrollView>
                {/* <View>
                            <TextInput placeholder='111111111111111' style={{width:1000,height:1000}}/>
                    </View> */}
            </View>

        )
    }
}
var styles = StyleSheet.create({
    myVideo: {
        width: 340,
        height: 240
    },
    playBtn: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: -25,
        marginTop: -25,
        zIndex: 999
    },
    sliderBox: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    expandableText: {
        backgroundColor: '#fff'
    }
});