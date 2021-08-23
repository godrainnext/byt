import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import List from '../../../component/common/list';
import Top from '../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { pxToDp } from '../../../utils/styleKits';
import Mybtn from '../../../component/common/mybtn';
import LinearGradient from 'react-native-linear-gradient'
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
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: pxToDp(8),
            margin: pxToDp(8),
            paddingBottom: pxToDp(32),
            elevation: 4, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
            shadowColor: 'black', //  阴影颜色
            shadowOffset: { width: 0, height: 0 }, // 阴影偏移
            shadowOpacity: 1, // 阴影不透明度
            shadowRadius: 10 //  圆角
          }}
        >
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
            <Mybtn
                    title="观看视频"
                    onPress={this.cancelToken}
                    onPress={() => this.context.navigate('Video', item.id)}
                    ViewComponent={LinearGradient}
                    buttonStyle={{
                      width: pxToDp(200),
                      height: pxToDp(50),
                      alignSelf: 'center',
                      borderRadius: pxToDp(32),

                    }}
                    titleStyle={{
                      color: '#fcfcfc',
                      fontWeight: 'bold',
                      fontSize: pxToDp(16)
                    }}
                    linearGradientProps={{
                      colors: ['#fa9222', '#ffd501'],
                      start: { x: 0, y: 0.5 },
                      end: { x: 1, y: 0.5 }
                    }}
                  />
        </View>
      </View>
    );
  }
}
export default Index;
