import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import Swiper from 'react-native-swiper';
import { NavigationContext } from '@react-navigation/native';
class Index extends PureComponent {
  static contextType = NavigationContext;
  render() {
    return (
      <View style={styles.ocard}>
        <TouchableOpacity
          onPress={() => this.context.navigate('Good', this.props.id)}
        >
          <Image
            style={styles.image}
            source={{ uri: this.props.imguri }}
          ></Image>
          <View style={{ padding: pxToDp(4) }}>
            <Text style={{ fontSize: pxToDp(15) }}>{this.props.name}</Text>
            <View style={styles.bottext}>
              <Text style={{ color: '#B22222' }}>{this.props.price}</Text>
              <Text style={{ color: 'grey' }}>{this.props.number}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ocard: {
    backgroundColor: 'white',
    width: pxToDp(170),
    borderRadius: pxToDp(8),
    margin: pxToDp(10),
    marginRight: pxToDp(5)
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(170),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  }
});

export default Index;
