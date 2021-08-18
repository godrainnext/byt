import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';

class Index extends PureComponent {
  state = {
    img: [{ imguri: '' }, { imguri: '' }, { imguri: '' }, { imguri: '' }]
  };
  render() {
    return (
      <ScrollView {...this.props}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {this.state.img.map((item, id) => (
            <Image
              style={styles.image2}
              source={require('../../../../res/performer/14.jpg')}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
export default Index;
const styles = StyleSheet.create({
  image2: {
    height: pxToDp(300),
    width: pxToDp(250),
    margin: pxToDp(5),
    borderRadius: pxToDp(10)
  }
});
