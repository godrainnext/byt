import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
  renderInner = () => (
    <Fragment>
      <View>
        <View style={{
          height: pxToDp(30),
          width: pxToDp(30),
          borderRadius: pxToDp(15),
          backgroundColor: '#D5E8E6',
          marginBottom: pxToDp(-20),
        }} ></View>
        <Text
          style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000', marginLeft: pxToDp(10) }}
        >
          桃花扇
        </Text>
        <View style={{ width: pxToDp(53), height: pxToDp(1), backgroundColor: '#000000', marginLeft: pxToDp(10) }}></View>
      </View>
      <Text
        style={{
          marginTop: pxToDp(8),
          color: '#333333',
          fontSize: pxToDp(16),
          marginBottom: pxToDp(10)
        }}
      >
        洞房
      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8),
            width: pxToDp(342)
          }}
          source={{
            uri: 'https://img0.baidu.com/it/u=2664677141,2152464836&fm=26&fmt=auto&gp=0.jpg'
          }}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}>侯朝宗</Text>:
        齐梁词赋六朝柳，玉树后庭旧韵留。此心漂泊寄何处，乍相逢，有红粉佳人知己酬。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>李香君</Text>:
        今宵灯影纱红透，遍秦淮，春光荟萃媚香楼。娇客乘鸾花颤抖，似小杜当年载酒下扬州。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>侯朝宗</Text>:
        莫道那美眷如花天上有，此处璧人胜一筹。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>李香君</Text>:
        妾是那死生相依杜丽娘，君是那不离不弃梦梅柳。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>侯朝宗</Text>:
        牡丹亭上三生路，苦尽甘来难回首。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>李香君</Text>:
        妾与你，并肩走，同甘共苦走到头。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>李香君</Text>:
        迷离灯火如春昼，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>侯朝宗</Text>:
        曲终人散二更后。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>李香君</Text>:
        宫壶滴尽玳筵收，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>侯朝宗</Text>:
        重重锦帐香薰透。
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
        top="桃花扇"
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
