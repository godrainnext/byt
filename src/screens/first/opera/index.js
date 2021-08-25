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
import Opera from '@components/first/opera';
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{flex:1}}>
      <Top icon1="arrow-back" title="精选唱段"/>
      <ScrollView
        style={{ backgroundColor: 'white', flex: 1}}
        showsVerticalScrollIndicator={false}
      >
        <Opera status={0} />
        <Opera status={1} />
        <View style={{height:pxToDp(20)}}></View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: pxToDp(18),
    color: '#000',
    fontWeight: 'bold'
  },
  box: {
    height: pxToDp(120),
    width: pxToDp(375),
    flexDirection: 'row',
    marginTop: pxToDp(8),
  },
  image: {
    height: pxToDp(110),
    width: pxToDp(170),
    borderRadius: pxToDp(8),
  },
  botbox: {
    justifyContent: 'space-between',
    width: pxToDp(180),
    height: pxToDp(110),
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
