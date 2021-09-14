import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BVLinearGradient,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp, screenWidth } from '../../utils/styleKits';
import LinearGradient from 'react-native-linear-gradient';
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
        colors={['#62bfad', '#62bfad']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.6, y: 0 }}
      >
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <View style={styles.icon1}>
            {this.props.icon1 ? (
              <TouchableOpacity onPress={() => this.context.goBack()}>
                {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
                <Ionicons name={this.props.icon1} size={25} color="white" />
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
                <Text style={{ fontSize: pxToDp(16), color: 'white' }}> {this.props.rightTitle}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.icon2}>
              <TouchableOpacity onPress={this.props.rightCallback}>
                {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
                <Ionicons name={this.props.icon2} size={25} color="#468CD3" />
                <Image source={this.props.icon3} style={{marginBottom:pxToDp(30),marginLeft:pxToDp(6)}}/>
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
    left: pxToDp(16)
  },
  icon2: {
    width: pxToDp(40),
    right: pxToDp(16)
  },
  textview: {
    flex: 1,
    alignItems: 'center',
  },
  textstyle: {
    fontSize: pxToDp(18),
    color: 'white'
  }
});
