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
        <Top icon1="arrow-back" title="图谱" />
        <View
          style={{
            height: pxToDp(780),
            backgroundColor: '#D5E8E6'
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
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 3 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t1.jpg')}
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
                      张桂凤
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 4 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t2.jpg')}
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
                      姚水娟
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 5 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t8.jpg')}
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
                      京剧
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 6 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t9.jpg')}
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
                      昆曲
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
              <View style={[styles.box, { marginLeft: pxToDp(22) }]}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 1 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t5.jpg')}
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
                      borderRadius: pxToDp(48)
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
              <View style={[styles.box, { marginRight: pxToDp(22) }]}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 2 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t7.jpg')}
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
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 7 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t3.png')}
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
                      白玉梅
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 8 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t4.jpg')}
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
                      徐天红
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 9 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t10.jpg')}
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
                      梁祝
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.setState({ ArrIndex: 10 })}
                  style={styles.smallbox}
                >
                  <ImageBackground
                    style={styles.boxImg}
                    imageStyle={{
                      borderRadius: pxToDp(48)
                    }}
                    source={require('../../res/genre/t11.jpg')}
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
                      红楼梦
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
    borderRadius: pxToDp(8),
    margin: pxToDp(10)
  },
  image: {
    height: pxToDp(210),
    width: pxToDp(355),
    borderRadius: pxToDp(8),
    backgroundColor: '#666'
  },
  box: {
    width: pxToDp(50),
    height: pxToDp(50),
    borderRadius: pxToDp(48),
    backgroundColor: '#c26f9b'
  },
  boxImg: {
    width: pxToDp(50),
    height: pxToDp(50)
  },
  smallbox: {
    borderRadius: pxToDp(48)
  }
});
