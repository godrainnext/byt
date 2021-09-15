import React, { PureComponent } from 'react';
// import Modal from 'react-native-modal';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import RichTextView from '../../talk/home/components/RichTextView';
import { launchImageLibrary } from 'react-native-image-picker';
import request from '@service/index';
import dayjs from 'dayjs';
import Mybtn from '@components/common/mybtn';
import { Input } from 'react-native-elements/dist/input/Input';
import { NavigationContext } from '@react-navigation/native';
import Top from '@components/common/top';
import { connect } from 'react-redux';
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
      title: '',
      image: ''
    };
  }

  tianjia() {
    if (this.state.arr != null && this.state.arr.length >= 9) {
      //这里的判断根据所传图片张数定
      return;
    } else {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => this._openPicker()}>
          {/* <SvgUri svgXmlData={talk} style={{ width: 100, height: 100 }} /> */}
          <Image
            style={{ width: pxToDp(100), height: pxToDp(100) }}
            source={require('../../../res/addimg.png')}
          ></Image>
        </TouchableOpacity>
      );
    }
  }
  //打开本地图册
  _openPicker() {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1
      },
      (response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          try {
            const pickerResult = response?.assets[0];
            console.log(pickerResult);
            this.setState({ image: pickerResult });
          } catch (error) {
            ToastAndroid.show('请选择正确的图片', ToastAndroid.SHORT);
          }
        }
      }
    );
  }

  // 结束输入
  handleEditingEnd = () => {
    this.setState({ text: '', title: '' });
    this.setState({ arr: [] });
    this.setState({ form: [] });
  };

  // 完成编辑 发送评论
  handleSubmit = () => {
    /* 
        1 获取评论内容 非空判断
        2 开始构造参数 发送请求 完成 评论
        3 把 输入框隐藏起来
        4 重新发送请求 获取评论列表数据
         */
    const { text, title } = this.state;
    // console.log(text)
    if (!text.trim()) {
      ToastAndroid.show('发布内容不能为空', ToastAndroid.SHORT);

      return;
    }
    if (!this.state.image) {
      ToastAndroid.show('请上传封面', ToastAndroid.SHORT);
      return;
    }
    const fd = new FormData();
    const file = {
      uri: this.state.image.uri,
      type: this.state.image.type,
      name: this.state.image.type
    };
    fd.append('file', file);
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
        request
          .post({
            url: `/uploads/momentmusic/${res.id}`,
            data: { musicId: this.props.route.params }
          })
          .then((ress) => {
            this.handleEditingEnd();
            DeviceEventEmitter.emit('changeMoment', {
              content: text,
              cover: this.state.image.uri,
              createTime: dayjs(new Date()).format('YYYY MM-DD-HH-mm'),
              id: res.id,
              images: this.state.image.uri,
              label: 1,
              music: ress,
              status: 0,
              title: title,
              user: {
                ...this.props.userInfo
              }
            });
            ToastAndroid.show('发布成功', ToastAndroid.SHORT);
          })
          .then(() => {
            this.context.navigate('Tabbar');
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
        <Top icon1="arrow-back" title="发动态" />
        <View
          style={{
            height: pxToDp(550),
            backgroundColor: '#D5E8E6',
            padding: pxToDp(16)
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 4 }}>
              <Input
                placeholder="请输入文章标题"
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
                      标题
                    </Text>
                  </View>
                }
              />
              <View
                style={{
                  elevation: 2, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
                  shadowColor: 'black', //  阴影颜色
                  shadowOffset: { width: 0, height: 0 }, // 阴影偏移
                  shadowOpacity: 1, // 阴影不透明度
                  shadowRadius: 10,
                  marginBottom: pxToDp(16),
                  marginTop: pxToDp(-24)
                }}
              >
                <RichTextView
                  inputStyle={styles.inputStyle}
                  placeholder="记录这一刻，分享每一天..."
                  inputValue={text}
                  onChangeText={(t) => this.setState({ text: t })}
                  minHeight={255} // 最小高度,默认为100
                  maxLength={255} // 最大长度,默认为100
                  onSubmitEditing={this.handleSubmit}
                  showCount={true} // 展示剩余文字, 默认为true
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}
              >
                {this.state.arr?.map((v, k) => {
                  return (
                    <View style={styles.Box} key={k}>
                      <TouchableOpacity>
                        <Image
                          style={{
                            height: (width - 40) / 3,
                            width: (width - 60) / 3
                          }}
                          source={{ uri: v }}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
              {this.tianjia()}
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
            title="发布动态"
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
    marginTop: pxToDp(16)
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
