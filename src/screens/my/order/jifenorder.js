import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Top from '../../../component/common/top';
import AnimatedLoader from 'react-native-animated-loader';

export default class jifenorder extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
  componentDidMount() {
    new Promise((res, rej) => {
      setTimeout(() => {
        res(123);
      }, 1000);
    }).then((res) =>
      this.setState({
        visible: !this.state.visible
      })
    );
  }

  render() {
    const { visible } = this.state;
    console.log(visible);
    console.log(this.props.route.params);
    return (
      <View>
        <Top title="订单详情" icon1="arrow-back" />
        <AnimatedLoader
          visible={visible}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../../../../lottie/loader.json')}
          animationStyle={styles.lottie}
          speed={1}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});
