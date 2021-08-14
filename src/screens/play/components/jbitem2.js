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
        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(110) }}>
                        <TouchableOpacity >
                            <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={{uri:this.props.imguri}}  />
                        </TouchableOpacity>
                        <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>{this.props.name}</Text>
                            <Text style={{ fontSize: pxToDp(14),flexWrap:'wrap',flexDirection:'row',width:100}} numberOfLines={4}>{this.props.listtext}</Text>
                        </View>
                    </View>
    );
  }
}

export default Index;
