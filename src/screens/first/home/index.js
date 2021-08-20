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
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import HighLights from '@components/first/HighLights';
import Hy from '@components/first/hy';
import Legend from '@components/first/legend';
import Actress from '@components/first/actress';
import { connect } from 'react-redux';
import { getUserInfoAction } from './store/actions';
import RecommendCard from '../../../component/common/recommendcard';
import Qiandao from '../../../component/common/qiandao';
class Index extends Component {

  static contextType = NavigationContext;
  state = {
    arr: [],
    isModalVisible: false
  };
  componentDidMount() {
    this.props.getUserInfoAction();
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  render() {
    return (
      <ParallaxScrollView
        renderStickyHeader={() => <Top title="百越庭" />}
        stickyHeaderHeight={70}
        parallaxHeaderHeight={200}
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image
              source={{
                uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130307%2F8984340_113532918000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631857652&t=03b4f1cf6deeb6e50010fe5e59eb881d'
              }}
              style={{
                width: 450,
                height: 250
              }}
            ></Image>
            <View
              style={{
                position: 'absolute',
                top: 0,
                width: window.width,
                backgroundColor: 'rgba(0,0,0,.4)',
                height: 250
              }}
            />
          </View>
        )}
        //自定义头部内容
        renderForeground={() => <View style={{ Top: 200, left: 100 }}></View>}
        scrollableViewStyle={{ backgroundColor: '#fcfcfc' }}
      >
        <View style={{ margin: pxToDp(10), marginTop: pxToDp(30), flex: 1 }}>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginBottom: pxToDp(20) }}>
            {/**推荐卡片 */}
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={this.toggleModal} >
              <Ionicons name="library-sharp" size={30} color="#468CD3" />
              <Text style={{ fontSize: pxToDp(15) }}>推荐</Text>
            </TouchableOpacity>
            <RecommendCard isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModal} />
            {/**签到 */}
            <Qiandao />
            {/**待定 */}
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} >
              <Ionicons name="earth-sharp" size={30} color="#468CD3" />
              <Text style={{ fontSize: pxToDp(15) }}>不及丢</Text>
            </TouchableOpacity>
          </View>

          <HighLights />

          {/*俯瞰百年 */}
          <View style={{ margin: pxToDp(10), marginTop: pxToDp(10) }}>
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
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              elevation: 10,
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 1, // 阴影不透明度
              shadowRadius: 10 //  圆角
            }}
          >
            <Legend />
          </View>
          {/*梨园子弟 */}
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
          <Actress />
        </View>
      </ParallaxScrollView>
    );
  }
}
export default connect(
  (state) => ({ userInfo: state.getIn(['homeReducer', 'userInfo']) }),
  {
    getUserInfoAction
  }
)(Index);
