import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { pxToDp } from '../utils/styleKits';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import SvgUri from "react-native-svg-uri";
import { qq, weixin, weibo } from "../res/fonts/iconSvg"
import Svg from 'react-native-svg';

class Login extends PureComponent {
  state = {
    //手机号码
    phoneNumber: "",
  }
  //登录手机号码输入
  phoneNumberChangeText = (phoneNumber) => {
    this.setState({ phoneNumber });
  }
  //手机号码点击完成触发
  phoneNumberSubmitEditing = () => {
    console.log('手机号码点击完成')
  }
  render() {
    const { phoneNumber, phoneValid } = this.state;
    return (
      <View style={{ height: '100%', backgroundColor: 'white' }}>
        {/*顶部图片 */}
        <Image style={{ width: pxToDp(180), height: pxToDp(150), marginLeft: pxToDp(100), marginTop: pxToDp(70) }} source={require('../res/4.jpg')} />

        {/*手机号码 密码输入框*/}
        <View style={{ marginTop: pxToDp(30), marginLeft: pxToDp(20), marginRight: pxToDp(30) }}>
          <Input
            placeholder='请输入手机号码'
            maxLength={11}
            keyboardType="phone-pad"
            inputStyle={{ color: "#333" }}
            value={phoneNumber}
            onChangeText={this.phoneNumberChangeText}
            onSubmitEditing={this.phoneNumberSubmitEditing}
            leftIcon={{ type: 'font-awesome', name: 'phone', color: "#ccc", size: pxToDp(20) }}
          />
          <Input
            placeholder='请输入密码'
            inputStyle={{ color: "#333" }}
            leftIcon={{ type: 'font-awesome', name: 'lock', color: "#ccc", size: pxToDp(20) }}
          />
        </View>
        {/*忘记密码 用户注册  */}
        <View style={{ flexDirection: 'row', marginTop: pxToDp(1) }}>
          <TouchableOpacity>
            <Text style={{ color: '#1874CD', marginLeft: pxToDp(40) }}>忘记密码</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#1874CD', marginLeft: pxToDp(170) }}>新用户注册</Text>
          </TouchableOpacity>
        </View>
        {/*登录按钮 */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={{ marginTop: pxToDp(30), width: pxToDp(300), height: pxToDp(40), borderRadius: pxToDp(40), backgroundColor: '#1874CD', justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 22, textAlign: 'center', color: 'white', }}>登 录</Text>
          </TouchableOpacity>
        </View>
        {/*第三方登录 */}
        <View style={{ alignItems: 'center', marginTop: pxToDp(80) }}>
          <Text style={{ fontSize: pxToDp(20), color: 'gray' }}>第三方登录</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0.5}>
              <SvgUri svgXmlData={qq} style={{ margin: pxToDp(10) }} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <SvgUri svgXmlData={weixin} style={{ margin: pxToDp(10) }} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <SvgUri svgXmlData={weibo} style={{ margin: pxToDp(10) }} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}
export default Login;