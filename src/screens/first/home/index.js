import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground, Easing
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import HighLights from '@components/first/HighLights';
import Hy from '@components/first/hy';
import Legend from '@components/first/legend';
import Actress from '@components/first/actress';
import { connect } from 'react-redux';
import { getUserInfoAction } from './store/actions';
import RecommendCard from '../../../component/common/recommendcard';
import Qiandao from '../../../component/common/qiandao';
import Entypo from 'react-native-vector-icons/Entypo';
import Svg from 'react-native-svg-uri';
import {
  star,
  right,
  jinpai,
  yinpai,
  tongpai
} from '../../../component/common/iconSvg';
import { Carousel } from '../../../component/common/teaset';
import Animated from 'react-native-reanimated';
import { TIME_OUT } from '../../../service/requset/config';
let navHeight = 45
class Index extends Component {

  static contextType = NavigationContext;
  state = {
    arr: [],
    isModalVisible: false,
    fadeAnim: 0.05,
    color: 0,
    y: 0,
    book: [
      {
        id: '1',
        title: '追鱼',
        context:
          '追鱼,其主要剧情为：北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。',
        path: 'https://tse1-mm.cn.bing.net/th/id/R-C.09c6e90235b64a74e410e32c0b066740?rik=NXUt3kmSNer%2fVA&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2feb476a0eed8d390ccbb89a76ec9eba802412b473.jpg&ehk=H7uDdyzqoosCQAGzv2tmz240YETTBtixjDqyWGBeXZg%3d&risl=&pid=ImgRaw&r=0',
        drama: 'Drama1'
      },
      {
        id: '2',
        title: '五女拜寿',
        context:
          '该剧讲述的是尚书杨继康做寿，五个女儿女婿前来祝寿，因养女三春及婿邹应龙贫贱，杨夫人不悦赶出府去。后杨因得罪严嵩革职，诸女皆不能依靠，唯三春将其收留。后邹中状元，扳倒严嵩，杨沉冤得雪，诸女又来拜寿。一番沉浮，杨夫人方知人间冷暖。',
        path: 'https://img1.baidu.com/it/u=838358760,1964554786&fm=26&fmt=auto&gp=0.jpg',
        drama: 'Drama2'
      },
      {
        id: '3',
        title: '梁山伯与祝英台',
        context:
          '《梁山伯与祝英台》是中国古代民间四大爱情故事之一（另外三个为《白蛇传》、《孟姜女传说》和《牛郎织女》），是中国最具魅力的口头传承艺术及国家级非物质文化遗产，也是在世界上产生广泛影响的中国民间传说。',
        path: 'https://img0.baidu.com/it/u=1223018592,1263472188&fm=26&fmt=auto&gp=0.jpg',
        drama: 'Drama3'
      }
    ],
    books: [
      {
        id: '1',
        title: '红楼梦',
        context:
          '新版越剧《红楼梦》创作于1999年，首演于同年8月。它从调整戏剧结构入手，别样营造大悲大喜、大实大虚的舞台意境，并提高舞美空间层次，丰富音乐形象，整合流派表演，精缩演出时间，实现了一次富有创意的新编。',
        path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage8.pinlue.com%2Fimg3%2Ftu_jpg%2FksnrPhRhOUPIvAqAbKCblUE58P73JL45ksk6RoStOt1QqsyGRULuDNlm589MJep46BicicicnEeYd9uoxplOgImkg%2F640.jpeg&refer=http%3A%2F%2Fimage8.pinlue.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631837799&t=26164c70c17997051e585d51c8be88fd',
        icon: jinpai,
        drama: 'Drama4'
      },
      {
        id: '2',
        title: '碧玉簪',
        context:
          '《碧玉簪》讲述了王玉林得尚书李廷甫赏识，获许配廷甫女秀英为妻。秀英的表兄顾文友因妒生恨，骗取秀英的碧玉簪放进伪造情书里，诬陷秀英与他有染。最终玉林送凤冠请罪，夫妇冰释前嫌。',
        path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fweixin.sanbiaoge.com%2Fcunchu5%2F2021-03-05%2F6_16149534226318178.jpg&refer=http%3A%2F%2Fweixin.sanbiaoge.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631837861&t=bccaf84652f1353d90b378e7225577c7',
        icon: yinpai,
        drama: 'Drama5'
      },
      {
        id: '3',
        title: '周仁哭坟',
        context:
          '《周仁哭坟》越剧折子戏，选材自京剧《周仁献嫂》。由朱福侠编导。《周仁哭坟》一折专为《吴凤花越剧舞台艺术风采》专场表演而编写排演，集中演绎周仁在其妻坟前哭诉冤屈的情绪。',
        path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F10088823340%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631837909&t=641368304e82a93e756196f93fd1d805',
        icon: tongpai,
        drama: 'Drama6'
      }
    ]
  };
  componentDidMount() {
    this.props.getUserInfoAction();
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  render() {

    return (
      <ParallaxScrollView

        ref={(view) => { this.myScrollView = view }}
        contentOffset={{ x: 0, y: 0 }}
        onScroll={(event) => {
          let offsetY = event.nativeEvent.contentOffset.y 
          let opacity = offsetY / navHeight+0.05
          // if(opacity > 5 || opacity < -5) { // 这里可以优化减少render， 1和0 滑快了会有些影响， 这里你可以看着给值， 当然也可以不优化
          //   return
          // }
          console.log(opacity);
          this.setState({
            fadeAnim: opacity
          })
          this.setState({ y: event.nativeEvent.contentOffset.y })
        }}
        renderFixedHeader={() => {
          return (
            <View
              style={{
                width: '100%',
                height: 50,
                backgroundColor: this.state.fadeAnim < 0.2 ? 'white' : 'white',
                opacity: this.state.fadeAnim,
                borderWidth:.3,
                borderColor:'#ccc'
                
              }}><Text
              style={{color: this.state.fadeAnim < 0.2 ? 'white' : 'red',fontWeight:'bold',alignSelf:'center',fontSize:30}}>1111</Text>
            </View>)
        }}
        // renderStickyHeader={() => <Top title="越台" />}
        // stickyHeaderHeight={70}
        parallaxHeaderHeight={250}
        backgroundSpeed={10}
        renderBackground={() => (
          <View>
            <Image
              source={{
                uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130307%2F8984340_113532918000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631857652&t=03b4f1cf6deeb6e50010fe5e59eb881d'
              }}
              style={{
                width: pxToDp(450),
                height: pxToDp(250)
              }}
            ></Image>
            <View
              style={{
                position: 'absolute',
                top: 0,
                width: window.width,
                backgroundColor: 'rgba(0,0,0,.4)',
                height: pxToDp(250)
              }}
            />
          </View>



        )}
        //自定义头部内容
        renderForeground={() => <View style={{ Top: 200, left: 100 }}></View>}
        scrollableViewStyle={{ backgroundColor: '#fcfcfc' }}
      >
        <View style={{ marginLeft: pxToDp(8), marginTop: pxToDp(16), marginRight: pxToDp(8), flex: 1 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: pxToDp(8) }}>
            {/**推荐卡片 */}
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: pxToDp(8) }} onPress={this.toggleModal} >
              <Ionicons name="layers-outline" size={32} color="#468CD3" />
              <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(5) }}>推荐</Text>
            </TouchableOpacity>
            <RecommendCard isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModal} />
            {/**签到 */}
            <Qiandao />
            {/**剧本库 */}
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: pxToDp(48) }} onPress={() => this.context.navigate('Scriptlibrary')}>
              <Ionicons name="library-sharp" size={32} color="#468CD3" />
              <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(5) }}>剧本</Text>
            </TouchableOpacity>
            {/**教程 */}
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: pxToDp(48) }} onPress={() => this.context.navigate('Course')} >
              <Ionicons name="md-color-wand" size={32} color="#468CD3" />
              <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(5) }}>教程</Text>
            </TouchableOpacity>
            {/**图谱 */}
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: pxToDp(48) }} onPress={() => this.context.navigate('Timeline')}>
              <Entypo name="colours" size={30} color="#468CD3" />
              <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(5) }}>图谱</Text>
            </TouchableOpacity>
            {/**VR */}
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: pxToDp(48), marginRight: pxToDp(10) }} onPress={() => this.context.navigate('VR')} >
              <Ionicons name="earth-sharp" size={32} color="#468CD3" />
              <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(5) }}>VR</Text>
            </TouchableOpacity>
          </ScrollView>
          {/**精选唱段 */}
          <HighLights />
          {/*俯瞰百年 */}
          <View style={{ margin: pxToDp(8) }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: '#468CD3',
                  fontWeight: 'bold'
                }}
              >
                俯瞰百年
              </Text>
              <TouchableOpacity onPress={() => this.context.navigate('Card')}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                    查看更多
                  </Text>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
            {/* 俯瞰百年轮播图 */}
            <Hy />
          </View>
          {/*流派故事 */}
          <View
            style={{
              margin: pxToDp(8)
              //    marginTop: pxToDp(0),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: pxToDp(8)
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: '#468CD3',
                  fontWeight: 'bold'
                }}
              >
                流派传奇
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate('PageOne', 2)}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                    查看更多
                  </Text>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              elevation: 10,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <Legend />
          </View>
          {/*梨园子弟 */}
          <View
            style={{
              margin: pxToDp(8),
              marginTop: pxToDp(24),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: pxToDp(8)
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: '#468CD3',
                  fontWeight: 'bold'
                }}
              >
                梨园子弟
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate('PageThree', 2)}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                    查看更多
                  </Text>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Actress />
          {/* 轮播图 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight:pxToDp(8)
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(18),
                margin: pxToDp(8),
                color: '#468CD3',
                fontWeight: 'bold'
              }}
            >
              本周热门
            </Text>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => this.context.navigate('HotList')}
            >
              <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                查看更多
              </Text>
              <Ionicons name="chevron-forward" size={20} color="grey" />
            </TouchableOpacity>
          </View>
          <View style={styles.carousel}>
            <Carousel control style={{ height: pxToDp(155) }}>
              {this.state.books.map((item) => (
                <TouchableOpacity
                  style={styles.bookbox}
                  onPress={() => this.context.navigate(item.drama)}
                >
                  <View style={styles.bookbotton}>
                    <View
                      style={{ marginLeft: pxToDp(130), marginTop: pxToDp(10) }}
                    >
                      <View style={styles.bookinf1}>
                        <View>
                          <Text
                            style={{ fontSize: pxToDp(17), fontWeight: 'bold' }}
                          >
                            {item.title}
                          </Text>
                        </View>
                        <View>
                          <Svg width="32" height="32" svgXmlData={item.icon} />
                        </View>
                      </View>
                      <Text style={{ fontSize: pxToDp(14) }} numberOfLines={3}>
                        {item.context}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.book11}>
                    <Image
                      style={styles.bookimage}
                      source={{ uri: item.path }}
                    />
                    <View
                      style={{
                        height: pxToDp(104),
                        width: pxToDp(4),
                        backgroundColor: 'lightgrey',
                        borderBottomRightRadius: pxToDp(8),
                        borderTopRightRadius: pxToDp(8)
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
              ))}
            </Carousel>
          </View>
          {/*剧本推荐 */}
          <View
            style={{
              flexDirection: 'row',
              width: pxToDp(350),
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(18),
                margin: pxToDp(8),
                color: '#468CD3',
                fontWeight: 'bold',
                marginBottom:pxToDp(0)
              }}
            >
              剧本推荐
            </Text>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => this.context.navigate('Scriptlibrary')}
            >
              <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                查看更多
              </Text>
              <Ionicons name="chevron-forward" size={20} color="grey" />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: pxToDp(20) }}>
            {this.state.book.map((item) => (
              <View style={styles.bookbox1}>
                <View style={styles.bookbotton}>
                  <View
                    style={{ marginLeft: pxToDp(120), marginTop: pxToDp(8) }}
                  >
                    <View style={styles.bookinf}>
                      <Text
                        style={{ fontSize: pxToDp(17), fontWeight: 'bold' }}
                      >
                        {item.title}
                      </Text>
                      <TouchableOpacity
                        onPress={() => this.context.navigate(item.drama)}
                      >
                        <Svg width="32" height="32" svgXmlData={right} />
                      </TouchableOpacity>
                    </View>
                    <Text stlye={{ fontSize: pxToDp(13) }} numberOfLines={2}>
                      {item.context}
                    </Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(5) }}
                    >
                    
                    </View>
                  </View>
                </View>
                <View style={styles.book}>
                  <Image style={styles.bookimage} source={{ uri: item.path }} />
                  
                  <View
                    style={{
                      height: pxToDp(104),
                      width: pxToDp(4),
                      backgroundColor: 'lightgrey',
                      borderTopRightRadius: pxToDp(8),
                      borderBottomRightRadius: pxToDp(8)
                    }}
                  ><Svg width="20" height="20" svgXmlData={star} /></View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  book: {
    marginTop: pxToDp(-130),
    marginLeft: pxToDp(12),
    height: pxToDp(120),
    width: pxToDp(100),
    borderRadius: pxToDp(8),
    elevation: 5, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
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
  },
  bookbotton: {
    height: pxToDp(110),
    backgroundColor: 'white',
    borderRadius: pxToDp(8),
    marginTop: pxToDp(30),
    elevation: 5, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8), //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1
  },
  bookinf: {
    flexDirection: 'row',
    width: pxToDp(210),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bookimage: {
    height: pxToDp(120),
    width: pxToDp(100),
    borderRadius: pxToDp(8)
  },
  book11: {
    marginTop: pxToDp(-130),
    marginLeft: pxToDp(12),
    height: pxToDp(120),
    width: pxToDp(100),
    borderRadius: pxToDp(8),
    elevation: 5, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8), //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookinf1: {
    flexDirection: 'row',
    width: pxToDp(180),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  carousel: {
    borderRadius: pxToDp(24),
    height: pxToDp(155),
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8)
  },
  bookbox1: {
    height: pxToDp(130),
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8),
    marginTop:pxToDp(8)
  },
});

export default connect(
  (state) => ({ userInfo: state.getIn(['homeReducer', 'userInfo']) }),
  {
    getUserInfoAction
  }
)(Index);
