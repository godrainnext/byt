import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>西园记</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                我只盼红梅寄语偕永好
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://img0.baidu.com/it/u=289794844,172561256&fm=26&fmt=auto&gp=0.jpg'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}></Text>:
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（白）</Text>:
                小姐，我那玉英小姐啊
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（唱）</Text>:
                我只盼，红梅寄语偕永好，谁知竟是讣闻报。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（唱）</Text>:
                我只盼，赋诗传情订百年，谁知反作挽歌号。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（唱）</Text>:
                我只盼，披红结彩迎娶你，却不料，扎白戴孝将你吊。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（唱）</Text>:
                我只盼，夫唱妇随琴瑟和，却不料，玉殒香销葬荒郊。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（唱）</Text>:
                你那里，衰草孤冢狐魅扰，芳魂一缕随风飘。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（唱）</Text>:
                我这里，面对灵位肠痛断，手捧清酒和泪悼。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>香珺（唱）</Text>:
                灯残夜静风萧萧，书馆何来哭声高。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（白）</Text>:
                小姐！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>香珺（唱）</Text>:
                听声音，好像是，教书先生，他为何，将小姐，连声唤叫。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>香珺（唱）</Text>:
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}></Text>:
                难道有，狐狸精，兴妖作怪，还是他，遇到了，夜游山魈。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（白）</Text>:
                我那赵玉英啊！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我是无时见花不垂泪，一度思量一断肠。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>香珺（唱）</Text>:
                好一个书生有情义，难得他，为我小姐痛悲号。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（唱）</Text>:
                曾记得，环佩丁当辗然出闺房，楼头隔帘挥手招。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>香珺（唱）</Text>:
                这真是，冬瓜缠在茄棚里，将小姐与我弄颠倒。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张继华（唱）</Text>:
                到如今，花枯枝朽人逝去，明月三更入梦遥。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="西园记"
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
