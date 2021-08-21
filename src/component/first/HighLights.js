import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { getVideList } from '../../service/home';
import { pxToDp } from '@utils/styleKits';
import changeImgSize from '@utils/changeImgSize';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { PureComponent } from 'react';

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
      <View style={{ margin: pxToDp(8) }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: pxToDp(8)
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
            height: pxToDp(240)
          }}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.arr.map((item, index) => (
            <View
              style={{
                flexDirection: 'row',
                height: '100%',
                marginLeft: pxToDp(-5)
              }}
              key={item.id}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  width: pxToDp(220),
                  borderRadius: pxToDp(8),
                  margin: pxToDp(8),
                  elevation: 5,
                  borderWidth: 0,
                  overflow: 'hidden'
                }}
              >
                {/* <TouchableOpacity
              
                onPress={() => this.context.navigate('Video', item.id)}
              > */}
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(130),
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    borderTopRightRadius: pxToDp(8)
                  }}
                  source={{ uri: changeImgSize(item.avatar) }}
                />
                {/* </TouchableOpacity>   */}
                <View
                  style={{
                    height: '70%',
                    width: '40%',
                    alignItems: 'center',
                    borderBottomWidth: pxToDp(0.5),
                    borderColor: '#ccc'
                  }}
                >
                  <Text style={{ marginTop: pxToDp(10), fontWeight: 'bold' }}>
                    {item.createAt.split('-')[0] +
                      '-' +
                      item.createAt.split('-')[1]}
                  </Text>
                  <Text style={{ fontSize: pxToDp(24), fontWeight: 'bold' }}>
                    {item.createAt.split('-')[2].split('T')[0]}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly'
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    height: '20%',
                    width: '64%',
                    position: 'absolute',
                    top: pxToDp(146),
                    right: 0,
                    borderLeftWidth: pxToDp(0.5),
                    borderColor: '#ccc'
                  }}
                >
                  <Text style={{ alignSelf: 'center', fontSize: pxToDp(16) }}>
                    {item.title}
                  </Text>
                </View>
                <View style={{ height: '30%', width: '100%' }}>
                  <Text
                    style={{
                      fontSize: pxToDp(15),
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
                      width: pxToDp(60),
                      height: pxToDp(30),
                      alignSelf: 'flex-end',
                      borderRadius: pxToDp(16),
                      marginRight: pxToDp(16)
                    }}
                    titleStyle={{
                      color: '#fcfcfc',
                      fontWeight: 'bold',
                      fontSize: pxToDp(10)
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
