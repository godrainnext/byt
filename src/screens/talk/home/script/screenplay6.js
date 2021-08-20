import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
  renderInner = () => (
    <Fragment>
      <View>
        <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
          柳毅传书
        </Text>
      </View>
      <Text
        style={{
          marginTop: pxToDp(10),
          fontSize: pxToDp(17),
          marginBottom: pxToDp(10)
        }}
      >
        陈少春演柳毅，吴小楼钱塘君，钱妙花演洞庭君，陈佩君演泾河小龙
      </Text>
      <View>
        <Image
          style={{
            width: '100%',
            height: pxToDp(200),
            borderRadius: pxToDp(8)
          }}
          source={require('../../../../res/play/fengmian6.jpg')}
        />
      </View>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙（白）</Text>: 小贱人，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>: 胆敢一再冲撞我，
        看你**起风波。 妄想爹娘偏护你， 除非石烂海又枯。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙父（白）</Text>: 夫妻又在争吵什么？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙（白）</Text>: 父王啊，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        贱人仗势太不顾，在儿面前逞威武
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>三娘（白）</Text>: 父王，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        儿夫他海上任意兴风浪，游荡水底真轻狂。儿媳好言把他劝，反将恶语对三娘。今日回来又逞性，打得儿媳遍体伤，伏望父王训诫他。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙（唱）</Text>:
        分明是花言巧语假装腔，适才公然将我骂，还有狂言骂父王，这等妖妇不整治，爹娘脸上也无光。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙父（白）</Text>: 贱婢，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        你龙宫生来龙宫长，就应该尊敬丈夫孝爹娘，却为何不守妇道耍骄性？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>三娘（唱）</Text>:
        父王啊，儿媳是谨守妇道敬尊长，幼读诗书知礼仪，长听慈训学贤良，晨昏劝夫行正道，何敢谎言骗父王，父王若还不肯信，问过锦鳞便知详。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙（白）</Text>: 住口
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        你口善心苦谁不知，何用辩驳多言讲。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>三娘（唱）</Text>:
        儿媳句句是实言，伏望父王作主张。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙父（唱）</Text>:
        你在我面前敢如此，平日定是不贤良。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>三娘（唱）</Text>: 儿媳是一再受冤屈，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙父（白）</Text>: 呸
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        休逞骄性卖疯狂，自古道敬夫如敬天，泾河哪容你乱纲常，快将她贬进冷宫去。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>三娘（唱）</Text>:
        谁知他，父子同具恶心肠。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙父（白）</Text>: 拖下
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>三娘（唱）</Text>:
        冷宫将至王宫远，免得每日见魔王。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙（唱）</Text>: 竟敢无恐犯尊严，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙父（唱）</Text>:
        气得我龙须倒卷，怒火万丈！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙（唱）</Text>: 拖下去剥去衣衫重重打。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>小龙父（白）</Text>: 押下去，气死我也！
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
        renderInner={this.renderInner}
        arr={[
          {
            avatar:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
            createTime: '两天前',
            nickName: '我吃西红柿啊',
            content: '每个人都有不一样的童年'
          },
          {
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
    marginTop: pxToDp(25),
    lineHeight: pxToDp(25)
  },
  texthead: {
    fontWeight: 'bold'
  }
});
export default Index;
