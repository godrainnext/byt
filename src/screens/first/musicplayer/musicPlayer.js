import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Slider, Animated, Easing, Platform, findNodeHandle, Dimensions } from 'react-native'
import { commonStyle } from './commonStyle'
import Video from 'react-native-video'
import { VibrancyView, BlurView } from 'react-native-blur'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { pxToDp } from '../../../utils/styleKits'
// import { Slider } from '@react-native-community/slider'
const mockData = require('./musicList.json')
const deviceInfo = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height - 24
}

const header = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

const musicListUrl = 'http://v3.wufazhuce.com:8000/api/music/bymonth/2017-10'
const musicDetail = 'http://xiamirun.avosapps.com/run?song=http://www.xiami.com/song/'

export default class MusicPlayer extends Component {

  constructor(props) {
    super(props)
    this.player = ''
    this.rotation = false
    this.musicList = []
    this.state = {
      viewRef: null,
      paused: false, // false: 表示播放，true: 表示暂停
      duration: 0.00,
      slideValue: 0.00,
      currentTime: 0.00,
      currentIndex: 0,
      playMode: 0,
      spinValue: new Animated.Value(0),
      playIcon: 'pause',
      playModeIcon: 'music_cycle_o',
      musicInfo: {},
    }
    this.spinAnimated = Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 6000,
      easing: Easing.inOut(Easing.linear)
    })
  }

  formatMediaTime(duration) {
    let min = Math.floor(duration / 60)
    let second = duration - min * 60
    min = min >= 10 ? min : '0' + min
    second = second >= 10 ? second : '0' + second
    return min + ':' + second
  }

  spining() {
    if (this.rotation) {
      this.state.spinValue.setValue(0)
      this.spinAnimated.start(() => {
        this.spining()
      })
    }
  }

  spin() {
    this.rotation = !this.rotation
    if (this.rotation) {
      this.spinAnimated.start(() => {
        this.spinAnimated = Animated.timing(this.state.spinValue, {
          toValue: 1,
          duration: 6000,
          easing: Easing.inOut(Easing.linear)
        })
        this.spining()
      })
    } else {
      this.state.spinValue.stopAnimation((oneTimeRotate) => {
        this.spinAnimated = Animated.timing(this.state.spinValue, {
          toValue: 1,
          duration: (1 - oneTimeRotate) * 6000,
          easing: Easing.inOut(Easing.linear)
        })
      })
    }
  }

  componentDidMount() {
    this.spin()
    // console.log(mockData);
    // console.log(this.props.route.params);
    this.setState({ musicInfo: mockData.list.find(item=>item.id===this.props.route.params) })
    // fetch(musicListUrl, {
    //   method: 'GET',
    //   headers: header
    // })
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     if (responseData.data[2].music_id) {
    //       this.musicList = responseData.data
    //       this.getxiamiMusic(responseData.data[0].music_id)
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    //   .done()
  }

  // getxiamiMusic(musicId) {
  //   fetch(`${musicDetail}${musicId}`, {
  //     method: 'GET',
  //     headers: header})
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(responseData)
  //       this.setState({musicList: this.musicList, musicInfo: responseData})
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //     .done()
  // }

  setDuration(duration) {
    this.setState({ duration: duration.duration })
  }

  setTime(data) {
    let sliderValue = parseInt(this.state.currentTime)
    this.setState({
      slideValue: sliderValue,
      currentTime: data.currentTime
    })
  }

  nextSong(currentIndex) {
    this.reset()
    this.setState({ currentIndex: currentIndex >= mockData.list.length ? 0 : currentIndex })

    // currentIndex === this.state.musicList.length ? currentIndex = 0 : currentIndex
    // let newSong = this.state.musicList[currentIndex]
    // let music_id = newSong.music_id
    // if (!isNaN(parseInt(music_id))) {
    //   this.getxiamiMusic(music_id)
    //   this.setState({currentIndex})
    // } else {
    //   this.nextSong(currentIndex + 1)
    //   this.showMessageBar('抱歉')('没有找到音乐信息，已帮你切换到下一首')('error')
    // }
  }

  preSong(currentIndex) {
    this.reset()
    this.setState({ currentIndex: currentIndex < 0 ? mockData.list.length - 1 : currentIndex })

    // currentIndex === -1 ? currentIndex = this.state.musicList.length -1 : currentIndex
    // let newSong = this.state.musicList[currentIndex]
    // let music_id = newSong.music_id
    // if (!isNaN(parseInt(music_id))) {
    //   this.getxiamiMusic(music_id)
    //   this.setState({currentIndex})
    // } else {
    //   this.preSong(currentIndex - 1)
    //   this.showMessageBar('抱歉')('没有找到音乐信息，已帮你切换到下一首')('error')
    // }
  }

  reset() {
    this.setState({
      currentTime: 0.00,
      slideValue: 0.00,
      musicInfo: {}
    })
  }

  play() {
    this.spin()
    this.setState({
      paused: !this.state.paused,
      playIcon: this.state.paused ? 'pause' : 'play-arrow'
    })
  }

  playMode(playMode) {
    playMode++
    playMode = playMode === 3 ? playMode = 0 : playMode
    switch (playMode) {
      case 0:
        this.setState({ playMode, playModeIcon: 'replay-5' })
        break
      case 1:
        this.setState({ playMode, playModeIcon: 'replay-10' })
        break
      case 2:
        this.setState({ playMode, playModeIcon: 'replay-30' })
        break
      default:
        break
    }
  }

  onEnd(data) {
    this.showMessageBar('亲！')('已帮你切换到下一首')('fuccess')
    if (this.state.playMode === 0) {
      this.nextSong(this.state.currentIndex + 1)
    } else if (this.state.playMode === 1) {
      this.player.seek(0)
    } else {
      this.nextSong(Math.floor(Math.random() * this.musicList.length))
    }
  }

  videoError(error) {
    // title
    this.showMessageBar('播放器报错啦！')(error)('error')
  }

  showMessageBar = title => msg => type => {
    // 报错信息
  }

  renderPlayer() {
    // let musicInfo = this.state.musicInfo
    // console.log(this.state.musicInfo);
    // let musicInfo = mockData.list[this.state.currentIndex]
    // console.log(musicInfo);
    const {musicInfo}=this.state

    return (
      <View style={styles.bgContainer}>
        <View style={styles.navBarStyle}>
          <View style={styles.navBarContent}>
            <TouchableOpacity
              style={{ marginTop: pxToDp(5) }}
              onPress={() => this.props.navigation.goBack()}
            >
              {/* <Icon name="arrow-right" size={24} color={'#bbb'} /> */}

              <Icon1 name={'keyboard-arrow-left'} size={pxToDp(28)} color={commonStyle.white} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.title}>{musicInfo.page}</Text>
              <Text style={styles.subTitle}>{musicInfo.title}</Text>
            </View>
            <TouchableOpacity
              style={{ marginTop: pxToDp(5) }}
              onPress={() => alert('分享')}
            >
              <Icon name={'share'} size={pxToDp(20)} color={commonStyle.white} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={styles.djCard}>
        </View>

        <Animated.Image
          style={{
            width: pxToDp(275),
            height: pxToDp(275),
            borderRadius: pxToDp(85),
            alignSelf: 'center',
            position: 'absolute',
            top: pxToDp(183),
            right: pxToDp(12),
            transform: [{
              rotate: this.state.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              })
            }]
          }}
          source={require('./CD2.png')} />
        <Image
          style={{ width: pxToDp(240), height: pxToDp(240), borderRadius: pxToDp(16), alignSelf: 'center', position: 'absolute', top: pxToDp(200), left: pxToDp(30) ,}}
          source={{ uri: musicInfo.cover }}
        />
        <View style={{ flex: 1 ,marginTop:pxToDp(10)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: pxToDp(50), justifyContent: 'space-around', bottom: -60 }}>
            {/* 喜欢 */}
            <Icon name={'heart'} size={pxToDp(20)} color={commonStyle.white} />
            {/* 下载 */}
            <Icon1 name={'file-download'} size={pxToDp(20)} color={commonStyle.white} />
            {/* 评论 */}
            <Icon1 name={'sms'} size={pxToDp(20)} color={commonStyle.white} />
            {/* 更多 */}
            <Icon1 name={'more-vert'} size={pxToDp(20)} color={commonStyle.white} />
          </View>
          <View style={styles.progressStyle}>
            <Text style={{ width: pxToDp(35), fontSize: pxToDp(11), color: commonStyle.white, marginLeft: pxToDp(5) }}>{this.formatMediaTime(Math.floor(this.state.currentTime))}</Text>
            <Slider
              style={styles.slider}
              value={this.state.slideValue}
              maximumValue={this.state.duration}
              minimumTrackTintColor={commonStyle.themeColor}
              maximumTrackTintColor={commonStyle.iconGray}
              step={1}
              onValueChange={value => this.setState({ currentTime: value })}
              onSlidingComplete={value => this.player.seek(value)}
            />
            <View style={{ width: pxToDp(35), alignItems: 'flex-end', marginRight: pxToDp(5) }}>
              <Text style={{ fontSize: pxToDp(11), color: commonStyle.white }}>{this.formatMediaTime(Math.floor(this.state.duration))}</Text>
            </View>
          </View>
          <View style={styles.toolBar}>
            <TouchableOpacity
              style={{ width: pxToDp(50), marginLeft: pxToDp(5) }}
              onPress={() => this.playMode(this.state.playMode)}
            >
              {/* <Icon1 name={`oneIcon|${this.state.playModeIcon}`} size={16} color={commonStyle.white} /> */}
              <Icon1 name={'replay'} size={pxToDp(16)} color={commonStyle.white} />

            </TouchableOpacity>
            <View style={styles.cdStyle}>
              {/* 上一首 */}
              <TouchableOpacity
                onPress={() => this.preSong(this.state.currentIndex - 1)}
              >
                <Icon1 name={'skip-previous'} size={pxToDp(25)} color={commonStyle.white} />
              </TouchableOpacity>
              {/* 播放&暂停 */}
              <TouchableOpacity
                style={{ width: pxToDp(35), height: pxToDp(35), borderRadius: pxToDp(20), borderWidth: 1, borderColor: commonStyle.white, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => this.play()}
              >
                <Icon1 name={this.state.playIcon} size={pxToDp(20)} color={commonStyle.white} />
              </TouchableOpacity>
              {/* 下一首 */}
              <TouchableOpacity
                onPress={() => this.nextSong(this.state.currentIndex + 1)}
              >
                <Icon1 name={'skip-next'} size={pxToDp(25)} color={commonStyle.white} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ width: pxToDp(50), alignItems: 'flex-end', marginRight: pxToDp(5) }}
            >
              <Icon1 name={'list-alt'} size={pxToDp(20)} color={commonStyle.white} />
            </TouchableOpacity>
          </View>
        </View>
        <Video
          ref={video => this.player = video}
          source={{ uri: musicInfo.url }}
          volume={1.0}
          paused={this.state.paused}
          playInBackground={true}
          onLoadStart={this.loadStart}
          onLoad={data => this.setDuration(data)}
          onProgress={(data) => this.setTime(data)}
          onEnd={(data) => this.onEnd(data)}
          onError={(data) => this.videoError(data)}
          onBuffer={this.onBuffer}
          onTimedMetadata={this.onTimedMetadata} />
      </View>
    )
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) })
  }

  render() {
    // const data = this.state.musicInfo || {}
    const data = mockData.list[this.state.currentIndex]
    return (
      data.url ?
        <View style={styles.container}>
          <Image
            ref={(img) => { this.backgroundImage = img }}
            style={styles.bgContainer}
            source={{ uri: data.cover }}
            resizeMode='cover'
            onLoadEnd={() => this.imageLoaded()}
          />
          <View style={styles.bgContainer}>
            {
              Platform.OS === 'ios' ?
                <VibrancyView
                  blurType={'light'}
                  blurAmount={20}
                  style={styles.container} /> :
                <BlurView
                  style={styles.absolute}
                  viewRef={this.state.viewRef}
                  blurType="light"
                  blurAmount={10}
                />
            }
          </View>
          {this.renderPlayer()}
        </View> : <View />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  bgContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    width: deviceInfo.deviceWidth
  },
  navBarStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: deviceInfo.deviceWidth,
    height: pxToDp(64),
    borderWidth: 0.5,
    borderColor: commonStyle.lineColor
  },
  navBarContent: {
    marginTop: pxToDp(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  title: {
    color: commonStyle.white,
    fontSize: pxToDp(14)
  },
  subTitle: {
    color: commonStyle.white,
    fontSize: pxToDp(11),
    marginTop: pxToDp(5)
  },
  djCard: {
    width: pxToDp(270),
    height: pxToDp(270),
    marginTop: pxToDp(185),
    borderColor: commonStyle.gray,
    borderWidth: pxToDp(10),
    borderRadius: pxToDp(190),
    alignSelf: 'center',
    opacity: 0.2
  },
  playerStyle: {
    position: 'absolute',
    width: deviceInfo.deviceWidth,
  },
  progressStyle: {
    flexDirection: 'row',
    marginHorizontal: pxToDp(10),
    alignItems: 'center',
    position: 'absolute',
    bottom: pxToDp(80)
  },
  slider: {
    flex: 1,
    marginHorizontal: pxToDp(5),
  },
  toolBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    marginVertical: 30
  },
  cdStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})