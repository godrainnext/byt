import React, { PureComponent } from 'react';
import {
  View,
  Image,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import SongItem from '../components/songitem';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: '穆桂英挂帅',
          content: '秀鸾刀破天门阵, 桃花马踏西夏川。',
          listener: '13526人唱过',
          image:
            'https://img0.baidu.com/it/u=35873461,1923186899&fm=26&fmt=auto&gp=0.jpg',
          detail:
            '猛听得金鼓响画角声震\n唤起我破天门壮志凌云\n想当年桃花马上威风凛凛\n敌血飞溅石榴裙\n有生之日责当尽\n寸土怎能够属于他人\n番王小丑何足论\n我一剑能当百万的兵\n猛听得金鼓响画角声震\n唤起我破天门壮志凌云\n想当年桃花马上威风凛凛\n敌血飞溅石榴裙\n有生之日责当尽\n寸土怎能够属于他人\n番王小丑何足论\n我一剑能当百万的兵',
          fengmian: require('../../../res/6.png'),
          mp3: require('../study/越剧追鱼.mp3')
        },
        {
          id: 2,
          title: '梁祝',
          content: '思往事渺茫茫不堪烟梦，多少悔无边恨苦涩酸辛。',
          listener: '22546人唱过',
          image:
            'https://img2.baidu.com/it/u=207643023,600080192&fm=26&fmt=auto&gp=0.jpg',
          detail:
            '我家有个小九妹\n聪明伶俐人钦佩\n描龙绣凤称能手\n琴棋书画件件会\n我此番杭城求名师\n九妹一心想同来\n我以为 男儿固须经书读\n女孩儿读书也应该\n只恨我爹爹太固执\n终于留下小九妹',
          fengmian: require('../../../res/36.jpg'),
          mp3: require('../study/梁祝.mp3')
        },
        {
          id: 3,
          title: '盘妻索妻',
          content: '极目云山拥翠微，遍地芳草碧如茵，新黄嫩绿柳含烟，',
          listener: '12112人唱过',
          image:
            'https://s.piaoimg.com/2019/09/18085431YmQ3.jpg?x-oss-process=image/resize,w_600',
          detail:
            '娘子的为人真古怪\n好似庙中的观音泥呀菩萨\n任凭我千言万语去劝慰\n她对我何曾说过三啊句话\n思亲守孝虽伤泣\n又何至愁肠不能解\n难道她另外有隐情\n难道我何处得罪了她\n今日是中秋逢佳节\n请娘子园中同来赏月华\n若能够解得娘子心中愁\n就是万苦千难我也愿受下',
          fengmian: require('../../../res/35.jpg'),
          mp3: require('../study/盘妻索妻.mp3')
        },
        {
          id: 4,
          title: '红楼梦',
          content: '红楼今犹在，唯有风月鉴空。',
          listener: '17758人唱过',
          image:
            'https://img2.baidu.com/it/u=2932484343,1004633708&fm=26&fmt=auto&gp=0.jpg',
          detail:
            '林妹妹 好妹妹\n今天是从古到今 天上人间\n是第一件称心满意的事啊\n林妹妹 妹妹呀\n我合不拢笑口将喜讯接\n数遍了指头把佳期待\n总算是东园桃树西园柳\n今日移向一处栽\n我此生得娶林妹妹\n心如灯花并蕊开\n往日病愁一笔勾\n今后乐事无限啊美\n从今后 与你春日早起摘花戴\n寒夜挑灯把谜猜\n添香并立观书画\n步月随影踏苍台\n从今后俏语娇音满室闻\n如刀断水分不开\n这真是银河虽阔终有渡\n牛郎织女七夕会呀',
          fengmian: require('../../../res/37.jpg'),
          mp3: require('../study/红楼梦.mp3')
        },
        {
          id: 5,
          title: '追鱼',
          content:
            '碧波潭微波荡漾，桂花金黄影横窗。空对此一轮明月，怎奈我百转愁肠。',
          listener: '9846人唱过',
          image:
            'https://img1.baidu.com/it/u=4103620704,420644192&fm=26&fmt=auto&gp=0.jpg',
          detail:
            '夫妻携手往前行\n一路之上看花灯\n大街小巷锣鼓喧\n万户千门弦管声\n莫道去年风景好\n今年的灯儿色色新\n这厢是狮子滚球遍地锦\n那厢是二龙戏珠满街星\n双双蝴蝶迎风飞舞\n对对鸳鸯比翼交腾\n脚踏莲花是慈悲佛\n手抱琵琶是那王昭君\n满街灯花看不尽\n回头再往内街行',
          fengmian: require('../../../res/39.jpg'),
          mp3: require('../study/追鱼.mp3')
        },
        {
          id: 6,
          title: '血手印',
          content: '含泪饮过三杯酒，酒虽尽来我泪还流。',
          listener: '13663人唱过',
          image:
            'https://tse1-mm.cn.bing.net/th/id/R-C.082d8064d952e497d93f04f574d48e72?rik=uSPtgpYw8d4jEQ&riu=http%3a%2f%2fimg.ivsky.com%2fimg%2ftupian%2fpre%2f201102%2f21%2fyueju_xueshouyin_wutaijuzhao-002.jpg&ehk=7XPRjB7Vz3tauzvNDKG4Nyn6Q9%2buIAio4VfdtniFVCI%3d&risl=&pid=ImgRaw&r=0',
          detail:
            '林王两家本有亲\n招得与小姐早联姻\n只为近年我家贫\n那王春势利要赖婚\n那天我郊外放风筝\n花园里巧遇王千金\n相见不忘夫妻情\n约我取银在三更\n我夜半摸黑进园去\n不知何人杀雪春\n跌在尸上惊在心\n浑身鲜血染衣襟\n慌乱匆忙回家行\n敲门贴上血手印\n句句言语都是真\n还望大人审冤情\n',
          fengmian: require('../../../res/38.jpg'),
          mp3: require('../study/血手印.mp3')
        }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Top icon1="arrow-back" title="单人练唱" />
        <View style={{ paddingBottom: 1, flex: 1 }}>
          {/* <View style={{ flexDirection: "row", backgroundColor: "white", height: pxToDp(35), alignItems: "center", borderRadius: pxToDp(16) }}>
                        <Text style={{ marginLeft: pxToDp(20), fontSize: pxToDp(14) }}>搜索</Text>
                        <TextInput style={{ marginLeft: pxToDp(5), width: pxToDp(290) }}
                            placeholder="" />
                    </View> */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginBottom: pxToDp(10) }}>
              {this.state.products.map((item, index) => (
                <TouchableNativeFeedback
                  onPress={() => this.context.navigate('Details', item)}
                >
                  <View style={styles.box}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.image }}
                    ></Image>
                    <View
                      style={{
                        marginTop: pxToDp(10),
                        marginBottom: pxToDp(10),
                        justifyContent: 'space-between'
                      }}
                    >
                      <Text style={styles.text1}>{item.title}</Text>
                      <Text style={styles.text2}>{item.content}</Text>
                      <Text style={styles.text3}>{item.listener}</Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderRadius: pxToDp(8),
    elevation: 2,
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: pxToDp(8),
    marginRight: pxToDp(16),
    marginLeft: pxToDp(16),
    marginTop: pxToDp(8)
  },
  image: {
    height: pxToDp(110),
    width: pxToDp(90),
    borderRadius: pxToDp(8),
    margin: pxToDp(8)
  },
  text1: {
    fontSize: pxToDp(18),
    color: '#000000',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: pxToDp(14),
    color: '#333333',
    width: pxToDp(230)
  },
  text3: {
    fontSize: pxToDp(12),
    color: '#666666'
  }
});
export default Index;
