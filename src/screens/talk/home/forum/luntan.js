import React, { Component, createRef, memo } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
  Dimensions
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import { Audio } from 'expo-av';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { PureComponent } from 'react';
import Mybtn from '../../../../component/common/mybtn';
import ActressItem from './ActressItem';
import MusicItem from './MusicItem';

const WINDOW_WIDTH = Dimensions.get('window').width;

class Index extends PureComponent {
  state = {
    modalVisible: false,
    status: {},
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
  static contextType = NavigationContext;
  render() {
    const music = this.props.dongtai.filter((item) => item.label);
    const actress = this.props.dongtai.filter((item) => !item.label);
    const { modalVisible } = this.state;
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
              <ActressItem item={item} setModalVisible={this.setModalVisible} />
            ))}
            {music.map((item) => (
              <MusicItem item={item} setModalVisible={this.setModalVisible} />
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
