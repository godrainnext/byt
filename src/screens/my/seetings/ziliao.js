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
// import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/styleKits';
import { launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';
import Top from '@components/common/top';
import { connect } from 'react-redux';
import requset from '../../../service';
import * as URL from './constent';
import { getUserInfoAction } from '../../first/home/store/actions';
import { changeAvatar } from './store/actions';
import changeImgSize from '@utils/changeImgSize';
import { Avatar, Button, CheckBox } from 'react-native-elements';
import Mybtn from '../../../component/common/mybtn';
const typeArr = ['男', '女'];
const sheng =
  '<svg t="1629177999549" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9171" width="200" height="200"><path d="M511.2 34.4C201.6 34.4 161.6 289.6 161.6 512c0 105.6 39.2 225.6 105.6 320 70.4 100 159.2 157.6 244 157.6 180.8 0 350.4-268.8 350.4-477.6 0.8-236-40.8-477.6-350.4-477.6zM401.6 896c-4.8-26.4-16-103.2 16-113.6 37.6-12.8 55.2 18.4 92.8 24v0.8h3.2v-0.8c37.6-4.8 55.2-36.8 92.8-24 31.2 10.4 21.6 83.2 16 112-36.8 28-75.2 42.4-111.2 42.4s-73.6-15.2-109.6-40.8z m260.8-37.6c2.4-18.4 3.2-40 1.6-61.6-1.6-34.4-18.4-56-41.6-68v-55.2h-56.8v44c-16 0-43.2-0.8-52.8-1.6h-3.2c-9.6 0-36.8 1.6-52.8 1.6v-44H400v55.2c-23.2 12-40 32.8-41.6 68-0.8 22.4 0 45.6 2.4 64.8C278.4 780 214.4 641.6 214.4 512c0-301.6 86.4-424.8 296.8-424.8 214.4 0 297.6 119.2 297.6 424.8 0 88-36.8 196.8-95.2 283.2-16 24-32.8 44.8-51.2 63.2z" fill="#3A363A" p-id="9172"></path><path d="M511.2 120.8c-8.8 0-16 7.2-16 16v381.6c0 8.8 7.2 16 16 16s16-7.2 16-16V136.8c0-8.8-7.2-16-16-16zM756 340.8c7.2-4.8 9.6-15.2 4.8-22.4-4.8-7.2-15.2-9.6-22.4-4.8L580 420c-7.2 4.8-9.6 15.2-4.8 22.4 3.2 4.8 8 7.2 13.6 7.2 3.2 0 6.4-0.8 8.8-2.4l158.4-106.4zM781.6 465.6c-4.8-7.2-15.2-9.6-22.4-4.8L601.6 566.4c-7.2 4.8-9.6 15.2-4.8 22.4 3.2 4.8 8 7.2 13.6 7.2 3.2 0 6.4-0.8 8.8-2.4L777.6 488c7.2-4.8 8.8-15.2 4-22.4zM442.4 420L284.8 314.4c-7.2-4.8-17.6-3.2-22.4 4.8s-3.2 17.6 4.8 22.4l158.4 105.6c2.4 1.6 5.6 2.4 8.8 2.4 4.8 0 10.4-2.4 13.6-7.2 4-8 2.4-17.6-5.6-22.4zM420.8 566.4L263.2 461.6c-7.2-4.8-17.6-3.2-22.4 4.8-4.8 7.2-3.2 17.6 4.8 22.4l158.4 105.6c2.4 1.6 5.6 2.4 8.8 2.4 4.8 0 10.4-2.4 13.6-7.2 4-8 2.4-18.4-5.6-23.2z" fill="#3A363A" p-id="9173"></path></svg>';
const dan =
  '<svg t="1629178169928" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10923" width="200" height="200"><path d="M219.648 264.192c-34.304 53.248-34.304 121.344 0 174.592 0 0 27.648 52.224-20.48 145.92 0 0-25.088 40.448 65.024 56.832 0 0-1.024 46.08 60.928 69.12 0 0-10.752 15.36 28.16 65.024 0 0 6.144 111.104 125.44 56.832s171.008-117.76 181.76-140.8 75.264-237.568 51.2-271.36c-24.064-33.792-151.04-115.2-200.192-122.88s-56.832-44.544-56.832-44.544-33.28 35.84-72.704 40.448-82.944-34.816-84.992-49.152c0 0-41.472 33.28-77.312 19.968z" fill="#FFFFFF" p-id="10924"></path><path d="M273.92 492.032S220.16 427.008 369.152 386.048c0 0 62.464-8.704 81.92-62.976 0 0 10.24 105.984-28.672 147.968-24.576 26.624-71.168 65.536-148.48 20.992z" fill="#FFA2C3" p-id="10925"></path><path d="M243.2 428.544C256 385.024 291.84 352.768 336.384 345.088c-17.408 9.216-32.768 20.992-46.08 35.328-28.16 30.72-55.296 74.24-47.104 48.128z m190.976-32.768s9.728 23.04-28.16 37.376-10.24 33.792-31.744 43.52c0 0 14.848-38.912-14.336-38.4 6.656 6.656 8.704 15.872 5.632 24.576-4.096 13.824-16.896 23.552-31.744 22.528-9.728-1.024-19.456-4.096-28.16-9.216 0 0-34.304 24.064-64.512-6.144 0 0 26.112 22.016 48.128 4.608S314.368 422.4 392.192 419.84c0.512 1.024 35.84 3.072 41.984-24.064z m407.04 144.896c-29.184 33.792-53.76 55.808-76.8 67.072 52.224 87.04-9.728 271.872-47.616 293.376-27.136 15.36-196.608 63.488-122.88-10.24 71.168-71.168 98.816-135.168 105.984-185.344-34.816 93.184-128.512 242.176-315.904 257.024 0 0-155.136-28.672-102.4-71.68 0 0 352.256 8.192 403.456-285.696-8.704-4.608-16.384-9.216-24.064-15.36 0 0-7.168-19.456-17.92-51.2C669.184 667.648 532.48 747.52 532.48 747.52c70.144-80.896 45.568-178.176 25.6-209.92-54.784-86.016-13.824-190.464-13.824-190.464-77.312-2.56-90.624-87.552-90.624-87.552-17.92 29.184-51.2 49.152-51.2 49.152-84.992 45.056-107.52-54.272-107.52-54.272-26.112 31.232-65.024 37.376-83.456 21.504 0.512 25.6-5.12 56.832-13.312 74.752-2.048 24.064 1.536 58.88 26.112 86.528 18.944 20.992 15.872 91.648-15.872 148.992-25.6 46.592 61.952 52.224 61.952 52.224 0 23.552 1.536 33.28 48.128 47.104 46.08 14.336-23.552 31.232 5.12 40.448s50.176 50.176 62.976 93.696 105.984 9.216 105.984 9.216c-112.128 56.32-134.144 16.384-144.896-33.28s-34.816-50.688-47.616-64c-13.312-12.8 6.656-26.624 6.656-26.624s-33.28-10.24-34.816-25.088c-1.536-14.848-15.872-33.792-15.872-33.792s-59.904-8.704-69.12-30.208c-11.264-25.6 70.144-111.104 24.576-167.936-21.504-26.624-20.992-64-17.408-91.136-7.168 9.728-15.36 10.752-24.576-6.144-31.232-57.856 15.872-95.232 31.232-105.472 0-1.024 0-1.536 0.512-2.56 5.12-35.84 48.128-83.968 72.192-108.544 9.216-9.728 15.872-15.36 15.872-15.36s-2.048 2.56-5.12 7.168c126.976-93.696 235.008-69.632 309.248-26.112 30.208-8.192 132.608-30.72 189.952 29.696 68.096 71.168 17.92 189.44 17.92 189.44s112.128 138.24 39.936 221.696zM275.968 137.728c-20.48 30.72-56.32 90.624-40.96 110.08 21.504 26.112 78.336-38.912 78.336-38.912s-28.16 49.664 45.568 72.704c49.152 15.36 82.944-29.184 99.84-60.416-114.176-13.824-170.496-69.632-182.784-83.456z m290.816 82.944c-30.208 3.584-60.928 4.096-91.648 2.048 7.168 28.672 27.136 56.32 73.216 69.632 9.216 2.56 18.944 3.584 28.672 3.584-4.608-25.088-8.192-50.176-10.24-75.264z" fill="#292929" p-id="10926"></path><path d="M578.048 304.64c-59.392 0-107.52-46.08-107.52-103.424s48.128-103.424 107.52-103.424 107.52 46.08 107.52 103.424-48.128 103.424-107.52 103.424zM353.28 298.496c-35.84-8.704-56.832-49.152-46.592-90.624 0-0.512 0.512-1.024 0.512-2.048-22.528 27.648-49.152 41.984-61.952 32.256-13.312-10.24-5.632-43.008 17.408-73.216S314.88 117.76 328.192 128c8.192 6.144 8.704 20.992 2.048 38.4 15.36-15.872 37.888-22.528 59.392-17.92 35.84 8.704 56.832 49.152 46.592 90.624C426.496 281.088 389.12 307.2 353.28 298.496z" fill="#9BC1FF" p-id="10927"></path><path d="M580.096 244.224c-23.04-0.512-40.96-19.456-40.448-42.496-1.024-22.528 16.384-41.472 38.4-42.496 22.528-1.024 41.472 16.384 42.496 38.4v4.096c0.512 22.528-17.408 41.472-40.448 42.496z m-210.432 7.68c-15.872 0-28.16-14.336-28.16-32.256s12.8-32.256 28.16-32.256c15.872 0 28.16 14.336 28.16 32.256s-12.8 32.256-28.16 32.256z m-99.328-46.592c-6.144-3.072-6.144-14.336-1.024-25.6 5.632-11.264 14.848-17.408 20.992-14.336 6.144 3.072 6.144 14.336 1.024 25.6-5.632 10.752-14.848 16.896-20.992 14.336z" fill="#FFFFFF" p-id="10928"></path><path d="M782.336 386.048c0 49.152-39.936 89.088-89.088 89.088h-1.536c5.632 22.528-8.192 45.568-30.72 51.2-22.528 5.632-45.568-8.192-51.2-30.72-4.608-18.432 3.584-37.888 19.968-47.104-34.304-35.328-34.304-91.648 1.024-125.952 7.68-7.68 16.384-13.312 26.112-17.92-35.328-13.312-53.76-52.736-40.448-88.576 13.312-35.328 52.736-53.76 88.576-40.448 35.328 13.312 53.76 52.736 40.448 88.576-5.632 14.848-16.384 27.648-30.208 35.328 39.936 10.24 67.072 45.568 67.072 86.528zM464.384 265.216c-46.08 0-83.456-37.376-83.968-83.456 0-46.08 37.376-83.456 83.456-83.968 46.08 0 83.456 37.376 83.968 83.456 0 46.592-37.376 83.968-83.456 83.968z m-120.32 443.904c-8.704 6.144-10.24 31.744-29.184 35.84-17.408 3.584-28.16-18.432-17.92-41.472 0 0-29.184-8.704-24.576-35.84 22.528 15.872 51.2 21.504 78.336 15.36 47.104-10.24 1.024 20.992-6.656 26.112zM250.368 188.416c-22.528 0-40.448-17.92-40.96-40.448 0-22.528 17.92-40.448 40.448-40.96s40.448 17.92 40.96 40.448c0 22.528-17.92 40.96-40.448 40.96z" fill="#EB4141" p-id="10929"></path></svg>';
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
      ownSay: '',
      backgroundColor: 'white'
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
          try {
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
          } catch (error) {
            ToastAndroid.show('请选择正确的图片', ToastAndroid.SHORT);
          }
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
      .then((res) => {
        ToastAndroid.show('保存信息成功', ToastAndroid.SHORT);
        this.props.getUserInfoAction();
      })
      .then((ress) => {
        DeviceEventEmitter.emit('valueChange');
        this.context.navigate('Myhome');
      });
  };
  render() {
    const dateNow = new Date();
    const currentDate = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1
      }-${dateNow.getDate()}`;
    const { birthday } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: this.state.backgroundColor }}>
        <Top
          title="个人信息"
          icon1="arrow-back"
          rightCallback={() => this.context.goBack()}
        />
        <View
          style={{
            marginLeft: pxToDp(16),
            marginRight: pxToDp(16),
            height: '75%',
            backgroundColor: '#fff',
            alignSelf: 'center',
            borderRadius: pxToDp(32),
            marginTop: pxToDp(60),
            elevation: 2,
            shadowColor: 'black', //  阴影颜色
            shadowOffset: { width: 0, height: 0 }, // 阴影偏移
            shadowOpacity: 1, // 阴影不透明度
            shadowRadius: 10 //  圆角
          }}
        >
          <View style={s.avatar}>
            <View
              style={{
                position: 'absolute',
                left: pxToDp(100),
                top: pxToDp(-60)
              }}
            >
              <View
                style={{
                  borderWidth: 5,
                  borderRadius: 100,
                  padding: 6,
                  borderColor: this.state.backgroundColor
                }}
              >
                <Avatar
                  avatarStyle={{ alignSelf: 'center', width: '100%' }}
                  size={120}
                  rounded
                  title="越"
                  onPress={() => this._changeModal()}
                  activeOpacity={0.7}
                  source={{
                    uri: this.state.avatar
                      ? changeImgSize(this.state.avatar, 'small')
                      : 'http://c-ssl.duitang.com/uploads/item/201205/04/20120504234528_UAfcM.jpeg'
                  }}
                />
              </View>
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
                        underlayColor={'#D5E8E6'}
                        onPress={this.openImagePickerAsync}
                      >
                        <Text style={s.modalItem}>打开相册</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={'#D5E8E6'}
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
          <TouchableOpacity
            style={{ marginTop: pxToDp(60) }}
            onPress={() => this.context.navigate('Nickname')}
          >
            <View style={s.basic}>
              <View style={{ marginLeft: pxToDp(16) }}>
                <View style={{ marginTop: pxToDp(20) }}>
                  <Text style={{ fontSize: pxToDp(16), color: '#000000' }}>
                    昵称
                  </Text>
                  <Text
                    style={{
                      fontSize: pxToDp(16),
                      marginTop: pxToDp(10),
                      marginBottom: pxToDp(20),
                      color: '#999999'
                    }}
                  >
                    {this.state.nickName}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.context.navigate('Signature')}>
            <View style={s.basic}>
              <View style={{ marginLeft: pxToDp(16), flex: 1 }}>
                <View style={{ marginTop: pxToDp(20) }}>
                  <Text style={{ fontSize: pxToDp(16), color: '#000000' }}>
                    个性签名
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={{
                      fontSize: pxToDp(16),
                      marginTop: pxToDp(10),
                      marginBottom: pxToDp(20),
                      color: '#999999'
                    }}
                  >
                    {this.state.ownSay}
                  </Text>
                </View>
              </View>
              {/* <View style={{ marginTop: pxToDp(60) }}>
                <AntDesign name="right" size={pxToDp(18)} color="#000" />
              </View> */}
            </View>
          </TouchableOpacity>

          <View
            style={
              (s.basic,
                [
                  {
                    flexDirection: 'row',
                    marginLeft: pxToDp(16),
                    marginTop: pxToDp(20)
                  }
                ])
            }
          >
            <Image
              source={require('./sheng.png')}
              style={{ width: 30, height: 50 }}
            />
            <CheckBox
              checkedColor="#62bfad"
              title="男"
              checked={this.state.sex}
              onPress={() => this.setState({ sex: 1 })}
            />
            <Image
              source={require('./dan.png')}
              style={{ width: 30, height: 50, marginLeft: pxToDp(40) }}
            />
            <CheckBox
              checkedColor="#62bfad"
              title="女"
              checked={!this.state.sex}
              onPress={() => this.setState({ sex: 0 })}
            />
          </View>

          <View style={[s.basic, { height: 80, marginTop: pxToDp(20) }]}>
            <View style={{ marginLeft: pxToDp(16) }}>
              <Text
                style={{
                  marginTop: pxToDp(10),
                  fontSize: pxToDp(16),
                  color: '#000000',
                  marginBottom: pxToDp(4)
                }}
              >
                生日
              </Text>
              <DatePicker
                style={{ width: pxToDp(238) }}
                androidMode="spinner"
                placeholder="设置生日"
                date={birthday?.split(' ').shift()}
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
                    fontSize: pxToDp(16),
                    color: '#999999'
                  }
                }}
                onDateChange={(birthday) => {
                  this.setState({ birthday });
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: '50%',
              alignSelf: 'center',
              borderRadius: pxToDp(16),
              overflow: 'hidden',
              marginTop: pxToDp(50)
            }}
          >
            <Mybtn
              title="保存"
              onPress={this.saveUserInfo}
              buttonStyle={{
                width: pxToDp(120),
                height: pxToDp(40),
                alignSelf: 'center',
                borderRadius: pxToDp(32)
              }}
              titleStyle={{
                color: 'white',
                fontSize: pxToDp(16)
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  basic: {
    height: pxToDp(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#D5E8E6',
    marginLeft: pxToDp(15),
    height: 90,
    width: '90%'
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
    backgroundColor: '#D5E8E6',
    justifyContent: 'space-evenly',
    borderRadius: pxToDp(32)
  },
  modalTitle: {
    width: '70%',
    fontSize: pxToDp(20),
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
