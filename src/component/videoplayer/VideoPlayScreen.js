import React, { PureComponent } from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  Slider,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  StyleSheet
} from 'react-native';
import Video from 'react-native-video';
// import Orientation from 'react-native-orientation
import Orientation from 'react-native-orientation-locker';
import { pxToDp } from '../../utils/styleKits';

const screenWidth = Dimensions.get('window').width;

function formatTime(second) {
  let h = 0,
    i = 0,
    s = parseInt(second);
  if (s > 60) {
    i = parseInt(s / 60);
    s = parseInt(s % 60);
  }
  // 补零
  let zero = function (v) {
    return v >> 0 < 10 ? '0' + v : v;
  };
  return [zero(h), zero(i), zero(s)].join(':');
}

export default class VideoPlayScreen extends PureComponent {
  static navigationOptions = {
    headerTitle: '测试视频播放'
  };

  constructor(props) {
    super(props);
    this.state = {
      videoUrl:
        'https://vd2.bdstatic.com/mda-mhbca33iv088wenq/sc/cae_h264_clips/1628759838989718911/mda-mhbca33iv088wenq.mp4?auth_key=1629005864-0-0-3f7612077d2e27b51901b7db690fd9ce&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
      videoCover:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20200609%2F0384f88a4e3044cc83b41492c88c5066.jpeg&refer=http%3A%2F%2Fp4.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631596197&t=c36773e209ccc2f6c592cee12a81247a',
      videoWidth: screenWidth,
      videoHeight: (screenWidth * 9) / 16, // 默认16：9的宽高比
      showVideoCover: true, // 是否显示视频封面
      showVideoControl: false, // 是否显示视频控制组件
      isPlaying: false, // 视频是否正在播放
      currentTime: 0, // 视频当前播放的时间
      duration: 0, // 视频的总时长
      isFullScreen: false, // 当前是否全屏显示
      isClick: false,
      playFromBeginning: false // 是否从头开始播放
    };
  }

  render() {
    const { videoinfo = { avatar: '', video: '' } } = this.props;
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <View
          style={{
            width: this.state.videoWidth,
            height: this.state.videoHeight,
            backgroundColor: '#000000'
          }}
        >
          <Video
            ref={(ref) => (this.videoPlayer = ref)}
            source={{ uri: videoinfo.video }}
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
            style={{
              width: this.state.videoWidth,
              height: this.state.videoHeight
            }}
          />
          {this.state.showVideoCover ? (
            <Image
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: this.state.videoWidth,
                height: this.state.videoHeight
              }}
              resizeMode={'cover'}
              source={{ uri: videoinfo.avatar }}
            />
          ) : null}
          <TouchableWithoutFeedback
            onPress={() => {
              this.hideControl();
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: this.state.videoWidth,
                height: this.state.videoHeight,
                backgroundColor: this.state.isPlaying
                  ? 'transparent'
                  : 'rgba(0, 0, 0, 0.2)',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {this.state.isPlaying ? null : (
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.onPressPlayButton();
                  }}
                >
                  <Image
                    style={styles.playButton}
                    // source={require('../../assets/image/icon_video_play.png')}
                    source={require('../../res/icon_video_play.png')}
                  />
                </TouchableWithoutFeedback>
              )}
            </View>
          </TouchableWithoutFeedback>
          {this.state.showVideoControl ? (
            <View style={[styles.control, { width: this.state.videoWidth }]}>
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={() => {
                  this.onControlPlayPress();
                }}
              >
                <Image
                  style={styles.playControl}
                  // source={this.state.isPlaying ? require('../../assets/image/icon_control_pause.png') : require('../../assets/image/icon_control_play.png')}
                  source={
                    this.state.isPlaying
                      ? require('../../res/icon_control_pause.png')
                      : require('../../res/icon_control_play.png')
                  }
                />
              </TouchableOpacity>
              <Text style={styles.time}>
                {formatTime(this.state.currentTime)}
              </Text>
              <Slider
                style={{ flex: 1 }}
                maximumTrackTintColor={'#999999'}
                minimumTrackTintColor={'#00c06d'}
                // thumbImage={require('../../assets/image/icon_control_slider.png')}
                thumbImage={require('../../res/icon_control_slider.png')}
                value={this.state.currentTime}
                minimumValue={0}
                maximumValue={this.state.duration}
                onValueChange={(currentTime) => {
                  this.onSliderValueChanged(currentTime);
                }}
              />
              <Text style={styles.time}>{formatTime(this.state.duration)}</Text>
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={this.onControlShrinkPress}
              >
                <Image
                  style={styles.shrinkControl}
                  // source={this.state.isFullScreen ? require('../../assets/image/icon_control_shrink_screen.png') : require('../../assets/image/icon_control_full_screen.png')}
                  source={
                    this.state.isFullScreen
                      ? require('../../res/icon_control_shrink_screen.png')
                      : require('../../res/icon_control_full_screen.png')
                  }
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }

  /// -------Video组件回调事件-------

  _onLoadStart = () => {};

  _onBuffering = () => {};

  _onLoaded = (data) => {
    this.setState({
      duration: data.duration
    });
  };

  _onProgressChanged = (data) => {
    if (this.state.isPlaying) {
      this.setState({
        currentTime: data.currentTime
      });
    }
  };

  _onPlayEnd = () => {
    this.setState({
      currentTime: 0,
      isPlaying: false,
      playFromBeginning: true
    });
  };

  _onPlayError = () => {};

  ///-------控件点击事件-------

  /// 控制播放器工具栏的显示和隐藏
  hideControl() {
    if (this.state.showVideoControl) {
      this.setState({
        showVideoControl: false
      });
    } else {
      this.setState(
        {
          showVideoControl: true
        },
        // 5秒后自动隐藏工具栏
        () => {
          setTimeout(() => {
            this.setState({
              showVideoControl: false
            });
          }, 5000);
        }
      );
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
        playFromBeginning: false
      });
    }
  }

  /// 点击了工具栏上的播放按钮
  onControlPlayPress() {
    this.onPressPlayButton();
  }

  /// 点击了工具栏上的全屏按钮
  onControlShrinkPress = async () => {
    if (this.state.isFullScreen) {
      this.props.onIt();
      this.setState({
        isClick: !this.state.isClick,
        isFullScreen: false
      });
      Orientation.lockToLandscape();
    } else {
      this.setState({
        isClick: !this.state.isClick,
        isFullScreen: true
      });
      this.props.upIt();
      Orientation.lockToPortrait();
    }
  };

  /// 进度条值改变
  onSliderValueChanged(currentTime) {
    this.videoPlayer.seek(currentTime);
    if (this.state.isPlaying) {
      this.setState({
        currentTime: currentTime
      });
    } else {
      this.setState({
        currentTime: currentTime,
        isPlaying: true,
        showVideoCover: false
      });
    }
  }

  /// 屏幕旋转时宽高会发生变化，可以在onLayout的方法中做处理，比监听屏幕旋转更加及时获取宽高变化
  _onLayout = (event) => {
    //获取根View的宽高
    let { width, height } = event.nativeEvent.layout;

    // 一般设备横屏下都是宽大于高，这里可以用这个来判断横竖屏
    let isLandscape = width > height;
    if (isLandscape) {
      this.setState({
        videoWidth: width,
        videoHeight: height,
        isFullScreen: true
      });
    } else {
      this.setState({
        videoWidth: '100%',
        videoHeight: pxToDp(((width - pxToDp(85)) * 9) / 16),
        isFullScreen: false
      });
    }
    if (!this.state.isClick) {
      Orientation.unlockAllOrientations();
    }
  };

  /// -------外部调用事件方法-------

  ///播放视频，提供给外部调用
  playVideo() {
    this.setState({
      isPlaying: true,
      showVideoCover: false
    });
  }

  /// 暂停播放，提供给外部调用
  pauseVideo() {
    this.setState({
      isPlaying: false
    });
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
    height: 50
  },
  playControl: {
    width: 24,
    height: 24,
    marginLeft: 15
  },
  shrinkControl: {
    width: 15,
    height: 15,
    marginRight: 15
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
  }
});
