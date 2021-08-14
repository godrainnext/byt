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
import { FAB } from 'react-native-elements';
import JBitem from '../components/jbitem';

class Index extends PureComponent {
  state = {
    jblist: [
      {
        id: 1,
        jbname: '追鱼',
        jbtext:
          '北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。',
        imguri: ''
      },
      {
        id: 1,
        jbname: '追鱼',
        jbtext:
          '北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。',
        imguri: ''
      },
      {
        id: 1,
        jbname: '追鱼',
        jbtext:
          '北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。',
        imguri: ''
      }
    ]
  };

  static contextType = NavigationContext;
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Text style={styles.text1}>他山之石</Text>
            {this.state.jblist.map((item, id) => (
              <JBitem
                key={id}
                jbname={item.jbname}
                jbtext={item.jbtext}
                imgrui={item.imguri}
              />
            ))}
          </View>
          <View>
            <Text style={styles.text1}>永恒经典</Text>
            {this.state.jblist.map((item, id) => (
              <JBitem
                key={id}
                jbname={item.jbname}
                jbtext={item.jbtext}
                imgrui={item.imguri}
              />
            ))}
          </View>
        </ScrollView>
        <FAB
          size="large"
          placement="right"
          color="#B0C4DE"
          onPress={() => this.context.navigate('Create')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    fontSize: pxToDp(20),
    fontWeight: 'bold',
    marginLeft: pxToDp(10)
  },
  botbox: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: pxToDp(0.5),
    margin: pxToDp(10),
    height: pxToDp(130)
  },
  text2: {
    fontSize: pxToDp(18),
    fontWeight: 'bold'
  },
  image: {
    height: pxToDp(120),
    width: pxToDp(120),
    borderRadius: pxToDp(10)
  },
  text3: {
    fontSize: pxToDp(14),
    marginTop: pxToDp(5)
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
});
export default Index;
