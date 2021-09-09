import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
  renderInner = () => (
    <Fragment>
      <View>
        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold',color:'#000000' }}>忠魂曲</Text>
      </View>
      <Text
        style={{
          marginTop: pxToDp(8),
          color: '#333333',
          fontSize: pxToDp(16),
          marginBottom: pxToDp(10)
        }}
      >
      记得当年清水塘
      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8),
            width: pxToDp(342)
          }}
          source={{
            uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2019%2FE7CD6A188ECCAC65007E7BCF07BB37F75E19AD01_size88_w1080_h607.jpeg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633678118&t=7bc0930729d319636a56745cf7cb1be5'
          }}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}>杨开慧</Text>:
        记得当年清水塘
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        生下你时天未亮
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        爸爸给你起名字
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        妈妈给你缝衣裳
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        外婆给你煮米汤
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        全家盼你快成长
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        东奔西走八年来
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        从未离开娘身旁
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        饮过浦江水
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        吃过昭山粮
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        广州东山初识字 
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        武昌城内学歌唱
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        斗争岁月童年过
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        今日陪娘坐牢房
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        明朝妈妈赴刑场
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        望儿莫要泪汪汪
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        岸英啊
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        娘死后你要去寻找救星共产党
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        丹心永远向太阳
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        我不能抚养你长大
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        共产党胜过亲生娘
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        岸英啊
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        你要去寻找爸爸毛泽东
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        代妈问候多看望
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        你要跟着爸爸的脚印走
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        征途处处辨方向
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        爸爸的品德学过来
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        爸爸的话儿你要牢牢记心上
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        岸英啊
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        你要去投奔红军上山岗
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        跟着农友拿起枪
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        记住乡亲疾苦深
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        誓为工农求解放
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        待等那捷报飞舞春来到
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        你再来除草培土祭亲娘
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        今日妈妈洒血处
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        定有红花吐芬芳
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        到那时莫忘先辈凌云志
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨开慧</Text>:
        要谱写共产主义新篇章
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
        top="忠魂曲"
        renderInner={this.renderInner}
        arr={[
          {
            id: 1,
            avatar:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
            createTime: '两天前',
            nickName: '我吃西红柿啊',
            content: '每个人都有不一样的童年'
          },
          {
            id: 2,
            avatar:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
            createTime: '两天前',
            nickName: '我吃西红柿啊',
            content: '每个人都有不一样的童年'
          }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: pxToDp(16),
    color: '#333333',
    marginTop: pxToDp(4),
    lineHeight: pxToDp(25)
  },
  texthead: {
    fontWeight: 'bold',
    color: '#333333',
    fontSize: pxToDp(16)
  }
});
export default Index;
