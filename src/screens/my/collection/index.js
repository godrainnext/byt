import React, { PureComponent } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Top from '../../../component/common/top'
import { pxToDp } from "../../../utils/styleKits";

class Index extends PureComponent {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#D5E8E6' }} showsVerticalScrollIndicator = {false}>
        <Top icon1="arrow-back" title="收藏" />
        <View style={{ margin: pxToDp(10) }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(8),
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              elevation: 8,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
              shadowColor: 'black',  //  阴影颜色
              shadowRadius: pxToDp(10),  //  圆角
            }}
          >
            <Image
              style={{
                height: pxToDp(90),
                width: pxToDp(130),
                borderRadius: pxToDp(8),
                margin: pxToDp(8),
              }}
              source={require('../../../res/play/1.jpg')}
            />
            <View style={{ justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  color: '#000000',
                }}
              >
                追鱼·书馆
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(14),
                  marginTop: pxToDp(20)
                }}
              >
                上海越剧院
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(8),
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              elevation: 8,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
              shadowColor: 'black',  //  阴影颜色
              shadowRadius: pxToDp(10),  //  圆角
            }}
          >
            <Image
              style={{
                height: pxToDp(90),
                width: pxToDp(130),
                borderRadius: pxToDp(8),
                margin: pxToDp(8),
              }}
              source={require('../../../res/play/2.jpg')}
            />
            <View style={{ justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  color: '#000000',
                }}
              >
                周仁哭坟
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(14),
                  marginTop: pxToDp(20)
                }}
              >
                绍兴越剧院
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(8),
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              elevation: 8,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
              shadowColor: 'black',  //  阴影颜色
              shadowRadius: pxToDp(10),  //  圆角
            }}
          >
            <Image
              style={{
                height: pxToDp(90),
                width: pxToDp(130),
                borderRadius: pxToDp(8),
                margin: pxToDp(8),
              }}
              source={require('../../../res/play/3.jpg')}
            />
            <View style={{ justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  color: '#000000',
                }}
              >
                梁祝·十八相送
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(14),
                  marginTop: pxToDp(20)
                }}
              >
                杭州越剧院
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(8),
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              elevation: 8,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
              shadowColor: 'black',  //  阴影颜色
              shadowRadius: pxToDp(10),  //  圆角
            }}
          >
            <Image
              style={{
                height: pxToDp(90),
                width: pxToDp(130),
                borderRadius: pxToDp(8),
                margin: pxToDp(8),
              }}
              source={require('../../../res/play/4.jpg')}
            />
            <View style={{ justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  color: '#000000',
                }}
              >
                越剧追鱼
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(14),
                  marginTop: pxToDp(20)
                }}
              >
                今日推荐官
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(8),
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              elevation: 8,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
              shadowColor: 'black',  //  阴影颜色
              shadowRadius: pxToDp(10),  //  圆角
            }}
          >
            <Image
              style={{
                height: pxToDp(90),
                width: pxToDp(130),
                borderRadius: pxToDp(8),
                margin: pxToDp(8),
              }}
              source={require('../../../res/play/5.jpg')}
            />
            <View style={{ justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  color: '#000000',
                }}
              >
               打上一个莲花落
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(14),
                  marginTop: pxToDp(20)
                }}
              >
                今日推荐官
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Index;