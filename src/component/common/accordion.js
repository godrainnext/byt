import React, { PureComponent } from 'react';
import Collapsible from 'react-native-collapsible';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { pxToDp } from '../../utils/styleKits';
export default class Acordion extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      touch: true,
      collapsed: true,
      point: require('../../res/箭头上.png'),
      pointlater: require('../../res/箭头下.png')
    };
  }
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
    const { touch } = this.state;
    this.setState({ touch: !touch });
  };
  render() {
    const { point, pointlater, touch } = this.state;
    const Arr = this.props.daddata;
    return (
      <ScrollView>
        <View>
          <Text style={{ fontSize: pxToDp(16),color:'#333333' }}>&emsp;&emsp;{Arr.detail1}</Text>
        </View>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View>
            <Text style={{ fontSize: pxToDp(16),color:'#333333'}}>{Arr.detail2}</Text>
            <Text style={{ color: '#666666', fontSize: pxToDp(14),marginTop:pxToDp(10)}}>
              {Arr.warn}
            </Text>
          </View>
        </Collapsible>
        <TouchableOpacity onPress={this.toggleExpanded}>
          <Image
            style={{
              width: pxToDp(20),
              height: pxToDp(20),
              marginLeft: pxToDp(160)
            }}
            source={touch ? pointlater : point}
          />
        </TouchableOpacity>
        {/* 越剧 */}
        {Arr.kid.map((item, index) => (
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                marginLeft: pxToDp(20),
                width: pxToDp(70)
              }}
            >
              <Text style={styles.lefttext}>{item.title}</Text>
            </View>
            <View
              style={{
                marginLeft: pxToDp(20),
                width: pxToDp(220)
              }}
            >
              <Text style={styles.righttext} numberOfLines={1}>
                {item.message}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500'
  },
  content: {
    padding: 20,
    backgroundColor: '#fff'
  },
  lefttext: { color: '#666666', marginBottom: pxToDp(5),fontSize:pxToDp(12)},
  righttext: { color: '#666666', marginBottom: pxToDp(5),fontSize:pxToDp(12) }
});
