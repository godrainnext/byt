import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import { FAB } from 'react-native-elements';
import Top from '../../../component/common/top';
import Svg from 'react-native-svg-uri';
import { star, right, enter } from '../../../component/common/iconSvg'

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, image: require('../../../res/红楼梦.png') },
        { id: 2, image: require('../../../res/柳毅传书.png') },
        { id: 3, image: require('../../../res/梁祝.png') },
        { id: 4, image: require('../../../res/则天皇帝.png') },
        { id: 5, image: require('../../../res/祥林嫂.png') },
        { id: 6, image: require('../../../res/孔雀东南飞.png') },
        { id: 7, image: require('../../../res/陆游与唐琬.png') },
      ],
      drama: [
        {
          id: '1', title: "王老虎抢亲", context: "杭州才子周文宾男扮女装于元宵夜游赛月台，遇上兵部尚书之子王天豹出游，王天豹对周文宾惊为天人，强抢回家成亲。周文宾说服王天豹把婚事延至翌日，王天豹为免宾出走，让周文宾和其妹秀英共宿。周文宾与秀英本互相倾慕，被王天豹阻挠，二人遂将计就计，王天豹及他母亲碍于家声，被逼答允周文宾和秀英的婚事。周文宾因祸得福，赢得美人归。",
          path: 'https://tse1-mm.cn.bing.net/th/id/R-C.bbb12009b513a91d9b5a53f70f5a643a?rik=BCiHmNUUN6LAEQ&riu=http%3a%2f%2fms00.mask9.com%2fmt0x0000%2f10380%2fimage%2f201012%2fchinese-qu-yi-wanglaohuqiangqin-still-mask9.jpg&ehk=LfSV9g3Cc9mdQx2f5AlQOowysTWBwdV1MGJc0FR99jY%3d&risl=&pid=ImgRaw&r=0',
          drama: 'Drama15'
        },
        {
          id: '2', title: '柳毅传书', context: '写秀才柳毅赴京应试，途经泾河畔，见一牧羊女悲啼，询知为洞庭龙女三娘，遣嫁泾河小龙，遭受虐待，乃仗义为三娘传送家书，入海会见洞庭龙王。钱塘君惊悉侄女被囚，赶奔泾河，杀死泾河小龙，救回龙女。三娘得救后，深感柳毅传书之义，请乃叔钱塘君作伐求配。柳毅为避施恩图报之嫌，拒婚而归。三娘矢志不渝，偕其父洞庭君化身为渔家父女同柳家邻里相处，与柳毅感情日笃，遂以真情相告。柳毅与她订齐眉之约，结为伉俪。',
          path: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.6kzqtoOCPHzarIgxfrhCrgHaJE?pid=ImgDet&rs=1',
          drama: 'Drama16'
        },
        {
          id: '3', title: '庵堂认母', context: '《庵堂认母》源自越剧传统剧目《玉蜻蜓》，由陈静于1954年根据《玉蜻蜓》中“游庵认母”一折改编。《庵堂认母》作为《玉蜻蜓》剧中的核心场次，人物矛盾集中突出，唱做并重，情节亦相对独立，常作单折演出。',
          path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg0.ph.126.net%2FEgrbkTJBTaSyDbb58PBYKw%3D%3D%2F1058908862403224274.jpg&refer=http%3A%2F%2Fimg0.ph.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632209566&t=1424522e4ec66dc8c0dc790fb844b8ad',
          drama: 'Drama14'
        },
        {
          id: '4', title: '山河恋', context: '春秋时期，梁僖公穷兵黩武，掳曹国美女绵姜为夫人。宰相黎瑟垂涎绵姜姿色，频加挑逗，屡被斥拒，怀恨在心，遂假传书信，召自幼与绵姜相好的纪苏公子进宫私会，以图陷害。幸宫女戴赢从中帮助，方化险为夷。不料绵姜赠纪苏公子凤钗一事为黎瑟侦知，乃怂恿僖公逼问绵姜，又串通纪侯宠妃宓姬潜赴曹国窃取珠凤，加害公子。危急之时，戴赢通过宓姬婢女季娣的帮助，恳托禁军百户长钟兕、申息两人，跋涉关山，历尽艰险，终于在湘灵庙手刃宓姬，解救了绵姜。',
          path: 'https://img1.doubanio.com/pview/drama_subject_poster/median/public/029a00ee1245127.jpg',
          drama: 'Drama17'
        },
      ],
      booksss: [
        { id: '1', title: '桃花扇', path: 'https://img0.baidu.com/it/u=885677152,1556778173&fm=26&fmt=auto&gp=0.jpg' },
        { id: '2', title: '孟丽君', path: 'https://img1.baidu.com/it/u=3087730410,2049393686&fm=26&fmt=auto&gp=0.jpg' },
        { id: '3', title: '忠魂曲', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Faliimg.changba.com%2Fcache%2Fphoto%2F65529f07-49da-4119-b69a-1e96a71b10c7_640_640.jpg&refer=http%3A%2F%2Faliimg.changba.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631801517&t=f78bef4d7daf4f4e23aab33d5bfcb5e1' },
        { id: '4', title: '西园记', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.changingtrip.com%2FAdminEnglish%2Fueditor%2Fasp%2Fupload%2Fimage%2F20190728%2F15642795393824650.jpg&refer=http%3A%2F%2Fwww.changingtrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631801547&t=2e3ff9ae3fea9aa360b584282bddab35' },
        { id: '5', title: '情探', path: 'https://img1.baidu.com/it/u=115829908,4036785447&fm=26&fmt=auto&gp=0.jpg' },
        { id: '6', title: '沙漠王子', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs3.sinaimg.cn%2Fmiddle%2F5f7c87a6x8d49dea713b2%26690&refer=http%3A%2F%2Fs3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631802511&t=97bcf5c96499200fd4d73431edeef1f2' },
      ],
      bookss: [
        { id: '1', title: '蝴蝶梦', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F7846357299%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631802831&t=1db518095090824f7be231a140b4ba58' },
        { id: '2', title: '大观园', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fec4.images-amazon.com%2Fimages%2FI%2F91zgJesc7ML._SL1500_.jpg&refer=http%3A%2F%2Fec4.images-amazon.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631803009&t=e5dc7ecbc4c3b20bc8ad90d36340c526' },
        { id: '3', title: '盘夫索夫', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180601%2F7a52232cee154d8eb4bf42af74974cdc.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631803038&t=52919e84d0a44ddfc8b0a7d0991b79d2' },
        { id: '4', title: '兰花吟', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Faliimg.changba.com%2Fcache%2Fphoto%2F767005742_640_640.jpg&refer=http%3A%2F%2Faliimg.changba.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631803119&t=bdb01364c720f594d79889a28806360a' },
        { id: '5', title: '双烈记', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.rednet.cn%2Fattachment%2F201903%2F14%2F597895_1552565142c4cw.jpg&refer=http%3A%2F%2Fphoto.rednet.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631803151&t=b73506cf0293af69f54b760dca992f8b' },
        { id: '6', title: '月照西厢', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0126%2Fff1137fej00q4oeoe001yc200u000k0g00zk00np.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631803171&t=65db9a07c2c1826ffeb121bb253f1267' },
      ],
      books: [
        { id: '1', title: '白蛇传', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.jiemian.com%2F101%2Foriginal%2F20190926%2F156947704271169000_a580xH.jpg&refer=http%3A%2F%2Fimg2.jiemian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631803219&t=5613a65e16ae516a0d12e22139363de2' },
        { id: '2', title: '沉香扇', path: 'https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/a8014c086e061d95096a1f767bf40ad162d9ca4b.jpg' },
        { id: '3', title: '浪荡子', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg11.360buyimg.com%2FpopWaterMark%2F10402%2F35e21d4b-6ac2-4d01-a551-7a18c7e1bdbf.jpg&refer=http%3A%2F%2Fimg11.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631803283&t=d3d9204e76dca21b0880235aaf5993c9' },
        { id: '4', title: '宝莲灯', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.itc.cn%2Fq_70%2Fimages03%2F20210111%2Fe64c3bf452b547a2afb9fa57c6a1dc67.jpeg&refer=http%3A%2F%2Fp1.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631803304&t=de85194fcf63d4b0459a3c611bb40d12' },
        { id: '5', title: '玉堂春', path: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a8773912b31bb05178ff0161357adab44bede0a4.jpg' },
        { id: '6', title: '杨贵妃', path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.cpfwb.com%2Fforum%2F201602%2F14%2F140143k9519reknwqrr1rw.jpg&refer=http%3A%2F%2Fimg.cpfwb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631803390&t=00ecc2e47b3736de82d0de246d8b2514' },
      ],
    }
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#ecf6fc', flex: 1 }}>
        <Top icon1="arrow-back" title="剧本中心" />
        <ScrollView style={{ flex: 1 }}>
          {/*剧本推荐 */}
          <Text style={{ fontSize: pxToDp(18), color: '#468CD3', fontWeight: 'bold', marginTop: pxToDp(12), marginLeft: pxToDp(16) }}>猜你喜欢</Text>
          {this.state.drama.map((item) => (
            <View style={styles.bookbox}>
              <View style={styles.bookbotton11}>
                <View style={{ marginLeft: pxToDp(120), marginTop: pxToDp(10) }}>
                  <View style={styles.bookinf}>
                    <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold',color:'#333333'}}>{item.title}</Text>
                    <TouchableOpacity onPress={() => this.context.navigate(item.drama)} >
                      <Svg width="32" height="32" svgXmlData={right} />
                    </TouchableOpacity>
                  </View>
                  <Text numberOfLines={2} style={{color:'#666666',fontSize:pxToDp(14)}}>{item.context}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  </View>
                </View>
              </View>
              <View style={styles.book1}>

                <Image style={styles.bookimage1} source={{ uri: item.path }} />

                <View style={{ height: pxToDp(104), width: pxToDp(4), backgroundColor: 'lightgrey', borderTopRightRadius: pxToDp(8), borderBottomRightRadius: pxToDp(8) }}>
                  <View style={{ flexDirection: 'row', marginTop: pxToDp(20) }}>
                    <Svg width="20" height="20" svgXmlData={star} />
                  </View>
                </View>
              </View>
            </View>
          ))}
          {/*介绍 */}
          <View>
            <Text style={{ fontSize: pxToDp(18), color: '#000000', fontWeight: 'bold', marginTop: pxToDp(12), marginLeft: pxToDp(8) }}>他山之石</Text>
            <ImageBackground style={styles.shujia1} source={require('../../../res/短书架.png')}>
              <ScrollView horizontal={true}>
                {this.state.booksss.map((item) => (
                  <View style={styles.books}>
                    <Image style={styles.booksimage} source={{ uri: item.path }} />
                    <View style={styles.bookstext}>
                      <Text>{item.title}</Text>
                      <TouchableOpacity>
                        <Svg width="20" height="20" svgXmlData={enter} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </ImageBackground>
            <ImageBackground style={styles.shujia1} source={require('../../../res/短书架.png')}>
              <ScrollView horizontal={true}>
                {this.state.bookss.map((item) => (
                  <View style={styles.books}>
                    <Image style={styles.booksimage} source={{ uri: item.path }} />
                    <View style={styles.bookstext}>
                      <Text>{item.title}</Text>
                      <TouchableOpacity>
                        <Svg width="20" height="20" svgXmlData={enter} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </ImageBackground>
            <ImageBackground style={styles.shujia1} source={require('../../../res/短书架.png')}>
              <ScrollView horizontal={true}>
                {this.state.books.map((item) => (
                  <View style={styles.books}>
                    <Image style={styles.booksimage} source={{ uri: item.path }} />
                    <View style={styles.bookstext}>
                      <Text>{item.title}</Text>
                      <TouchableOpacity>
                        <Svg width="20" height="20" svgXmlData={enter} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </ImageBackground>
          </View>
          {/**书架 */}
          <Text style={{ fontSize: pxToDp(18), color: '#000000', fontWeight: 'bold', marginLeft: pxToDp(8), marginBottom: pxToDp(12) }}>永恒经典</Text>
          <ImageBackground style={{ height: pxToDp(385), width: '100%' }} source={require('../../../res/书架.png')}>
            <ScrollView horizontal={true}>
              {this.state.data.map((item) => (
                <View style={styles.shujia}>
                  <Image style={styles.book} source={item.image} />
                </View>
              ))}
            </ScrollView>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    fontSize: pxToDp(20),
    fontWeight: 'bold',
    marginTop: pxToDp(4),
    marginLeft: pxToDp(10)
  },
  botbox: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: pxToDp(0.5),
    margin: pxToDp(10),
    height: pxToDp(140)
  },
  text2: {
    marginTop: pxToDp(10),
    fontSize: pxToDp(18),
    fontWeight: 'bold'
  },
  image: {
    height: pxToDp(120),
    width: pxToDp(120),
    borderRadius: pxToDp(8)
  },
  text3: {
    fontSize: pxToDp(14),
    marginTop: pxToDp(8),
    width: pxToDp(220)
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  book: {
    height: pxToDp(322),
    width: pxToDp(83),
    borderRadius: pxToDp(8)
  },
  shujia: {
    height: pxToDp(322),
    width: pxToDp(83),
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(10),
    elevation: 8, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8), //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
  },
  book1: {
    marginTop: pxToDp(-130),
    marginLeft: pxToDp(12),
    height: pxToDp(120),
    width: pxToDp(100),
    borderRadius: pxToDp(8),
    elevation: 8, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8), //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookbox: {
    height: pxToDp(130),
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8),
    marginTop: pxToDp(12)
  },
  bookbotton: {
    height: pxToDp(100),
    backgroundColor: 'white',
    borderRadius: pxToDp(8),
    marginTop: pxToDp(32),
  },
  bookinf: {
    flexDirection: 'row',
    width: pxToDp(220),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bookimage1: {
    height: pxToDp(120),
    width: pxToDp(100),
    borderRadius: pxToDp(8)
  },
  shujia1: {
    height: pxToDp(185),
    width: '100%',
    marginTop: pxToDp(12)
  },
  books: {
    height: pxToDp(150),
    width: pxToDp(95),
    backgroundColor: 'white',
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(8),
    elevation: 8,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black',  //  阴影颜色
    shadowRadius: pxToDp(8),  //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1
  },
  booksimage: {
    height: pxToDp(120),
    width: pxToDp(95),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
  bookstext: {
    flexDirection: 'row',
    alignItems: 'center',
    width: pxToDp(80),
    justifyContent: 'space-between',
    marginLeft: pxToDp(8),
    paddingTop: pxToDp(5)
  },
  bookbotton11: {
    height: pxToDp(100),
    backgroundColor: 'white',
    borderRadius: pxToDp(8),
    marginTop: pxToDp(30),
    elevation: 8, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8) //  圆角,
  }
});
export default Index;
