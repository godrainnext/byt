import React, { Component, createRef, memo } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Modal,
    Alert
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import { sandian } from '../../../../component/common/iconSvg';
import { Audio } from 'expo-av';
import { Video } from 'expo-av';
import {
    playmusic,
    dianzan,
    zhuanfa,
    pinglun,
    stopmusic
} from '../../../../component/common/iconSvg';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { useRef } from 'react';
import { PureComponent } from 'react';
import LottieView from 'lottie-react-native';
import changeImgSize from '../../../../utils/changeImgSize';

class Index extends Component {

    render() {
        return (
            <View>
            <Modal>
                
            </Modal>
          </View> 
          )
    }
}


export default Index;
