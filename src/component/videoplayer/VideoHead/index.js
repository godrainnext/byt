import React, { PureComponent } from 'react';
import { View, StatusBar } from 'react-native';
import VideoPlayScreen from '../VideoPlayScreen';
import { pxToDp } from '@utils/styleKits';

import Top from '@components/common/top';
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      videoHeight: pxToDp(220),
      hidden: false
    };
  } 
  onIt = () => {
    this.setState({
      videoHeight: pxToDp(800),
      hidden: true
    });
  };

  upIt = () => {
    this.setState({
      videoHeight: pxToDp(220),
      hidden: false
    });
  };
  render() {
    const { videoHeight } = this.state;
    console.log(this.props.videoInfo);
    return (
      <View>
        <StatusBar hidden={this.state.hidden}></StatusBar>
        {!this.state.hidden ? (
          <Top icon1="arrow-back" title="播放" />
        ) : (
          <View></View>
        )}
        <View
          style={{ height: videoHeight, width: '100%', backgroundColor: 'red' }}
        >
          <VideoPlayScreen
            onIt={this.onIt}
            upIt={this.upIt}
            videoinfo={this.props.videoInfo}
          />
        </View>
      </View>
    );
  }
}

export default index;
