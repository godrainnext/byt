import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContext } from '@react-navigation/native';
import CustomAlertDialog from '../component/CustomAlertDialog';
import { pxToDp } from '../../../utils/styleKits';
// import * as ImagePicker from 'expo-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';
import Top from '@components/common/top';
import { connect } from 'react-redux';
import requset from '../../../service';
import * as URL from './constent';
import { getUserInfoAction } from '../../first/home/store/actions';
import { changeAvatar } from './store/actions';
import changeImgSize from '@utils/changeImgSize';
const typeArr = ['男', '女'];
class Ziliao extends PureComponent {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      sex: 0,
      showTypePop: false,
      modalVisible: false,
      birthday: '',
      avatar: '',
      nickName: '',
      ownSay: ''
    };
  }
  componentDidMount() {
    this.subscript = DeviceEventEmitter.addListener(
      'ownSay',
      this.refeshOwnSay
    );
    this.subscript2 = DeviceEventEmitter.addListener(
      'nickName',
      this.refeshnickName
    );

    const { ownSay, nickName, sex, birthday, avatar } = this.props.route.params;
    this.setState({ ownSay, nickName, sex, birthday, avatar });
  }
  componentWillUnmount() {
    this.subscript.remove();
    this.subscript2.remove();
  }
  refeshOwnSay = (ownSay) => {
    this.setState({
      ownSay
    });
  };
  refeshnickName = (nickName) => {
    this.setState({
      nickName
    });
  };
  _openTypeDialog() {
    this.setState({ showTypePop: !this.state.showTypePop });
  }
  _changeModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
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
  saveUserInfo = () => {
    const nickName = this.state.nickName;
    const sex = this.state.sex;
    const ownSay = this.state.ownSay;
    const birthday = this.state.birthday;

    requset
      .patch({
        url: URL.GHANGE_USER_INFO,
        data: { nickName, sex, birthday, ownSay },
        headers: {
          'content-type': 'application/json'
        }
      })
      .thegitn((res) => {
        ToastAndroid.show('保存信息成功', ToastAndroid.SHORT);
        this.props.getUserInfoAction();
      })
      .then((ress) => {
        DeviceEventEmitter.emit('valueChange');
        this.context.navigate('Setting');
      });
  };
  render() {
    const dateNow = new Date();
    const currentDate = `${dateNow.getFullYear()}-${
      dateNow.getMonth() + 1
    }-${dateNow.getDate()}`;
    const { birthday } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#e2f4fe' }}>
        <Top
          title="个人信息"
          icon1="arrow-back"
          rightCallback={() => this.context.goBack()}
        />
        <View style={s.avatar}>
          <View style={{ marginLeft: pxToDp(20) }}>
            <Text style={{ fontSize: pxToDp(20) }}>头像</Text>
          </View>
          <View style={{ marginRight: pxToDp(20) }}>
            <TouchableOpacity onPress={() => this._changeModal()}>
              <Image
                style={{
                  width: pxToDp(60),
                  height: pxToDp(60),
                  borderRadius: pxToDp(60),
                  backgroundColor: '#e2f4fe'
                }}
                source={{
                  uri: this.props.avatar
                    ? this.props.avatar
                    : changeImgSize(this.state.avatar, 'small')
                }}
              />
            </TouchableOpacity>
            <View>
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
        </View>
        <TouchableOpacity onPress={() => this.context.navigate('Nickname')}>
          <View style={[s.basic, { height: 90 }]}>
            <View style={{ marginLeft: pxToDp(20) }}>
              <View style={{ marginTop: pxToDp(20) }}>
                <Text style={{ fontSize: pxToDp(16), color: '#aaa' }}>
                  昵称
                </Text>
                <Text
                  style={{
                    fontSize: pxToDp(20),
                    marginTop: pxToDp(10),
                    marginBottom: pxToDp(20)
                  }}
                >
                  {this.state.nickName}
                </Text>
              </View>
            </View>
            <View style={{ marginRight: pxToDp(20) }}>
              <AntDesign name="right" size={pxToDp(18)} color="#000" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => this._openTypeDialog()}
          style={s.button}
          underlayColor="#eee"
        >
          <View style={s.basic}>
            <View style={{ marginLeft: pxToDp(15) }}>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  color: '#aaa'
                }}
              >
                性别
              </Text>

              <Text style={{ fontSize: pxToDp(20), marginTop: pxToDp(10) }}>
                {typeArr[this.state.sex ? this.state.sex : 0]}
              </Text>

              <CustomAlertDialog
                entityList={typeArr}
                callback={(i) => {
                  this.setState({
                    sex: i
                  });
                }}
                show={this.state.showTypePop}
                closeModal={(show) => {
                  this.setState({
                    showTypePop: show
                  });
                }}
              />
            </View>
            <View style={{ marginRight: pxToDp(20) }}>
              <AntDesign name="right" size={pxToDp(18)} color="#000" />
            </View>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => this.context.navigate('Signature')}>
          <View style={[s.basic, { height: 100 }]}>
            <View style={{ marginLeft: pxToDp(20), flex: 1 }}>
              <View style={{ marginTop: pxToDp(20) }}>
                <Text style={{ fontSize: pxToDp(16), color: '#aaa' }}>
                  个性签名
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{
                    fontSize: pxToDp(20),
                    marginTop: pxToDp(10),
                    marginBottom: pxToDp(20)
                  }}
                >
                  {this.state.ownSay}
                </Text>
              </View>
            </View>
            <View style={{ marginRight: pxToDp(20), width: pxToDp(20) }}>
              <AntDesign name="right" size={pxToDp(18)} color="#000" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={[s.basic, { height: 80 }]}>
          <View style={{ marginLeft: pxToDp(20) }}>
            <Text
              style={{
                fontSize: pxToDp(16),
                color: '#aaa',
                marginBottom: pxToDp(10),
                marginTop: pxToDp(10)
              }}
            >
              生日
            </Text>
            <DatePicker
              style={{ width: 300 }}
              androidMode="spinner"
              placeholder="设置生日"
              date={birthday.split(' ').shift()}
              minDate="1900-01-01"
              maxDate={currentDate}
              confirmBtnText="确定"
              cancelBtnText="取消"
              customStyles={{
                dateIcon: {
                  display: 'none'
                },
                dateInput: {
                  borderWidth: 0,
                  alignItems: 'flex-start'
                },
                placeholderText: {
                  fontSize: pxToDp(20),
                  color: '#afafaf'
                }
              }}
              onDateChange={(birthday) => {
                console.log(birthday);
                this.setState({ birthday });
              }}
            />
          </View>
          <View style={{ marginRight: pxToDp(20) }}>
            <AntDesign name="right" size={pxToDp(18)} color="#000" />
          </View>
        </View>
        <TouchableOpacity style={s.save} onPress={this.saveUserInfo}>
          <Text>保存</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  avatar: {
    height: pxToDp(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2f4fe',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e2f4fe'
  },
  basic: {
    height: pxToDp(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e2f4fe'
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
    backgroundColor: '#e2f4fe',
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
  save: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: pxToDp(1),
    borderColor: '#000'
  }
});
export default connect(
  (state) => ({
    token: state.getIn(['LoginReducer', 'token']),
    avatar: state.getIn(['SettingReducer', 'avatar'])
  }),
  { getUserInfoAction, changeAvatar }
)(Ziliao);
