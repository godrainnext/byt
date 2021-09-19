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
import changeImgSize from '@utils/changeImgSize';
import Mybtn from '../../../../component/common/mybtn';
import AnimatedLoader from 'react-native-animated-loader';
import ActionButton from 'react-native-action-button';
const WINDOW_WIDTH = Dimensions.get('window').width;
class shopdetails extends PureComponent {
  state = {
    count: 1,
    visible: true,
    //商品
    btnOpcity: false,
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
            uri: changeImgSize(this.state.products[this.state.activeTab]?.img)
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
        this.setState({
          visible: !this.state.visible
        });
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
    const { count, tabs, activeTab, activeSizeTab, visible } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#D5E8E6' }}>
        {/* 顶部导航 */}

        <Top
          icon1="arrow-back"
          title="商品详情"
          icon22="customerservice"
          rightCallback={() => this.context.navigate('GiftedChat')}
        />
        <AnimatedLoader
          visible={visible}
          overlayColor="rgba(0,0,0,0.75)"
          source={require('../../../../../lottie/loading2.json')}
          animationStyle={styles.lottie}
          speed={1}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          onMomentumScrollBegin={() => {
            this.setState({ btnOpcity: true });
          }}
          onMomentumScrollEnd={() => {
            this.setState({ btnOpcity: false });

          }}
          // onScrollBeginDrag={() => {
          //   this.setState({ btnOpcity: true });
          //   console.log('good', this.state.btnOpcity);
          // }}
          // onScrollEndDrag={() => {
          //   this.setState({ btnOpcity: false });
          //   console.log('good', this.state.btnOpcity);
          // }}
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
            <Text
              style={{
                fontSize: pxToDp(20),
                color: '#333333',
                fontWeight: 'bold'
              }}
            >
              {this.state.shop.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
              }}
            >
              <Text style={{ fontSize: pxToDp(16), color: '#62bfad' }}>
                ￥
                {parseInt(
                  this.state.shop.price ? this.state.shop.price * 0.8 : 0
                )}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(14),
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
              margin: pxToDp(16)
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(16),
                color: '#666666',
                lineHeight: pxToDp(30)
              }}
            >
              &emsp;&emsp;{this.state.shop.inner}
            </Text>
          </View>

          {/* 商品详情 */}
          <View style={{ marginTop: pxToDp(20), marginBottom: pxToDp(36) }}>
            {this.state.products.map((item, index) => (
              <View key={item.id}>
                <Image
                  style={{
                    alignSelf: 'center',
                    width: pxToDp(334),
                    height: pxToDp(350),
                    marginLeft: 16,
                    marginRight: 16,
                    marginBottom: pxToDp(16),
                    borderRadius: pxToDp(8)
                  }}
                  source={{ uri: changeImgSize(item.img) }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
        {/* 客服按钮 */}
        {/* <ActionButton
          buttonColor="#d5e8e6"
          buttonText=""
          renderIcon={() => (
            <Image
              style={{ width: pxToDp(32), height: pxToDp(32)}}
              source={require('../../../../res/客服.png')}
            />
          )}
          style={{
            top: pxToDp(500),
            height: pxToDp(100),
            position: 'absolute'
          }}
          onPress={() => this.context.navigate('GiftedChat')}
        /> */}
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
          <ScrollView showsVerticalScrollIndicator={false}>
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
                underlayColor="white"
              >
                {activeTab == -1 ? (
                  <Image
                    style={{
                      width: pxToDp(60),
                      height: pxToDp(60),
                      margin: pxToDp(16),
                      borderRadius: pxToDp(8)
                    }}
                    source={{
                      uri: changeImgSize(this.state.products[0]?.img, 'small')
                    }}
                  />
                ) : (
                  <Image
                    style={{
                      width: pxToDp(60),
                      height: pxToDp(60),
                      margin: pxToDp(16),
                      borderRadius: pxToDp(8)
                    }}
                    source={{
                      uri: changeImgSize(
                        this.state.products[activeTab]?.img,
                        'small'
                      )
                    }}
                  />
                )}
              </Lightbox>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: pxToDp(280)
                }}
              >
                <View>
                  {activeTab == -1 ? (
                    <Text
                      style={{
                        fontSize: pxToDp(16),
                        marginTop: pxToDp(16),
                        color: '#62bfad'
                      }}
                    >
                      ￥{this.state.shop.price * 0.8}—{this.state.shop.price}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: pxToDp(16),
                        marginTop: pxToDp(16),
                        color: '#62bfad'
                      }}
                    >
                      ￥{this.state.products[activeTab]?.price}
                    </Text>
                  )}
                  <Text
                    style={{
                      fontSize: pxToDp(16),
                      marginTop: pxToDp(16),
                      color: '#666666'
                    }}
                  >
                    {this.state.products[activeTab]?.color}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => this.Scrollable.close()}>
                  <View
                    style={{
                      marginTop: pxToDp(10),
                      marginRight: pxToDp(10)
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
            <View style={styles.sizebox}>
              <Text
                style={{
                  marginLeft: pxToDp(25),
                  fontSize: pxToDp(16),
                  marginTop: pxToDp(8)
                }}
              >
                尺码
              </Text>
              <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                {this.state.Size.map((item, index) => (
                  <TouchableOpacity
                    activeOpacity={1}
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
                          index === activeSizeTab ? '#D5E8E6' : 'white',
                        borderRadius: pxToDp(4),
                        borderColor:
                          index === activeSizeTab ? '#62bfad' : 'white',
                        borderWidth:
                          index === activeSizeTab ? pxToDp(1) : pxToDp(0),
                        height: pxToDp(30),
                        width: pxToDp(50),
                        elevation: 2, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
                        shadowColor: 'black' //  阴影颜色
                        //  圆角
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginTop: pxToDp(4),
                          marginBottom: pxToDp(4),
                          color: index === activeSizeTab ? '#62bfad' : '#666666'
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
            <View style={styles.sizebox}>
              <Text
                style={{
                  marginLeft: pxToDp(25),
                  fontSize: pxToDp(16),
                  marginTop: pxToDp(8)
                }}
              >
                颜色分类
              </Text>
            </View>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
              {this.state.products.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={1}
                  key={item.id}
                  onPress={() => {
                    this.changeTab(index, item);
                  }}
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: pxToDp(8),
                    marginLeft: pxToDp(20)
                  }}
                >
                  <View
                    style={{
                      justifyContent: 'center',
                      backgroundColor:
                        index === activeTab ? '#D5E8E6' : 'white',
                      borderColor: index === activeTab ? '#62bfad' : 'white',
                      borderWidth: 1,
                      borderRadius: pxToDp(8),
                      height: pxToDp(131),
                      elevation: 2, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
                      shadowColor: 'grey', //  阴影颜色
                      shadowRadius: pxToDp(10), //  圆角
                      marginBottom: pxToDp(1)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(99),
                        height: pxToDp(99),
                        borderTopLeftRadius: pxToDp(8),
                        borderTopRightRadius: pxToDp(8)
                      }}
                      source={{ uri: changeImgSize(item.img, 'small') }}
                    />
                    <Text
                      style={{
                        height: pxToDp(20),
                        alignSelf: 'center',
                        marginTop: pxToDp(5),
                        marginBottom: pxToDp(5),
                        color: index === activeTab ? '#62bfad' : '#666666'
                      }}
                    >
                      {item.color}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View
              style={{
                height: pxToDp(40),
                marginBottom: pxToDp(50)
              }}
            >
              <View
                style={{
                  margin: pxToDp(16),
                  height: 40,
                  borderColor: '#f1f1f1',
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(16) }}>
                  购买数量
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#999999',
                    width: pxToDp(100),
                    height: pxToDp(30),
                    opacity: 0.5,
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
                    <Text style={{ fontSize: pxToDp(20) }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: pxToDp(15) }}>{count}</Text>
                  <TouchableOpacity
                    onPress={this.onPress}
                    style={{ marginRight: pxToDp(10) }}
                  >
                    <Text style={{ fontSize: pxToDp(20) }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          {/* 购买数量 */}
          <View style={{ marginTop: 40 }}>
            <Mybtn
              title="提交订单"
              onPress={this.goCreateOrider}
              containerStyle={{
                position: 'absolute',
                bottom: pxToDp(5),
                width: pxToDp(320),
                height: pxToDp(40),
                borderRadius: pxToDp(40),
                alignSelf: 'center',
                color: 'red',
                display: 'none'
              }}
              buttonStyle={{
                width: '100%',
                height: '100%',
                alignSelf: 'flex-end',
                display: this.state.btnOpcity ? 'none' : 'flex',
                borderRadius: pxToDp(32)
              }}
            />
          </View>
        </RBSheet>
        {/* 购买按钮 */}
        <View
          style={{
            justifyContent: 'space-evenly'
          }}
        >
          <Mybtn
            onPress={() => this.Scrollable.open()}
            title="立刻购买"
            containerStyle={{
              position: 'absolute',
              bottom: 0,
              fontSize: 30,
              width: pxToDp(320),
              height: pxToDp(40),
              borderRadius: pxToDp(40),
              alignSelf: 'center',
              color: 'red',
              display: 'none'
            }}
            buttonStyle={{
              width: '100%',
              height: '100%',
              alignSelf: 'flex-end',
              display: this.state.btnOpcity ? 'none' : 'flex',
              borderRadius: pxToDp(32)
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: pxToDp(80),
    height: pxToDp(70),
    borderRadius: pxToDp(4),
    marginTop: pxToDp(15),
    borderRadius: pxToDp(4),
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: pxToDp(8),
    borderRadius: pxToDp(4),
    textAlign: 'center',
    margin: pxToDp(10),
    alignSelf: 'flex-end'
  },
  ImageShow: {
    resizeMode: 'cover',
    height: pxToDp(500),
    marginLeft: pxToDp(15),
    marginRight: pxToDp(15)
  },
  sizebox: {
    borderTopWidth: pxToDp(1.1),
    borderColor: '#f1f1f1',
    margin: pxToDp(8),
    marginBottom: 0
  },
  lottie: {
    width: pxToDp(200),
    height: pxToDp(200)
  }
});
export default shopdetails;
