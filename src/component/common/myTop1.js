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
import SearchHeader from 'react-native-search-header';
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: pxToDp(345),
              height: pxToDp(44),
              backgroundColor: 'white',
              zIndex: 1
            }}
          >
            <TextInput
              placeholder={'搜索'}
              onFocus={() => this.searchHeader.show()}
              style={{
                fontSize: pxToDp(16),
                width: pxToDp(305),
                color: '#333333',
                marginLeft: pxToDp(32),
                marginBottom: pxToDp(-2)
              }}
            />
            <TouchableOpacity
              style={{ marginRight: pxToDp(32) }}
              onPress={() => this.context.goBack()}
            >
              <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>
                取消
              </Text>
            </TouchableOpacity>
            <SearchHeader
              placeholder={'输入搜索值'}
              entryAnimation={'from-right-side'}
              headerHeight={pxToDp(44)}
              //   headerBgColor={'red'}

              ref={(searchHeader) => {
                this.searchHeader = searchHeader;
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
          </View>
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
