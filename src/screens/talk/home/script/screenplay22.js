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
                    月照西厢
                </Text>
                <View style={{ width: pxToDp(70), height: pxToDp(1), backgroundColor: '#000000', marginLeft: pxToDp(10) }}></View>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                拷红
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180922%2F693e7d279a404ef0bf51f51fae82ef80.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633627689&t=8f345227c90258a05c49feeafce7b733'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（红唱）</Text>:
                夜坐时停了针绣，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                停了针绣做什么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红唱）</Text>:
                我与小姐闲讲究。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                闲讲究什么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红唱）</Text>:
                她说哥哥病已久，要到西厢去问候。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                你们去了没有？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红白）</Text>:
                去了。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                不得我的言语，你们到书房去问候些什么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红白）</Text>:
                问候来就是问候，还有什么好讲的？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                呒，你们去问候，张生说些什么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红唱）</Text>:
                他说夫人将恩当作仇，今叫小生在半道上喜变忧。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                呒，以后呢？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红唱）</Text>:
                这以后……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                怎么样？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红白）</Text>:
                以后的事末，以后再说吧。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                小贱人，你还不快说！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红唱）</Text>:
                他说红娘你先走，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                你先走，还有小姐呢？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红唱）</Text>:
                叫小姐权且落后。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                哎呀，你这小贱人，她一个女孩儿家，半夜三更，你叫她落后做什么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红白）</Text>:
                我也不晓得叫她落后做什么吓！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                以后又怎么样？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红白）</Text>:
                事情到这里末就完了，哪有这许多以后呢？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                小贱人还不快说！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红白）</Text>:
                我说，（唱）月儿才上柳梢头，早已人约黄昏后。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                这……真正气死我了！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红唱）</Text>:
                常言道女大不中留，其间何必苦追究，夫人吓，你得放手时且放手，得罢休时且罢休。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（夫白）</Text>:
                这事情已经多久了？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（红白）</Text>:
                人吓，红娘不曾把日月记，月余来，早已情意两相投。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="月照西厢"
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
