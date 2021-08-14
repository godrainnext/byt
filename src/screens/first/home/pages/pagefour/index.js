import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from '@components/common/top';
import { NavigationContext } from '@react-navigation/native';

class Index extends PureComponent {
  static contextType = NavigationContext;
  render() {
    console.log(this.props.route);
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="精选唱段" />
        <ScrollView style={{ marginBottom: pxToDp(50) }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: pxToDp(10)
            }}
          >
            <View style={{ alignItems: 'center', alignSelf: 'center' }}>
              <Ionicons name="md-bar-chart" size={35} color="#00BFFF" />
              <Text style={styles.text1}>排行榜</Text>
            </View>
            <View style={{ alignItems: 'center', alignSelf: 'center' }}>
              <Ionicons name="md-calendar" size={35} color="#FFA500" />
              <Text style={styles.text1}>每周必看</Text>
            </View>
            <View style={{ alignItems: 'center', alignSelf: 'center' }}>
              <Ionicons name="md-musical-notes" size={35} color="red" />
              <Text style={styles.text1}>红色经典</Text>
            </View>
            <View style={{ alignItems: 'center', alignSelf: 'center' }}>
              <Ionicons name="md-happy-outline" size={35} color="green" />
              <Text style={styles.text1}>越剧动画</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.context.navigate('Video')}>
            <View style={styles.box}>
              <Image
                style={styles.image}
                source={require('../../../../../res/13.jpg')}
              />
              <View style={styles.botbox}>
                <Text style={styles.text1}>负心的状元郎，原来是这样的下场</Text>
                <View>
                  <Text style={styles.text2}>杭州越剧团</Text>
                  <Text style={styles.text2}>2004观看 * 07-23</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../../../res/11.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>《梁祝》 戚毕经典大戏</Text>
              <View>
                <Text style={styles.text2}>jauua</Text>
                <Text style={styles.text2}>500观看 * 06-24</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../../../res/12.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>《大观园 黛玉葬花》</Text>
              <View>
                <Text style={styles.text2}>绍兴越剧团</Text>
                <Text style={styles.text2}>1054观看 * 07-18</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require('../../../../../res/7.jpg')}
            />
            <View style={styles.botbox}>
              <Text style={styles.text1}>
                蔡浙飞老师饰演《周仁哭妻》中周仁一角
              </Text>
              <View>
                <Text style={styles.text2}>杭州越剧团</Text>
                <Text style={styles.text2}>28977观看 * 05-25</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    height: pxToDp(140),
    width: pxToDp(375),
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: pxToDp(0.5)
  },
  image: {
    height: pxToDp(120),
    width: pxToDp(170),
    borderRadius: pxToDp(20),
    margin: pxToDp(10)
  },
  text1: {
    fontSize: pxToDp(15),
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  botbox: {
    justifyContent: 'space-between',
    width: pxToDp(180),
    height: pxToDp(100),
    marginTop: pxToDp(20)
  },
  text2: {
    fontSize: pxToDp(13)
  }
});
export default Index;
