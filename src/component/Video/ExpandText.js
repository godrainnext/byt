import React, { PureComponent } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

import ExpandableText from 'rn-expandable-text';

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <ExpandableText
            numberOfLines={5}
            unexpandView={() => (
              <Text style={styles.readMeExpandText}>收起</Text>
            )}
            expandView={() => <Text style={styles.readMeExpandText}>更多</Text>}
          >
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 20,
                marginTop: 0,
                fontWeight: 'bold'
              }}
            >
              越剧《红楼梦》{'\n'}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 20,
                marginTop: 0,
                fontWeight: 'bold'
              }}
            >
              {'\n'}
            </Text>
            <Text style={{ marginTop: 40, fontSize: 15, fontWeight: 'bold' }}>
              上海越剧艺术传习所{'\n'}
            </Text>
            <Text style={{ marginTop: 40 }}>
              {'\n'}主演：董伟 董伟 董伟 董伟{'\n'}
            </Text>
            <Text style={{ marginTop: 40 }}>{'\n'}简介:RN-Expandable</Text>
          </ExpandableText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  item: {
    marginVertical: 6,
    marginHorizontal: 0,
    paddingLeft: 20,

    backgroundColor: 'white'
  },
  expandText: {
    color: '#014c92',
    textAlign: 'center'
  },
  readMeExpandText: {
    color: '#014c92',
    textAlign: 'right',
    marginTop: 12,
    marginLeft: 180
  },
  arrow_down: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 10,
    height: 10,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#014c92',
    transform: [{ rotate: '45deg' }]
  },
  arrow_up: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 10,
    height: 10,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#014c92',
    transform: [{ rotate: '-135deg' }]
  }
});
