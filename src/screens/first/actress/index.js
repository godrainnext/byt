import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollTabView, ScrollView } from 'react-native-scroll-head-tab-view';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top'

function TabView1(props) {
    const data = new Array(20).fill({});
    return (
        <ScrollView {...props}>
            <View>
                <View style={{ margin: pxToDp(10) }}>
                    <Image style={styles.image1} source={require('../../../res/performer/12.jpg')} />
                    <Text style={styles.text}>名家名段：越剧《山河恋·送信》现在我和你口信念-表演：王君安 方亚芬</Text>
                </View>
                <View style={{ margin: pxToDp(10) }}>
                    <Image style={styles.image1} source={require('../../../res/performer/13.jpg')} />
                    <Text style={styles.text}>越剧《白蛇传·断桥》-表演：方亚芬 张宇峰</Text>
                </View>
            </View>
        </ScrollView>
    );
}
function TabView2(props) {
    const data = new Array(20).fill({});
    return (
        <ScrollView {...props}>
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.image2} source={require('../../../res/performer/14.jpg')} />
                    <Image style={styles.image2} source={require('../../../res/performer/16.jpg')} />
                    <Image style={styles.image2} source={require('../../../res/performer/17.jpg')} />
                </View>
            </View>
        </ScrollView>
    );
}

function TabView3(props) {
    const data = new Array(20).fill({});
    return (
        <ScrollView {...props}>
            <View>
                <View style={styles.box}>
                    <Image style={styles.image3} source={require('../../../res/performer/16.jpg')} />
                    <View style={{ marginLeft: pxToDp(10), marginTop: pxToDp(8) }}>
                        <Text style={styles.text}>婆婆说话你可听到</Text>
                        <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}>方亚芬</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image style={styles.image3} source={require('../../../res/performer/17.jpg')} />
                    <View style={{ marginLeft: pxToDp(10), marginTop: pxToDp(8) }}>
                        <Text style={styles.text}>托坠</Text>
                        <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}>方亚芬</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image style={styles.image3} source={require('../../../res/performer/15.jpg')} />
                    <View style={{ marginLeft: pxToDp(10), marginTop: pxToDp(8) }}>
                        <Text style={styles.text}>云烟烟烟云笼绣房</Text>
                        <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}>方亚芬</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

function TabView4(props) {
    const data = new Array(20).fill({});
    return (
        <ScrollView {...props}>
            <View>
                <View style={styles.box2}>
                    <View style={{ width: pxToDp(220) }}>
                        <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(5) }}>全国越剧汇演之上海越剧院《双珠凤》，方亚芬徐标新主演</Text>
                    </View>
                    <Image style={styles.image4} source={require('../../../res/15.jpg')} />
                </View>
                <View style={styles.box2}>
                    <View style={{ width: pxToDp(220) }}>
                        <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(5) }}>方亚芬将领衔上海越剧院全本大戏《红楼梦》《梁祝》来京演出</Text>
                    </View>
                    <Image style={styles.image4} source={require('../../../res/11.jpg')} />
                </View>
                <View style={styles.box2}>
                    <View style={{ width: pxToDp(220) }}>
                        <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(5) }}>越剧《早春二月》下周全新亮相，许杰方亚芬借排练带新人</Text>
                    </View>
                    <Image style={styles.image4} source={require('../../../res/14.jpg')} />
                </View>
            </View>
        </ScrollView>
    );
}

export default function Example() {
    const [headerHeight, setHeaderHeight] = useState(200);
    const headerOnLayout = useCallback((event) => {
        const { height } = event.nativeEvent.layout;
        setHeaderHeight(height);
    }, []);

    const _renderScrollHeader = useCallback(() => {
        const data = new Array(10).fill({});
        return (
                <View onLayout={headerOnLayout}>
                <Top icon1="arrow-back" />
                    <View style={{ flexDirection: 'row', marginLeft: pxToDp(10)}}>
                        <Image style={styles.image5} source={require('../../../res/performer/11.jpg')} />
                        <View style={{ width: pxToDp(180), justifyContent: 'center', marginLeft: pxToDp(20) }}>
                            <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>方亚芬 上海越剧院</Text>
                            <Text style={{ fontSize: pxToDp(15) }}>方亚芬，女，1965年2月生。浙江宁波人。袁派花旦，上海越剧院一团团长。2007年凭《玉卿嫂》获得第二十三届梅花奖。</Text>
                        </View>
                    </View>
                </View>
        );
    }, []);

    return (
        <View style={styles.container}>
            <ScrollTabView headerHeight={headerHeight} renderScrollHeader={_renderScrollHeader}>
                <TabView1 tabLabel="视频" />
                <TabView2 tabLabel="图片" />
                <TabView3 tabLabel="唱段" />
                <TabView4 tabLabel="新闻" />
            </ScrollTabView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e2f4fe'
    },
    image1: {
        height: pxToDp(170),
        width: pxToDp(355),
        borderRadius: pxToDp(10)
    },
    image2: {
        height: pxToDp(300),
        width: pxToDp(250),
        margin: pxToDp(5),
        borderRadius: pxToDp(10)
    },
    box: {
        margin: pxToDp(10),
        flexDirection: 'row',
        borderBottomWidth: pxToDp(1),
        borderBottomColor: 'grey',
        height: pxToDp(90)
    },
    image3: {
        height: pxToDp(80),
        width: pxToDp(80),
        borderRadius: pxToDp(40)
    },
    text: {
        fontSize: pxToDp(18)
    },
    box2: {
        margin: pxToDp(10),
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: pxToDp(1),
        height: pxToDp(110)
    },
    image4: {
        width: pxToDp(135),
        height: pxToDp(90),
        borderRadius: pxToDp(10)
    },
    image5: {
        height: pxToDp(200),
        width: pxToDp(150),
        marginTop: pxToDp(20),
        borderRadius: pxToDp(10)
    }
});