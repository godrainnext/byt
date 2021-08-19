import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  DeviceEventEmitter,
  Dimensions
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Tiebar from './luntan';
import { NavigationContext } from '@react-navigation/native';
import { getMomentListByStatus } from '@service/moment';
import Addmoment from './addMoment';
import SvgUri from 'react-native-svg-uri';
import { daohang } from '../../../../component/common/iconSvg';
import { FAB } from 'react-native-elements';
import EZSwiper from 'react-native-ezswiper';
const images = [
  {
    uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FRqm4Bk9vroAzBHPOfFMm14cWHLl0gmRZD8sunnz5mxlDCAbmlRfFEECBU2zeuE7dV9edNhg8IYpld8ILriaSvrg%2F640.jpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631858460&t=c5a56ff4372f1925ef950e0f6cee2eb8'
  },
  {
    uri: 'https://img1.baidu.com/it/u=2686354713,1431007342&fm=26&fmt=auto&gp=0.jpg'
  },
  {
    uri: 'https://pics5.baidu.com/feed/14ce36d3d539b600e385f38cdeb3b72cc75cb7a8.jpeg?token=8ff70aeedc3c563450849f19b777d49e'
  }
];
const { height, width } = Dimensions.get('window');
class Index extends PureComponent {
  state = {
    field: [
      {
        id: '1',
        text: '#第一次听戏',
        path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F25%2F78%2F5bac5c99e2e2a.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867219&t=f380b82b82f03b4183c07e61ca871e3c'
      },
      {
        id: '2',
        text: '#再忆王文娟',
        path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mianfeiwendang.com%2Fpic%2F95773e4129b6446a7711a3fd9e413107aae15567%2F1-810-jpg_6-1440-0-0-1440.jpg&refer=http%3A%2F%2Fwww.mianfeiwendang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867284&t=ee820d8f13574c0a4707b8745ffa490d'
      },
      {
        id: '3',
        text: '#心目中的Top1',
        path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew13.photophoto.cn%2F20190116%2Fsecaijianbianxiaoqingxinshejijianyuehaibaobeijing-32355330_1.jpg&refer=http%3A%2F%2Fpicnew13.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867331&t=4185ef7ea0a06a45306ef8a0b8f95899'
      },
      {
        id: '4',
        text: '#剧本观后感',
        path: 'https://img1.baidu.com/it/u=931923788,4075714914&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        id: '5',
        text: '#七夕',
        path: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F61%2F16%2F945b47292be3a73.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631867662&t=a010ff43b91886f4438adc77b7d7e3d4'
      }
    ],
    showSharePop: false, //分享弹窗，默认不显示,
    dongtai: [],
    isShow: false //
  };
  componentDidMount() {
    this.changeListener = DeviceEventEmitter.addListener('momentChange', () => {
      getMomentListByStatus(0, 0, 20).then((res) => {
        this.setState({ dongtai: [...res].reverse() });
        console.log(res);
      });
    });
    getMomentListByStatus(0, 0, 20).then((res) => {
      this.setState({ dongtai: [...res].reverse() });
    });
  }
  componentWillUnmount() {
    this.changeListener.remove();
  }
  changeVisible = () => {
    console.log(123);
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
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf6fc' }}>
        <View>
          <Addmoment
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
                  { width: width - 50, height: 150, marginLeft: pxToDp(25) }
                ]}
                dataSource={images}
                width={width - 50}
                height={150}
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
                color: '#468CD3',
                fontWeight: 'bold',
                marginTop: pxToDp(10),
                marginLeft: pxToDp(10)
              }}
            >
              热门话题
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ height: pxToDp(88) }}
            >
              {this.state.field.map((item, index) => (
                <TouchableOpacity
                  style={{
                    marginLeft: pxToDp(10),
                    marginTop: pxToDp(10),
                    width: pxToDp(150),
                    height: pxToDp(72),
                    borderRadius: pxToDp(10)
                  }}
                >
                  <View>
                    <ImageBackground
                      source={{ uri: item.path }}
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
                      <Text style={{ fontSize: pxToDp(20), color: 'black' }}>
                        {item.text}
                      </Text>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={{ marginTop: pxToDp(-16) }}>
              <Tiebar dongtai={this.state.dongtai} />
            </View>
          </View>
        </ScrollView>
        <FAB
          size="large"
          placement="right"
          color="#B0C4DE"
          onPress={this.changeVisible}
          icon={
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <SvgUri svgXmlData={daohang} width="32" height="32" />
            </View>
          }
        />
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
    width: pxToDp(345),
  },
  cell: {
    //backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Index;
