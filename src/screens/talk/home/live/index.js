import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { getStreamList } from '../../../../service/shop';

class Index extends PureComponent {
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.arr ? (
            this.state.arr.map((item) => (
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
                    <LottieView
                      style={{ width: pxToDp(100), alignSelf: 'center' }}
                      source={require('../../../../../lottie/??????live??????.json')}
                      autoPlay
                      loop
                    />
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
                        <Icon name="eyeo" size={24} color={'white'} />
                        <Text
                          style={{
                            color: 'white',
                            marginRight: pxToDp(10),
                            fontSize: pxToDp(16),
                            marginLeft: pxToDp(5)
                          }}
                        >
                          66
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <View>????????????????????????????????????</View>
          )}
          <ImageBackground
            style={styles.image}
            imageStyle={{ borderRadius: pxToDp(8) }}
            source={{
              uri: 'https://tse1-mm.cn.bing.net/th/id/R-C.1f124b07017ea1ae5d5fea45391b145a?rik=pAKVDV0sF%2fu2Yw&riu=http%3a%2f%2fpic4.nipic.com%2f20091113%2f1103621_145232061016_2.jpg&ehk=czCnkpJNiHZNwMVAiTvVs7rzXGbyHQvlYBNIdl26QLs%3d&risl=&pid=ImgRaw&r=0'
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: pxToDp(20),
                margin: pxToDp(10),
                left: pxToDp(220)
              }}
            >
              ????????????
            </Text>
            <LottieView
              style={{ width: pxToDp(100), alignSelf: 'center' }}
              source={require('../../../../../lottie/??????live??????.json')}
              autoPlay
              loop
            />
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
                  fontSize: pxToDp(16),
                  margin: pxToDp(10)
                }}
              >
                ????????????
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: pxToDp(150)
                }}
              >
                <Icon name="eyeo" size={24} color={'white'} />
                <Text
                  style={{
                    color: 'white',
                    marginRight: pxToDp(10),
                    fontSize: pxToDp(16),
                    marginLeft: pxToDp(5)
                  }}
                >
                  66
                </Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.image}
            imageStyle={{ borderRadius: pxToDp(8) }}
            source={{
              uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.xinmin.cn%2Fxmwb%2F2016%2F11%2FNEM1_20161108_C0321024741_A323350.jpg&refer=http%3A%2F%2Fimage.xinmin.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633265945&t=13f7f4f3be47ec7224fbc49716325d48'
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: pxToDp(20),
                margin: pxToDp(10),
                left: pxToDp(220)
              }}
            >
              ????????????
            </Text>
            <LottieView
              style={{ width: pxToDp(100), alignSelf: 'center' }}
              source={require('../../../../../lottie/??????live??????.json')}
              autoPlay
              loop
            />
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
                  fontSize: pxToDp(16),
                  margin: pxToDp(10)
                }}
              >
                ??????????????????
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: pxToDp(150)
                }}
              >
                <Icon name="eyeo" size={24} color={'white'} />
                <Text
                  style={{
                    color: 'white',
                    marginRight: pxToDp(10),
                    fontSize: pxToDp(16),
                    marginLeft: pxToDp(5)
                  }}
                >
                  22
                </Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={[styles.image, { marginBottom: pxToDp(16) }]}
            imageStyle={{ borderRadius: pxToDp(8) }}
            source={{
              uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-2396530489-3402ABF06273663A185D56AF38A11A26%2F0%3Ffmt%3Djpg%26size%3D92%26h%3D642%26w%3D900%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632926403&t=32ea82f43d2c0bce5a73869b01dc3c62'
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: pxToDp(20),
                margin: pxToDp(10),
                left: pxToDp(220)
              }}
            >
              ????????????
            </Text>
            <LottieView
              style={{ width: pxToDp(100), alignSelf: 'center' }}
              source={require('../../../../../lottie/??????live??????.json')}
              autoPlay
              loop
            />
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
                  fontSize: pxToDp(16),
                  margin: pxToDp(10)
                }}
              >
                ??????????????????
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: pxToDp(150)
                }}
              >
                <Icon name="eyeo" size={24} color={'white'} />
                <Text
                  style={{
                    color: 'white',
                    marginRight: pxToDp(10),
                    fontSize: pxToDp(16),
                    marginLeft: pxToDp(5)
                  }}
                >
                  78
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={{ height: pxToDp(25) }}></View>
        </ScrollView>
      </View >
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
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16),
    marginTop: pxToDp(8)
  }
});
export default Index;
