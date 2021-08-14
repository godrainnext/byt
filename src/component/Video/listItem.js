import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Input,
  TouchableOpacity
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { report, like, full } from './svgUri';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Input,
  TouchableOpacity
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { report, like, full } from './svgUri';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 5,
    padding: 5,
    height: 200
  },
  cover: { width: 50, height: 50, borderRadius: 50 },
  cover1: {
    width: 80,
    height: 80,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    right: 10
  },

  info: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    padding: 5
  },
  username: { fontSize: 18, fontWeight: 'bold', marginLeft: 0 },
  releasetime: { fontSize: 10, color: 'gray' },
  cotent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    width: 350,
    height: 100,
    marginLeft: 18
  },
  cotenttitle: {
    width: 200,
    height: 60,
    position: 'absolute',
    left: 20,
    top: 5
  }
});

class ListItem extends PureComponent {
  state = {
    isSub: 'true'
  };
  subClick = () => {
    this.setState({ isSub: !this.state.isSub });
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          height: 100,
          borderBottomWidth: 0.2,
          borderBottomColor: 'gray'
        }}
      >
        <View style={{ backgroundColor: '#fff' }}>
          <Image
            source={require('../../res/4.jpg')}
            style={{ width: 40, height: 40, borderRadius: 20, margin: 10 }}
          />
        </View>
        <View style={{ position: 'absolute', top: 10, left: 60 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            {this.props.username}
          </Text>
          <Text style={{ marginTop: 12, width: 250, fontSize: 12 }}>
            {this.props.subs}
          </Text>
          <Text style={{ marginTop: 12, width: 250, fontSize: 13 }}>
            2019-09-12 21:57
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 10,
            backgroundColor: '#fff',
            marginTop: 10
          }}
        >
          <TouchableOpacity>
            <SvgUri svgXmlData={report} width="20" height="20" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 40 }}>
            <SvgUri svgXmlData={full} width="20" height="20" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ListItem;
