/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { LogBox, } from 'react-native';


LogBox.ignoreAllLogs(true)//关闭全部黄色警告
LogBox.ignoreLogs([
  `Stack Navigator: 'headerMode="none"' is deprecated. Use 'headerShown: false' in 'screenOptions' instead.`,
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.',
  'Warning: componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.',
  '%s: Calling `getNode()` on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release. ViewPager',
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
  `Constants.manifest is null because the embedded app.config could not be read. Ensure that you have installed the expo-constants build scripts if you need to read from Constants.manifest.`,
  'Constants.linkingUrl has been renamed to Constants.linkingUri. Consider using the Linking API directly. Constants.linkingUrl will be removed in SDK 44.',
  `Constants.installationId has been deprecated in favor of generating and storing your own ID. Implement it using expo-application's androidId on Android and a storage API such as expo-secure-store on iOS and localStorage on the web. This API will be removed in SDK 44.`,
  'Constants.deviceId has been deprecated in favor of generating and storing your own ID. This API will be removed in SDK 44.',
  '%s: Calling `getNode()` on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release. ViewPager',
  'Warning: forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
])
AppRegistry.registerComponent(appName, () => App);