import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Icon from 'react-native-vector-icons/AntDesign';
import Top from '@components/common/top';
import { NavigationContext } from '@react-navigation/native';
import { dianzan } from '../../../../component/common/iconSvg';
import SvgUri from 'react-native-svg-uri';
class Index extends PureComponent {
  state = {
    like: true,
    alike: true,
    blike: true
  };

  rendertouch1 = () => {
    const { like } = this.state;
    this.setState({ like: !like });
  };

  rendertouch2 = () => {
    const { alike } = this.state;
    this.setState({ alike: !alike });
  };

  rendertouch3 = () => {
    const { blike } = this.state;
    this.setState({ blike: !blike });
  };
  static contextType = NavigationContext;
  render() {
    const { like, alike, blike } = this.state;
    return (
      <View style={{ backgroundColor: '#ecf6fc', flex: 1 }}>
        <Top icon1="arrow-back" title="庵堂认母" />
        <View style={{ padding: pxToDp(10) }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollbars="none"
            style={{}}
          >
            <View>
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                庵堂认母
              </Text>
            </View>
            <Text
              style={{
                marginTop: pxToDp(10),
                fontSize: pxToDp(17),
                marginBottom: pxToDp(10)
              }}
            >
              徐元宰演子，王志贞演母
            </Text>
            <View>
              <Image
                style={{
                  width: '100%',
                  height: pxToDp(200),
                  borderRadius: pxToDp(8)
                }}
                source={require('../../../../res/play/fengmian2.jpg')}
              />
            </View>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              哎呀，她若不是我娘，神态怎会如此？嗯，待我再来试探于她。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              抬头望见一盏灯，高高挂起亮晶晶。不知此灯有何用？要请师太说分明。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（唱）</Text>:
              此灯名叫琉璃灯，悬挂佛前日夜明。前世里点过琉璃灯，今世生对好眼睛。前世未点琉璃灯，眼睛模糊看不清。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（唱）</Text>:
              恨只恨我前世未点琉璃灯，只落得今世不生好眼睛。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（唱）</Text>:
              你眼睛黑白分明无疾病，为何说前世未点过琉璃灯？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（唱）</Text>:
              我若是点过琉璃灯，为什么自己的亲娘也认不清？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（唱）</Text>:
              你今已把解元中，怕只怕令堂见你认不清。不知她是哪里人，她是富来还是贫？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（唱）</Text>:
              不知她是那里人，只知她不富不贫她也是一个出家人。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              哎呀，取笑了，取笑了！罗汉堂已到，解元公请进！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              同进！师太，这两边就是罗汉菩萨吗？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 正是的！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              这罗汉菩萨有什么用处？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              数罗汉可以问你流年吉凶祸福。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              啊！是怎样的数法，请师台替我数上一数！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              你今年是十六岁了？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 你倒没有忘记！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              啊！你方才也曾说过呀！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 噢！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              啊解元公，不知你是哪只脚先进来的？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              我是……，啊啊，我是左脚先进的。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              啊，待我数来。一五，一九，十五，十六！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 师太！师太！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（唱）</Text>:
              数到这长眉大仙我心头惊，突然间想起郎君申贵升。他二人先后数罗汉，数的菩萨同一尊。可怜把郎君永埋黄泉下，娇儿成了梦中人。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              师太！师太为何啼哭？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              噢噢，未曾啼哭，我在念经！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 念什么经？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 念罗汉经。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              原来这数罗汉还要念罗汉经？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              要念经！要念经！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 为何不数下去？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              就是这尊长眉大仙。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              长眉大仙为何发笑啊？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 啊，他在笑你！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 笑我甚么呀？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              他笑你一榜解元中得早，聪明伶俐天分高。若是上京去应考，定然是三鼎甲上独占螯。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              师太呀，我看他是在嘲笑我的！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 嘲笑你什么呀？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 师太！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              他笑我自己身世不知晓，亲生娘亲把我抛。劬劳大恩不能报，
              枉在金榜把名标。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              他笑你是个好的！你是个好的！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              我看他……，他在笑你！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              啊？笑我什么呀？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 师太听！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              他笑你六根清静修行早，古井不波七情消。满腹天机不泄露，看破红尘道行高。铁树开花心不动，天崩地裂志不摇。你千好万好你处处好，只有那记性不大牢。你把那“未末酉初”全忘掉。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 啊！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（唱）</Text>:
              还有那“士心卜贝”你也一旦抛。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（唱）</Text>:
              他把那血书字迷说出唇，果然是娇儿到庵门。我有心上前把娇儿认，忽想起我是佛门修行人。苦只苦出家人不准恋红尘，恨只恨尼姑不准有儿孙。今日我若把儿认，大祸立刻要临身。大街小巷都谈论，施主们乱棒赶我出庵门。那时我手拿讨饭棒一根，东藏西躲难容身。后跟儿童一大群，他指着笑着说这尼姑有情人。我若不把娇儿认，怎奈我儿太伤心。儿到跟前怎不认？十六年想儿到如今。我若今日把儿认，儿在世上难容身。私生的儿子被人笑，尼姑的儿子丑十分。亲戚朋友不理睬，徐家不让他进门。考场不准他去进，枉在寒窗读诗文。我儿才高前程大，认儿反倒害儿身。罢罢罢咬紧牙关狠狠心，满腔热泪痛在心。非是为娘不认你，儿啊，为的是我儿在世好做人。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>:
              解元公所言，贫尼不解。时候不早，请你快回去吧！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 啊！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              她居然如今不肯认，我断定她是我娘亲。常言道柿树本是黑枣根，母子相依骨连筋。天下慈母都爱子，为什么我娘铁了心？母不慈做子的偏要孝，她不认我定要认母亲。不管她心多硬来口多紧，我要把铁杵磨成绣花针。她一日不认我来两回，她两日不认我四回寻。只见她强忍悲痛泪淋淋，难道她回心转意认儿身？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              啊解元公，时候不早，请你快回去吧！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              啊？啊师太，这一尊是什么神？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 这是送子娘娘！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              送子娘娘有什么用处？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              若是谁家缺儿少女，就可在这送子娘娘神前烧香许愿，便可以求男得男，求女得女。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              噢，原来人间生儿育女，都是这位送子娘娘送的吗？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 正是的。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 哼！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              骂一声送子娘娘无情理，你不该乱送孩儿害死人。送官送民全由你，最不该把儿送进庵堂门。你害他少父无母万分苦，都是你送子娘娘丧良心。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（唱）</Text>:
              你为何指定我出家人，害得我母子们两离分？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>: 哎呀解元公！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              你本是读书知礼人，不该随便责怪神。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>:
              时候不早了，贫尼要做功课去了！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              啊师太，这一尊是什么菩萨？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              这是童子拜观音！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              我看他是儿子求母亲！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              是善才童子拜观音！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              是亲生儿子求娘亲！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 啊？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（唱）</Text>:
              这观音泥塑无有心，生下孩儿送出门。被人拾去十六载，错认他人做双亲。那街坊邻舍同窗学友都谈论，都说他本是外姓人。自从他找到血书解破迷，到处奔波寻娘亲。为了寻娘鸡鸣起，严冬寻娘到三春。庵堂禅院都访尽，受尽了辛苦无悔心。今日见了娘的面，千言万语动娘心。谁知母亲心太恨，把儿当做了陌路人！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（唱）</Text>:
              元宰儿句句言语象钢针，刺得我五内俱裂痛万分。左难右难难煞我……
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 啊？师太！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 解元公！啊？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 师太呀！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              我叫叫一声申郎啊申郎，你看元宰孩儿今日来在庵中，口口声声要认娘亲，好不难煞人了！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              可怜我想儿十六载，我很想紧抱娇儿哭一场。恨只恨出家难行俗家事，尼姑有子丑名扬。元宰儿好比鲜花才吐蕊，受不住日晒雨打风又狂。他若认了尼姑母，怕只怕锦绣前程见汪洋。我左难右难无计寻，申郎啊……
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 啊！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>: 听娘言来我心悲伤，
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>: 老娘亲！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 申郎！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 受苦的娘！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              才知道母爱似海洋。是羞是丑我不讲，我与母有罪同受祸同当。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>: 开门来，开门来！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 啊？门外何人？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              娘！啊，师太呀，学生方才言语冒犯师太，特来请罪呀！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              贫尼怎敢罪怪解元？只是佛门清净之地，出言不慎，易生是非。时候不早，请你快回去吧！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              学生要当面请罪，请师太快快开门吧！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              贫尼旧病复发，不能开门，你，你，你请快回去吧！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              如此学生告辞了！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              解元公！解元公！解元公！啊？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              母亲！你可怜孩儿为了寻母，东奔西走，求神问卜，栉风沐雨，受尽辛苦。母亲若念骨肉情分，就请你，你就认了儿吧！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              啊？你，你，你是谁的孩儿？谁是你的母亲？我是尼姑，这是庵堂，你不要胡言乱语，扰乱清规！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              啊，师太，这幅画上他是谁？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 他……，他是神？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 他是哪一尊神？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              他是……，他是无名神。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>:
              我看他不是神，他是我父申……
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>:
              他不是申会升，他不是申会升！哎呀！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（唱）</Text>:
              世上多少姓申人，如何偏说申贵升？无意道破真名姓，贵升定是我父名。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>: 母亲！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              儿手拿血书为凭证，哀求母亲认儿身。劝母亲不必忧虑重，冷言冷语儿当承。怕什么出家难行俗家事，怕什么出身不正误前程？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>: 母亲啊！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              孩儿离娘孩儿苦，娘离孩儿谁照应？我不愿良田有千顷，我不愿金榜双提名。荣华富贵儿不要，儿情愿母子同受贫。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（唱）</Text>:
              听儿言如同春雷动，震得我沉沉大梦猛然醒。方才我被这佛尘念珠迷心窍，迷得我不敢认亲生。我宁愿做人活半日，也不愿做鬼过一生。我把这佛尘念珠念珠佛尘齐抛掉！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>: 元宰！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 母亲！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>王志贞（白）</Text>: 我儿！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>徐元宰（白）</Text>: 娘啊！
            </Text>
            {/* 分界线 */}
            <View
              style={{
                width: pxToDp(350),
                marginTop: pxToDp(20),
                height: pxToDp(1),
                backgroundColor: 'black',
                opacity: 0.2,
                marginBottom: pxToDp(10)
              }}
            />
            <View style={{ marginBottom: pxToDp(120) }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '95%',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{
                      width: pxToDp(40),
                      height: pxToDp(40),
                      margin: pxToDp(5),
                      borderRadius: pxToDp(24)
                    }}
                    source={{
                      uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446'
                    }}
                  />
                  <View>
                    <Text style={{ fontSize: pxToDp(14) }}>越剧小生</Text>
                    <Text style={{ fontSize: pxToDp(13), color: 'grey' }}>
                      12分钟前
                    </Text>
                  </View>
                </View>
                <SvgUri svgXmlData={dianzan} width="15" height="15" />
              </View>
              <Text style={{ marginLeft: pxToDp(50), fontSize: pxToDp(14) }}>
                抬头能和你分享同一个月亮，就很美好
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              backgroundColor: '#fff',
              height: pxToDp(48),
              width: '110%',
              alignItems: 'center',
              flexDirection: 'row',
              position: 'absolute',
              bottom: 70
            }}
          >
            <TextInput
              placeholder="发一条友善的评论"
              style={{
                height: '80%',
                backgroundColor: '#ddd',
                width: '75%',
                marginLeft: pxToDp(20),
                borderRadius: pxToDp(24),
                paddingLeft: pxToDp(10)
              }}
            />
            <TouchableOpacity>
              <Text style={{ marginLeft: pxToDp(20) }}>发布</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
