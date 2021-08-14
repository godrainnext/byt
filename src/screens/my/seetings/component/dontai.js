import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import { sandian } from '../../../../component/common/iconSvg';
import { BottomSheet, ListItem } from 'react-native-elements';
const dianzan =
  '<svg t="1627563384559" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1994" width="200" height="200"><path d="M 905.6 345.631 c -37.44 -9.79125 -125.472 -9.6 -254.304 -13.0556 c 6.14437 -28.1278 7.48875 -53.4712 7.48875 -98.4 C 658.88 126.656 580.544 32 511.231 32 c -48.9591 0 -89.2791 40.0313 -89.8556 89.1844 c -0.67125 60.2878 -19.2 164.447 -119.808 217.343 c -7.39219 3.84 -28.4156 14.2078 -31.4878 15.6478 l 1.53562 1.34438 a 95.04 95.04 0 0 0 -59.9034 -24 H 121.856 A 89.9522 89.9522 0 0 0 32 421.376 V 900.8 c 0 49.5356 40.32 89.8556 89.8556 89.8556 h 89.8566 a 88.8 88.8 0 0 0 79.9678 -51.7434 l 1.34438 0.384375 l 7.2 1.91906 c 0.48 0 0.767812 0.0965625 1.34344 0.28875 c 17.28 4.32 50.4966 12.1912 121.44 28.5112 c 15.36 3.45656 95.6156 20.64 178.944 20.64 h 163.776 c 49.92 0 86.88 -18.6234 107.232 -57.7912 c 19.9688 -34.7531 117.696 -221.28 117.6 -484.224 c 0 -37.8244 -26.2078 -86.1122 -84.96 -102.912 Z M 241.664 900.8 c 0 16.5122 -13.44 29.9522 -29.9531 29.9522 H 121.857 a 29.9522 29.9522 0 0 1 -29.9513 -29.9522 V 421.376 c 0 -16.5112 13.44 -29.9513 29.9513 -29.9513 h 89.8566 c 16.6078 0 29.9522 13.44 29.9522 29.9513 V 900.8 Z M 929.984 467.456 c -12.48 300.96 -109.824 437.184 -109.824 437.184 c -9.12 16.32 -23.6156 26.1122 -54.5278 26.1122 H 601.952 c -82.2722 0 -163.872 -18.6244 -165.984 -19.2 c -124.416 -28.6078 -130.943 -30.8156 -138.72 -33.0244 l 4.32 -440.16 c 0 -45.5034 0.96 -33.9844 0 -33.4078 C 438.464 348.32 480.128 224 481.28 121.952 A 30.0478 30.0478 0 0 1 511.232 92 c 31.68 0 87.6478 63.5522 87.6478 142.272 c 0 71.04 -2.88 83.2312 -27.7444 157.248 c 299.52 0 297.504 4.32 323.904 11.2312 c 32.8312 9.40875 35.52 36.4809 35.52 45.8887 c 0 10.2722 -0.192188 8.83125 -0.575625 18.8156 Z" fill="#2c2c2c" p-id="1995"></path></svg>';
const zhuanfa =
  '<svg t="1627563670633" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3597" width="200" height="200"><path d="M547.2 864c-4.1 0-8.2-0.8-12.2-2.4-12-4.9-19.8-16.6-19.8-29.6V637.4c-129.6 30.3-244.3 89.9-325.8 170-10.5 10.3-26.6 12.1-39.1 4.5s-18.2-22.8-13.9-36.8c29.1-93.7 81.4-180 151.2-249.6 64.2-64 142.5-113.1 227.6-143V193.8c0-13 7.8-24.6 19.8-29.6 12-4.9 25.7-2.2 34.9 7L887.3 490c12.4 12.5 12.4 32.6 0 45.1L569.9 854.6c-6.1 6.1-14.3 9.4-22.7 9.4z m0-298c7.4 0 14.7 2.6 20.5 7.4 7.3 6.1 11.5 15.1 11.5 24.6v156.4l240.3-241.8-240.3-241.3v134.3c0 14.1-9.2 26.5-22.6 30.6C425.4 476.4 316.1 564 248.1 679.6c22.7-14.5 46.6-28 71.6-40.4 68-33.6 142.6-58 221.6-72.7 2-0.3 4-0.5 5.9-0.5z" fill="#666666" p-id="3598"></path></svg>';
const pinglun =
  '<svg t="1627563771753" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4413" width="200" height="200"><path d="M841.15200031 70.44266698c57.28000031 0 104.12800031 44.67199969 108.864 101.376l0.384 9.53599969v477.12c0 57.91999969-43.776 105.66400031-99.84 110.52799969l-9.408 0.44800031h-90.11200031a31.99999969 31.99999969 0 0 1-5.76-63.48799969l5.76-0.51200062h90.11200031a45.888 45.888 0 0 0 44.79999938-40.57599938l0.44800031-6.40000031V181.35466667a46.39999969 46.39999969 0 0 0-39.168-46.52800031l-6.07999969-0.384H163.712a45.888 45.888 0 0 0-44.86399969 40.512l-0.44800031 6.40000031v477.12c0 23.93599969 17.21599969 43.45600031 39.168 46.52800031l6.144 0.44799938H530.55999969a31.99999969 31.99999969 0 0 1 19.2 6.336l3.84 3.39200062 190.14400031 197.05599938a31.99999969 31.99999969 0 0 1-41.59999969 48.192l-4.416-3.77599969-180.73600031-187.26400031h-353.28a109.95199969 109.95199969 0 0 1-108.864-101.31199969l-0.44800031-9.6V181.35466667c0-57.91999969 43.776-105.6 99.84-110.52799969l9.47200031-0.384h677.44000031z" fill="#515151" p-id="4414"></path><path d="M243.2 270.50666698m37.56799969 0l287.808 0q37.56799969 0 37.56800062 37.56799969l0 0.06400031q0 37.56799969-37.56800062 37.56799969l-287.808 0q-37.56799969 0-37.56799969-37.56799969l0-0.06400031q0-37.56799969 37.56799969-37.56799969Z" fill="#515151" p-id="4415"></path><path d="M243.2 466.09066667m37.56799969 0l440.57600062 0q37.56799969 0 37.56799969 37.56799969l0 0.06400031q0 37.56799969-37.56799969 37.56799969l-440.57600062 0q-37.56799969 0-37.56799969-37.56799969l0-0.06400031q0-37.56799969 37.56799969-37.56799969Z" fill="#515151" p-id="4416"></path></svg>';
class Index extends PureComponent {
  state = {
    dt: [
      { name: 'wulawulaaaa', date: '2019-02-12' },
      { name: 'wulawulaaaa', date: '2019-02-12' },
      { name: 'wulawulaaaa', date: '2019-02-12' },
      { name: 'wulawulaaaa', date: '2019-02-12' }
    ],
    list: [
      { title: '收藏' },
      { title: '举报' },
      {
        title: '取消',
        containerStyle: { backgroundColor: 'red' },
        titleStyle: { color: 'white' },
        onPress: () => this.setState({ isShow: false })
      }
    ],
    isShow: false
  };

  static contextType = NavigationContext;

  render() {
    return (
      <ScrollView>
        <View
          style={{
            width: '95%',
            marginLeft: pxToDp(10),
            marginTop: pxToDp(20),
            marginBottom: pxToDp(20),
            backgroundColor: '#fff'
          }}
        >
          {this.props.dongtai.map((item, dtid) => (
            <View key={dtid}>
              <BottomSheet
                isVisible={this.state.isShow}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
              >
                {this.state.list.map((l, i) => (
                  <ListItem
                    key={i}
                    containerStyle={l.containerStyle}
                    onPress={l.onPress}
                  >
                    <ListItem.Content>
                      <ListItem.Title style={l.titleStyle}>
                        {l.title}
                      </ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                ))}
              </BottomSheet>
              <TouchableOpacity
                style={{ position: 'absolute', top: 10, right: 20 }}
                onPress={() => this.setState({ isShow: true })}
              >
                <SvgUri svgXmlData={sandian} width="20" height="20" />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginBottom: pxToDp(10),
                  marginLeft: pxToDp(10)
                }}
              >
                <Text style={{ fontSize: pxToDp(25), fontWeight: 'bold' }}>
                  {item.date.substr(3, 3)}
                </Text>
                <Text style={{ fontSize: 17, paddingLeft: 5 }}>
                  {item.date.substr(0, 3)}
                </Text>
              </View>
              <View
                style={{
                  elevation: 1,
                  borderWidth: 0,
                  backgroundColor: '#fcfcfc'
                }}
              >
                <View
                  style={{
                    marginLeft: pxToDp(30),
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                  }}
                ></View>
                <View
                  style={{ flexDirection: 'row', margin: pxToDp(10) }}
                ></View>
                <View
                  style={{
                    width: '90%',
                    marginBottom: pxToDp(30),
                    alignSelf: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontSize: pxToDp(18),
                      marginBottom: pxToDp(10),
                      paddingLeft: pxToDp(8),
                      marginTop: pxToDp(10)
                    }}
                  >
                    {item.dt}
                  </Text>
                  <ScrollView
                    style={{
                      flex: 1,
                      height: pxToDp(150),
                      marginTop: pxToDp(10)
                    }}
                    horizontal={true}
                  >
                    {item.dtimg2.map((item) => (
                      <Image
                        style={{
                          width: 150,
                          height: '100%',
                          borderRadius: 10,
                          marginRight: 10
                        }}
                        source={{ uri: item }}
                      />
                    ))}
                  </ScrollView>
                </View>
              </View>
              <View
                style={{
                  width: '90%',
                  marginBottom: pxToDp(30),
                  alignSelf: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: pxToDp(18),
                    marginBottom: pxToDp(10),
                    paddingLeft: pxToDp(8),
                    marginTop: pxToDp(10)
                  }}
                >
                  {item.dt}
                </Text>
                <ScrollView
                  style={{
                    flex: 1,
                    height: pxToDp(150),
                    marginTop: pxToDp(10)
                  }}
                  horizontal={true}
                >
                  {item.dtimg2.map((item) => (
                    <Image
                      style={{
                        width: 150,
                        height: '100%',
                        borderRadius: 10,
                        marginRight: 10
                      }}
                      source={{ uri: item }}
                    />
                  ))}
                </ScrollView>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginBottom: pxToDp(10)
                }}
              >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                  <SvgUri svgXmlData={dianzan} width="20" height="20" />
                  <Text
                    style={{
                      position: 'absolute',
                      bottom: pxToDp(5),
                      left: pxToDp(30)
                    }}
                  >
                    {item.dz}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.context.navigate('Indongtai')}
                >
                  <SvgUri svgXmlData={pinglun} width="20" height="20" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <SvgUri svgXmlData={zhuanfa} width="25" height="25" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default Index;
