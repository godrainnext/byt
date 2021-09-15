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
          红楼梦
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
        葬花
      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8),
            width: pxToDp(342)
          }}
          source={{
            uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F6965855629%2F641.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633764514&t=020800860c1922ccdf7af9571bf35ebf'
          }}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}>薛宝钗</Text>:
        四月天气雨乍晴，陪着老太太来游春。宝钗理该共作伴，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>王熙凤</Text>:
        龙女应当陪观音。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>薛姨妈</Text>:
        人说四月春将去，我看是正当美景和良辰。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>贾母</Text>:
        老年虽有恋春意，怎奈是白发已非赏花人。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>薛宝钗</Text>:
        说什么白发已非赏花人，依我看啊，老太太越活越年轻。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>王熙凤</Text>:
        长生不老活下去，赛过南极老寿星。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>合唱</Text>:
        看不尽满眼春色富贵花，说不完满嘴献媚奉承话。谁知园中另有人，偷洒珠泪葬落花。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>林黛玉</Text>:
        绕绿堤拂柳丝穿过花径，听何处哀怨笛风送声声。人说道大观园四季如春，我眼中却只是一座愁城。看风过处落红成阵，牡丹谢芍药怕海棠惊。杨柳带愁桃花含恨，这花朵儿与人一般受逼凌。我一寸芳心谁共鸣，七条琴弦谁知音。我只为惜惺惺怜同命，不教你陷落污泥遭蹂躏。且收拾起桃李魂，自筑香坟葬落英。花落花飞飞满天，红消香断有谁怜。一年三百六十天，风刀霜剑严相逼。明媚鲜艳能几时，一朝飘泊难寻觅。花魂鸟魂总难留，鸟自无言花自羞。愿侬此日生双翼，随花飞到天尽头。天尽头何处有香丘，未若锦囊收艳骨，一抔净土掩风流。质本洁来还洁去，不教污淖陷渠沟。侬今葬花人笑痴，他年葬侬知是谁。一朝春尽红颜老，花落人亡两不知。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>贾宝玉</Text>:
        想当初妹妹从江南初来到，宝玉是终日相伴共欢笑。我把那心上的话儿对你讲，心爱的东西凭你挑。还怕那丫鬟服侍不周到，我亲自桩桩件件来照料。你若烦恼我耽忧，你若露齿我先笑。我和你同桌吃饭同床睡，象一母所生的亲同胞。实指望亲亲热热直到底，总见得我俩情谊比人好。谁知道妹妹人大你心也大，如今是你斜着眼睛把我瞧。三朝四夕不理我，使宝玉失魂落魄担烦恼。我有错你打也是骂也好，为什么远而避之将我抛。你有愁诉也是说也好，为什么背人独自你常悲嚎。你叫我不明不白鼓里蒙，我就是为你死了，也是个屈死的鬼魂冤难告。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>林黛玉</Text>:
        我不顾苍苔滑天色昏，来访你秉烛共谈心。谁知道受了你丫头言欺凌，尝了你怡红院里闭门羹。撇下我满目凄凉对院门，遍体生寒立花径。那一日你蒙着耳朵不理人，今日又何必指着鼻子把誓盟。
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
        top="红楼梦"
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
