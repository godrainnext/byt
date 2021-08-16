import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import { NavigationContext } from '@react-navigation/native';
import { connect } from 'react-redux';
import VideoPlayScreen from './VideoPlayScreen';
class Index extends PureComponent {
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <Top icon1="arrow-back" title="播放" />
        <View style={{ height: pxToDp(250) }}>
          <View
            style={{
              height: '100%',
              width: '100%'
            }}
          >
            <VideoPlayScreen />
            {/* <Button onPress={()=>this.onIt()} title='111'></Button> */}
          </View>
        </View>
      </View>
    );
  }
}

export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo']),
  avatar: state.getIn(['SettingReducer', 'avatar'])
}))(Index);
