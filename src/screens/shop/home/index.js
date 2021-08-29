import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableNativeFeedback,
  TextInput
} from 'react-native';

import Top from '../../../component/common/myTop';
import { pxToDp } from '@utils/styleKits';
import Swiper from 'react-native-swiper';
import { NavigationContext } from '@react-navigation/native';
import Maylike from './components/maylike';
import { getShopList } from '@service/shop';
import { connect } from 'react-redux';
import { getAddressListAction } from '../../my/address/store/actions';

class Index extends PureComponent {
  state = {
    arr: [],
    text: '初始状态',
    refreshing: false
  };
  UNSAFE_componentWillMount() {
    this.props.getAddressListAction();
  }
  componentDidMount() {
    getShopList(0, 5).then((res) => {
      this.setState({ arr: res });
    });
  }
  static contextType = NavigationContext;
  _onRefresh() {
    if (this.state.refreshing === false) {
      this._updateState('正在刷新......', true);

      //5秒后结束刷新
      setTimeout(() => {
        this._updateState('结束状态', false);
      }, 1000);
    }
  }

  //更新State
  _updateState(message, refresh) {
    this.setState({ text: message, refreshing: refresh });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/**搜索框*/}
        <Top icon2="search" />
        <ScrollView
          bounces={true}
          refreshControl={
            <RefreshControl
              tintColor={'red'}
              titleColor={'brown'}
              title={'正在刷新......'}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          showsVerticalScrollIndicator={false}
        >
          {/*轮播 */}
          <View style={{ height: pxToDp(220) }}>
            <Swiper
              removeClippedSubviews={false}
              showsButtons={false}
              loop={true}
              autoplay={true}
              showsPagination={false}
              autoplayTimeout={3}
              style={{ marginBottom: pxToDp(8) }}
            >
              <View style={styles.slide}>
                <Image
                  style={styles.lunboimage}
                  source={require('../../../res/19.jpg')}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.lunboimage}
                  source={require('../../../res/19-1.jpg')}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.lunboimage}
                  source={require('../../../res/19-2.jpg')}
                />
              </View>
            </Swiper>
          </View>
          {/*小推广 */}
          <View style={styles.titlebox}>
            <View style={styles.left}>
            </View>
            <View style={{ marginLeft: pxToDp(6) }}>
              <Text style={styles.titletext}>
                越剧商城
              </Text>
              <Text style={styles.titlepinyin}>
                yue ju shang cheng
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: pxToDp(16),
              marginRight: pxToDp(16),
              marginTop: pxToDp(8)
            }}
          >
            {/*线下门票 */}
            <TouchableNativeFeedback
              onPress={() => this.context.navigate('ticket')}
              useForeground={true}
            >
              <View>
                <Image
                  style={styles.image3}
                  source={require('../../../res/门票.jpg')}
                />
              </View>
            </TouchableNativeFeedback>
            {/*戏服租赁 */}
            <View
              style={{
                height: pxToDp(170),
                justifyContent: 'space-between',
                marginLeft: pxToDp(10)
              }}
            >
              <TouchableNativeFeedback
                useForeground={true}
                onPress={() => this.context.navigate('Zulin', 0)}
              >
                <View>
                  <Image
                    style={styles.image4}
                    source={require('../../../res/30.jpg')}
                  />
                </View>
              </TouchableNativeFeedback>
              {/*越剧周边 */}
              <TouchableNativeFeedback
                onPress={() => this.context.navigate('Zhoubian', 1)}
                useForeground={true}
              >
                <View>
                  <Image
                    style={styles.image4}
                    source={require('../../../res/29.jpg')}
                  />
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          {/*推荐模块 */}
          <View style={styles.titlebox}>
            <View style={styles.left}>
            </View>
            <View style={{ marginLeft: pxToDp(6) }}>
              <Text style={styles.titletext}>
                猜你喜欢
              </Text>
              <Text style={styles.titlepinyin}>
                cai ni xi huan
              </Text>
            </View>
          </View>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginLeft: pxToDp(16),
              marginRight: pxToDp(16),
              justifyContent: 'space-between',
              marginTop: pxToDp(-4)
            }}
          >
            {this.state.arr.map((item) => (
              <Maylike
                key={item.id}
                imguri={item.imguri}
                name={item.title}
                number={item.sellnum}
                price={item.price}
                id={item.id}
              />
            ))}
          </View>
          <View style={styles.tcard}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToDp(200),
    marginTop: pxToDp(8),
    borderRadius: pxToDp(8)
  },
  tcard: {
    height: pxToDp(20)
  },
  ocard: {
    backgroundColor: 'white',
    width: pxToDp(174),
    borderRadius: pxToDp(8),
    margin: pxToDp(16)
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(174),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
  lunboimage: {
    height: '100%',
    width: '92%',
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16)
  },
  title: {
    color: '#62bfad',
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginTop: pxToDp(16),
    marginBottom: pxToDp(16)
  },
  image1: {
    height: pxToDp(100),
    width: pxToDp(355),
    borderRadius: pxToDp(8)
  },
  box: {
    height: pxToDp(115),
    width: pxToDp(105),
    backgroundColor: '#468cd3',
    alignItems: 'center',
    borderRadius: pxToDp(8)
  },
  image2: {
    height: pxToDp(90),
    width: pxToDp(105),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
  text: {
    fontSize: pxToDp(15),
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: pxToDp(3)
  },
  image3: {
    height: pxToDp(170),
    width: pxToDp(166.5),
    borderRadius: pxToDp(8)
  },
  image4: {
    height: pxToDp(80),
    width: pxToDp(167),
    borderRadius: pxToDp(8),
    alignSelf: 'center'
  },
  titlebox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16),
    marginTop: pxToDp(8)
  },
  left: {
    width: pxToDp(4),
    height: '75%',
    backgroundColor: '#62bfad',
    borderRadius: pxToDp(2)
  },
  titletext: {
    fontSize: pxToDp(18),
    color: '#62bfad',
    fontWeight: 'bold'
  },
  titlepinyin: {
    fontSize: pxToDp(14),
    color: '#999999',
    marginTop: pxToDp(-6)
  }
});
export default connect(() => ({}), { getAddressListAction })(Index);
