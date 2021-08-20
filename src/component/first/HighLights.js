import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { getVideList } from '../../service/home';
import { pxToDp } from '@utils/styleKits';
import changeImgSize from '@utils/changeImgSize';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class HighLights extends Component {
  static contextType = NavigationContext;
  state = { arr: [] };
  componentDidMount() {
    getVideList(0).then((res) => {
      console.log(res);
      this.setState({ arr: res });
    });
  }
  render() {
    return (
      <View style={{ margin: pxToDp(10), marginTop: pxToDp(0) }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              fontSize: pxToDp(18),
              color: '#468CD3',
              fontWeight: 'bold'
            }}
          >
            精选唱段
          </Text>
          <TouchableOpacity onPress={() => this.context.navigate('Opera')}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                查看更多
              </Text>
              <Ionicons name="chevron-forward" size={20} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            height: pxToDp(320),
            marginLeft: pxToDp(-24),
            top: pxToDp(-16)
          }}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.arr.map((item, index) => (
            <View
              style={{
                flexDirection: 'row',
                marginTop: pxToDp(20),
                height: '100%'
              }}
              key={item.id}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 250,
                  marginLeft: 20,
                  borderRadius: 8,
                  elevation: 5,
                  borderWidth: 0,
                  marginBottom: pxToDp(30),
                  marginTop: pxToDp(20),
                  overflow: 'hidden'
                }}
              >
                {/* <TouchableOpacity
              
                onPress={() => this.context.navigate('Video', item.id)}
              > */}
                <Image
                  style={{
                    height: 160,
                    width: 160,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    borderTopRightRadius: 8
                  }}
                  source={{ uri: changeImgSize(item.avatar, 'small') }}
                />
                {/* </TouchableOpacity>   */}
                <View
                  style={{
                    height: '70%',
                    width: '40%',
                    alignItems: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#ccc'
                  }}
                >
                  <Text style={{ marginTop: pxToDp(30), fontWeight: 'bold' }}>
                    2017.12
                  </Text>
                  <Text style={{ fontSize: 30, fontWeight: 'bold' }}>15</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        width: 16,
                        marginRight: pxToDp(20)
                      }}
                    >
                      丁酉年
                    </Text>
                    <Text style={{ fontSize: 16, width: 16 }}>十月廿八</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: '20%',
                    width: '64%',
                    position: 'absolute',
                    top: pxToDp(166),
                    right: 0,
                    borderLeftWidth: 0.5,
                    borderColor: '#ccc'
                  }}
                >
                  <Text style={{ alignSelf: 'center', fontSize: 18 }}>
                    {item.title}
                  </Text>
                </View>
                <View style={{ height: '30%', width: '100%' }}>
                  <Text
                    style={{
                      fontSize: 14,
                      paddingLeft: pxToDp(20)
                    }}
                    numberOfLines={2}
                  >
                    {item.ezcontent}
                  </Text>
                  <Button
                    title="观看视频"
                    onPress={() => this.context.navigate('Video', item.id)}
                    ViewComponent={LinearGradient}
                    buttonStyle={{
                      width: 60,
                      height: 30,
                      alignSelf: 'flex-end',
                      borderRadius: 32,
                      marginRight: 10
                    }}
                    titleStyle={{
                      color: '#fcfcfc',
                      fontWeight: 'bold',
                      fontSize: 10
                    }}
                    linearGradientProps={{
                      colors: ['#fa9222', '#ffd501'],
                      start: { x: 0, y: 0.5 },
                      end: { x: 1, y: 0.5 }
                    }}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
