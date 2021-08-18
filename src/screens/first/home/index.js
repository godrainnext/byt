import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import { getVideList } from '../../../service/home';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import HighLights from '@components/first/HighLights';
import ImageFade from '@components/ImageFade/index';
import Hy from '@components/first/hy';
import Legend from '@components/first/legend';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
export default class hello extends Component {
  static contextType = NavigationContext;
  state = { arr: [], };
  componentDidMount() {
    getVideList(0).then((res) => {
      this.setState({ arr: res });
    });
  }

  render() {
    const { userinfo } = this.state
    return (
      <ParallaxScrollView
        renderStickyHeader={() => (<Top title="个人信息" />)}
        stickyHeaderHeight={70}
        parallaxHeaderHeight={200}
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130307%2F8984340_113532918000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631857652&t=03b4f1cf6deeb6e50010fe5e59eb881d' }}

              style={{
                width: 450,
                height: 250,
              }}>
            </Image>
            <View style={{ position: 'absolute', top: 0, width: window.width, backgroundColor: 'rgba(0,0,0,.4)', height: 250 }} />
          </View>
        )
        }
        //自定义头部内容
        renderForeground={() => (
          <View style={{ Top: 200, left: 100 }}></View>
        )

        }

        scrollableViewStyle={{ backgroundColor: '#fcfcfc' }}
      >


        <View style={{ margin: pxToDp(10), marginTop: pxToDp(30), flex: 1 }}>

          <HighLights />

          {/*俯瞰百年 */}
          <View style={{ margin: pxToDp(10), marginTop: pxToDp(0) }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
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
                justifyContent: 'space-between'
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
          <Legend />
          {/*名角风采 */}
          <View
            style={{
              margin: pxToDp(8)
              //    marginTop: pxToDp(0),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
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
          <View
            style={{
              borderRadius: pxToDp(10),
              height: pxToDp(310),
              backgroundColor: 'rgba(255,255,255,0.5)',
              marginRight: pxToDp(10),
              marginLeft: pxToDp(10)
            }}
          >
            <ImageBackground
              style={{
                width: '100%',
                height: pxToDp(250)
              }}
              imageStyle={{
                borderTopLeftRadius: pxToDp(10),
                borderTopRightRadius: pxToDp(10)
              }}
              source={{
                uri: 'https://img0.baidu.com/it/u=2584689132,3841583287&fm=26&fmt=auto&gp=0.jpg'
              }}
            >
              <View style={{ margin: pxToDp(10) }}>
                <View style={{ marginTop: pxToDp(75) }}></View>
                <ScrollView horizontal={true} style={{ marginTop: pxToDp(45) }}>
                  <TouchableOpacity
                    onPress={() => this.context.navigate('Actress')}
                    style={{
                      width: pxToDp(100),
                      height: pxToDp(160),
                      borderRadius: pxToDp(10),
                      marginRight: pxToDp(20)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(140),
                        borderTopLeftRadius: pxToDp(10),
                        borderTopRightRadius: pxToDp(10)
                      }}
                      source={{
                        uri: 'https://img0.baidu.com/it/u=2918427680,1568245037&fm=26&fmt=auto&gp=0.jpg'
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: 'white'
                      }}
                    >
                      <Text style={{ fontSize: pxToDp(15) }}>方亚芬</Text>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: pxToDp(100),
                      height: pxToDp(160),
                      borderRadius: pxToDp(10),
                      marginRight: pxToDp(20)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(140),
                        borderTopLeftRadius: pxToDp(10),
                        borderTopRightRadius: pxToDp(10)
                      }}
                      source={{
                        uri: 'https://pic1.zhimg.com/v2-932f9bb899443925a471296b7e7aa89d_r.jpg'
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: 'white'
                      }}
                    >
                      <Text style={{ fontSize: pxToDp(15) }}>何赛飞</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: pxToDp(100),
                      height: pxToDp(160),
                      borderRadius: pxToDp(10),
                      marginRight: pxToDp(20)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(140),
                        borderTopLeftRadius: pxToDp(10),
                        borderTopRightRadius: pxToDp(10)
                      }}
                      source={{
                        uri: 'https://img2.baidu.com/it/u=1837369383,3244486584&fm=26&fmt=auto&gp=0.jpg'
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: 'white'
                      }}
                    >
                      <Text style={{ fontSize: pxToDp(15) }}>王文娟</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: pxToDp(100),
                      height: pxToDp(160),
                      borderRadius: pxToDp(10),
                      marginRight: pxToDp(20)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(140),
                        borderTopLeftRadius: pxToDp(10),
                        borderTopRightRadius: pxToDp(10)
                      }}
                      source={{
                        uri: 'http://i1.go2yd.com/image.php?url=0WB85K1RSk'
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: 'white'
                      }}
                    >
                      <Text style={{ fontSize: pxToDp(15) }}>王志萍</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: pxToDp(100),
                      height: pxToDp(160),
                      borderRadius: pxToDp(10),
                      marginRight: pxToDp(20)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(140),
                        borderTopLeftRadius: pxToDp(10),
                        borderTopRightRadius: pxToDp(10)
                      }}
                      source={{
                        uri: 'http://i1.go2yd.com/image.php?url=0WB85KhP83'
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: 'white'
                      }}
                    >
                      <Text style={{ fontSize: pxToDp(15) }}>何英</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: pxToDp(100),
                      height: pxToDp(160),
                      borderRadius: pxToDp(10),
                      marginRight: pxToDp(20)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(140),
                        borderTopLeftRadius: pxToDp(10),
                        borderTopRightRadius: pxToDp(10)
                      }}
                      source={{
                        uri: 'https://img0.baidu.com/it/u=815941838,517847605&fm=15&fmt=auto&gp=0.jpg'
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: 'white'
                      }}
                    >
                      <Text style={{ fontSize: pxToDp(15) }}>蔡浙飞</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: pxToDp(100),
                      height: pxToDp(160),
                      borderRadius: pxToDp(10),
                      marginRight: pxToDp(20)
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(140),
                        borderTopLeftRadius: pxToDp(10),
                        borderTopRightRadius: pxToDp(10)
                      }}
                      source={{
                        uri: 'https://img1.baidu.com/it/u=469853929,4052640454&fm=26&fmt=auto&gp=0.jpg'
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: 'white'
                      }}
                    >
                      <Text style={{ fontSize: pxToDp(15) }}>茅威涛</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ParallaxScrollView>
    )
  }
}
