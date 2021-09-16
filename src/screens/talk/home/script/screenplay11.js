import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <View style={{
                    height: pxToDp(30),
                    width: pxToDp(30),
                    borderRadius: pxToDp(15),
                    backgroundColor: '#D5E8E6',
                    marginBottom: pxToDp(-20),
                }} ></View>
                <Text
                    style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000', marginLeft: pxToDp(10) }}
                >
                    孟丽君
                </Text>
                <View style={{ width: pxToDp(53), height: pxToDp(1), backgroundColor: '#000000', marginLeft: pxToDp(10) }}></View>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                看画像
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180726%2F0ea6b8d0635b4f259df6d70f9ba20841.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633586732&t=aa39dfbd499a037852356d83c66b1275'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（少唱）</Text>:
                望丹青，心惆怅，盼佳音，三月长。百日限期期将满，我愁肠百结无主张。天天盼望无消息，夜夜梦回费思量。这丹青分明像丞相，两副面庞一般样。望丹青啊思丞相，是真是假、是弁是钗费猜详。他若不是画中人，为什么仪态神容都相仿？他若本是画中人，为什么至今不肯露红妆！丞相他对我话中又有话，嘱咐我候佳音，意味深长！今日托病请丞相，我定要察言观色控行藏。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（孟唱）</Text>:
                见书房，寂寂无声好清静，为什么不见有人把客迎？莫非是二老不知丞相到，莫非是少华病势直不轻？莫非是这病中还有“病”，我还须随机应变多留神。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（孟唱）</Text>:
                见画像，百感生，三年旧物安无恙。画呀画，我羡你命运比我强，三年来日日伴他在身旁，我羡你不愁风波不愁浪，淡妆匀粉好安详。今日里，真容假貌来相逢，怎不叫人触景生情情难藏！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（少唱）</Text>:
                他那里有意装作无意样，我有心再把心话讲。恩师啊！皇甫少华与孟丽君，早就海誓山盟结鸳鸯。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（孟白）</Text>:
                噢，贤契得了这样一位如花如玉的小姐，真是福分不浅啊！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（少白）</Text>:
                唉！哪里有什么福分啊！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                可惜是黄榜贴出三月多，未见她投案露真相。恩师呀，你殷勤嘱我候佳音，怎奈是画饼不能充饥肠。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（孟唱）</Text>:
                贤契啊，好风来时篷才张，青云有路终能上。你与她有情人终能成眷属，何须焦躁不用慌。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（少唱）</Text>:
                如今是好风已临篷不张，只怕她做了高官把旧情忘。我为她戎马倥偬常挂念，我为她画不离身三年长。我一片真心唯天表，她无动于衷为哪桩？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（孟唱）</Text>:
                他那里字字句句诉衷情，我这里方方寸寸九回肠。他情切切为我思念长，他恨生生怨我旧情忘。酸溜溜他语中带刺挖苦我，痴呆呆我万千苦衷他全不想！常言道，水未落，石难出，我心中有话怎明讲？人说伴君如伴虎，一旦有祸要害夫郎，奸佞未除怎下堂，少华啊，这难煞人的处境你不体谅！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（少白）</Text>:
                唉！孟丽君啊孟丽君！你明明与我近在咫尺，却为何故意装作如同陌路，你呀，你呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                透过眉宇探秋波，你的心思瞒不过我，定是为犯欺君罪，担心再罹杀身祸。三年来，你为平乱雪家冤，事出有因万不得已才有错，更何况，你我两家功劳大，何惧万岁不让步。他若真要降你罪，同患难，我不辞赴汤与蹈火。丽君啊，倘若是万岁赐婚刘家女，叫我如何去对付？这百日限期期将到，切莫犹豫再蹉跎，你若再把时间误，你不申诉我申诉！你若再不夫妻认，我定当你薄情寡义负了我！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（孟唱）</Text>:
                听少华语急切情意真，声声催我夫妻认。人说道，雪里梅花早知春，他却像晚开木樨不接讯。我正为功成把身退，巧运筹谋苦费心。一来是彭泽案情待查清，二来是待等太后寿诞临，若得太后来相助，可保得安然脱险夫不惊。贤契呀！你为画像起“病”怨画像，可是那画像有口口难张。你看她秋波清澈明如镜，想必她，你的心事也知详；你看他，柳眉淡扫智慧藏，想必她，心中定有好主张。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（少唱）</Text>:
                我说破舌尖明心迹，她至今还在“画”中藏。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                唉！孟丽君呀孟丽君，你的心实在太狠了！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（孟白）</Text>:
                这是你错怪……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（少白）</Text>:
                嗯？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（孟白）</Text>:
                噢！这是你错怪（指画）她了！贤契呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                既然她，敢逃冤狱走天涯，定是个，血性女子有志向。你恩重如山对待她……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（少白）</Text>:
                怎么样？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（孟唱）</Text>:
                她定会情深如海来报偿。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="孟丽君"
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
