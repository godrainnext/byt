import React, { PureComponent } from 'react';
import { NavigationContext } from '@react-navigation/native';
import { connect } from 'react-redux';
import Comment from './Comment';
class Index extends PureComponent {
  state = {
    arr: []
  };
  componentDidMount() {
    console.log(this.props.arr);
    this.setState({ arr: [...this.props.arr] });
  }

  addComment = (content) => {
    const comment = {
      avatar: this.props.userInfo.avatar,
      createTime: '刚刚',
      nickName: this.props.userInfo.nickName,
      content
    };
    console.log(comment);
    this.setState({ arr: [comment, ...this.state.arr] }, (state) => {
      console.log(state);
    });
  };
  static contextType = NavigationContext;
  render() {
    return (
      <Comment
        renderInner={this.props.renderInner}
        submit={this.addComment}
        arr={this.state.arr}
      />
    );
  }
}

export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(Index);
