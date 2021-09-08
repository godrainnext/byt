import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>杨贵妃</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                贵妃之死
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://img2.baidu.com/it/u=2299998266,4007333875&fm=26&fmt=auto&gp=0.jpg'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                荔枝鲜，荔枝美，荔枝鲜美惹人啼。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                曾记儿时每啼泪，荔枝逗我笑展眉。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                双亲早逝风雨骤，兄嫂无情苦无依。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                玉环进宫十六载，君王钟爱无论比。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                重见荔枝忆往昔，往昔恩宠今何凄。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                命乖一生不由已，西行遇难万事非。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                我一生、喜爱音乐与歌舞，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                进宫后、不问朝政是与非。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                君臣吴国生致祸乱，万人指背骂妖姬。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                弱女成了替罪人，苍天有眼当不依。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                实指望、生生死死长相伴，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                谁知晓、情真意切又分离。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                万岁他、奋力争辩妃无罪。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                没奈何马江尽头，乌江尽头别娇妻，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                临终苦思缘何故。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                怪爹娘、不该生我容颜丽，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                寿王爱我容颜丽，两情缱绻不分离。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                皇上爱我容颜丽，不顾乱伦夺子妻，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                将士们怒斥我容颜丽，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                说什么、诱惑君王沉湎女色，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                歌舞酒宴不务朝政，致使盛唐国运衰退。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                桩桩件件、件件桩桩、桩桩件件罪名、全降我杨妃。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                世人赞我容颜丽、容颜丽害杨妃。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                往事如潮涌心上，一生岁月如梦里，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（杨唱）</Text>:
                今日玉环葬马嵬，七尺白绫伴魂飞。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="杨贵妃"
                renderInner={this.renderInner}
                arr={[
                    {
                        id: 1,
                        avatar:
                            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
                        createTime: '两天前',
                        nickName: '我吃西红柿啊',
                        content: '每个人都有不一样的童年'
                    },
                    {
                        id: 2,
                        avatar:
                            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
                        createTime: '两天前',
                        nickName: '我吃西红柿啊',
                        content: '每个人都有不一样的童年'
                    }
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: pxToDp(16),
        color: '#333333',
        marginTop: pxToDp(4),
        lineHeight: pxToDp(25)
    },
    texthead: {
        fontWeight: 'bold',
        color: '#333333',
        fontSize: pxToDp(16)
    }
});
export default Index;
