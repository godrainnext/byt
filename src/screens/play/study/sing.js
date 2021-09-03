import React, { PureComponent, createRef } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import Top from '@components/common/top';
import SvgUri from 'react-native-svg-uri';
import { pxToDp } from '@utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Video, Audio } from 'expo-av';
import request from '@service/index';
import LottieView from 'lottie-react-native';
import { NavigationContext } from '@react-navigation/native';
import { Slider } from 'react-native-elements';
import {
  start,
  over,
  playback,
  voice
} from '../../../component/common/iconSvg';
class Index extends PureComponent {
  state = {
    status: {},
    recording: '',
    isrecoding: false,
    playingsong: '',
    sound: [],
    isplay: false,
    URI: [],
    autoPlay: true,
    showLoading: true,
    value: 1,
    isClick: false
  };
  static contextType = NavigationContext;
  playSound = async () => {
    Alert.alert('是否确认结束练唱?', '保存音频', [
      { text: '取消' },
      {
        text: '确认',
        onPress: async () => {
          if (this.state.isrecoding) {
            await this.stopRecording();
          }
          console.log(this.state.isrecoding);
          const fd = new FormData();
          const arr = [];
          for (const uri of this.state.URI) {
            console.log(uri);
            let file = {
              uri: uri,
              type: 'multipart/form-data',
              name: uri
            };
            fd.append('file', file);
            const { sound } = await Audio.Sound.createAsync({ uri });
            arr.push(sound);
          }
          fd.append('staticId', 1);
          request.post({ url: '/uploads/music', data: fd }).then((res) => {
            console.log(res);
            this.context.navigate('SingOver', {
              staticId: 1,
              sound: arr[0],
              id: res.insertId
            });
          });
        }
      }
    ]);
  };

  pauseSound = async () => {
    console.log('暂停');
    // this.setState({sound:undefined})
    await this.video.pauseAsync();
    this.setState({ isplay: false });
  };

  startRecording = async () => {
    try {
      this.video.playAsync();
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      });
      console.log('Starting recording..');
      const file = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      this.setState({ recording: file.recording });
      this.setState({ isrecoding: true });
      // console.log(file);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };
  stopRecording = async () => {
    await this.pauseSound();
    // this.setState({recording:undefined});
    await this.state.recording.stopAndUnloadAsync();
    const uri = this.state.recording.getURI();
    await this.setState({ URI: [...this.state.URI, uri] });
    this.setState({ isrecoding: false });
  };

  toPause() {
    this.animation.pause();
  }
  toPlay() {
    this.animation.play();
  }
  toContr() {
    if (this.state.autoPlay == true) {
      this.animation.play();
    } else {
      this.animation.pause();
    }
  }
  //渲染加载页面
  renderLoading = () => {
    const { showLoading, value } = this.state;
    return (
      <View style={styles.bottom}>
        <TouchableOpacity
          style={{
            flexDirection: 'column',
            marginBottom: pxToDp(120),
            alignItems: 'center'
          }}
          onPress={() => this.setState({ showLoading: false })}
        >
          <LottieView
            style={{ width: pxToDp(180) }}
            source={require('../../../../lottie/演唱loading.json')}
            autoPlay={true}
            loop={false}
          />
          <Text
            style={{
              fontSize: pxToDp(14),
              color: 'white',
              marginTop: pxToDp(-75),
              fontWeight: 'bold'
            }}
          >
            开始练唱
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  clickVoice = () => {
    this.setState({ isClick: !this.state.isClick });
  };
  reStart = () => {
    Alert.alert('提示', '确认重唱?', [
      { text: '取消' },
      {
        text: '确认',
        onPress: async () => {
          if (this.state.isrecoding) {
            await this.stopRecording();
          }
          this.setState({
            status: {},
            recording: '',
            playingsong: '',
            sound: [],
            URI: [],
            autoPlay: false,
            showLoading: false
          });
          await this.startRecording();
          this.video.replayAsync();
        }
      }
    ]);
  };
  //渲染按钮页面
  renderMenu = () => {
    const { autoPlay } = this.state;
    return (
      <View style={styles.bottom}>
        {/* 开始 */}
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'center' }}
          onPress={() => {
            this.state.status.isPlaying
              ? this.video.pauseAsync()
              : this.video.playAsync();
          }}
        >
          <SvgUri svgXmlData={start} width="30" height="30" />
          <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>
            {this.state.status.isPlaying ? '暂停' : '开始'}
          </Text>
        </TouchableOpacity>
        {/* 音量 */}
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'center' }}
          onPress={this.clickVoice}
        >
          <SvgUri svgXmlData={voice} width="30" height="30" />
          <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>音量</Text>
        </TouchableOpacity>
        {/* 练唱 */}
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => {
            this.toContr();
            // this.toPlay();
            this.setState({ autoPlay: !autoPlay });
            this.state.isrecoding
              ? this.stopRecording()
              : this.startRecording();
          }}
        >
          <LottieView
            style={{ width: pxToDp(100) }}
            source={require('../../../../lottie/练唱.json')}
            ref={(animation) => {
              this.animation = animation;
            }}
            loop
          />
        </TouchableOpacity>
        {/* 重唱 */}
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'center' }}
          onPress={this.reStart}
        >
          <SvgUri svgXmlData={playback} width="30" height="30" />
          <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>重唱</Text>
        </TouchableOpacity>
        {/* 结束 */}
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'center' }}
          onPress={() => {
            this.toPause();
            this.state.isplay ? this.pauseSound() : this.playSound();
          }}
        >
          <SvgUri svgXmlData={over} width="30" height="30" />
          <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>结束</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const { showLoading, value } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-between'
        }}
      >
        <Top icon1="arrow-back" title="穆桂英挂帅" />
        <ImageBackground
          style={{ flex: 1 }}
          source={{
            uri: 'https://img0.baidu.com/it/u=1585654361,1964181034&fm=26&fmt=auto&gp=0.jpg'
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: pxToDp(65), marginBottom: pxToDp(65) }}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.basicbox}>《穆桂英挂帅》选段</Text>
              <Text style={styles.basicbox}>猛听得金鼓响画角声震</Text>
              <Text style={styles.basicbox}>唤起我破天门壮志凌云</Text>
              <Text style={styles.basicbox}>想当年桃花马上威风凛凛</Text>
              <Text style={styles.basicbox}>敌血飞溅石榴裙</Text>
              <Text style={styles.basicbox}>有生之日责当尽</Text>
              <Text style={styles.basicbox}>寸土怎能够属于他人</Text>
              <Text style={styles.basicbox}>番王小丑何足论</Text>
              <Text style={styles.basicbox}>我一剑能当百万的兵</Text>
              <Text style={styles.basicbox}>猛听得金鼓响画角声震</Text>
              <Text style={styles.basicbox}>唤起我破天门壮志凌云</Text>
              <Text style={styles.basicbox}>想当年桃花马上威风凛凛</Text>
              <Text style={styles.basicbox}>敌血飞溅石榴裙</Text>
              <Text style={styles.basicbox}>有生之日责当尽</Text>
              <Text style={styles.basicbox}>寸土怎能够属于他人</Text>
              <Text style={styles.basicbox}>番王小丑何足论</Text>
              <Text style={styles.basicbox}>我一剑能当百万的兵</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Video
                ref={(el) => (this.video = el)}
                source={require('../study/越剧追鱼.mp3')}
                resizeMode="contain"
                onPlaybackStatusUpdate={(status) => this.setState({ status })}
                volume={value}
              />
            </View>
          </ScrollView>
          <View>{showLoading ? this.renderLoading() : this.renderMenu()}</View>
          <View
            style={{
              position: 'absolute',
              top: pxToDp(520),
              left: pxToDp(42),
              width: pxToDp(30),
              height: pxToDp(120)
            }}
          >
            <Slider
              style={{
                height: pxToDp(10),
                width: pxToDp(100),
                transform: [{ rotate: '-90deg' }],
                display: this.state.isClick ? 'flex' : 'none'
              }}
              thumbTintColor={'#62bfad'}
              thumbStyle={{ width: pxToDp(14), height: pxToDp(14) }}
              maximumTrackTintColor={'#999999'}
              minimumTrackTintColor={'#00c06d'}
              value={this.state.value}
              onValueChange={(value) => this.setState({ value })}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    height: pxToDp(90),
    marginTop: pxToDp(5),
    marginLeft: pxToDp(17),
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#696969'
  },
  image: {
    height: pxToDp(80),
    width: pxToDp(80)
  },
  text1: {
    fontSize: pxToDp(14),
    color: '#000000'
  },
  text2: {
    fontSize: pxToDp(14),
    color: '#696969'
  },
  text3: {
    fontSize: pxToDp(11),
    color: '#808080',
    marginTop: pxToDp(40)
  },
  bottom: {
    height: pxToDp(60),
    marginBottom: pxToDp(15),
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent'
  },
  basicbox: {
    fontSize: pxToDp(16),
    lineHeight: pxToDp(40),
    alignItems: 'center',
    color: '#333333'
  }
});

export default Index;
