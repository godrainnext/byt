import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>玉堂春</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                苏三起解
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic13.997788.com%2F_pic_auction%2F00%2F00%2F77%2F07%2F770749a.jpg&refer=http%3A%2F%2Fpic13.997788.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633622122&t=f5d9dc9b5308f8caf5a4ee3a9422a42f'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（苏唱）</Text>:
                苏三离了洪洞县，一路起解赴太原。阳春三月花似锦，我见花伤情心悲惨。久居监禁不知春，骤见春色更辛酸。一阵飞鸟头上转，鸟儿啊，你能否为我把信传？传言南京王公子，就说苏三遭祸端。此生难与君相见，再要团圆已无缘。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（苏唱）</Text>:
                我自幼身世太凄凉，青楼卖笑度时光。情投意合逢三郎，海誓山盟配成双。恨的是鸨儿贪财施毒计，平地风浪将我嫁富商。面中毒药非我放，皮氏大娘狠心肠。老伯呵，可怜我是屈打成招受冤枉，恐怕是水落石出无希望。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                苦也！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                玉堂春，含悲泪，忙往前进，想起了，当年事，好不伤情。过眼云烟化灰尘，到如今恍如隔世人。一可恨爹娘心太狠，他不该，将亲生女儿送娼门。青楼生涯非人过，受尽折磨痛苦深。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（崇唱）</Text>:
                说什么爹娘心太狠，谁愿意将亲生女儿送娼门。定然是，生计所迫出无奈，骨肉分离也伤心。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（苏唱）</Text>:
                二可恨鸨儿丧良心，她不该，忘恩负义无人情。我为她，挣得多少雪花银，到头来将我卖与沈延林。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（崇唱）</Text>:
                鸨儿是有财客笑脸迎，无钱汉，莫上门。姑娘年轻当作摇钱树，到人老珠黄就当作陌路人。谈什么良心说什么恩呀，还不是黄金白银换人情！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（苏唱）</Text>:
                三可恨富商沈延林，他不该嫖院带来一斗金，媒人谢银三百两，害我山西受苦情。……四可恨皮氏大娘起毒心，她不该毒面药死亲夫君，又买通赃官洪洞县，害我冤枉海洋深。……五可恨三班衙役也分赃银，将我苏三当堂屈打来招认。越思越想越可恨，这洪洞县内无好人。……一句话儿错出口，爹爹一旁把气生。走上前去忙赔礼……爹爹，爹爹呀！唯有你，老爹爹是个好人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（崇白）</Text>:
                哈……走吧！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（苏白）</Text>:
                爹爹且慢，想昔日我与王公子分别之时，曾在神前立下誓愿，如今待我祝告神灵。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（崇白）</Text>:
                如此也好。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（苏唱）</Text>:
                我这里，双膝跪，哀告神前，禀一声，关王爷，细听奴言。想当初，与三郎，古庙一别，订下了，白头约，各走天边。又谁知，玉堂春，惨遭不测，先受骗，又遭冤，苦受熬煎。求神灵，保佑奴，冤情大白，与三郎，重聚首，再能相见。……老爹爹，他说道，冤枉难辩，不由我，玉堂春，心似油煎。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                天呵！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                叫苍天，天不语。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                关王爷啊！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                求神灵，神无言。苍天为何不开即，菩萨为何不灵验。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                也罢！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                苏三纵然身一死，作鬼也要去申辩！
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="玉堂春"
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
