
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Top from '../../component/common/top';

const { width, height } = Dimensions.get('window');

const url = "https://www.amap.com/search?query=%E9%BC%93%E6%A5%BC-%E5%89%A7%E5%9C%BA&city=330102&id=B0G3FUJOT9&query_type=IDQ";

export default class App extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Top icon1="arrow-back" />
                <WebView
                    style={{ width: width, height: height - 20, backgroundColor: 'gray' }}
                    source={{ uri: url }}
                    javaScriptEnabled={true}//是否开启js
                    domStorageEnabled={true}//是否开启存储
                    scalesPageToFit={false}//用户是否可以改变页面
                    scrollEnabled={false}
                    // injectedJavaScript={`	`}
                    onMessage={event => { '接收h5页面传过来的消息' }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
});