import React, { Component, createRef, memo } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Alert,
  Dimensions
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import { sandian } from '../../../../component/common/iconSvg';
import { Audio } from 'expo-av';
import { Video } from 'expo-av';
import {
  playmusic,
  dianzan,
  zhuanfa,
  pinglun,
  stopmusic
} from '../../../../component/common/iconSvg';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useRef } from 'react';
import { PureComponent } from 'react';
import LottieView from 'lottie-react-native';
import changeImgSize from '../../../../utils/changeImgSize';
import Mybtn from '../../../../component/common/mybtn';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
import ActressItem from './ActressItem';
import MusicItem from './MusicItem';

const WINDOW_WIDTH = Dimensions.get('window').width;

const Music = memo(function (props) {
  const video = useRef();
  return (
    <ImageBackground
      style={{ flex: 1, height: pxToDp(50), marginTop: pxToDp(10) }}
      imageStyle={{ borderRadius: pxToDp(8) }}
      source={{ uri: props.item.picture }}
    >
      {props.status.isPlaying ? (
        <View
          style={{
            width: 70,
            overflow: 'hidden',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '100%',
            left: 20,
            bottom: 15,
          }}
        >
          <LottieView
            style={{ height: pxToDp(20), alignSelf: 'center', justifyContent: 'center' }}
            source={require('../../../../../lottie/40716-musicsoundequalizer.json')}
            autoPlay={true}
            loop
          />
        </View>
      ) : (
        <View></View>
      )}
      <Video
        ref={video}
        source={{ uri: props.item.music }}
        resizeMode="contain"
        onPlaybackStatusUpdate={props.onPlaybackStatusUpdate}
      />
      <TouchableOpacity
        style={{ position: 'absolute', bottom: pxToDp(12), right: pxToDp(16), opacity: 0.5 }}
        onPress={() =>
          props.status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        <SvgUri
          svgXmlData={props.status.isPlaying ? stopmusic : playmusic}
          width="30"
          height="30"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
});
const Article = memo((props) => {
  return (
    <ScrollView
      style={{ height: pxToDp(120), marginTop: pxToDp(10) }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {props.item.images?.map((item, index) => (
        <Image
          key={item}
          style={{
            width: pxToDp(155),
            height: '100%',
            borderRadius: pxToDp(10),
            marginRight: pxToDp(10)
          }}
          source={{ uri: item }}
        />
      ))}
    </ScrollView>
  );
});
class Index extends PureComponent {
  state = {
    modalVisible: false,
    modalVisible1: false,
    status: {},
    modaldata: [],
    count: 0
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  playSound = async () => {
    if (this.state.sound.length) {
      for (const sound of this.state.sound) {
        this.setState({ playingsong: sound });
        await sound.playAsync();
      }
      this.setState({ isplay: true });
    } else {
      for (const uri of this.state.URI) {
        const { sound } = await Audio.Sound.createAsync({ uri });
        this.setState({ sound: [...this.state.sound, sound] });
      }
      for (const sound of this.state.sound) {
        this.setState({ playingsong: sound });
        await sound.playAsync();
      }

      this.setState({ isplay: true });
    }
  };

  pauseSound = async () => {
    // this.setState({sound:undefined})
    await this.state.playingsong.pauseAsync();
    this.setState({ isplay: false });
  };
  showModel1 = (data) => {
    const { modalVisible1, modaldata } = this.state

    return (modaldata.user == undefined ? (<View></View>) :
      (<View style={styles.centeredView1}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible1);
          }}
        >
          <View style={styles.centeredView1}>
            <View style={styles.modalView1}>
              <TouchableOpacity onPress={()=>{this.setState({modalVisible1:false})}}  style={{position:'absolute',right:5,top:0}}>
            <Ionicon
                  name="md-close-circle-outline"
                  size={30}
                  color="grey"
                 
                />
                </TouchableOpacity>
              <Image source={{ uri: modaldata.images[0] }} style={{ width: '120%', height: pxToDp(200), alignSelf: 'center' }} />
              <View style={{ flexDirection: 'row', borderRadius: pxToDp(50), justifyContent: 'flex-start', marginTop: pxToDp(20) }}>
                <Image source={{ uri: modaldata.user.avatar }} style={{ width: pxToDp(80), height: pxToDp(80), borderRadius: pxToDp(80) }} />
                <View>
                  <Text style={{ marginLeft: pxToDp(16), fontWeight: 'bold', fontSize: pxToDp(16) }}>{modaldata.user.nickName}</Text>
                  <Text style={{ marginLeft: pxToDp(16), fontSize: pxToDp(14) }}> {modaldata.createTime}</Text>
                </View>
              </View>
              <Text style={{ marginLeft: pxToDp(16), fontSize: pxToDp(18), marginTop: pxToDp(10) }}>{modaldata.content}</Text>
              <View style={{justifyContent:'space-around',height:160,width:'120%',alignSelf:'center'}}>
              <Text style={{alignSelf:'center',fontSize:pxToDp(18),}}>分享至</Text>
              <View style={{borderWidth:.3,width:'100%',alignSelf:'center',borderColor:'#999999'}}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: pxToDp(280),
                  alignSelf:'center'
  
                }}
              >
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  <Ionicons name="qq" size={25} color="#87CEFA" />
                  <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>qq</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  <Ionicons name="wechat" size={25} color="#32CD32" />
                  <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>微信</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  <Ionicons name="weibo" size={25} color="#FA8072" />
                  <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>微博</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
          </View>

        </Modal>
      </View>)

    )
  }
  static contextType = NavigationContext;

  render() {
    console.log(this.state.modaldata);
    console.log(typeof (this.state.modaldata.user));
    const music = this.props.dongtai.filter((item) => item.label);
    const actress = this.props.dongtai.filter((item) => !item.label);
    const { modalVisible, modalVisible1, } = this.state;
    return (
      <View>
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
                <View style={{ alignItems: 'center' }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      width: pxToDp(280),
                      alignItems: 'center'
                    }}
                  >
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Ionicons name="qq" size={25} color="#87CEFA" />
                      <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>
                        qq
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Ionicons name="wechat" size={25} color="#32CD32" />
                      <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>
                        微信
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Ionicons name="weibo" size={25} color="#FA8072" />
                      <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>
                        微博
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ alignItems: 'center' }}
                      onPress={() => {
                        this.setModalVisible(!modalVisible);
                        this.context.navigate('Jubao');
                      }}
                    >
                      <Ionicons name="exclamation" size={25} color="#DC143C" />
                      <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>
                        举报
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Ionicons name="star" size={25} color="#FFD700" />
                      <Text style={{ fontSize: pxToDp(12), color: '#333333' }}>
                        收藏
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Mybtn
                    title="取消"
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                    buttonStyle={{
                      width: pxToDp(105),
                      height: pxToDp(35),
                      alignSelf: 'center',
                      borderRadius: pxToDp(32),
                      marginTop: pxToDp(32)
                    }}
                    titleStyle={{
                      color: 'white',
                      marginTop: pxToDp(-3),
                      fontSize: pxToDp(14)
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingLeft: pxToDp(16),
              paddingRight: pxToDp(16),
              paddingTop: pxToDp(8)
            }}
          >
            {actress.map((item) => (
              <View
                key={item.id}
                style={{
                  elevation: 2,
                  shadowColor: 'black', //  阴影颜色
                  shadowOffset: { width: 0, height: 0 }, // 阴影偏移
                  shadowOpacity: 1, // 阴影不透明度
                  shadowRadius: 10, //  圆角
                  borderWidth: 0,
                  marginBottom: pxToDp(20),
                  backgroundColor: 'white',
                  borderRadius: pxToDp(8)
                }}
              >

                <TouchableOpacity
                  style={{
                    right: pxToDp(16),
                    top: pxToDp(24),
                    position: 'absolute',
                  }}
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                >
                  <SvgUri svgXmlData={sandian} width="20" height="20" />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: pxToDp(8) }}>
                  <Image
                    source={{ uri: changeImgSize(item.user.avatar) }}
                    style={{
                      width: pxToDp(60),
                      height: pxToDp(60),
                      borderRadius: pxToDp(30)
                    }}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      this.context.navigate('Inluntan', {
                        mid: item.id,
                        uid: item.user.id
                      })
                    }
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: pxToDp(18),
                          color: '#000000',
                          fontWeight: 'bold',
                          marginLeft: pxToDp(8)
                        }}
                      >
                        {item.user.nickName}
                      </Text>
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          color: '#333333',
                          marginLeft: pxToDp(8)
                        }}
                      >
                        {item.createTime}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginLeft: pxToDp(16),
                    marginRight: pxToDp(16),
                    marginBottom: pxToDp(16),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.context.navigate('Inluntan', {
                        mid: item.id,
                        uid: item.user.id
                      });
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(18),
                        color: '#333333',
                      }}
                    >
                      {item.content}
                    </Text>
                  </TouchableOpacity>

                  <Article
                    status={this.state.status}
                    item={item}
                    onPlaybackStatusUpdate={this.onPlaybackStatusUpdate}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: pxToDp(10),
                    alignItems: 'center'
                  }}
                >
                  <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={() =>
                      this.setState({ count: this.state.count + 1 })
                    }
                  >
                    <SvgUri svgXmlData={dianzan} width="20" height="20" />
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: pxToDp(5),
                        left: pxToDp(30),
                        fontSize: pxToDp(12),
                        color: '#666666'
                      }}
                    >
                      {this.state.count}
                      {item.dz}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.context.navigate('Inluntan', {
                        mid: item.id,
                        uid: item.user.id
                      })
                    }
                  >
                    <SvgUri svgXmlData={pinglun} width="20" height="20" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    this.setState({ modaldata: item });
                    this.setState({ modalVisible1: !modalVisible1 });


                  }}
                  >
                    <SvgUri svgXmlData={zhuanfa} width="25" height="25" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            {music.map((item) => (
              <View
                key={item.id}
                style={{
                  elevation: 2,
                  shadowColor: 'black', //  阴影颜色
                  shadowOffset: { width: 0, height: 0 }, // 阴影偏移
                  shadowOpacity: 1, // 阴影不透明度
                  shadowRadius: 10, //  圆角
                  borderWidth: 0,
                  marginBottom: pxToDp(20),
                  backgroundColor: 'white',
                  borderRadius: pxToDp(8)
                }}
              >
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: pxToDp(16),
                    right: pxToDp(24)
                  }}
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                >
                  <SvgUri svgXmlData={sandian} width="20" height="20" />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: pxToDp(8) }}>
                  <Image
                    source={{ uri: changeImgSize(item.user.avatar) }}
                    style={{
                      width: pxToDp(60),
                      height: pxToDp(60),
                      borderRadius: pxToDp(30)
                    }}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      this.context.navigate('Inluntan', {
                        mid: item.id,
                        uid: item.user.id
                      })
                    }
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: pxToDp(18),
                          color: '#000000',
                          fontWeight: 'bold',
                          marginLeft: pxToDp(8)
                        }}
                      >
                        {item.user.nickName}
                      </Text>
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          color: '#333333',
                          marginLeft: pxToDp(8)
                        }}
                      >
                        {item.createTime}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginLeft: pxToDp(16),
                    marginRight: pxToDp(16),
                    marginBottom: pxToDp(16),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.context.navigate('Inluntan', {
                        mid: item.id,
                        uid: item.user.id
                      });
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(18),
                        color: '#333333',
                      }}
                    >
                      {item.content}
                    </Text>
                  </TouchableOpacity>

                  <Music
                    status={this.state.status}
                    item={item}
                    onPlaybackStatusUpdate={this.onPlaybackStatusUpdate}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: pxToDp(10),
                    alignItems: 'center'
                  }}
                >
                  <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={() =>
                      this.setState({ count: this.state.count + 1 })
                    }
                  >
                    <SvgUri svgXmlData={dianzan} width="20" height="20" />
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: pxToDp(5),
                        left: pxToDp(30),
                        fontSize: pxToDp(12),
                        color: '#666666'
                      }}
                    >
                      {this.state.count}
                      {item.dz}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.context.navigate('Inluntan', {
                        mid: item.id,
                        uid: item.user.id
                      })
                    }
                  >
                    <SvgUri svgXmlData={pinglun} width="20" height="20" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SvgUri svgXmlData={zhuanfa} width="25" height="25" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        {this.showModel1()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(16)
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  centeredView1: {
    flex: 1,
    marginTop: 22,

  },
  modalView1: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    height: '75%',
    width: '90%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});

export default Index;
