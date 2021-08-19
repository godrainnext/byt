import React, { PureComponent, createRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions
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
import {Video,Audio} from 'expo-av'
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
      return alert('留言不能为空');
    }

    request
      .post({
        url: `/comment/${this.props.route.params}`,
        data: {
          content: this.state.mycomment
        }
      })
      .then((res) => {
        this.setState({ mycomment: '' });
        getMomentInnerById(this.props.route.params)
          .then((res) => {
            this.setState({ inner: { ...res } });
          })
          .catch((err) => console.log(err));
      });
  };

  componentDidMount() {
    getMomentInnerById(this.props.route.params)
      .then((res) => {
        this.setState({ inner: { ...res } });
        console.log(res);
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
            <Image
              style={{
                width: pxToDp(155),
                height: pxToDp(150),
                borderRadius: pxToDp(15),
                marginLeft: pxToDp(10),
                marginTop: pxToDp(10),
                marginBottom: pxToDp(10)
              }}
              source={{ uri: item }}
            />
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
        source={{ uri: cover}}
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
      content = 123,
      createTime,
      title = 666,
      user,
      label,
      cover
    } = this.state.inner;

    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" title={title} icon2="more-horizontal" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            margin: pxToDp(8),
            marginBottom: pxToDp(48),
            backgroundColor: '#f6fbfe',
            borderTopRightRadius: pxToDp(16),
            borderTopLeftRadius: pxToDp(16)
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              paddingBottom: pxToDp(20),
              borderRadius: pxToDp(16),
              elevation: 8,
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
              <Image
                source={{ uri: user?.avatarUrl }}
                style={{
                  height: pxToDp(60),
                  width: pxToDp(60),
                  borderRadius: pxToDp(60),
                  margin: pxToDp(8)
                }}
              />
              <View
                style={{
                  marginTop: pxToDp(16)
                }}
              >
                {/* 昵称 */}
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                  {user?.nickName}
                </Text>
                {/* 发布时间 */}
                <Text style={{ color: 'gray' }}>{createTime}</Text>
              </View>
              {/* 关注 */}
              <View style={{ marginTop: pxToDp(16), marginRight: pxToDp(8) }}>
                <FollowButton userId={this.props.route.params.userId} />
              </View>
            </View>
            <View style={{ margin: pxToDp(8) }}>
              <Text style={{ fontSize: pxToDp(18) }}>{content}</Text>
            </View>
            {label ? this.showMusic() : this.showArticle()}
          </View>
          {/* 评论区 */}
          <View
            style={{
              marginTop: pxToDp(16)
            }}
          >
            <Text style={{ fontSize: pxToDp(18), margin: pxToDp(8) }}>
              评论
            </Text>
            <Comments
              inputRef={this.inputRef}
              comments={comments ? comments : []}
            />
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
              backgroundColor: '#ddd',
              width: '75%',
              marginLeft: pxToDp(20),
              borderRadius: pxToDp(20),
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

export default Index;
