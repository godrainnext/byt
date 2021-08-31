/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { DeviceEventEmitter, Text, TouchableOpacity, View } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '@components/common/top';
import { NavigationContext } from '@react-navigation/native';
import { Input } from 'react-native-elements';
export default class Nickname extends PureComponent {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      nickName: ''
    };
  }
  goback = () => {
    DeviceEventEmitter.emit('nickName', this.state.nickName);
    this.context.navigate('Ziliao', { nickName: this.state.nickName });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#D5E8E6' }}>
        <Top
          icon1="arrow-back"
          title="昵称"
          rightTitle="保存"
          rightCallback={this.goback}
        />
        <View
          style={{
            marginLeft: pxToDp(16),
            marginRight: pxToDp(16)
          }}
        >
          <Input
            style={{ height: pxToDp(50), fontSize: pxToDp(18) }}
            placeholder="请填写您的昵称"
            placeholderTextColor="#999999"
            onChangeText={(nickName) => this.getNickName(nickName)}
            value={this.state.nickName}
          ></Input>
        </View>
      </View>
    );
  }
  getNickName(nickName) {
    this.setState({
      nickName
    });
  }
}
