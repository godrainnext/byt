import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
  renderInner = () => (
    <Fragment>
      <View>
        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold',color:'#000000' }}>山河恋</Text>
      </View>
      <Text
        style={{
          marginTop: pxToDp(8),
          fontSize: pxToDp(16),
          marginBottom: pxToDp(10)
        }}
      >
        送信选段
      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8),
            width: pxToDp(342)
          }}
          source={require('../../../../res/play/fengmian9.jpg')}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}>季娣（唱）</Text>
        :呀...啐...我道你是个君子人，这样的戏弄人家不该应。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>
        :我本是个大将军，岂可与你去送信。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（唱）</Text>
        :即是将军有身份。你缘何与我不缠清啊？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>
        :谁叫你我的说话你不听，吴寿已经得了病，神思恍惚口难言，病势要紧重十分，故而你有话只管对我讲，我何曾与你缠不清。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（白）</Text>
        :如此说来是我错怪了你？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（白）</Text>: 这样说来我是唐突了你。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（白）</Text>: 不妨事。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（白）</Text>:
        小姐，问小姐到此有何干？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（唱）</Text>: 特地前来送书信
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>: 这封书信何人写？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（唱）</Text>: 那吴寿的妹妹名戴赢。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>: 她不是被人掳去无踪影
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（唱）</Text>
        :此事我已早知情，那黎瑟想把皇后害，逼她的口供她不肯，故所以暗中写好书一封，她要我送与吴寿便详情。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>:
        你把书信交与我，我替你去读与那吴寿听，只是我也想托你带封信，不知小姐肯不肯。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（唱）</Text>:
        你把书信交与我，我替你送与收信人。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>: 我不是书信是口信。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（唱）</Text>: 口信说来呀我记在心。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>:
        这个口信要当心，不可说与那旁人听。出我的口，入你的心，答应了去送要守信。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（唱）</Text>:
        既然答应焉有反悔。请说吧。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>: 噢，哎，妹妹啊……
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（唱）</Text>: 啊呀，你在叫什么呀？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>:
        我是在念信给你听啊。现在我与你口信念，就如同和你见了面。你的美貌像天仙，我无限爱恋入心田。啊贤妹啊，我唤你，你不知，我想你，你不见，我与你说话你不回答，我和你说的全是肺腑言。噢贤妹啊，我是一见就钟情你，未知你可否将我恋。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>季娣（唱）</Text>: 我是一见就钟情你，
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>申息（唱）</Text>: 对呀，你我正好相爱恋。
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
      top="山河恋"
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
    color: '#333333',
    fontSize: pxToDp(16),
  }
});
export default Index;
