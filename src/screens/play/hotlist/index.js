import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Svg from 'react-native-svg-uri';
import { jinpai, yinpai, tongpai } from '../../../component/common/iconSvg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      book: [
        {
          id: '4', drama: 'Drama7',
          title: '皇帝与村姑',
          context:
            '在兵荒马乱的年代里，镇海县张家村一个善良纯朴的姑娘张帏君冒死解救了一个落难壮士——皇储康王的性命。',
          path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.nbwhg.com%2Fsources%2F201205%2F20120515093703202.jpg&refer=http%3A%2F%2Fwww.nbwhg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631845021&t=83795b61c75cfb594d0de04a246923f5'
        },
        {
          id: '5', drama: 'Drama8',
          title: '柳永',
          context:
            '科举落第之后，柳永过着尤红殢翠、耽溺诗酒的放浪生涯，一封妻子的书信敦促他谨记十年前离乡别井的初衷，他悔恨交加，立志科场进取。后虽再试中榜，却因《鹤冲天》一词冒犯朝廷而又落第，悲愤之余的柳永，无奈地自嘲自己为“奉旨填词柳三变”。',
          path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs8.sinaimg.cn%2Fmw690%2F70a539f8td22e49412707%26690&refer=http%3A%2F%2Fs8.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631845073&t=27c92ec5634a5d07d31bec43d2226037'
        },
        {
          id: '6', drama: 'Drama9',
          title: '蝴蝶梦',
          context:
            '《蝴蝶梦》是我国首部水墨越剧电影，在嵊州市首映后取得观众的一致好评。剧中以庄周试妻的情节，摒弃了以往男尊女卑、女人是祸水的封建思想，而且注入了许多的女性人文关怀，强烈地突出了以田秀为代表的中国古代女子自尊自强、追求人格独立的精神。',
          path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Faliimg.changba.com%2Fcache%2Fphoto%2F5015c188-0135-40ec-8d9d-f87fe59640ea_640_640.jpg&refer=http%3A%2F%2Faliimg.changba.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631845182&t=977d92f07f25469a9b720704f6c3d6b0'
        },
        {
          id: '7', drama: 'Drama10',
          title: '北地王',
          context:
            '历史剧。庄志1957年编剧。该剧取材于古典小说《三国演义》，在原玉兰剧团《国破山河在》剧本基础上，参考川、京、湘、汉等剧种的剧本改编而成。写魏军攻蜀，蜀后主刘禅沉溺酒色，不听其子北地王刘谌劝谏，决意降魏。刘谌悲愤回宫，其妻知情，伏剑殉国；刘谌杀子，继赴祖庙，哭告先帝后自刎。',
          path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdaily.cnnb.com.cn%2Fnbwb%2Fimages%2F2013-05%2F11%2FA14%2FNBWB20130511A14b001.jpg&refer=http%3A%2F%2Fdaily.cnnb.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631845596&t=8a01b813b8c85937188f6e1ff4763d25'
        },
        {
          id: '8', drama: 'Drama11',
          title: '甄嬛',
          context:
            '越剧《甄嬛》是由时任上海越剧院院长的李莉根据小说《甄嬛传》改编的连台本越剧，分上下两本推出。上本由年轻演员担纲：李旭丹饰甄嬛、杨婷娜饰皇帝、王清饰清河王、史燕彬饰沈眉庄、王柔桑饰温实初、裘丹莉饰华贵妃、陈慧迪饰安 陵容、王婕饰槿汐。下本则由中生代明星领衔：王志萍饰甄嬛、钱惠丽饰皇帝、黄慧饰清河王、陈颖饰华贵妃',
          path: 'https://img1.baidu.com/it/u=4190329434,4054880381&fm=26&fmt=auto&gp=0.jpg'
        },
        {
          id: '9', drama: 'Drama12',
          title: '早春二月',
          context:
            '萧涧秋，一位身怀抱负的小学教员，热切地爱恋着活泼秀美的少女陶岚，但同时又深深同情孤独无援的寡妇文嫂，为帮助她毅然放弃自己的幸福……',
          path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11201662533%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631845801&t=1072b911f59dc57c96f68a9c4ec568b1'
        },
        {
          id: '10', drama: 'Drama13',
          title: '家',
          context:
            '根据巴金同名小说改编。新编现代越剧《家》，是上海越剧院为庆贺我国当代文学巨匠巴金百年诞辰耳精心策划、制作的一部成功剧目。',
          path: 'https://imagepphcloud.thepaper.cn/pph/image/127/794/887.jpg'
        }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <ScrollView
        style={{ backgroundColor: 'white', flex: 1}}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={require('../../../res/jfbg.jpg')}
          style={{ height: pxToDp(150) }}
        >
          <TouchableOpacity
            onPress={() => this.context.goBack()}
            style={{ marginLeft: pxToDp(10), marginTop: pxToDp(10) }}
          >
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.paihang}>排行榜</Text>
            <Text style={{ fontSize: pxToDp(14), color: 'white' }}>
              以近7天的剧本点击阅读量为准
            </Text>
          </View>
        </ImageBackground>
        {/**榜单第一 */}
        <View style={styles.box}>
          <TouchableNativeFeedback onPress={() => this.context.navigate('Drama4')}>
            <View style={styles.bookbooton}>
              <Image
                style={styles.bookimage1}
                source={{
                  uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage8.pinlue.com%2Fimg3%2Ftu_jpg%2FksnrPhRhOUPIvAqAbKCblUE58P73JL45ksk6RoStOt1QqsyGRULuDNlm589MJep46BicicicnEeYd9uoxplOgImkg%2F640.jpeg&refer=http%3A%2F%2Fimage8.pinlue.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631837799&t=26164c70c17997051e585d51c8be88fd'
                }}
              />
              <View style={{ width: pxToDp(220) }}>
                <View style={styles.booktitle}>
                  <Text style={[styles.booktitle3,{marginBottom:pxToDp(8)}]}>红楼梦</Text>
                  <Svg width="32" height="32" svgXmlData={jinpai} />
                </View>
                <Text
                  style={{ fontSize: pxToDp(14), marginLeft: pxToDp(10),color:'#666666'}}
                  numberOfLines={3}
                >
                  新版越剧《红楼梦》创作于1999年，首演于同年8月。它从调整戏剧结构入手，别样营造大悲大喜、大实大虚的舞台意境，并提高舞美空间层次，丰富音乐形象，整合流派表演，精缩演出时间，实现了一次富有创意的新编。
                </Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={{ marginLeft: pxToDp(28), marginRight: pxToDp(10) }}>
          {/*榜单第二 */}
          <TouchableNativeFeedback
            useForeground={true}
            onPress={() => this.context.navigate('Drama5')}>
            <View style={{ marginTop: pxToDp(56), flexDirection: 'row' }}>
              <Image
                style={{
                  height: pxToDp(110),
                  width: pxToDp(95),
                  borderRadius: pxToDp(8)
                }}
                source={{
                  uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fweixin.sanbiaoge.com%2Fcunchu5%2F2021-03-05%2F6_16149534226318178.jpg&refer=http%3A%2F%2Fweixin.sanbiaoge.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631837861&t=bccaf84652f1353d90b378e7225577c7'
                }}
              />
              <View style={{ width: pxToDp(220) }}>
                <View style={styles.booktitle}>
                  <Text style={[styles.booktitle3,{marginBottom:pxToDp(8)}]}>碧玉簪</Text>
                  <Svg width="32" height="32" svgXmlData={yinpai} />
                </View>
                <Text
                  style={{ fontSize: pxToDp(14), marginLeft: pxToDp(10),color:'#666666' }}
                  numberOfLines={3}
                >
                  《碧玉簪》讲述了王玉林得尚书李廷甫赏识，获许配廷甫女秀英为妻。秀英的表兄顾文友因妒生恨，骗取秀英的碧玉簪放进伪造情书里，诬陷秀英与他有染。最终玉林送凤冠请罪，夫妇冰释前嫌。
                </Text>
              </View>
            </View>
          </TouchableNativeFeedback>
          {/*榜单第三 */}
          <TouchableNativeFeedback
            useForeground={true}
            onPress={() => this.context.navigate('Drama6')}>
            <View style={{ marginTop: pxToDp(16), flexDirection: 'row' }}>
              <Image
                style={{
                  height: pxToDp(110),
                  width: pxToDp(95),
                  borderRadius: pxToDp(8)
                }}
                source={{
                  uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F10088823340%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631837909&t=641368304e82a93e756196f93fd1d805'
                }}
              />
              <View style={{ width: pxToDp(220) }}>
                <View style={styles.booktitle}>
                  <Text style={[styles.booktitle3,{    marginBottom:pxToDp(8)}]}>周仁哭坟</Text>
                  <Svg width="32" height="32" svgXmlData={tongpai} />
                </View>
                <Text
                  style={{ fontSize: pxToDp(14), marginLeft: pxToDp(10) ,color:"#666666"}}
                  numberOfLines={3}
                >
                  《周仁哭坟》越剧折子戏，选材自京剧《周仁献嫂》。由朱福侠编导。《周仁哭坟》一折专为《吴凤花越剧舞台艺术风采》专场表演而编写排演，集中演绎周仁在其妻坟前哭诉冤屈的情绪。
                </Text>
              </View>
            </View>
          </TouchableNativeFeedback>
          {/*剩下7个书 */}
          {this.state.book.map((item) => (
            <TouchableNativeFeedback
              useForeground={true}
              onPress={() => this.context.navigate(item.drama)}>
              <View style={{ marginTop: pxToDp(16), flexDirection: 'row' }}>
                <Image
                  style={{
                    height: pxToDp(110),
                    width: pxToDp(95),
                    borderRadius: pxToDp(8)
                  }}
                  source={{ uri: item.path }}
                />
                <View style={{ width: pxToDp(220) }}>
                  <View style={styles.booktitle2}>
                    <Text style={styles.booktitle3}>{item.title}</Text>
                    <Text style={{ fontSize: pxToDp(16) }}>{item.id}</Text>
                  </View>
                  <Text
                    style={{ fontSize: pxToDp(14), marginLeft: pxToDp(10),color:"#666666",marginTop:pxToDp(12)}}
                    numberOfLines={3}
                  >
                    {item.context}
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
        <View style={{marginBottom:pxToDp(16)}}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginLeft: pxToDp(30)
  },
  paihang: {
    fontSize: pxToDp(20),
    fontWeight: 'bold',
    color: 'white'
  },
  box: {
    height: pxToDp(100),
    width: pxToDp(350),
    marginTop: pxToDp(-70),
    alignSelf: 'center',

  },
  bookbooton: {
    height: pxToDp(110),
    width: pxToDp(350),
    backgroundColor: 'white',
    borderRadius: pxToDp(8),
    marginTop: pxToDp(30),
    elevation: 5, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8), //  圆角,
    flexDirection: 'row'
  },
  booktitle: {
    width: pxToDp(200),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: pxToDp(10),
    marginLeft: pxToDp(10)
  },
  bookimage1: {
    height: pxToDp(120),
    width: pxToDp(95),
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(10),
    marginTop: pxToDp(-20)
  },
  booktitle2: {
    width: pxToDp(190),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: pxToDp(10),
    marginLeft: pxToDp(10)
  },
  booktitle3: {
    fontSize: pxToDp(16),
    fontWeight: 'bold',

  },
  imgbox: {
    height: pxToDp(120),
    width: pxToDp(95),
    marginLeft: pxToDp(-8),
    borderRadius: pxToDp(8)
  },
  text:{ fontSize: pxToDp(14), marginLeft: pxToDp(10) }
});
export default Index;
