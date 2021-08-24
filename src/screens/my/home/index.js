import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  DeviceEventEmitter
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import List from '@components/common/list';
import { NavigationContext } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getUserOriderListAction } from '../../first/home/store/actions';
import UserInner from '../../../component/home/userInner';
import LinearGradient from 'react-native-linear-gradient';
import MyAddress from '../../../component/my/address/myAddress';

class Index extends PureComponent {
  state = { avatar: '' };

  componentDidMount() {
    this.props.getUserOriderListAction();
    this.subscript = DeviceEventEmitter.addListener(
      'valueChange',
      this.changeAvatar
    );
  }
  changeAvatar = (avatar) => {
    this.setState({ avatar });
  };
  componentWillUnmount() {
    this.subscript.remove();
  }
  static contextType = NavigationContext;
  render() {
    return (
      <LinearGradient
        colors={['#a1d9fd', 'white']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
        style={{ flex: 1 }}
      >
        <Top title="戏痴" />
        <ScrollView>
          <UserInner />
          <View
            style={{
              borderRadius: pxToDp(8),
              backgroundColor: '#f0fcff',
              marginLeft:pxToDp(16),
              marginRight:pxToDp(16),
              height: pxToDp(140),
              marginTop: pxToDp(8),
              elevation: 3,
              borderWidth: 0
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: pxToDp(12),
                alignItems: 'center'
              }}
            >
              <View>
                <Text style={{ fontSize: pxToDp(18),color:'#333333'}}>我的订单</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.context.navigate('Order', 0)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'center',      
                  }}
                >
                  <Text style={{  fontSize: pxToDp(14),color:"#666666"}}>查看全部订单 </Text>
                  <Ionicons name="angle-right" size={24} color="#666666" />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: pxToDp(16)
              }}
            >
              <TouchableOpacity
                onPress={() => this.context.navigate('Order', 1)}
              >
                <View style={{ alignItems: 'center' }}>
                  <Ionicons name="credit-card" size={25} color="#468CD3" />
                  <Text style={{ fontSize: pxToDp(16),color:'#333333',marginTop: pxToDp(8) }}>
                    待支付
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.context.navigate('Order', 2)}
              >
                <View style={{ alignItems: 'center' }}>
                  <Ionicons name="truck" size={25} color="#468CD3" />
                  <Text style={{ fontSize: pxToDp(16),color:'#333333', marginTop: pxToDp(8) }}>
                    待收货
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.context.navigate('Order', 3)}
              >
                <View style={{ alignItems: 'center' }}>
                  <Ionicons name="commenting-o" size={25} color="#468CD3" />
                  <Text style={{ fontSize: pxToDp(16),color:'#333333', marginTop: pxToDp(8) }}>
                    待评价
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.context.navigate('Refund')}>
                <View style={{ alignItems: 'center' }}>
                  <Ionicons name="handshake-o" size={25} color="#468CD3" />
                  <Text style={{ fontSize: pxToDp(16),color:'#333333', marginTop: pxToDp(8) }}>
                    售后/退款
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <MyAddress />

            <TouchableOpacity
              onPress={() => this.context.navigate('Jifenshop')}
            >
              <List icon="server-outline" title="积分商城" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.context.navigate('History')}>
              <List icon="eye-outline" title="历史浏览" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.context.navigate('Apply')}>
              <List icon="videocam-outline" title="直播申请" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.context.navigate('Set')}>
              <List icon="settings-outline" title="设置" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
export default connect(
  (state) => ({ userInfo: state.getIn(['homeReducer', 'userInfo']) }),
  {
    getUserOriderListAction
  }
)(Index);
