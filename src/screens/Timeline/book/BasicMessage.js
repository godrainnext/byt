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
import Mybtn from '../../../component/common/mybtn';

class Index extends PureComponent {
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{
            flex: 1,
            marginTop: pxToDp(8)
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.baiscbox}>
              <Text style={{ fontSize: pxToDp(16) }}>成书国家</Text>
              <Text style={{ fontSize: pxToDp(16) }}>中国</Text>
            </View>
            <View style={styles.baiscbox}>
              <Text style={{ fontSize: pxToDp(16) }}>成书时期</Text>
              <Text style={{ fontSize: pxToDp(16) }}>明</Text>
            </View>
            <View style={styles.baiscbox}>
              <Text style={{ fontSize: pxToDp(16) }}>书籍领域</Text>
              <Text style={{ fontSize: pxToDp(16) }}>文学艺术，戏剧</Text>
            </View>
            <View style={styles.baiscbox}>
              <Text style={{ fontSize: pxToDp(16) }}>国学分类</Text>
              <Text style={{ fontSize: pxToDp(16) }}>集部</Text>
            </View>
            <View style={styles.baiscbox}>
              <Text style={{ fontSize: pxToDp(16) }}>成书时间</Text>
              <Text style={{ fontSize: pxToDp(16) }}>1368年-1644年</Text>
            </View>
            <View style={{ marginLeft: pxToDp(16) }}>
              <Text style={{ marginBottom: pxToDp(10), fontSize: pxToDp(16), marginTop: pxToDp(8) }}>
                古籍原貌
              </Text>
              <Image
                source={require('../../../res/play/1.jpg')}
                style={{
                  height: pxToDp(96),
                  width: pxToDp(80),
                  borderRadius: pxToDp(8)
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: 'space-evenly',
            marginBottom: pxToDp(16)
          }}
        >
          <Mybtn
            title="开始阅读"
            buttonStyle={{
              width: pxToDp(320),
              height: pxToDp(40),
              alignSelf: 'center',
              borderRadius: pxToDp(32),
            }}
            titleStyle={{
              color: 'white',
              fontSize: pxToDp(16)
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baiscbox: {
    height: pxToDp(24),
    marginTop: pxToDp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16)
  }
});

export default Index;
