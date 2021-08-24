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
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollbars="none"
          style={{
            padding: pxToDp(16),
            flex: 1,
            paddingBottom: 0
          }}
        >
          {this.props.renderInner()}
          {/* 评论区 */}
          <View
            style={{
              marginTop: pxToDp(12),
              marginBottom: pxToDp(10)
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(18),
                color: '#000',
                fontWeight: 'bold'
              }}
            >
              评论区
            </Text>
          </View>
          <View style={{ marginBottom: pxToDp(24) }}>
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
            alignItems: 'center',
            flexDirection: 'row'
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
              paddingLeft: pxToDp(16)
            }}
          />
          <TouchableOpacity onPress={this.submits}>
            <Text style={{ marginLeft: pxToDp(20) }}>发布</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(Comment);
