import React, { PureComponent } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  play,
  selectedPlay,
  talk,
  selectedTalk,
  first,
  selectedFirst,
  shop,
  selectedShop,
  my,
  selectedMy
} from './res/fonts/iconSvg';
import Svg from 'react-native-svg-uri';
import First from './screens/first/home';
import Play from './screens/play/home';
import Talk from './screens/talk/home';
import Shop from './screens/shop/home';
import My from './screens/my/home';
import { pxToDp } from './utils/styleKits';

class Index extends PureComponent {
  state = {
    selectedTab: 'first',
    pages: [
      {
        selected: 'play',
        title: '越吟',
        renderIcon: () => <Svg width="20" height="20" svgXmlData={play} />,
        renderSelectedIcon: () => (
          <Svg width="20" height="20" svgXmlData={selectedPlay} />
        ),
        onPress: () => this.setState({ selectedTab: 'play' }),
        component: <Play />
      },
      {
        selected: 'talk',
        title: '戏缘',
        renderIcon: () => <Svg width="20" height="20" svgXmlData={talk} />,
        renderSelectedIcon: () => (
          <Svg width="20" height="20" svgXmlData={selectedTalk} />
        ),
        onPress: () => this.setState({ selectedTab: 'talk' }),
        component: <Talk />
      },
      {
        selected: 'first',
        title: '百越台',
        renderIcon: () => <Svg width="20" height="20" svgXmlData={first} />,
        renderSelectedIcon: () => (
          <Svg width="20" height="20" svgXmlData={selectedFirst} />
        ),
        onPress: () => this.setState({ selectedTab: 'first' }),
        component: <First />
      },
      {
        selected: 'shop',
        title: '越市',
        renderIcon: () => <Svg width="20" height="20" svgXmlData={shop} />,
        renderSelectedIcon: () => (
          <Svg width="20" height="20" svgXmlData={selectedShop} />
        ),
        onPress: () => this.setState({ selectedTab: 'shop' }),
        component: <Shop />
      },
      {
        selected: 'my',
        title: '戏痴',
        renderIcon: () => <Svg width="20" height="20" svgXmlData={my} />,
        renderSelectedIcon: () => (
          <Svg width="20" height="20" svgXmlData={selectedMy} />
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
