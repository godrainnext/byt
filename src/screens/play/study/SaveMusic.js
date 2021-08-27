import React, { memo, useEffect, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import { Audio, Video } from 'expo-av';
import { Button } from 'react-native-elements';
import { getMusicById } from '@service/play';
import { useRef } from 'react';
export default memo(function SaveMusic(props) {
  const [music, setmusic] = useState();
  const [status, setstatus] = useState();
  const musicRef = useRef();
  useLayoutEffect(() => {
    getMusicById(props.route.params.staticId).then((res) => {
      console.log(res);
      setmusic(res);
    });
  }, []);

  function playmusic() {
    props.route.params.sound.playAsync();
    musicRef.current.playAsync();
  }
  return (
    <View>
      <Video
        ref={musicRef}
        source={{ uri: music }}
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setstatus({ status })}
      />
      <Button onPress={playmusic} />
    </View>
  );
});
