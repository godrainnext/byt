import React, { Component } from 'react';
import Modal from 'react-native-modal';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import { Input } from 'react-native-elements/dist/input/Input';
import { launchImageLibrary } from 'react-native-image-picker';
import { NavigationContext } from '@react-navigation/native';
import Top from '../../../../component/common/top';
import { CheckBox } from 'react-native-elements';
import { ToastAndroid } from 'react-native';
import { apply } from '../../../../service/mine';
import Mybtn from '../../../../component/common/mybtn';

const { height, width } = Dimensions.get('window');

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fayan: '',
      arr: [],
      username: '',
      modalVisible: false,
      showTypePop: false,
      checked: false,
      back: '',
      people: ''
    };
  }
  openImagePickerAsync = async () => {
    this._changeModal();
    launchImageLibrary(
      { mediaType: 'photo', selectionLimit: 1 },
      (response) => {
        if (response.error) {
          ToastAndroid.show('图片选择失败', ToastAndroid.SHORT);
          console.log(response.error);
        } else {
          const pickerResult = response.assets[0];
          let file = {
            uri: pickerResult.uri,
            type: 'multipart/form-data',
            name: pickerResult.type
          };

          if (this.state.people) {
            this.setState({ back: pickerResult.uri });
          } else {
            this.setState({ people: pickerResult.uri });
          }
          this.setState({ arr: [...this.state.arr, file] });
        }
      }
    );
    /*
     */
  };

  static contextType = NavigationContext;

  _openTypeDialog() {
    this.setState({ showTypePop: !this.state.showTypePop });
  }
  _changeModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }
  init = () => {
    this.setState({ arr: [], username: '', fayan: '' });
  };
  submit = () => {
    if (
      this.state.arr.length === 2 &&
      this.state.username &&
      this.state.fayan
    ) {
      const fd = new FormData();
      for (const file of this.state.arr) {
        fd.append('file', file);
      }
      fd.append('realName', this.state.username);
      fd.append('idCard', this.state.fayan);

      apply(fd).then(() => {
        ToastAndroid.show('申请成功，2-4个工作日内生效', ToastAndroid.LONG);
        this.init();
        this.context.goBack();
      });
    } else {
      ToastAndroid.show('请完善个人信息', ToastAndroid.SHORT);
    }
  };

  render() {
    // console.log(arr);
    return (
      <View style={{ flex: 1 }}>
        <Top title="直播申请" icon1="arrow-back" />
        <View
          style={{
            flex: 1,
            padding: pxToDp(16),
            backgroundColor: '#eee'
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <MyNav title='个人信息验证' /> */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(20),
                  fontWeight: 'bold',
                  color: '#000000'
                }}
              >
                个人信息验证
              </Text>
            </View>
            <View style={{ marginBottom: pxToDp(60) }}>
              <View>
                <View style={{ marginBottom: pxToDp(16) }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: pxToDp(8)
                    }}
                  >
                    <Text
                      style={{
                        color: '#f0bb51',
                        fontSize: pxToDp(12),
                        marginBottom: pxToDp(16)
                      }}
                    >
                      请您如实准确填写本人信息，否则将认证失败
                    </Text>
                  </View>
                  <View
                    style={[
                      s.basicstyle,
                      {
                        backgroundColor: '#fff',
                        borderRadius: pxToDp(8)
                      }
                    ]}
                  >
                    <Input
                      placeholder="请输入真实姓名"
                      inputStyle={{ fontSize: pxToDp(16), color: '#333333' }}
                      placeholderTextColor="#999999"
                      inputContainerStyle={{
                        borderColor: 'white',
                        marginLeft: pxToDp(8)
                      }}
                      onChangeText={(value) =>
                        this.setState({ username: value })
                      }
                      value={this.state.username}
                      leftIcon={
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: pxToDp(4)
                          }}
                        >
                          <Text
                            style={{
                              fontSize: pxToDp(16),
                              color: 'red',
                              marginBottom: pxToDp(4)
                            }}
                          >
                            *
                          </Text>
                          <Text
                            style={{
                              fontSize: pxToDp(16),
                              color: '#333333'
                            }}
                          >
                            真实姓名
                          </Text>
                        </View>
                      }
                    />
                    <View
                      style={{
                        marginTop: pxToDp(-32),
                        marginBottom: pxToDp(-24)
                      }}
                    >
                      <Input
                        placeholder="请输入身份证号码"
                        inputStyle={{ fontSize: pxToDp(16), color: '#333333' }}
                        inputContainerStyle={{
                          borderColor: 'white',
                          marginLeft: pxToDp(8)
                        }}
                        value={this.state.fayan}
                        placeholderTextColor="#999999"
                        onChangeText={(value) =>
                          this.setState({ fayan: value })
                        }
                        maxLength={18}
                        keyboardType="number-pad"
                        leftIcon={
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: pxToDp(4)
                            }}
                          >
                            <Text
                              style={{
                                fontSize: pxToDp(16),
                                color: 'red',
                                marginBottom: pxToDp(4)
                              }}
                            >
                              *
                            </Text>
                            <Text
                              style={{
                                fontSize: pxToDp(16),
                                color: '#333333'
                              }}
                            >
                              身份证号
                            </Text>
                          </View>
                        }
                      />
                    </View>
                  </View>
                </View>
                {/* 身份证照片上传 */}
                <View
                  style={[
                    s.basicstyle,
                    {
                      backgroundColor: 'white',
                      borderRadius: pxToDp(8),
                      height: pxToDp(440)
                    }
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => this._changeModal()}
                    style={{ alignItems: 'center', marginTop: pxToDp(8) }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(20),
                        fontWeight: 'bold',
                        color: '#000000'
                      }}
                    >
                      身份证人像面照片
                    </Text>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Image
                        style={{ width: pxToDp(200), height: pxToDp(150) }}
                        source={
                          this.state.people
                            ? { uri: this.state.people }
                            : require('../../../../res/s3.png')
                        }
                      ></Image>
                    </View>
                    <Text
                      style={{
                        color: '#666666',
                        marginTop: pxToDp(8),
                        marginBottom: pxToDp(8),
                        fontSize: pxToDp(12)
                      }}
                    >
                      请上传身份证人像面照片
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this._changeModal()}
                    style={{ alignItems: 'center' }}
                  >
                    <Text
                      style={{
                        fontSize: pxToDp(20),
                        fontWeight: 'bold',
                        color: '#000000'
                      }}
                    >
                      身份证国徽面照片
                    </Text>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Image
                        style={{ width: pxToDp(200), height: pxToDp(150) }}
                        source={
                          this.state.back
                            ? { uri: this.state.back }
                            : require('../../../../res/s4.png')
                        }
                      ></Image>
                    </View>
                    <Text
                      style={{
                        color: '#666666',
                        marginBottom: pxToDp(8),
                        fontSize: pxToDp(12)
                      }}
                    >
                      请上传身份证国徽面照片
                    </Text>
                  </TouchableOpacity>
                  <View>
                    {/* Modal组件实现弹窗显示图片选择 */}
                    <Modal
                      visible={this.state.modalVisible}
                      animationType={'fade'}
                      transparent={true}
                      onRequestClose={() => this.onRequestClose()}
                    >
                      <View style={s.alertBackground}>
                        <View style={s.alertBox}>
                          <Text style={s.modalTitle}>请选择</Text>
                          <TouchableHighlight
                            underlayColor={'#F5F5F5'}
                            onPress={this.openImagePickerAsync}
                          >
                            <Text style={s.modalItem}>打开相册</Text>
                          </TouchableHighlight>
                          <TouchableHighlight
                            underlayColor={'#F5F5F5'}
                            onPress={() => this._changeModal()}
                          >
                            <Text style={s.modalItem}>取消</Text>
                          </TouchableHighlight>
                        </View>
                      </View>
                    </Modal>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: pxToDp(108),
                    marginTop: pxToDp(16)
                  }}
                >
                  <Text
                    style={{
                      color: '#999999',
                      fontSize: pxToDp(12),
                      marginBottom: pxToDp(8),
                      paddingLeft: pxToDp(8),
                      paddingRight: pxToDp(8)
                    }}
                  >
                    根据相关政策法规要求，开通百越庭直播间需要进行实名认证。实名认证不涉及金钱账户，信息严格保密。
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        color: '#999999',
                        fontSize: pxToDp(12),
                        marginBottom: pxToDp(8)
                      }}
                    >
                      阅读并同意
                    </Text>
                    <TouchableOpacity
                      onPress={() => this.context.navigate('Xieyi')}
                    >
                      <Text
                        style={{
                          color: '#468cd3',
                          fontSize: pxToDp(12),
                          marginBottom: pxToDp(8)
                        }}
                      >
                        直播及支付相关协议
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <CheckBox
                    center
                    title="同意协议并认证"
                    checked={this.state.checked}
                    onPress={() => {
                      this.setState({
                        checked: !this.state.checked
                      });
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <Mybtn
              onPress={() => this.Scrollable.open()}
              title="提交申请"
              containerStyle={{
                position: 'absolute',
                bottom: 0,
                fontSize: 30,
                width: pxToDp(320),
                height: pxToDp(40),
                borderRadius: pxToDp(40),
                alignSelf: 'center',
                color: 'red',
                display: 'none',
                marginBottom: pxToDp(5)
              }}
              buttonStyle={{
                width: '100%',
                height: '100%',
                alignSelf: 'flex-end',
                display: this.state.btnOpcity ? 'none' : 'flex',
                borderRadius: pxToDp(32)
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  avatar: {
    height: pxToDp(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  basic: {
    height: pxToDp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  alertBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // 如果要遮罩要显示成半透明状态，这里一定要设置，reba中的a控制透明度，取值在 0.0 ～ 1.0 范围内。
  },

  alertBox: {
    width: pxToDp(300),
    height: pxToDp(250),
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    borderRadius: pxToDp(32)
  },
  modalTitle: {
    width: '70%',
    fontSize: pxToDp(20),
    color: '#000000',
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomWidth: 1.1,
    borderBottomColor: '#AFAFAF'
  },
  modalItem: {
    fontSize: pxToDp(18),
    color: '#666666',
    alignSelf: 'center'
  },
  basicstyle: {
    elevation: 2, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowOffset: { width: 0, height: 0 }, // 阴影偏移
    shadowOpacity: 1, // 阴影不透明度
    shadowRadius: 10 //  圆角
  }
});

export default index;
