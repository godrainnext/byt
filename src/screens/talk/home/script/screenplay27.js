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
                    家
                </Text>
                <View style={{ width: pxToDp(20), height: pxToDp(1), backgroundColor: '#000000', marginLeft: pxToDp(10) }}></View>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                两地洞房
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphotocdn.sohu.com%2F20051017%2FImg227228606.jpg&refer=http%3A%2F%2Fphotocdn.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633758968&t=9ed018778bac77e9979e901639abbed3'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>梅</Text>:
                洞房悄悄红烛摇
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>珏</Text>:
                洞房悄悄红烛耀
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>梅</Text>:
                世事如梦梦飘渺
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>珏</Text>:
                面对烛花心狂跳
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>梅</Text>:
                表哥你今夜梦乡在何处，梅芬我逼嫁赵某你可知晓
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>珏</Text>:
                新郎君为何迟迟不进房，瑞珏我忐忑不安如何好
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>梅</Text>:
                昏沉沉身不由己上颠簸轿，呜咽咽一路伴哭是断肠箫。懵懂懂冲喜拜堂方知晓，新郎已难下床，替身是他金花冠帽
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>珏</Text>:
                烛熊熊似有团团喜气胸中绕，情怯怯又像丝丝不安挂心梢。娘夸他貌也好才也好，我只盼知心着意同到老
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>高</Text>:
                昏沉沉三杯喜酒愁肠搅，呜咽咽哭寻旧地旧踪杳。痛梅林絮狂舞花乱飘，相约三弄曲不堪已成伤心调
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>珏</Text>:
                从今后他的家成了我的家
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>梅/高</Text>:
                从今后真情知己影渺渺
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>珏</Text>:
                愿欢多愁少默默祝祷  默默祝祷
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>梅/高</Text>:
                何处再召知音鸟
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>梅</Text>:
                怕的是陪满室荣华一个肺痨，一生心病无药疗
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>高</Text>:
                怕的是山残水残梦不残，浅缘断了浓情难消
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>珏</Text>:
                的是隐隐约约似感到，他深藏着尚未画圆一个句号
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>梅</Text>:
                似这样生不如死真想死啊，可丢不下青春守寡娘，暮年谁养老
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>高</Text>:
                面对房中人念着心上人。里外皆煎熬，生死两迢迢
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="家"
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
