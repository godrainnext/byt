import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { pxToDp } from "@utils/styleKits";
import Top from '@components/common/top';

class Index extends PureComponent {
    render() {
        //console.log(this.props);
        const { goToPage, tabs, activeTab } = this.props;
        //goToPag 函数 负责跳转页面
        //tabs 标题数组
        //activeTab 当前激活索引
        return (
            <View style={{backgroundColor:'white'}}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        backgroundColor: 'white',
                        height: pxToDp(60),
                        width:pxToDp(200)
                    }}
                >
                    {tabs.map((v, i) => <TouchableOpacity
                        key={i}
                        onPress={() => goToPage(i)}
                        style={{
                            justifyContent: 'center',
                            borderBottomColor: "#003C66",
                            borderBottomWidth: activeTab === i ? pxToDp(3) : 0,
                        }}
                    >
                        <Text
                            style={{ color: activeTab === i ? "black" : "grey", fontSize: activeTab === i ? pxToDp(18) : pxToDp(16) }}
                        >{v}</Text>
                    </TouchableOpacity>)}
                </View>
            </View>
        );
    }
}

export default Index;