import React, { PureComponent } from "react";
import { View } from "react-native";
import Nav from "./src/nav";
import store from './src/store';
import {Provider} from 'react-redux';

export default class App extends PureComponent {
  render() {
    return (
    <Provider store={store}>
      <View style={{ flex: 1 }}  >
          <Nav></Nav>
        </View>
    </Provider>
    );
  }
}
