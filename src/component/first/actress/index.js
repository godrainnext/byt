import React, { PureComponent } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { getRoleList } from '../../../service/home/actress';
import { NavigationContext } from '@react-navigation/native';
import changeImgSize from '@utils/changeImgSize';
export default class index extends PureComponent {
  state = { roleList: [] };
  componentDidMount() {
    getRoleList().then((roleList) => {
      this.setState({ roleList });
    });
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View
        style={{
          borderRadius: pxToDp(8),
          height: pxToDp(310),
          backgroundColor: 'rgba(255,255,255,0.5)',
          marginRight: pxToDp(10),
          marginLeft: pxToDp(10)
        }}
      >
        <ImageBackground
          style={{
            width: '100%',
            height: pxToDp(240)
          }}
          imageStyle={{
            borderTopLeftRadius: pxToDp(10),
            borderTopRightRadius: pxToDp(10)
          }}
          source={{
            uri: 'https://img0.baidu.com/it/u=2584689132,3841583287&fm=26&fmt=auto&gp=0.jpg'
          }}
        >
          <View style={{ margin: pxToDp(10) }}>
            <View style={{ marginTop: pxToDp(75) }}></View>
            <ScrollView showsHorizontalScrollIndicator = {false} horizontal={true} style={{ marginTop: pxToDp(45) }}>
              {this.state.roleList.map((item) => (
                <TouchableOpacity
                  onPress={() => this.context.navigate('Actress', item)}
                  key={item.id}
                  style={{
                    width: pxToDp(100),
                    height: pxToDp(160),
                    borderRadius: pxToDp(8),
                    marginRight: pxToDp(20)
                  }}
                >
                  <Image
                    style={{
                      width: pxToDp(100),
                      height: pxToDp(140),
                      borderTopLeftRadius: pxToDp(8),
                      borderTopRightRadius: pxToDp(8)
                    }}
                    source={{
                      uri: changeImgSize(item.avatar)
                    }}
                  />
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      backgroundColor: 'white'
                    }}
                  >
                    <Text style={{ fontSize: pxToDp(15) }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
