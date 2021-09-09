import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/styleKits';
import { getVideList } from '@service/home';
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
          backgroundColor: '#D5E8E6',
          flex: 1,
          marginBottom: pxToDp(10)
        }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={require('../../../res/8.jpg')}
          style={{ height: pxToDp(150) }}
        >
          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.context.goBack()}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.text1}>经典推荐</Text>
          </View>
        </ImageBackground>
        <View style={styles.botbox}>
          {this.state.arr.map((item) => (
            <View style={styles.imagebox}>
              <ImageBackground
                source={{ uri: item.avatar }}
                style={styles.image}
              >
                <Text style={styles.text2}>{item.title}</Text>
              </ImageBackground>
            </View>
          ))}
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
    height: pxToDp(160),
    width: pxToDp(355),
    borderRadius: pxToDp(8)
  },
  imagebox: {
    borderRadius: pxToDp(8),
    marginLeft: pxToDp(15),
    marginRight: pxToDp(15),
    marginTop: pxToDp(15),
    overflow: 'hidden'
  },
  text2: {
    color: 'white',
    fontSize: pxToDp(18),
    marginTop: pxToDp(120),
    marginLeft: pxToDp(10)
  }
});
export default Index;
