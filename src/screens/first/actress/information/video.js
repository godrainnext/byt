import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { pxToDp } from '@utils/styleKits';

function TabView1(props) {
  return (
    <ScrollView {...props}>
      <View>
        <View style={{ margin: pxToDp(8) }}>
          <Image
            style={styles.image1}
            source={require('../../../../res/performer/12.jpg')}
          />
          <Text style={styles.text}>
            名家名段：越剧《山河恋·送信》现在我和你口信念-表演：王君安 方亚芬
          </Text>
        </View>
        <View style={{ margin: pxToDp(10) }}>
          <Image
            style={styles.image1}
            source={require('../../../../res/performer/13.jpg')}
          />
          <Text style={styles.text}>
            越剧《白蛇传·断桥》-表演：方亚芬 张宇峰
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default TabView1;
const styles = StyleSheet.create({
  image1: {
    height: pxToDp(170),
    width: pxToDp(355),
    borderRadius: pxToDp(8)
  },

  text: {
    fontSize: pxToDp(18)
  }
});
