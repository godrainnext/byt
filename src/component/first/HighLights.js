import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { getVideList } from '../../service/home';
import { pxToDp } from '@utils/styleKits';
import changeImgSize from '@utils/changeImgSize';
import LottieView from 'lottie-react-native';
import Mybtn from '../../component/common/mybtn'


export default class HighLights extends PureComponent {
  static contextType = NavigationContext;
  state = { arr: [] };
  componentDidMount() {
    getVideList(0).then((res) => {
      this.setState({ arr: res });
    });
  }
  render() {
    return (
      <View style={{ marginLeft: pxToDp(16), marginRight: pxToDp(16), marginTop: pxToDp(-4) }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: pxToDp(4), height: '75%', backgroundColor: '#62bfad', borderRadius: pxToDp(2) }}>
          </View>
          <View>
            <View style={{ marginLeft: pxToDp(6), marginBottom: pxToDp(-20) }}>
              <Text style={{
                fontSize: pxToDp(18),
                color: '#62bfad',
                fontWeight: 'bold',
                marginLeft: pxToDp(3),
                marginBottom: pxToDp(-15)
              }}>
                精选唱段
              </Text>
              <LottieView
                style={{ width: pxToDp(80) }}
                source={require('../../../lottie/标题底部.json')}
                autoPlay={true}
                loop={true}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: pxToDp(180), marginBottom: pxToDp(10) }}
            onPress={() => this.context.navigate('Opera')}
          >
            <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>
              查看更多
            </Text>
            <Ionicons name="chevron-forward" size={16} color="#666666" />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            height: pxToDp(220),
            marginTop: pxToDp(16)
          }}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.arr?.map((item, index) => (
            <View
              style={{
                flexDirection: 'row',
                height: pxToDp(220),
                backgroundColor: "Red",
                marginRight: pxToDp(8),
              }}
              key={item.id}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  width: pxToDp(340),
                  marginBottom: pxToDp(8),
                  marginLeft: 1.5,
                  marginTop: 2,
                  borderRadius: pxToDp(8),
                  elevation: 2,
                  shadowColor: 'black',  //  阴影颜色
                  shadowOffset: { width: 0, height: 0 },  // 阴影偏移
                  shadowOpacity: 1,  // 阴影不透明度
                  shadowRadius: 10,  //  圆角
                }}
              >
                <View style={{ height: pxToDp(130), flexDirection: "row" }}>
                  <View style={{ width: pxToDp(90), alignItems: 'center', marginTop: pxToDp(8) }}>
                    <Text style={{ fontWeight: 'bold' }}>
                      {item.createAt.split('-')[0] +
                        '-' +
                        item.createAt.split('-')[1]}
                    </Text>
                    <Text style={{ fontSize: pxToDp(24), fontWeight: 'bold' }}>
                      {item.createAt.split('-')[2].split('T')[0]}
                      <Text />
                    </Text>
                    <View style={{ flexDirection: 'row', margin: 6, justifyContent: 'space-between', width: pxToDp(40), }}>
                      <Text style={{ fontSize: pxToDp(16), width: 16, }}>
                        辛丑年
                      </Text>
                      <Text style={{ fontSize: pxToDp(16), width: 16 }}>
                        十月廿四
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    style={{
                      height: pxToDp(140),
                      width: pxToDp(250),
                      borderTopRightRadius: pxToDp(8),
                    }}
                    imageStyle={{
                      height: pxToDp(140),
                      width: pxToDp(250),
                      borderTopRightRadius: pxToDp(8)
                    }}
                    source={{ uri: changeImgSize(item.avatar) }}
                  >
                    {item.id == 8 ? (<View style={{ backgroundColor: '#Fe9e9f', height: pxToDp(25), width: pxToDp(50), alignItems: 'center', justifyContent: 'center', borderRadius: pxToDp(16), alignSelf: 'flex-end', marginTop: pxToDp(8), marginRight: pxToDp(8) }}>
                      <Text style={{ fontSize: pxToDp(12), fontWeight: 'bold', color: 'white' }}>推荐</Text>
                    </View>) : null}
                    {item.id == 10 ? (<View style={{ backgroundColor: '#Fe9e9f', height: pxToDp(25), width: pxToDp(50), alignItems: 'center', justifyContent: 'center', borderRadius: pxToDp(16), alignSelf: 'flex-end', marginTop: pxToDp(8), marginRight: pxToDp(8) }}>
                      <Text style={{ fontSize: pxToDp(12), fontWeight: 'bold', color: 'white' }}>推荐</Text>
                    </View>) : null}
                  </ImageBackground>
                </View>
                <View style={{ height: pxToDp(90), width: '100%', flexDirection: "row" }}>
                  <View style={{ width: pxToDp(180), height: '100%', justifyContent: "center" }}>
                    <Text style={{ fontSize: pxToDp(16), color: '#333333', marginBottom: pxToDp(-9), marginLeft: pxToDp(8) }}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: pxToDp(40),
                      marginLeft: pxToDp(20),
                      marginTop: pxToDp(25)
                    }}
                  >
                    <Mybtn
                      title="收听唱段"
                      onPress={() => this.context.navigate('Video', item.id)}
                      buttonStyle={{
                        width: pxToDp(120),
                        height: pxToDp(40),
                        alignSelf: 'flex-end',
                        borderRadius: pxToDp(32),
                      }}
                      titleStyle={{
                        color: 'white',
                        fontSize: pxToDp(16)
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
