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
                <View style={{marginTop:pxToDp(10)}}>
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
    flexDirection: 'row',
    backgroundColor:"white",
    borderRadius:pxToDp(8),
    marginLeft:pxToDp(16),
    marginRight:pxToDp(16),
    marginTop:pxToDp(16),
    elevation: 4,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black',  //  阴影颜色
    shadowRadius: pxToDp(8),  //  圆角
  },
  image: {
    height: pxToDp(90),
    width: pxToDp(130),
    borderRadius: pxToDp(8),
    margin:pxToDp(8)
  },
  botbox: {
    justifyContent: 'flex-start',
    marginTop:pxToDp(10),
    marginLeft: pxToDp(8),
  },
  text1: {
    fontSize: pxToDp(16),
    color:'#333333',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: pxToDp(12),
    color:"#666666",
    marginTop:pxToDp(2)
  },
  smallbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: pxToDp(170),
    alignItems: 'center',
  }
});
