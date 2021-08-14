import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';

class Index extends PureComponent {
  state = {
    book: [
      { bookname: '111', name: '12111', date: '2019-05-02' },
      { bookname: '11', name: '12111', date: '2019-05-02' },
      { bookname: '1111', name: '12111', date: '2019-05-02' },
      ,
      { bookname: '1', name: '12111', date: '2019-05-02' },
      { bookname: '111111', name: '12111', date: '2019-05-02' },
      { bookname: '11111', name: '12111', date: '2019-05-02' }
    ]
  };

  static contextType = NavigationContext;
  render() {
    return (
      <ScrollView style={{}}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.props.soucang.map((item, scid) => (
            <View
              key={scid}
              style={{
                width: pxToDp(110),
                marginTop: pxToDp(10),
                marginLeft: pxToDp(10),
                backgroundColor: '#ccc',
                borderRadius: pxToDp(10),
                overflow: 'hidden'
              }}
            >
              <TouchableOpacity>
                <Image
                  source={{ uri: item.scimg }}
                  style={{ width: '100%', height: pxToDp(150) }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: 'center',
                  marginLeft: pxToDp(10),
                  fontSize: 15
                }}
              >
                {item.bookname}
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  marginLeft: pxToDp(10),
                  fontSize: 10
                }}
              >
                {item.date}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default Index;
