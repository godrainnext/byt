import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import GenerView from '@components/common/generview';
import { getListByStatus } from '@service/home'
import { NavigationContext } from '@react-navigation/native';

export default class Legend extends PureComponent {
  state = { arr: [] }
  componentDidMount() {
    getListByStatus(2).then(res => {
      this.setState({ arr: res })
    })
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        {this.state.arr.map((item, index) =>
        (<TouchableOpacity onPress={() => this.context.navigate('School', item.id)} key={item.id}>
          <GenerView
            imguri={item.picurl}
            name={item.title}
            special={item.ezcontent}
          />
        </TouchableOpacity>)

        )}
      </View>
    )
  }
}
