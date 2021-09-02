import React, { useState, useRef, memo } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { useNavigation } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import { sandian } from '../../../../component/common/iconSvg';
import { Video } from 'expo-av';
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
  return (
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
          props.setModalVisible(true);
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
              {item.createTime.split('T')[0]}
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
          style={{ flexDirection: 'row' }}
          onPress={() => {
            console.log(isClick);
            console.log(count);
            setClick(!isClick);
            isClick ? setCount(count - 1) : setCount(count + 1);
          }}
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
            {count}
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
        <TouchableOpacity>
          <SvgUri svgXmlData={zhuanfa} width="25" height="25" />
        </TouchableOpacity>
      </View>
    </View>
  );
});
