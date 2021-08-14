import React, { PureComponent } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { pxToDp } from '../../../../../utils/styleKits';
import ActressView from '../../../../../component/common/actressview';
import Top from '../../../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';
class Index extends PureComponent {
  static contextType = NavigationContext;
  state = {
    actor: [
      { id: 1, name: '方亚芬', imguri: '' },
      { id: 2, name: '方亚芬', imguri: '' },
      { id: 3, name: '方亚芬', imguri: '' },
      { id: 4, name: '方亚芬', imguri: '' }
    ]
  };
  render() {
    console.log(this.props.route);
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="名角风采" />
        <ScrollView>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                width: pxToDp(380)
              }}
            >
              {this.state.actor.map((item, id) => (
                <TouchableOpacity
                  onPress={() => this.context.navigate('Actress')}
                >
                  <ActressView
                    key={id}
                    picture={{ uri: item.imguri }}
                    name={item.name}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Index;
