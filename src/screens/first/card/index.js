import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Button,
  Image,
  TouchableNativeFeedback,
  ScrollView
} from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Top from '../../../component/common/top';
import { getListByStatus } from '@service/home';
import Mybtn from '../../../component/common/mybtn';
class history extends PureComponent {
  static contextType = NavigationContext;
  state = { HYlist: [] };
  componentDidMount() {
    getListByStatus(1, 0, 20).then((res) => {
      this.setState({ HYlist: res });
    });
  }
  sortByFirstCode = () => {
    this.setState({
      HYlist: [...this.state.HYlist.sort((a, b) => {
        return a.title > b.title;
      })]
    });
  };
  sortByFirstCoder = () => {
    this.setState({
      HYlist: [...this.state.HYlist.sort((a, b) => {
        return a.title < b.title;
      })]
    });
  };
  render() {
    return (
      <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>
        <Top icon1="arrow-back" title="俯瞰百年" />
        <View style={{ padding: pxToDp(16), flex: 1, paddingTop: 0 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: pxToDp(10) }}>
            <Mybtn
              title="按发布时间排序"
              onPress={this.sortByFirstCoder}
              buttonStyle={{
                width: pxToDp(120),
                height: pxToDp(40),
                borderRadius: pxToDp(32),
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: pxToDp(10),
                marginRight: pxToDp(50)
              }}
              titleStyle={{
                height: 30,
                color: 'white',
                fontSize: pxToDp(14),
                marginTop: pxToDp(4)
              }}
            />
            <Mybtn
              title="按阅读量排序"
              onPress={this.sortByFirstCode}
              buttonStyle={{
                width: pxToDp(120),
                height: pxToDp(40),
                borderRadius: pxToDp(32),
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: pxToDp(10)
              }}
              titleStyle={{
                height: 30,
                color: 'white',
                fontSize: pxToDp(14),
                marginTop: pxToDp(4)
              }}
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.HYlist}
            renderItem={({ item }) => (
              // 视频大图  开始
              <View
                key={item.id}
                style={{
                  flex: 1,
                  elevation: 2,
                  borderRadius: pxToDp(8),
                  borderWidth: 0,
                  marginBottom: pxToDp(10),
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 1,
                  shadowRadius: 16,
                }}
              >
                <View>
                  <TouchableNativeFeedback
                    useForeground={true}
                    onPress={() => this.context.navigate('Pagefive', item.id)}
                  >
                    <View>
                      <ImageBackground
                        style={{ height: pxToDp(180) }}
                        imageStyle={{ borderRadius: pxToDp(8) }}
                        source={{ uri: item.picurl }}
                      >
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1
                          }}
                        ></View>
                        <View
                          style={{
                            backgroundColor: '#fff',
                            opacity: 0.8,
                            height: pxToDp(48),
                            borderRadius: pxToDp(8),
                            alignItems: 'center',
                            flexDirection: 'row',
                            padding: pxToDp(8)
                          }}
                        >
                          <Text
                            numberOfLines={1}
                            style={{
                              fontSize: pxToDp(16)
                            }}
                          >
                            {item.title}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center'
                            }}
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
