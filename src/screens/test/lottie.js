import React, { PureComponent } from "react";
import { View, ScrollView, Text } from 'react-native'
import LottieView from 'lottie-react-native';
import { pxToDp } from "../../utils/styleKits";


export default class Index extends PureComponent {
    render() {
        return (
            <View style={{flex:1}}> 
                <View style={{ backgroundColor: 'red', flex: 1 }}>
                    <LottieView
                        source={require('../../../lottie/826/lf20_8zECb7.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <LottieView
                        source={require('../../../lottie/直播live效果.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <LottieView
                        source={require('../../../lottie/826/lf30_editor_6gne374s.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <LottieView
                        style={{ alignSelf: 'center' }}
                        source={require('../../../lottie/826/lf30_editor_cwhtepvv.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <LottieView
                        source={require('../../../lottie/826/lf30_editor_d4fx1ezs.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <LottieView

                        source={require('../../../lottie/826/lf30_editor_kyjfufwj.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <LottieView

                        source={require('../../../lottie/826/lf30_editor_lzvwonbx.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
            </View>
        );
    }
}