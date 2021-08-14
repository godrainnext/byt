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
                            <TouchableOpacity onPress={() => this.context.navigate("Drama")}>
                                <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={{uri:this.props.imguri}} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>{this.props.jbname}</Text>
                                <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(15) }}>{this.props.jbtext}</Text>
                            </View>
                        </View>
    );
  }
}

export default Index;
