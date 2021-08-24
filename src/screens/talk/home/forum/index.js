import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Tiebar from './luntan';
import { NavigationContext } from '@react-navigation/native';
import { getMomentListByStatus } from '@service/moment';
import Addmoment from './addMoment';
import EZSwiper from 'react-native-ezswiper';
const images = [
  {
    uri: 'http://img05.lantingyahui.com/Img05/49/99/30/9e791ddb-a31e-4687-bf71-f21695d302df.jpg'
  },
  {
    uri: 'http://img03.lantingyahui.com/Img03/79/30/34/3f1ff8ca-2a76-4d9b-88a2-21e6498816b6.jpg'
  },
  {
    uri: 'http://img04.lantingyahui.com/Img04/44/03/69/36c6859e-3854-4b33-9863-d7da7666c5f5.jpg'
  }
];
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
          id: '2',
          text: '#再忆王文娟',
          number: '130199',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mianfeiwendang.com%2Fpic%2F95773e4129b6446a7711a3fd9e413107aae15567%2F1-810-jpg_6-1440-0-0-1440.jpg&refer=http%3A%2F%2Fwww.mianfeiwendang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867284&t=ee820d8f13574c0a4707b8745ffa490d',
          detail:
            '王文娟先生于2021年8月6日凌晨0时25分去世，享年95岁。林黛玉扮演者已重返太虚幻境，天上还会再掉下个林妹妹吗？'
        },
        {
          id: '3',
          text: '#心目中的Top1',
          number: '303',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew13.photophoto.cn%2F20190116%2Fsecaijianbianxiaoqingxinshejijianyuehaibaobeijing-32355330_1.jpg&refer=http%3A%2F%2Fpicnew13.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867331&t=4185ef7ea0a06a45306ef8a0b8f95899',
          detail:
            '仁者见仁智者见智，越剧众多流派中，你最喜欢哪个流派呢？众多越剧演员中，谁又是你心目中的Top1呢？'
        },
        {
          id: '4',
          text: '#剧本观后感',
          number: '32',
          img: 'https://img1.baidu.com/it/u=931923788,4075714914&fm=26&fmt=auto&gp=0.jpg',
          detail:
            '你是否从作品中领悟出什么道理或精湛的思想呢？或是受作品中的内容启发而引起出什么思考与联想呢？赶紧来分享自己的感悟和大家一起讨论吧！'
        },
        {
          id: '5',
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
    getMomentListByStatus(0, 0, 15).then((res) => {
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
        <View>
          <Addmoment
            updateList={this.updateList}
            toggleModalProps={this.changeVisible}
            isModalVisible={this.state.isShow}
          />
        </View>
        <ScrollView>
          <View>
            {/*轮播图 */}
            <View>
              <EZSwiper
                style={[
                  styles.swiper,
                  { width: width - 20, height: 180, marginLeft: pxToDp(10) }
                ]}
                dataSource={images}
                width={width - 20}
                height={180}
                renderRow={this.renderRow}
                ratio={0.867}
                loop={true}
                index={0}
                onPress={this.onPressRow}
                autoplayTimeout={2}
              />
            </View>
            {/**话题 */}
            <Text
              style={{
                fontSize: pxToDp(18),
                color: '#000000',
                fontWeight: 'bold',
                marginTop: pxToDp(8),
                marginLeft: pxToDp(8)
              }}
            >
              热门话题
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ height: pxToDp(88),marginLeft:pxToDp(8),marginRight:pxToDp(16)}}
            >
              {this.state.field.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.openTopic(index)}
                  style={{
                    marginTop:pxToDp(8),
                    marginLeft:pxToDp(8),
                    width: pxToDp(150),
                    height: pxToDp(72),
                    borderRadius: pxToDp(8)
                  }}
                >
                  <View>
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
                      <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>
                        {item.text}
                      </Text>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
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
  }
});
export default Index;
