/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { Text, View,DeviceEventEmitter } from 'react-native';
import Otherbanner from './Otherbanner';
import { Input } from 'react-native-elements';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '@components/common/top';
export default class Signature extends PureComponent {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      ownSay: ''
    };
  }
  goback = () => {
    DeviceEventEmitter.emit('ownSay', this.state.ownSay);
    this.context.navigate('Ziliao', { ownSay: this.state.ownSay });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#e2f4fe' }}>
        <Top
          icon1="arrow-back"
          title="个性签名"
          rightTitle="保存"
          rightCallback={this.goback}
        />
        <View>
          <Input
            style={{
              height: pxToDp(150),
              width: pxToDp(412),
              textAlign: 'left',
              textAlignVertical: 'top',
              backgroundColor: 'white',
              borderRadius: pxToDp(16),
              marginTop: pxToDp(8),
              elevation: 10,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
            multiline={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onChangeText={(ownSay) => this.getNickName(ownSay)}
            value={this.state.ownSay}
          />
        </View>
      </View>
    );
  }
  getNickName(ownSay) {
    this.setState({
      ownSay
    });
  }
}
