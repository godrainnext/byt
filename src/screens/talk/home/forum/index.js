import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  DeviceEventEmitter,
  TouchableNativeFeedback
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Tiebar from './luntan';
import { NavigationContext } from '@react-navigation/native';
import { getMomentListByStatus } from '@service/moment';
import BetterBanner from 'react-native-better-banner';
import LottieView from 'lottie-react-native';
import SwiperCard from '../swiperCard/index';
const { height, width } = Dimensions.get('window');
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      field: [
        {
          id: '1',
          text: '#第一次听戏',
          number: '1708',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F25%2F78%2F5bac5c99e2e2a.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867219&t=f380b82b82f03b4183c07e61ca871e3c',
          detail:
            '一个民族有一个民族的艺术，而一种艺术形式也必有其相应的一群观众，戏剧亦然。你第一次听戏是在什么时候呢？'
        },
        {
          id: '3',
          text: '#再忆王文娟',
          number: '130199',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mianfeiwendang.com%2Fpic%2F95773e4129b6446a7711a3fd9e413107aae15567%2F1-810-jpg_6-1440-0-0-1440.jpg&refer=http%3A%2F%2Fwww.mianfeiwendang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867284&t=ee820d8f13574c0a4707b8745ffa490d',
          detail:
            '王文娟先生于2021年8月6日凌晨0时25分去世，享年95岁。林黛玉扮演者已重返太虚幻境，天上还会再掉下个林妹妹吗？'
        },
        {
          id: '4',
          text: '#心目中的Top1',
          number: '303',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew13.photophoto.cn%2F20190116%2Fsecaijianbianxiaoqingxinshejijianyuehaibaobeijing-32355330_1.jpg&refer=http%3A%2F%2Fpicnew13.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867331&t=4185ef7ea0a06a45306ef8a0b8f95899',
          detail:
            '仁者见仁智者见智，越剧众多流派中，你最喜欢哪个流派呢？众多越剧演员中，谁又是你心目中的Top1呢？'
        },
        {
          id: '5',
          text: '#剧本观后感',
          number: '32',
          img: 'https://img1.baidu.com/it/u=931923788,4075714914&fm=26&fmt=auto&gp=0.jpg',
          detail:
            '你是否从作品中领悟出什么道理或思想呢？或是受作品中的内容启发而引出什么思考或联想呢？快和大家分享吧！'
        },
        {
          id: '6',
          text: '#七夕',
          number: '79912',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F61%2F16%2F945b47292be3a73.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867662&t=a010ff43b91886f4438adc77b7d7e3d4',
          detail:
            '七夕节，是中国民间的传统节日，被称为“东方的情人节”。越剧舞台上，又有那些我们熟悉的情侣角色呢？'
        }
      ],
      showSharePop: false, //分享弹窗，默认不显示,
      dongtai: [],
      isShow: false //
    };
  }
  componentDidMount() {
    DeviceEventEmitter.addListener('changeMoment', this.updateList);
    getMomentListByStatus(0, 0, 15).then((res) => {
      console.log(res);
      this.setState({ dongtai: [...res].reverse() });
    });
  }
  updateList = (newMoment) => {
    this.setState({
      dongtai: [newMoment, ...this.state.dongtai]
    });
  };
  changeVisible = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  renderRow(obj, index) {
    return (
      <View style={styles.cell}>
        <Image
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: undefined,
            height: undefined,
            borderRadius: pxToDp(8)
          }}
          resizeMode={'stretch'}
          source={obj}
        />
      </View>
    );
  }
  onPressRow(obj, index) {
    console.log('点击事件');
  }
  switch = (index) => {
    this.setState({ imgUrl: index });
  };
  openTopic(index) {
    this.context.navigate('Topic', this.state.field[index]);
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/*轮播图 */}
            <SwiperCard />
            {/**话题 */}
            <View style={styles.titlebox}>
              <View style={styles.left}></View>
              <View
                style={{ marginLeft: pxToDp(6), marginBottom: pxToDp(-20) }}
              >
                <Text style={styles.titletext}>热门话题</Text>
                <LottieView
                  style={{ width: pxToDp(80) }}
                  source={require('../../../../../lottie/标题底部.json')}
                  autoPlay={true}
                  loop={true}
                />
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                height: pxToDp(88),
                marginLeft: pxToDp(8),
                marginRight: pxToDp(16)
              }}
            >
              {this.state.field.map((item, index) => (
                <TouchableNativeFeedback
                  useForeground={true}
                  key={item.id}
                  onPress={() => this.openTopic(index)}
                >
                  <View
                    style={{
                      marginTop: pxToDp(8),
                      marginLeft: pxToDp(8),
                      width: pxToDp(150),
                      height: pxToDp(72),
                      borderRadius: pxToDp(8)
                    }}
                  >
                    <ImageBackground
                      source={{ uri: item.img }}
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'black',
                        borderRadius: pxToDp(8)
                      }}
                      imageStyle={{ borderRadius: pxToDp(8) }}
                    >
                      <Text
                        style={{
                          fontSize: pxToDp(16),
                          color: '#000000',
                          fontWeight: 'bold'
                        }}
                      >
                        {item.text}
                      </Text>
                    </ImageBackground>
                  </View>
                </TouchableNativeFeedback>
              ))}
            </ScrollView>
            <View style={{ marginTop: pxToDp(-16) }}>
              {/* 下方文章 */}
              <Tiebar dongtai={this.state.dongtai} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: pxToDp(130),
    backgroundColor: 'transparent'
  },
  swiper: {
    backgroundColor: '#f1f1f1',
    width: pxToDp(345)
  },
  cell: {
    //backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titlebox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16),
    marginTop: pxToDp(8)
  },
  left: {
    width: pxToDp(4),
    height: '75%',
    backgroundColor: '#62bfad',
    borderRadius: pxToDp(2)
  },
  titletext: {
    fontSize: pxToDp(18),
    color: '#62bfad',
    fontWeight: 'bold',
    marginLeft: pxToDp(3),
    marginBottom: pxToDp(-15)
  }
});
export default Index;
