import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { getVideList } from '@service/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import changeImgSize from '@utils/changeImgSize';

export default class Opera extends PureComponent {
  state = { arr: [] };
  componentDidMount() {
    getVideList(this.props.status).then((res) => {
      this.setState({ arr: res });
    });
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        {this.state.arr.map((item) => (
          <TouchableNativeFeedback
          useForeground={true}
            onPress={() => this.context.navigate('Video', item.id)}
          >
            <View style={styles.box}>
              <Image
                style={styles.image}
                source={{ uri: changeImgSize(item.avatar) }}
              />
              <View style={styles.botbox}>
                <Text style={styles.text1}>{item.title}</Text>
                <View>
                  <Text style={styles.text2}>杭州越剧团</Text>
                  <View style={styles.smallbox}>
                    <Text style={styles.text2}>
                      {item.watchNum}观看{item.createAt}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: pxToDp(18),
    color: '#468CD3',
    fontWeight: 'bold'
  },
  box: {
    height: pxToDp(130),
    paddingRight:pxToDp(8),
    paddingLeft:pxToDp(8),
    alignItems:'center',
    width: pxToDp(344),
    flexDirection: 'row',
    marginTop: pxToDp(16),
    backgroundColor:"#fff",
    borderRadius:pxToDp(8),
  },
  image: {
    height: pxToDp(110),
    width: pxToDp(170),
    borderRadius: pxToDp(8),
  },
  botbox: {
    justifyContent: 'center',
    width: pxToDp(180),
    height: pxToDp(110),
    marginLeft: pxToDp(8),
  },
  text1: {
    fontSize: pxToDp(15),
    fontWeight: 'bold',
  },
  text2: {
    fontSize: pxToDp(13),
    paddingRight:pxToDp(8),
    width:pxToDp(180),
  },
  smallbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: pxToDp(170),
    alignItems: 'center',
  }
});
