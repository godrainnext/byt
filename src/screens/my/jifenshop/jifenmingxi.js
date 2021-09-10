import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    text1: '2021-09-05',
                    text2: '+5'
                },
                {
                    text1: '2021-09-02',
                    text2: '+35'
                },
                {
                    text1: '2021-09-01',
                    text2: '+30'
                },
                {
                    text1: '2021-08-31',
                    text2: '+25'
                },
                {
                    text1: '2021-08-30',
                    text2: '+20'
                },
                {
                    text1: '2021-08-29',
                    text2: '+15'
                },
                {
                    text1: '2021-08-28',
                    text2: '+10'
                },
                {
                    text1: '2021-08-27',
                    text2: '+5'
                },
                {
                    text1: '2021-08-23',
                    text2: '+20'
                },
                {
                    text1: '2021-08-22',
                    text2: '+15'
                },
                {
                    text1: '2021-08-21',
                    text2: '+10'
                },
                {
                    text1: '2021-08-20',
                    text2: '+5'
                },
            ]
        };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#D5E8E6' }}>
                <Top icon1="arrow-back" title="积分明细" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: pxToDp(40), color: '#62bfad', marginLeft: pxToDp(22) }}>851</Text>
                        <Ionicons
                            style={{ marginTop: pxToDp(24), marginLeft: pxToDp(8) }}
                            name="server-outline"
                            size={pxToDp(20)}
                            color="#62bfad"
                        />
                    </View>
                    {this.state.data.map((item, index) => (
                        <View style={styles.box}>
                            <View>
                                <Text style={styles.text1}>签到</Text>
                                <Text style={styles.text2}>{item.text1}</Text>
                            </View>
                            <Text style={styles.text3}>{item.text2}</Text>
                        </View>
                    ))}
                    <View style={{ height: pxToDp(20) }}></View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginLeft: pxToDp(16),
        marginRight: pxToDp(16),
        marginTop: pxToDp(8),
        elevation: 2,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'grey',  //  阴影颜色
        shadowRadius: pxToDp(8),  //  圆角
        padding: pxToDp(16),
        alignItems: 'center',
        borderRadius: pxToDp(8)
    },
    text1: {
        fontSize: pxToDp(14),
        color: '#333333'
    },
    text2: {
        fontSize: pxToDp(12),
        color: '#999999'
    },
    text3: {
        fontSize: pxToDp(14),
        color: '#62BFAD'
    },
})

export default Index;