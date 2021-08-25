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
        style={{ backgroundColor: '#E2F4FE', flex: 1,padding:pxToDp(16)}}
        showsVerticalScrollIndicator={false}
      >
        {/*经典推荐 */}
        <View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.title}>经典推荐</Text>
            <TouchableOpacity
              onPress={() => this.context.navigate('Optuijian', 0)}
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
        <Opera status={0} />
        {/*名角唱段 */}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:pxToDp(16) }}
          >
            <Text style={styles.title}>名角唱段</Text>
            <TouchableOpacity
              onPress={() => this.context.navigate('Opperson', 1)}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                  查看更多
                </Text>
                <Ionicons name="chevron-forward" size={20} color="grey" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom:pxToDp(32)}}>
        <Opera status={1} />
        </View>
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
