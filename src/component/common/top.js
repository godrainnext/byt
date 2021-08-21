import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BVLinearGradient
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp, screenWidth } from '../../utils/styleKits';
import  LinearGradient  from 'react-native-linear-gradient';
export default class HeaderHaveBack extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = NavigationContext;
  render() {
    return (
      <LinearGradient
        style={styles.box}
        colors={['#e2f4fe', 'white']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.6 }}
      >
        <View
          style={{
            marginTop: pxToDp(16),
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}
        >
          <View style={styles.icon1}>
            {this.props.icon1 ? (
              <TouchableOpacity onPress={() => this.context.goBack()}>
                {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
                <Ionicons name={this.props.icon1} size={25} color="#468CD3" />
              </TouchableOpacity>
            ) : null}
          </View>

          <View style={styles.textview}>
            {/* 标题名 */}
            <Text style={styles.textstyle}>{this.props.title}</Text>
          </View>
          {this.props.rightTitle ? (
            <View style={styles.icon2}>
              <TouchableOpacity onPress={this.props.rightCallback}>
                {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
                <Text> {this.props.rightTitle}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.icon2}>
              <TouchableOpacity onPress={this.props.rightCallback}>
                {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
                <Ionicons name={this.props.icon2} size={25} color="#468CD3" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    width: screenWidth,
    flexDirection: 'row',
    // backgroundColor: '#e0f3fe',
    height: pxToDp(56)
  },
  icon1: {
    width: pxToDp(45),
    left: 5
  },
  icon2: {
    width: pxToDp(40),
    right: 5
  },
  textview: {
    flex: 1,
    alignItems: 'center',
    top: pxToDp(3)
  },
  textstyle: {
    fontSize: pxToDp(18),
    color: '#468cd3'
  }
});
