import React, { memo, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { useNavigation } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import { sandian } from '../../../../component/common/iconSvg';
import {
  dianzan,
  zhuanfa,
  pinglun
} from '../../../../component/common/iconSvg';
import changeImgSize from '../../../../utils/changeImgSize';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
const WINDOW_WIDTH = Dimensions.get('window').width;

export default memo(function ActressItem(props) {
  const item = props.item;
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const renderCarousel = (img) => (
    <Carousel style={{ height: WINDOW_WIDTH }}>
      <Image
        key={img}
        style={{ flex: 1 }}
        resizeMode="contain"
        source={{ uri: img }}
      />
    </Carousel>
  );
  return (
    <View
      key={item.id}
      style={{
        elevation: 2,
        shadowColor: 'black', //  阴影颜色
        shadowOffset: { width: 0, height: 0 }, // 阴影偏移
        shadowOpacity: 1, // 阴影不透明度
        shadowRadius: 10, //  圆角
        borderWidth: 0,
        marginBottom: pxToDp(20),
        backgroundColor: 'white',
        borderRadius: pxToDp(8)
      }}
    >
      <TouchableOpacity
        style={{
          right: pxToDp(16),
          top: pxToDp(24),
          position: 'absolute'
        }}
        onPress={() => {
          props.setModalVisible(true);
        }}
      >
        <SvgUri svgXmlData={sandian} width="20" height="20" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: pxToDp(8)
        }}
      >
        <Image
          source={{ uri: changeImgSize(item.user.avatar) }}
          style={{
            width: pxToDp(60),
            height: pxToDp(60),
            borderRadius: pxToDp(30)
          }}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Inluntan', {
              mid: item.id,
              uid: item.user.id
            })
          }
        >
          <View>
            <Text
              style={{
                fontSize: pxToDp(18),
                color: '#000000',
                fontWeight: 'bold',
                marginLeft: pxToDp(8)
              }}
            >
              {item.user.nickName}
            </Text>
            <Text
              style={{
                fontSize: pxToDp(16),
                color: '#333333',
                marginLeft: pxToDp(8)
              }}
            >
              {item.createTime.split('T')[0]}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: pxToDp(16),
          marginRight: pxToDp(16),
          marginBottom: pxToDp(16)
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log(item.id);
            navigation.navigate('Inluntan', {
              mid: item.id,
              uid: item.user.id
            });
          }}
        >
          <Text
            style={{
              fontSize: pxToDp(18),
              color: '#333333'
            }}
          >
            {item.content}
          </Text>
        </TouchableOpacity>
        <ScrollView
          style={{ height: pxToDp(120), marginTop: pxToDp(10) }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {item.images?.map((item, index) => (
            <Lightbox
              springConfig={{ tension: 15, friction: 7 }}
              swipeToDismiss={true}
              renderContent={() => renderCarousel(item)}
            >
              <Image
                key={item}
                style={{
                  width: pxToDp(200),
                  height: '100%',
                  borderRadius: pxToDp(10),
                  marginRight: pxToDp(10)
                }}
                source={{ uri: item }}
              />
            </Lightbox>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: pxToDp(10),
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => setCount(count + 1)}
        >
          <SvgUri svgXmlData={dianzan} width="20" height="20" />
          <Text
            style={{
              position: 'absolute',
              bottom: pxToDp(5),
              left: pxToDp(30),
              fontSize: pxToDp(12),
              color: '#666666'
            }}
          >
            {count}
            {item.dz}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Inluntan', {
              mid: item.id,
              uid: item.user.id
            })
          }
        >
          <SvgUri svgXmlData={pinglun} width="20" height="20" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgUri svgXmlData={zhuanfa} width="25" height="25" />
        </TouchableOpacity>
      </View>
    </View>
  );
});
