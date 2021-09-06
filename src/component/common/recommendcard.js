import React, { PureComponent } from 'react';
import Modal from 'react-native-modal';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { pxToDp } from '../../utils/styleKits';
import FlipCard from 'react-native-flip-card';
import ImagePicker from 'react-native-image-crop-picker';
//import MyButton from '../MyButton/index';
import Swiper from 'react-native-deck-swiper';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../component/first/card/home';


const { height, width } = Dimensions.get('window');
const BASE_URI = "http://192.168.50.118:3000";
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fayan: '',
      text: '',
      arr: [],
      username: '',
      currentIndex: 0,
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
        backdropColor="#000"
        backdropOpacity={0.5}
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
        <Home />
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
