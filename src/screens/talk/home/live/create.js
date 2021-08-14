import React, { PureComponent } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import Icon from 'react-native-vector-icons/Ionicons';

class Index extends PureComponent {
    render() {
        return (
            <View style={{backgroundColor:'#E2F4FE'}}>
                <Top icon1="arrow-back" title="创作" />
                <View style={{ height: pxToDp(400), width: pxToDp(320), margin: pxToDp(20) }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: pxToDp(140), width: pxToDp(90) }} source={require('../../../../res/27.jpg')} />
                        <Text style={{ fontSize: pxToDp(18), marginLeft: pxToDp(10) }}>创建新剧本</Text>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:pxToDp(20)}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon name="md-newspaper-outline" style={{ fontSize: 25, color: 'grey'}} />
                            <Text style={{ fontSize: pxToDp(20), color: 'grey',marginLeft:pxToDp(10) }}>剧本设置</Text>
                        </View>
                        <Icon name="chevron-forward" style={{ fontSize: 25, color: 'grey' }} />
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:pxToDp(10)}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon name="receipt-outline" style={{ fontSize: 25, color: 'grey' }} />
                            <Text style={{ fontSize: pxToDp(20), color: 'grey',marginLeft:pxToDp(10) }}>内容简介</Text>
                        </View>
                        <Icon name="chevron-forward" style={{ fontSize: 25, color: 'grey' }} />
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:pxToDp(10)}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon name="options-outline" style={{ fontSize: 25, color: 'grey'}} />
                            <Text style={{ fontSize: pxToDp(20), color: 'grey',marginLeft:pxToDp(10) }}>更多设置</Text>
                        </View>
                        <Icon name="chevron-forward" style={{ fontSize: 25, color: 'grey' }} />
                    </View>
                 <TouchableOpacity style={{justifyContent:'flex-end',backgroundColor:'#4682B4',alignItems:'center',width:pxToDp(250),marginTop:pxToDp(50),alignSelf:'center'}}>
                     <Text style={{fontSize:pxToDp(20),margin:pxToDp(5)}}>创建剧本</Text>
                 </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Index;