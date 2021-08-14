import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image
} from 'react-native';
import Top from '../../../../component/common/top';
import { pxToDp } from '../../../../utils/styleKits';
import SvgUri from 'react-native-svg-uri';
import { location } from '../../../../component/common/iconSvg';
import { MarqueeHorizontal, MarqueeVertical } from 'react-native-marquee-ab';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class ticketdetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '1',
          avatar: require('../../../../res/qq.jpg'),
          name: '电话亭溺亡',
          detail:
            '之前没有预先了解过剧情，初以为情探是前几场情深意切时的试探，未曾想原来带着这么深重的悲剧色彩，探是心灰意冷下的最后一次试探，是给王朗的最后一次机会，也是给自己的最后一次机会，不愿信自己遇人不淑识人不善一片真情错付，是“唯愿他天良善性未尽抛”，于是便有理由放过王朗也放过自己。演员功底都很不错，情绪感染力也很强，悲情高涨初看见身旁一位奶奶几度擦泪。王朗最后伏罪倒地身亡钝声一响，演员的后脑实实在在砸落地板上，满场惊呼，不禁叹服其敬业！',
          img1: require('../../../../res/qq.jpg'),
          img2: require('../../../../res/qq.jpg'),
          img3: require('../../../../res/qq.jpg'),
          date: '2021.07.20',
          place: '杭州',
          reply: '13',
          like: '4'
        },
        {
          id: '2',
          avatar: require('../../../../res/qq.jpg'),
          name: '大枫Fun',
          detail:
            '《何文秀》这部剧曲折动人、大快人心，王兰英的温婉坚贞，何文秀的智慧，张堂的心狠手辣，杨妈妈的口快心直、哭戏动情，打斗激烈，还有俏皮活泼的“报菜名”、群戏“算命”背后是三年的冤屈和与爱妻分离的凄苦。执月公主的妩媚，老冯的稳稳台风，小太子的信手拈来，妈妈的轻松写意，几位演员精彩的表演把剧情演绎得一气呵成，实在是钱塘戏社的最高水准！将近三个小时的演出，可以从好人有好报、破镜可重圆的剧情中窥探到那个时代的人的淳朴愿望，这是传统戏曲普遍的可爱之处，它让你相信“真善美”并非虚言，而是每个善良的人都可以拥有的品质和馈赠。再次强调，执月公主的扮相和声音甜到极致，冯楚涵的英俊晴朗，以至于“冤魂”前我一直觉得自己在看一对私奔的小情侣，真是一对不可多得的舞台搭档。',
          img1: require('../../../../res/qq.jpg'),
          img2: require('../../../../res/qq.jpg'),
          img3: require('../../../../res/qq.jpg'),
          date: '2021.01.17',
          place: '杭州',
          reply: '22',
          like: '45'
        },
        {
          id: '3',
          avatar: require('../../../../res/qq.jpg'),
          name: 'jeanaioliya',
          detail:
            '演员功底真的好，最后还有一个僵尸摔，这是我万万没有想到的。重点是这么个票价，全本的情探真的值得。期待接下来还有全本的戏。',
          img1: require('../../../../res/qq.jpg'),
          img2: require('../../../../res/qq.jpg'),
          img3: require('../../../../res/qq.jpg'),
          date: '2021.07.11',
          place: '杭州',
          reply: '52',
          like: '45'
        }
      ]
    };
  }
  render() {
    console.log('day', this.props.route.params);
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" title="门票详情" />
        <ScrollView
          stickyHeaderIndices={[1]}
          style={{ margin: pxToDp(8), flex: 1 }}
        >
          <View>
            {/* 海报栏 */}
            <View
              style={{
                height: pxToDp(140),
                flexDirection: 'row'
              }}
            >
              <ImageBackground
                style={styles.img}
                imageStyle={{
                  borderRadius: pxToDp(8)
                }}
                source={this.props.route.params.posters}
              />
              <View
                style={{
                  margin: pxToDp(8),
                  width: pxToDp(242),
                  justifyContent: 'space-between'
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}
                    numberOfLines={2}
                  >
                    {this.props.route.params.name}
                  </Text>
                </View>
                <View>
                  <Text style={{ color: 'red' }}>
                    ￥{this.props.route.params.price}
                  </Text>
                </View>
              </View>
            </View>
            {/* 时间 */}
            <View style={styles.centerbox1}>
              <Text>{this.props.route.params.date}</Text>
              <Text style={{ color: '#aaa' }}>
                {this.props.route.params.time}
              </Text>
            </View>
            {/* 地点 */}
            <View style={styles.centerbox2}>
              <View>
                <Text>{this.props.route.params.place}</Text>
                <Text style={{ color: '#aaa' }}>
                  {this.props.route.params.detail}
                </Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <SvgUri svgXmlData={location} width="20" height="20" />
                <Text style={{ fontSize: pxToDp(12), color: '#aaa' }}>
                  9.1km
                </Text>
              </View>
            </View>
            {/* 观众评分 */}
            <View
              style={{
                height: pxToDp(140),
                flexDirection: 'row',
                marginLeft: pxToDp(8),
                marginRight: pxToDp(8),
                marginTop: pxToDp(10)
              }}
            >
              {/* 左评分 */}
              <View
                style={{
                  width: pxToDp(95),
                  justifyContent: 'space-between'
                }}
              >
                <View
                  style={{
                    height: pxToDp(30),
                    backgroundColor: '#468cd3',
                    borderBottomRightRadius: pxToDp(30),
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ fontSize: pxToDp(17), fontWeight: 'bold' }}>
                    观众评分
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                  }}
                >
                  <Text style={{ fontSize: pxToDp(25), color: '#468cd3' }}>
                    8.9
                  </Text>
                  <Text style={{ alignSelf: 'flex-end', color: '#468cd3' }}>
                    推荐
                  </Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom: pxToDp(5) }}>
                  <Text>349人想看</Text>
                </View>
              </View>
              {/* 右评论 */}
              <View
                style={{
                  width: pxToDp(248)
                }}
              >
                <MarqueeVertical
                  textList={[
                    {
                      label: '1',
                      value:
                        '伞兵:OK所有目光向我看齐，我宣布个事，我是个伞兵，啊啊啊啊啊啊啊啊啊'
                    },
                    {
                      label: '2',
                      value: '猪杯:猪杯就是我杰少,真晦气，别狗叫啊急了急了'
                    },
                    {
                      label: '3',
                      value: '霉比:霉比也是我杰少，真晦气，别狗叫啊急了急了'
                    }
                  ]}
                  width={pxToDp(248)}
                  height={pxToDp(110)}
                  direction={'up'}
                  numberOfLines={2}
                  bgContainerStyle={{ backgroundColor: '#eee' }}
                  textStyle={{ fontSize: 16, color: '#000' }}
                  onTextClick={(item) => {
                    alert('' + JSON.stringify(item));
                  }}
                />
                <View
                  style={{
                    height: pxToDp(30),
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <View style={styles.smallbox}>
                    <Text style={styles.smalltextbox}>很好看</Text>
                  </View>
                  <View style={styles.smallbox}>
                    <Text style={styles.smalltextbox}>演员很专业</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginLeft: pxToDp(8),
              marginRight: pxToDp(8),
              marginTop: pxToDp(10),
              backgroundColor: '#eee',
              flexDirection: 'row',
              height: pxToDp(30),
              borderRadius: pxToDp(8),
              alignItems: 'center'
            }}
          >
            {/* 详情&评价 */}
            <View
              style={{
                marginRight: pxToDp(20),
                flexDirection: 'row',

                alignItems: 'center'
              }}
            >
              <Text style={{ fontSize: pxToDp(18) }}>详情</Text>
              <Text style={{ fontSize: pxToDp(18) }}>/</Text>
              <Text style={{ fontSize: pxToDp(18) }}>评价</Text>
            </View>
          </View>
          <View>
            {/* 温馨提醒 */}
            <View style={styles.mainbox}>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  fontWeight: 'bold',
                  marginBottom: pxToDp(10)
                }}
              >
                温馨提示
              </Text>
              <Text>
                您知悉，因各地疫情情况，演出地或您所在地疫情防控政策可能影响您的出行安排或演出的入场验证要求。若演出受不可抗力影响延期或取消导致退票的，本App仅支持退回票款，其他因观演发生的费用需由您自行承担。
              </Text>
            </View>
            {/* 演出介绍 */}
            <View style={styles.mainbox}>
              <Text
                style={{
                  fontSize: pxToDp(18),
                  fontWeight: 'bold'
                }}
              >
                演出介绍
              </Text>
              <Image
                source={require('../../../../res/ticket7.jpg')}
                style={{
                  width: pxToDp(340),
                  height: pxToDp(400),
                  marginBottom: pxToDp(10)
                }}
              />
              <Text style={{ marginBottom: pxToDp(30) }}>
                越剧，作为我们江南特有的剧种，有着百年的历史，多以“才子佳人”为题材，唱腔温婉，情感细腻。是我国的第二大剧种，流传于全世界。
                {'\n'}
                2020年10月开场以来，几乎场场满座，也为杭州这座旅游文化名城增添了几分戏剧色彩。
              </Text>
              <Image
                source={require('../../../../res/ticket8.jpg')}
                style={styles.kidimg}
              />
              <Image
                source={require('../../../../res/ticket9.jpg')}
                style={styles.kidimg}
              />
              <Image
                source={require('../../../../res/ticket10.jpg')}
                style={styles.kidimg}
              />
            </View>
            {/* 观众热评 */}
            <View>
              <Text
                style={{
                  fontSize: pxToDp(18),
                  fontWeight: 'bold',
                  marginLeft: pxToDp(8),
                  marginTop: pxToDp(10)
                }}
              >
                观众热评
              </Text>
            </View>
            {this.state.data.map((item, index) => (
              <View style={styles.mainbox}>
                <View
                  style={{
                    height: pxToDp(50),
                    marginTop: pxToDp(10),
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Image
                    source={item.avatar}
                    style={{
                      height: pxToDp(30),
                      width: pxToDp(30),
                      borderRadius: pxToDp(30)
                    }}
                  />
                  <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                </View>

                <View
                  style={{
                    marginTop: pxToDp(10),
                    marginLeft: pxToDp(30),
                    width: pxToDp(312)
                  }}
                >
                  {/* 评论盒子 */}
                  <View>
                    <Text numberOfLines={5}>{item.detail}</Text>
                  </View>
                  {/* 评论图片盒子 */}
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      source={item.img1}
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(100),
                        marginLeft: pxToDp(3)
                      }}
                    />
                    <Image
                      source={item.img2}
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(100),
                        marginLeft: pxToDp(3)
                      }}
                    />
                    <Image
                      source={item.img3}
                      style={{
                        width: pxToDp(100),
                        height: pxToDp(100),
                        marginLeft: pxToDp(3)
                      }}
                    />
                  </View>
                  {/* 其他信息 */}
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: pxToDp(10),
                      marginBottom: pxToDp(10)
                    }}
                  >
                    <Text style={{ marginLeft: pxToDp(10) }}>{item.date}</Text>
                    <Text
                      style={{
                        marginLeft: pxToDp(10),
                        marginRight: pxToDp(40)
                      }}
                    >
                      杭州
                    </Text>
                    <AntDesign name="message1" size={pxToDp(16)} color="#666" />
                    <Text
                      style={{ marginLeft: pxToDp(4), marginRight: pxToDp(20) }}
                    >
                      {item.reply}
                    </Text>
                    <AntDesign name="like2" size={pxToDp(16)} color="#666" />
                    <Text>{item.like}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: pxToDp(90),
    height: pxToDp(120),
    marginLeft: pxToDp(10),
    marginTop: pxToDp(10),
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  centerbox1: {
    height: pxToDp(50),
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8),
    justifyContent: 'center',
    borderBottomWidth: pxToDp(1.1),
    borderBottomColor: '#aaa'
  },
  centerbox2: {
    height: pxToDp(50),
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: pxToDp(1.1),
    borderBottomColor: '#aaa',
    flexDirection: 'row'
  },
  smallbox: {
    height: pxToDp(20),
    borderRadius: pxToDp(20),
    justifyContent: 'center',
    backgroundColor: '#ecf6fc',
    marginRight: pxToDp(15)
  },
  smalltextbox: {
    fontSize: pxToDp(12),
    color: '#468cd3'
  },
  mainbox: {
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8),
    marginTop: pxToDp(10)
  },
  kidimg: {
    width: pxToDp(340),
    height: pxToDp(200),
    marginBottom: pxToDp(10)
  }
});
