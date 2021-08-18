import React, { Component } from 'react';
import Modal from 'react-native-modal';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import { Input } from 'react-native-elements/dist/input/Input';
import { launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { NavigationContext } from '@react-navigation/native';
import Top from '../../../../component/common/top';
import { CheckBox } from 'react-native-elements';

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
      checked: true
    };
  }
  openImagePickerAsync = async () => {
    launchImageLibrary(
      { mediaType: 'photo', selectionLimit: 1 },
      (response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          const pickerResult = response.assets[0];

          const fd = new FormData();
          let file = {
            uri: pickerResult.uri,
            type: 'multipart/form-data',
            name: pickerResult.type
          };
          fd.append('file', file);
          requset
            .post({
              url: URL.UPDATE_AVATER,
              data: fd,
              headers: {
                Accept: 'Application/json',
                'content-type': 'multipart/form-data'
              }
            })
            .then((res) => {
              this.props.changeAvatar(pickerResult.uri);
              ToastAndroid.show(res, ToastAndroid.SHORT);
            })
            .catch((err) => {
              console.log(err);
            });
          this.setState({
            avatar: pickerResult.uri,
            modalVisible: false
          });
          // this.setState({ avatar: response.uri });
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

  render() {
    const { isModalVisible, toggleModalProps, arr } = this.props;
    // console.log(arr);
    return (
      <View style={{ flex: 1 }}>
        <Top title="直播申请" icon1="arrow-back" />
        <View
          style={{
            flex: 1,
            backgroundColor: '#eee',
            borderRadius: 20,
            padding: 10
          }}
        >
          <ScrollView>
            {/* <MyNav title='个人信息验证' /> */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: pxToDp(40)
              }}
            >
              <Text style={{ fontSize: pxToDp(22), fontWeight: 'bold' }}>
                个人信息验证
              </Text>
            </View>
            <View>
              <View style={{ marginTop: 4 }}>
                <View style={{ marginBottom: pxToDp(16) }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: pxToDp(24)
                    }}
                  >
                    <Text style={{ color: '#f0bb51' }}>
                      请您如实准确填写本人信息，否则将认证失败
                    </Text>
                  </View>
                  <View
                    style={[
                      s.basicstyle,
                      {
                        backgroundColor: 'white',
                        margin: pxToDp(4),
                        borderRadius: pxToDp(8)
                      }
                    ]}
                  >
                    <Input
                      placeholder="请输入真实姓名"
                      leftIcon={
                        <Text style={{ fontSize: pxToDp(16) }}>*真实姓名</Text>
                      }
                    />
                    <Input
                      placeholder="请输入身份证号码"
                      maxLength={18}
                      keyboardType="number-pad"
                      leftIcon={
                        <Text style={{ fontSize: pxToDp(16) }}>*身份证号</Text>
                      }
                    />
                  </View>
                </View>
                {/* 身份证照片上传 */}
                <View
                  style={[
                    s.basicstyle,
                    {
                      backgroundColor: 'white',
                      margin: pxToDp(8),
                      borderRadius: pxToDp(8),
                      height: pxToDp(400)
                    }
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => this._changeModal()}
                    style={{ alignItems: 'center' }}
                  >
                    <Text style={{ fontSize: pxToDp(22), fontWeight: 'bold' }}>
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
                        source={require('../../../../res/s3.png')}
                      ></Image>
                    </View>
                    <Text
                      style={{
                        color: 'gray',
                        marginTop: pxToDp(-8),
                        marginBottom: pxToDp(8)
                      }}
                    >
                      请上传身份证人像面照片
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this._changeModal()}
                    style={{ alignItems: 'center' }}
                  >
                    <Text style={{ fontSize: pxToDp(22), fontWeight: 'bold' }}>
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
                        source={require('../../../../res/s4.png')}
                      ></Image>
                    </View>
                    <Text
                      style={{
                        color: 'gray',
                        marginTop: pxToDp(-8),
                        marginBottom: pxToDp(8)
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
                    height: pxToDp(65),
                    padding: pxToDp(8),
                    marginTop: pxToDp(16)
                  }}
                >
                  <Text style={{ color: 'gray' }}>
                    根据相关政策法规要求，开通百越庭直播间需要进行实名认证。实名认证不涉及金钱账户，信息严格保密。
                  </Text>
                  <CheckBox
                    center
                    title="我已阅读并接受主播协议"
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
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.cancelToken}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: pxToDp(50)
              }}
            >
              <View
                style={[
                  s.basicstyle,
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: pxToDp(300),
                    height: pxToDp(50),
                    borderRadius: pxToDp(8),
                    backgroundColor: '#f0bb51'
                  }
                ]}
              >
                <Text style={{ color: '#468cd3' }}>立刻认证</Text>
              </View>
            </TouchableOpacity>
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
    backgroundColor: '#eee',
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
  button: {
    marginTop: pxToDp(20),
    marginLeft: pxToDp(5)
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
    borderRadius: pxToDp(30)
  },
  modalTitle: {
    width: '70%',
    fontSize: pxToDp(25),
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomWidth: 1.1,
    borderBottomColor: '#AFAFAF'
  },
  modalItem: {
    fontSize: pxToDp(18),
    alignSelf: 'center'
  },
  basicstyle: {
    elevation: 4, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowOffset: { width: 0, height: 0 }, // 阴影偏移
    shadowOpacity: 1, // 阴影不透明度
    shadowRadius: 10 //  圆角
  }
});

export default index;
