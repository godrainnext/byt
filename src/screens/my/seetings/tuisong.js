import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-elements';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top'


class Index extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: '#e2f4fe', flex: 1 }}>
                <Top icon1='arrow-back' title="消息通知与推送" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: pxToDp(15) }}>
                    <View>
                        <Text style={{ fontSize: pxToDp(20) }}>每日推荐</Text>
                        <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>关闭后不再显示每日推荐</Text>
                    </View>
                    <Switch value={false} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: pxToDp(15) }}>
                    <View>
                        <Text style={{ fontSize: pxToDp(20) }}>声音提醒</Text>
                        <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>关闭后客服消息没有声音提示</Text>
                    </View>
                    <Switch value={true} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: pxToDp(15) }}>
                    <View>
                        <Text style={{ fontSize: pxToDp(20) }}>震动提醒</Text>
                        <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>关闭后客服消息没有震动提示</Text>
                    </View>
                    <Switch value={true} />
                </View>
            </View>
        );
    }
}
export default Index;