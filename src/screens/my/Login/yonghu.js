import React, { PureComponent } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';

export default class xieyi extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top title="用户协议" icon1="arrow-back" />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        paddingBottom: 0,
                        flex: 1
                    }}
                >
                    {/* 头部 */}
                    <View
                        style={{
                            alignItems: 'flex-end',
                            marginTop: pxToDp(16),
                            marginRight: pxToDp(16)
                        }}
                    >
                        <Text
                            style={{
                                fontSize: pxToDp(16),
                                color: '#333333',
                                fontWeight: 'bold',
                                lineHeight: pxToDp(24)
                            }}
                        >
                            更新日期:2021年8月30日
                        </Text>
                    </View>
                    {/* 中部 */}
                    <View>
                        <Text style={styles.title1}>导言</Text>
                        <Text style={styles.text1}>
                            &emsp; &emsp;在您注册成为百越亭有限公司合法所有的或经合法授权享有运营权利的信息网络平台的用户前，请您务必仔细阅读《百越用户协议》（以下简称“本协议”）。本协议是您与百越亭有限公司之间订立的关于用户使用百越平台相关服务的协议。 {'\n'}
                            &emsp; &emsp;“用户”是指使用百越平台相关服务的使用人，在本协议中更多地称为“您”。用户必须是具备完全民事行为能力的自然人、法人或能够独立承担民事责任的其他组织。如您未满18周岁，请在法定监护人的陪同下阅读本协议，并特别注意未成年人使用条款。{'\n'}
                            &emsp; &emsp;一旦您注册成为本站用户，则意味着双方达成本协议且您已完全接受以下所有条款：
                        </Text>
                        <View>
                            <Text style={styles.title1}>一、用户账号与密码安全</Text>
                            <Text style={styles.text1}>
                                1.1
                                您有权在本站拥有自己的账号及密码。注册成为本站用户后，您有权使用自己的账号及密码随时登录本站，享有本站为您提供的相应服务。您有义务妥善保存您的账号和密码，并对您的账号进行的所有活动和行为负法律责任。{'\n'}本站特别提醒您，当您使用完毕，应安全退出账号。因您保管不善可能导致遗失账号、遭受盗号或密码失窃，所产生的一切后果和责任由您自行承担，本站对此不承担任何责任。
                                {'\n'}
                                1.2本站建议您所使用的密码应至少包含以下三类字符中的两类：大写字母、小写字母及数字。如果因为您设置的密码过于简单导致遭受盗号或密码失窃，责任由您自行承担。百越公司对于非因百越公司单方面原因所导致的任何账号安全、隐私保护等问题均不承担责任。
                                {'\n'}
                                1.3
                                您在注册账号和使用本站服务的过程中，需要提供一些必要的真实信息，如您的电子邮箱或手机号码等。若国家法律法规规定需要提供真实身份信息，您有义务提供自己的真实身份信息并保证不使用他人的信息，如您填写或提供的信息不真实、不准确、不完整、不合法，本站将保留结束您使用各项服务的权利。
                                {'\n'}
                                1.4
                                您在本站设置的昵称、个性签名、头像等信息，不得含有违反国家法律法规、社会公序良俗及本站制度的文字或图像，否则本站有权随时无条件修改您的账号个人信息、暂停或终止对该账号提供服务、删除该账号及该账号下发表的任何内容。
                                {'\n'}
                                1.5
                                本站账号使用权仅属于初始注册用户，禁止赠与、借用、租用、转让或售卖。否则本站有权在未经通知的情况下对涉事账户进行封禁处理而无需向该账号使用人承担法律责任，由此带来的包括但不限于用户资料、虚拟币清空等损失由您自行承担。
                            </Text>
                        </View>
                    </View>
                    {/* 底部 */}
                    <View>
                        <Text style={styles.title1}>二、法律声明</Text>
                        <Text style={styles.text1}>
                            2.1
                            您发送或传播的内容应有合法来源，相关内容为您所有或您已获得权利人的授权。
                            {'\n'}
                            2.2您在本站发布或传播的内容（包括但不限于网页、文字、图片、音频、视频、图表等）均由您自行承担责任。 {'\n'}
                            2.3您在本站发布、传送、传播、存储的内容，禁止含有以下内容：{'\n'}
                            1)反对宪法所确定的基本原则的；{'\n'}
                            2)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；{'\n'}
                            3)损害国家荣誉和利益的；{'\n'}
                            4)煽动民族仇恨、民族歧视，破坏民族团结的；{'\n'}
                            5)破坏国家宗教政策，宣扬邪教和封建迷信的；{'\n'}
                            6)散布谣言，扰乱社会秩序，破坏社会稳定的；{'\n'}
                            7)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；{'\n'}
                            8)侮辱或者诽谤他人，恶意虚构事实、隐瞒真相以误导、欺骗他人的；{'\n'}
                            9)侵害他人隐私、商业秘密、知识产权等合法权益的；{'\n'}
                            10)违反公序良俗的；{'\n'}
                            11)侵害他人隐私权、知识产权、商业秘密等合法权利的内容的；{'\n'}
                            12)广告信息、邮件、qq等与本站服务无关的信息的；{'\n'}
                            13）恶意虚构事实、隐瞒真相以误导、欺骗他人；{'\n'}
                            14)含有法律、法规及其他规范性文件禁止的其他内容的。{'\n'}
                            用户违反本条规定的，视为用户严重违约，长佩公司可以中止对用户的服务，解除双方服务协议和法律关系，且无需退还用户所支付的费用和账户余额，该费用和余额视为用户支付长佩公司的违约金，如确定责任后违约金不足以弥补长佩公司的损失的，百越公司还可通过其他法律途径向用户追偿。{'\n'}
                            2.4本站有权对违反本协议第5.1、5.3条以及本站规则的内容予以修改、屏蔽、删除；同时，本站有权视用户的行为性质，立即无条件采取包括但不限于发出警告、限制权限、暂停或终止服务、冻结或删除账号、追究用户法律责任等措施，且不另行通知。 {'\n'}
                            2.5如果用户违反5.1、5.3的约定，造成任何第三方损害的，应当独立承担责任；若本站因此遭受损失，也应当一并赔偿。 {'\n'}
                            2.6如果本站收到权利人通知，主张您发送或传播的内容侵犯其相关权利的，您同意本站有权进行独立判断并采取删除、屏蔽或中断服务等措施。
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title1}>三、用户的权利义务</Text>
                        <Text style={styles.text1}>
                            3.1
                            用户在使用本站服务时，必须遵守国家法律法规、规章、规范性文件、本协议及本站相关规定，禁止用户利用本站从事任何违法违规行为。用户如触犯国家相关法律法规，一切责任由用户自行承担。
                            {'\n'}
                            3.2 您同意本站可为履行本协议或提供本服务的目的而使用您发布或传播的内容。{'\n'}
                            3.3
                            用户不得以任何手段篡改、破坏、删除、攻击、盗取网站的系统、服务器、网络、数据库及其他用户的账户信息。一经发现，即视为严重违约，百越公司将立即无限期终止对用户的服务，并报告国家有关行政机关和司法机关，追究用户的法律责任。本站可以解除双方间的服务协议和法律关系，且无需退还您所支付的费用和账户余额，该费用和余额视为您支付百越公司的违约金，如确定责任后违约金不足以弥补百越公司的损失的，百越公司还可通过其他法律途径向您追偿。
                            {'\n'}
                            3.4
                            禁止用户利用本站提供的相关网络服务以任何方式收集其他用户信息，包括但不限于用户个人身份信息和通讯信息等。
                            {'\n'}
                            3.5
                            未经百越同意，任何人禁止转载本站发布的作品。
                            {'\n'}
                            3.6您理解并接受，由于您的阅读、收藏、订阅、评论、赞赏行为均与我站作品人气值等规则挂钩，进而影响作品榜单排名。为保证本站榜单数据的正确性与公正性，便于用户对相关作弊行为进行监督，我们会在作品页面公布作品收藏、海星、人气值、读者评论、赞赏等情况；此外，我们还将在本站用户空间公布用户最近阅读、收藏、发表的动态、评论或动态、、关注及被关注的情况等。{'\n'}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    title1: {
        fontSize: pxToDp(18),
        color: '#000000',
        fontWeight: 'bold',
        marginTop: pxToDp(24),
        marginLeft: pxToDp(16)
    },
    text1: {
        fontSize: pxToDp(16),
        color: '#333333',
        lineHeight: pxToDp(24),
        marginTop: pxToDp(16),
        marginLeft: pxToDp(16),
        marginRight: pxToDp(16)
    }
});