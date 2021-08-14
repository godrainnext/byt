import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
// import { Optuijian } from '../..';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = NavigationContext;
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" />
        {/*经典推荐 */}
        <View style={styles.view}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.title}>经典推荐</Text>
            <TouchableOpacity
              onPress={() => this.context.navigate('Optuijian')}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                  查看更多
                </Text>
                <Ionicons name="chevron-forward" size={20} color="grey" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/13.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>负心的状元郎，原来是这样的下场</Text>
              <View>
                <Text style={styles.text2}>杭州越剧团</Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>2004观看 · 07-23</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/12.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>黛玉葬花</Text>
              <View>
                <Text style={styles.text2}>杭州小百花越剧团</Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>26572观看 · 08-01</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/play/3.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>梁祝</Text>
              <View>
                <Text style={styles.text2}>杭州小百花越剧团</Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>56732观看 · 07-31</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/*名角唱段 */}
        <View style={styles.view}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.title}>名角唱段</Text>
            <TouchableOpacity onPress={() => this.context.navigate('Opperson')}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                  查看更多
                </Text>
                <Ionicons name="chevron-forward" size={20} color="grey" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/play/6.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>袁雪芬 范瑞娟《祥林嫂》</Text>
              <View>
                <Text style={styles.text2}></Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>22531观看 · 07-23</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/play/7.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>赵心瑜《碧玉簪·归宁》</Text>
              <View>
                <Text style={styles.text2}></Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>22531观看 · 07-23</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/play/8.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>茅威涛《陆游与唐琬》</Text>
              <View>
                <Text style={styles.text2}></Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>66531观看 · 05-23</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/*流派纷呈 */}
        <View style={styles.view}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.title}>流派纷呈</Text>
            <TouchableOpacity onPress={() => this.context.navigate('Opgroup')}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                  查看更多
                </Text>
                <Ionicons name="chevron-forward" size={20} color="grey" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/genre/2.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>越剧范派集锦</Text>
              <View>
                <Text style={styles.text2}></Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>225321观看 · 07-23</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/genre/4.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>越剧傅派集锦</Text>
              <View>
                <Text style={styles.text2}></Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>22531观看 · 07-23</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/genre/7.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>越剧 王派唱段专辑</Text>
              <View>
                <Text style={styles.text2}></Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>66531观看 · 05-23</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.context.navigate()}>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../res/genre/8.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>越剧 陆派专辑</Text>
              <View>
                <Text style={styles.text2}></Text>
                <View style={styles.smallbox}>
                  <Text style={styles.text2}>63341观看 · 07-13</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: pxToDp(10),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10)
  },
  title: {
    fontSize: pxToDp(18),
    color: '#468CD3',
    fontWeight: 'bold'
  },
  box: {
    height: pxToDp(120),
    width: pxToDp(375),
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: pxToDp(0.5),
    marginTop: pxToDp(10)
  },
  image: {
    height: pxToDp(110),
    width: pxToDp(170),
    borderRadius: pxToDp(10),
    marginLeft: pxToDp(10)
  },
  botbox: {
    justifyContent: 'space-between',
    width: pxToDp(180),
    height: pxToDp(110),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10)
  },
  text1: {
    fontSize: pxToDp(15),
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  text2: {
    fontSize: pxToDp(13)
  },
  smallbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: pxToDp(170),
    alignItems: 'center'
  }
});

export default Index;
