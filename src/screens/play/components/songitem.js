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
        <TouchableOpacity onPress={() => this.context.navigate("Details")}>
                        <View style={styles.box}>
                            <Image style={styles.image} source={{uri:this.props.imguri}}></Image>
                            <View>
                                <Text style={styles.text1}>{this.props.title}</Text>
                                <Text style={styles.text2}>{this.props.lyric}</Text>
                                <Text style={styles.text3}>{this.props.lisnum}人唱过</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    textinput: {
        backgroundColor: '#F5F5F5',
        height: pxToDp(40),
        borderRadius: pxToDp(30),
        marginLeft: pxToDp(10),
        marginRight: pxToDp(10),
        marginTop: pxToDp(5)
    },
    box: {
        flexDirection: 'row',
        height: pxToDp(90),
        marginTop: pxToDp(5),
        marginLeft: pxToDp(17),
        borderBottomWidth: pxToDp(1),
        borderBottomColor: '#696969'
    },
    image: {
        height: pxToDp(80),
        width: pxToDp(80)
    },
    text1: {
        fontSize: pxToDp(14),
        color: '#000000',
        marginLeft:pxToDp(10)
    },
    text2: {
        fontSize: pxToDp(14),
        color: '#696969',
        marginLeft:pxToDp(10)
    },
    text3: {
        fontSize: pxToDp(11),
        color: '#808080',
        marginTop: pxToDp(25),
        marginLeft:pxToDp(10)
    }
})
export default Index;
