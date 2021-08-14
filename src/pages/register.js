import React, {PureComponent} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CommonInput from "../component/common/commonInput";
import { pxToDp } from "../utils/styleKits";
import { eye } from "../res/fonts/iconSvg"
import SvgUri from "react-native-svg-uri";

class Register extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showPassword: false

        }
    }
    render() {
        return (
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                {/*顶部图片 */}
                <Image style={{ width: pxToDp(180), height: pxToDp(150), marginLeft: pxToDp(100), marginTop: pxToDp(70) }} source={require('../res/4.jpg')} />
                {/*输入框 */}
                <CommonInput placeholder="请输入手机号" />
                <View>
                    <CommonInput placeholder="请输入验证码" />
                    <TouchableOpacity style={{ marginLeft: pxToDp(240), marginTop: pxToDp(-34), backgroundColor: '#1874CD', height: pxToDp(30), width: pxToDp(100), borderRadius: pxToDp(50), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white' }}>获取验证码</Text>
                    </TouchableOpacity>
                </View>
                <CommonInput placeholder="请输入昵称" />
                <View>
                    <CommonInput secureTextEntry={!this.state.showPassword} placeholder="请输入密码" />
                    <TouchableOpacity style={{ marginLeft: pxToDp(270), marginTop: pxToDp(-50) }} onPress={() => this.setState({ showPassword: !this.state.showPassword })}>
                        <SvgUri svgXmlData={eye} />
                    </TouchableOpacity>
                </View>
                {/*注册按钮 */}
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ marginTop: pxToDp(40), width: pxToDp(300), height: pxToDp(40), borderRadius: pxToDp(40), backgroundColor: '#1874CD', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Text style={{ fontSize: 22, textAlign: 'center', color: 'white', }}>注 册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Register;
