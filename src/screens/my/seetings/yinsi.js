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
      <View style={{ backgroundColor: '#D5E8E6', flex: 1 }}>
        <Top icon1="arrow-back" title="隐私设置" />
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: pxToDp(8),
            marginTop: pxToDp(8),
            marginLeft: pxToDp(16),
            marginRight: pxToDp(16),
            elevation: 2,
            shadowColor: 'black', //  阴影颜色
            shadowOffset: { width: 0, height: 0 }, // 阴影偏移
            shadowOpacity: 1, // 阴影不透明度
            shadowRadius: 10 //  圆角
          }}
        >
          <View style={styles.kidbox2}>
            <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>
              公开我的粉丝
            </Text>
            <Switch
              //动态改变value
              value={this.state.value1}
              thumbColor="#ecf6fc"
              color="#468cd3"
              //当切换开关室回调此方法
              onValueChange={(value1) => {
                this.setState({ value1: value1 });
              }}
            />
          </View>
          <View style={styles.kidbox2}>
            <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>
              公开我的关注
            </Text>
            <Switch
              //动态改变value
              value={this.state.value2}
              thumbColor="#ecf6fc"
              color="#468cd3"
              //当切换开关室回调此方法
              onValueChange={(value2) => {
                this.setState({ value2: value2 });
              }}
            />
          </View>
          <View style={styles.kidbox2}>
            <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>
              公开我的动态
            </Text>
            <Switch
              //动态改变value
              value={this.state.value3}
              thumbColor="#ecf6fc"
              color="#468cd3"
              //当切换开关室回调此方法
              onValueChange={(value3) => {
                this.setState({ value3: value3 });
              }}
            />
          </View>
          <View style={styles.kidbox2}>
            <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>
              公开我的收藏
            </Text>
            <Switch
              //动态改变value
              value={this.state.value4}
              thumbColor="#ecf6fc"
              color="#468cd3"
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
    marginBottom: pxToDp(4),
    marginRight: pxToDp(16),
    height: pxToDp(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
export default Index;
