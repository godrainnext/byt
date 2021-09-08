import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
  renderInner = () => (
    <Fragment>
      <View>
        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}></Text>
      </View>
      <Text
        style={{
          marginTop: pxToDp(8),
          color: '#333333',
          fontSize: pxToDp(16),
          marginBottom: pxToDp(10)
        }}
      >

      </Text>
      <View>
        <Image
          style={{
            height: pxToDp(180),
            borderRadius: pxToDp(8),
            width: pxToDp(342)
          }}
          source={{
            uri: ''
          }}
        />
      </View>
      <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:
        
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
      <Text style={styles.Text}>
        <Text style={styles.texthead}></Text>:

      </Text>
    </Fragment>
  );
  render() {
    return (
      <ScreenBase
        top=""
        renderInner={this.renderInner}
        arr={[
          {
            id: 1,
            avatar:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
            createTime: '两天前',
            nickName: '我吃西红柿啊',
            content: '每个人都有不一样的童年'
          },
          {
            id: 2,
            avatar:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
            createTime: '两天前',
            nickName: '我吃西红柿啊',
            content: '每个人都有不一样的童年'
          }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: pxToDp(16),
    color: '#333333',
    marginTop: pxToDp(4),
    lineHeight: pxToDp(25)
  },
  texthead: {
    fontWeight: 'bold',
    color: '#333333',
    fontSize: pxToDp(16)
  }
});
export default Index;
