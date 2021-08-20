import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top'

class Index extends PureComponent {
    render() {
        return (
          <View style={{ backgroundColor: '#e2f4fe', flex: 1 }}>
            <Top icon1="arrow-back" title="意见反馈" />
            <TextInput
              style={{
                margin: pxToDp(20),
                height: pxToDp(200),
                borderRadius: pxToDp(24),
                backgroundColor: '#fff',
                textAlign: 'center',
                elevation: 10, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
                shadowColor: 'black', //  阴影颜色
                shadowOffset: { width: 0, height: 0 }, // 阴影偏移
                shadowOpacity: 1, // 阴影不透明度
                shadowRadius: 10 //  圆角
              }}
              placeholder="留下你宝贵的意见或建议..."
            />
          </View>
        );
    }
}
export default Index;