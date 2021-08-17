import React, { memo, useState, useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { useFollow } from '../utils/useFollow';
import { Button } from 'react-native-elements';
import { addFollow, cancelFollow } from '@service/mine';
import { pxToDp } from '../utils/styleKits';

export default memo(function (props) {
  const [isFollow, setIsFollow] = useState(useFollow(props.userId));

  // const result = useFollow(props.userId);
  // // setIsFollow(useFollow(result));
  // console.log(result);
  // setIsFollow(result);
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
    <Button
      buttonStyle={{
        borderColor: isFollow ? '#fff' : 'pink',
        backgroundColor: isFollow ? '#ccc' : '#fff',
        width: pxToDp(100)
      }}
      titleStyle={{ color: isFollow ? '#fff' : 'pink' }}
      title={isFollow ? '取消关注' : '关注'}
      onPress={() => addFollows(props.userId)}
    />
  );
});
