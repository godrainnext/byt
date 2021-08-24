import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
  renderInner = () => (
    <Fragment>
      <View>
        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
          五女拜寿
        </Text>
      </View>
      <Text
        style={{
          marginTop: pxToDp(8),
          fontSize: pxToDp(16),
          marginBottom: pxToDp(10)
        }}
      >
        牡丹竞放笑春风，喜满华堂寿烛红。白首齐眉庆偕老，五女争来拜寿翁。
      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8)
          }}
          source={require('../../../../res/play/fengmian4.png')}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}>老家院（白）</Text>:
        老爷——禀老爷夫人，扬州/苏州大小姐大姑爷，二小姐、二姑爷；杭州四小姐四姑爷、五小姐五姑爷带来各式各样寿礼，一齐给你拜寿来了！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨继康（白）</Text>: 快快有请
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>老家院（白）</Text>:
        老爷吩咐，有请各位小姐姑爷
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>众女、婿（白）</Text>: 岳父、岳母/爹爹母亲
        小婿/孩儿大礼拜祝寿诞
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨继康、夫人（白）</Text>: 贤婿女儿起来
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>众女、婿（白）</Text>:
        多谢岳父、岳母/爹爹母亲
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨继康（白）</Text>:
        众位贤婿女儿路上辛苦了
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>俞志云</Text>:
        白玉如意献岳丈，如意吉祥祝寿长。接手谕/ 知有告老还乡意，愿奉养/
        如同孝敬亲爹娘。常言道/ 长婿当作半子靠，迎二老/ 安居姑苏寿而康。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨夫人（白）</Text>:
        大姑爷不愧是尚书公子，孝心可嘉。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨继康（白）</Text>: 是啊
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>双桃</Text>:
        小名儿虽叫牡丹，却有惭国色天香。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍白）</Text>:
        爹爹母亲，赤金寿星笑口开，寿比南山景云辉。你女婿件件都听我，爹娘啊/
        养老要到我家来。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>丁大富</Text>: 贤妻说/
        报答双亲宠和爱，为尽孝/ 虎丘山下造楼台。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨夫人（白）</Text>:
        二姑爷是，扬州/苏州首富，老爷看，这赤金寿星真象你啊。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨继康（白）</Text>: 哈哈
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>陈文新</Text>: 献上这/
        玲珑珊瑚福临门，爹爹说/ 亲家本是同窗友，湖山有幸迎知音。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>陈文华</Text>: 呈上了/
        翡翠宝瓶万寿春，母亲说/ 天下风光西湖好，颐养天年可长生。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>四香、五凤</Text>:
        爹爹、母亲！爹娘呀，公婆临别细叮咛，还请二老到杭城，姐妹晨昏来侍奉，百依百顺孝双亲。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨继康（白）</Text>:
        陈亲家教子有方，真不愧相国后代啊
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨夫人（白）</Text>:
        是啊，这两对小夫妻真讨人喜欢
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>双桃（白）</Text>:
        啊，爹爹母亲，扬州/苏州花园数丁家又大又漂亮，你一定要到我家来养老
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>丁大富（白）</Text>:
        对、对，岳母，你一定要道我家来啊
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>俞志云（白）</Text>:
        长婿如同长子，理应请二老到我家来
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>众儿女（白）</Text>: 岳父、岳母/爹爹母亲
        到我家来~到我家来~
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>杨继康（白）</Text>:
        好了，不要争了，你们都有孝心，待我告老后再做商议，你们到花厅用茶去吧
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
      top="五女拜寿"
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
    lineHeight: pxToDp(25)
  },
  texthead: {
    fontWeight: 'bold',
     fontSize: pxToDp(16)
  }
});
export default Index;
