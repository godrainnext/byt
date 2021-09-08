import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { Chip } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import  LinearGradient  from 'react-native-linear-gradient';
import { fonts } from 'react-native-elements/dist/config';
import { point, playnumber, pinglun } from '../../../../component/common/iconSvg'


class Index extends PureComponent {

  render() {
    return (
      <ScrollView
        style={{ marginTop: pxToDp(20) }}
        showsVerticalScrollIndicator={false}
      >
        {this.props.userinfo.collect.map((item) => (
          <View
            key={item.collectid}
            style={{
              elevation: 1,
              borderWidth: 0,
              flex: 1,
              width: '95%',
              alignSelf: 'center',
              backgroundColor: 'white',
              borderRadius: pxToDp(8),
              marginTop: pxToDp(10)
            }}
          >
            <View style={{ flexDirection: 'row', marginTop: pxToDp(10) }}>
              <Image
                source={{ uri: item.collectimg }}
                style={{
                  width: pxToDp(110),
                  height: pxToDp(80),
                  borderRadius: 4,
                  left: pxToDp(5)
                }}
              />
              <Text
                style={{
                  width: '50%',
                  paddingLeft: pxToDp(20),
                  fontSize: pxToDp(15)
                }}
                numberOfLines={2}
              >
                {item.title}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  bottom: pxToDp(10),
                  left: pxToDp(132)
                }}
              >
                <SvgUri svgXmlData={playnumber} width="15" height="15" />
                <Text style={{ marginLeft: pxToDp(10), fontSize: pxToDp(12) }}>
                  {item.playnum}
                </Text>
              </View>
              <SvgUri
                svgXmlData={pinglun}
                width="16"
                height="16"
                style={{ bottom: pxToDp(8), left: pxToDp(65) }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: pxToDp(10),
                  bottom: pxToDp(10)
                }}
              >
                <SvgUri svgXmlData={point} width="15" height="15" />
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  bottom: pxToDp(55),
                  right: pxToDp(10)
                }}
              >
                <Chip
                  title={item.label}
                  size={10}
                  color="grey"
                  ViewComponent={LinearGradient} // Don't forget this!
                  linearGradientProps={{
                    colors: ['pink', '#D5E8E6'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 }
                  }}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}



export default Index;
