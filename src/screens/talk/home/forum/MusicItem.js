import React, { useState, useRef, memo } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { useNavigation } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import { sandian } from '../../../../component/common/iconSvg';
import { Video } from 'expo-av';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Mybtn from '@components/common/mybtn';
import {
  playmusic,
  dianzan,
  zhuanfa,
  pinglun,
  stopmusic
} from '../../../../component/common/iconSvg';
import LottieView from 'lottie-react-native';
import changeImgSize from '../../../../utils/changeImgSize';
export default memo(function ActressItem(props) {
  const item = props.item;
  const video = useRef();
  const navigation = useNavigation();
  const [status, setStatus] = useState({ isPlaying: false });
  const [count, setCount] = useState(0);
  const [isClick, setClick] = useState(false);
  const onPlaybackStatusUpdate = (status) => {
    setStatus(status);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modaldata, setmodaldata] = useState(null);
  const jubao = () => {
    setModalVisible1(!modalVisible1);
    navigation.navigate('Jubao');
  };
  return (
    <View>
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
            setModalVisible1(true);
          }}
        >
          <SvgUri svgXmlData={sandian} width="20" height="20" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: pxToDp(8)
          }}
        >
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
              navigation.navigate('Inluntan', {
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
                {item.createTime?.split('T')[0]}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: pxToDp(16),
            marginRight: pxToDp(16),
            marginBottom: pxToDp(16)
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Inluntan', {
                mid: item.id,
                uid: item.user.id
              });
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(18),
                color: '#333333'
              }}
            >
              {item.content}
            </Text>
          </TouchableOpacity>
          <ImageBackground
            style={{ flex: 1, height: pxToDp(50), marginTop: pxToDp(10) }}
            imageStyle={{ borderRadius: pxToDp(8) }}
            source={{ uri: item.picture }}
          >
            {status.isPlaying ? (
              <View
                style={{
                  width: 70,
                  overflow: 'hidden',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  height: '100%',
                  left: 20,
                  bottom: 15
                }}
              >
                <LottieView
                  style={{
                    height: pxToDp(20),
                    alignSelf: 'center',
                    justifyContent: 'center'
                  }}
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
              source={{ uri: item.music }}
              resizeMode="contain"
              onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: pxToDp(12),
                right: pxToDp(16),
                opacity: 0.5
              }}
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            >
              <SvgUri
                svgXmlData={status.isPlaying ? stopmusic : playmusic}
                width="30"
                height="30"
              />
            </TouchableOpacity>
          </ImageBackground>
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
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => {
              if (isClick) {
                setCount(count - 1);
              } else {
                setCount(count + 1);
              }
              setIsClick(!isClick);
            }}
          >
            <SvgUri svgXmlData={dianzan} width="20" height="20" />
            <Text
              style={{
                position: 'absolute',
                left: pxToDp(30),
                fontSize: pxToDp(12),
                color: '#666666'
              }}
            >
              {count}
              {item.dz}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Inluntan', {
                mid: item.id,
                uid: item.user.id
              })
            }
          >
            <SvgUri svgXmlData={pinglun} width="20" height="20" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setmodaldata(item);
              setModalVisible(!modalVisible);
            }}
          >
            <SvgUri svgXmlData={zhuanfa} width="25" height="25" />
          </TouchableOpacity>
        </View>
      </View>
      {modaldata ? (
        <View style={styles.centeredView1}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView1}>
              <View style={styles.modalView1}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  style={{
                    position: 'absolute',
                    top: pxToDp(6),
                    right: pxToDp(8)
                  }}
                >
                  <Ionicon
                    name="md-close-circle-outline"
                    size={30}
                    color="grey"
                  />
                </TouchableOpacity>
                <Image
                  source={{
                    uri: modaldata.images[0] ? modaldata.images[0] : ''
                  }}
                  style={{
                    width: '100%',
                    height: pxToDp(200),
                    alignSelf: 'center',
                    borderRadius: pxToDp(8)
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: pxToDp(50),
                    justifyContent: 'flex-start',
                    marginTop: pxToDp(20)
                  }}
                >
                  <Image
                    source={{ uri: modaldata.user.avatar }}
                    style={{
                      width: pxToDp(80),
                      height: pxToDp(80),
                      borderRadius: pxToDp(80)
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        marginLeft: pxToDp(16),
                        fontWeight: 'bold',
                        fontSize: pxToDp(16)
                      }}
                    >
                      {modaldata.user.nickName}
                    </Text>
                    <Text
                      style={{ marginLeft: pxToDp(16), fontSize: pxToDp(14) }}
                    >
                      {' '}
                      {modaldata.createTime?.split('T')[0]}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    marginLeft: pxToDp(16),
                    fontSize: pxToDp(18),
                    marginTop: pxToDp(10)
                  }}
                >
                  {modaldata.content}
                </Text>
                <View
                  style={{ height: 160, width: '120%', alignSelf: 'center' }}
                >
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: pxToDp(16),
                      marginTop: pxToDp(54)
                    }}
                  >
                    分享至
                  </Text>
                  <View
                    style={{
                      borderWidth: 0.3,
                      width: '100%',
                      alignSelf: 'center',
                      borderColor: '#999999',
                      marginTop: pxToDp(8)
                    }}
                  ></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      width: pxToDp(280),
                      alignSelf: 'center',
                      marginTop: pxToDp(16)
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
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
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
                    <FontAwesome name="qq" size={25} color="#87CEFA" />
                    <Text>qq</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ alignItems: 'center' }}>
                    <FontAwesome name="wechat" size={25} color="#32CD32" />
                    <Text>微信</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ alignItems: 'center' }}>
                    <FontAwesome name="weibo" size={25} color="#FA8072" />
                    <Text>微博</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={jubao}
                  >
                    <FontAwesome name="exclamation" size={25} color="#DC143C" />
                    <Text>举报</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Ionicons name="star" size={25} color="#FFD700" />
                    <Text>收藏</Text>
                  </TouchableOpacity>
                </View>
                <Mybtn
                  title="取消"
                  onPress={() => {
                    setModalVisible1(!modalVisible1);
                  }}
                  buttonStyle={{
                    width: pxToDp(90),
                    height: pxToDp(30),
                    borderRadius: pxToDp(32),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: pxToDp(8),
                    marginTop: pxToDp(24)
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
});
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
    justifyContent: 'center'
  },
  modalView1: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: pxToDp(16),
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    height: '75%',
    width: '90%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
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
