import React from 'react';
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
  Slider,
  Animated,
  Easing
} from 'react-native';
import { stopmusic, playmusic } from '../../../component/common/iconSvg';
import { pxToDp } from '../../../utils/styleKits';
import { commonStyle } from '../../first/musicplayer/commonStyle';
import Video from 'react-native-video';
import SvgUri from 'react-native-svg-uri';
import Mybtn from '../../../component/common/mybtn';
import Top from '@components/common/top';
import { getMusicById } from '@service/play';
import { NavigationContext } from '@react-navigation/native';
import { PureComponent } from 'react';
export default class hello extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: {},
      music: '',
      isPlaying: true,
      duration: 0.0,
      slideValue: 0.0,
      currentTime: 0.0
    };
    this.spinAnimated = Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.linear)
    });
  }
  static contextType = NavigationContext;
  componentDidMount() {
    getMusicById(this.props.route.params.staticId).then((res) => {
      console.log(res);
      this.setState({ music: res });
    });
  }
  setTime(data) {
    // console.log(data);
    let sliderValue = parseInt(this.state.currentTime);
    this.setState({
      slideValue: sliderValue,
      currentTime: data.currentTime
    });
  }
  formatMediaTime(duration) {
    let min = Math.floor(duration / 60);
    let second = duration - min * 60;
    min = min >= 10 ? min : '0' + min;
    second = second >= 10 ? second : '0' + second;
    return min + ':' + second;
  }
  playmusic = () => {
    this.props.route.params.sound.playAsync();

    this.setState({ isPlaying: true });
  };
  parseMusic = async () => {
    console.log('Stopping Sound');
    // this.setState({sound:undefined})

    await this.props.route.params.sound.pauseAsync();

    this.setState({ isPlaying: false });
  };
  setDuration(duration) {
    // console.log(duration);
    this.setState({ duration: duration.duration });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Top icon1="arrow-back" title="穆桂英挂帅" />
        <ImageBackground
          style={{ height: pxToDp(50), marginTop: pxToDp(10) }}
          imageStyle={{ borderRadius: pxToDp(8) }}
          // source={{ uri: props.item.picture }}
        >
          <Video
            ref={(el) => (this.videoRef = el)}
            source={{ uri: this.state.music }}
            resizeMode="contain"
            paused={!this.state.isPlaying}
            onLoad={(data) => this.setDuration(data)}
            onProgress={(data) => this.setTime(data)}
            onPlaybackStatusUpdate={(status) => this.setState({ status })}
          />
          <View
            style={{
              height: 80,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.2,
              borderColor: '#999999',
              alignSelf: 'center',
              width: '90%'
            }}
          >
            <TouchableOpacity
              style={{ opacity: 0.5 }}
              onPress={() =>
                this.state.isPlaying ? this.parseMusic() : this.playmusic()
              }
            >
              <SvgUri
                svgXmlData={this.state.isPlaying ? stopmusic : playmusic}
                width="30"
                height="30"
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: pxToDp(16),
                alignItems: 'center'
              }}
            >
              <Text>
                {this.formatMediaTime(Math.floor(this.state.currentTime))}
              </Text>
              <Slider
                style={{ width: 200 }}
                maximumValue={this.state.duration}
                minimumTrackTintColor={commonStyle.themeColor}
                maximumTrackTintColor={commonStyle.iconGray}
                step={1}
                value={this.state.slideValue}
                onValueChange={(value) => this.setState({ currentTime: value })}
                onSlidingComplete={(value) => this.videoRef.seek(value)}
              />
              <Text>
                {' '}
                {this.formatMediaTime(Math.floor(this.state.duration))}
              </Text>
            </View>
          </View>
        </ImageBackground>
        {/* <Text>音乐音量</Text> */}
        <Text
          style={{
            marginTop: pxToDp(70),
            marginLeft: pxToDp(16),
            fontSize: pxToDp(18),
            fontWeight: 'bold'
          }}
        >
          音量
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: pxToDp(20),
            marginLeft: pxToDp(16),
            alignItems: 'center'
          }}
        >
          {/* <Text>音乐音量</Text> */}
          <Text>音乐音量</Text>
          <Slider
            style={{ width: 200, height: 10, marginLeft: pxToDp(20) }}
            maximumTrackTintColor="#ddd"
            minimumTrackTintColor="#fa9222"
            value={this.state.value1}
            onValueChange={(value1) => this.setState({ value1 })}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: pxToDp(50),
            marginLeft: pxToDp(16),
            alignItems: 'center'
          }}
        >
          {/* <Text>音乐音量</Text> */}
          <Text>人声音量</Text>
          <Slider
            style={{ width: 200, height: 10, marginLeft: pxToDp(20) }}
            maximumTrackTintColor="#ddd"
            minimumTrackTintColor="#fa9222"
            value={this.state.value2}
            onValueChange={(value2) => this.setState({ value2 })}
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 0.2,
            borderColor: '#999999',
            height: 100
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
              this.context.goBack();
            }}
          >
            <SvgUri
              svgXmlData='<svg t="1629961646794" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5500" width="200" height="200"><path d="M551.52 42.656a473.056 473.056 0 0 0-444.72 313.44c-1.168 3.36-2.016 6.848-2.544 10.352H29.2a23.04 23.04 0 0 0-18.896 36.16l131.728 190.688a23.024 23.024 0 0 0 37.776 0l131.728-190.688a23.008 23.008 0 0 0-18.896-36.16h-65.872A357.008 357.008 0 0 1 576.096 158.512a356.992 356.992 0 1 1-214.832 658.192 57.6 57.6 0 0 0-61.488 97.424 472.128 472.128 0 0 0 697.52-555.136A472 472 0 0 0 551.52 42.656z m0 0" fill="#3B87DD" p-id="5501"></path></svg>'
              width="20"
              height="20"
            />
            <Text>重录</Text>
          </TouchableOpacity>
          <Mybtn
            title="本地保存"
            buttonStyle={{
              width: pxToDp(120),
              height: pxToDp(40),
              marginTop: pxToDp(25),
              borderRadius: pxToDp(32)
            }}
            titleStyle={{
              fontSize: pxToDp(16)
            }}
          />
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() =>
              this.context.navigate('SingSub', this.props.route.params.id)
            }
          >
            <SvgUri
              svgXmlData='<svg t="1629962047710" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6596" width="200" height="200"><path d="M663.495111 728.433778a142.222222 142.222222 0 1 1-29.468444 48.64l-249.514667-152.775111a170.666667 170.666667 0 1 1 0.398222-224.142223l249.457778-152.32a142.222222 142.222222 0 1 1 29.809778 48.440889l-249.628445 152.462223c7.822222 19.541333 12.117333 40.903111 12.117334 63.260444 0 22.584889-4.380444 44.117333-12.344889 63.857778l249.173333 152.576z" p-id="6597" fill="#468CD3"></path></svg>'
              width="20"
              height="20"
            />
            <Text>发布</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              marginTop: pxToDp(50),
              marginLeft: pxToDp(16),
              fontSize: pxToDp(18),
              fontWeight: 'bold'
            }}
          >
            更多推荐
          </Text>
          <View>
            <TouchableNativeFeedback useForeground={true}>
              <View
                style={{
                  width: '90%',
                  height: pxToDp(150),
                  borderRadius: pxToDp(16),
                  alignSelf: 'center',
                  borderRadius: pxToDp(16),
                  marginTop: pxToDp(20)
                }}
              >
                <Image
                  source={require('../../../res/1.jpg')}
                  style={{
                    width: '100%',
                    height: pxToDp(150),
                    borderRadius: pxToDp(16),
                    alignSelf: 'center'
                  }}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView>
    );
  }
}
