import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import Top from '../../../../component/common/top';
import { Input } from 'react-native-elements';
import { pxToDp } from '../../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
import RBSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from '../../../../component/common/Swiper';

const WINDOW_WIDTH = Dimensions.get('window').width;

const renderCarousel = () => (
  <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
    <Image
      style={{ flex: 1 }}
      resizeMode="contain"
      source={{
        uri: 'https://img20.360buyimg.com/imgzone/jfs/t1/190571/34/12335/52311/60e68717E0199cac9/1492d2c4b569dd1a.jpg'
      }}
    />
    <Image
      style={{ flex: 1 }}
      resizeMode="contain"
      source={{
        uri: 'https://img30.360buyimg.com/imgzone/jfs/t1/185921/14/13299/64961/60e68717E994b4e11/f4293d93cc127341.jpg'
      }}
    />
    <Image
      style={{ flex: 1 }}
      resizeMode="contain"
      source={{
        uri: 'https://img11.360buyimg.com/imgzone/jfs/t1/178143/10/13271/54708/60e68718E2e4aa44c/792cfcbe006f8bf4.jpg'
      }}
    />
    <Image
      style={{ flex: 1 }}
      resizeMode="contain"
      source={{
        uri: 'https://img14.360buyimg.com/imgzone/jfs/t1/195337/32/12126/50736/60e6871aE1b2efc7e/7e5fc1a3aa875609.jpg'
      }}
    />
  </Carousel>
);

class shopdetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      leaseday: '',
      //商品
      products: [
        {
          id: 1,
          text: '红色',
          weight: '全套',
          imgUri:
            'https://img20.360buyimg.com/imgzone/jfs/t1/190571/34/12335/52311/60e68717E0199cac9/1492d2c4b569dd1a.jpg',
          price: 119.99,
          leaseprice: 10
        },
        {
          id: 2,
          text: '粉色',
          weight: '全套',
          imgUri:
            'https://img30.360buyimg.com/imgzone/jfs/t1/185921/14/13299/64961/60e68717E994b4e11/f4293d93cc127341.jpg',
          price: 139.99,
          leaseprice: 15
        },
        {
          id: 3,
          text: '绿色',
          weight: '全套',
          imgUri:
            'https://img11.360buyimg.com/imgzone/jfs/t1/178143/10/13271/54708/60e68718E2e4aa44c/792cfcbe006f8bf4.jpg',
          price: 169.9,
          leaseprice: 8
        },
        {
          id: 4,
          text: '黄色',
          weight: '全套',
          imgUri:
            'https://img12.360buyimg.com/imgzone/jfs/t1/186471/16/12270/114029/60e6871aE7719a6fe/8a034db53107b527.jpg',
          price: 159.9,
          leaseprice: 12
        }
      ],
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
      record: ['花旦戏服', 'yueju'],
      nowprice: ['166.90'],
      beforeprice: ['199.99'],
      comment:
        '花旦戏服戏剧服装越剧小姐戏服装女新款 白色 女披+水袖+裙子(+护领) ',
      Select: false,
      activeTab: 1,
      activeSizeTab: 1,
      guanbi: false
    };
  }

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

  changeTab = (index) => {
    this.setState({ activeTab: index });
  };
  static contextType = NavigationContext;
  changeSizeTab = (index) => {
    this.setState({ activeSizeTab: index });
  };
  getLeaseday(leaseday) {
    this.setState({
      leaseday: leaseday
    });
  }

  render() {
    const { count, tabs, activeTab, activeSizeTab } = this.state;
    console.log(activeTab);
    console.log(activeSizeTab);
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf6fc' }}>
        {/* 顶部导航 */}
        <Top icon1="arrow-back" title="商品租赁" />

        <ScrollView
          style={{
            flex: 1
          }}
        >
          {/* 商品图片 */}

          <View style={{ alignItems: 'center', marginTop: pxToDp(20) }}>
            <Swiper />
          </View>

          {/* 品名 价格 */}
          <View style={{ alignItems: 'center', marginTop: pxToDp(20) }}>
            <Text style={{ fontSize: pxToDp(22), fontWeight: 'bold' }}>
              {this.state.record[0]}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
              }}
            >
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                ￥{this.state.nowprice}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(12),
                  textDecorationLine: 'line-through',
                  marginLeft: pxToDp(10)
                }}
              >
                ￥{this.state.beforeprice}
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
            <Text>{this.state.comment}</Text>
          </View>

          {/* 商品详情 */}
          <View style={{ marginTop: pxToDp(20) }}>
            {this.state.products.map((item, index) => (
              <View>
                <Image
                  style={{
                    width: pxToDp(350),
                    height: pxToDp(350),
                    margin: pxToDp(12),
                    borderRadius: pxToDp(8)
                  }}
                  source={{ uri: item.imgUri }}
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
          height={660}
          closeOnDragDowncustomStyles={{
            container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
          }}
        >
          <ScrollView
            style={{
              flex: 1,
              marginBottom: pxToDp(50)
            }}
          >
            <View>
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
                  renderContent={renderCarousel}
                >
                  <Image
                    style={{
                      width: pxToDp(60),
                      height: pxToDp(60),
                      margin: pxToDp(10),
                      borderRadius: pxToDp(8)
                    }}
                    source={{
                      uri: this.state.products[activeTab].imgUri
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
                    <Text
                      style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}
                    >
                      ￥{this.state.products[activeTab].price}
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
                    onPress={() => this.changeTab(index)}
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
                        source={{ uri: item.imgUri }}
                      />
                      <Text
                        style={{
                          height: pxToDp(20),
                          alignSelf: 'center',
                          marginTop: pxToDp(5),
                          marginBottom: pxToDp(5)
                        }}
                      >
                        {item.text}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              {/* 租赁信息 */}
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
                  租赁信息
                </Text>
              </View>
              <View style={{ height: pxToDp(150), flex: 1 }}>
                <View
                  style={{
                    flex: 1,
                    marginTop: pxToDp(10),
                    marginLeft: pxToDp(10),
                    alignItems: 'center',
                    flexDirection: 'row'
                  }}
                >
                  <Text style={{ fontSize: pxToDp(18) }}>租赁价格:</Text>
                  <Text style={{ marginLeft: pxToDp(8), fontSize: pxToDp(18) }}>
                    ￥{this.state.products[activeTab].leaseprice}/天
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1
                  }}
                >
                  <Input
                    placeholder="租赁天数不得低于3天"
                    //   onChangeText={() => this.setState({  })}
                    keyboardType="number-pad"
                    onChangeText={(leaseday) => this.getLeaseday(leaseday)}
                    value={this.state.leaseday}
                    style={{
                      flex: 1,
                      marginLeft: pxToDp(8)
                    }}
                    leftIcon={
                      <Text style={{ fontSize: pxToDp(18) }}>租赁天数</Text>
                    }
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    marginTop: pxToDp(10),
                    marginLeft: pxToDp(10),
                    alignItems: 'center',
                    flexDirection: 'row'
                  }}
                >
                  <Text style={{ fontSize: pxToDp(18) }}>押金金额:</Text>
                  <Text style={{ marginLeft: pxToDp(8), fontSize: pxToDp(18) }}>
                    ￥{this.state.products[activeTab].price}
                  </Text>
                </View>
              </View>
            </View>

            {/* 购买数量 */}
            <View style={{ height: pxToDp(50) }}>
              <View
                style={{
                  margin: pxToDp(13),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: pxToDp(16) }}>租赁件数</Text>
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
          </ScrollView>
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
              onPress={() =>
                this.context.navigate('leaseorder', {
                  ...this.state.products[this.state.activeTab],
                  leaseday: this.state.leaseday,
                  comment: this.state.comment,
                  count: this.state.count
                })
              }
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
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
        >
          {/* <TouchableOpacity
            onPress={() => this.Scrollable.open()}
            style={{
              borderRadius: pxToDp(20),
              justifyContent: "center",
              alignItems: "center",
              width: pxToDp(160),
              height: pxToDp(40),
              backgroundColor: "#D3D3D3",
            }}
          >
            <Text>加入购物车</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('orders')} style={{ borderRadius: pxToDp(20), justifyContent: "center", alignItems: "center", width: pxToDp(160), backgroundColor: "orange" }}> */}
          <TouchableOpacity
            onPress={() => this.Scrollable.open()}
            // onPress={() => this.context.navigate("Myorder")}
            style={{
              width: pxToDp(320),
              height: pxToDp(40),
              borderRadius: pxToDp(20),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: pxToDp(10),
              marginBottom: pxToDp(10),
              backgroundColor: '#468cd3'
            }}
          >
            <Text>立即租赁</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  decrease() {
    // 单击减少
    let newValue = this.props.defaultValue - this.props.step;
    if (newValue < this.props.min) {
      newValue = this.props.min;
    }
    this.setState(
      {
        currentNumber: newValue
      },
      () => {
        this.onChange(newValue);
      }
    );
  }

  increase() {
    // 单击增加
    let newValue = this.props.defaultValue + this.props.step;

    if (newValue > this.props.max) {
      newValue = this.props.max;
    }
    this.setState(
      {
        currentNumber: newValue
      },
      () => {
        this.onChange(newValue);
      }
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
