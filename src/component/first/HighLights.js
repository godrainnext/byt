import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { getVideList } from '../../service/home';
import { pxToDp } from '@utils/styleKits';
import changeImgSize from '@utils/changeImgSize';

export default class HighLights extends Component {
  static contextType = NavigationContext;
  state = { arr: [] };
  componentDidMount() {
    getVideList(0).then((res) => {
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
        <ScrollView horizontal={true}>
          {this.state.arr.map((item, index) => (
            <View
              style={{ flexDirection: 'row', marginTop: pxToDp(5) }}
              key={item.id}
            >
              <TouchableOpacity
                onPress={() => this.context.navigate('Video', item.id)}
              >
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(200),
                    borderRadius: pxToDp(10),
                    marginLeft: pxToDp(10)
                  }}
                  source={{ uri: changeImgSize(item.avatar, 'small') }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
