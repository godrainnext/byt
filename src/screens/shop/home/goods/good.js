import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ToastAndroid
} from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
import RBSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from '@components/common/Swiper';
import { getShopInfo } from '@service/shop';
import { EasyLoading, Loading } from '@utils/ezLoading';
const WINDOW_WIDTH = Dimensions.get('window').width;

class shopdetails extends PureComponent {
  state = {
    count: 1,
    //商品
    products: [],
    //尺码
    Size: [
      {
        id: 1,
        size: 'XS'
      },
      {
        id: 2,
        size: 'S'
      },
      {
        id: 3,
        size: 'M'
      },
      {
        id: 4,
        size: 'L'
      },
      {
        id: 5,
        size: 'XL'
      },
      {
        id: 6,
        size: 'XXL'
      },
      {
        id: 7,
        size: 'XXXL'
      }
    ],

    shop: {},
    Select: false,
    activeTab: -1,
    guanbi: false,
    shopimg: [],
    activeItem: null,
    shopbanner: []
  };

  renderCarousel = () => (
    <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
      {this.state.shopimg.map((item) => (
        <Image
          key={item.id}
          style={{ flex: 1 }}
          resizeMode="contain"
          source={{
            uri: item.imgurl
          }}
        />
      ))}
    </Carousel>
  );

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
    if (this.state.count > 1) {
      this.setState({
        guanbi: false
      });
    } else {
      this.setState({
        guanbi: true
      });
    }
  };

  onIt = () => {
    this.setState({
      count: this.state.count - 1
    });
    if (this.state.count > 2) {
      this.setState({
        guanbi: false
      });
    } else {
      this.setState({
        guanbi: true
      });
    }
  };

  changeTab = (index, item) => {
    this.setState({ activeTab: index, activeItem: item });
  };
  static contextType = NavigationContext;
  changeSizeTab = (index) => {
    this.setState({ activeSizeTab: index });
  };
  componentDidMount() {
    const id = this.props.route.params;
    EasyLoading.show('loading');
    getShopInfo(id)
      .then((res) => {
        this.setState({
          shopbanner: [...res.bannerImages],
          shop: { ...res.shopInner },
          shopimg: [...res.shopinnerimages],
          products: [...res.shopcarimages]
        });
      })
      .then(() => {
        EasyLoading.dismiss();
      });
  }
  //this.context.navigate('Myorder')acitveId
  goCreateOrider = () => {
    if (this.state.activeItem) {
      this.Scrollable.close();
      this.context.navigate('Myorder', {
        ...this.state.activeItem,
        shopId: this.state.shop.id,
        count: this.state.count,
        title: this.state.shop.title
      });
    } else {
      ToastAndroid.show('请选择商品', ToastAndroid.SHORT);
    }
  };
  render() {
    console.log(this.state.shopbanner);
    const { count, tabs, activeTab, activeSizeTab } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf6fc' }}>
        {/* 顶部导航 */}
        <Top icon1="arrow-back" title="猜你喜欢" />
        <Loading color="#468cd3" />
        <ScrollView
          style={{
            flex: 1
          }}
        >
          {/* 商品图片 */}

          <View style={{ alignItems: 'center', marginTop: pxToDp(20) }}>
            <Swiper shopbanner={this.state.shopbanner} />
          </View>

          {/* 品名 价格 */}
          <View style={{ alignItems: 'center', marginTop: pxToDp(20) }}>
            <Text style={{ fontSize: pxToDp(22), fontWeight: 'bold' }}>
              {this.state.shop.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
              }}
            >
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                ￥
                {parseInt(
                  this.state.shop.price ? this.state.shop.price * 0.8 : 0
                )}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(12),
                  textDecorationLine: 'line-through',
                  marginLeft: pxToDp(10)
                }}
              >
                ￥{parseInt(this.state.shop.price ? this.state.shop.price : 0)}
              </Text>
            </View>
          </View>

          {/* 商品资料 */}

          <View
            style={{
              marginLeft: pxToDp(15),
              marginRight: pxToDp(15),
              marginTop: pxToDp(15)
            }}
          >
            <Text>{this.state.shop.inner}</Text>
          </View>

          {/* 商品详情 */}
          <View style={{ marginTop: pxToDp(20) }}>
            {this.state.products.map((item, index) => (
              <View key={item.id}>
                <Image
                  style={{
                    width: pxToDp(350),
                    height: pxToDp(350),
                    margin: pxToDp(12),
                    borderRadius: pxToDp(8)
                  }}
                  source={{ uri: item.img }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
        {/* 颜色分类弹窗 */}
        <RBSheet
          ref={(ref) => {
            this.Scrollable = ref;
          }}
          height={pxToDp(600)}
          closeOnDragDowncustomStyles={{
            container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
          }}
        >
          <ScrollView>
            {/* 标题 */}
            <View
              style={{
                height: pxToDp(90),
                flexDirection: 'row'
              }}
            >
              <Lightbox
                springConfig={{ tension: 15, friction: 7 }}
                swipeToDismiss={true}
                renderContent={this.renderCarousel}
              >
                <Image
                  style={{
                    width: pxToDp(60),
                    height: pxToDp(60),
                    margin: pxToDp(10),
                    borderRadius: pxToDp(8)
                  }}
                  source={{
                    uri: this.state.products[activeTab]?.img
                  }}
                />
              </Lightbox>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: pxToDp(280)
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}>
                    ￥{this.state.products[activeTab]?.price}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => this.Scrollable.close()}>
                  <View
                    style={{
                      marginTop: pxToDp(10)
                    }}
                  >
                    <AntDesign
                      name="closecircleo"
                      size={pxToDp(18)}
                      color="#666"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* 尺码选择 */}
            <View
              style={{ borderTopWidth: pxToDp(1.1), borderColor: '#f1f1f1' }}
            >
              <Text
                style={{
                  marginLeft: pxToDp(25),
                  fontSize: pxToDp(20),
                  marginTop: pxToDp(10),
                  marginBottom: pxToDp(10)
                }}
              >
                尺码
              </Text>
              <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                {this.state.Size.map((item, index) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => this.changeSizeTab(index)}
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginTop: pxToDp(8),
                      marginLeft: pxToDp(20),
                      marginBottom: pxToDp(8)
                    }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        backgroundColor:
                          index === activeSizeTab ? '#468cd3' : '#ecf6fc',
                        borderRadius: pxToDp(5),
                        height: pxToDp(30),
                        width: pxToDp(50)
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: pxToDp(4),
                          marginBottom: pxToDp(4)
                        }}
                      >
                        {item.size}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            {/* 颜色分类 */}
            <View
              style={{ borderTopWidth: pxToDp(1.1), borderColor: '#f1f1f1' }}
            >
              <Text
                style={{
                  marginLeft: pxToDp(25),
                  fontSize: pxToDp(20),
                  marginTop: pxToDp(10)
                }}
              >
                颜色分类
              </Text>
            </View>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
              {this.state.products.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    this.changeTab(index, item);
                  }}
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: pxToDp(20),
                    marginLeft: pxToDp(20)
                  }}
                >
                  <View
                    style={{
                      justifyContent: 'center',
                      backgroundColor:
                        index === activeTab ? '#468cd3' : '#ecf6fc',
                      borderRadius: pxToDp(8),
                      height: pxToDp(130)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(100),
                        borderRadius: pxToDp(8)
                      }}
                      source={{ uri: item.img }}
                    />
                    <Text
                      style={{
                        height: pxToDp(20),
                        alignSelf: 'center',
                        marginTop: pxToDp(5),
                        marginBottom: pxToDp(5)
                      }}
                    >
                      {item.color}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          {/* 购买数量 */}
          <View style={{ height: pxToDp(40), marginBottom: pxToDp(50) }}>
            <View
              style={{
                margin: pxToDp(13),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text>购买数量</Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#D3D3D3',
                  width: pxToDp(100),
                  height: pxToDp(30),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderRadius: pxToDp(8)
                }}
              >
                <TouchableOpacity
                  onPress={this.onIt}
                  disabled={this.state.guanbi}
                  style={{ marginLeft: pxToDp(10) }}
                >
                  <Text style={{ fontWeight: 'bold', fontSize: pxToDp(20) }}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: pxToDp(15) }}>{count}</Text>
                <TouchableOpacity
                  onPress={this.onPress}
                  style={{ marginRight: pxToDp(10) }}
                >
                  <Text style={{ fontWeight: 'bold', fontSize: pxToDp(20) }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#468cd3',
              width: pxToDp(320),
              height: pxToDp(40),
              borderRadius: pxToDp(40),
              alignSelf: 'center',
              marginBottom: pxToDp(5)
            }}
          >
            <TouchableOpacity
              style={{ width: '100%', height: '100%' }}
              onPress={this.goCreateOrider}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: '#000',
                  textAlign: 'center',
                  marginTop: pxToDp(10)
                }}
              >
                提交订单
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
        {/* 购买按钮 */}
        <View
          style={{
            justifyContent: 'space-evenly'
          }}
        >
          <TouchableOpacity
            onPress={() => this.Scrollable.open()}
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#468cd3',
              width: pxToDp(320),
              height: pxToDp(40),
              borderRadius: pxToDp(40),
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              marginBottom: pxToDp(5)
            }}
          >
            <Text>立即购买</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: pxToDp(80),
    height: pxToDp(70),
    borderRadius: pxToDp(5),
    marginTop: pxToDp(15),
    borderRadius: pxToDp(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end'
  },
  ImageShow: {
    resizeMode: 'cover',
    height: pxToDp(500),
    marginLeft: pxToDp(15),
    marginRight: pxToDp(15)
  }
});
export default shopdetails;
