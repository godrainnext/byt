import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image, textarea, Button, TextInput, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { pxToDp } from '../../../utils/stylesKits';
import { MarqueeHorizontal, MarqueeVertical } from 'react-native-marquee-ab';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
class index extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ marginVertical: 2, padding: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: pxToDp(8) }}>
                        <Icon1 name="campaign" size={36} color={'orange'} />
                        <MarqueeVertical
                            textList={[
                                { label: '1', value: '一闪一闪亮晶晶，满天都是小星星' },
                                { label: '2', value: '两只老虎跑的快' },
                                { label: '3', value: '蓝蓝的天上白云飘白云下面小肥羊儿跑羊儿哪里跑' },
                            ]}
                            width={'100%'}
                            height={pxToDp(40)}
                            direction={'down'}
                            numberOfLines={1}
                            bgContainerStyle={{ backgroundColor: '#eee' }}
                            textStyle={{ fontSize: 16, color: 'orange' }}
                        // onTextClick={(item) => {
                        //     alert('' + JSON.stringify(item));
                        // }}
                        />
                    </View>
                    <View>
                        <View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: '18%', borderRadius: pxToDp(50), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: pxToDp(50), height: pxToDp(50), borderRadius: pxToDp(60) }} source={require('../../../images/head1.jpg')}></Image>
                                </View>
                                <View style={{ width: '82%', height: pxToDp(50), justifyContent: 'space-evenly', paddingLeft: pxToDp(8) }}>
                                    <Text style={{ fontSize: pxToDp(14) }}>可畏的男人</Text><Text>7-11</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: pxToDp(8) }}>
                                <View style={{ width: '18%', borderRadius: pxToDp(50), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}></View>
                                <View style={{ width: '82%', justifyContent: 'space-evenly', }}>
                                    <Text style={{ fontSize: pxToDp(15) }}>山东话版的林妹妹。有几分林黛玉倒把垂杨柳的风味了</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: pxToDp(16), marginBottom: pxToDp(16) }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                            <Icon1 name="thumb-up" size={26} color={'gray'} />
                                            <Text>2.1w</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon1 name="grade" size={26} color={'gray'} />
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon1 name="thumb-down" size={26} color={'gray'} />
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon1 name="messenger-outline" size={26} color={'gray'} />
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: '#ccc', padding: pxToDp(10) }}>
                                        <Text>海十七侠：河南话的李师师，陕西话的貂蝉，山西话的杨玉环</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: '18%', borderRadius: pxToDp(50), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: pxToDp(50), height: pxToDp(50), borderRadius: pxToDp(60) }} source={require('../../../images/head1.jpg')}></Image>
                                </View>
                                <View style={{ width: '82%', height: pxToDp(50), justifyContent: 'space-evenly', paddingLeft: pxToDp(8) }}>
                                    <Text style={{ fontSize: pxToDp(14) }}>可畏的男人</Text><Text>7-11</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: pxToDp(8) }}>
                                <View style={{ width: '18%', borderRadius: pxToDp(50), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}></View>
                                <View style={{ width: '82%', justifyContent: 'space-evenly', }}>
                                    <Text style={{ fontSize: pxToDp(15) }}>山东话版的林妹妹。有几分林黛玉倒把垂杨柳的风味了</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: pxToDp(16), marginBottom: pxToDp(16) }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                            <Icon1 name="thumb-up" size={26} color={'gray'} />
                                            <Text>2.1w</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon1 name="grade" size={26} color={'gray'} />
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon1 name="thumb-down" size={26} color={'gray'} />
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon1 name="messenger-outline" size={26} color={'gray'} />
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: '#ccc', padding: pxToDp(10) }}>
                                        <Text>海十七侠：河南话的李师师，陕西话的貂蝉，山西话的杨玉环</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: '18%', borderRadius: pxToDp(50), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: pxToDp(50), height: pxToDp(50), borderRadius: pxToDp(60) }} source={require('../../../images/head1.jpg')}></Image>
                                </View>
                                <View style={{ width: '82%', height: pxToDp(50), justifyContent: 'space-evenly', paddingLeft: pxToDp(8) }}>
                                    <Text style={{ fontSize: pxToDp(14) }}>可畏的男人</Text><Text>7-11</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: pxToDp(8) }}>
                                <View style={{ width: '18%', borderRadius: pxToDp(50), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}></View>
                                <View style={{ width: '82%', justifyContent: 'space-evenly', }}>
                                    <Text style={{ fontSize: pxToDp(15) }}>山东话版的林妹妹。有几分林黛玉倒把垂杨柳的风味了</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: pxToDp(16), marginBottom: pxToDp(16) }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                            <Icon1 name="thumb-up" size={26} color={'gray'} />
                                            <Text>2.1w</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon1 name="grade" size={26} color={'gray'} />
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon1 name="thumb-down" size={26} color={'gray'} />
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon1 name="messenger-outline" size={26} color={'gray'} />
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: '#ccc', padding: pxToDp(10) }}>
                                        <Text>海十七侠：河南话的李师师，陕西话的貂蝉，山西话的杨玉环</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

export default index;