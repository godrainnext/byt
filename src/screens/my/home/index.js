import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  DeviceEventEmitter,
  ImageBackground
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
import Address from '../../../component/my/address/myAddress';
import SvgUri from 'react-native-svg-uri';
import {
  daizhifu,
  dpingjia,
  shouhou,
  shouhuo
} from '../../../component/common/iconSvg';

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
        colors={['white', 'white']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
        style={{ flex: 1 }}
      >
        <View style={{height:pxToDp(16),color:'white'}}></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/*        
          <View style={{position:'absolute',width:400,height:400,bottom:350,borderRadius:100,alignSelf:'center',opacity:.4}}>
          
         
          </View>  */}

          <UserInner />
          <ImageBackground
            source={require('./userback.jpg')}
            style={{
              borderRadius: pxToDp(8),
              backgroundColor: '#f0fcff',
              marginLeft: pxToDp(16),
              marginRight: pxToDp(16),
              height: pxToDp(140),
              marginTop: pxToDp(16),
              elevation: 3,
              borderWidth: 0,
              overflow: 'hidden'
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
                <Text style={{ fontSize: pxToDp(18), color: '#333333' }}>
                  ????????????
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.context.navigate('Order', 0)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>
                    ??????????????????{' '}
                  </Text>
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
                  <SvgUri svgXmlData={daizhifu} width="20" height="20" />
                  <Text
                    style={{
                      fontSize: pxToDp(16),
                      color: '#333333',
                      marginTop: pxToDp(8)
                    }}
                  >
                    ?????????
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.context.navigate('Order', 2)}
              >
                <View style={{ alignItems: 'center' }}>
                  <SvgUri svgXmlData={shouhuo} width="20" height="20" />
                  <Text
                    style={{
                      fontSize: pxToDp(16),
                      color: '#333333',
                      marginTop: pxToDp(8)
                    }}
                  >
                    ?????????
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.context.navigate('Order', 3)}
              >
                <View style={{ alignItems: 'center' }}>
                  <SvgUri svgXmlData={dpingjia} width="20" height="20" />
                  <Text
                    style={{
                      fontSize: pxToDp(16),
                      color: '#333333',
                      marginTop: pxToDp(8)
                    }}
                  >
                    ?????????
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.context.navigate('Refund')}>
                <View style={{ alignItems: 'center' }}>
                  <SvgUri svgXmlData={shouhou} width="20" height="20" />
                  <Text
                    style={{
                      fontSize: pxToDp(16),
                      color: '#333333',
                      marginTop: pxToDp(8)
                    }}
                  >
                    ??????/??????
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View>
            <Address />

            <TouchableOpacity
              onPress={() => this.context.navigate('Jifenshop')}
            >
              <List icon="server-outline" title="????????????" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.context.navigate('History')}>
              <List icon="eye-outline" title="????????????" />
            </TouchableOpacity>
            {this.props.userInfo.isStream?(  
               <View>
              <List icon="videocam-outline" title="?????????" />
            </View>):
            (<TouchableOpacity onPress={() => this.context.navigate('Apply')}>
              <List icon="videocam-outline" title="????????????" />
            </TouchableOpacity>)}
          </View>
            <TouchableOpacity onPress={() => this.context.navigate('Set')}>
              <List icon="settings-outline" title="??????" />
            </TouchableOpacity> 
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
