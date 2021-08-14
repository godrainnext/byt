import React, { PureComponent } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import { getMomentById } from '@service/home';
class index extends PureComponent {
  state = {
    title: '',
    content: ``,
    images: [],
    cover: ''
  };
  componentDidMount() {
    getMomentById(this.props.route.params).then((res) => {
      this.setState({ ...res });
    });
  }
  render() {
    const arr1 = this.state.content.split('/img');
    const { images, cover } = this.state;
    console.log(this.props.route);
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <View>
          <Top icon1="arrow-back" title="精选唱段" />
        </View>
        <View>
          <View>
            <Image
              style={{ width: '100%', height: pxToDp(200) }}
              source={{
                uri: cover
                  ? cover
                  : 'https://img0.baidu.com/it/u=952587805,2463391979&fm=26&fmt=auto&gp=0.jpg'
              }}
            ></Image>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
              {/* 谁翻乐府旧谣?title */}
              {this.state.title}
            </Text>
          </View>

          {arr1.map((item, index) => (
            <View>
              {index === 0 ? (
                <View></View>
              ) : (
                <View>
                  <Image
                    style={{ width: '100%', height: pxToDp(200) }}
                    source={{
                      uri: images[index]
                        ? images[index]
                        : 'https://img0.baidu.com/it/u=952587805,2463391979&fm=26&fmt=auto&gp=0.jpg'
                    }}
                  ></Image>
                </View>
              )}
              {item.split('/d').map((item, index) => (
                <View>
                  <Text style={{ fontSize: pxToDp(15), margin: pxToDp(4) }}>
                    &emsp;&emsp;{item}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <View
          style={{
            width: '96%',
            marginLeft: pxToDp(8),
            marginBottom: pxToDp(12)
          }}
        >
          <View style={{ marginTop: pxToDp(20), marginBottom: pxToDp(20) }}>
            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
              评论 |
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: pxToDp(16),
              marginBottom: pxToDp(16)
            }}
          >
            <Image
              style={{
                width: pxToDp(40),
                height: pxToDp(40),
                borderRadius: pxToDp(60)
              }}
              source={{
                uri: 'https://img0.baidu.com/it/u=1752414660,3344020033&fm=26&fmt=auto&gp=0.jpg'
              }}
            ></Image>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.textInput}
                // defaultValue='浙里看百年'
                placeholder="来聊聊你的看法吧"
                placeholderTextColor="#abbed7"
              />
            </View>
          </View>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
              }}
            >
              <View
                style={{
                  width: '14%',
                  borderRadius: pxToDp(60),
                  backgroundColor: '#bbb',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  style={{
                    width: pxToDp(40),
                    height: pxToDp(40),
                    borderRadius: pxToDp(60)
                  }}
                  source={{
                    uri: 'https://img0.baidu.com/it/u=1752414660,3344020033&fm=26&fmt=auto&gp=0.jpg'
                  }}
                ></Image>
              </View>
              <View
                style={{
                  width: '86%',
                  height: pxToDp(40),
                  justifyContent: 'space-evenly',
                  paddingLeft: pxToDp(8)
                }}
              >
                <Text style={{ fontSize: pxToDp(14) }}>可畏的男人</Text>
                <Text>7-11</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                paddingLeft: pxToDp(8)
              }}
            >
              <View
                style={{
                  width: '18%',
                  borderRadius: pxToDp(50),
                  backgroundColor: '#bbb',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              ></View>
              <View style={{ width: '82%', justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: pxToDp(15) }}>
                  山东话版的林妹妹。有几分林黛玉倒把垂杨柳的风味了
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: pxToDp(16),
                    marginBottom: pxToDp(16)
                  }}
                >
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row'
                    }}
                  >
                    <Icon1 name="thumb-up" size={26} color={'gray'} />
                    <Text>2.1w</Text>
                  </View>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Icon1 name="thumb-down" size={26} color={'gray'} />
                  </View>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Icon1 name="messenger-outline" size={26} color={'gray'} />
                  </View>
                </View>
                <View style={{ backgroundColor: '#ccc', padding: pxToDp(10) }}>
                  <Text>
                    海十七侠：河南话的李师师，陕西话的貂蝉，山西话的杨玉环
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 245,
    height: 48,
    backgroundColor: 'transparent',
    borderColor: '#aaa',
    borderRadius: 20,
    marginLeft: 20
    // marginTop: 20
  },
  textInput: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    width: 200,
    height: 48,
    fontSize: 18,
    color: '#3f4b48'
  }
});

export default index;
