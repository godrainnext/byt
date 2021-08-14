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
import Top from '@components/common/top';
import GenerView from '@components/common/generview';
import { NavigationContext } from '@react-navigation/native';
import { getListByStatus } from '@service/home';

class Index extends PureComponent {
  static contextType = NavigationContext;
  state = {
    GenerList: [
      {
        id: 1,
        title: '',
        ezcontent: '',
        picurl: ''
      }
    ]
  };
  componentDidMount() {
    getListByStatus(this.props.route.params, 0, 10).then((res) => {
      console.log(res);
      this.setState({ GenerList: res });
    });
  }
  render() {
    console.log(this.props.route);
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="流派传奇" />
        <ScrollView style={{ marginBottom: 80 }}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: pxToDp(18),
                margin: pxToDp(10)
              }}
            >
              越剧流派
            </Text>
            {this.state.GenerList.map((item, id) => (
              <TouchableOpacity onPress={() => this.context.navigate('School')}>
                <GenerView
                  key={id}
                  name={item.title}
                  special={item.ezcontent}
                  imguri={item.picurl}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Index;
