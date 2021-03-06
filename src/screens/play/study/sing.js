import React, { PureComponent, createRef } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Modal
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
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
import Mybtn from '../../../component/common/mybtn';
class Index extends PureComponent {
  state = {
    status: {},
    recording: '',
    isrecoding: false,
    playingsong: '',
    sound: [],
    URI: [],
    autoPlay: true,
    showLoading: true,
    value: 1,
    isClick: false,
    data1: this.props.route.params,
    modalVisible: false,
    modalVisible1: false,

  };
  // SingOver = () => {
  //   const { detail, title, mp3 } = this.props.route.params;
  //   console.log(this.props.route.params);
  //   const data1 = {
  //     detail,
  //     title,
  //     mp3
  //   };
  //   this.context.navigate('SingOver', {
  //     staticId: 1,
  //     sound: arr[0],
  //     id: res.insertId,
  //     data1
  //   });
  // };
  static contextType = NavigationContext;
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  setModalVisible1 = (visible) => {
    this.setState({ modalVisible1: visible });
  };

  playSound = async () => {
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
    console.log(arr);
    fd.append('staticId', this.props.route.params.staticId);
    request.post({ url: '/uploads/music', data: fd }).then((res) => {
      console.log(res);
      this.context.navigate('SingOver', {
        staticId: this.props.route.params.staticId,
        sound: arr[0],
        id: res.insertId
      });
    });
  };

  pauseSound = async () => {
    await this.video.pauseAsync();
  };

  startRecording = async () => {
    try {
      this.setState({ isrecoding: true });
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
    console.log(123);
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
  //??????????????????
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
            source={require('../../../../lottie/??????loading.json')}
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
            ????????????
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  clickVoice = () => {
    this.setState({ isClick: !this.state.isClick });
  };
  reStart = async () => {
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
  };
  //??????????????????
  renderMenu = () => {
    const { autoPlay, modalVisible, modalVisible1 } = this.state;
    const Fun = () => {
      this.setModalVisible(!modalVisible);
      this.reStart();
    };
    const Fun1 = () => {
      this.toPause();
      this.setModalVisible1(!modalVisible1);
      this.playSound();
    };
    return (
      <View>
        <RBSheet
       customStyles={{  
         container: {
            backgroundColor: "#D5E8E6"
          },}}
          ref={(ref) => {
            this.Scrollable1 = ref;
          }}
          height={250}
          closeOnDragDown
          openDuration={600}
          animationType="fade"
        >
          <Text style={{marginLeft:pxToDp(16),fontSize:16,fontWeight:'bold'}}>????????????</Text>
          <Text style={{marginLeft:pxToDp(16),fontSize:12,color:'#999999'}}>????????????????????????</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(40),
              marginLeft: pxToDp(16),
              alignItems: 'center'
            }}
          >
            {/* <Text>????????????</Text> */}
            <Text>????????????</Text>
            <Slider
              style={{ width:pxToDp(264), height: 10, marginLeft: pxToDp(20) }}
              maximumTrackTintColor="#ddd"
              minimumTrackTintColor="#fa9222"
              value={0.4}
              buttonStyle={{width:10}}
              thumbStyle={{width:10,height:10}}
              thumbTintColor='#62bfad'
              onValueChange={(value2) => this.setState({ value2 })}
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
            {/* <Text>????????????</Text> */}
            <Text>????????????</Text>
            <Slider
              style={{ width: pxToDp(264), height: 10, marginLeft: pxToDp(20) }}
              maximumTrackTintColor="#ddd"
              minimumTrackTintColor="#fa9222"
              value={0.6}
              buttonStyle={{width:10}}
              thumbStyle={{width:10,height:10}}
              thumbTintColor='#62bfad'
              onValueChange={(value2) => this.setState({ value2 })}
            />
          </View>
        </RBSheet>
        <View style={styles.bottom}>
          {/* ?????? */}
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
              {this.state.status.isPlaying ? '??????' : '??????'}
            </Text>
          </TouchableOpacity>
          {/* ?????? */}
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => this.Scrollable1.open()}
          >
            <SvgUri svgXmlData={voice} width="30" height="30" />
            <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>??????</Text>
          </TouchableOpacity>
          {/* ?????? */}
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
              source={require('../../../../lottie/??????.json')}
              ref={(animation) => {
                this.animation = animation;
              }}
              loop
            />
          </TouchableOpacity>
          {/* ?????? */}
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => this.setModalVisible(!modalVisible)}
          >
            <SvgUri svgXmlData={playback} width="30" height="30" />
            <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>??????</Text>
          </TouchableOpacity>
          {/* ?????? */}
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => {
              this.video.pauseAsync();

              this.setModalVisible1(!modalVisible1);
            }}
          >
            <SvgUri svgXmlData={over} width="30" height="30" />
            <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>??????</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>
                  ????????????
                </Text>
                <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>
                  ??????????????????
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginTop: pxToDp(32)
                  }}
                >
                  <Mybtn
                    title="??????"
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      borderRadius: pxToDp(32),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: pxToDp(8)
                    }}
                    titleStyle={{
                      height: 30,
                      color: 'white',
                      fontSize: pxToDp(14),
                      marginTop: pxToDp(10)
                    }}
                  />
                  <Mybtn
                    title="??????"
                    onPress={Fun}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      borderRadius: pxToDp(32),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: pxToDp(8)
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
            </View>
          </Modal>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setModalVisible1(!modalVisible1);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>
                  ????????????
                </Text>
                <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>
                  ??????????????????
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginTop: pxToDp(32)
                  }}
                >
                  <Mybtn
                    title="??????"
                    onPress={() => {
                      this.setModalVisible1(!modalVisible1);
                    }}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      borderRadius: pxToDp(32),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: pxToDp(8)
                    }}
                    titleStyle={{
                      height: 30,
                      color: 'white',
                      fontSize: pxToDp(14),
                      marginTop: pxToDp(10)
                    }}
                  />
                  <Mybtn
                    title="??????"
                    onPress={Fun1}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      borderRadius: pxToDp(32),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: pxToDp(8)
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
            </View>
          </Modal>
        </View>
      </View>
    );
  };
  render() {
    const { showLoading, value } = this.state;
    const { detail, title, mp3 } = this.props.route.params;
    console.log('999', this.props.route.params);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-between'
        }}
      >
        <Top icon1="arrow-back" title={title} />
        <ImageBackground
          style={{ flex: 1 }}
          source={
            require('../../../res/sucai/13.jpg')
          }
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: pxToDp(65), marginBottom: pxToDp(65) }}
          >
            <View
              style={{
                alignSelf: 'center',
                width: pxToDp(250),
                justifyContent: 'center'
              }}
            >
              <Text style={styles.basicbox}>{detail}</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Video
                ref={(el) => (this.video = el)}
                source={mp3}
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
    color: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: pxToDp(20),
    backgroundColor: 'white',
    borderRadius: pxToDp(24),
    padding: pxToDp(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
});

export default Index;
