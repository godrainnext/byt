import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Image,
  textarea,
  Button,
  FlatList,
  TextInput,
  ScrollView
} from 'react-native';
//导入Video组件
// 导入 Silder组件
import Orientation from 'react-native-orientation-locker';
import MyBtn from './button';
import ExpandableText1 from './ExpandText';
import SvgUri from 'react-native-svg-uri';
import { comment, full, like, trans } from './svgUri';
import ListItem from './listItem';
import { Video, AVPlaybackStatus } from 'expo-av';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const mockBooks = [
  {
    rank: 5,
    username: 'GATHERING PREY',
    subs: '啊啊实打实大苏打实',
    date: '2020-1-1'
  },
  {
    rank: 5,
    username: 'GATHERING PREY',
    subs: '啊啊实打实大苏打实',
    date: '2020-1-1'
  },
  {
    rank: 5,
    username: 'GATHERING PREY',
    subs: '啊啊实打实大苏打实',
    date: '2020-1-1'
  },
  {
    rank: 5,
    username: 'GATHERING PREY',
    subs: '啊啊实打实大苏打实',
    date: '2020-1-1'
  },
  {
    rank: 5,
    username: 'GATHERING PREY',
    subs: '啊啊实打实大苏打实',
    date: '2020-1-1'
  },
  {
    rank: 5,
    username: 'GATHERING PREY',
    subs: '啊啊实打实大苏打实',
    date: '2020-1-1'
  },
  {
    rank: 5,
    username: 'GATHERING PREY',
    subs: '啊啊实打实大苏打实',
    date: '2020-1-1'
  },
  {
    rank: 5,
    username: 'GATHERING PREY',
    subs: '啊啊实打实大苏打实',
    date: '2020-1-1'
  }
];

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPaused: true, //是暂停
      duration: 0, //总时长
      currentTime: 0, //当前播放时间
      sliderValue: 0, //进度条的进度
      isShowInput: false,
      videoWidth: screenWidth,
      videoHeight: 226,
      isFullScreen: false,
      isVisiblePausedSliderFullScreen: false,
      Listzzz: mockBooks,
      TextValue: '',
      isPlaying: false,
      status: null
    };
  }
  setTextValue = (TextValue) => {
    this.setState({ TextValue });
    console.log(this.state.TextValue);
  };
  _renderItem = ({ item }) => {
    return (
      <ListItem
        coverURL={item.book_image}
        username={item.username}
        subs={item.subs}
      />
    );
  };
  sendComment = () => {
    if (this.state.TextValue == '') alert('输入为空');
    this.setState({
      Listzzz: [
        {
          rank: 5,
          username: 'GATHERING PREY',
          subs: this.state.TextValue,
          date: '2020-1-1'
        },
        ...this.state.Listzzz
      ]
    });
    this.setState({ TextValue: '' });
  };
  componentDidMount() {
    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      console.log('是竖屏');
    } else {
      console.log('如果是横屏，就将其旋转过来');
      Orientation.lockToPortrait();
    }
  }
  render() {
    const { status } = this.state;
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.container}>
              <Video
                style={styles.video}
                source={{
                  uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={(status) => this.setState({ status })}
              />
              <View style={styles.buttons}>
                <Button
                  title={status.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status.isPlaying
                      ? video.current.pauseAsync()
                      : video.current.playAsync()
                  }
                />
              </View>
            </View>
          </View>

          <ExpandableText1 />
          <View style={{ backgroundColor: '#ECE4CE', height: 43 }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 7,
                height: 30,
                backgroundColor: '#fff'
              }}
            >
              <View
                style={{ flexDirection: 'row', position: 'absolute', left: 20 }}
              >
                <TouchableOpacity>
                  <SvgUri svgXmlData={like} width="30" height="30" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15 }}>点赞:1111</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  left: 130
                }}
              >
                <TouchableOpacity onPress={this.sendComment}>
                  <SvgUri
                    svgXmlData={comment}
                    width="30"
                    height="30"
                    style={{ bottom: 5 }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 15 }}>评论:1111</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  right: 20
                }}
              >
                <TouchableOpacity>
                  <SvgUri svgXmlData={trans} width="30" height="30" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15 }}>收藏:1111</Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                borderBottomWidth: 0.2,
                borderBottomColor: 'gray',
                flexDirection: 'row'
              }}
            >
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                  marginBottom: 10,
                  fontSize: 20
                }}
              >
                评论
              </Text>
              <TextInput
                style={{
                  width: 200,
                  height: 40,
                  borderWidth: 2,
                  borderRadius: 10,
                  fontSize: 15,
                  top: 4,
                  left: 20
                }}
                onChangeText={this.setTextValue}
                value={this.state.TextValue}
              />
              <MyBtn
                style={{
                  width: 60,
                  height: 25,
                  position: 'absolute',
                  right: 5
                }}
                onPress={this.sendComment}
              >
                发表评论
              </MyBtn>
            </View>
            <View>
              <FlatList
                data={this.state.Listzzz}
                renderItem={this._renderItem}
              />
            </View>
          </View>
        </ScrollView>
        <View>
          <TextInput
            placeholder="111111111111111"
            style={{ width: 1000, height: 1000 }}
          />
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  myVideo: {
    width: 340,
    height: 240
  },
  playBtn: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
    zIndex: 999
  },
  sliderBox: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  expandableText: {
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
