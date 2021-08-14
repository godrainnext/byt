import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Top from '../../component/common/top';
import Swiper from 'react-native-swiper';
import { pxToDp } from '../../utils/styleKits';
import Feather from 'react-native-vector-icons/Feather';
import { AlwaysOpen } from '../../component/common/hidemenu';

export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ArrIndex: 0
    };
  }
  render() {
    const { ArrIndex } = this.state;
    return (
      <View
        stickyHeaderIndices={[0]}
        style={{ backgroundColor: 'green', width: '100%', height: '100%' }}
      >
        <Top icon1="arrow-back" title="时间轴" />
        <View
          style={{
            height: pxToDp(780),
            backgroundColor: '#468cd3'
          }}
        >
          <View
            style={{
              height: pxToDp(250),
              margin: pxToDp(15),
              marginTop: pxToDp(32)
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: pxToDp(20)
              }}
            >
              <View style={styles.box}>
                <TouchableOpacity style={styles.smallbox}>
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/1.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      郭德纲
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity style={styles.smallbox}>
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/2.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      郭德纲
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity style={styles.smallbox}>
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/3.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      郭德纲
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity style={styles.smallbox}>
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/4.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      郭德纲
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: pxToDp(20)
              }}
            >
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 1 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/5.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      何赛飞
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 0 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/6.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      越剧
                      {/*  {this.props.children.daddata.name} */}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 2 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/7.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      黄梅戏
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: pxToDp(20)
              }}
            >
              <View style={styles.box}>
                <TouchableOpacity style={styles.smallbox}>
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/8.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      郭德纲
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity style={styles.smallbox}>
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/9.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      郭德纲
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity style={styles.smallbox}>
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/10.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      郭德纲
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity style={styles.smallbox}>
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(50)
                    }}
                    source={require('../../res/genre/11.jpg')}
                  ></ImageBackground>
                  <View
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(12),
                        fontWeight: 'bold'
                      }}
                    >
                      郭德纲
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <Swiper
              removeClippedSubviews={false}
              showsButtons={true} //显示控制按钮
              showsPagination={true} //是否显示小圆点
              autoplayTimeout={3} //每隔3秒切换
            >
              <View style={styles.slide}>
                <ImageBackground
                  style={styles.image}
                  //   source={require("../../res/22.jpg")}
                ></ImageBackground>
              </View>
              <View style={styles.slide}>
                <ImageBackground
                  style={styles.image}
                  // source={require("../../res/8.jpg")}
                />
              </View>
              <View style={styles.slide}>
                <ImageBackground
                  style={styles.image}
                  //  source={require("../../res/performer/10.jpg")}
                />
              </View>
            </Swiper> */}

          <AlwaysOpen ArrData={ArrIndex} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToDp(230),
    borderRadius: pxToDp(10),
    margin: pxToDp(10)
  },
  image: {
    height: pxToDp(210),
    width: pxToDp(355),
    borderRadius: pxToDp(10),
    backgroundColor: '#666'
  },
  box: {
    width: pxToDp(50),
    height: pxToDp(50),
    borderRadius: pxToDp(50),
    backgroundColor: '#c26f9b'
  },
  boxImg: {
    width: pxToDp(50),
    height: pxToDp(50)
  },
  smallbox: {
    borderRadius: pxToDp(50)
  }
});
