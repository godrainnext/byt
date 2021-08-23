import React, { PureComponent, createRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import {
  sandian,
  playmusic,
  stopmusic
} from '../../../../component/common/iconSvg';
import { BottomSheet, ListItem } from 'react-native-elements';
import { getMomentListByUserId } from '../../../../service/moment';
import { Audio } from 'expo-av';
import { Video } from 'expo-av';

class Index extends PureComponent {
  state = {
    contentArr: [],
    list: [
      { title: '分享' },
      {
        title: '取消',
        containerStyle: { backgroundColor: 'red' },
        titleStyle: { color: 'white' },
        onPress: () => this.setState({ isShow: false })
      }
    ],
    status: {},
    isShow: false
  };
  componentDidMount() {
    getMomentListByUserId(this.props.userId).then((res) => {
      this.setState({ contentArr: res.contentArr });
    });
  }
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
        style={{
          flex: 1,
          height: pxToDp(150),
          marginTop: pxToDp(10),
          backgroundColor: 'rgba(255,255,255,0.5)'
        }}
        source={{ uri: obj.cover }}
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
    return (
      <ScrollView
        style={{ flex: 1, height: pxToDp(120), marginTop: pxToDp(10) }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {obj.images?.map((item, index) => (
          <Image
            key={index}
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
  };

  static contextType = NavigationContext;

  render() {
    return (
      <View
        style={{
          width: '98%',
          alignSelf: 'center',
          marginLeft: pxToDp(10),
          marginRight: pxToDp(10),
          marginTop: pxToDp(8),
          marginBottom: pxToDp(20),
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderRadius: pxToDp(10),
          elevation: 3
        }}
      >
        {this.state.contentArr ? (
          this.state.contentArr.map((item) => (
            <View key={item.momentId}>
              <BottomSheet
                isVisible={this.state.isShow}
                containerStyle={{
                  backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'
                }}
              >
                {this.state.list.map((l, i) => (
                  <ListItem
                    key={i}
                    containerStyle={l.containerStyle}
                    onPress={l.onPress}
                  >
                    <ListItem.Content>
                      <ListItem.Title style={l.titleStyle}>
                        {l.title}
                      </ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                ))}
              </BottomSheet>
              <TouchableOpacity
                style={{ position: 'absolute', top: 10, right: 20 }}
                onPress={() => this.setState({ isShow: true })}
              >
                <SvgUri svgXmlData={sandian} width="20" height="20" />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginTop: pxToDp(10),
                  marginLeft: pxToDp(10),
                  borderRadius: pxToDp(8)
                }}
              >
                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold',color:'#333333' }}>
                  {item.createAt.substr(6, 5)}
                </Text>
                <Text style={{ fontSize:pxToDp(18), paddingLeft: 5,color:'#333333' }}>
                  {item.createAt.substr(0, 4)}
                </Text>
              </View>
              <View
                style={{
                  elevation: 2,
                  borderWidth: 0,
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  borderBottomLeftRadius: pxToDp(10),
                  borderBottomRightRadius: pxToDp(10)
                }}
              >
                <View
                  style={{
                    marginLeft: pxToDp(30),
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                  }}
                ></View>
                <View
                  style={{ flexDirection: 'row', margin: pxToDp(10) }}
                ></View>
                <View
                  style={{
                    width: '90%',
                    marginBottom: pxToDp(30),
                    alignSelf: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontSize: pxToDp(18),
                      marginBottom: pxToDp(10),
                      paddingLeft: pxToDp(8),
                      marginTop: pxToDp(10),
                      color:'#333333'
                    }}
                  >
                    {item.content}
                  </Text>
                  {item.label ? this.showMusic(item) : this.showArticle(item)}
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>暂无发表文章</Text>
          </View>
        )}
      </View>
    );
  }
}

export default Index;
