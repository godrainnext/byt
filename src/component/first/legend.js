import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image, TouchableNativeFeedback } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../utils/styleKits';

export default class Legend extends PureComponent {
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        <TouchableNativeFeedback onPress={() => this.context.navigate('School1')}>
          <View
            style={{ flexDirection: 'row' }}
          >
            <Image
              style={{
                height: pxToDp(110),
                width: pxToDp(90),
                borderRadius: pxToDp(8),
                margin: pxToDp(8)
              }}
              source={{
                uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fnews%2Fattachement%2Fjpg%2Fsite3%2F20110316%2F46106135519015070.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632125362&t=9dc7035d2f632f36988eda52463462a9'
              }}
            />
            <View style={{ justifyContent: 'flex-start', width: pxToDp(240), marginTop: pxToDp(12) }}>
              <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold', color: '#333333' }}>
                袁派
              </Text>
              <Text style={{ fontSize: pxToDp(14), flexWrap: 'wrap', color: '#666666', marginTop: pxToDp(5), lineHeight: pxToDp(30) }}>
                袁雪芬唱腔的特点是质朴平易，委婉细腻，深沉含蓄，韵味醇厚。
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => this.context.navigate('School2')}>
          <View
            style={{ flexDirection: 'row' }}

          >
            <Image
              style={{
                height: pxToDp(110),
                width: pxToDp(90),
                borderRadius: pxToDp(8),
                marginLeft: pxToDp(8),
                marginRight: pxToDp(8)
              }}
              source={{
                uri: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/s%3D220/sign=9ebe18840f2442a7aa0efaa7e142ad95/a08b87d6277f9e2f07e73f0f1f30e924b999f3e2.jpg'
              }}
            />
            <View style={{ justifyContent: 'flex-start', width: pxToDp(240), marginTop: pxToDp(12) }}>
              <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold', color: '#333333' }}>
                范派
              </Text>
              <Text style={{ fontSize: pxToDp(14), flexWrap: 'wrap', color: '#666666', marginTop: pxToDp(5), lineHeight: pxToDp(30) }}>
                范瑞娟中低音厚实，高音响亮有力，唱腔凝重大方，富有阳刚之美。
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => this.context.navigate('School3')}>
          <View
            style={{ flexDirection: 'row' }}
          >
            <Image
              style={{
                height: pxToDp(110),
                width: pxToDp(90),
                borderRadius: pxToDp(8),
                margin: pxToDp(8)
              }}
              source={{
                uri: 'https://img0.baidu.com/it/u=4138705196,415315772&fm=26&fmt=auto&gp=0.jpg'
              }}
            />
            <View style={{ justifyContent: 'flex-start', width: pxToDp(240), marginTop: pxToDp(12) }}>
              <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold', color: '#333333' }}>
                尹派
              </Text>
              <Text style={{ fontSize: pxToDp(14), flexWrap: 'wrap', color: '#666666', marginTop: pxToDp(5), lineHeight: pxToDp(24) }}>
                尹桂芳的特点是委婉缠绵，洒脱深沉，纯朴隽永，清新舒展，是一种典型的以柔为主、柔中寓刚的风格。
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
