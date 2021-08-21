import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
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
          <TouchableOpacity
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
                      {item.watchNum}观看 · {item.createAt}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    marginTop: pxToDp(10),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10)
  },
  title: {
    fontSize: pxToDp(18),
    color: '#468CD3',
    fontWeight: 'bold'
  },
  box: {
    height: pxToDp(120),
    width: pxToDp(375),
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: pxToDp(0.5),
    marginTop: pxToDp(10)
  },
  image: {
    height: pxToDp(110),
    width: pxToDp(170),
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(10)
  },
  botbox: {
    justifyContent: 'space-between',
    width: pxToDp(180),
    height: pxToDp(110),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10)
  },
  text1: {
    fontSize: pxToDp(15),
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  text2: {
    fontSize: pxToDp(13)
  },
  smallbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: pxToDp(170),
    alignItems: 'center'
  }
});
