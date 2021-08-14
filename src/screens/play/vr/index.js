
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Top from '../../../component/common/top';

const { width, height } = Dimensions.get('window');

const url = "https://www.kuleiman.com/120910/index.html?m=1";

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
                    // source={{ html:this.props.html,baseUrl:'http://127.0.0.1:5500/src/page/test/index.html'}}
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