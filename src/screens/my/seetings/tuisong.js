import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-elements';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value1: true,
      value2: true,
      value3: true,
      value4: false,
      value5: true,
      value6: false,
      value7: true,
      value8: false,
      value9: false,
      value10: true
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: '#e2f4fe', flex: 1 }}>
        <Top icon1="arrow-back" title="消息通知与推送" />
        <View
          style={{
            margin: pxToDp(8),
            height: pxToDp(300)
          }}
        >
          <View style={styles.basicbox}>
            <Text style={styles.kidbox1}>新消息通知</Text>
            <Switch
              style={{ marginRight: pxToDp(16) }}
              //动态改变value
              value={this.state.value1}
              //当切换开关室回调此方法
              onValueChange={(value1) => {
                this.setState({ value1: value1 });
              }}
            />
          </View>
          <Text
            style={{
              marginLeft: pxToDp(5),
              marginTop: pxToDp(8),
              color: '#666666',
              fontSize: pxToDp(12)
            }}
          >
            关闭之后您可能遗漏新消息
          </Text>
          <View
            style={{
              backgroundColor: '#fff',
              marginTop: pxToDp(8),
              borderRadius: pxToDp(8),
              elevation: 8, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
              shadowColor: 'black', //  阴影颜色
              shadowOffset: { width: 0, height: 0 }, // 阴影偏移
              shadowOpacity: 0.5, // 阴影不透明度
              shadowRadius: pxToDp(16),
            }}
          >
            <View style={styles.kidbox2}>
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>声音</Text>
              <Ionicons name="chevron-forward" size={24} color="#666666" style={{ marginRight: pxToDp(8) }} />
            </View>
            <View style={styles.kidbox2}>
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>振动</Text>
              <Ionicons name="chevron-forward" size={24} color="#666666" style={{ marginRight: pxToDp(8) }} />
            </View>

            <View style={styles.kidbox2}>
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>通知显示消息内容</Text>
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
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>锁屏显示消息弹框</Text>
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
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>通知时指示灯闪烁</Text>
              <Switch
                //动态改变value
                value={this.state.value4}
                //当切换开关室回调此方法
                onValueChange={(value4) => {
                  this.setState({ value4: value4 });
                }}
              />
            </View>
            <View style={styles.kidbox2}>
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>
                通知图标显示未读消息数
              </Text>
              <Switch
                //动态改变value
                value={this.state.value5}
                //当切换开关室回调此方法
                onValueChange={(value5) => {
                  this.setState({ value5: value5 });
                }}
              />
            </View>
            <View style={styles.kidbox2}>
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>回复</Text>
              <Switch
                //动态改变value
                value={this.state.value6}
                //当切换开关室回调此方法
                onValueChange={(value6) => {
                  this.setState({ value6: value6 });
                }}
              />
            </View>
            <View style={styles.kidbox2}>
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>@我</Text>
              <Switch
                //动态改变value
                value={this.state.value7}
                //当切换开关室回调此方法
                onValueChange={(value7) => {
                  this.setState({ value7: value7 });
                }}
              />
            </View>
            <View style={styles.kidbox2}>
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>点赞</Text>
              <Switch
                //动态改变value
                value={this.state.value8}
                //当切换开关室回调此方法
                onValueChange={(value8) => {
                  this.setState({ value8: value8 });
                }}
              />
            </View>
            <View style={styles.kidbox2}>
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>新粉丝</Text>
              <Switch
                //动态改变value
                value={this.state.value9}
                //当切换开关室回调此方法
                onValueChange={(value9) => {
                  this.setState({ value9: value9 });
                }}
              />
            </View>
            <View style={[styles.kidbox2, { borderBottomWidth: 0 }]}>
              <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>聊天信息</Text>
              <Switch
                //动态改变value
                value={this.state.value10}
                //当切换开关室回调此方法
                onValueChange={(value10) => {
                  this.setState({ value10: value10 });
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  basicbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: pxToDp(50),
    borderRadius: pxToDp(8),
    elevation: 8, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowOffset: { width: 0, height: 0 }, // 阴影偏移
    shadowOpacity: 0.5, // 阴影不透明度
    shadowRadius: pxToDp(16),
    backgroundColor: 'white'
  },
  kidbox1: {
    fontSize: pxToDp(18),
    color: '#333333',
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16),
  },
  kidbox2: {
    marginLeft: pxToDp(16),
    marginTop: pxToDp(4),
    marginBottom: pxToDp(4),
    marginRight: pxToDp(16),
    height: pxToDp(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});
export default Index;
