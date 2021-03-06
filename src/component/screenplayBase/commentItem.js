import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import SvgUri from 'react-native-svg-uri';
import { dianzan, inDianZan } from '../common/iconSvg';
export default class commentItem extends PureComponent {
  state = { isClick: false, count: 0 };
  componentDidMount() {
    if (this.props.item.count === 0) {
      return;
    } else {
      const count = parseInt(Math.random() * 100);
      this.setState({ count });
    }
  }
  dianzan = () => {
    if (this.state.isClick) {
      this.setState({
        isClick: !this.state.isClick,
        count: this.state.count - 1
      });
    } else {
      this.setState({
        isClick: !this.state.isClick,
        count: this.state.count + 1
      });
    }
  };
  render() {
    const { item } = this.props;
    return (
      <View style={{ marginBottom: pxToDp(8) }}>
        <View
          style={{
            flexDirection: 'row',
            width: '95%',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Image
              style={{
                width: pxToDp(40),
                height: pxToDp(40),
                margin: pxToDp(4),
                borderRadius: pxToDp(20)
              }}
              source={{
                uri: item.avatar
              }}
            />
            <View>
              <Text style={{ fontSize: pxToDp(14), marginLeft: pxToDp(4) }}>
                {item.nickName}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(13),
                  marginLeft: pxToDp(4),
                  color: 'grey'
                }}
              >
                {item.createTime}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.dianzan}>
            {this.state.isClick ? (
              <View>
                <SvgUri
                  svgXmlData={inDianZan}
                  width="20"
                  height="20"
                  style={{ color: 'pink' }}
                />
                <Text style={{ alignSelf: 'center' }}>{this.state.count}</Text>
              </View>
            ) : (
              <View>
                <SvgUri
                  svgXmlData={dianzan}
                  width="20"
                  height="20"
                  style={{ color: 'pink' }}
                />
                <Text style={{ alignSelf: 'center' }}>{this.state.count}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Text style={{ marginLeft: pxToDp(50), fontSize: pxToDp(14) }}>
          {item.content}
        </Text>
      </View>
    );
  }
}
