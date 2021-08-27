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
import { pxToDp } from '@utils/styleKits';
import Slider from '@components/common/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo-av';
import { Audio } from 'expo-av';
import request from '@service/index';
import LottieView from 'lottie-react-native';
import { NavigationContext } from '@react-navigation/native';

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
            this.context.navigate("SingOver")
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
            this.context.navigate('saveMusic', {
              staticId: 1,
              sound: arr[0]
            });
          });
        }
      }
    ]);
  };

  pauseSound = async () => {
    console.log('Stopping Sound');
    // this.setState({sound:undefined})
    await this.state.playingsong.pauseAsync();
    this.setState({ isplay: false });
  };

  startRecording = async () => {
    try {
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
    const { showLoading } = this.state;
    return (
      <View style={styles.bottom}>
        <TouchableOpacity
          style={{ flexDirection: 'column', marginBottom: pxToDp(120), alignItems: 'center' }}
          onPress={() => this.setState({ showLoading: false })}
        >
          <LottieView
            style={{ width: pxToDp(180) }}
            source={require('../../../../lottie/演唱loading.json')}
            autoPlay={true}
            loop={false}
          />
          <Text style={{ fontSize: pxToDp(14), color: '#000000', marginTop: pxToDp(-75), fontWeight: 'bold' }}>开始练唱</Text>
        </TouchableOpacity>
      </View>
    )
  }
  //渲染按钮页面
  renderMenu = () => {
    const { autoPlay } = this.state;
    return (
      <View style={styles.bottom}>
        <View>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => {
              console.log(video.current);
              this.state.status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync();
            }}
          >
            <Ionicons name="musical-notes-outline" size={25} color="grey" />
            <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>
              {this.state.status.isPlaying ? '暂停' : '播放'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Ionicons name="options-outline" size={25} color="grey" />
            <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>
              音量
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => {
              this.toContr();
              // this.toPlay();
              this.setState({ autoPlay: !autoPlay })
              console.log(autoPlay);
              this.state.isrecoding ? this.stopRecording() : this.startRecording()
            }}
          >
            <LottieView
              style={{ width: pxToDp(100) }}
              source={require('../../../../lottie/练唱按钮1.json')}
              ref={animation => {
                this.animation = animation;
              }}
              loop
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Ionicons name="refresh" size={25} color="grey" />
            <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>
              重唱
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => {
              this.toPause();
              this.state.isplay ? this.pauseSound() : this.playSound()
            }}
          >
            <Ionicons name="checkmark" size={25} color="grey" />
            <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>
              结束
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render() {
    const video = createRef();
    const { showLoading } = this.state
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
          source={{ uri: 'https://img0.baidu.com/it/u=1585654361,1964181034&fm=26&fmt=auto&gp=0.jpg' }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: pxToDp(60), marginBottom: pxToDp(60) }}
          >
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                《穆桂英挂帅》选段
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                猛听得金鼓响画角声震
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                唤起我破天门壮志凌云
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                想当年桃花马上威风凛凛
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                敌血飞溅石榴裙
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                有生之日责当尽
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                寸土怎能够属于他人
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                番王小丑何足论
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                我一剑能当百万的兵
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                猛听得金鼓响画角声震
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                唤起我破天门壮志凌云
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                想当年桃花马上威风凛凛
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                敌血飞溅石榴裙
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                有生之日责当尽
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                寸土怎能够属于他人
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                番王小丑何足论
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  lineHeight: pxToDp(40),
                  alignItems: 'center',
                  color: '#333333'
                }}
              >
                我一剑能当百万的兵
              </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Video
                ref={video}
                source={require('../study/越剧追鱼.mp3')}
                resizeMode="contain"
                onPlaybackStatusUpdate={(status) => this.setState({ status })}
              />
            </View>
          </ScrollView>
          <View>
            {showLoading ? this.renderLoading() : this.renderMenu()}
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
    backgroundColor: 'transparent',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  titlebox: {
    fontSize: pxToDp(18),
    color: '#000000',
    fontWeight: 'bold',
    marginTop: pxToDp(15)
  },
  basicbox: {
    fontSize: pxToDp(16),
    lineHeight: pxToDp(40),
    alignItems: 'center',
    color: '#333333'
  }
});

export default Index;
