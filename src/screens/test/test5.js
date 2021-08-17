import React, { Component } from 'react';
import { Platform, TouchableOpacity, View, Image, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../utils/styleKits';
import Top from '../../component/common/top';
const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};
const HTML = `
<!DOCTYPEhtml>\n
<html>
	<head>
		<meta charset="UTF-8">
		<title>每日签到</title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
	</head>
	<body>
  <div>每日签到</div>

	</body>
</html>

`;
export default class App extends Component {
  //   _engine?: RtcEngine;
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      appId: '29792ec3eded410facd609fb7ad76fef',
      token:
        '00629792ec3eded410facd609fb7ad76fefIAAbKUcPA8ZKD6c3OvRQ3dLsbHqp9OSHU+zfE7bUrcatNkgDg6MAAAAAEACcjToMxfsZYQEAAQDE+xlh'
    };
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <Top title="时间线" icon1="arrow-back" />
        <WebView
          style={{
            width: '100%',
            height: '100%',
            top: pxToDp(-40),
            left: pxToDp(-10),
            backgroundColor: 'transparent'
          }}
          source={{
            uri: 'file:///android_asset/static.bundle/timeLine.html'
          }}
          originWhitelist={['*']}
          javaScriptEnabled={true} //是否开启js
          domStorageEnabled={true} //是否开启存储
          scalesPageToFit={false} //用户是否可以改变页面
          scrollEnabled={false}
          // injectedJavaScript={`	`}
          onMessage={(event) => {
            '接收h5页面传过来的消息';
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    max: {
        flex: 1,
    },
    buttonHolder: {
        height: pxToDp(100),
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    
});