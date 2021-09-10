import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableNativeFeedback,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Top from '../../../component/common/myTop';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Maylike from './components/maylike';
import { getShopList } from '@service/shop';
import { connect } from 'react-redux';
import { getAddressListAction } from '../../my/address/store/actions';
import LottieView from 'lottie-react-native';
import BetterBanner from 'react-native-better-banner';
import Svg from 'react-native-svg-uri';
import { shopCar, hot } from '../../../component/common/iconSvg';
import SwiperCard from './swiperCard/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Index extends PureComponent {
  state = {
    arr: [],
    text: '初始状态',
    refreshing: false,
    jingpin1: [
      {
        name: '越剧人物折扇',
        intro: '以越剧经典剧目人物形象为基础，将其画入扇中。',
        price: '￥45',
        img: require('../../../res/shop/13.jpg'),
      },
      {
        name: '越剧人物书签',
        intro: '以越剧经典剧目人物形象头部作为金属书签的元素。',
        price: '￥10',
        img: require('../../../res/shop/14.jpg'),
      },
      {
        name: '越剧竺派唱片',
        intro: '收录了竺派越剧创始人竺水招先生经典唱段的音频。',
        price: '￥299',
        img: require('../../../res/shop/15.jpg'),
      },
    ],
    jingpin2: [
      {
        name: '越剧人物卷尺',
        intro: '将越剧经典剧目人物作为卷尺装饰的元素。',
        price: '￥25',
        img: require('../../../res/shop/9.jpg'),
      },
      {
        name: '越剧人物钥匙扣',
        intro: '以越剧经典剧目人物形象作为钥匙扣的元素。',
        price: '￥20',
        img: require('../../../res/shop/17.jpg'),
      },
      {
        name: '越剧戏服手提袋',
        intro: '以越剧戏服作为手提袋的样式，款式新颖。',
        price: '￥50',
        img: require('../../../res/shop/11.jpg'),
      },
    ],
    showJing: false
  };
  UNSAFE_componentWillMount() {
    this.props.getAddressListAction();
  }
  componentDidMount() {
    getShopList(0, 9).then((res) => {
      this.setState({ arr: res });
    });
  }
  static contextType = NavigationContext;
  _onRefresh() {
    if (this.state.refreshing === false) {
      this._updateState('正在刷新......', true);

      //5秒后结束刷新
      setTimeout(() => {
        this._updateState('结束状态', false);
      }, 1000);
    }
  }

  //更新State
  _updateState(message, refresh) {
    this.setState({ text: message, refreshing: refresh });
  }
  render() {
    const { showJing } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/**搜索框*/}
        <Top />
        <ScrollView
          bounces={true}
          refreshControl={
            <RefreshControl
              tintColor={'red'}
              titleColor={'brown'}
              title={'正在刷新......'}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          showsVerticalScrollIndicator={false}
        >
          {/*轮播 */}
          <View style={{ height: pxToDp(260) }}>
            <BetterBanner
              bannerComponents={[
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    style={styles.luoboimage}
                    source={require('../../../res/0901/商城轮播1.png')}
                  />
                </View>,
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    style={styles.luoboimage}
                    source={require('../../../res/0901/商城轮播2.png')}
                  />
                </View>,
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    style={styles.luoboimage}
                    source={require('../../../res/0901/商城轮播3.png')}
                  />
                </View>
              ]}
              bannerTitles={[
                ' 双十一购物节 快来囤货吧',
                ' 国潮+越剧 潮流风暴来袭',
                ' 越剧周边商城已上新'
              ]}
              onPress={(index) => alert('you pressed index is : ' + index)}
              indicatorContainerBackgroundColor={'#62bfad'}
              isSeamlessScroll={true}
              activeIndicatorColor={'red'}
            />
          </View>
          {/*本周新品 */}
          <View style={styles.titlebox}>
            <View style={styles.left}></View>
            <View style={{ marginLeft: pxToDp(6), marginBottom: pxToDp(-20) }}>
              <Text style={styles.titletext}>本周新品</Text>
              <LottieView
                style={{ width: pxToDp(80) }}
                source={require('../../../../lottie/标题底部.json')}
                autoPlay={true}
                loop={true}
              />
            </View>
          </View>
          <SafeAreaView
            style={{
              marginLeft: pxToDp(16),
              marginRight: pxToDp(16),
              marginTop: pxToDp(8)
            }}
          >
            <SwiperCard />
          </SafeAreaView>
          {/*主版块 */}
          <View style={styles.titlebox}>
            <View style={styles.left}></View>
            <View style={{ marginLeft: pxToDp(6), marginBottom: pxToDp(-20) }}>
              <Text style={styles.titletext}>越剧商城</Text>
              <LottieView
                style={{ width: pxToDp(80) }}
                source={require('../../../../lottie/标题底部.json')}
                autoPlay={true}
                loop={true}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: pxToDp(16),
              marginRight: pxToDp(16),
              marginTop: pxToDp(8)
            }}
          >
            {/*线下门票 */}
            <TouchableNativeFeedback
              onPress={() => this.context.navigate('ticket')}
              useForeground={true}
            >
              <View>
                <Image
                  style={styles.image3}
                  source={require('../../../res/门票.jpg')}
                />
              </View>
            </TouchableNativeFeedback>
            {/*戏服租赁 */}
            <View
              style={{
                height: pxToDp(170),
                justifyContent: 'space-between',
                marginLeft: pxToDp(10)
              }}
            >
              <TouchableNativeFeedback
                useForeground={true}
                onPress={() => this.context.navigate('Zulin', 0)}
              >
                <View>
                  <Image
                    style={styles.image4}
                    source={require('../../../res/30.jpg')}
                  />
                </View>
              </TouchableNativeFeedback>
              {/*越剧周边 */}
              <TouchableNativeFeedback
                onPress={() => this.context.navigate('Zhoubian', 1)}
                useForeground={true}
              >
                <View>
                  <Image
                    style={styles.image4}
                    source={require('../../../res/29.jpg')}
                  />
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          {/**精品推荐*/}
          <View style={styles.titlebox}>
            <View style={styles.left}></View>
            <View style={{ marginLeft: pxToDp(6), marginBottom: pxToDp(-20) }}>
              <Text style={styles.titletext}>精品推荐</Text>
              <LottieView
                style={{ width: pxToDp(80) }}
                source={require('../../../../lottie/标题底部.json')}
                autoPlay={true}
                loop={true}
              />
            </View>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', marginLeft: pxToDp(180), marginBottom: pxToDp(10) }}
              onPress={() => this.setState({ showJing: !showJing })}>
              <Text style={{ fontSize: pxToDp(14), color: '#666666', marginRight: pxToDp(4) }}>换一换</Text>
              <Ionicons name="refresh" size={22} color="#666666" />
            </TouchableOpacity>
          </View>
          {showJing ? (<View>
            {this.state.jingpin1.map((item, index) => (
              <View style={styles.jing}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={styles.jingimage}
                    source={item.img}
                  />
                  <View
                    style={{
                      alignSelf: 'center',
                      marginLeft: pxToDp(8),
                      width: pxToDp(190)
                    }}
                  >
                    <Text style={{ fontSize: pxToDp(16), color: '#000000' }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>
                      {item.intro}
                    </Text>
                    <Text style={{ fontSize: pxToDp(14), color: '#62bfad' }}>
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View style={styles.shopcar}>
                  <Svg width="20" height="20" svgXmlData={shopCar} />
                </View>
              </View>))}
          </View>) : (<View>
            {this.state.jingpin2.map((item, index) => (
              <View style={styles.jing}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={styles.jingimage}
                    source={item.img}
                  />
                  <View
                    style={{
                      alignSelf: 'center',
                      marginLeft: pxToDp(8),
                      width: pxToDp(190)
                    }}
                  >
                    <Text style={{ fontSize: pxToDp(16), color: '#000000' }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontSize: pxToDp(14), color: '#333333' }}>
                      {item.intro}
                    </Text>
                    <Text style={{ fontSize: pxToDp(14), color: '#62bfad' }}>
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View style={styles.shopcar}>
                  <Svg width="20" height="20" svgXmlData={shopCar} />
                </View>
              </View>))}
          </View>)}

          {/*活动板块 */}
          <TouchableNativeFeedback
            onPress={() => this.context.navigate('TBox')}
            useForeground={true}>
            <View style={{
              marginLeft: pxToDp(16),
              marginRight: pxToDp(16),
              marginTop: pxToDp(8)
            }}>
              <Image
                style={{
                  height: pxToDp(130),
                  borderRadius: pxToDp(8),
                  width: '100%'
                }}
                source={require('../../../res/0901/商城轮播2.png')}
              />
            </View>
          </TouchableNativeFeedback>
          {/*推荐模块 */}
          <View style={styles.titlebox}>
            <View style={styles.left}></View>
            <View style={{ marginLeft: pxToDp(6), marginBottom: pxToDp(-20) }}>
              <Text style={styles.titletext}>你可能喜欢</Text>
              <LottieView
                style={{ width: pxToDp(80) }}
                source={require('../../../../lottie/标题底部.json')}
                autoPlay={true}
                loop={true}
              />
            </View>
          </View>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginLeft: pxToDp(16),
              marginRight: pxToDp(16),
              justifyContent: 'space-between',
              marginTop: pxToDp(-4)
            }}
          >
            {this.state.arr.map((item) => (
              <Maylike
                key={item.id}
                imguri={item.imguri}
                name={item.title}
                number={item.sellnum}
                price={item.price}
                id={item.id}
              />
            ))}
          </View>
          <View style={styles.tcard}></View>
          <View style={{ height: pxToDp(4) }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToDp(200),
    marginTop: pxToDp(8),
    borderRadius: pxToDp(8)
  },
  tcard: {
    height: pxToDp(20)
  },
  ocard: {
    backgroundColor: 'white',
    width: pxToDp(174),
    borderRadius: pxToDp(8),
    margin: pxToDp(16)
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(174),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
  lunboimage: {
    height: '100%',
    width: '92%',
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16)
  },
  title: {
    color: '#62bfad',
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginTop: pxToDp(16),
    marginBottom: pxToDp(16)
  },
  image1: {
    height: pxToDp(100),
    width: pxToDp(355),
    borderRadius: pxToDp(8)
  },
  box: {
    height: pxToDp(115),
    width: pxToDp(105),
    backgroundColor: '#468cd3',
    alignItems: 'center',
    borderRadius: pxToDp(8)
  },
  image2: {
    height: pxToDp(90),
    width: pxToDp(105),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
  text: {
    fontSize: pxToDp(15),
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: pxToDp(3)
  },
  image3: {
    height: pxToDp(170),
    width: pxToDp(166.5),
    borderRadius: pxToDp(8)
  },
  image4: {
    height: pxToDp(80),
    width: pxToDp(167),
    borderRadius: pxToDp(8),
    alignSelf: 'center'
  },
  titlebox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: pxToDp(16),
    height: pxToDp(30),
    marginRight: pxToDp(16),
    marginTop: pxToDp(14)
  },
  left: {
    width: pxToDp(4),
    height: '75%',
    backgroundColor: '#62bfad',
    borderRadius: pxToDp(2)
  },
  titletext: {
    fontSize: pxToDp(18),
    color: '#62bfad',
    fontWeight: 'bold',
    marginLeft: pxToDp(3),
    marginBottom: pxToDp(-15)
  },
  luoboimage: {
    height: pxToDp(200),
    width: pxToDp(347),
    borderRadius: pxToDp(8),
    marginTop: pxToDp(-32)
  },
  newimage: {
    height: pxToDp(100),
    width: pxToDp(200),
    borderRadius: pxToDp(8)
  },
  new: {
    height: pxToDp(100),
    width: pxToDp(200),
    marginRight: pxToDp(8)
  },
  jing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToDp(8),
    marginRight: pxToDp(16),
    marginLeft: pxToDp(16),
    backgroundColor: 'white',
    elevation: 2, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8),
    padding: pxToDp(8),
    borderRadius: pxToDp(8),
    alignItems: 'center'
  },
  shopcar: {
    height: pxToDp(30),
    width: pxToDp(30),
    borderRadius: pxToDp(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: pxToDp(2),
    borderColor: '#62bfad'
  },
  jingimage: {
    height: pxToDp(88),
    width: pxToDp(88),
    borderRadius: pxToDp(8)
  }
});
export default connect(() => ({}), { getAddressListAction })(Index);
