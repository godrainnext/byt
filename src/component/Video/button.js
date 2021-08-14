import React, { PureComponent } from 'react';
import {
  Button,
  Image,
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class SignBtn extends PureComponent {
  static defaultProps = {
    style: {},
    textstyle: {}
  };
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.props.onPress}
        style={{
          width: 200,
          height: 50,
          alignSelf: 'center',
          ...this.props.style
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1.5, y: 0 }}
          colors={['#9b63cd', '#e070']}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>{this.props.children}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 25,
    width: '100%',
    height: '100%',
    backgroundColor: 'red'
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    color: '#ffffff'
  }
});
