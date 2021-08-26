import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { ScrollView, View, Text, Image, Button, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { pxToDp } from '../../utils/styleKits';
import FlipCard from 'react-native-flip-card';
import ImagePicker from 'react-native-image-crop-picker';
//import MyButton from '../MyButton/index';
import Swiper from "react-native-deck-swiper";
import { NavigationContext } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');
const BASE_URI = "http://192.168.50.118:3000";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fayan: '',
      text: '',
      arr: [],
      username: '',
      currentIndex: 0,
      cards: [
        {
          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2021%2F440849EAB16416D78F025D0638750934FF8AE2C6_size259_w600_h641.jpeg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631963190&t=4bf41b2c3dff8eda819db8f29b03f400',
          title: '一曲飘渺入云霄',
          context: '“天上掉下的林妹妹”魂归天宇，一代舞台传奇落幕'
        },
        {
          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp3.itc.cn%2Fq_70%2Fimages03%2F20200609%2Fe8fb314cb20749898eecafe2d68ae9da.jpeg&refer=http%3A%2F%2Fp3.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631963356&t=68a3c675aebbde43f7cafe966f77fa8b',
          title: '七夕',
          context: '浅吟低唱中那些触动我们的越剧经典情侣形象'
        },
        {
          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimagev2.xmcdn.com%2Fgroup2%2FM02%2F6B%2F27%2FwKgJRFs1xmSwp_T-AADAxWDDwuA839.jpg%3Fop_type%3D3%26device_type%3Dios%26name%3Dweb_meduim%26columns%3D72%26rows%3D72&refer=http%3A%2F%2Fimagev2.xmcdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631963470&t=68c28665b6c3b340d043466e01d1dd3a',
          title: '那些逝去的美好',
          context: '越剧里流传比较少的流派'
        },
        {
          uri: 'https://bkimg.cdn.bcebos.com/pic/6a63f6246b600c33ba2be7cf1a4c510fd9f9a162?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
          title: '丫头王',
          context: '越剧历史上，孟丽英有哪些故事'
        },
        {
          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.img.cctvpic.com%2Fphotoworkspace%2Fcontentimg%2F2018%2F10%2F11%2F2018101116283660762.jpg&refer=http%3A%2F%2Fp1.img.cctvpic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631963724&t=dd88b0257b82bc8de0c8413073bc2062',
          title: '“越”是故乡“鸣”',
          context: '中央电视台《角儿来了》来到嵊州越剧小镇进行拍摄'
        },
        {
          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170625%2Fc3832293b4074879baff33230f857024_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631963809&t=cec2764e13b8ffa4306b9423b21dd243',
          title: '小戏骨系列',
          context: '越剧《白蛇传·断桥》周思涵'
        },
        {
          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmz.eastday.com%2F57711593.jpeg%3Fimageslim&refer=http%3A%2F%2Fmz.eastday.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631966183&t=10c29280d9bf1f3a298b346683c14b53',
          title: '越剧历史',
          context: '越剧表演艺术家在朝鲜战场'
        },
        {
          uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimagepphcloud.thepaper.cn%2Fpph%2Fimage%2F144%2F991%2F82.jpg&refer=http%3A%2F%2Fimagepphcloud.thepaper.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631964091&t=024bf79e17d8cdb0fe2e54a93f0292d2',
          title: '苎萝浣纱女',
          context:
            '诸暨市越剧团的经典原创越剧《西施断缆》在苏州保利大剧院的演出顺利结束'
        },
        {
          uri: 'https://pics0.baidu.com/feed/500fd9f9d72a6059f678d7caba5ddc9c023bba63.jpeg?token=eb8c3b5c4d5621d21797f6bb70606740&s=E85028C645520FC26248F8380300F013',
          title: '核桃树之恋',
          context: '著名编剧谈创作背后：灵感来自钱江晚报浪漫诗意的漫画报道'
        }
      ]
    };
  }

  tianjia() {
    if (this.state.arr != null && this.state.arr.length >= 9) {
      //这里的判断根据所传图片张数定
      return;
    } else {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => this._openPicker()}>
          <Image
            source={require('../../res/addimg.png')}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
      );
    }
  }
  //打开本地图册
  _openPicker() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
      maxFiles: 9
    }).then((image) => {
      this.setState({
        arr: image
      });
      //     const {arr} = this.state;
      //    arr.push(image);
      //     this.setState({arr})
      //     console.log('arr',arr[1])
    });
  }

  //点赞
  handleSetStar = async (id) => {
    // const url = '/readerComment/getReaderComment:likeNumber'.replace(":likeNumber", id);
    // const res = await request.privateGet(url);
    // console.log(res);
    // Toast.smile("点赞成功");
    // this.params.page = 1;
    // this.getList(true);
    // this.v.likeNumber = this.v.likeNumber + 1;
  };
  // 结束输入
  handleEditingEnd = () => {
    this.setState({ showInput: false, text: '' });
  };

  // 完成编辑 发送评论
  handleSubmit = async () => {
    /* 
        1 获取评论内容 非空判断
        2 开始构造参数 发送请求 完成 评论
        3 把 输入框隐藏起来
        4 重新发送请求 获取评论列表数据
         */
    const { text, headimg, user_name } = this.state;
    // console.log(text)
    if (!text.trim()) {
      Toast.smile('评论不能为空');
      return;
    }

    axios
      .post(
        BASE_URI + '/readerComment/upReaderComment',
        {
          headimg: headimg,
          user_name: user_name,
          comment: text,
          likeNumber: '0'
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      .catch((err) => console.log(err));

    this.handleEditingEnd();

    this.params.page = 1;
    this.getList(true);

    Toast.smile('评论成功');
  };
  // componentWillMount() {
  //     axios.get('http://192.168.50.117:3000/readerComment/getReaderComment')
  //         .then((json) => {
  //             this.setState({
  //                 records: json.data,
  //             });
  //             // console.log(json.data);
  //         });
  // }

  componentDidMount() {
    this.getList().then(this.getIms());
    // this.getIms;
  }
  getList = async () => {
    // axios.get('http://192.168.50.117:3000/readerComment/getReaderComment')
    axios.get(BASE_URI + '/readerComment/getReaderComment').then((json) => {
      this.setState({
        records: json.data
      });
    });
  };

  getIms = async () => {
    // axios.get('http://192.168.50.117:3000/readerComment/getReaderComment')
    axios.get(BASE_URI + '/users/checkUser?user_id=5').then((json) => {
      this.setState({
        getrecords: json.data
      });
      console.log(json.data);
    });
  };
  static contextType = NavigationContext;

  render() {
    const { isModalVisible, toggleModalProps, arr, text } = this.props;
    const { cards, currentIndex } = this.state;

    // console.log(arr);
    return (
      <Modal
        testID={'modal'}
        isVisible={isModalVisible}
        // isVisible={this.isVisible()}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        onBackdropPress={toggleModalProps}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        scrollOffsetMax={400 - 300} // content height - ScrollView height
        propagateSwipe={true} //是否可滑动
      >
        <View
          style={{
            flex: 1,
            borderRadius: pxToDp(16),
            padding: 10,
            marginTop: pxToDp(80)
          }}
        >
          <View style={{ height: '100%' }}>
            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity
                style={{
                  width: pxToDp(40),
                  height: pxToDp(40),
                  marginBottom: pxToDp(-17),
                  marginRight: pxToDp(20)
                }}
                onPress={toggleModalProps}
              >
                <Ionicons
                  name="md-close-circle-outline"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <View
                style={{
                  borderColor: 'white',
                  borderWidth: pxToDp(1),
                  height: pxToDp(80),
                  marginTop:pxToDp(6),
                  marginRight: pxToDp(45),
                }}
              ></View>
            </View>
            <View style={styles.container}>
              {cards[currentIndex] ? (
                <Swiper
                  cards={cards}
                  renderCard={(card) => {
                    return (
                      <View style={styles.card}>
                        <TouchableOpacity
                        activeOpacity={1}
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() => {
                            toggleModalProps()
                            this.context.navigate('Pagefive', 69)
                          }}
                        >
                          <Image
                            style={{
                              width: pxToDp(270),
                              marginTop: pxToDp(-15),
                              height: pxToDp(160),
                              borderRadius: pxToDp(16)
                            }}
                            source={{ uri: cards[currentIndex].uri }}
                          ></Image>
                          {/* <Text style={styles.text}>{card}</Text> */}
                          {/* 标题名 */}
                          <View
                            style={{
                              width: pxToDp(200),
                              marginTop:pxToDp(15)
                            }}
                          >
                            <Text
                              style={{
                                fontSize: pxToDp(18),
                                fontWeight: 'bold',
                                textAlign: 'center'
                              }}
                            >
                              {cards[currentIndex].title}
                            </Text>
                          </View>
                          {/* 主题内容 */}
                          <View
                            style={{
                              width: pxToDp(300),
                              marginTop:pxToDp(15)
                            }}
                          >
                            <Text style={{ fontSize: pxToDp(16), textAlign: 'center' }}>
                              {cards[currentIndex].context}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                  // onSwiped={(cardIndex) => {console.log(cardIndex)}}
                  onSwiped={() => {
                    this.setState({
                      currentIndex: this.state.currentIndex + 1
                    });
                  }}
                  // cardIndex={0}
                  cardIndex={currentIndex}
                  backgroundColor={'transparent'}
                  cardVerticalMargin={45}
                  stackSize={3}
                ></Swiper>
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#F5FCFF",
  },
  card: {
    // flex: 1,
    borderRadius: pxToDp(16),
    borderWidth: 0,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: pxToDp(310),
    width: pxToDp(310),
    right: pxToDp(24),
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    // marginRight:pxToDp(200)
    marginTop: pxToDp(-50)
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  }
});

export default index;