import React, { PureComponent } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import { getMomentById } from '@service/home';
import { connect } from 'react-redux';
import { dianzan } from '../../../../../component/common/iconSvg';
import SvgUri from 'react-native-svg-uri';
class index extends PureComponent {
  state = {
    title: '',
    content: ``,
    images: [],
    cover: '',
    commments: []
  };
  componentDidMount() {
    console.log(12312);
    getMomentById(this.props.route.params).then((res) => {
      console.log(res);
      this.setState({ ...res });
    });
  }
  render() {
    const arr1 = this.state.content.split('/img');
    const { images } = this.state;
    console.log(arr1);
    return (
      <View style={{ backgroundColor: '#ecf6fc', flex: 1 }}>
        <ScrollView stickyHeaderIndices={[0]}>
          <Top icon1="arrow-back" title="越文" />
          <View style={{ marginLeft: pxToDp(10), marginRight: pxToDp(10) }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                {/* 谁翻乐府旧谣?title */}
                {this.state.title}
              </Text>
            </View>

            {arr1.map((item, index) => (
              <View>
                {item.split('/d').map((item, index) => (
                  <View>
                    <Text style={{ fontSize: pxToDp(17) }}>
                      &emsp;&emsp;{item}
                    </Text>
                  </View>
                ))}
                {images[index] ? (
                  <View>
                    <Image
                      style={{
                        width: '100%',
                        height: pxToDp(190),
                        borderRadius: pxToDp(8),
                        marginBottom: pxToDp(15),
                        marginTop: pxToDp(15)
                      }}
                      source={{
                        uri: images[index]
                      }}
                    ></Image>
                  </View>
                ) : (
                  <View></View>
                )}
              </View>
            ))}
            {/* 评论区 */}
            <View>
              <Text
                style={{
                  fontSize: pxToDp(18),
                  margin: pxToDp(10),
                  color: '#468CD3',
                  fontWeight: 'bold'
                }}
              >
                评论区
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: pxToDp(1),
                width: '100%',
                marginBottom: pxToDp(15)
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: '95%',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{
                      width: pxToDp(40),
                      height: pxToDp(40),
                      margin: pxToDp(5),
                      borderRadius: pxToDp(24)
                    }}
                    source={{
                      uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446'
                    }}
                  />
                  <View>
                    <Text style={{ fontSize: pxToDp(14) }}>越剧小生</Text>
                    <Text style={{ fontSize: pxToDp(13), color: 'grey' }}>
                      12分钟前
                    </Text>
                  </View>
                </View>
                <SvgUri svgXmlData={dianzan} width="15" height="15" />
              </View>
              <Text
                style={{
                  marginLeft: pxToDp(50),
                  fontSize: pxToDp(14),
                  marginBottom: pxToDp(15)
                }}
              >
                真的很不错！
              </Text>
            </View>
            <View style={{ marginBottom: pxToDp(60) }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '95%',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{
                      width: pxToDp(40),
                      height: pxToDp(40),
                      margin: pxToDp(5),
                      borderRadius: pxToDp(24)
                    }}
                    source={{
                      uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Fface%2F96370762ff2dfed35aecd865d7c7e1522d793445.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631951869&t=fde2d486df923427dd7697da6d84b44a'
                    }}
                  />
                  <View>
                    <Text style={{ fontSize: pxToDp(14) }}>jauua</Text>
                    <Text style={{ fontSize: pxToDp(13), color: 'grey' }}>
                      2小时前
                    </Text>
                  </View>
                </View>
                <SvgUri svgXmlData={dianzan} width="15" height="15" />
              </View>
              <Text
                style={{
                  marginLeft: pxToDp(50),
                  fontSize: pxToDp(14),
                  marginBottom: pxToDp(15)
                }}
              >
                抬头能和你分享同一个月亮，就很美好
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            height: pxToDp(48),
            width: '110%',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: pxToDp(0)
          }}
        >
          <TextInput
            placeholder="发一条友善的评论"
            style={{
              height: '80%',
              backgroundColor: '#ddd',
              width: '75%',
              marginLeft: pxToDp(12),
              borderRadius: pxToDp(24),
              paddingLeft: pxToDp(10)
            }}
          />
          <TouchableOpacity>
            <Text style={{ marginLeft: pxToDp(12) }}>发布</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    borderRadius: 24,
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

export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(index);
