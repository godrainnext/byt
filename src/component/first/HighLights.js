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
      <View style={{marginTop:pxToDp(16) }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom:pxToDp(16)
          }}
        >
          <Text
            style={{
              fontSize: pxToDp(18),
              color: '#333333',
              fontWeight: 'bold'
            }}
          >
            精选唱段
          </Text>
          <TouchableOpacity onPress={() => this.context.navigate('Opera')}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: pxToDp(16), color: '#666666' }}>
                查看更多
              </Text>
              <Ionicons name="chevron-forward" size={24} color="#666666" />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            height: pxToDp(220),
          }}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.arr?.map((item, index) => (
            <View
              style={{
                flexDirection: 'row',
                height: pxToDp(220),
                backgroundColor:"Red",
                marginRight:pxToDp(8),
              }}
              key={item.id}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  width: pxToDp(220),
                  marginBottom:pxToDp(8),
                  borderRadius: pxToDp(8),
                  elevation: 4,
shadowColor: 'black',  //  阴影颜色
 shadowOffset: { width: 0, height: 0 },  // 阴影偏移
 shadowOpacity: 1,  // 阴影不透明度
 shadowRadius: 10,  //  圆角
                }}
              >
              <View style={{height: pxToDp(130),flexDirection:"row"}}>
              <View style={{width:pxToDp(90),alignItems:'center',marginTop:pxToDp(8)}}>
              <Text style={{fontWeight: 'bold'}}>
                    {item.createAt.split('-')[0] +
                      '-' +
                      item.createAt.split('-')[1]}
                  </Text>
                  <Text style={{ fontSize: pxToDp(24), fontWeight: 'bold' }}>
                    {item.createAt.split('-')[2].split('T')[0]}
                  </Text>
              </View>
              <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(130),
                    borderRadius: pxToDp(8)
                  }}
                  source={{ uri: changeImgSize(item.avatar) }}
                />
                </View>
                <View style={{ height: pxToDp(90), width: '100%',flexDirection:"row" }}>
                <View style={{width:pxToDp(90),height:'100%',justifyContent:"center",alignItems:'center'}}>
                  <View style={{height:pxToDp(1),backgroundColor:"#999",width:pxToDp(70),position:"absolute",top:pxToDp(25)}}></View>
                  <View style={{height:pxToDp(40),backgroundColor:"#999",width:pxToDp(1),zIndex:99999,position:"absolute",left:pxToDp(70),top:pxToDp(15)}} ></View>
                  <Text
                    style={{  
                      fontSize: pxToDp(15),
                    }}
                    numberOfLines={2}
                  >
                    {item.ezcontent}
                  </Text>
                  </View>
                <View
                  style={{
                    flex:1,
                    justifyContent:'center',
                  }}
                >
                  <Text style={{ alignSelf: 'center', fontSize: pxToDp(16),marginBottom:pxToDp(8) }}>
                    {item.title}
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
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
