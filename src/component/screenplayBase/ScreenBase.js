import React, { PureComponent, Fragment } from 'react';
import { NavigationContext } from '@react-navigation/native';
import { connect } from 'react-redux';
import Comment from './Comment';
import Top from '@components/common/top';
class Index extends PureComponent {
  state = {
    arr: []
  };
  componentDidMount() {
    this.setState({ arr: [...this.props.arr] });
  }

  addComment = (content) => {
    const comment = {
      id: Date.now(),
      avatar: this.props.userInfo.avatar,
      createTime: '刚刚',
      nickName: this.props.userInfo.nickName,
      content,
      count: 0
    };

    this.setState({ arr: [comment, ...this.state.arr] }, () => {
      console.log(this.state.arr);
    });
  };
  static contextType = NavigationContext;
  render() {
    return (
      <Fragment>
        <Top title={this.props.top} icon1="arrow-back" />
        <Comment
          renderInner={this.props.renderInner}
          submit={this.addComment}
          arr={this.state.arr}
        />
      </Fragment>
    );
  }
}

export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(Index);
