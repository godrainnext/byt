import React, { PureComponent } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';
import Mybtn from '../../../component/common/mybtn';
import RichTextView from '../../talk/home/components/RichTextView';
import { NavigationContext } from '@react-navigation/native';
class Index extends PureComponent {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    const { text } = this.state;
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Top icon1="arrow-back" title="意见反馈" />
        <RichTextView
          style={{
            backgroundColor: 'white',
            marginTop: pxToDp(16),
            borderRadius: pxToDp(8),
            elevation: 2,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
            shadowColor: 'black',  //  阴影颜色
            shadowRadius: pxToDp(8)
          }}
          placeholder="写下你珍贵的意见..."
          onChangeText={(t) => this.setState({ text: t })}
          minHeight={255} // 最小高度,默认为100
          maxLength={255} // 最大长度,默认为100
          showCount={true} // 展示剩余文字, 默认为true
        />
        <Mybtn
          title="提交意见"
          onPress={() => {
            this.context.goBack();
            ToastAndroid.show('提交成功', ToastAndroid.SHORT)
          }}
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