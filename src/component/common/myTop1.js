import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BVLinearGradient,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp, screenWidth } from '../../utils/styleKits';
import LinearGradient from 'react-native-linear-gradient';
export default class HeaderHaveBack extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true
    };
  }

  static contextType = NavigationContext;
  render() {
    const { showTitle } = this.state;
    return (
      <LinearGradient
        style={styles.box}
        colors={['#62bfad', '#62bfad']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={styles.textview}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: pxToDp(345),
              height: pxToDp(44),
              borderRadius: pxToDp(8),
              backgroundColor: 'white',
              zIndex: 1
            }}
            onPress={() => this.context.navigate('Search')}
          >
            <View
              style={{
                marginRight: pxToDp(16),
                paddingLeft: pxToDp(16)
              }}
            >
              <Ionicons name="search" size={23} color="#999999" />
            </View>
            <TextInput
              placeholder={'输入搜索值'}
              entryAnimation={'from-right-side'}
              headerHeight={pxToDp(44)}
              style={{ fontSize: pxToDp(16) }}
              //   headerBgColor={'red'}

              ref={(showTitle) => {
                this.showTitle = showTitle;
              }}
              onGetAutocompletions={async (text) => {
                if (text) {
                  const response = await fetch(
                    `http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`,
                    {
                      method: `get`
                    }
                  );
                  const data = await response.json();
                  return data[1];
                } else {
                  return [];
                }
              }}
            />
            <TouchableOpacity onPress={() => this.context.goBack()}>
              <Text
                style={{
                  fontSize: pxToDp(16),
                  color: '#b6b6b6',
                  paddingLeft: pxToDp(150)
                }}
              >
                取消
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    width: screenWidth,
    flexDirection: 'row',
    // backgroundColor: '#e0f3fe',
    height: pxToDp(64)
  },
  icon1: {
    width: pxToDp(45),
    left: 16,
    bottom: 8
  },
  icon2: {
    width: pxToDp(45),
    bottom: 8
  },
  textview: {
    flex: 1,
    alignItems: 'center'
  },
  textstyle: {
    fontSize: pxToDp(18),
    color: '#468cd3'
  }
});
