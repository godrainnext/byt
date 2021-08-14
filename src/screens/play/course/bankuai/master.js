import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { pxToDp } from '../../../../utils/styleKits';
import Icon from 'react-native-vector-icons/AntDesign';
import Top from '../../../../component/common/top';


const CONTENT = [
    {
        title: '方亚芬 天问教学',
        text: '袁派优秀传人方亚芬',
        content1: '第一集',
        content2: '第二集',
        content3: '第三集',
        path: require('../../../../res/genre/1.jpg')
    },
    {
        title: '茅威涛教你越剧',
        text: '尹派茅威涛教学',
        content1: '第一集',
        content2: '第二集',
        content3: '第三集',
        path: require('../../../../res/genre/3.jpg')
    },
    {
        title: '越剧《葬花》教学',
        text: '黄志清-越剧花旦',
        content1: '第一集',
        content2: '第二集',
        content3: '第三集',
        path: require('../../../../res/genre/4.jpg')
    },
    {
        title: '林再民越剧小课堂',
        text: '唱腔篇',
        content1: '第一集',
        content2: '第二集',
        content3: '第三集',
        path: require('../../../../res/genre/5.jpg')
    },
    {
        title: '王文娟系列',
        text: '越剧一代宗师',
        content1: '第一集',
        content2: '第二集',
        content3: '第三集',
        path: require('../../../../res/genre/6.jpg')
    },
    {
        title: '尹桂芳越剧教学',
        text: '“越剧皇帝”、流派宗师',
        content1: '第一集',
        content2: '第二集',
        content3: '第三集',
        path: require('../../../../res/genre/7.jpg')
    },
];
export default class Index extends PureComponent {
    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false
    };

    setSections = (sections) => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    renderHeader = (section) => {
        return (
            <View style={{ marginTop: pxToDp(10), alignItems: 'center' }}>
                <View style={styles.box}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.image} source={section.path} />
                        <View style={{ marginLeft: pxToDp(10) }}>
                            <Text style={styles.title}>{section.title}</Text>
                            <Text style={{ fontSize: pxToDp(14) }}>{section.text}</Text>
                        </View>
                    </View>
                    <Image style={styles.icon} source={require("../../../../res/箭头下.png")} />
                </View>
            </View>
        );
    };

    renderContent(section) {
        return (
            <View style={{ backgroundColor: 'rgba(255,255,255,0.5)', height: pxToDp(120) }}>
                <TouchableOpacity style={{ flexDirection: 'row', margin: pxToDp(10) }}>
                    <Icon name="playcircleo" size={20} color={'black'} />
                    <Text style={{ fontSize: pxToDp(15) }}>{section.content1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', margin: pxToDp(10) }}>
                    <Icon name="playcircleo" size={20} color={'black'} />
                    <Text style={{ fontSize: pxToDp(15) }}>{section.content2}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', margin: pxToDp(10) }}>
                    <Icon name="playcircleo" size={20} color={'black'} />
                    <Text style={{ fontSize: pxToDp(15) }}>{section.content3}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const { multipleSelect, activeSections } = this.state;

        return (
            <View style={{ backgroundColor: '#ECF6FC', flex: 1 }}>
                <Top icon1="arrow-back" title="越剧大师教学" />
                <ScrollView style={{ marginRight: pxToDp(10), marginLeft: pxToDp(10) }}>
                    <View>
                        <Image source={require("../../../../res/genre/5.jpg")} style={styles.headimage} />
                    </View>
                    <Accordion
                        activeSections={activeSections}
                        sections={CONTENT}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        duration={400}
                        onChange={this.setSections}
                        renderAsFlatList={false}
                    />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        width: pxToDp(330),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        height: pxToDp(60),
        width: pxToDp(60),
        borderRadius: pxToDp(30)
    },
    title: {
        fontSize: pxToDp(17),
        fontWeight: 'bold',
        marginBottom: pxToDp(5)
    },
    icon: {
        width: pxToDp(20),
        height: pxToDp(20)
    },
    headimage: {
        width: "100%",
        height: pxToDp(210),
        borderRadius: pxToDp(10),
        marginTop: pxToDp(10)
    }
})