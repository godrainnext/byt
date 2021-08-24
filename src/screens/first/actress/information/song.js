import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';

class Index extends PureComponent {
  state = {
    song: [
      { title: '婆婆说话你可听到', people: '方亚芬', imgrui: '' },
      { title: '婆婆说话你可听到', people: '方亚芬', imgrui: '' },
      { title: '婆婆说话你可听到', people: '方亚芬', imgrui: '' }
    ]
  };
  render() {
    return (
      <ScrollView {...this.props} showsVerticalScrollIndicator = {false}>
        <View>
          {this.state.song.map((item, id) => (
            <View style={styles.box}>
              <Image
                style={styles.image3}
                source={require('../../../../res/performer/16.jpg')}
              />
              <View style={{ marginLeft: pxToDp(10), marginTop: pxToDp(8) }}>
                <Text style={styles.text}>婆婆说话你可听到</Text>
                <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}>
                  方亚芬
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
export default Index;
const styles = StyleSheet.create({
  box: {
    margin: pxToDp(8),
    flexDirection: 'row',
    borderBottomWidth: pxToDp(1),
    borderBottomColor: 'grey',
    height: pxToDp(90)
  },
  image3: {
    height: pxToDp(80),
    width: pxToDp(80),
    borderRadius: pxToDp(40)
  }
});
