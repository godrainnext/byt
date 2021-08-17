import React, { PureComponent } from 'react';
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
import { pxToDp } from '@utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from '@components/common/top';
import ImageFade from '@components/ImageFade/index';
import { NavigationContext } from '@react-navigation/native';
import { getUserInfoAction } from './store/actions';
import { connect } from 'react-redux';
import Legend from '@components/first/legend';
import Hy from '@components/first/hy';
import HighLights from '@components/first/HighLights';
const SLIDER_1_FIRST_ITEM = 1;

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }
  componentDidMount() {
    this.props.getUserInfoAction();
  }

  static contextType = NavigationContext;

  render() {
    return (
      <View>
        <Top title="百越台" icon2="search" />
        <ScrollView style={{ marginBottom: 60 }}>
          {/* 轮播图 */}
          <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20) }}>
            <ImageFade
              ref="ImageFade"
              duration={800}
              delay={3000}
              style={{ width: '100%', height: pxToDp(200) }}
            >
              <Image
                style={{
                  width: '100%',
                  height: pxToDp(200),
                  borderRadius: pxToDp(20)
                }}
                source={require('../../../res/12.jpg')}
              />
              <Image
                style={{
                  width: '100%',
                  height: pxToDp(200),
                  borderRadius: pxToDp(20)
                }}
                source={require('../../../res/19-2.jpg')}
              />
            </ImageFade>
          </View>
          {/*段落欣赏 */}
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
        </ScrollView>
      </View>
    );
  }
}
export default connect(
  (state) => ({ userInfo: state.getIn(['homeReducer', 'userInfo']) }),
  {
    getUserInfoAction
  }
)(Index);
