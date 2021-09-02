import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  ToastAndroid,
  TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { pxToDp } from '@utils/styleKits';
import requset from '../../../service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mybtn from '../../../component/common/mybtn';
class Login extends PureComponent {
  static contextType = NavigationContext;

  state = {
    opcitytext1: new Animated.Value(0),
    opcitytext2: new Animated.Value(0),
    opcitytext3: new Animated.Value(0),
    opcitytext4: new Animated.Value(0),
    loginbox: 350,
    regbox: 0,
    regusername: '',
    regpassword1: '',
    regpassword2: '',
    username: '',
    password: ''
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
      duration: 3000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext3, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext4, {
      toValue: 0,
      duration: 3000,
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
      duration: 3000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext3, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext4, {
      toValue: 1,
      duration: 3000,
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
    console.log(this.state.username);
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
        console.log(res);
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
  };
  render() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    return (
      <ImageBackground
        source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F10%2F20180810212724_kgibb.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633089252&t=a03d7329a73f30004439f130fca71807'}}
        style={{ width: '100%', height: '100%' }}
      >
        <Image
          source={require('./111.png')}
          style={{
            width: pxToDp(200),
            height: pxToDp(200),
            position: 'absolute',
            left: pxToDp(70),
            top: pxToDp(35)
          }}
        />
        <Animated.Text
          style={[
            styles.opcity1,
            {
              opacity: this.state.opcitytext1, // Bind opacity to animated value
              left: pxToDp(50)
            }
          ]}
        >
          至死不负情
        </Animated.Text>
        <Animated.Text
          style={[
            styles.opcity1,
            {
              top: pxToDp(75),
              opacity: this.state.opcitytext2 // Bind opacity to animated value
            }
          ]}
        >
          留得千秋载
        </Animated.Text>
        <Animated.Text
          style={[
            styles.opcity2,
            {
              opacity: this.state.opcitytext3 // Bind opacity to animated value
            }
          ]}
        >
          至死不负情
        </Animated.Text>
        <Animated.Text
          style={[
            styles.opcity2,
            {
              right: pxToDp(50),
              top: pxToDp(75),
              opacity: this.state.opcitytext4 // Bind opacity to animated value
            }
          ]}
        >
          留得千秋载
        </Animated.Text>
        <View
          style={{
            borderRadius: 24,
            height: this.state.loginbox,
            width: pxToDp(250),
            position: 'absolute',
            top: pxToDp(300),
            left: pxToDp(60),
            overflow: 'hidden'
          }}
        >
          <View
            style={{
              width: '80%',
              marginLeft: pxToDp(20),
              marginTop: pxToDp(25)
            }}
          >
            <Input
              placeholder="请输入账号"
              leftIcon={<Icon name="user" size={24} />}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
          </View>
          <View style={{ width: '80%', alignSelf: 'center' }}>
            <Input
              secureTextEntry={true}
              placeholder="请输入密码"
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
            <TouchableOpacity onPress={this.toRegister} style={{ alignSelf: 'center', top: pxToDp(-20), left: pxToDp(70) }}>
              <Text style={{ color: '#999999', }}>去注册</Text>
            </TouchableOpacity>
            {/*登录按钮--------------------------------*/}
          </View>
          <Mybtn
            title="登录"
            onPress={this.Login}
            buttonStyle={{
              width: pxToDp(105),
              height: pxToDp(35),
              alignSelf: 'center',
              borderRadius: pxToDp(32),
            }}
            titleStyle={{
              color: 'white',
              fontSize: pxToDp(14),
              marginTop: pxToDp(-2)
            }}
          />

          {/*第三方登录--------------------------------*/}
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(40),
              alignItems: 'center',
              alignSelf: 'center'
            }}
          >
            <TouchableOpacity>
              <Ionicons
                name="qq"
                size={25}
                color="#87CEFA"
                style={{ marginRight: pxToDp(30) }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="wechat" size={25} color="#32CD32" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderRadius: 24,
            height: this.state.regbox,
            width: pxToDp(250),
            position: 'absolute',
            top: pxToDp(300),
            left: pxToDp(60),
            overflow: 'hidden'
          }}
        >
          <View
            style={{
              width: '80%',
              marginLeft: pxToDp(20),
              marginTop: pxToDp(15)
            }}
          >
            <Input
              placeholder="请输入账号"
              leftIcon={<Icon name="user" size={24} />}
              onChangeText={(regusername) => this.setState({ regusername })}
              value={this.state.regusername}
            />
          </View>
          <View style={{ width: '80%', marginLeft: pxToDp(20) }}>
            <Input
              secureTextEntry={true}
              placeholder="请输入密码"
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              onChangeText={(regpassword1) => this.setState({ regpassword1 })}
              value={this.state.regpassword1}
            />
          </View>
          <View style={{ width: '80%', marginLeft: pxToDp(20) }}>
            <Input
              secureTextEntry={true}
              placeholder="请再次输入密码"
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              onChangeText={(regpassword2) => this.setState({ regpassword2 })}
              value={this.state.regpassword2}
            />
            <TouchableOpacity onPress={this.SingUp} style={{ alignSelf: 'center', top: pxToDp(-20), left: pxToDp(70) }}>
              <Text style={{ color: '#999999', }}>去登陆</Text>
            </TouchableOpacity>
            <Mybtn
              title="注册"
              onPress={this.registerSubimit}
              buttonStyle={{
                width: pxToDp(105),
                height: pxToDp(35),
                alignSelf: 'center',
                borderRadius: pxToDp(32),
              }}
              titleStyle={{
                color: 'white',
                fontSize: pxToDp(14),
                marginTop: pxToDp(-2)
              }}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  opcity1: {
    position: 'absolute',
    width: pxToDp(20),
    top: pxToDp(20),
    left: pxToDp(20),
    fontSize: pxToDp(20),
    alignItems: 'center'
  },
  opcity2: {
    position: 'absolute',
    width: pxToDp(20),
    top: pxToDp(20),
    right: pxToDp(20),
    fontSize: pxToDp(20),
    alignItems: 'center'
  },
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
