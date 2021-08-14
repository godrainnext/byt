import * as ScreenOrientation from 'expo-screen-orientation'
import { Dimensions, ScrollView, StyleSheet, View, Text } from 'react-native'
import { Video } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import React, { useRef, useState } from 'react'
import VideoPlayer from 'expo-video-player'

const App = () => {
    const [inFullscreen2, setInFullsreen2] = useState(false)
    const refVideo2 = useRef(null)
    const refScrollView = useRef(null)

    return (
        <ScrollView
            scrollEnabled={!inFullscreen2}
            ref={refScrollView}
            onContentSizeChange={() => {
                if (inFullscreen2) {
                    refScrollView.current.scrollToEnd({ animated: true })
                }
            }}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
                <VideoPlayer
                    videoProps={{
                        shouldPlay: false,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: require('../../../res/越剧介绍.mp4'),
                        ref: refVideo2,
                    }}
                    fullscreen={{
                        inFullscreen: inFullscreen2,
                        enterFullscreen: async () => {
                            setStatusBarHidden(true, 'fade')
                            setInFullsreen2(!inFullscreen2)
                            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
                            refVideo2.current.setStatusAsync({
                                shouldPlay: true,
                            })
                        },
                        exitFullscreen: async () => {
                            setStatusBarHidden(false, 'fade')
                            setInFullsreen2(!inFullscreen2)
                            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
                        },
                    }}
                    style={{
                        videoBackgroundColor: 'black',
                        height: inFullscreen2 ? Dimensions.get('window').width : 210,
                        width: inFullscreen2 ? Dimensions.get('window').height : 370,
                    }}
                />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default App;