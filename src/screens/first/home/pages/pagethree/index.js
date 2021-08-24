import React, { PureComponent } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TouchableNativeFeedback } from 'react-native';
import { pxToDp } from '../../../../../utils/styleKits';
import ActressView from '../../../../../component/common/actressview';
import Top from '../../../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';
import changeImgSize from '@utils/changeImgSize';
import { getRoleList } from '../../../../../service/home/actress';
class Index extends PureComponent {
  state = { roleList: [] };
  componentDidMount() {
    getRoleList().then((roleList) => {
      this.setState({ roleList });
    });
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="名角风采" />
        <ScrollView style={{ marginRight: pxToDp(8), marginLeft: pxToDp(8) }}>
          {this.state.roleList.map((item) => (
            <TouchableNativeFeedback
            useForeground={true}
              onPress={() => this.context.navigate('Actress', item)}
              key={item.id}
            >
              <View
              style={{
                height: pxToDp(130),
                borderRadius: pxToDp(8),
                flexDirection: 'row',
                marginTop: pxToDp(10),
                backgroundColor: 'white'
              }}>
                <Image
                  style={{
                    width: pxToDp(90),
                    height: pxToDp(110),
                    borderRadius: pxToDp(8),
                    marginLeft: pxToDp(10),
                    marginTop: pxToDp(10)
                  }}
                  source={{
                    uri: changeImgSize(item.avatar)
                  }}
                />
                <View
                  style={{
                    width: pxToDp(240),
                    height: pxToDp(130),
                    marginLeft: pxToDp(10),
                    marginTop: pxToDp(12)
                  }}
                >
                  <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold', color: '#333333' }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: pxToDp(14), lineHeight: pxToDp(24), marginTop: pxToDp(14), color: '#666666' }} numberOfLines={3}>{item.content}</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default Index;
