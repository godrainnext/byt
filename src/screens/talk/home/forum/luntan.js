import React, { PureComponent, createRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Modal, Alert } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import SvgUri from 'react-native-svg-uri';
import { BottomSheet, ListItem } from 'react-native-elements';
import { } from 'react-native-elements/dist/list/ListItem';
import { sandian } from '../../../../component/common/iconSvg'
import { Audio } from 'expo-av';
import { Video } from 'expo-av'
import { playmusic, dianzan, zhuanfa, pinglun, stopmusic } from '../../../../component/common/iconSvg';
import Ionicons from 'react-native-vector-icons/FontAwesome';
class Index extends PureComponent {
  state = {
    modalVisible: false,
    status: {}
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  playSound = async () => {
    if (this.state.sound.length) {
      console.log('Loading Sound');
      console.log('Playing Sound');
      for (const sound of this.state.sound) {
        this.setState({ playingsong: sound });
        await sound.playAsync();
      }
      this.setState({ isplay: true });

      console.log(this.state.sound);
    } else {
      for (const uri of this.state.URI) {
        const { sound } = await Audio.Sound.createAsync({ uri });
        this.setState({ sound: [...this.state.sound, sound] });
      }

      console.log('Loading Sound');
      console.log('Playing Sound');
      for (const sound of this.state.sound) {
        this.setState({ playingsong: sound });
        await sound.playAsync();
      }

      this.setState({ isplay: true });
    }
  };

  pauseSound = async () => {
    console.log('Stopping Sound');
    // this.setState({sound:undefined})
    await this.state.playingsong.pauseAsync();
    this.setState({ isplay: false });
  };
  showMusic = (obj) => {
    const video = createRef();
    return (
      <ImageBackground
        key={obj.music}
        style={{ flex: 1, height: pxToDp(150), marginTop: pxToDp(10) }}
        source={{ uri: obj.picture }}
      >
        <Video
          ref={video}
          source={{ uri: obj.music }}
          resizeMode="contain"
          onPlaybackStatusUpdate={(status) => this.setState({ status })}
        />
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 10, right: 10, opacity: 0.5 }}
          onPress={() =>
            this.state.status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <SvgUri
            svgXmlData={this.state.status.isPlaying ? stopmusic : playmusic}
            width="30"
            height="30"
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  };
  showArticle = (obj) => {
    console.log(obj);
    return (
      <ScrollView
        style={{ flex: 1, height: pxToDp(120), marginTop: pxToDp(10) }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {obj.images?.map((item) => (
          <Image
            key={item}
            style={{
              width: pxToDp(155),
              height: '100%',
              borderRadius: pxToDp(8),
              marginRight: pxToDp(10)
            }}
            source={{ uri: item }}
          />
        ))}
      </ScrollView>
    );
  };
  static contextType = NavigationContext;
  render() {
    const { modalVisible } = this.state;
    const jubao = () => {
      this.setModalVisible(!modalVisible);
      this.context.navigate('Jubao');
    };
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
                      <Text>qq</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Ionicons name="wechat" size={25} color="#32CD32" />
                      <Text>微信</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Ionicons name="weibo" size={25} color="#FA8072" />
                      <Text>微博</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ alignItems: 'center' }}
                      onPress={jubao}
                    >
                      <Ionicons name="exclamation" size={25} color="#DC143C" />
                      <Text>举报</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Ionicons name="star" size={25} color="#FFD700" />
                      <Text>收藏</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                    style={{
                      borderWidth: pxToDp(1),
                      borderColor: 'black',
                      height: pxToDp(25),
                      width: pxToDp(200),
                      borderRadius: pxToDp(16),
                      alignItems: 'center',
                      marginTop: pxToDp(20)
                    }}
                  >
                    <Text style={{ fontSize: pxToDp(14) }}>取消</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <ScrollView>
          <View
            style={{
              width: '95%',
              marginLeft: pxToDp(10),
              marginTop: pxToDp(10),
              marginBottom: pxToDp(20)
            }}
          >
            {this.props.dongtai.map((item, dtid) => (
              <View
                key={item.id}
                style={{
                  elevation: 2,
                  borderWidth: 0,
                  marginBottom: pxToDp(20),
                  backgroundColor: 'white',
                  borderRadius: pxToDp(24)
                }}
              >
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: pxToDp(30),
                    right: pxToDp(30)
                  }}
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                >
                  <SvgUri svgXmlData={sandian} width="20" height="20" />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', margin: pxToDp(10) }}>
                  <Image
                    source={{ uri: item.user.avatar }}
                    style={{
                      width: pxToDp(60),
                      height: pxToDp(60),
                      borderRadius: pxToDp(40),
                      marginLeft: pxToDp(20),
                      marginTop: pxToDp(10)
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => this.context.navigate('Inluntan', item.id)}
                  >
                    <View style={{ marginTop: pxToDp(10) }}>
                      <Text
                        style={{
                          fontSize: pxToDp(25),
                          fontWeight: 'bold',
                          paddingLeft: pxToDp(20)
                        }}
                      >
                        {item.user.nickName}
                      </Text>
                      <Text
                        style={{
                          fontSize: pxToDp(15),
                          paddingLeft: pxToDp(20),
                          marginTop: pxToDp(5)
                        }}
                      >
                        {item.createTime}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '90%',
                    marginBottom: pxToDp(30),
                    alignSelf: 'center'
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.context.navigate('Inluntan', item.id);
                      console.log(item);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(18),
                        marginBottom: pxToDp(10),
                        paddingLeft: pxToDp(8),
                        marginTop: pxToDp(10)
                      }}
                    >
                      {item.content}
                    </Text>
                  </TouchableOpacity>

                  {item.label ? this.showMusic(item) : this.showArticle(item)}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: pxToDp(10)
                  }}
                >
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <SvgUri svgXmlData={dianzan} width="20" height="20" />
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: pxToDp(5),
                        left: pxToDp(30)
                      }}
                    >
                      {item.dz}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.context.navigate('Inluntan', item.id)}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(22)
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
    },
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
    marginBottom: pxToDp(15),
    textAlign: 'center'
  }
});


export default Index;
