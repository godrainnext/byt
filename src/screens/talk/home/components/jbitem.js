import React, { PureComponent } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Top from "@components/common/top";
import { pxToDp } from "@utils/styleKits";
import Swiper from "react-native-swiper";
import { NavigationContext } from "@react-navigation/native";
class Index extends PureComponent {

  static contextType = NavigationContext;
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.botbox}>
          <Image style={styles.image} source={{}} />
          <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
            <Text style={styles.text2}>{this.props.jbname}</Text>
            <Text style={styles.text3} numberOfLines={3}>{this.props.jbtext}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    fontSize: pxToDp(20),
    fontWeight: 'bold',
    marginLeft: pxToDp(10)
  },
  botbox: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: pxToDp(0.5),
    margin: pxToDp(10),
    height: pxToDp(130)
  },
  text2: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
  },
  image: {
    height: pxToDp(120),
    width: pxToDp(120),
    borderRadius: pxToDp(10)
  },
  text3: {
    fontSize: pxToDp(14),
    marginTop: pxToDp(5)
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})
export default Index;
