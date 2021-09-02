import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import ViewPagerAndroid from '@react-native-community/viewpager';
import Login from '../../my/Login';
import Mybtn from '../../../component/common/mybtn';
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }
  static contextType = NavigationContext;
  //监听页面变化
  onPageSelected = function (e) {
    //默认从0开始，0是第一页
    this.setState({ page: e.nativeEvent.position });
    //console.log('CurrentPage: ' + e.nativeEvent.position);
    // ToastAndroid.show(
    //   'CurrentPage: ' + e.nativeEvent.position,
    //   ToastAndroid.SHORT
    // );
  };

  render() {
    let page = this.state.page;
    return (
      <View>
        {page == 3 ? null : <View style={{ height: pxToDp(50), backgroundColor: '#d5e8e6' }} >
          <TouchableOpacity
            onPress={() => this.context.navigate(Login)}
            style={styles.tiaoguo}>
            <Text style={{ color: 'white', fontSize: pxToDp(12) }}>跳过</Text>
          </TouchableOpacity>
        </View>}
        <ViewPagerAndroid
          style={styles.container}
          //绑定事件，引用时要在函数末尾加bind(this)
          onPageSelected={this.onPageSelected.bind(this)}
          //初始化页面为第一个页面，从0开始
          initialpage={0}
        >
          <View style={styles.container}>
            <View style={styles.shandow}>
              <Image
                source={require('../../../res/welcome1.png')}
                style={styles.image}
              ></Image>
            </View>
            <Text style={styles.bookname}>
              【梁山伯與祝英台】
            </Text>
            <Text style={styles.welcome}>
              我家有个小九妹/聪明伶俐人钦佩
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.shandow}>
              <Image
                source={require('../../../res/welcome2.png')}
                style={styles.image}
              ></Image>
            </View>
            <Text style={styles.bookname}>
              【紅樓夢】
            </Text>
            <Text style={styles.welcome}>
              天上掉下个林妹妹/似一朵轻云刚出岫
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.shandow}>
              <Image
                source={require('../../../res/welcome3.png')}
                style={styles.image}
              ></Image>
            </View>
            <Text style={styles.bookname}>
              【西廂記】
            </Text>
            <Text style={styles.welcome}>
              兰闺深寂寞/无计度芳春
            </Text>
          </View>
          <View
            style={styles.container}
          >
            <View style={{ height: pxToDp(25) }}></View>
            <View style={styles.shandow}>
              <Image
                source={require('../../../res/welcome4.png')}
                style={styles.image}
              ></Image>
            </View>
            <Text style={styles.bookname}>
              【祥林嫂】
            </Text>
            <Text style={styles.welcome}>
              半信半疑难自解/似梦似醒离人间</Text>
            <Mybtn
              title="进入百越"
              onPress={() => this.context.navigate(Login)}
              buttonStyle={{
                width: pxToDp(320),
                height: pxToDp(40),
                alignSelf: 'center',
                borderRadius: pxToDp(32),
                marginTop: pxToDp(80)
              }}
              titleStyle={{
                color: 'white',
                fontSize: pxToDp(16)
              }}
            />
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: pxToDp(800),
    alignItems: 'center',
    backgroundColor: '#d5e8e6'
  },
  image: {
    width: pxToDp(300),
    height: pxToDp(300),
    borderRadius: pxToDp(150)
  },
  welcome: {
    fontSize: pxToDp(16),
    textAlign: 'center',
    marginTop: pxToDp(8)
  },
  bookname: {
    marginTop: pxToDp(80),
    textAlign: 'center',
    fontSize: pxToDp(20),
  },
  slider: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ol: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: pxToDp(20),
    width: pxToDp(80),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: pxToDp(10),
    margin: pxToDp(20)
  },
  tiaoguo: {
    backgroundColor: '#999999',
    width: pxToDp(60),
    height: pxToDp(25),
    borderRadius: pxToDp(16),
    alignItems: 'center',
    top: pxToDp(16),
    right: pxToDp(16),
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  shandow: {
    width: pxToDp(304),
    height: pxToDp(304),
    borderRadius: pxToDp(150),
    elevation: 2,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'grey',  //  阴影颜色
    shadowRadius: pxToDp(10),
    marginTop: pxToDp(80),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Index;
AppRegistry.registerComponent('Index', () => Index);
