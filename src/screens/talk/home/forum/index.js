import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Tiebar from './luntan';
import { NavigationContext } from '@react-navigation/native';
import { getMomentListByStatus } from '@service/moment';
import Addmoment from './addMoment';
import EZSwiper from 'react-native-ezswiper';
const images = [
  {
    uri: 'http://img05.lantingyahui.com/Img05/49/99/30/9e791ddb-a31e-4687-bf71-f21695d302df.jpg'
  },
  {
    uri: 'http://img03.lantingyahui.com/Img03/79/30/34/3f1ff8ca-2a76-4d9b-88a2-21e6498816b6.jpg'
  },
  {
    uri: 'http://img04.lantingyahui.com/Img04/44/03/69/36c6859e-3854-4b33-9863-d7da7666c5f5.jpg'
  }
];
const { height, width } = Dimensions.get('window');
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      field: [
        {
          id: '1',
          text: '#第一次听戏',
          number: '1708',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F25%2F78%2F5bac5c99e2e2a.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867219&t=f380b82b82f03b4183c07e61ca871e3c',
          detail:
            '第一次看的是梁祝，梁山伯和祝英台,看完电影本来第一感觉想说他们的故事凄而不美,因为结局不美,很凄凉,很凄惨,可是他们之间的爱情又是那么的美。凄美,哀婉,这两个词用来形容他们的爱情,好像已经用的俗了,可是好像又找不到其他更合适的词,只觉得它们是那么的贴切。而他们的化蝶,令他们的爱情变得更凄美。如果他们的爱情传说是真的(我愿意相信是真的),这个化蝶有点玄,可是如果在这样的场景下,我觉得还是有可能的:在梁山伯和祝英台双双死去后,他们的坟头上有一对蝴蝶萦绕,翩翩飞舞,我相信万物都是有灵性的,不止我们人类对梁山伯和祝英台的不幸遭遇慨叹,蝴蝶也叹,故而在他们的坟前久久盘旋,不愿离去,而人们看到此情此景,一来对他们的遭遇充满同情,二来又希望这对蝴蝶就是他们的化身,期盼他们死后可以得偿所愿,如那双蝴蝶一般自由自在的在一起,化蝶之说也许就由此而来也不一定。\n然而如果抛开化蝶之说,梁山伯和祝英台之间是以彻底的悲剧收场的,山伯被打成重伤,最终不治而亡,看到这里,我突然想起红楼梦里那个和薛蟠争英莲(香菱)而屈死的冯渊,竟觉得两人的命运有些相似,同样是面对权贵据理力争,却只能以悲剧收场,如若没有化蝶之说,梁山伯和冯渊又有何不同?在祝府及薛蟠之类人的眼里,贫寒之人命如草芥,故事里有上天给梁山伯申冤,可是故事外又有谁给他们申冤呢?可是倘若没有这化蝶的传说,我们从这个故事里看到的就只有令人窒息的悲凉了,而非现在的怀抱希望,安迪(肖申克救赎)说怀抱希望是一件美好的事情,也许是最好的事,有了希望,人们才有继续前行的勇气,倘若你眼中看到的都是一片灰暗那么又怎么有勇气继续走下去呢其实有时候如果你坚持下去会发现其实生活也没有你想象的那么糟美好的事情还是比较多的也是可以通过自己创造的。\n几番唏嘘,几番慨叹,我想我们都应该庆幸我们现在生活在一个相对自由的时代,我想这也是梁祝这个故事作者的初衷,不过我在想有时候是会发生一些很奇迹的事情的,尽管知道化蝶的可能性低的惊人,可我还是愿意相信,希望有情人终成眷属,像所有的童话故事结局一样,王子和公主过上了幸福的生活!'
        },
        {
          id: '2',
          text: '#再忆王文娟',
          number: '130199',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mianfeiwendang.com%2Fpic%2F95773e4129b6446a7711a3fd9e413107aae15567%2F1-810-jpg_6-1440-0-0-1440.jpg&refer=http%3A%2F%2Fwww.mianfeiwendang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867284&t=ee820d8f13574c0a4707b8745ffa490d',
          detail:
            '越剧表演艺术家、越剧一代宗师王文娟走了。2021年8月6日零时25分，王文娟因病在上海华东医院去世，享年95岁。\n“天上掉下个林妹妹，似一朵轻云刚出岫”。因为一部越剧电影《红楼梦》，几乎全国的观众都认识了王文娟，而王文娟，也因此成为了戏曲舞台上林黛玉的代言人。作为越剧“王派”花旦创始人，她在舞台上留下了各种性格鲜明的舞台形象，也成为越剧界的“性格演员”。王文娟和另一位越剧宗师徐玉兰的“徐王组合”是越剧界最著名也最受欢迎的艺术搭档之一，而王文娟和电影艺术家孙道临的婚姻也始终是文艺界的一段佳话。\n记者获悉，王文娟虽然年过九旬，但前几年一直身体健朗，风姿绰约、神思清明。去年过年前，王文娟因为发烧咳嗽住进华东医院，此后疫情期间一直住院治疗，无法探视。一年多来，王文娟的身体状况每况愈下，从今年开始，几次因肺部等问题出现病危。8月6日，王文娟最终走完了自己95岁的人生历程。\n王文娟在舞台上留下了太多中国女性形象。她是舞台上的林黛玉，也曾经是《追鱼》里的鲤鱼精、《孟丽君》中的孟丽君，她还是《春香传》里的春香、《西厢记》的中崔莺莺、《西园记》中的王玉贞、《关汉卿》中的朱帘秀…\n“台下做人要简单些，台上演戏要复杂些”，这是王文娟一生的信条。'
        },
        {
          id: '3',
          text: '#心目中的Top1',
          number: '303',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew13.photophoto.cn%2F20190116%2Fsecaijianbianxiaoqingxinshejijianyuehaibaobeijing-32355330_1.jpg&refer=http%3A%2F%2Fpicnew13.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867331&t=4185ef7ea0a06a45306ef8a0b8f95899',
          detail:
            '个人认为（中生代）：唱功最好的各流派花旦为，袁派：陶琪，傅派：何英，戚派：金静，王派：李敏、王志萍，张派：何赛飞，吕派：吴素英，金派：谢群英，无派者：王滨梅。其中，我最喜欢的是李敏。'
        },
        {
          id: '4',
          text: '#剧本观后感',
          number: '32',
          img: 'https://img1.baidu.com/it/u=931923788,4075714914&fm=26&fmt=auto&gp=0.jpg',
          detail:
            '祝英台出身名门大户，无忧无虑，清纯有加，活泼亲和，却不习女红，不善礼节，不通琴棋书画。那时的她，喜欢抓来蝴蝶，攀上屋檐远眺。英台在去书院读书之前一直是唯父母之命是从。祝母嫌英台走路大摇大摆有违女子礼节，便命下人用短绳绑住祝英台的双腿，用以限制英台的走路步幅，但没想到，这样一来，英台走起路来像个机器人一样，更加难看。看似逗笑幽默的桥段，从更深层来讲，它突出了祝英台与封建社会的矛盾与对立。\n“不管多么开心都好，千万不要变实。”\n初到崇绮书院，正值阳春三月，山中莺飞草长，落英缤纷。学生们白衣胜雪，端坐在山坡下的空地里由夫子指点琴艺。夫子批评梁山伯“只有琴音，全无神绪”，而山伯却不知情为何物。夫子滔滔不绝，忽然山路上的一行人引过所有学生的目光，镜头随着梁山伯的视角移动而移动，梁祝二人目光交汇。此时此刻，你们可否能知今后那惊心动魄的爱恋，一切早已注定。文库巧遇，不打不相识，友谊初成；敲钟时的互扮鬼脸；同床共寝的嬉笑怒骂；帮英台作弊、陪英台秉烛复习……终成知己。\n东晋时期，门第风气极盛。白衣僧人若虚在青山碧水间轻描淡写说出来的话却正是那个时代所有有情人的悲哀。上一代的情感悲剧也暗暗预示着梁祝二人的悲剧结局。祝母在年轻时也曾在书院与男子相爱，而结局是嫁入祝家。但是她不但没有因自己的遭遇同情女儿，反而处处阻挠，不敢反抗自己内心对封建思想的恐惧。这更是一种悲哀。\n“我早知道我抱着的不是男孩子……”'
        },
        {
          id: '5',
          text: '#七夕',
          number: '79912',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F61%2F16%2F945b47292be3a73.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867662&t=a010ff43b91886f4438adc77b7d7e3d4',
          detail:
            '有一日，天上的七仙女下凡沐浴。老黄牛心生一计，偷走了仙女七妹的衣服让她无法返回天庭，并趁机撮合牛郎与七妹。\n牛郎与七妹从此过上了男耕女织的幸福生活。可是好景不长，七妹与凡人私定终身的事情被王母娘娘知道了。一怒之下，划出一条银河，将有情人分隔两岸。黄牛含着泪对牛郎说：谢谢你一直以来对我的照顾，我无以为报。请把我杀掉，用我的牛皮做成鞋子，每年的七月七，你就可以踏着归巢的仙鹊，与银河另一端的七妹相会了。'
        }
      ],
      showSharePop: false, //分享弹窗，默认不显示,
      dongtai: [],
      isShow: false //
    };
  }
  componentDidMount() {
    getMomentListByStatus(0, 0, 15).then((res) => {
      this.setState({ dongtai: [...res].reverse() });
    });
  }
  updateList = (newMoment) => {
    this.setState({
      dongtai: [newMoment, ...this.state.dongtai]
    });
  };
  changeVisible = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  renderRow(obj, index) {
    return (
      <View style={styles.cell}>
        <Image
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: undefined,
            height: undefined,
            borderRadius: pxToDp(8)
          }}
          resizeMode={'stretch'}
          source={obj}
        />
      </View>
    );
  }
  onPressRow(obj, index) {
    console.log('点击事件');
  }
  switch = (index) => {
    this.setState({ imgUrl: index });
  };
  openTopic(index) {
    this.context.navigate('Topic', this.state.field[index]);
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
          <Addmoment
            updateList={this.updateList}
            toggleModalProps={this.changeVisible}
            isModalVisible={this.state.isShow}
          />
        </View>
        <ScrollView>
          <View>
            {/*轮播图 */}
            <View>
              <EZSwiper
                style={[
                  styles.swiper,
                  { width: width - 20, height: 180, marginLeft: pxToDp(10) }
                ]}
                dataSource={images}
                width={width - 20}
                height={180}
                renderRow={this.renderRow}
                ratio={0.867}
                loop={true}
                index={0}
                onPress={this.onPressRow}
                autoplayTimeout={2}
              />
            </View>
            {/**话题 */}
            <Text
              style={{
                fontSize: pxToDp(18),
                color: '#000000',
                fontWeight: 'bold',
                marginTop: pxToDp(8),
                marginLeft: pxToDp(8)
              }}
            >
              热门话题
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ height: pxToDp(88) }}
            >
              {this.state.field.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.openTopic(index)}
                  style={{
                    marginLeft: pxToDp(8),
                    marginTop: pxToDp(8),
                    width: pxToDp(150),
                    height: pxToDp(72),
                    borderRadius: pxToDp(8)
                  }}
                >
                  <View>
                    <ImageBackground
                      source={{ uri: item.img }}
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'black',
                        borderRadius: pxToDp(8)
                      }}
                      imageStyle={{ borderRadius: pxToDp(8) }}
                    >
                      <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>
                        {item.text}
                      </Text>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={{ marginTop: pxToDp(-16) }}>
              {/* 下方文章 */}
              <Tiebar dongtai={this.state.dongtai} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: pxToDp(130),
    backgroundColor: 'transparent'
  },
  swiper: {
    backgroundColor: '#f1f1f1',
    width: pxToDp(345)
  },
  cell: {
    //backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Index;
