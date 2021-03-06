import React, { PureComponent, createRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions,
  ToastAndroid
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Top from '../../../../component/common/dongtaiTop';
import Comments from './comments';
import { getMomentInnerById } from '@service/moment';
import SvgUri from 'react-native-svg-uri';
import { stopmusic, playmusic } from '../../../../component/common/iconSvg';
import request from '@service/index';
import { addFollow, cancelFollow } from '../../../../service/mine';
import { DeviceEventEmitter } from 'react-native';
import FollowButton from '@components/FollowButton';
import { Video, Audio } from 'expo-av';
import { connect } from 'react-redux'
import Mybtn from '../../../../component/common/mybtn';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;

class Index extends PureComponent {
  state = {
    inner: {},
    status: {},
    mycomment: '',
    myyyyyyyy: { user: '' },
    isFollow: false
  };
  _submit = () => {
    if (!this.state.mycomment) {
      ToastAndroid.show('留言内容不能为空', ToastAndroid.SHORT);
      return;
    }

    request
      .post({
        url: `/comment/${this.props.route.params.mid}`,
        data: {
          content: this.state.mycomment
        }
      })
      .then((res) => {
        this.setState({ mycomment: '' });
        getMomentInnerById(this.props.route.params.mid)
          .then((res) => {

            this.setState({ inner: { ...res } });
          })
          .catch((err) => console.log(err));
      });
  };

  componentDidMount() {
    getMomentInnerById(this.props.route.params.mid)
      .then((res) => {
        this.setState({ inner: { ...res } });
      })
      .catch((err) => console.log(err));
  }
  addFollows = (id) => {
    if (!this.state.isFollow) {
      addFollow(id).then((res) => {
        this.setState({ isFollow: true });
        DeviceEventEmitter.emit('addFollow');
      });
    } else {
      cancelFollow(id).then((res) => {
        this.setState({ isFollow: false });
        DeviceEventEmitter.emit('removeFollow');
      });
    }
  };

  showArticle = () => {
    const { images } = this.state.inner;
    const renderCarousel = (img) => (
      <Carousel style={{ height: WINDOW_WIDTH }}>
        <Image
          key={img}
          style={{ flex: 1 }}
          resizeMode="contain"
          source={{ uri: img }}
        />
      </Carousel>
    );
    return (
      <ScrollView
        style={{
          height: pxToDp(170),
          marginTop: pxToDp(10),
          marginLeft: pxToDp(10)
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {images?.map((item, index) => (
          <View key={index} style={{ marginBottom: pxToDp(10) }}>
            <Lightbox
              springConfig={{ tension: 15, friction: 7 }}
              swipeToDismiss={true}
              renderContent={() => renderCarousel(item)}
              underlayColor='white'
            >
              <Image
                style={{
                  width: pxToDp(200),
                  height: '90%',
                  borderRadius: pxToDp(8),
                  marginLeft: pxToDp(10),
                  marginTop: pxToDp(8),
                  marginBottom: pxToDp(10)
                }}
                source={{ uri: item }}
              />
            </Lightbox>
          </View>
        ))}
      </ScrollView>
    );
  };
  showMusic = () => {
    const video = createRef();
    const { cover, music } = this.state.inner;
    return (
      <ImageBackground
        style={{
          flex: 1,
          height: pxToDp(150),
          marginTop: pxToDp(10)
        }}
        source={{ uri: cover }}
      >
        <Video
          ref={video}
          source={{ uri: music }}
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
  static contextType = NavigationContext;
  render() {
    const {
      comments,
      content = '',
      createTime,
      user,
      label,
      cover
    } = this.state.inner;
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" icon2="more-horizontal" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: pxToDp(16),
            paddingBottom: 0,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              alignSelf: 'center',
              paddingBottom: pxToDp(20),
              borderRadius: pxToDp(8),
              elevation: 2,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 0.6, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            {/* 动态信息 */}
            <View
              style={{
                width: '100%',
                height: pxToDp(80),
                marginTop: pxToDp(20),
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={{ uri: user?.avatarUrl }}
                  style={{
                    height: pxToDp(60),
                    width: pxToDp(60),
                    borderRadius: pxToDp(64),
                    margin: pxToDp(8)
                  }}
                />
                <View
                  style={{
                    marginTop: pxToDp(16),
                    marginLeft: pxToDp(8)
                  }}
                >
                  {/* 昵称 */}
                  <Text style={{ fontSize: pxToDp(18), color: '#000000', fontWeight: 'bold' }}>
                    {user?.nickName}
                  </Text>
                  {/* 发布时间 */}
                  <Text style={{ color: '#333333', fontSize: pxToDp(16) }}> {createTime?.split('T')[0]}</Text>
                </View>
              </View>
              {/* 关注 */}
              <View style={{ marginTop: pxToDp(24), width: pxToDp(80) }}>
                {this.props.userInfo.id === user?.id ? null : <FollowButton />}
              </View>
            </View>
           
            <View style={{ marginLeft: pxToDp(22) }}>
              <Text style={{ fontSize: pxToDp(18), color: '#333333' }}>{content}</Text>
            </View>
            {label ? this.showMusic() : this.showArticle()}
          </View>
          {/* 评论区 */}
          <View
            style={{
              marginTop: pxToDp(16)
            }}
          >
            <Text style={{ fontSize: pxToDp(18), color: '#000000', margin: pxToDp(8) }}>
              评论区
            </Text>
            <View style={{ marginBottom: pxToDp(80) }}>
              <Comments
                inputRef={this.inputRef}
                comments={comments ? comments : []}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            height: pxToDp(48),
            width: Dimensions.get('window').width,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0
          }}
        >
          <TextInput
            placeholder="发一条友善的评论"
            style={{
              height: '80%',
              backgroundColor: '#fcfcfc',
              width: '75%',
              marginLeft: pxToDp(20),
              borderRadius: pxToDp(24),
              paddingLeft: pxToDp(10)
            }}
            onChangeText={(mycomment) => this.setState({ mycomment })}
            value={this.state.mycomment}
            ref={(ref) => (this.inputRef = ref)}
          />
          <TouchableOpacity onPress={this._submit}>
            <Text style={{ marginLeft: pxToDp(20) }}>发布</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(Index);