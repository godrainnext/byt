import React, { PureComponent } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';

class Index extends PureComponent {
  state = {
    zzz: [
      {
        id: 1,
        title: '全国越剧汇演之上海越剧院《双珠凤》，方亚芬徐标新主演',
        Imguri: ''
      }
    ]
  };
  render() {
    return (
      <ScrollView {...this.props}>
        <View>
          {this.state.zzz.map((item, id) => (
            <View style={styles.box2}>
              <View style={{ width: pxToDp(220) }}>
                <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(5) }}>
                  全国越剧汇演之上海越剧院《双珠凤》，方亚芬徐标新主演
                </Text>
              </View>
              <Image
                style={styles.image4}
                source={require('../../../../res/15.jpg')}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
export default Index;
const styles = StyleSheet.create({
  box2: {
    margin: pxToDp(10),
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: pxToDp(1),
    height: pxToDp(110)
  },
  image4: {
    width: pxToDp(135),
    height: pxToDp(90),
    borderRadius: pxToDp(10)
  }
});
