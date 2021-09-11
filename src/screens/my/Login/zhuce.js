import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    TextInput,
    Image
} from 'react-native';
import { Input } from 'react-native-elements';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { pxToDp } from '@utils/styleKits';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mybtn from '../../../component/common/mybtn';
import requset from '../../../service';
import Top from '../../../component/common/top'

class Register extends PureComponent {
    static contextType = NavigationContext;

    state = {
        loginbox: 550,
        regbox: 0,
        regusername: '',
        regpassword1: '',
        regpassword2: '',
        read: false
    };
    registerSubimit = () => {
        if (this.state.read) {
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
        } else {
            ToastAndroid.show('请先同意《百越用户协议》', ToastAndroid.SHORT)
        }
    }
    render() {
        const { read } = this.state;
        return (
            <View style={{ alignItems: 'center' }}>
                <Top icon1="arrow-back" title="注册账号" />
                <Image
                    source={require('./333.png')}
                    style={{
                        width: pxToDp(200),
                        height: pxToDp(200),
                        marginTop: pxToDp(16)
                    }}
                />
                <View
                    style={{
                        borderRadius: 24,
                        height: pxToDp(550),
                        width: pxToDp(300),
                        position: 'absolute',
                        top: pxToDp(300),
                        overflow: 'hidden',
                        alignItems: 'center'
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
                            placeholder="请输入账号"
                            onChangeText={(regusername) => this.setState({ regusername })}
                            value={this.state.regusername}
                        />
                    </View>
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
                        <Ionicons name="lock" size={22} color="#999999" style={{ marginLeft: pxToDp(16), marginRight: pxToDp(8) }} />
                        <TextInput
                            secureTextEntry={true}
                            placeholder="请输入密码"
                            onChangeText={(regpassword1) => this.setState({ regpassword1 })}
                            value={this.state.regpassword1}
                        />
                    </View>
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
                        <Ionicons name="lock" size={22} color="#999999" style={{ marginLeft: pxToDp(16), marginRight: pxToDp(8) }} />
                        <TextInput
                            secureTextEntry={true}
                            placeholder="请重复密码"
                            onChangeText={(regpassword2) => this.setState({ regpassword2 })}
                            value={this.state.regpassword2}
                        />
                    </View>
                    <View style={{ marginTop: pxToDp(32), flexDirection: 'row', alignItems: 'center' }}>
                        {read ?
                            (<TouchableOpacity style={{ height: pxToDp(12), width: pxToDp(12), borderRadius: pxToDp(6), borderColor: "#999999", borderWidth: pxToDp(1), marginRight: pxToDp(4), backgroundColor: '#62bfad' }}
                                onPress={() => this.setState({ read: !read })}>
                            </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={{ height: pxToDp(12), width: pxToDp(12), borderRadius: pxToDp(6), borderColor: "#999999", borderWidth: pxToDp(1), marginRight: pxToDp(4) }}
                                    onPress={() => this.setState({ read: !read })}>
                                </TouchableOpacity>)}
                        <Text style={{ fontSize: pxToDp(12), color: '#999999' }}>
                            我已阅读并同意
                        </Text>
                        <TouchableOpacity style={{ marginLeft: pxToDp(2), marginRight: pxToDp(2) }}>
                            <Text style={{ fontSize: pxToDp(12), color: '#62bfad' }}>《百越用户协议》</Text>
                        </TouchableOpacity>
                    </View>
                    <Mybtn
                        title="注册"
                        onPress={this.registerSubimit}
                        buttonStyle={{
                            width: pxToDp(270),
                            height: pxToDp(40),
                            alignSelf: 'center',
                            borderRadius: pxToDp(32),
                            marginTop: pxToDp(32)
                        }}
                        titleStyle={{
                            color: 'white',
                            fontSize: pxToDp(14),
                            marginTop: pxToDp(-2),
                            fontWeight: 'bold'
                        }}
                    />
                </View>
            </View>
        );
    }
}
export default Register;