import React, { PureComponent, createRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Dimensions
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
import Mybtn from '../../../../component/common/mybtn';
import { connect } from 'react-redux';

const WINDOW_WIDTH = Dimensions.get('window').width;
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
    isShow: false,
    modalVisible: false,
  };
  componentDidMount() {
    getMomentListByUserId(this.props.userId).then((res) => {
      this.setState({ contentArr: res.contentArr });
    });
  }
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
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  pauseSound = async () => {
    // this.setState({sound:undefined})
    await this.state.playingsong.pauseAsync();
    this.setState({ isplay: false });
  };
  showMusic = (obj) => {
    const video = createRef();
    return (
      <ImageBackground
        style={{ flex: 1, height: pxToDp(50), marginTop: pxToDp(10) }}
        imageStyle={{ borderRadius: pxToDp(8) }}
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
        style={{ flex: 1, height: pxToDp(120), marginTop: pxToDp(8) }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {obj.images?.map((item, index) => (
          <Lightbox
            springConfig={{ tension: 15, friction: 7 }}
            swipeToDismiss={true}
            renderContent={() => renderCarousel(item)}
          >
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
          </Lightbox>
        ))}
      </ScrollView>
    );
  };

  static contextType = NavigationContext;

  render() {
    console.log(this.props.userInfo);
    const { modalVisible } = this.state;
    return (
      <View
        style={{
          width: '100%',
          marginTop: pxToDp(8),
          marginBottom: pxToDp(20),
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderRadius: pxToDp(8),
          elevation: 2,

        }}
      >
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
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <FontAwesome name="trash-o" size={25} color="#F08080" />
                      <Text>删除</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <FontAwesome name="hand-o-up" size={25} color="#F0E68C" />
                      <Text>置顶</Text>
                    </TouchableOpacity>
                  </View>
                  <Mybtn
                    title="取消"
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      alignSelf: 'center',
                      borderRadius: pxToDp(32),
                      marginTop: pxToDp(32)
                    }}
                    titleStyle={{
                      color: 'white',
                      marginTop: pxToDp(-5),
                      fontSize: pxToDp(14)
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
        {
          this.state.contentArr ? (
            this.state.contentArr.map((item) => (
              <TouchableOpacity key={item.momentId}  onPress={() =>
                this.context.navigate('Indongtai', {
                  mid: item.momentId,
                  uid: this.props.userInfo.id
                })
              }>
                <View >
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
                    style={{ position: 'absolute', top: pxToDp(15), right: pxToDp(24) }}
                    onPress={() => this.setModalVisible(!modalVisible)}
                  >
                    <SvgUri svgXmlData={sandian} width="20" height="20" />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      marginTop: pxToDp(8),
                      marginLeft: pxToDp(16),
                      marginRight: pxToDp(16),

                    }}
                  >
                    <Text style={{ fontSize: pxToDp(24), fontWeight: 'bold', color: '#000000' }}>
                      {item.createAt.substr(6, 5)}
                    </Text>
                    <Text style={{ fontSize: pxToDp(18), color: '#333333', marginBottom: pxToDp(4), marginLeft: pxToDp(4) }}>
                      {item.createAt.substr(0, 4)}
                    </Text>
                  </View>
                  <View
                    style={{
                      elevation: .5,
                      borderWidth: 0,
                      marginRight: pxToDp(16),
                      borderRadius: pxToDp(8),
                      marginLeft: pxToDp(16), marginBottom: pxToDp(12)
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
                          marginTop: pxToDp(10),
                          color: '#333333'
                        }}
                      >
                        {item.content}
                      </Text>
                      {item.label ? this.showMusic(item) : this.showArticle(item)}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text>暂无发表文章</Text>
            </View>
          )
        }
      </View >
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

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
export default  connect((state)=>({
  userInfo:state.getIn(['homeReducer','userInfo'])
})) (Index) ;
