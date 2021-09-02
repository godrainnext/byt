import { getMomentById } from '@service/home';
import { connect } from 'react-redux';
import React, { Fragment, PureComponent, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';
const RenderInner = (props) => {
  const [state, setState] = useState({});
  useEffect(() => {
    getMomentById(props.route.params).then((res) => {
      setState({ ...res });
    });
  });
  const arr1 = state.content?.split('/img');
  const { images } = state;
  return (
    <Fragment>
      <View>
        <View
          style={{
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: pxToDp(18),
              fontWeight: 'bold',
              color: '#000000'
            }}
          >
            {state.title}
          </Text>
        </View>

        {arr1?.map((item, index) => (
          <View style={{ marginTop: pxToDp(8) }}>
            {item.split('/d').map((item) => (
              <View>
                <Text
                  style={{
                    fontSize: pxToDp(16),
                    marginTop: pxToDp(4),
                    color: '#333333'
                  }}
                >
                  &emsp;&emsp;{item}
                </Text>
              </View>
            ))}
            {images[index] ? (
              <View>
                <Image
                  style={{
                    height: pxToDp(180),
                    borderRadius: pxToDp(8),
                    marginTop: pxToDp(8),
                    marginBottom: pxToDp(-4)
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
      </View>
    </Fragment>
  );
};
class Index extends PureComponent {
  render() {
    return (
      <ScreenBase
        top="越文"
        renderInner={() => <RenderInner route={this.props.route} />}
        arr={[
          {
            id: 1,
            avatar:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
            createTime: '12分钟前',
            nickName: '越剧小生',
            content: '抬头能和你分享同一个月亮就很美好'
          }
        ]}
      />
    );
  }
}

export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(Index);
