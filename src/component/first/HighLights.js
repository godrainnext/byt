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
      <View style={{ marginTop: pxToDp(40),marginLeft:pxToDp(16),marginRight:pxToDp(16), }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: pxToDp(20)
          }}
        >
          <Text
            style={{
              fontSize: pxToDp(18),
              color: '#000000',
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
            height: pxToDp(220)
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
                  elevation: 4,
                  shadowColor: 'black',  //  阴影颜色
                  shadowOffset: { width: 0, height: 0 },  // 阴影偏移
                  shadowOpacity: 1,  // 阴影不透明度
                  shadowRadius: 10,  //  圆角
                }}
              >
                <View style={{ height: pxToDp(130), flexDirection: "row",}}>
                  <View style={{ width: pxToDp(90), alignItems: 'center'}}>
                    <Text style={{ fontWeight: 'bold' }}>
                      {item.createAt.split('-')[0] +
                        '-' +
                        item.createAt.split('-')[1]}
                    </Text>
                    <Text style={{ fontSize: pxToDp(24), fontWeight: 'bold'}}>
                      {item.createAt.split('-')[2].split('T')[0]}
                      <Text/>
                      
                    </Text>
                    <View style={{ flexDirection: 'row', margin:6,justifyContent:'space-between',width:pxToDp(40),}}>
                        <Text style={{ fontSize: pxToDp(16), width: 16, }}>
                          辛丑年
                        </Text>
                        <Text style={{ fontSize: pxToDp(16), width: 16 }}>
                          十月廿四
                        </Text>
                      </View>
                  </View>
                   
                  <Image
                    style={{
                      height: pxToDp(130),
                      width: pxToDp(250),
                      borderRadius: pxToDp(8),


                    }}
                    source={{ uri: changeImgSize(item.avatar) }}
                  />
                </View>
                <View style={{ height: pxToDp(90), width: '100%', flexDirection: "row" }}>
                  <View style={{ width: pxToDp(180), height: '100%', justifyContent: "center" }}>

                    <Text style={{ fontSize: pxToDp(16), marginBottom: pxToDp(8), color: '#333333', marginLeft: pxToDp(16) }}>
                      {item.title}
                    </Text>

                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      marginBottom:pxToDp(10)
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
                        marginRight: pxToDp(16),
                      }}
                      titleStyle={{

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
