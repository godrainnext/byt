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
    // console.log('CurrentPage: ' + e.nativeEvent.position);
    // ToastAndroid.show(
    //   'CurrentPage: ' + e.nativeEvent.position,
    //   ToastAndroid.SHORT
    // );
  };

  render() {
    let page = this.state.page;
    return (
      /*左右翻页组件*/
      <ViewPagerAndroid
        style={styles.container}
        //绑定事件，引用时要在函数末尾加bind(this)
        onPageSelected={this.onPageSelected.bind(this)}
        //初始化页面为第一个页面，从0开始
        initialpage={0}
      >
        <View style={styles.container}>
          <Image
            source={require('../../../res/welcome1.png')}
            style={styles.image}
          ></Image>
          <Text style={styles.welcome}>
            梁山伯与祝英台{'\n'}
            我家有个小九妹/聪明伶俐人钦佩
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={require('../../../res/welcome2.png')}
            style={styles.image}
          ></Image>
          <Text style={styles.welcome}>
            红楼梦{'\n'}
            天上掉下个林妹妹，似一朵轻云刚出岫
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={require('../../../res/welcome3.png')}
            style={styles.image}
          ></Image>
          <Text style={styles.welcome}>
            西厢记{'\n'}
            兰闺深寂寞 无计度芳春/料得行吟者 应怜长叹人
          </Text>
        </View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.context.navigate(Login)}
        >
          <Image
            source={require('../../../res/welcome4.png')}
            style={styles.image}
          ></Image>
          <Text style={styles.welcome}>欢迎使用百越亭APP</Text>
        </TouchableOpacity>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#CCFF66'
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    width: pxToDp(300),
    height: pxToDp(300),
    borderRadius: pxToDp(150)
  },
  welcome: {
    fontSize: pxToDp(16),
    textAlign: 'center'
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
  li: {
    backgroundColor: 'rgba(255,255,255,1.0)',
    height: pxToDp(16),
    width: pxToDp(16),
    borderRadius: pxToDp(8)
  },
  currt: {
    backgroundColor: 'rgba(255,255,255,1.0)',
    height: pxToDp(16),
    width: pxToDp(16),
    borderRadius: pxToDp(8)
  }
});
export default Index;
AppRegistry.registerComponent('Index', () => Index);
