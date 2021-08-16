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
import { NavigationContext } from '@react-navigation/native';
import { abs } from 'react-native-reanimated';

class Index extends PureComponent {
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{
            flex: 1,
            marginTop: pxToDp(15)
          }}
        >
          <View style={{ flex: 1, marginBottom: pxToDp(50) }}>
            <View style={styles.baiscbox}>
              <Text>成书国家</Text>
              <Text>中国</Text>
            </View>
            <View style={styles.baiscbox}>
              <Text>成书时期</Text>
              <Text>明</Text>
            </View>
            <View style={styles.baiscbox}>
              <Text>书籍领域</Text>
              <Text>文学艺术，戏剧</Text>
            </View>
            <View style={styles.baiscbox}>
              <Text>国学分类</Text>
              <Text>集部</Text>
            </View>
            <View style={styles.baiscbox}>
              <Text>成书时间</Text>
              <Text>1368年-1644年</Text>
            </View>
            <View style={{ marginLeft: pxToDp(15) }}>
              <Text style={{ marginBottom: pxToDp(10) }}>古籍原貌</Text>
              <Image
                source={require('../../../res/play/1.jpg')}
                style={{ height: pxToDp(100), width: pxToDp(80) }}
              />
            </View>
            <View style={{ marginLeft: pxToDp(15) }}>
              <Text style={{ marginBottom: pxToDp(10) }}>古籍原貌</Text>
              <Image
                source={require('../../../res/play/1.jpg')}
                style={{ height: pxToDp(100), width: pxToDp(80) }}
              />
            </View>
            <View style={{ marginLeft: pxToDp(15) }}>
              <Text style={{ marginBottom: pxToDp(10) }}>古籍原貌</Text>
              <Image
                source={require('../../../res/play/1.jpg')}
                style={{ height: pxToDp(100), width: pxToDp(80) }}
              />
            </View>
            <View style={{ marginLeft: pxToDp(15) }}>
              <Text style={{ marginBottom: pxToDp(10) }}>古籍原貌</Text>
              <Image
                source={require('../../../res/play/1.jpg')}
                style={{ height: pxToDp(100), width: pxToDp(80) }}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: 'space-evenly'
          }}
        >
          <TouchableOpacity
            //onPress={() => this.Scrollable.open()}
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#468cd3',
              width: pxToDp(320),
              height: pxToDp(40),
              marginTop: pxToDp(4),
              marginBottom: pxToDp(4),
              borderRadius: pxToDp(40),
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center'
            }}
          >
            <Text>立即购买</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baiscbox: {
    height: pxToDp(32),
    marginTop: pxToDp(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pxToDp(15),
    marginRight: pxToDp(15)
  }
});

export default Index;
