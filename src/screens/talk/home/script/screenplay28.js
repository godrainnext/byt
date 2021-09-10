import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>早春二月</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                忍痛割爱
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11201662550%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633759100&t=153b01792b2b11a74d9096d32e1b2a2e'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（萧唱）</Text>:
                黄昏时小镇上点点寒灯，夜风紧心头冷步步难行。她送走女儿临别时，眼中绝望已分明。何计使她免一死……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                采莲……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我只有娶文嫂方可救她离绝境！无奈之计彻底好，快去求陶岚妹谅解我一片苦心。欲叩陶家门，只怕惊芳心。面对岚妹难启口，不忍断恋情。似听到悲泣声声，似见她哀哀失神。断肠人在盼援助，我不娶她难生存。二次欲叩门，又怕伤了心上人。岚妹真情火样热，我岂可再降冰霜葬青春？似闻窃窃私语声，自古流言可杀人。我只有堂堂正正娶文嫂，她方可安静求新生。三次欲叩门，我心乱纷纷。左右为难难进退，一个爱字两难分。月西沉，夜已深，怎可犹豫等死神。救人不可存私念，岚妹岂会无爱心。救人从来有牺牲，我应该忍痛割爱济苍生！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（萧白）</Text>:
                我要与文嫂结婚！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（伴唱）</Text>:
                这一声重于千钧，说出口还怕伤人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（陶白）</Text>:
                不！这不是真的，你不要开玩笑！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（萧白）</Text>:
                没有开玩笑，这是真的，岚妹——
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                你我相识情意真，知我懂我唯岚君。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（陶唱）</Text>:
                理解你好心兼苦心，不懂你是怜悯还是爱情？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（萧唱）</Text>:
                我怜她孤苦无援，我爱她纯净清贫。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（陶唱）</Text>:
                那你心中无陶岚？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（萧唱）</Text>:
                苍天作证，爱你更深。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（陶唱）</Text>:
                爱既深生死应相守，你何忍割舍真情？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（萧唱）</Text>:
                志豪兄为国为民献生命，我们俩助人救人也可作牺牲。牺牲爱情也高尚，割舍真情两心磊落更清纯。相信你可另觅佳偶知音，相信你还会有前途似锦！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（陶白）</Text>:
                前途……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                多谢萧哥哥，知我相信我。不去寻死不再哭，快快乐乐觅前途。无怨无恨好轻松，无忧无虑不知苦。孤单单天涯海角独自游，冷清清春夏秋冬对影舞。醉醺醺活到七老八十岁，笑呵呵一个寂寞老婆婆。老婆婆还念萧哥哥，守着心中爱唠唠叨叨唱情歌。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（伴唱）</Text>:
                抽刀断水水更流，忍痛割爱爱愈深。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="早春二月"
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
