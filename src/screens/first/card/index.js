import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Top from '../../../component/common/top';
import { getListByStatus } from '@service/home';
import changeImgSize from '@utils/changeImgSize';
class history extends Component {
  static contextType = NavigationContext;
  state = { HYlist: [] };
  componentDidMount() {
    getListByStatus(1, 0, 20).then((res) => {
      console.log(res);
      this.setState({ HYlist: res });
    });
  }
  render() {
    ;
    return (
      <View style={{ backgroundColor: '#ecf6fc',padding:pxToDp(16) }}>
        <Top icon1="arrow-back" />
        <FlatList
          data={this.state.HYlist}
          renderItem={({ item }) => (
            // 视频大图  开始
            <View
              key={item.id}
              style={{
                height: pxToDp(220),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 10,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 10
              }}
            >
              <View style={{ width: '96%', height: '100%' }}>
                <TouchableOpacity
                  onPress={() => this.context.navigate('Pagefive', item.id)}
                >
                  <ImageBackground
                    style={{ width: '100%', height: pxToDp(220) }}
                    imageStyle={{ borderRadius: pxToDp(8) }}
                    source={{ uri: item.picurl }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '64%'
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: 'red',
                        opacity: 0.8,
                        width: '100%',
                        height: '36%',
                        borderRadius: pxToDp(8),
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                        <View
                          style={{
                            flexDirection: 'row',
                          }}
                        >
                          <Text
                            numberOfLines={1}
                            style={{
                              fontSize: pxToDp(16),
                              width: '96%',
                              marginBottom: pxToDp(8),
                            }}
                          >
                            {item.title}
                          </Text>
                        </View>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                          <Text
                            numberOfLines={2}
                            style={{ marginLeft: pxToDp(8) }}
                          >
                            {item.ezcontent}
                          </Text>
                        </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
export default history;
