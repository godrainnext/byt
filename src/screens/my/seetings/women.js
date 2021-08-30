import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';

class Index extends PureComponent {
  render() {
    return (
      <View style={{ backgroundColor: '#D5E8E6', flex: 1 }}>
        <Top icon1="arrow-back" title="关于我们" />
        <View
          style={{
            marginTop: pxToDp(8),
            marginRight: pxToDp(16),
            marginLeft: pxToDp(16),
            marginTop: pxToDp(16),
            backgroundColor: 'white',
            borderRadius: pxToDp(8),
            elevation: 2, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
            shadowColor: 'black', //  阴影颜色
            shadowOffset: { width: 0, height: 0 }, // 阴影偏移
            shadowOpacity: 1, // 阴影不透明度
            shadowRadius: 10 //  圆角
          }}
        >
          <Text style={{ margin: pxToDp(16), fontSize: pxToDp(16), color: '#333333' }}>
            &emsp;&emsp;越剧自诞生到现在百年有余，发源于浙江嵊州，发祥于上海，繁荣于全国，流传于世界，在发展中汲取了昆曲、话剧、绍剧等特色剧种之大成，经历了由男子越剧到女子越剧为主的历史性演变。但在现如今快节奏的生活中，已经很少有人有耐心去体会越剧的美妙。
            {'\n'}
            &emsp;&emsp;为了弘扬与传承百年越剧，让人们了解越剧近代历史，体会越剧的发展，分享对越剧的喜爱、心得与建议，特此创作“百越庭”APP，让人们认识到浙江在百年高速发展的同时，也很注重积累和传承特色文化。
          </Text>
        </View>
      </View>
    );
  }
}
export default Index;
