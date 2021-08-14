import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import Top from '../../../../component/common/top'
class Index extends PureComponent {
    render() {
        const { goToPage, tabs, activeTab } = this.props;
        return (
            <View>
                <Top icon1="arrow-back" title="全部订单"/>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around',backgroundColor:'#E2F4FE' }}>
                    {tabs.map((v, i) => <TouchableOpacity
                        key={i}
                        onPress={() => goToPage(i)}
                        style={{
                            justifyContent: 'center',
                            borderBottomColor: "#1874CD",
                            borderBottomWidth: activeTab === i ? pxToDp(3) : 0
                        }}
                    >
                        <Text
                            style={{ color: activeTab === i ? "black" : "grey", fontSize: activeTab === i ? pxToDp(20) : pxToDp(15) }}
                        >{v}</Text>
                    </TouchableOpacity>)}
                </View>
            </View>
        );
    }
}
export default Index;