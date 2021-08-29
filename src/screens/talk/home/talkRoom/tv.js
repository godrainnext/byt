import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
class Index extends PureComponent {
    render() {
        return (
            <View>
                <Image style={{ height: pxToDp(115), width: '100%', resizeMode: 'contain', zIndex: 9999}} source={require('../../../../res/tv2.png')} />
                <Image style={{ height: pxToDp(225), width: pxToDp(70), resizeMode: 'contain', zIndex: 9999,marginLeft:pxToDp(-11.7),marginTop:pxToDp(-12)}} source={require('../../../../res/tv1.png')} />
                <Image style={{ height: pxToDp(230), width:pxToDp(134), resizeMode: 'contain', zIndex: 9999,marginLeft:pxToDp(264),marginTop:pxToDp(-225)}} source={require('../../../../res/tv3.png')} />
                <Image style={{ height: pxToDp(45), width: '100%', resizeMode: 'contain', zIndex: 9999,marginLeft:pxToDp(-20),marginTop:pxToDp(-40.5) }} source={require('../../../../res/tv4.png')} />
            </View>
        );
    }
}

export default Index;