import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '1',
          img: require('../../../res/shop/14.jpg'),
          name: '越剧书签',
          value: '1000',
          price: '145元/套',
          color: '绿色',
          material: '合金',
          size: '高14.5cm 宽2.5cm',
          specs: '一套四枚',
          made: '仿珐琅',
          detail:
            '书签的设计，书签作为记录阅读进度而夹在书里的小薄片儿，作为通过将竺派越剧创始人竺水招先生所塑造的经典剧目形象为基础，将其人物头部作为金属书签的元素。分别是：《梁山伯与祝英台》中的梁山伯、《莫愁女》中的徐澄、《天雨花》中的左维明、《碧玉簪》中的李秀英，对其经典的元素进行提取和图形化再设计，代表了越剧的传统文化，将其应用到书签包装盒上，以更符合当下年轻戏迷群体的审美。'
        },
        {
          id: '2',
          img: require('../../../res/shop/8.jpg'),
          name: '《柳毅传书》笔记本',
          value: '4500',
          price: '45元/本',
          color: '蓝色柳毅',
          material: '人造丝',
          size: '长 90cm 宽 40cm',
          specs: '组合包装、内装一件',
          made: '数码印刷',
          detail:
            '这一系列的笔记本人物插画是通过对竺派越剧创始人竺水招先生、以及传承人竺小招先生的经典剧目形象为基础，依次是《柳毅传书》中的柳毅、《莫愁女》中的徐澄、《碧玉簪》中的李秀英、《双枪陆文龙》中的陆文龙，进行复古风格的插画设计并结合一些怀旧元素，以文字的形式配以每个剧目人物形象的性格特征，并将其应用到笔记本封面设计上，以更符合当下已有戏迷群体的审美。'
        },
        {
          id: '3',
          img: require('../../../res/shop/16.jpg'),
          name: '越剧人物刻章',
          value: '2000',
          price: '40元/个',
          color: '黑色',
          material: '红檀木',
          size: '长 3cm 宽 3cm',
          specs: '一枚',
          made: '雕刻',
          detail: ''
        },
        {
          id: '4',
          img: require('../../../res/shop/17.jpg'),
          name: '越剧钥匙扣',
          value: '1500',
          price: '20元/个',
          color: '按规定标准色',
          material: '亚克力',
          size: '视情况而定',
          specs: '一个',
          made: '四色印刷',
          detail:
            '钥匙扣人物插画是通过对竺派越剧创始人竺水招先生、以及传承人竺小招先生的经典剧目形象为基础，依次是《柳毅传书》中的柳毅、《莫愁女》中的徐澄、《碧玉簪》中的李秀英、《双枪陆文龙》中的陆文龙，进行复古风格的插画设计并结合一些怀旧元素；另一组是《梁山伯与祝英台》中的梁山伯、《莫愁女》中的徐澄、《天雨花》中的左维明、《碧玉簪》中的李秀英，对其角色元素进行提取和图形化再设计，代表了越剧的传统文化，将其应用到书签包装盒上，以更符合当下年轻戏迷群体的审美。'
        },
        {
          id: '5',
          img: require('../../../res/shop/9.jpg'),
          name: '越剧卷尺',
          value: '1000',
          price: '25.9元/个',
          color: '蓝色柳毅',
          material: '皮尺 PU皮+纳米材料合成,外壳 采用高档环保的工程塑料',
          size: '长 150cm 宽0.8cm 厚约0.3mm',
          specs: '单个',
          made: '专色 四色印刷',
          detail:
            '卷尺的设计，通过将竺水招先生的生平和对应的剧目结合卷尺刻度设计，消费者可以在使用卷尺的过程中可以了解到竺水招先生以及竺派越剧的历史发展。人物插画是通过对竺派越剧创始人竺水招先生、以及传承人竺小招先生的经典剧目形象为基础，依次是《柳毅传书》中的柳毅、《莫愁女》中的徐澄、《碧玉簪》中的李秀英、《双枪陆文龙》中的陆文龙，进行复古风格的插画设计并结合一些怀旧元素，将其应用到卷尺包装盒上，以更符合当下已有戏迷群体的审美。'
        },
        {
          id: '6',
          img: require('../../../res/shop/12.jpg'),
          name: '越剧人物方形鼠标垫',
          value: '9999',
          price: '55元/个',
          color: '55元/个',
          material: '人造丝',
          size: '直径 25cm',
          specs: '一件',
          made: '数码喷绘',
          detail:
            '鼠标垫作为当下办公人士必备的小物件之一，可以有效的保护鼠标使用的桌面，通过将竺派越剧创始人竺水招先生所塑造的经典剧目形象为基础，将竺水招的所饰演的刘毅人物形象分别点缀在竺派上。对其经典的元素进行提取和图形化再设计，代表了越剧的传统文化，将其应用到鼠标垫上，以更符合当下年轻戏迷群体的审美。'
        }
      ],
      activeTab: 1
    };
  }
  static contextType = NavigationContext;
  changeTab = (index) => {
    this.setState({ activeTab: index });
  };
  render() {
    const { activeTab } = this.state;
    console.log(activeTab);
    return (
      <View style={{ flex: 1, backgroundColor: '#e2f4fe' }}>
        <Top icon1="arrow-back" title="积分商城" />
        <ScrollView style={{ flex: 1 }}>
          <ImageBackground
            source={require('../../../res/jfbg.jpg')}
            style={{
              width: pxToDp(320),
              height: pxToDp(60),
              marginLeft: pxToDp(27),
              marginTop: pxToDp(5),
              marginBottom: pxToDp(10),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              opacity: 0.8
            }}
            imageStyle={{ borderRadius: pxToDp(8) }}
          >
            <View style={{ flexDirection: 'row', marginLeft: pxToDp(10) }}>
              <Text style={{ fontSize: pxToDp(22), color: '#f90' }}>110</Text>
              <Ionicons
                style={{ marginTop: pxToDp(10) }}
                name="server-outline"
                size={pxToDp(15)}
                color="#000"
              />
            </View>
            <TouchableOpacity
              style={{
                height: pxToDp(35),
                width: pxToDp(90),
                marginRight: pxToDp(13),
                borderRadius: pxToDp(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ fontSize: pxToDp(15), color: '#fff' }}>
                积分明细
              </Text>
              <AntDesign name="right" size={pxToDp(15)} color="#000" />
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ borderTopColor: 'black', borderTopWidth: pxToDp(1) }}>
            <Text style={{ fontSize: pxToDp(18), margin: pxToDp(10) }}>
              积分兑换
            </Text>
            <View style={styles.dadbox}>
              {this.state.data.map((item, index) => (
                <View style={styles.kidbox}>
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      this.context.navigate('pointshop', {
                        ...this.state.data[index]
                      })
                    }
                  >
                    <View
                      style={{
                        height: pxToDp(170),
                        marginTop: pxToDp(5),
                        marginBottom: pxToDp(5)
                      }}
                    >
                      <Image style={styles.image} source={item.img} />
                    </View>
                    <View style={{ height: pxToDp(60) }}>
                      <Text style={{ fontSize: pxToDp(15), margin: pxToDp(5) }}>
                        {item.name}
                      </Text>

                      <View style={styles.bottext}>
                        <Text>{item.value}积分</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dadbox: {
    width: pxToDp(372),
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  kidbox: {
    width: pxToDp(170),
    height: pxToDp(240),
    borderRadius: pxToDp(10),
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8)
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(170),
    borderRadius: pxToDp(10)
  },
  bottext: {
    flexDirection: 'row',
    margin: pxToDp(5),
    justifyContent: 'space-between'
  }
});
export default Index;
