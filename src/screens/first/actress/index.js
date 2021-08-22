import React, { useState, useCallback, useEffect, memo } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollTabView, ScrollView } from 'react-native-scroll-head-tab-view';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';
import {
  getRoleVideoById,
  getRoleMomentById,
  getRolePicById
} from '../../../service/home/actress';
import { useNavigation, useRoute } from '@react-navigation/native';

const TabView1 = memo(function (props) {
  const [videoList, setvideoList] = useState([1]);
  const navigation = useNavigation();
  useEffect(() => {
    getRoleVideoById(props.id).then((res) => {
      setvideoList(res.videoList);
    });
  }, []);

  return (
    <ScrollView {...props}>
      <View>
        {videoList ? (
          videoList.map((item) => (
            <View>
              <TouchableOpacity
                style={{ margin: pxToDp(8), alignItems: 'center' }}
                onPress={() => navigation.navigate('Video', item.id)}
              >
                <Image style={styles.image1} source={{ uri: item.avatar }} />
              </TouchableOpacity>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          ))
        ) : (
          <View>
            <Text>暂无视频</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
});
const TabView2 = memo(function (props) {
  const [picList, setpicList] = useState([]);
  useEffect(() => {
    getRolePicById(props.id).then((res) => {
      setpicList(res.picList);
    });
  }, []);
  return (
    <ScrollView {...props}>
      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {picList.map((item, index) => (
            <Image
              key={index}
              style={styles.image2}
              source={{
                uri: item
                  ? item
                  : 'http://120.79.86.32:3000/role/avatar/a97e90c21e46716abd524141ac3ccb40'
              }}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
});
const TabView3 = memo(function (props) {
  const navigation = useNavigation();

  const [momentList, setmomentList] = useState([1]);
  useEffect(() => {
    getRoleMomentById(props.id).then((res) => {
      setmomentList(res.momentList);
    });
  }, []);
  return (
    <ScrollView {...props}>
      {momentList ? (
        momentList.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Pagefive', item.id)}
            style={styles.box}
            key={item.id}
          >
            <Image style={styles.image3} source={{ uri: item.avatar }} />
            <View
              style={{
                marginLeft: pxToDp(10),
                marginTop: pxToDp(8),
                width: pxToDp(280)
              }}
            >
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <View />
      )}
    </ScrollView>
  );
});

export default memo(function Example(props) {
  const [headerHeight, setHeaderHeight] = useState(200);
  const headerOnLayout = useCallback((event) => {
    const { height } = event.nativeEvent.layout;
    setHeaderHeight(height);
  }, []);

  const _renderScrollHeader = useCallback((item) => {
    return (
      <View onLayout={headerOnLayout}>
        <Top icon1="arrow-back" />
        <View style={{ flexDirection: 'row', marginLeft: pxToDp(10) }}>
          <Image style={styles.image5} source={{ uri: item.avatar }} />
          <View
            style={{
              width: pxToDp(180),
              justifyContent: 'center',
              alignSelf: 'flex-start',
              marginLeft: pxToDp(20),
              top: pxToDp(20)
            }}
          >
            <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: pxToDp(15) }}>{item.content}</Text>
          </View>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollTabView
        headerHeight={headerHeight}
        renderScrollHeader={() => _renderScrollHeader(props.route.params)}
      >
        <TabView1 tabLabel="视频" id={props.route.params.id} />
        <TabView2 tabLabel="图片" id={props.route.params.id} />
        <TabView3 tabLabel="新闻" id={props.route.params.id} />
      </ScrollTabView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2f4fe'
  },
  image1: {
    height: pxToDp(300),
    width: pxToDp(250),
    borderRadius: pxToDp(8)
  },
  image2: {
    height: pxToDp(300),
    width: pxToDp(250),
    margin: pxToDp(5),
    borderRadius: pxToDp(8)
  },
  box: {
    margin: pxToDp(10),
    flexDirection: 'row',
    borderBottomWidth: pxToDp(1),
    borderBottomColor: 'grey',
    height: pxToDp(90)
  },
  image3: {
    height: pxToDp(80),
    width: pxToDp(80),
    borderRadius: pxToDp(40)
  },
  text: {
    fontSize: pxToDp(18),
    margin: pxToDp(8)
  },
  box2: {
    margin: pxToDp(10),
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: pxToDp(1),
    height: pxToDp(110)
  },
  image4: {
    width: pxToDp(135),
    height: pxToDp(90),
    borderRadius: pxToDp(8)
  },
  image5: {
    height: pxToDp(200),
    width: pxToDp(150),
    marginTop: pxToDp(20),
    borderRadius: pxToDp(8)
  }
});
