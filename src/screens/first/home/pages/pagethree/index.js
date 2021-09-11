import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import { pxToDp } from '../../../../../utils/styleKits';
import Top from '../../../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';
class Index extends PureComponent {
  state = {
    roleList: [
      {
        id: '1',
        name: '王文娟',
        next: 'Wangwenjuan',
        place: '浙江绍兴',
        birth: '1926年12月19日',
        genre: '王派',
        job: '花旦',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/94cad1c8a786c91773a2ca5ccb3d70cf3bc75735?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'
      },
      {
        id: '2',
        name: '陆锦花',
        next: 'Lujinhua',
        place: '福建',
        birth: '1927年2月25日',
        genre: '陆派',
        job: '小生',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/0bd162d9f2d3572c0af056128713632763d0c3ea?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '3',
        name: '戚雅仙',
        next: 'Qiyaxian',
        place: '浙江余姚',
        birth: '1928年2月',
        genre: '戚派',
        job: '花旦',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/bf096b63f6246b60a68511d7e3f81a4c500fa28e?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '4',
        name: '袁雪芬',
        next: 'Yuanxuefen',
        place: '浙江嵊县',
        birth: '1922年3月26日',
        genre: '袁派',
        job: '青衣、闺门旦',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/0823dd54564e9258faa3c4ae9e82d158cdbf4ede?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '5',
        name: '徐玉兰',
        next: 'Xuyulan',
        place: '浙江富阳',
        birth: '1921年12月27日',
        genre: '徐派',
        job: '小生',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/30adcbef76094b36acafdd04ca866bd98d1000e9378d?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '6',
        name: '吕瑞英',
        next: 'Lvruiying',
        place: '上海',
        birth: '1933年1月19日',
        genre: '吕派',
        job: '花旦',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/b90e7bec54e736d12cd0c56c99504fc2d4626996?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '7',
        name: '毕春芳',
        next: 'Bichunfang',
        place: '浙江鄞县',
        birth: '1927年7月14日',
        genre: '毕派',
        job: '小生',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/21a4462309f79052e20ac98204f3d7ca7bcbd571?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '8',
        name: '范瑞娟',
        next: 'Fanruijuan',
        place: '浙江绍兴',
        birth: '1924年1月6日',
        genre: '范派',
        job: '小生',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/2cf5e0fe9925bc31f68cd77353df8db1ca13700c?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '9',
        name: '张云霞',
        next: 'Zhangyunxia',
        place: '上海',
        birth: '1926年7月',
        genre: '张派',
        job: '花旦',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/b3b7d0a20cf431adeb6f31f54036acaf2fdd98b8?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id: '10',
        name: '金采风',
        next: 'Jincaifeng',
        place: '上海',
        birth: '1930年',
        genre: '金派',
        job: '闺门旦、花旦',
        avatar:
          'https://bkimg.cdn.bcebos.com/pic/10dfa9ec8a136327c0e789e49a8fa0ec09fac7db?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      }
    ]
  };
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>
        <Top icon1="arrow-back" title="梨园子弟" />
        <ScrollView
          style={{ flex: 1, padding: pxToDp(8) }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              marginBottom: pxToDp(32),
              marginLeft: pxToDp(8),
              marginRight: pxToDp(8)
            }}
          >
            {this.state.roleList.map((item) => (
              <TouchableOpacity
                style={{
                  height: pxToDp(156),
                  borderRadius: pxToDp(8),
                  flexDirection: 'row',
                  marginTop: pxToDp(10),
                  backgroundColor: 'white',
                  marginBottom: pxToDp(4),
                  elevation: 4,
                  shadowColor: 'black', //  阴影颜色
                  shadowOffset: { width: 0, height: 0 }, // 阴影偏移
                  shadowOpacity: 1, // 阴影不透明度
                  shadowRadius: 10 //  圆角
                }}
                onPress={() => this.context.navigate(item.next)}
              >
                <Image style={styles.image} source={{ uri: item.avatar }} />
                <View
                  style={{
                    justifyContent: 'flex-start',
                    width: pxToDp(240),
                    marginTop: pxToDp(10)
                  }}
                >
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={{ marginTop: pxToDp(16) }}>
                    <Text style={styles.text}>籍贯：{item.place}</Text>
                    <Text style={styles.text}>出生日期：{item.birth}</Text>
                    <Text style={styles.text}>流派：{item.genre}</Text>
                    <Text style={styles.text}>行当：{item.job}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  name: {
    fontSize: pxToDp(16),
    color: '#333333',
    fontWeight: 'bold',
    marginTop: pxToDp(2)
  },
  text: {
    fontSize: pxToDp(14),
    color: '#666666',
    marginTop: pxToDp(4)
  },
  image: {
    width: pxToDp(100),
    height: pxToDp(140),
    borderRadius: pxToDp(8),
    margin: pxToDp(8)
  }
});
export default Index;
