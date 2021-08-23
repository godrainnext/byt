import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-elements';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value1: true,
      value2: false,
      value3: true,
      value4: false
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: '#e2f4fe', flex: 1 }}>
        <Top icon1="arrow-back" title="隐私设置" />
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: pxToDp(8),
            margin: pxToDp(8)
          }}
        >
          <View style={styles.kidbox2}>
            <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>公开我的粉丝</Text>
            <Switch
              //动态改变value
              value={this.state.value1}
              //当切换开关室回调此方法
              onValueChange={(value1) => {
                this.setState({ value1: value1 });
              }}
            />
          </View>
          <View style={styles.kidbox2}>
            <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>公开我的关注</Text>
            <Switch
              //动态改变value
              value={this.state.value2}
              //当切换开关室回调此方法
              onValueChange={(value2) => {
                this.setState({ value2: value2 });
              }}
            />
          </View>
          <View style={styles.kidbox2}>
            <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>公开我的动态</Text>
            <Switch
              //动态改变value
              value={this.state.value3}
              //当切换开关室回调此方法
              onValueChange={(value3) => {
                this.setState({ value3: value3 });
              }}
            />
          </View>
          <View style={styles.kidbox2}>
            <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>公开我的收藏</Text>
            <Switch
              //动态改变value
              value={this.state.value4}
              //当切换开关室回调此方法
              onValueChange={(value4) => {
                this.setState({ value4: value4 });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  kidbox2: {
    marginLeft: pxToDp(16),
    marginTop: pxToDp(4),
    marginBottom:pxToDp(4),
    marginRight: pxToDp(16),
    height: pxToDp(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
export default Index;