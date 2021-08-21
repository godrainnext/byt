import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Slider, Animated, Easing, Platform, findNodeHandle, Dimensions, } from 'react-native'
import { commonStyle } from './commonStyle'
import Video from 'react-native-video'
import { VibrancyView, BlurView } from 'react-native-blur'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { pxToDp } from '../../../utils/styleKits';
import { AlwaysOpen } from "../../../component/common/songmenu";
import Top from '../../../component/common/top';
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
      ArrIndex: 0,
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
    this.setState({ musicInfo: mockData.list.find(item => item.id === this.props.route.params) })
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
    const { musicInfo } = this.state
    const { ArrIndex } = this.state;

    return (
      <View style={{width:'100%',height:'100%'}}>
        <View style={styles.bgContainer}>
          <Image
            style={styles.image}
            source={{ uri: musicInfo.cover }}
          />
          <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'space-between', height: pxToDp(230), marginTop: pxToDp(50), marginLeft: pxToDp(180), alignItems: 'center' }}>
              {/* 喜欢 */}
              <Icon name={'heart'} size={pxToDp(20)} color='grey' />
              {/* 下载 */}
              <Icon1 name={'file-download'} size={pxToDp(20)} color='grey' />
              {/* 上一首 */}
              <TouchableOpacity
                onPress={() => this.preSong(this.state.currentIndex - 1)}
              >
                <Icon1 name={'skip-previous'} size={pxToDp(25)} color='grey' />
              </TouchableOpacity>
              {/* 下一首 */}
              <TouchableOpacity
                onPress={() => this.nextSong(this.state.currentIndex + 1)}
              >
                <Icon1 name={'skip-next'} size={pxToDp(25)} color='grey' />
              </TouchableOpacity>
              {/**播放暂停 */}
              <TouchableOpacity
                style={{ width: pxToDp(46), height: pxToDp(46), borderRadius: pxToDp(24), borderWidth:pxToDp(0.5), borderColor: 'grey', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => this.play()}
              >
                <Icon1 name={this.state.playIcon} size={pxToDp(20)} color='grey' />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: pxToDp(40), marginTop: pxToDp(-20) }}>
              <Text style={styles.title}>{musicInfo.page}</Text>
              <Text style={styles.subTitle}>{musicInfo.title}</Text>
            </View>
            <View style={styles.progressStyle}>
              <Text style={{ width: pxToDp(35), fontSize: pxToDp(11), color: 'grey', marginLeft: pxToDp(5) }}>{this.formatMediaTime(Math.floor(this.state.currentTime))}</Text>
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
                <Text style={{ fontSize: pxToDp(11), color: 'grey' }}>{this.formatMediaTime(Math.floor(this.state.duration))}</Text>
              </View>
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
        <View style={{width:'100%',height:pxToDp(700),zIndex:9999,elevation:9999}}>
        <AlwaysOpen ArrData={ArrIndex} />

        </View>

      </View>


    )
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) })
  }

  render() {
    // const data = this.state.musicInfo || {}
    const data = mockData.list[this.state.currentIndex]
    const { ArrIndex } = this.state;
    return (
      data.url ?
        <View style={styles.container}>
          <Top icon1="arrow-back"  />
          {this.renderPlayer()}
        </View> : <View />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf6fc',
  },
  bgContainer: {
    position: 'absolute',
    height: '50%',
    width: '87%',
    backgroundColor: 'white',
    borderRadius: pxToDp(8),
    marginTop: pxToDp(24),
    marginLeft: pxToDp(40),
    elevation: 10,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black',  //  阴影颜色
    shadowRadius: pxToDp(8),  //  圆
  },
  title: {
    color: 'grey',
    fontSize: pxToDp(16)
  },
  subTitle: {
    color: 'grey',
    fontSize: pxToDp(13),
    marginTop: pxToDp(8)
  },
  playerStyle: {
    position: 'absolute',
    width: deviceInfo.deviceWidth,
  },
  progressStyle: {
    flexDirection: 'row',
    marginHorizontal: pxToDp(8),
    alignItems: 'center',
    position: 'absolute',
    marginTop: pxToDp(320)
  },
  slider: {
    flex: 1
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    width: pxToDp(200),
    height: pxToDp(200),
    borderRadius: pxToDp(8),
    alignSelf: 'center',
    position: 'absolute',
    left: pxToDp(32),
    marginTop: pxToDp(50),
    marginLeft: pxToDp(-55),
  },
})