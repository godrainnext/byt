import React, { Fragment, PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
          追鱼
        </Text>
        <View style={{ width: pxToDp(40), height: pxToDp(1), backgroundColor: '#000000', marginLeft: pxToDp(10) }}></View>
      </View>
      <Text
        style={{
          marginTop: pxToDp(8),
          fontSize: pxToDp(16),
          color: '#333333',
          marginBottom: pxToDp(10)
        }}
      >
        徐玉兰演张珍，王文娟演鲤鱼精
      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8),
            width: pxToDp(342)
          }}
          source={{
            uri: 'https://img2.baidu.com/it/u=3786292342,3139767422&fm=26&fmt=auto&gp=0.jpg'
          }}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}>（珍唱）</Text>:
        碧波潭微波荡漾，桂花金黄影横窗，空对此一轮明月，怎奈我百转愁肠。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（白）</Text>:
        想我张珍，思父母在世时，与丞相金宠之女牡丹小姐自幼订婚，不幸亲亡家败，无奈只得到金府投亲。不料岳父见我衣衫褴褛，十分不喜，就命脉我在碧波潭畔草堂攻书，不知我那牡丹小姐的心意如何，好不烦闷人也。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（白）</Text>:
        说什么姻缘本是前生定，又谁知人情纸一张，他金府三代不招白衣婿，我张珍何时得中状元郎。又听得一声声鲤鱼跃浪，把月影散成了万点银光。鲤鱼、鲤鱼啊！你那里凄凉水府，我这里寂寞书房，我白衣你未成龙，我单身你可成双？咫尺间情愫难通，空惹下满腹惆怅。唉，鲤鱼无知，说他作甚，我还是回书房读书去吧。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼白）</Text>:
        小仙鲤鱼精是也，秀才张珍在此攻书，蒙他多情，每日顾盼于我，他怜我水府凄凉，我慰他书房寂寞，有何不可，不免待我变作牡丹小姐模样，前去一会便了。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（唱）</Text>:
        且把真身暂隐藏，变作牡丹俏模样，今晚鱼儿巧梳妆，做一个神女去会襄王。（白）呀，（唱）轻移莲步往前行，抬头已是到书房，只见他头懒抬，眼倦开，脸庞儿与那潘安一样美，我与你水府人间各一方，却为何欠下这笔相思债？待我上前去唤醒他，只恐他醒来要将我怪，我若是不唤他，这万千相思怎丢开，君子呀，君子呀！秀才家瞌睡从来大，教我如何去安排？这缸中水就是清凉散，你与我唤醒那张秀才。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍唱）</Text>:
        一枕南柯梦不长，满脸水球为哪桩。啊呀！我门儿未关，先打起瞌睡来了。你是谁家窈窕娘，因何月夜到书房？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼唱）</Text>:
        他问我何事到书房，这叫我羞人答答口难张。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍白）</Text>: 你为何沉吟不语？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼唱）</Text>: 张郎呀，我就是幼年订婚……
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍唱）</Text>: 莫非是牡丹小姐到书房。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼白）</Text>:
        小名儿虽叫牡丹，却有惭国色天香。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍白）</Text>:
        哎呀，果然是小姐来到书房，小生未出远迎，有罪呀，实是有罪。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼白）</Text>: 不敢，不敢。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍白）</Text>:
        小姐，小生书房插陋，何不到月下打坐？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼白）</Text>: 好。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍白）</Text>:
        哎呀，好一个美貌的小姐呀！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼白）</Text>: 好一位英俊的秀才也！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍白）</Text>: 小姐。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼白）</Text>: 张郎。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍唱）</Text>:
        我张珍远道来投亲，蒙岳父命我在碧波潭畔攻书文，我常把自身比张羽，怎奈是无缘难把龙女亲，今晚多感小姐来，暮眼前是梦境。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼唱）</Text>:
        岂不闻琴中久感张郎意，梦里先来了龙女魂。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍唱）</Text>:
        好一个“梦里先来了龙女魂”，小生是一介寒士家道贫，我功名未登龙虎榜，怕误了小姐你终身。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼唱）</Text>:
        你休嗟一介寒士家道贫，我看你定有锦绣好前程，但愿得夫唱妇随常相叙，却比那玉堂金印胜十分。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（珍唱）</Text>:
        观她桃李丰神容颜美，更有那湖海豪情令人敬，我道姻缘已无份，却谁知今晚月下又相亲，喜孜孜重把礼来行，小姐未知你何时再降临。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>（鱼唱）</Text>:
        从此每晚二更后，我在那前面花园等。
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
        top="追鱼"
        renderInner={this.renderInner}
        arr={[
          {
            id: 1,
            avatar:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
            createTime: '12分钟前',
            nickName: '越剧小生',
            content: '抬头能和你分享同一个月亮就很美好'
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
