import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native';

import { pxToDp } from '@utils/styleKits';
import RichTextView from '../components/RichTextView';
import { launchImageLibrary } from 'react-native-image-picker';
import request from '@service/index';
import dayjs from 'dayjs';
import Mybtn from '../../../../component/common/mybtn';
import { Input } from 'react-native-elements/dist/input/Input';
import { NavigationContext } from '@react-navigation/native';
import Top from '../../../../component/common/top';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements';
import { addTag } from '../../../../service/moment';
const { height, width } = Dimensions.get('window');
const talk =
  '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="64px" height="64.00px" viewBox="0 0 1024 1024" version="1.1"><path fill="#468CD3" d="M359.586265 548.627692h329.255384l15.36 11.815385 50.018462 39.384615 123.667692 96.098462v-147.298462h39.384615a78.769231 78.769231 0 0 0 56.713847-24.024615 81.526154 81.526154 0 0 0 22.44923-58.289231V82.313846a81.526154 81.526154 0 0 0-22.44923-58.289231A78.769231 78.769231 0 0 0 917.272418 0H359.586265a86.646154 86.646154 0 0 0-59.864616 24.024615A84.676923 84.676923 0 0 0 275.697034 82.313846v384a84.676923 84.676923 0 0 0 25.6 58.289231 86.646154 86.646154 0 0 0 58.289231 24.024615z m-30.326154-384V82.313846a28.356923 28.356923 0 0 1 9.452307-19.298461 30.72 30.72 0 0 1 20.873847-8.27077h557.686153a25.206154 25.206154 0 0 1 18.116924 8.27077 25.6 25.6 0 0 1 6.301538 19.298461v384a25.6 25.6 0 0 1-6.301538 19.298462 25.206154 25.206154 0 0 1-18.116924 8.270769h-94.523076v90.584615l-45.292308-35.84-18.510769-14.572307-51.593847-39.384616H359.586265a30.72 30.72 0 0 1-20.873847-8.270769 28.356923 28.356923 0 0 1-9.452307-19.298462z"/><path fill="#468CD3" d="M310.749342 685.686154h329.255384a85.464615 85.464615 0 0 0 58.289231-26.387692 84.283077 84.283077 0 0 0 19.298461-32.295385l-50.018461-39.384615v11.027692a34.658462 34.658462 0 0 1-8.270769 21.661538 29.144615 29.144615 0 0 1-19.298462 10.24H292.238572L220.558572 683.323077l-46.867692 33.870769V630.153846H82.318572a29.144615 29.144615 0 0 1-19.298461-10.24 34.658462 34.658462 0 0 1-8.270769-21.661538V215.04A22.843077 22.843077 0 0 1 63.020111 196.923077a25.206154 25.206154 0 0 1 19.298461-5.513846H236.312418V137.058462H82.318572A78.769231 78.769231 0 0 0 24.029342 157.538462 78.769231 78.769231 0 0 0 0.004726 215.04v384a87.433846 87.433846 0 0 0 24.024616 60.258462 83.495385 83.495385 0 0 0 58.28923 26.387692H118.158572V827.076923z"/><path fill="#468CD3" d="M1011.007803 559.261538a85.858462 85.858462 0 0 1-41.747692 24.418462v211.101538a27.963077 27.963077 0 0 1-8.270769 19.692308 27.175385 27.175385 0 0 1-19.298462 8.270769h-91.372308v90.19077l-46.867692-35.446154-71.68-54.744616H384.004726a27.175385 27.175385 0 0 1-19.298461-8.270769 27.963077 27.963077 0 0 1-8.27077-19.692308V748.307692h-36.627692l-18.116923 13.39077v31.507692a83.495385 83.495385 0 0 0 82.313846 83.101538h329.255385L905.85088 1024v-146.116923h36.627692A83.495385 83.495385 0 0 0 1024.004726 794.781538v-254.030769a74.830769 74.830769 0 0 1-12.996923 18.510769z"/></svg>';

class index extends PureComponent {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      fayan: '',
      text: '',
      arr: [],
      form: [],
      title: '123',
      checkedArr: [],
      field: [
        {
          id: '1',
          text: '#???????????????',
          number: '1708',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F25%2F78%2F5bac5c99e2e2a.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867219&t=f380b82b82f03b4183c07e61ca871e3c',
          detail:
            '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????'
        },
        {
          id: '3',
          text: '#???????????????',
          number: '130199',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mianfeiwendang.com%2Fpic%2F95773e4129b6446a7711a3fd9e413107aae15567%2F1-810-jpg_6-1440-0-0-1440.jpg&refer=http%3A%2F%2Fwww.mianfeiwendang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867284&t=ee820d8f13574c0a4707b8745ffa490d',
          detail:
            '??????????????????2021???8???6?????????0???25??????????????????95???????????????????????????????????????????????????????????????????????????????????????'
        },
        {
          id: '4',
          text: '#????????????Top1',
          number: '303',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew13.photophoto.cn%2F20190116%2Fsecaijianbianxiaoqingxinshejijianyuehaibaobeijing-32355330_1.jpg&refer=http%3A%2F%2Fpicnew13.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867331&t=4185ef7ea0a06a45306ef8a0b8f95899',
          detail:
            '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????Top1??????'
        },
        {
          id: '5',
          text: '#??????',
          number: '79912',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F61%2F16%2F945b47292be3a73.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867662&t=a010ff43b91886f4438adc77b7d7e3d4',
          detail:
            '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????'
        },
        {
          id: '6',
          text: '#???????????????',
          number: '32',
          img: 'https://img1.baidu.com/it/u=931923788,4075714914&fm=26&fmt=auto&gp=0.jpg',
          detail:
            '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????'
        }
      ]
    };
  }

  tianjia() {
    if (this.state.arr != null && this.state.arr.length >= 9) {
      //??????????????????????????????????????????
      return;
    } else {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => this._openPicker()}>
          {/* <SvgUri svgXmlData={talk} style={{ width: 100, height: 100 }} /> */}
          <Image
            style={{ width: pxToDp(112), height: pxToDp(112), marginLeft: pxToDp(10),  }}
            source={require('../../../../res/addimg.png')}
          ></Image>
        </TouchableOpacity>
      );
    }
  }
  //??????????????????
  _openPicker() {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 9
      },
      (response) => {
        try {
          const arr = [];
          response.assets.forEach((item) => {
            arr.push(item.uri);
          });
          this.setState({ arr: arr });
          this.setState({ form: response.assets });
        } catch (error) {
          ToastAndroid.show('????????????????????????', ToastAndroid.SHORT);
        }
      }
    );
  }

  //??????
  handleSetStar = async (id) => {
    // const url = '/readerComment/getReaderComment:likeNumber'.replace(":likeNumber", id);
    // const res = await request.privateGet(url);
    // console.log(res);
    // Toast.smile("????????????");
    // this.params.page = 1;
    // this.getList(true);
    // this.v.likeNumber = this.v.likeNumber + 1;
  };
  // ????????????
  handleEditingEnd = () => {
    this.setState({ text: '', title: '' });
    this.setState({ arr: [] });
    this.setState({ form: [] });
  };

  // ???????????? ????????????
  handleSubmit = () => {
    /* 
        1 ?????????????????? ????????????
        2 ?????????????????? ???????????? ?????? ??????
        3 ??? ?????????????????????
        4 ?????????????????? ????????????????????????
         */
    const { text, title } = this.state;
    // console.log(text)
    if (!text.trim()) {
      ToastAndroid.show('????????????????????????', ToastAndroid.SHORT);
      return;
    }
    if (!this.state.form.length) {
      ToastAndroid.show('???????????????', ToastAndroid.SHORT);
      return;
    }
    const fd = new FormData();
    const { form } = this.state;
    const images = [];
    form.forEach((item) => {
      let file = {
        uri: item.uri,
        type: item.type,
        name: item.type
      };
      fd.append('file', file);
      images.push(item.uri);
    });

    // const fd = this.state.form;
    fd.append('content', text);
    fd.append('title', title);
    fd.append('status', 0);
    request
      .post({
        url: '/moment',
        data: fd,
        header: {
          Accept: 'Application/json',
          'content-type': 'multipart/form-data'
        }
      })
      .then((res) => {
        DeviceEventEmitter.emit('changeMoment', {
          content: text,
          cover: form[0].uri,
          createTime: dayjs(new Date()).format('YYYY-MM-DD -HH-mm'),
          id: res.id,
          images: images,
          label: 0,
          status: 0,
          title: title,
          user: {
            ...this.props.userInfo
          },tags:[{
            name:'??????????????????'
          }]
        });
        addTag(res.id, this.state.checkedArr).then((ress) => {
          this.handleEditingEnd();
          ToastAndroid.show('??????????????????', ToastAndroid.SHORT);
          this.context.goBack();
        });
      });
  };

  changeTitle = (title) => {
    this.setState({ title });
  };
  render() {
    const { text } = this.state;
    // console.log(arr);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#D5E8E6'
        }}
      >
        <Top icon1="arrow-back" title="?????????" />
        <View
          style={{
            height: pxToDp(650),
            backgroundColor: '#D5E8E6',
            paddingLeft: pxToDp(16),
            paddingRight:pxToDp(16),
            paddingTop:pxToDp(8)
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 4 }}>
              {/* <Input
                placeholder="?????????????????????"
                inputStyle={{ fontSize: pxToDp(16) }}
                value={this.state.title}
                inputContainerStyle={{
                  borderBottomWidth: 0
                }}
                onChangeText={(v) => this.changeTitle(v)}
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
                      ??????
                    </Text>
                  </View>
                }
              /> */}
              <View
                style={{
                  elevation: 2, //  ??????????????????????????????????????????????????????????????????????????????????????????????????????
                  shadowColor: 'black', //  ????????????
                  shadowOffset: { width: 0, height: 0 }, // ????????????
                  shadowOpacity: 1, // ??????????????????
                  shadowRadius: 10,
                  marginBottom: pxToDp(10)
                }}
              >
                <RichTextView
                  inputStyle={styles.inputStyle}
                  placeholder="?????????????????????????????????..."
                  inputValue={text}
                  onChangeText={(t) => this.setState({ text: t })}
                  minHeight={255} // ????????????,?????????100
                  maxLength={255} // ????????????,?????????100
                  onSubmitEditing={this.handleSubmit}
                  showCount={true} // ??????????????????, ?????????true
                />
              </View>
              <View>
                <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold', marginLeft: pxToDp(10), marginBottom: pxToDp(4) }}>????????????</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.field.map((item) => (
                  <CheckBox
                    containerStyle={{ borderRadius: pxToDp(8) }}
                    checkedColor="#62bfad"
                    title={item.text.replace('#', '')}
                    onPress={(v) => {
                      if (
                        this.state.checkedArr.find((items) => items === item.id)
                      ) {
                        this.setState({
                          checkedArr: this.state.checkedArr.filter(
                            (items) => items !== item.id
                          )
                        });
                      } else {
                        this.setState({
                          checkedArr: [...this.state.checkedArr, item.id]
                        });
                      }
                    }}
                    checked={this.state.checkedArr.find(
                      (items) => items === item.id
                    )}
                  />
                ))}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}
              >
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {this.state.arr?.map((v, k) => {
                    return (
                      <View style={styles.Box} key={k}>
                        <TouchableOpacity>
                          <Image
                            style={{
                              height: (width - 40) / 3,
                              width: (width - 60) / 3,
                              borderRadius: pxToDp(8)
                            }}
                            source={{ uri: v }}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                  <View style={styles.Box}>
                    {this.tianjia()}
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: pxToDp(8),
            left: 0,
            right: 0
          }}
        >
          <Mybtn
            title="????????????"
            onPress={this.handleSubmit}
            buttonStyle={{
              width: pxToDp(320),
              height: pxToDp(40),
              alignSelf: 'center',
              borderRadius: pxToDp(32)
            }}
            titleStyle={{
              color: '#fcfcfc',
              fontWeight: 'bold',
              fontSize: pxToDp(16)
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: pxToDp(245),
    height: pxToDp(50),
    backgroundColor: 'transparent',
    borderColor: 'rgba(171, 190, 215, 0.56)',
    borderRadius: pxToDp(24),
    marginLeft: pxToDp(20),
    marginTop: pxToDp(20)
  },
  icon: {
    width: pxToDp(16),
    height: pxToDp(16),
    marginRight: pxToDp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon1: {
    width: 35,
    height: 30,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    backgroundColor: 'pink'
  },
  textInput: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    width: 200,
    height: 45,
    fontSize: 18,
    color: '#3f4b48'
  },
  Box: {
    marginRight: 10,
    marginBottom: 10,
    marginTop: pxToDp(16),
    marginLeft: pxToDp(10)
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tx: {
    height: 100,
    width
  },
  txt: {
    width: 300,
    height: 200,
    backgroundColor: 'white',
    borderWidth: 3
  },
  btn: {
    backgroundColor: 'green'
  }
});

export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(index);
