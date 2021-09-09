import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
  renderInner = () => (
    <Fragment>
      <View>
        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold',color:'#000000' }}>
          王老虎抢亲
        </Text>
      </View>
      <Text
        style={{
          marginTop: pxToDp(8),
          fontSize: pxToDp(16),
          color: '#333333',
          marginBottom: pxToDp(10)
        }}
      >
        毕春芳演周文宾，戚雅仙演王秀英
      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8),
            width: pxToDp(342)
          }}
          source={require('../../../../res/play/fengmian5.jpg')}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}>（文唱）</Text>:
        我以为，王府门中一条心，又谁知，沙土里面拌黄金。秀英一片真心爱，我走上前去说分明。此时不可太冒失，我还须当面试真情。说远不远近不近，离此约有三百零。清和坊开豆腐店，招牌叫做许隆兴。我叫许大年十八，至今尚未配婚姻。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（王唱）</Text>:
        她想的和我一般样，可见得，年轻人谁不惜青春。她说住在清和坊，让我来打听周文宾。姑娘呀，清和坊是个好地方，你可知住着多少名人？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（文唱）</Text>:
        莫非她，有意把我来打听，让我来，难她一难再说明。小姐呀，东边住个赵状元，两边住个钱将军，南边住个孙天官，北边住个李大人。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（王唱）</Text>:
        她为何不将周府提？我直言相问难为情。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（文唱）</Text>:
        后面住个吴道士，前面住个郑算命，左面住个王皮匠，右面住个冯医生，隔壁住个陈货郎，对过住个……对过有户好人家，江南才子周文宾。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（秀唱）</Text>:
        江南才子周文宾，他的为人你可知情？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（文唱）</Text>:
        小姐如此关心问，想来非故就是亲？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（秀唱）</Text>: 一非故，二非亲。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（文唱）</Text>: 那为何，左打听来右打听？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（秀唱）</Text>:
        他诗赋文章称绝伦，爱才故而来动问。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（文唱）</Text>:
        他虽是满腹文章才似锦，婚姻大事却不顺心。看中尚书千金女，听说名叫王秀英。谁知小姐贪虚荣，嫌他家境太清贫。他婚姻不成急又恨，一场大病就上了身，足足病了三个月，瘦得像个枯树棍，看来性命是难挽救，突然死——不！突然死里又逢生。周文宾忽然看中我，几次托媒来求亲。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（秀唱）</Text>:
        他几次托媒来求亲，你的爹娘可答应？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（文唱）</Text>:
        我爹爹一听心欢喜，马上满口就答应。若能嫁得周公子，好比是口含蜜糖甜在心，定下今年三月三，吹吹打打抬过门。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（秀唱）</Text>:
        啊，苦啊！人人都说黄连苦，我比黄连苦三分，空有沉鱼落雁羞花貌！空有万卷诗书才女名！悔不该生于富贵家，官小姐不如布衣人！从今后，不穿这锦绣衣，不穿这百褶裙；不插花，不戴环，不读经史不作文，等到今年六月六，我哭哭啼啼去入空门。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（文唱）</Text>:
        我左也想，右也忖，这对姻缘不相称。我是一个大脚婆，直量一尺横三寸，将来夫妻是难到头，我还是趁早莫成亲。小姐你若真心相爱，那你就该托人传柬诉衷心……多谢小姐恩情深，小生就是周文宾。正月十五是元宵，人山人海闹盈盈。我与好友来打赌，男扮女装去看花灯。只为你哥哥王老虎，他把我当作美佳人，抢入府，要成亲，我千言万语难脱身。他把我强留小姐的闺房内，这真是美满姻缘天做成。
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
        top="王老虎抢亲"
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
