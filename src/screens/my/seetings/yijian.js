import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';
import Mybtn from '../../../component/common/mybtn';

class Index extends PureComponent {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Top icon1="arrow-back" title="意见反馈" />
        <TextInput
          style={{
            marginLeft: pxToDp(16),
            marginRight: pxToDp(16),
            marginTop: pxToDp(8),
            height: pxToDp(200),
            borderRadius: pxToDp(8),
            backgroundColor: '#fff',
            textAlign: 'center',
            elevation: 2, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
            shadowColor: 'black', //  阴影颜色
            shadowOffset: { width: 0, height: 0 }, // 阴影偏移
            shadowOpacity: 1, // 阴影不透明度
            shadowRadius: 10 //  圆角
          }}
          placeholder="留下你宝贵的意见或建议..."
        />
        <Mybtn
          title="提交意见"
          style={{ marginTop: pxToDp(400) }}
          buttonStyle={{
            width: pxToDp(320),
            height: pxToDp(40),
            alignSelf: 'center',
            borderRadius: pxToDp(32),
          }}
          titleStyle={{
            color: 'white',
            fontSize: pxToDp(16)
          }}
        />
      </View>
    );
  }
}
export default Index;