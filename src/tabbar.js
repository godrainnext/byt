import React, { PureComponent } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Svg from 'react-native-svg-uri';
import First from './screens/first/home';
import Talk from './screens/talk/home';
import Shop from './screens/shop/home';
import My from './screens/my/home';
import { pxToDp } from './utils/styleKits';
import RBSheet from 'react-native-raw-bottom-sheet';
import LottieView from 'lottie-react-native';
import Meun from './screens/test/test6';
import { NavigationContext } from '@react-navigation/native';
import Addmoment from './screens/talk/home/forum/addMoment';
import { kaizhibo, fadongtai, kaifangjian } from './component/common/iconSvg';

class Index extends PureComponent {
  static contextType = NavigationContext;
  kaiBo = () => {
    this.Scrollable1.close();
    this.context.navigate('KaiBo');
  };
  kaiFang = () => {
    this.Scrollable1.close();
    this.context.navigate('KaiFang');
  };
  changeVisible = () => {
    this.Scrollable1.close();
    this.context.navigate('AddMoment');
  };
  state = {
    selectedTab: 'first',
    isAuto: true,
    isLoop: false,
    isShow: false,
    pages: [
      {
        selected: 'first',
        title: '戏台',
        renderIcon: () => (
          <Image
            style={{ width: pxToDp(28), height: pxToDp(28) }}
            source={require('./res/戏台.png')}
          ></Image>
        ),
        renderSelectedIcon: () => (
          <View
            style={{
              backgroundColor: 'white',
              height: pxToDp(40),
              width: pxToDp(40),
              borderRadius: pxToDp(20),
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              style={{ width: pxToDp(28), height: pxToDp(28) }}
              source={require('./res/戏台.png')}
            ></Image>
          </View>
        ),
        onPress: () => this.setState({ selectedTab: 'first' }),
        component: <First />
      },
      {
        selected: 'talk',
        title: '戏缘',
        renderIcon: () => (
          <Image
            style={{ width: pxToDp(28), height: pxToDp(28) }}
            source={require('./res/戏缘.png')}
          ></Image>
        ),
        renderSelectedIcon: () => (
          <View
            style={{
              backgroundColor: 'white',
              height: pxToDp(40),
              width: pxToDp(40),
              borderRadius: pxToDp(20),
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              style={{ width: pxToDp(28), height: pxToDp(28) }}
              source={require('./res/戏缘.png')}
            ></Image>
          </View>
        ),
        onPress: () => this.setState({ selectedTab: 'talk' }),
        component: <Talk />
      },
      {
        renderIcon: () => (
          <View>
            {/* <Image style={{ width: pxToDp(28), height: pxToDp(28), borderRadius: pxToDp(14) }} source={require("./res/商城.png")}></Image> */}
            <LottieView
              autoPlay={this.state.isAuto}
              loop={this.state.isLoop}
              style={{ width: pxToDp(70), marginBottom: pxToDp(30) }}
              source={require('../lottie/扇子.json')}
            />
            <RBSheet
              ref={(ref) => {
                this.Scrollable1 = ref;
              }}
              height={272}
              width={375}
              closeOnDragDown
              openDuration={600}
              animationType="fade"
              customStyles={{
                container: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              }}
            >
              <View
                style={{
                  height: pxToDp(72),
                  width: pxToDp(375),
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <View style={styles.gridContainer}>
                  <View
                    style={{
                      width: pxToDp(300),
                      height: '100%',
                      backgroundColor: '#D5E8E6',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      borderRadius: pxToDp(16),
                      flexDirection: 'row',
                      elevation: 4,
                      shadowColor: 'black',
                      shadowOffset: { width: 0, height: 0 },
                      shadowOpacity: 1,
                      shadowRadius: 10
                    }}
                  >
                    <TouchableOpacity
                      onPress={this.kaiBo}
                      style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                      <View style={styles.textbox}>
                        <Svg svgXmlData={kaizhibo} width="22" height="22" />
                      </View>
                      <Text style={styles.text}>开直播</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={this.kaiFang}
                      style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                      <View style={styles.textbox}>
                        <Svg svgXmlData={kaifangjian} width="22" height="22" />
                      </View>
                      <Text style={styles.text}>开房间</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={this.changeVisible}
                      style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                      <View style={styles.textbox}>
                        <Svg svgXmlData={fadongtai} width="20" height="20" />
                      </View>
                      <Text style={styles.text}>发动态</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    width: pxToDp(24),
                    height: pxToDp(24),
                    backgroundColor: '#D5E8E6',
                    transform: [{ rotate: '135deg' }],
                    marginTop: pxToDp(-16),
                    borderRadius: pxToDp(4)
                  }}
                ></View>
              </View>
            </RBSheet>
          </View>
        ),
        renderSelectedIcon: () => (
          <LottieView
            autoPlay={true}
            loop={true}
            style={{ width: pxToDp(70), marginBottom: pxToDp(35) }}
            source={require('../lottie/扇子.json')}
          />
        ),
        onPress: () => this.Scrollable1.open()
      },
      {
        selected: 'shop',
        title: '越市',
        renderIcon: () => (
          <Image
            style={{ width: pxToDp(28), height: pxToDp(28) }}
            source={require('./res/越市.png')}
          ></Image>
        ),
        renderSelectedIcon: () => (
          <View
            style={{
              backgroundColor: 'white',
              height: pxToDp(40),
              width: pxToDp(40),
              borderRadius: pxToDp(20),
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              style={{ width: pxToDp(28), height: pxToDp(28) }}
              source={require('./res/越市.png')}
            ></Image>
          </View>
        ),
        onPress: () => this.setState({ selectedTab: 'shop' }),
        component: <Shop />
      },
      {
        selected: 'my',
        title: '戏痴',
        renderIcon: () => (
          <Image
            style={{ width: pxToDp(28), height: pxToDp(28) }}
            source={require('./res/戏痴.png')}
          ></Image>
        ),
        renderSelectedIcon: () => (
          <View
            style={{
              backgroundColor: 'white',
              height: pxToDp(40),
              width: pxToDp(40),
              borderRadius: pxToDp(20),
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              style={{ width: pxToDp(28), height: pxToDp(28) }}
              source={require('./res/戏痴.png')}
            ></Image>
          </View>
        ),
        onPress: () => this.setState({ selectedTab: 'my' }),
        component: <My />
      }
    ]
  };
  render() {
    const { selectedTab, pages } = this.state;
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <TabNavigator>
          {pages.map((v, i) => (
            <TabNavigator.Item
              key={v.title}
              selected={selectedTab === v.selected}
              title={v.title}
              renderIcon={v.renderIcon}
              renderSelectedIcon={v.renderSelectedIcon}
              onPress={v.onPress}
              selectedTitleStyle={{
                color: '#62bfad',
                height: 30,
                fontSize: pxToDp(14),
                borderRadius: 50
              }}
              tabStyle={{
                backgroundColor: 'white',
                justifyContent: 'center'
              }}
            >
              {v.component}
            </TabNavigator.Item>
          ))}
        </TabNavigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  gridContainer: {
    height: pxToDp(72),
    width: pxToDp(375),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: pxToDp(20),
    zIndex: 9999
  },
  text: {
    fontSize: pxToDp(13),
    color: 'black'
  },
  textbox: {
    height: pxToDp(36),
    width: pxToDp(36),
    borderRadius: pxToDp(30),
    alignItems: 'center',
    borderWidth: pxToDp(2),
    borderColor: '#62bfad',
    justifyContent: 'center'
  },
  image1: {
    height: pxToDp(160),
    width: pxToDp(160),
    margin: pxToDp(5),
    borderRadius: pxToDp(10)
  },
  image2: {
    height: pxToDp(75),
    width: pxToDp(175),
    margin: pxToDp(5),
    borderRadius: pxToDp(10)
  },
  textinputbox: {
    height: pxToDp(40),
    width: pxToDp(180),
    borderRadius: pxToDp(30),
    backgroundColor: 'white',
    marginTop: pxToDp(10)
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 5,
    marginTop: pxToDp(35),
    elevation: 12,
    width: pxToDp(240),
    height: pxToDp(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText1: {
    marginBottom: pxToDp(15),
    textAlign: 'center',
    fontSize: pxToDp(15)
  },
  modalText2: {
    marginTop: pxToDp(35),
    textAlign: 'center',
    fontSize: pxToDp(15)
  },
  modalText3: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: pxToDp(13)
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: pxToDp(40),
    width: pxToDp(30),
    backgroundColor: '#f5f5f5',
    borderRadius: pxToDp(10)
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalText4: {
    margin: pxToDp(25),
    fontSize: pxToDp(15)
  },
  modalText5: {
    fontSize: pxToDp(12)
  },
  button: {
    backgroundColor: '#468cd3',
    height: pxToDp(20),
    width: pxToDp(50),
    borderRadius: pxToDp(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pxToDp(10)
  },
  book: {
    marginTop: pxToDp(-130),
    marginLeft: pxToDp(12),
    height: pxToDp(120),
    width: pxToDp(100),
    borderRadius: pxToDp(8),
    elevation: 5, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8), //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Index;
