import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import List from '../../../component/common/list';
import Top from '../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = NavigationContext;
  cancelToken = async () => {
    await AsyncStorage.removeItem('token');
    this.context.navigate('Login');
  };
  render() {
    return (
      <View style={{ backgroundColor: '#e2f4fe', flex: 1 }}>
        <Top icon1="arrow-back" title="设置" />
        <TouchableOpacity onPress={() => this.context.navigate('Tuisong')}>
          <List title="消息与推送通知" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate('Yinsi')}>
          <List title="隐私设置" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate('Yijian')}>
          <List title="意见反馈" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate('Women')}>
          <List title="关于我们" />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.cancelToken}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderColor: 'black'
            }}
          >
            <Text style={{ color: '#468cd3' }}>退出登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Index;
