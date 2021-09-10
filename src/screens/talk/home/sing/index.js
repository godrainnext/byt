import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  ToastAndroid
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '@utils/styleKits';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';
import Mybtn from '../../../../component/common/mybtn';
import { getStreamList } from '@service/shop';
import { PureComponent } from 'react';
import { findRoomByCannalName } from '../../../../service/play';
export default class hello extends PureComponent {
  static contextType = NavigationContext;
  state = {
    color: '#468cd3',
    text: '',
    appId: '29792ec3eded410facd609fb7ad76fef',
    peerIds: [],
    token:
      '00629792ec3eded410facd609fb7ad76fefIADCc8H70U749XGwDaAgInl0TjHWz2j6gN0U1okFKIK5sUgDg6MAAAAAEACcjToMHqkYYQEAAQAeqRhh',
    channelName: 'ABC',
    arr: []
  };
  componentDidMount() {
    getStreamList(1).then((res) => {
      console.log(res);
      this.setState({ arr: res });
    });
  }
  chafang = (item) => {
    this.context.navigate('SeeFang', {
      roomName: item.name,
      channelName: item.cannalName,
      token: item.token,
      user: item.user
    });
  };
  chafangByCannalName = () => {
    this.Scrollable3.close();
    findRoomByCannalName(this.state.text).then((res) => {
      if (res.length) {
        this.context.navigate('SeeFang', {
          roomName: res[0].name,
          channelName: res[0].cannalName,
          token: res[0].token,
          user: res[0].user
        });
      } else {
        ToastAndroid.show('请输入正确的房间号', ToastAndroid.SHORT);
      }
    });
  };
  render() {
    const { text } = this.state;

    return (
      <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
        <View style={styles.touchbox}>
          <TouchableNativeFeedback
            useForeground={true}
            onPress={() => this.context.navigate('Study')}
          >
            <View style={styles.touch}>
              <View>
                <Text style={styles.text1}>单人练唱</Text>
                <Text style={styles.text2}>个人练习</Text>
              </View>
              <Image
                style={styles.touchimage}
                source={require('../../../../res/麦.png')}
              />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            useForeground={true}
            onPress={() => this.context.navigate('KaiFang')}
          >
            <View style={styles.touch}>
              <View>
                <Text style={styles.text1}>创建歌房</Text>
                <Text style={styles.text2}>点击创建</Text>
              </View>
              <Image
                style={styles.touchimage}
                source={require('../../../../res/房子.png')}
              />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            useForeground={true}
            onPress={() => this.Scrollable3.open()}
          >
            <View style={styles.touch}>
              <View>
                <Text style={styles.text1}>加入歌房</Text>
                <Text style={styles.text2}>双人合唱</Text>
              </View>
              <Image
                style={styles.touchimage}
                source={require('../../../../res/加入.png')}
              />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            useForeground={true}
            onPress={() => {
              const item =
                this.state.arr[
                Math.floor(Math.random() * this.state.arr.length)
                ];
              this.context.navigate('SeeFang', {
                roomName: item.name,
                channelName: item.cannalName,
                token: item.token,
                user: item.user
              });
            }}
          >
            <View style={styles.touch}>
              <View>
                <Text style={styles.text1}>快速匹配</Text>
                <Text style={styles.text2}>随机寻找伙伴</Text>
              </View>
              <Image
                style={styles.touchimage}
                source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Fface%2F2f496bd34d6188a0c4d3dba908b93bf7acde43c1.jpg&refer=http%3A%2F%2Fi2.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633844754&t=f10d51920b8b6278743f53f36aaaaa65'}}
              />
            </View>
          </TouchableNativeFeedback>
          {/**查找房间 */}
          <RBSheet
            ref={(ref) => {
              this.Scrollable3 = ref;
            }}
            height={160}
            width={375}
            closeOnDragDown
            customStyles={{
              container: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.gridContainer}>
                <TouchableOpacity>
                  <View>
                    <TextInput
                      value={text}
                      onChangeText={(t) => this.setState({ text: t })}
                      style={styles.textinputbox}
                      placeholder="输入房间号"
                      textAlign="center"
                    ></TextInput>
                  </View>
                </TouchableOpacity>
                <Mybtn
                  title="进入房间"
                  onPress={() => this.chafangByCannalName()}
                  ViewComponent={LinearGradient}
                  buttonStyle={{
                    width: pxToDp(180),
                    height: pxToDp(40),
                    alignSelf: 'center',
                    borderRadius: pxToDp(32),
                    marginTop: pxToDp(16)
                  }}
                  titleStyle={{
                    color: '#fcfcfc',
                    fontWeight: 'bold',
                    fontSize: pxToDp(16)
                  }}
                  linearGradientProps={{
                    colors: ['#fa9222', '#ffd501'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 }
                  }}
                />
              </View>
            </ScrollView>
          </RBSheet>
        </View>
        {this.state.arr.map((item) => (
          <LinearGradient
            key={item.id}
            style={styles.linear}
            colors={['#D5E8E6', 'white']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={{ marginTop: pxToDp(10), marginLeft: pxToDp(16) }}>
              <Text style={styles.text1}>{item.name}</Text>
              <Text style={styles.text2}>{item.cannalName}</Text>
            </View>
            <TouchableOpacity onPress={() => this.chafang(item)}>
              <View
                style={{
                  width: '100%',
                  borderRadius: 8,
                  opacity: 0.8,
                  marginTop: pxToDp(10),
                  marginLeft: pxToDp(16),
                  flexDirection: 'row'
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: item.avatar
                  }}
                />
                <View
                  style={{ marginLeft: pxToDp(16), justifyContent: 'space-around' }}
                >
                  <Text style={styles.text1}>{item.user.nickName}的歌房</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="group" size={24} color="#666666" />
                    <Text style={{ fontSize: pxToDp(14), color: '#62bfad', marginLeft: pxToDp(8) }}>1人在线</Text>
                  </View>
                  <Text style={styles.text2}>{item.user.nickName}正在房间内</Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        ))}
        <LinearGradient
          style={styles.linear}
          colors={['#D5E8E6', 'white']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={{ marginTop: pxToDp(10), marginLeft: pxToDp(16) }}>
            <Text style={styles.text1}>来者都是客~</Text>
            <Text style={styles.text2}>进来一起交流流派唱法吧！</Text>
          </View>
          <View
            style={{
              width: '100%',
              borderRadius: 8,
              opacity: 0.8,
              marginTop: pxToDp(10),
              marginLeft: pxToDp(16),
              flexDirection: 'row'
            }}
          >
            <Image
              style={styles.image}
              source={{
                uri: 'https://img1.baidu.com/it/u=3272800681,2524244440&fm=26&fmt=auto&gp=0.jpg'
              }}
            />
            <View style={{ marginLeft: pxToDp(16), justifyContent: 'space-around' }}>
              <Text style={styles.text1}>石斑的歌房</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="group" size={24} color="#666666" />
                <Text style={{ fontSize: pxToDp(14), color: '#62bfad', marginLeft: pxToDp(8) }}>1人在线</Text>
              </View>
              <Text style={styles.text2}>石斑正在房间内</Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'white',
    padding: pxToDp(16)
  },
  touchbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  touch: {
    width: pxToDp(165),
    height: pxToDp(70),
    backgroundColor: '#D5E8E6',
    borderRadius: pxToDp(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: pxToDp(8)
  },
  text1: {
    fontSize: pxToDp(18),
    color: '#000000',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: pxToDp(14),
    color: '#666666'
  },
  linear: {
    height: pxToDp(200),
    marginTop: pxToDp(16),
    borderRadius: pxToDp(8)
  },
  image: {
    width: pxToDp(100),
    height: pxToDp(100),
    borderRadius: pxToDp(8)
  },
  text: {
    fontSize: pxToDp(13),
    color: 'white'
  },
  textbox: {
    height: pxToDp(40),
    width: pxToDp(180),
    borderRadius: pxToDp(32),
    backgroundColor: '#468cd3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: pxToDp(8)
  },
  textinputbox: {
    height: pxToDp(40),
    width: pxToDp(180),
    borderRadius: pxToDp(32),
    backgroundColor: 'white',
    marginTop: pxToDp(8),
    borderColor: 'grey',
    borderWidth: pxToDp(1)
  },
  gridContainer: {
    height: '100%',
    width: pxToDp(375),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  touchimage: {
    height: pxToDp(50),
    width: pxToDp(50),
    borderRadius: pxToDp(25)
  }
});
