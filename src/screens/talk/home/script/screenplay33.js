import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>皇帝与村姑</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                避贼寇落荒野步履踉跄
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://img0.baidu.com/it/u=1685303,26759638&fm=26&fmt=auto&gp=0.jpg'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>皇帝</Text>:
                避贼寇落荒野步履踉跄，纵目看敌无踪拜谢上苍。敌兵掳掠陷京都，如画江山遭沦丧。皇室眷属成敌囚，孤王我只得含恨奔南疆。原只盼重振社稷立帝业，谁料知贼寇追逼似虎狼。我单骑出逃落荒郊，东藏西躲口渴腹饥苦难尝。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张桂兰</Text>:
                迎朝阳踏晨光，桂兰浸种到井旁，枝头百鸟齐和鸣，滔滔甬江浪叠浪。想往曰同村姐妹同打水，欢声笑语传四方。今曰里姐妹纷纷进深山，井台边我打水忙。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>皇帝</Text>:
                你大脚村姑太无理，不读诗书少礼仪。我求你一滴菩提水，你百般刁难将人欺。常言道恻隐之心人皆有，你却是心地不善多野气。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张桂兰</Text>:
                不问情由生怒气，讲什么诗书道什么理。你看那烈曰炎炎古井水，冰凉彻骨寒心肺。看你热汗满面衣衫湿，神情困顿气急体虚。倘若猛饮古井水，管教你无病得病一病不起。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>皇帝</Text>:
                猛听得马蹄声声耳边响，又只见尘土滚滚幡旗扬。定是贼寇紧追赶，速离险境奔他乡。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张桂兰</Text>:
                只道他行色匆匆路边客，却原来被敌追踪一忠良。桂兰身为弱女子，怎救壮士避祸殃。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>皇帝</Text>:
                敌兵四起如潮涌，围前堵后撒下网。看来是孤王今日无生路，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张桂兰</Text>:
                寡不敌众休鲁莽。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>合唱</Text>:
                乱石如雨投水井，块块压碎村女心。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张桂兰</Text>:
                实指望见难相救解危急，怎料知反遭毒手丧你命。壮士啊，此处权作壮士坟，愿你安息在古井。莫道魂居异乡地，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>合唱</Text>:
                村女就是……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张桂兰</Text>:
                你亲人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>合唱</Text>:
                啊……村女就是你亲人。今曰里布兰绣裙充幡旗，以水代酒表寸心。待等那柳绿杏白清明时，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张桂兰</Text>:
                我定然纸船明烛奠英灵。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>皇帝</Text>:
                你冒死相救解危急，此生难忘你恩义。求大姐告我府居和姓氏，容曰后寻觅芳踪谢大姐。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张桂兰</Text>:
                见难相助是常理，恩义两字莫再提。我本是荒村山野农家女，怎劳壮士将名记。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>皇帝</Text>:
                常言道君子受恩必图报，我岂能时过境迁负恩义。大姐若隐姓和名，我只得拜揖再三长跪不起。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>张桂兰</Text>:
                小女子姓张……张桂兰，张家溪是我安身地。老父得病早亡故，留下母女两相依。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>皇帝</Text>:
                大姐呀，愧只愧落难之人无所赠，反求你半块布襕随身携，但等新帝登位时，我望你布襕作旗立标记。到那时我定报大姐救命恩，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>合唱</Text>:
                招魂幡变成报恩旗。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="皇帝与村姑"
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
