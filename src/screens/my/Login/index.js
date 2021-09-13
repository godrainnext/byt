import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  ToastAndroid,
  Dimensions,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { pxToDp } from '@utils/styleKits';
import requset from '../../../service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mybtn from '../../../component/common/mybtn';
import Svg from 'react-native-svg-uri';
import { qqq, weixinn } from '../../../res/fonts/iconSvg';
const Screewidth = Dimensions.get('window').width
const Screeheight = Dimensions.get('window').height
class Login extends PureComponent {
  static contextType = NavigationContext;

  state = {
    opcitytext1: new Animated.Value(1),
    opcitytext2: new Animated.Value(1),
    opcitytext3: new Animated.Value(0),
    opcitytext4: new Animated.Value(0),
    loginbox: 550,
    regbox: 0,
    regusername: '',
    regpassword1: '',
    regpassword2: '',
    username: '',
    password: '',
    read: false
  };

  SingUp = () => {
    LayoutAnimation.easeInEaseOut();
    Animated.timing(this.state.opcitytext1, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext2, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext3, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext4, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true // Add this
    }).start();
    this.setState({ loginbox: 350 });
    this.setState({ regbox: 0 });
    this.setState({ regusername: '' });
    this.setState({ regpassword1: '' });
    this.setState({ regpassword2: '' });
  };

  toRegister = () => {
    LayoutAnimation.easeInEaseOut();
    Animated.timing(this.state.opcitytext1, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext2, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext3, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext4, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true // Add this
    }).start();
    this.setState({ loginbox: 0 });
    this.setState({ regbox: 300 });
    this.setState({ username: '' });
    this.setState({ password: '' });
  };
  registerSubimit = () => {
    if (this.state.regpassword1 != this.state.regpassword2) {
      ToastAndroid.show('两次密码输入不一样', ToastAndroid.SHORT);
    } else {
      requset
        .post({
          url: '/user/register',
          data: {
            name: this.state.regusername,
            password: this.state.regpassword1
          },
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(async (res) => {
          try {
            await AsyncStorage.setItem('token', res.token);
          } catch (e) {
            console.log(e);
          }
          this.context.navigate('Tabbar');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  Login = () => {
    if (this.state.read) {
      requset
        .post({
          url: '/user/login',
          data: {
            name: this.state.username,
            password: this.state.password
          },
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(async (res) => {
          if (!res) {
            ToastAndroid.show('用户名或密码错误', ToastAndroid.SHORT);
          } else {
            await AsyncStorage.setItem('token', res.token);
            this.context.navigate('Tabbar');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      ToastAndroid.show('请阅读并同意下方条例', ToastAndroid.SHORT)
    }

  };
  render() {
    const { read } = this.state;
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    return (
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('./111.png')}
          style={{
            width: pxToDp(200),
            height: pxToDp(200),
            marginTop: pxToDp(16)
          }}
        />
        <View
          style={{
            borderRadius: 24,
            height: this.state.loginbox,
            width: pxToDp(300),
            position: 'absolute',
            alignItems: 'center',
            overflow: 'hidden',
            marginTop: pxToDp(230)
          }}
        >
          <View
            style={{
              width: '90%',
              marginTop: pxToDp(25),
              backgroundColor: '#DCDCDC',
              borderRadius: pxToDp(24),
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Ionicons name="user" size={22} color="#999999" style={{ marginLeft: pxToDp(16), marginRight: pxToDp(8) }} />
            <TextInput
              style={{ width: pxToDp(200) }}
              placeholder="请输入账号"
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
          </View>
          <View style={{
            width: '90%',
            marginTop: pxToDp(16),
            backgroundColor: '#DCDCDC',
            borderRadius: pxToDp(24),
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Ionicons name="lock" size={22} color="#999999" style={{ marginLeft: pxToDp(16), marginRight: pxToDp(8) }} />
            <TextInput
              style={{ width: pxToDp(200) }}
              secureTextEntry={true}
              placeholder="请输入密码"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
          </View>
          {/*登录按钮--------------------------------*/}
          <Mybtn
            title="登录"
            onPress={this.Login}
            buttonStyle={{
              width: pxToDp(270),
              height: pxToDp(40),
              alignSelf: 'center',
              borderRadius: pxToDp(32),
              marginTop: pxToDp(16)
            }}
            titleStyle={{
              color: 'white',
              fontSize: pxToDp(14),
              marginTop: pxToDp(-2),
              fontWeight: 'bold'
            }}
          />
          {/**注册 */}
          <TouchableOpacity
            onPress={() => this.context.navigate('ZhuCe')}
            style={{
              width: pxToDp(270),
              height: pxToDp(40),
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: pxToDp(32),
              marginTop: pxToDp(16),
              backgroundColor: 'white',
              borderColor: '#62bfad',
              borderWidth: pxToDp(1)
            }}
          >
            <Text style={{
              color: '#62bfad',
              fontSize: pxToDp(14),
              fontWeight: 'bold'
            }}>
              立即注册
            </Text>
          </TouchableOpacity>
          {/**忘记密码 */}
          <TouchableOpacity style={{ marginTop: pxToDp(16), alignSelf: 'flex-end', marginRight: pxToDp(32) }}>
            <Text style={{ fontSize: pxToDp(14), color: '#999999' }}>
              忘记密码
            </Text>
          </TouchableOpacity>
          {/*第三方登录--------------------------------*/}
          <View style={{ marginTop: pxToDp(50) }}>
            <Text style={{ fontSize: pxToDp(14), color: '#000000' }}>快速登录</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: pxToDp(8) }}>
            <TouchableOpacity>
              <Svg width="40" height="40" svgXmlData={qqq} style={{ marginRight: pxToDp(40) }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Svg width="40" height="40" svgXmlData={weixinn} />
            </TouchableOpacity>
          </View>
          {/**用户协议 */}
          <View style={{ marginTop: pxToDp(24), flexDirection: 'row', alignItems: 'center' }}>
            {read ?
              (<TouchableOpacity style={{ height: pxToDp(12), width: pxToDp(12), borderRadius: pxToDp(6), borderColor: "#999999", borderWidth: pxToDp(1), marginRight: pxToDp(4), backgroundColor: '#62bfad' }}
                onPress={() => this.setState({ read: !read })}>
              </TouchableOpacity>
              ) : (
                <TouchableOpacity style={{ height: pxToDp(12), width: pxToDp(12), borderRadius: pxToDp(6), borderColor: "#999999", borderWidth: pxToDp(1), marginRight: pxToDp(4) }}
                  onPress={() => this.setState({ read: !read })}>
                </TouchableOpacity>)}
            <Text style={{ fontSize: pxToDp(12), color: '#999999' }}>
              已阅读并同意百越的
            </Text>
            <TouchableOpacity
              onPress={() => this.context.navigate('YongHu')}
              style={{ marginLeft: pxToDp(2), marginRight: pxToDp(2), borderBottomWidth: pxToDp(1), borderBottomColor: '#999999' }}>
              <Text style={{ fontSize: pxToDp(12), color: '#999999' }}>用户协议</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: pxToDp(12), color: '#999999' }}>
              和
            </Text>
            <TouchableOpacity
              onPress={() => this.context.navigate('ZhengCe')}
              style={{ marginLeft: pxToDp(2), marginRight: pxToDp(2), borderBottomWidth: pxToDp(1), borderBottomColor: '#999999' }}>
              <Text style={{ fontSize: pxToDp(12), color: '#999999' }}>隐私政策</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  login: {
    position: 'absolute',
    top: pxToDp(650),
    left: pxToDp(60),
    backgroundColor: '#ad0000',
    width: pxToDp(120),
    height: pxToDp(50),
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginbtn: {
    width: pxToDp(100),
    height: pxToDp(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    left: pxToDp(75),
    borderRadius: 24
  },
  register: {
    position: 'absolute',
    top: pxToDp(650),
    right: pxToDp(60),
    backgroundColor: '#00A4A6',
    width: pxToDp(120),
    height: pxToDp(50),
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login;
