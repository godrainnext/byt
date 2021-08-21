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
      <ScrollView style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" />
        {/*经典推荐 */}
        <View style={styles.view}>
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
        <View style={styles.view}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
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
        </View>
        <Opera status={1} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: pxToDp(8),
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8)
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
    marginTop: pxToDp(8)
  },
  image: {
    height: pxToDp(110),
    width: pxToDp(170),
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(8)
  },
  botbox: {
    justifyContent: 'space-between',
    width: pxToDp(180),
    height: pxToDp(110),
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8)
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
