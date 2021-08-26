import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
  renderInner = () => (
    <Fragment>
      <View>
        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold',color:'#000000' }}>祥林嫂</Text>
      </View>
      <Text
        style={{
          marginTop: pxToDp(8),
          fontSize: pxToDp(16),
          color: '#333333',
          marginBottom: pxToDp(10)
        }}
      >
        越剧《祥林嫂》全剧唱词
      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8)
          }}
          source={require('../../../../res/play/fengmian8.jpg')}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}>幕后合唱</Text>:
        年年腊月年年冬，卫家山人家事穷，最穷莫如祥林家，世世代代做长工。样林一死债满身，愁得老娘心事重。婆婆唉！丈夫死后整十年，撇下我孤儿寡妇度曰艰。我曰间贴箔到黄昏后，晚间纺纱到五更天。总算把祥林祥根扶养大，实指望百年有靠老来甜。有谁知黄梅不落青梅落，样林呀，儿子会死在娘前面。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>卫老二</Text>:
        祥林娘呀！样林—死巳半年，你空留着年轻媳妇在身边。大户人家守节造牌坊，穷人守节为哪点？寡妇再嫁寻常事，也没有什么不体面。你藏着个活宝不卖钱，我看你真是懵懂少主见。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>婆婆</Text>:
        不是我懵懂少主见，再嫁寡妇能值几个钱?我一家生活半靠她，怎能够挖肉补疮图眼前。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>卫老二</Text>:
        样林娘，你说寡妇再嫁不值钱，我倒有个好主见。贺家坳山中有个贺老六，打猎为生已多年，曾经托我把媒来做，村里姑娘哪个肯嫁到山间？祥林娘，要是样林嫂肯嫁过去，他愿出财礼八十千。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>婆婆</Text>: 八十千？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>卫老二</Text>:
        是八十千！祥根讨老婆，还了棺材钱，至少剩下二十千，舒舒服服好过年。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>婆婆</Text>:
        原以为寡妇再嫁不值钱，想不到肯出财礼八十千，娶亲、还债好过年，这倒是个好主见。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>卫老二</Text>:
        再说你媳妇生来命不好，留在身边要晦气添。卖掉她换来一房瓣媳妇，你后半世还可老来甜。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>婆婆</Text>: 好倒是好！我看她不肯的呀。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>卫老二</Text>:
        你那放心！只要你答应，一切我周全，通知贺老六，打轿到门前，捆捆绑绑塞进花轿，清清爽爽蛮简便。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>祥林嫂</Text>:
        祥林呀！婆婆说话你可听到！？她要卖我到贺家坳。已与癞子商量定，明天就要抢上轿。这恶煞时辰我怎么过？你叫我苦命如何好！人说道有爹有娘有主张，我乃是无爹无娘无依靠。啊呀样林啊，我从小到你家里来，双手不停到今朝。只道是苦到尽头总有甜，谁又知，你年轻短命将我抛。从此苦命无指望，只指望服侍婆婆能到老。婆婆恶骂我能受，饥饿寒冷我能熬。干苦万难我不怕，怕只怕要我去再醮。看那张家媳妇李家嫂，与我一般夫早夭，俱都是被迫无奈再婚嫁，却被人冷嘲热讽到今朝。宁死不做再醮妇——我只有到婆婆跟前去哀哀告，求婆婆念念旧情不卖我，我情愿做牛做马，千斤重担一人挑。哎，婆婆若念婆媳情，怎忍将我去卖掉！？看来是，婆婆她为钱财主意定，纵然是，说破了舌尖也徒劳。左思右想乱如麻……难道说我坐等明天时辰到？眼前只有一条路，不如一死万事了！霎时鸡啼天将晓，此刻不走我就逃不了。趁此夜深人不觉，咬紧牙关只有逃！
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>幕后合唱</Text>
        :只有逃，只有逃，宁死不愿去再醮。临去匆匆回头望，依依难舍曰旧时巢。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>婆婆</Text>:
        一路寻来无踪影，急得老娘心头痛。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>卫老二</Text>:
        不怪天，不怪地，只怪你自己大意漏了风。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>合唱</Text>
        :爆竹连声震耳响，鲁镇处处火药香，掸尘送灶煮福礼，鲁府今年分外忙。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>卫老婆子</Text>:
        太太！她是卫家山中人，是我娘家近乡邻，今年春天丈夫死，留下了婆婆小叔债一身。她愿意出来做帮工，粗细生活样样能。老太婆愿意做中保，不知太太可称心？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>鲁四太太</Text>:
        我看她模样周正忠厚相，粗手大脚力气强。样林嫂，你挑水、劈柴、杀鸡、宰鹅可会做？
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>卫老婆子</Text>:
        太太呀，这些生活她能但当。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>鲁四太太</Text>:
        我有心将她来留下，可惜她，是孤孀。老爷素来事忌讳，还得与他去商量。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>鲁四老爷</Text>:
        康梁变法已荒唐，民党主张更猖狂。改官制，变法令，废八股，女学堂，上下尊卑全顾，孔孟之道撇一旁。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>高老夫子</Text>:
        目前是世风曰下伤风化，道德沦亡乱纲常。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>合唱</Text>:
        祥林嫂力气真不小，袖子卷得半尺高，擦擦擦，擦得又快又是好，太太一旁微微笑。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>祥林嫂</Text>:
        青青柳叶蓝蓝天，弯弯桥影压水面。一曰三餐无忧虑，还有五百月规钱，但愿还得婆婆债，终朝劳累也欢颜。
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}>卫老二</Text>:
        东南西北俱走遍，去冬寻找到春天，踏破多少鞋底板，这断命寡妇总寻不见。我只道寡妇抬进山里去，一桩事情可顾面，祥林嫂还了债，我老癞卸了肩，贺老六有老婆，还可再赚几个谢媒钱。谁知天不从人愿，到手的财喜化成烟。霎时阴霾起，转眼风云变。冤家逢狭路，灾祸在眼前。
      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
        top="祥林嫂"
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
