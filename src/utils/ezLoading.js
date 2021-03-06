import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native';
import { pxToDp } from './styleKits';

let lo;
const defaultTimeOut = -1; //设置显示时间标识

export class EasyLoading {
  /**
   * 显示Loading
   * @param text  Loading显示文本，默认为'加载中'
   * @param timeout Loading显示时间，为-1时会一只显示，需要手动关闭
   */
  static show(text = '加载中...', timeout = defaultTimeOut) {
    lo.setState({ isShow: true, text: text, timeout: timeout });
  }

  /**
   * 关闭Loading
   */
  static dismiss() {
    lo.setState({ isShow: false });
  }
}

export class Loading extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    textStyle: PropTypes.any,
    loadingStyle: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.handle = 0;
    this.state = {
      isShow: false,
      timeout: defaultTimeOut,
      text: '加载中...'
    };
    lo = this;
  }

  componentWillUnmount() {
    clearTimeout(this.handle);
  }

  render() {
    clearTimeout(this.handle);

    this.state.timeout !== defaultTimeOut &&
      (this.handle = setTimeout(() => {
        EasyLoading.dismiss();
      }, this.state.timeout));

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={this.state.isShow}
        onRequestClose={() => {
          EasyLoading.dismiss();
        }}
      >
        <View style={styles.container}>
          <View style={[styles.load_box, this.props.loadingStyle]}>
            <ActivityIndicator
              animating={true}
              color={this.props.color || '#FFF'}
              size={'large'}
              style={styles.load_progress}
            />
            <Text style={[styles.load_text, this.props.textStyle]}>
              {this.state.text}
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  load_box: {
    width: pxToDp(100),
    height: pxToDp(100),
    backgroundColor: '#468cd3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pxToDp(8)
  },
  load_progress: {
    width: pxToDp(50),
    height: pxToDp(50)
  },
  //默认字体颜色
  load_text: {
    color: '#FFF'
  },
  container: {
    marginTop: pxToDp(20),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)'
  }
});
