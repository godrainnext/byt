import React, { PureComponent } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { Image,View } from 'react-native'
import Svg from 'react-native-svg-uri';
import First from './screens/first/home';
import Talk from './screens/talk/home';
import Shop from './screens/shop/home';
import My from './screens/my/home';
import { pxToDp } from './utils/styleKits';

class Index extends PureComponent {
  state = {
    selectedTab: 'first',
    pages: [
      {
        selected: 'first',
        title: '越台',
        renderIcon: () => <Image style={{ width: pxToDp(80), height: pxToDp(28) }} source={require("./sb4.png")}></Image>,
        renderSelectedIcon: () => (
          <Image style={{ width: pxToDp(100), height: pxToDp(28) }} source={require("./sb4.png")}></Image>
        ),
        onPress: () => this.setState({ selectedTab: 'first' }),
        component: <First />
      },
      {
        selected: 'talk',
        title: '戏缘',
        renderIcon: () => <Image style={{ width: pxToDp(80), height: pxToDp(28) }} source={require("./sb1.png")}></Image>,
        renderSelectedIcon: () => (
          <Image style={{ width: pxToDp(100), height: pxToDp(28) }} source={require("./sb1.png")}></Image>
        ),
        onPress: () => this.setState({ selectedTab: 'talk' }),
        component: <Talk />
      },
      {
        renderIcon: () => <Image style={{ width: pxToDp(28), height: pxToDp(28),borderRadius:pxToDp(14) }} source={require("./res/商城.png")}></Image>,
        renderSelectedIcon: () => (
          <Image style={{ width: pxToDp(28), height: pxToDp(28),borderRadius:pxToDp(14)}} source={require("./res/商城.png")}></Image>
        ),
      },
      {
  selected: 'shop',
    title: '越市',
      renderIcon: () => <Image style={{ width: pxToDp(80), height: pxToDp(28) }} source={require("./sb2.png")}></Image>,
        renderSelectedIcon: () => (
          <Image style={{ width: pxToDp(95), height: pxToDp(28) }} source={require("./sb2.png")}></Image>
        ),
          onPress: () => this.setState({ selectedTab: 'shop' }),
            component: <Shop />
},
{
  selected: 'my',
    title: '戏痴',
      renderIcon: () => <Image style={{ width: pxToDp(80), height: pxToDp(28) }} source={require("./sb3.png")}></Image>,
        renderSelectedIcon: () => (
          <Image style={{ width: pxToDp(95), height: pxToDp(28) }} source={require("./sb3.png")}></Image>
        ),
          onPress: () => this.setState({ selectedTab: 'my' }),
            component: <My />
}
    ]
  };
render() {
  const { selectedTab, pages } = this.state;
  return (
    <TabNavigator style={{ backgroundColor: '#e2f4fe' }}>
      {pages.map((v, i) => (
        <TabNavigator.Item
          key={v.title}
          selected={selectedTab === v.selected}
          title={v.title}
          renderIcon={v.renderIcon}
          renderSelectedIcon={v.renderSelectedIcon}
          onPress={v.onPress}
          selectedTitleStyle={{ color: '#468cd3' }}
          tabStyle={{
            height: pxToDp(51),
            backgroundColor: '#ecf6fc',
            justifyContent: 'center'
          }}
        >
          {v.component}
        </TabNavigator.Item>
      ))}
    </TabNavigator>
  );
}
}
export default Index;
