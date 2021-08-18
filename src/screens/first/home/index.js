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
import Actress from '@components/first/actress';
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
        <ScrollView style={{ marginBottom: 80 }}>
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
          <Actress />
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
