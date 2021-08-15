import React, { Component } from 'react';
import { View, Dimensions, Image, Text, Slider, TouchableWithoutFeedback, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Video from 'react-native-video';
// import Orientation from 'react-native-orientation';
import Orientation from 'react-native-orientation-locker';
import { pxToDp } from '../../utils/styleKits';

const screenWidth = Dimensions.get('window').width;

function formatTime(second) {
    let h = 0, i = 0, s = parseInt(second);
    if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);
    }
    // 补零
    let zero = function (v) {
        return (v >> 0) < 10 ? "0" + v : v;
    };
    return [zero(h), zero(i), zero(s)].join(":");
}

export default class VideoPlayScreen extends Component {

    static navigationOptions = {
        headerTitle: '测试视频播放'
    };

    constructor(props) {
        super(props);
        this.state = {
            // videoUrl: "http://124.129.157.208:8810/SD/2017qingdao/xiaoxueEnglish/grade3/b/1.mp4",
            videoUrl: "https://vd3.bdstatic.com/mda-jmr9nwe0scccdqs8/sc/mda-jmr9nwe0scccdqs8.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D&v_from_s=hkapp-haokan-suzhou&auth_key=1626854002-0-0-c5ad25f8f12dd38fec769c93fc6d4a61&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=",
            videoCover: "data:image/jpeg;base64,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",
            videoWidth: screenWidth,
            videoHeight: screenWidth * 9 / 16, // 默认16：9的宽高比
            showVideoCover: true,    // 是否显示视频封面
            showVideoControl: false, // 是否显示视频控制组件
            isPlaying: false,        // 视频是否正在播放
            currentTime: 0,        // 视频当前播放的时间
            duration: 0,           // 视频的总时长
            isFullScreen: false,     // 当前是否全屏显示
            playFromBeginning: false, // 是否从头开始播放
        };
    }

    render() {
        return (
            <View style={styles.container} onLayout={this._onLayout}>
                <View style={{ width: this.state.videoWidth, height: this.state.videoHeight, backgroundColor: '#000000' }}>
                    <Video
                        ref={(ref) => this.videoPlayer = ref}
                        source={{ uri: this.state.videoUrl }}
                        rate={1.0}
                        volume={1.0}
                        muted={false}
                        paused={!this.state.isPlaying}
                        resizeMode={'contain'}
                        playWhenInactive={false}
                        playInBackground={false}
                        ignoreSilentSwitch={'ignore'}
                        progressUpdateInterval={250.0}
                        onLoadStart={this._onLoadStart}
                        onLoad={this._onLoaded}
                        onProgress={this._onProgressChanged}
                        onEnd={this._onPlayEnd}
                        onError={this._onPlayError}
                        onBuffer={this._onBuffering}
                        style={{ width: this.state.videoWidth, height: this.state.videoHeight }}
                    />
                    {
                        this.state.showVideoCover ?
                            <Image
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: this.state.videoWidth,
                                    height: this.state.videoHeight
                                }}
                                resizeMode={'cover'}
                                source={{ uri: this.state.videoCover }}
                            /> : null
                    }
                    <TouchableWithoutFeedback onPress={() => { this.hideControl() }}>
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: this.state.videoWidth,
                                height: this.state.videoHeight,
                                backgroundColor: this.state.isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            {
                                this.state.isPlaying ? null :
                                    <TouchableWithoutFeedback onPress={() => { this.onPressPlayButton() }}>
                                        <Image
                                            style={styles.playButton}
                                            // source={require('../../assets/image/icon_video_play.png')}
                                            source={require('../../res/icon_video_play.png')}
                                        />
                                    </TouchableWithoutFeedback>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    {
                        this.state.showVideoControl ?
                            <View style={[styles.control, { width: this.state.videoWidth }]}>
                                <TouchableOpacity activeOpacity={0.3} onPress={() => { this.onControlPlayPress() }}>
                                    <Image
                                        style={styles.playControl}
                                        // source={this.state.isPlaying ? require('../../assets/image/icon_control_pause.png') : require('../../assets/image/icon_control_play.png')}
                                        source={this.state.isPlaying ? require('../../res/icon_control_pause.png') : require('../../res/icon_control_play.png')}

                                    />
                                </TouchableOpacity>
                                <Text style={styles.time}>{formatTime(this.state.currentTime)}</Text>
                                <Slider
                                    style={{ flex: 1 }}
                                    maximumTrackTintColor={'#999999'}
                                    minimumTrackTintColor={'#00c06d'}
                                    // thumbImage={require('../../assets/image/icon_control_slider.png')}
                                    thumbImage={require('../../res/icon_control_slider.png')}
                                    value={this.state.currentTime}
                                    minimumValue={0}
                                    maximumValue={this.state.duration}
                                    onValueChange={(currentTime) => { this.onSliderValueChanged(currentTime) }}
                                />
                                <Text style={styles.time}>{formatTime(this.state.duration)}</Text>
                                <TouchableOpacity activeOpacity={0.3} onPress={() => { this.onControlShrinkPress() }}>
                                    <Image
                                        style={styles.shrinkControl}
                                        // source={this.state.isFullScreen ? require('../../assets/image/icon_control_shrink_screen.png') : require('../../assets/image/icon_control_full_screen.png')}
                                        source={this.state.isFullScreen ? require('../../res/icon_control_shrink_screen.png') : require('../../res/icon_control_full_screen.png')}

                                    />
                                </TouchableOpacity>
                            </View> : null
                    }
                </View>
                {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title={'开始播放'} onPress={() => { this.playVideo() }} />
                    <Button title={'暂停播放'} onPress={() => { this.pauseVideo() }} />
                    <Button title={'切换视频'} onPress={() => { this.switchVideo("http://124.129.157.208:8810/SD/zhishidian/grade_8_1/wuli_shu/01.mp4", 0) }} />
                </View> */}
            </View>
        )
    }

    /// -------Video组件回调事件-------

    _onLoadStart = () => {
        console.log('视频开始加载');
    };

    _onBuffering = () => {
        console.log('视频缓冲中...')
    };

    _onLoaded = (data) => {
        console.log('视频加载完成');
        this.setState({
            duration: data.duration,
        });
    };

    _onProgressChanged = (data) => {
        // console.log('视频进度更新');
        if (this.state.isPlaying) {
            this.setState({
                currentTime: data.currentTime,
            })
        }
    };

    _onPlayEnd = () => {
        console.log('视频播放结束');
        this.setState({
            currentTime: 0,
            isPlaying: false,
            playFromBeginning: true
        });
    };

    _onPlayError = () => {
        console.log('视频播放失败');
    };

    ///-------控件点击事件-------

    /// 控制播放器工具栏的显示和隐藏
    hideControl() {
        if (this.state.showVideoControl) {
            this.setState({
                showVideoControl: false,
            })
        } else {
            this.setState(
                {
                    showVideoControl: true,
                },
                // 5秒后自动隐藏工具栏
                () => {
                    setTimeout(
                        () => {
                            this.setState({
                                showVideoControl: false
                            })
                        }, 5000
                    )
                }
            )
        }
    }

    /// 点击了播放器正中间的播放按钮
    onPressPlayButton() {
        let isPlay = !this.state.isPlaying;
        this.setState({
            isPlaying: isPlay,
            showVideoCover: false
        });
        if (this.state.playFromBeginning) {
            this.videoPlayer.seek(0);
            this.setState({
                playFromBeginning: false,
            })
        }
    }

    /// 点击了工具栏上的播放按钮
    onControlPlayPress() {
        this.onPressPlayButton();
    }

    /// 点击了工具栏上的全屏按钮
    onControlShrinkPress() {
        if (this.state.isFullScreen) {
            this.props.onIt();

            Orientation.lockToPortrait();

        } else {
            this.props.upIt();
            Orientation.lockToLandscape();
            
        }
    }
    

    /// 进度条值改变
    onSliderValueChanged(currentTime) {
        this.videoPlayer.seek(currentTime);
        if (this.state.isPlaying) {
            this.setState({
                currentTime: currentTime
            })
        } else {
            this.setState({
                currentTime: currentTime,
                isPlaying: true,
                showVideoCover: false
            })
        }
    }

    /// 屏幕旋转时宽高会发生变化，可以在onLayout的方法中做处理，比监听屏幕旋转更加及时获取宽高变化
    _onLayout = (event) => {
        //获取根View的宽高
        let { width, height } = event.nativeEvent.layout;
        console.log('通过onLayout得到的宽度：' + width);
        console.log('通过onLayout得到的高度：' + height);

        // 一般设备横屏下都是宽大于高，这里可以用这个来判断横竖屏
        let isLandscape = (width > height);
        if (isLandscape) {
            this.setState({
                videoWidth: width,
                videoHeight: height,
                isFullScreen: true,
            })
        } else {
            this.setState({
                videoWidth: '100%',
                videoHeight: pxToDp((width-pxToDp(85)) * 9 / 16),
                isFullScreen: false,
            })
        }
        Orientation.unlockAllOrientations();
    };

    /// -------外部调用事件方法-------

    ///播放视频，提供给外部调用
    playVideo() {
        this.setState({
            isPlaying: true,
            showVideoCover: false
        })
    }

    /// 暂停播放，提供给外部调用
    pauseVideo() {
        this.setState({
            isPlaying: false,
        })
    }

    /// 切换视频并可以指定视频开始播放的时间，提供给外部调用
    switchVideo(videoURL, seekTime) {
        this.setState({
            videoUrl: videoURL,
            currentTime: seekTime,
            isPlaying: true,
            showVideoCover: false
        });
        this.videoPlayer.seek(seekTime);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    playButton: {
        width: 50,
        height: 50,
    },
    playControl: {
        width: 24,
        height: 24,
        marginLeft: 15,
    },
    shrinkControl: {
        width: 15,
        height: 15,
        marginRight: 15,
    },
    time: {
        fontSize: 12,
        color: 'white',
        marginLeft: 10,
        marginRight: 10
    },
    control: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
});