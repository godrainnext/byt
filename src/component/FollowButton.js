import React, { useState, useEffect, memo } from 'react';
import { DeviceEventEmitter } from 'react-native';
import useFollow from '../utils/useFollow';
import { Button } from 'react-native-elements';
import { addFollow, cancelFollow } from '@service/mine';
import { pxToDp } from '../utils/styleKits';
import Mybtn from './common/mybtn';

export default memo(function FollowButton(props) {
  const [isFollow, setIsFollow] = useState(useFollow(props.userId));

  const addFollows = (id) => {
    if (!isFollow) {
      addFollow(id).then((res) => {
        setIsFollow(true);
        DeviceEventEmitter.emit('addFollow');
      });
    } else {
      cancelFollow(id).then((res) => {
        setIsFollow(false);
        DeviceEventEmitter.emit('removeFollow');
      });
    }
  };
  return (
    <Mybtn
      title={isFollow ? '取消关注' : '关注'}
      onPress={() => addFollows(props.userId)}
      buttonStyle={{
        width: pxToDp(80),
        height: pxToDp(30),
        borderTopLeftRadius: pxToDp(32),
        borderBottomLeftRadius: pxToDp(32)
      }}
      titleStyle={{
        color: 'white',
        fontSize: pxToDp(16),
        height: 40,
        marginTop: pxToDp(10),
        marginLeft: pxToDp(8)
      }}
    />
  );
});
