import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>沙漠王子</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                访旧
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://img2.baidu.com/it/u=3457419213,2169307437&fm=15&fmt=auto&gp=0.jpg'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>伴唱</Text>:
                扬鞭催马插翅飞哎……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>王子（白）</Text>:
                伊丽……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>(唱)</Text>:
                心头常记一年期，今日旧地来旧游，见了面，我千言万语从何啊……提。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>(唱)</Text>:
                我告诉她，一支杜鹃伴晨昏，对花就如对伊丽。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>(唱)</Text>:
                我告诉她，日望鸿雁寄相思，夜对圆月数归期。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>(唱)</Text>:
                告诉她啊，八方酋长表同心，千里奔波多如意。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>(唱)</Text>:
                告诉她啊，已经定下里应外合计，功成奏凯指日待。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>(唱)</Text>:
                告诉她，只等光复河山报深仇。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>(唱)</Text>:
                伊丽啊，我与你花开并蒂永不离。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="沙漠王子"
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
