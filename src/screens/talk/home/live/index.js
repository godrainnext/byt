import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import { FAB } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SvgUri from 'react-native-svg-uri';
import { live } from '../../../../component/common/iconSvg';
import { getStreamList } from '../../../../service/shop';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appId: '29792ec3eded410facd609fb7ad76fef',
      peerIds: [],
      token:
        '00629792ec3eded410facd609fb7ad76fefIABpETFY+6FE43RijdulLOEgxp1roHUSSYalrUbZyLMofMu4JTQAAAAAIgAm/Chp5B0eYQQAAQB02hxhAgB02hxhAwB02hxhBAB02hxh',
      channelName: 'JL',
      arr: []
    };
  }

  /**
   * @name init
   * @description Function to initialize the Rtc Engine, attach event listeners and actions
   */

  static contextType = NavigationContext;
  componentDidMount() {
    getStreamList().then((res) => {
      this.setState({ arr: res });
    });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          {this.state.arr.map((item) => (
            <View key={item.id}>
              <TouchableOpacity
                onPress={() =>
                  this.context.navigate('SeeZhiBo', {
                    roomName: item.name,
                    channelName: item.cannalName,
                    token: item.token,
                    peerIds: this.state.peerIds,
                    user: item.user
                  })
                }
              >
                <ImageBackground
                  style={styles.image}
                  imageStyle={{ borderRadius: pxToDp(8) }}
                  source={{ uri: item.avatar }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: pxToDp(20),
                      margin: pxToDp(10),
                      left: pxToDp(220)
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: pxToDp(15),
                        margin: pxToDp(10)
                      }}
                    >
                      {item.user?.nickName}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: pxToDp(150)
                      }}
                    >
                      <Icon name="eyeo" size={24} color={'grey'} />
                      <Text style={{ color: 'white', marginLeft: pxToDp(5) }}>
                        66
                      </Text>
                    </View>
                    <LottieView
                      style={{ width: pxToDp(70) }}
                      source={require('../../../../res/705-linear-line.json')}
                      autoPlay
                      loop
                    />
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  image: {
    borderRadius: pxToDp(8),
    justifyContent: 'space-between',
    height: pxToDp(200),
    width: pxToDp(355),
    borderRadius: pxToDp(8),
    margin: pxToDp(10)
  }
});
export default Index;
