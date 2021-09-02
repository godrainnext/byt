import React, { PureComponent } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import changeImgSize from '@utils/changeImgSize';
export default class index extends PureComponent {
  state = {
    roleList: [
      {
        id: '1', name: '王文娟', next: 'Wangwenjuan',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/94cad1c8a786c91773a2ca5ccb3d70cf3bc75735?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'
      },
      {
        id: '2', name: '陆锦花', next: 'Lujinhua',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/0bd162d9f2d3572c0af056128713632763d0c3ea?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '3', name: '戚雅仙', next: 'Qiyaxian',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/bf096b63f6246b60a68511d7e3f81a4c500fa28e?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '4', name: '袁雪芬', next: 'Yuanxuefen',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/0823dd54564e9258faa3c4ae9e82d158cdbf4ede?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '5', name: '徐玉兰', next: 'Xuyulan',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/30adcbef76094b36acafdd04ca866bd98d1000e9378d?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '6', name: '吕瑞英', next: 'Lvruiying',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/b90e7bec54e736d12cd0c56c99504fc2d4626996?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '7', name: '毕春芳', next: 'Bichunfang',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/21a4462309f79052e20ac98204f3d7ca7bcbd571?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '8', name: '范瑞娟', next: 'Fanruijuan',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/2cf5e0fe9925bc31f68cd77353df8db1ca13700c?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '9', name: '张云霞', next: 'Zhangyunxia',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/b3b7d0a20cf431adeb6f31f54036acaf2fdd98b8?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '10', name: '金采风', next: 'Jincaifeng',
        avatar: 'https://bkimg.cdn.bcebos.com/pic/10dfa9ec8a136327c0e789e49a8fa0ec09fac7db?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
    ]
  };
  static contextType = NavigationContext;
  render() {
    return (
      <View
        style={{
          borderRadius: pxToDp(8),
          height: pxToDp(300),
          marginLeft: pxToDp(16),
          marginRight: pxToDp(16),
          marginTop: pxToDp(16),
          backgroundColor: 'rgba(255,255,255,0.5)',
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
          source={require('../../../res/0901/戏台背景.png')}
        >
          <View >
            <View style={{ marginTop: pxToDp(75) }}></View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: pxToDp(45) }}>
              {this.state.roleList.map((item) => (
                <TouchableNativeFeedback onPress={() => this.context.navigate(item.next)}
                  useForeground={true}>
                  <View
                    style={{
                      width: pxToDp(100),
                      height: pxToDp(160),
                      borderRadius: pxToDp(8),
                      marginRight: pxToDp(20),
                      marginBottom: pxToDp(4)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(140),
                        borderTopLeftRadius: pxToDp(8),
                        borderTopRightRadius: pxToDp(8)
                      }}
                      source={{ uri: item.avatar }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: 'white',
                        elevation: 1,
                        borderBottomLeftRadius: pxToDp(8),
                        borderBottomRightRadius: pxToDp(8),


                      }}
                    >
                      <Text style={{ fontSize: pxToDp(14) }}>{item.name}</Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              ))}
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
