import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/styleKits';
import { getVideList } from '@service/home';
import changeImgSize from '../../../utils/changeImgSize';
class Index extends PureComponent {
  state = { arr: [] };
  componentDidMount() {
    getVideList(this.props.route.params, 0, 100).then((res) => {
      this.setState({ arr: res });
    });
  }
  static contextType = NavigationContext;
  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: '#E2F4FE',
          flex: 1,
          marginBottom: pxToDp(10)
        }}
        showsVerticalScrollIndicator = {false}
      >
        <ImageBackground
          source={require('../../../res/8.jpg')}
          style={{ height: pxToDp(150) }}
        >
          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.context.goBack()}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.text1}>名角唱段</Text>
          </View>
        </ImageBackground>
        <View style={styles.botbox}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {this.state.arr.map((item) => (
              <TouchableOpacity
                onPress={() => this.context.navigate('Video', item.id)}
                style={styles.imagebox}
                key={item.id}
              >
                <Image
                  source={{ uri: changeImgSize(item.avatar) }}
                  style={styles.image}
                />
                <Text style={styles.text2}>{item.title}</Text>
                <Text style={styles.text3}>{item.watchNum}观看</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    color: 'white',
    fontSize: pxToDp(24)
  },
  box: {
    height: pxToDp(120),
    justifyContent: 'space-between',
    marginLeft: pxToDp(10),
    marginTop: pxToDp(20)
  },
  botbox: {
    backgroundColor: '#ecf6fc',
    marginTop: pxToDp(-10),
    borderTopLeftRadius: pxToDp(10),
    borderTopRightRadius: pxToDp(10)
  },
  image: {
    height: pxToDp(130),
    width: pxToDp(170),
    borderTopRightRadius: pxToDp(10),
    borderTopLeftRadius: pxToDp(10)
  },
  imagebox: {
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(12),
    marginTop: pxToDp(15),
    height: pxToDp(190),
    width: pxToDp(170),
    backgroundColor: 'white'
  },
  text2: {
    color: 'black',
    fontSize: pxToDp(14),
    marginTop: pxToDp(5),
    marginLeft: pxToDp(5)
  },
  text3: {
    color: 'grey',
    fontSize: pxToDp(14),
    marginTop: pxToDp(5),
    marginLeft: pxToDp(5)
  }
});
export default Index;
