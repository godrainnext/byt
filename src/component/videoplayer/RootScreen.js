
import React, { Component } from 'react';
import { View, Text, ScrollView,Image,TouchableOpacity } from 'react-native';
import VideoPlayScreen from "./VideoPlayScreen.js";

class RootScreen extends Component {
    render() {
        return (
          <ScrollView
            stickyHeaderIndices={[0]}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
          >
            <VideoPlayScreen />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 10
                }}
              >
                <View style={{ justifyContent: 'flex-end' }}>
                  <Text style={{ fontSize: 23 }}>视频标题</Text>
                </View>
                <View style={{ justifyContent: 'flex-end' }}>
                  <Text style={{ fontSize: 12 }}>2019/06/25</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                  marginLeft: 20,
                  marginRight: 20
                }}
              >
                <Image
                  style={{ borderRadius: 48, width: 40, height: 40 }}
                  source={{
                    uri: 'https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg'
                  }}
                />
                <View style={{ right: 80 }}>
                  <Text style={{ fontSize: 18 }}>用户名</Text>
                  <Text style={{ fontSize: 12 }}>粉丝数量</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'red',
                      width: 80,
                      height: 30,
                      borderRadius: 16,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    >
                      +
                    </Text>
                    <Text style={{ fontSize: 17, color: 'white' }}>关注</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginTop: 15, marginLeft: 20, marginRight: 15 }}>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
                <Text>
                  视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容
                </Text>
              </View>
              <View></View>
            </View>
          </ScrollView>
        );
    }
}

export default RootScreen;