import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollTabView, ScrollView, FlatList } from 'react-native-scroll-head-tab-view';
import Dongtai from '../seetings/component/dontai';
import Collect from '../seetings/component/collect';
import Soucang from '../seetings/component/soucang';
import CustormerBar from '../seetings/component/CustormerBar'

function TabView1(props) {
    const data = new Array(1).fill({});
  
        return (
          <ScrollView {...props}>
                <Dongtai {...props}/></ScrollView>
        );
    };


function TabView2(props) {

        return (
          <ScrollView {...props}>
          <Collect {...props}/></ScrollView>
        );
       
  

}

function TabView3(props) {
    const data = new Array(2).fill({});
    return (
      <ScrollView {...props}>
      <Soucang {...props}/></ScrollView>
    );
}

export default function Example() {
  // const userinfo={
  //   id: 1,
  //   bcimg:
  //     'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
  //   userimg:
  //     'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
  //   username: 'ppp',
  //   userqm: 'aaaaaaaaaaaaaaaaaaaaa',
  //   userfans: 10,
  //   usergz: 10,
  //   userhz: 1,
  //   collect: [
  //     { collectid: 1, collectimg: '', title: '乌拉乌拉乌拉', playnum: 111 }
  //   ],
  //   dongtai: [
  //     {
  //       dtid: 1,
  //       dtimg:
  //         'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
  //       name: 'wulawulaaaa',
  //       date: '03月20日',
  //       dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉',
  //       dz: 123,
  //       dtimg2: [
  //         'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
  //         'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
  //         'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
  //         'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
  //         'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
  //         'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
  //       ]
  //     }
  //   ],
  
  //   soucang: [
  //     {
  //       scid: 1,
  //       scimg:
  //         'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
  //       bookname: '111111',
  //       name: '12111',
  //       date: '2019-05-02'
  //     }
  //   ]
  // }
  const [userInfo,setUserInfo]=useState({
    id: 1,
    bcimg:
      'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
    userimg:
      'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
    username: 'ppp',
    userqm: 'aaaaaaaaaaaaaaaaaaaaa',
    userfans: 10,
    usergz: 10,
    userhz: 1,
    collect: [
      { collectid: 1, collectimg: '', title: '乌拉乌拉乌拉', playnum: 111 }
    ],
    dongtai: [
      {
        dtid: 1,
        dtimg:
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
        name: 'wulawulaaaa',
        date: '03月20日',
        dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉',
        dz: 123,
        dtimg2: [
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
        ]
      }
    ],
  
    soucang: [
      {
        scid: 1,
        scimg:
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
        bookname: '111111',
        name: '12111',
        date: '2019-05-02'
      }
    ]
  })
    const [headerHeight, setHeaderHeight] = useState(200);
    const headerOnLayout = useCallback((event) => {
        const { height } = event.nativeEvent.layout;
        setHeaderHeight(height);
    }, []);

    const _renderScrollHeader = useCallback(() => {
        const data = new Array(1).fill({});
        return (
            <View onLayout={headerOnLayout}>
              <CustormerBar/>
            </View>
        );
    }, []);

    return (
        <View style={styles.container}>
            <ScrollTabView headerHeight={headerHeight} renderScrollHeader={_renderScrollHeader}>
                <TabView1 tabLabel="1"  userinfo={userInfo}/>
                <TabView2 tabLabel="2"  userinfo={userInfo}/>
                <TabView3 tabLabel="3" userinfo={userInfo}/>
            </ScrollTabView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});