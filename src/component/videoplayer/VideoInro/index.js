import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';

import { getVideList } from '@service/home';
class index extends PureComponent {
  state = { arr: [] };
  componentDidMount() {
    getVideList(0).then((res) => {
      this.setState({ arr: res });
    });
  }
  static contextType = NavigationContext;

  render() {
    const {
      collectionNum = 0,
      likeNum = 0,
      title = '',
      watchNum = 0
    } = this.props.videoInfo;
    return (
      <ScrollView>
        <View style={{ marginVertical: 2, padding: 10 }}>
          <View style={{ marginVertical: 2, padding: 10 }}>
            <View>
              <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                {title}
              </Text>
              <Text style={{ fontSize: pxToDp(14), color: 'gray' }}>
                {watchNum}播放&emsp;{likeNum}喜欢
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: pxToDp(16),
                marginBottom: pxToDp(16)
              }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon1 name="thumb-up" size={26} color={'gray'} />
                <Text>{likeNum}</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon1 name="grade" size={32} color={'gray'} />
                <Text>{collectionNum}</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon1 name={'file-download'} size={pxToDp(32)} color="grey" />
                <Text>缓存</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon1 name="share" size={30} color={'gray'} />
                <Text>分享</Text>
              </View>
            </View>
            <View>
              <View>
                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                  为你推荐
                </Text>
              </View>
              {this.state.arr.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.context.push('Video', item.id)}
                >
                  <View
                    style={{
                      width: '100%',
                      height: pxToDp(110),
                      borderRadius: pxToDp(8),
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderBottomColor: 'gray'
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: pxToDp(5),
                        marginTop: pxToDp(5)
                      }}
                    >
                      <Image
                        style={{
                          width: '40%',
                          height: pxToDp(90),
                          borderRadius: pxToDp(8)
                        }}
                        source={{ uri: item.avatar }}
                      ></Image>
                      <View
                        style={{
                          width: '60%',
                          height: pxToDp(90),
                          padding: pxToDp(8)
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={{
                            marginTop: pxToDp(5),
                            marginBottom: pxToDp(5)
                          }}
                        >
                          {item.ezcontent}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: pxToDp(16)
              }}
            >
              <Text style={{ fontSize: pxToDp(14),color:'grey'}}>—暂无更多—</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default index;
