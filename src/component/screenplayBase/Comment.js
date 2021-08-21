import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid
} from 'react-native';

import { connect } from 'react-redux';

import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import CommentItem from './commentItem';
class Comment extends PureComponent {
  state = { content: '' };
  submits = () => {
    this.setState({ content: '' });
    if (this.state.content) {
      this.props.submit(this.state.content);
      ToastAndroid.show('评论成功', ToastAndroid.SHORT);
      return;
    }
    ToastAndroid.show('评论不能为空', ToastAndroid.SHORT);
  };
  render() {
    return (
      <View style={{ backgroundColor: '#ecf6fc', flex: 1 }}>
        <Top icon1="arrow-back" title="追鱼" />
        <View style={{ padding: pxToDp(10) }}>
          <ScrollView showsVerticalScrollIndicator={false} scrollbars="none">
            {this.props.renderInner()}
            {/* 分割线 */}
            <View
              style={{
                width: pxToDp(350),
                marginTop: pxToDp(20),
                height: pxToDp(1),
                backgroundColor: 'black',
                opacity: 0.2,
                marginBottom: pxToDp(10)
              }}
            />
            {/* 评论区 */}
            <View style={{ marginBottom: pxToDp(120) }}>
              {this.props.arr.map((item) => (
                <CommentItem item={item} key={item.id} />
              ))}
            </View>
          </ScrollView>
          {/* 发评论 */}
          <View
            style={{
              backgroundColor: '#fff',
              height: pxToDp(48),
              width: '110%',
              alignItems: 'center',
              flexDirection: 'row',
              position: 'absolute',
              bottom:pxToDp(54)
            }}
          >
            <TextInput
              onChangeText={(val) => this.setState({ content: val })}
              value={this.state.content}
              placeholder="发一条友善的评论"
              style={{
                height: '80%',
                backgroundColor: '#ddd',
                width: '75%',
                marginLeft: pxToDp(20),
                borderRadius: pxToDp(20),
                paddingLeft: pxToDp(10)
              }}
            />
            <TouchableOpacity onPress={this.submits}>
              <Text style={{ marginLeft: pxToDp(20) }}>发布</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(Comment);
