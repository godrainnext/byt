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
import Top from '../../../component/common/top';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { Carousel } from '../../../component/common/teaset';
import SnapCarousel from '../../../component/SnapCarousel/index';
import { Video } from 'expo-av';

class Index extends PureComponent {
  state = {

  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#ecf6fc', flex: 1 }}>
        <View style={{ marginLeft: pxToDp(8), marginRight: pxToDp(8) }}>
          <Top icon1="arrow-back" title="教学" />
          <ScrollView style={{ marginBottom: pxToDp(50) }}>
            {/*视频 */}
            <View style={{ flex: 1 }}>
              <Video
                source={require('../../../res/越剧介绍.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={true}
                isLooping={false}
                style={{
                  width: pxToDp(355),
                  height: pxToDp(200),
                  marginTop: pxToDp(10)
                }}
              />
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',
                marginTop: pxToDp(16)
              }}
            >
              <TouchableOpacity onPress={() => this.context.navigate("Basic")}
                style={{
                  width: '49%',
                  height: pxToDp(80),
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <ImageBackground
                  style={{
                    width: '98%',
                    height: pxToDp(80),
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                  }}
                  imageStyle={{ borderRadius: pxToDp(8) }}
                  source={require('../../../res/31.jpg')}
                >
                  <Text
                    style={{
                      fontSize: pxToDp(18),
                      fontWeight: 'bold',
                      color: 'white',
                      marginLeft: pxToDp(6)
                    }}
                  >
                    传承计划
                  </Text>
                  <Text
                    style={{
                      fontSize: pxToDp(14),
                      color: 'white',
                      marginLeft: pxToDp(6)
                    }}
                  >
                    越剧基本功
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.context.navigate("Master")}
                style={{
                  width: '49%',
                  height: pxToDp(80),
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  borderRadius: pxToDp(8),
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <Image
                  style={{
                    width: pxToDp(70),
                    height: pxToDp(70),
                    borderRadius: pxToDp(8)
                  }}
                  source={require('../../../res/genre/5.jpg')}
                ></Image>
                <View>
                  <Text
                    style={{
                      fontSize: pxToDp(18),
                      fontWeight: 'bold',
                      color: 'black'
                    }}
                  >
                    名师推荐
                  </Text>
                  <Text style={{ fontSize: pxToDp(14), color: 'black' }}>
                    越剧大师教学
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*轮播图 */}
            <View style={{ marginTop: pxToDp(16), width: '100%' }}>
              <SnapCarousel />
            </View>
            {/* 大图视频 */}
            <View
              style={{
                height: pxToDp(220),
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: pxToDp(16)
              }}
            >
              <View style={{ width: '100%', height: '100%' }}>
                <TouchableOpacity onPress={() => this.context.navigate()}>
                  <ImageBackground
                    style={{ width: '100%', height: pxToDp(220) }}
                    imageStyle={{ borderRadius: pxToDp(8) }}
                    source={{
                      uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fpview%2Fevent_poster%2Fraw%2Fpublic%2Ff3283bd44eec487.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631083362&t=f518e0105b6e4d70c8bd1515d98d8802'
                    }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '76%'
                      }}
                    >
                      <Image
                        style={{ width: pxToDp(60), height: pxToDp(60) }}
                      ></Image>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#D2DFD5',
                        opacity: 0.8,
                        width: '100%',
                        height: '24%',
                        borderRadius: pxToDp(8)
                      }}
                    >
                      <View style={{ margin: pxToDp(8) }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <Text style={{ fontSize: pxToDp(16), width: '96%' }}>
                            跟沈歆雯学越剧
                          </Text>
                          <TouchableOpacity>
                            <Icon1 name="close" size={18} color={'black'} />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                          <Icon name="control-play" size={14} color={'black'} />
                          <Text style={{ marginLeft: pxToDp(4) }}>96.7万</Text>
                          <View style={{ width: pxToDp(20) }}></View>
                          <Icon name="clock" size={14} color={'black'} />
                          <Text style={{ marginLeft: pxToDp(4) }}>02:12</Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
            {/*专栏 */}
            <View
              style={{
                marginTop: pxToDp(16),
                borderRadius: pxToDp(8),
                height: pxToDp(210),
                backgroundColor: 'rgba(255,255,255,0.5)',
                width: '100%'
              }}
            >
              <ImageBackground
                style={{ width: '100%', height: pxToDp(140) }}
                imageStyle={{
                  borderTopLeftRadius: pxToDp(8),
                  borderTopRightRadius: pxToDp(8)
                }}
                source={{
                  uri: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.yUcdUl1MMg1qEIH3eSR2tQHaEo?w=258&h=180&c=7&o=5&dpr=1.75&pid=1.7'
                }}
              >
                <View style={{ margin: pxToDp(8) }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: pxToDp(8)
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => this.context.navigate('MoreElegance')}
                      style={{ alignItems: 'center', flexDirection: 'row' }}
                    >
                      <Text
                        style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}
                      >
                        梨树下
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={{ fontSize: pxToDp(16) }}>前人风韵传后代</Text>
                  <View
                    horizontal={true}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      marginTop: pxToDp(10)
                    }}
                  >
                    <View
                      style={{
                        width: '30%',
                        height: pxToDp(140),
                        borderRadius: pxToDp(8)
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: '100%',
                          height: pxToDp(100),
                          flexDirection: 'row',
                          alignItems: 'flex-end'
                        }}
                        imageStyle={{ borderRadius: pxToDp(8) }}
                        source={{
                          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd2020723s%2F660%2Fw400h260%2F20200723%2F77aa-iwtqvyk3596226.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631088242&t=8d11f82c9b8959e2ebe4a2f3d2da915c'
                        }}
                      >
                        <View
                          style={{
                            margin: pxToDp(4),
                            flexDirection: 'row',
                            justifyContent: 'center'
                          }}
                        >
                          <Icon2 name="play-arrow" size={16} color={'white'} />
                          <Text
                            style={{ color: 'white', marginLeft: pxToDp(4) }}
                          >
                            7589
                          </Text>
                        </View>
                      </ImageBackground>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={{ fontSize: pxToDp(16) }}
                        >
                          越剧台步教学
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '30%',
                        height: pxToDp(140),
                        borderRadius: pxToDp(8)
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: '100%',
                          height: pxToDp(100),
                          flexDirection: 'row',
                          alignItems: 'flex-end'
                        }}
                        imageStyle={{ borderRadius: pxToDp(8) }}
                        source={{
                          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1805%2F12%2Fc4%2F86800294_1526116090750_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631088747&t=39a0a671e23c977056b8eb6f6cccbef6'
                        }}
                      >
                        <View
                          style={{
                            margin: pxToDp(4),
                            flexDirection: 'row',
                            justifyContent: 'center'
                          }}
                        >
                          <Icon2 name="play-arrow" size={16} color={'white'} />
                          <Text
                            style={{ color: 'white', marginLeft: pxToDp(4) }}
                          >
                            7589
                          </Text>
                        </View>
                      </ImageBackground>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={{ fontSize: pxToDp(16) }}
                        >
                          越剧水袖教学
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '30%',
                        height: pxToDp(140),
                        borderRadius: pxToDp(8)
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => this.context.navigate('ListenList')}
                      >
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: pxToDp(100),
                            flexDirection: 'row',
                            alignItems: 'flex-end'
                          }}
                          imageStyle={{ borderRadius: pxToDp(8) }}
                          source={{
                            uri: 'https://img0.baidu.com/it/u=2176866696,2026454484&fm=26&fmt=auto&gp=0.jpg'
                          }}
                        >
                          <View
                            style={{
                              margin: pxToDp(4),
                              flexDirection: 'row',
                              justifyContent: 'center'
                            }}
                          >
                            <Icon2
                              name="play-arrow"
                              size={16}
                              color={'white'}
                            />
                            <Text
                              style={{ color: 'white', marginLeft: pxToDp(4) }}
                            >
                              4289
                            </Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>

                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={{ fontSize: pxToDp(16) }}
                        >
                          越剧扇子的妙用
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            {/* 轮播图 */}
            <View
              style={{
                borderRadius: pxToDp(16),
                height: pxToDp(110),
                marginTop:pxToDp(16)
              }}
            >
              <Carousel control style={{ height: pxToDp(110) }}>
                <View
                  style={{
                    width: '100%',
                    height: pxToDp(100),
                    borderRadius: pxToDp(16),
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      style={{
                        width: '38%',
                        height: pxToDp(92),
                        borderRadius: pxToDp(8)
                      }}
                      source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fweb.sobeycloud.com%2Fksdst%2Fupload%2FImage%2Fmrtp%2Fa0596dd21f294618b100b491f36bc16a.jpg%3F1540781616319&refer=http%3A%2F%2Fweb.sobeycloud.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631089037&t=cb3d24dc288a31bba3d4470d346f6f38'
                      }}
                    ></Image>
                    <View
                      style={{
                        width: '58%',
                        height: pxToDp(92),
                        padding: pxToDp(8)
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}
                      >
                        浙江小百花越剧团
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          marginTop: pxToDp(5),
                          marginBottom: pxToDp(5)
                        }}
                      >
                        新版《梁山伯与祝英台》，一段流传了一千七百多年的爱情故事再度登上了舞台
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          flex: 1
                        }}
                      >
                        <Icon name="control-play" size={12} color={'black'} />
                        <Text>6.3万</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: pxToDp(100),
                    borderRadius: pxToDp(16),
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      style={{
                        width: '38%',
                        height: pxToDp(92),
                        borderRadius: pxToDp(8)
                      }}
                      source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cyf98.cn%2Fupload%2Fimg%2FpYqLhIBIkNew3hfPpivZNpvyLpIHt-Vbq3t9GHIBEUdUUZvza39sNQXKes-XrzmsdbPVSBiXmcFgU1xuzFZ1U9V74nrGvfozWdtWFRwzrS3uttVBz4k2nW4.jpg&refer=http%3A%2F%2Fwww.cyf98.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631089220&t=7673d4718d8f83d49ba433be1f704414'
                      }}
                    ></Image>
                    <View
                      style={{
                        width: '58%',
                        height: pxToDp(92),
                        padding: pxToDp(8)
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}
                      >
                        天上掉下个林妹妹
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          marginTop: pxToDp(5),
                          marginBottom: pxToDp(5)
                        }}
                      >
                        有哪些适合新手的越剧唱段
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          flex: 1
                        }}
                      >
                        <Icon name="control-play" size={12} color={'black'} />
                        <Text>23.7万</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: pxToDp(100),
                    borderRadius: pxToDp(24),
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      style={{
                        width: '38%',
                        height: pxToDp(92),
                        borderRadius: pxToDp(8)
                      }}
                      source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupfile.cuepa.cn%2Fnewspics%2F2016%2F02%2Fs_184c49bcb3de665e32b015a291c0725d11750.jpg&refer=http%3A%2F%2Fupfile.cuepa.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631089466&t=0622beb059cad15f78be53db35a89e9f'
                      }}
                    ></Image>
                    <View
                      style={{
                        width: '58%',
                        height: pxToDp(92),
                        padding: pxToDp(8)
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}
                      >
                        姚水娟
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          marginTop: pxToDp(5),
                          marginBottom: pxToDp(5)
                        }}
                      >
                        了解越剧皇后的一生
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          flex: 1
                        }}
                      >
                        <Icon name="control-play" size={12} color={'black'} />
                        <Text>1.7万</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Carousel>
            </View>
            {/* 大图视频 */}
            <View
              style={{
                height: pxToDp(220),
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: pxToDp(8),
                marginBottom:pxToDp(30)
              }}
            >
              <View style={{ width: '100%', height: '100%' }}>
                <TouchableOpacity onPress={() => this.context.navigate()}>
                  <ImageBackground
                    style={{ width: '100%', height: pxToDp(220) }}
                    imageStyle={{ borderRadius: pxToDp(8) }}
                    source={{
                      uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fpview%2Fevent_poster%2Fraw%2Fpublic%2Ff3283bd44eec487.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631083362&t=f518e0105b6e4d70c8bd1515d98d8802'
                    }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '76%'
                      }}
                    >
                      <Image
                        style={{ width: pxToDp(60), height: pxToDp(60) }}
                      ></Image>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#D2DFD5',
                        opacity: 0.8,
                        width: '100%',
                        height: '24%',
                        borderRadius: pxToDp(8)
                      }}
                    >
                      <View style={{ margin: pxToDp(8) }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Text style={{ fontSize: pxToDp(16), width: '96%' }}>
                            跟沈歆雯学越剧
                          </Text>
                          <TouchableOpacity>
                            <Icon1 name="close" size={18} color={'black'} />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                          <Icon name="control-play" size={14} color={'black'} />
                          <Text style={{ marginLeft: pxToDp(4) }}>96.7万</Text>
                          <View style={{ width: pxToDp(20) }}></View>
                          <Icon name="clock" size={14} color={'black'} />
                          <Text style={{ marginLeft: pxToDp(4) }}>02:12</Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Index;
