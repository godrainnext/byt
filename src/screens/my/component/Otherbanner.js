/* eslint-disable semi */
/* eslint-disable prettier/prettier */
('use strict');
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/styleKits';
export default class HeaderHaveBackNoshare extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={this.context.goBack}>
            {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
            <Ionicons name={this.props.back} size={25} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.textview}>
          {/* 标题名 */}
          <Text style={styles.textstyle}>{this.props.title}</Text>
        </View>

        <View style={styles.share}>
          {/* 确定 */}
          {/* <TouchableOpacity onPress={this.context.goBack}> */}
          {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
          <TouchableOpacity onPress={this.props.rightCallback}>
            <Text style={styles.textstyle1}>{this.props.share}</Text>
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'gray',
    height: pxToDp(100),
    width: '100%',
    justifyContent: 'space-between'
  },
  back: {
    justifyContent: 'center',
    marginLeft: pxToDp(24)
  },
  share: {
    justifyContent: 'center',
    marginRight: pxToDp(8)
  },
  textview: {
    alignItems: 'center'
  },
  textstyle: {
    fontSize: pxToDp(22),
    color: '#fff'
  },
  textstyle1: {
    fontSize: pxToDp(18),
    color: '#fff'
  }
});
