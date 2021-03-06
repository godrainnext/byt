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
          梁祝
        </Text>
        <View style={{ width: pxToDp(40), height: pxToDp(1), backgroundColor: '#000000', marginLeft: pxToDp(10) }}></View>
      </View>
      <Text
        style={{
          marginTop: pxToDp(8),
          color: '#333333',
          fontSize: pxToDp(16),
          marginBottom: pxToDp(10)
        }}
      >
        范瑞娟演梁山伯 傅全香演祝英台 （合唱）
      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8),
            width: pxToDp(342)
          }}
          source={require('../../../../res/play/fengmian3.jpg')}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}>（祝白）</Text>:
        梁兄，（唱）书房门前一枝梅，树上鸟儿对打对，喜鹊满树喳喳叫，向你梁兄报喜来。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        弟兄二人出门来，门前喜鹊成双对，从来喜鹊报喜讯，恭喜贤弟一路平安把家归。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 梁兄请。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 请。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        出了城，过了关，但只见山上的樵夫把柴担。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        起早落夜多辛苦，打柴度日也艰难。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>:
        梁兄呀，（唱）他为何人把柴打？你为哪个送下山？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        他为妻儿把柴打，我为你贤弟送下山。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>: 过了一山又一山，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>: 前面到了凤凰山，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>: 凤凰山上百花开，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>: 缺少芍药共牡丹。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        梁兄你若是爱牡丹，与我一同把家归，我家有枝好牡丹，梁兄你要摘也不难。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        你家牡丹虽然好，可惜是路远迢迢怎来攀？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        青青荷叶清水塘，鸳鸯成对又成双。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（白）</Text>: 梁兄呀！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        英台若是女红妆，梁兄你愿不愿配鸳鸯？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        配鸳鸯，配鸳鸯，可惜你，英台不是女红妆！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（银心唱）</Text>: 前面到了一条河
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（四九唱）</Text>: 漂来一对大白鹅。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        雄的就在前面走，雌的后面叫哥哥。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        不见二鹅来开口，哪有雌鹅叫雄鹅？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        你不见雌鹅它对你微微笑，它笑你梁兄真像呆头鹅。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 嗳！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        既然我是呆头鹅，从今你莫叫我梁哥哥。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 梁兄……小弟讲错了。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 下次不可。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（心、九唱）</Text>: 眼前一条独木桥，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 贤弟请。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 梁兄请。啊梁兄，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>: 我心又慌胆又小。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>: 愚兄扶你过桥去，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>: 你我好比牛郎织女渡鹊桥。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 你呀！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 梁兄！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（合唱）</Text>:
        过了河滩又一庄，庄内黄犬叫汪汪。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        不咬前面男子汉，偏咬后面女红妆。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        贤弟说话太荒唐，此地哪有女红妆？放大胆子莫惊慌，愚兄打犬你过庄。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        井水深浅不关情，你我赶路最要紧。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 梁兄来！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        你看这井底两个影，一男一女笑盈盈。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 嗳，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 呶，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        愚兄明明是男子汉，你为何将我比女人！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（白）</Text>: 走吧！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（合唱）</Text>:
        离了井又一堂，前面到了观音堂。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 梁兄可是到堂前一拜呀？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 好哇！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        观音堂，观音堂，送子观音坐上方，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        观音大士媒来做，我与你梁兄来拜堂。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 咳！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        贤弟越说越荒唐，两个男子怎拜堂？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（白）</Text>: 快走吧！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（合唱）</Text>: 离了古庙往前走，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（心唱）</Text>: 但见过来一头牛，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（九唱）</Text>: 牧童骑在牛背上，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（心唱）</Text>: 唱起山歌解忧愁。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        只可惜，对牛弹琴牛不懂，可叹你梁兄笨如牛。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 嗳！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        非是愚兄动了火，谁叫你比来比去比着我。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        请梁兄，你莫动火，小弟赔罪来认错。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 好了，好了，快走吧！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 梁兄，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        多承梁兄情义深，登山涉水送我行，常言道送君千里终须别，请梁兄就此留步转回程。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        与贤弟草桥结拜情义深，让愚兄再送你到长亭。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（白）</Text>: 四九，快走吧！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（合唱）</Text>:
        十八里相送到长亭，十八里相送到长亭。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 梁兄，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>: 你我鸿雁两分开，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>: 问贤弟你还有何言来交待？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        我临别想问你一句话，问梁兄你家中可有妻房配？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        你早知愚兄未婚配，今日相问为何来？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        要是你梁兄亲未定，小弟替你来做大媒。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>:
        贤弟替我来做媒，但未知千金哪一位？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        就是我家小九妹，不知你梁兄可喜爱？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>: 九妹今年有几岁？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>: 她是与我同年乃是双胞胎。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>: 九妹与你可相像？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>: 她品貌就像我英台。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>: 但未知仁伯肯不肯？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝白）</Text>: 噢，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>: 家父嘱我选英才。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁唱）</Text>: 如此多谢贤弟来玉成，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>:
        梁兄你花轿早来抬。我约你，七巧之期，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（梁白）</Text>: 噢，七巧，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（祝唱）</Text>: 我家来。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（合唱）</Text>:
        临别依依难分开，心中想说千句话，万望你梁兄早点来。
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
        top="梁祝"
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
    marginTop: pxToDp(4),
    color: '#333333',
    lineHeight: pxToDp(25)
  },
  texthead: {
    fontWeight: 'bold',
    fontSize: pxToDp(16),
    color: '#333333',
  }
});
export default Index;
