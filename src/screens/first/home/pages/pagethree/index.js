import React, { PureComponent } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
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
        <ScrollView
          style={{ flex: 1, padding: pxToDp(16) }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: pxToDp(-8), marginBottom: pxToDp(32) }}>
            {this.state.roleList.map((item) => (
              <TouchableOpacity
                onPress={() => this.context.navigate('Actress', item)}
                key={item.id}
                style={{
                  height: pxToDp(130),
                  borderRadius: pxToDp(8),
                  flexDirection: 'row',
                  marginTop: pxToDp(8),
                  backgroundColor: 'white',
                }}
              >
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
                    width: pxToDp(235),
                    height: pxToDp(130),
                    marginLeft: pxToDp(10),
                    marginTop: pxToDp(10),
                    paddingRight: pxToDp(8)
                  }}
                >
                  <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: pxToDp(14) }} numberOfLines={4}>
                    {item.content}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Index;
