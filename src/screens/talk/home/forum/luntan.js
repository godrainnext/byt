import React, { PureComponent } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import { Audio } from 'expo-av';
import ActressItem from './ActressItem';
import MusicItem from './MusicItem';
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
    await this.state.playingsong.pauseAsync();
    this.setState({ isplay: false });
  };
  static contextType = NavigationContext;

  render() {
    const music = this.props.dongtai.filter((item) => item.label);
    const actress = this.props.dongtai.filter((item) => !item.label);
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingLeft: pxToDp(16),
              paddingRight: pxToDp(16),
              paddingTop: pxToDp(8),
              marginTop: pxToDp(16)
            }}
          >
            {actress.map((item) => (
              <ActressItem item={item} />
            ))}
            {music.map((item) => (
              <MusicItem item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Index;
