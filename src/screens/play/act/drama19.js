import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Svg from 'react-native-svg-uri';
import { right } from '../../../component/common/iconSvg';
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dramalist: [{
                title: '孟丽君',
                author:
                    '陈端生',
                year: '清朝中叶',
                int1: '元成宗时，兵部尚书孟士元之女丽君，才貌兼美。云南兵马大元帅皇甫敬之子少华、当朝国舅刘奎璧皆来求婚。一女难许二婿，孟尚书只好约两人比箭定婚，因而选定少华为婿。刘奎璧比箭失败，怀恨在心，请少华到府中小秦庭饮酒，乘机纵火。幸刘府家人江进喜母子相救，少华才得火里余生。刘奎璧又设毒计，陷害皇甫满门，然后又挟旨到孟家迫婚。孟士元摄于君命，劝丽君出嫁。丽君出嫁前夕自描图容并留书以慰双亲，与婢女荣兰乔装出走。',
                int2: '翌日，刘家花轿临门，乳娘之女苏映雪仗义代丽君出嫁，刺奸不遂投江自尽，幸遇梁相夫人官船相救，契为义女，一同进京。孟丽君改名丽君玉男装赴试，只中状元。谒相之日，梁相命义女苏映雪彩楼选婿，丽君固辞不脱。时适孟士元到相府，梁相请他作媒，丽君怕被父亲觉破，只好勉强从亲。洞房之夜，丽君认出新娘就是苏映雪，映雪亦探出新郎是丽君。姐妹相会，悲喜欢交集，假夫妻誓言共生死，报仇雪恨待将来。',
                int3: '孟丽君入赘相府，与苏映雪假夫妻相守相安。后因医治太后功，官拜右相，遂举皇甫少华率兵平夷，重振皇甫家声。孟母思女心切，探知丽相即丽君，诈病请其诊治。迫于王法，丽君只好暗中认母，并决意伺机恢复女装。',
                int4: '少华眷恋丽君亲描之图容，思念丽君。丽君亦眷念少华，过府探亲。少华借图试妻，若即若离，最后才得证实，即上表并附图容请成宗赐其完婚。成宗得知丽君即丽相，痴心夺爱乃邀同游御苑，丽相未为所动。事被太后觉察，即召丽相内宫画像，并赐美酒将其醉倒，然后命宫女脱靴验鞋，以辨男女。丽君绣鞋被成宗截获，一面向太后谎报丽相是男，一面命人护丽君回府，随后扮成内侍潜至相府还鞋迫爱。丽君不得已用了三天后复命的缓兵之计。三天后，丽君女装上殿，恳求赦罪赐婚。成宗恼差成怒，欲斩丽君与少华，君臣力保无无效。太后及时赶到，告诫成宗以社稷为重，收丽君为义女，当殿与少华完婚。',
                text1:
                    '该剧源出清代陈端生弹词《再生缘》，原系小歌班剧目，以《五美再生缘》于1917年6月演于上海镜花戏园。1920年，嵊县人俞 龙孙根据《华丽缘》唱本改编成28集连台本戏《孟丽君》。于1921年3月5日由男班梅朵阿顺班演出于上海升平歌舞台。',
                text2:
                    '后剧本被京剧以300银元买去，改名《华丽缘》，这是越剧史上第一个正式输出的剧目。情节曲折离奇，塑造了敢于反抗、敢于斗争、忠于国家、忠于爱情的一代巾帼孟丽君形象。但存在枝蔓太多、五美联姻等不足之处。后为绍兴文戏时期常演剧目。解放后，此剧有多种改编单本。1956年唐远凡据连台本戏《华丽缘》整理改编，由浙江金华市越剧团首演。',
                text3: '1957年根据周恩来总理在杭州观后所提意见（不提皇甫少华东征高丽；突出孟丽君与元成帝斗智，不强调男女私情）又作了修改，同年7月参加浙江省第二届戏曲会演获多项奖。剧本由东海文艺出版社出版。上海越剧院于1957年7月25日演于大众剧场。',
                text4: '1982年夏，该剧由上海电视台摄制成戏曲电视剧播映，获全国第一届戏曲电视剧评比一等奖。剧中主要唱段已由中国唱片社等音像出版单位制成唱片和音带发行。1936年，高亭唱片公司灌制了男班王永春、张雪芳演唱的《孟丽君·游上林苑》唱片1张。1937年，丽歌唱片公司灌制了施银花、屠杏花演唱的《孟丽君·看图》和赵瑞花演唱的《孟丽君·看画》唱片各1张。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.itc.cn%2Fq_70%2Fimages03%2F20210102%2F161d1f27fb4d423eb5d19ff9a9cff991.jpeg&refer=http%3A%2F%2Fp0.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633522276&t=bef4d7af60b6ee4b8343cfaa8dbf296d',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F5c4abf3150a6c83a70ef1ac1edacdf5a8710482a.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633522239&t=b8e57953862acb915f6d9adf33651bcb',

            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="孟丽君" />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        flex: 1
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <Image
                        style={{
                            height: pxToDp(180),
                            borderRadius: pxToDp(8),
                            marginLeft: pxToDp(16),
                            marginRight: pxToDp(16),
                            marginTop: pxToDp(8)
                        }}
                        source={{ uri: this.state.dramalist[0].path1 }}
                    />
                    <Text style={styles.text}>
                        {this.state.dramalist[0].title}
                    </Text>
                    <Text style={styles.title}>
                        &emsp;&emsp;作者：{this.state.dramalist[0].author}
                    </Text>
                    <Text style={styles.title}>
                        &emsp;&emsp;创作年代：{this.state.dramalist[0].year}
                    </Text>
                    <View>
                        <Text style={styles.text}>剧情简介</Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int1}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int2}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int3}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int4}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>演出历史</Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text1}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text2}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text3}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text4}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly11', {
                                ...this.state.dramalist,
                                title: this.state.dramalist[0].title
                            }
                            )}
                        >
                            <Image
                                style={{
                                    height: pxToDp(100),
                                    borderRadius: pxToDp(8),
                                    marginLeft: pxToDp(16),
                                    marginRight: pxToDp(16),
                                    marginTop: pxToDp(24)
                                }}
                                source={{ uri: this.state.dramalist[0].path2 }}
                            />
                            <View style={{ marginTop: pxToDp(-60), marginLeft: pxToDp(300) }}>
                                <Svg width="32" height="32" svgXmlData={right} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: pxToDp(16),
        lineHeight: pxToDp(24),
        color: '#333333',
        marginTop: pxToDp(16),
        marginLeft: pxToDp(16),
        marginRight: pxToDp(16)
    },
    text: {
        fontSize: pxToDp(18),
        color: '#000000',
        fontWeight: 'bold',
        marginTop: pxToDp(24),
        marginLeft: pxToDp(16)
    },
    book: {
        height: pxToDp(100),
        borderRadius: pxToDp(8),
        marginBottom: pxToDp(50)
    }
});
export default Index;

