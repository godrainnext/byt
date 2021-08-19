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
          <Text style={{ margin: pxToDp(15) }}>
            &emsp;
            北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。
          </Text>
          <View style={{ marginLeft: pxToDp(15) }}>
            <Text style={{ marginBottom: pxToDp(10) }}>古籍原貌</Text>
            <Image
              source={require('../../../res/play/1.jpg')}
              style={{ height: pxToDp(100), width: pxToDp(80) }}
            />
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
            <Text>开始阅读</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Index;
