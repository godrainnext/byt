import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Button,
  Image,
  TouchableNativeFeedback
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
      <View style={{ backgroundColor: '#ecf6fc',flex:1}}>
        <Top icon1="arrow-back" title="俯瞰百年" />
        <View style={{padding:pxToDp(16),flex:1,paddingTop:0}}>
        <FlatList
        showsVerticalScrollIndicator = {false}
          data={this.state.HYlist}
          renderItem={({ item }) => (
            // 视频大图  开始
            <View
              key={item.id}
              style={{
                flex:1,
                elevation: 10,
                marginTop:pxToDp(16),
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 10,
              }}
            >
              <View>
                <TouchableNativeFeedback
                useForeground={true}
                  onPress={() => this.context.navigate('Pagefive', item.id)}
                >
                  <View>
                  <ImageBackground
                    style={{height: pxToDp(180)}}
                    imageStyle={{ borderRadius: pxToDp(8) }}
                    source={{ uri: item.picurl }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex:1,
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: '#fff',
                        opacity: 0.8,
                        height: pxToDp(48),
                        borderRadius: pxToDp(8),
                        alignItems:'center',
                        flexDirection:'row',
                        padding:pxToDp(8)
                      }}
                    >
                          <Text
                            numberOfLines={1}
                            style={{
                              fontSize: pxToDp(16),
                            }}
                          >
                            {item.title}
                          </Text>
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
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        </View>
      </View>
    );
  }
}
export default history;
