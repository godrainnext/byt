import React, { PureComponent } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';

export default class xieyi extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top title="隐私政策" icon1="arrow-back" />
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
                                lineHeight: pxToDp(30)
                            }}
                        >
                            更新日期:2021年8月30日
                        </Text>
                    </View>
                    {/* 中部 */}
                    <View>
                        <Text style={styles.title1}>导言</Text>
                        <Text style={styles.text1}>
                            以下隐私协议是百越平台对用户隐私保护的许诺，请您务必仔细阅读本协议，以了解我们如何管理您个人信息的情况。本隐私协议的全部条款属于《百越平台用户协议》的重要组成部分之一。
                        </Text>
                        <View>
                            <Text style={styles.title1}>一、个人信息的收集</Text>
                            <Text style={styles.text1}>
                                1.1
                                您在注册账户时填写的信息：手机号码、电子邮箱地址。您只有提供真实准确的手机号码或电子邮箱地址，才能成功注册百越平台账号并使用产品或服务的核心功能。
                                {'\n'}
                                1.2您在使用第三方登陆时，第三方向我们披露的信息。例如您在使用微信登录时，我们会获得您的微信信息，包括：用户名、头像等。对于这部分内容，请您仔细阅读第三方合作伙伴服务的用户协议或隐私协议。如果您拒绝授权此类信息，则您将无法使用第三方平台的账号登陆我们平台，但不影响我们提供的其他产品和服务的正常使用。
                                {'\n'}
                                1.3
                                您在编辑个人信息时填写的信息：头像、昵称等。
                                {'\n'}
                                1.4
                                您在实名认证时填写的信息：身份证、护照及其他身份证件信息。
                                {'\n'}
                                1.5
                                您在使用产品和/或服务过程中产生的信息： {'\n'}
                                （1）阅读听书：阅读记录、文章/作者收藏、书单创建、应用启动关闭信息、应用列表信息、设备型号、设备品牌、操作系统和应用程序版本及来源渠道、网络类型、登录IP地址*、日志信息*（操作日志、服务日志、开发日志、闪退日志）；{'\n'}
                                （2）发表评论：评论内容；{'\n'}
                                （3）搜索服务：搜索关键词、浏览记录；{'\n'}
                                （4）问题反馈：手机号码、QQ号、微信号、登录IP地址、操作记录；{'\n'}
                                （5）参加活动：姓名、手机号码、收货地址。{'\n'}
                                1.6
                                根据用户行为及产品特点，长佩平台可能访问用户手机上的以下内容：{'\n'}
                                （1）为实现用户上传图片、头像、小说封面等功能，可能需要使用摄像头或相机权限；{'\n'}
                                （2）为允许用户保存图片，可能需要使用相册权限；{'\n'}
                                （3）为实现软件正常运行，需要使用网络权限。
                            </Text>
                        </View>
                    </View>
                    {/* 底部 */}
                    <View>
                        <Text style={styles.title1}>二、个人信息的使用</Text>
                        <Text style={styles.text1}>
                            为了给您提供更准确、更有针对性的服务，本网站可能会以如下方式，使用您提交的个人信息。但本网站会以高度的勤勉义务对待这些信息，在未征得您许可的情况下，不会将这些信息对外公开或向第三方提供。
                            {'\n'}
                            1.为您提供阅读服务。{'\n'}
                            2.为您提供安全保障。{'\n'}
                            3.满足您的个性化需求。{'\n'}
                            4.优化产品服务。{'\n'}
                            5.进行软件认证或软件升级。{'\n'}
                            6.让您参与有关我们产品和服务的调查。
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title1}>三、个人信息的管理</Text>
                        <Text style={styles.text1}>
                            3.1
                            您可以访问、更正/修改、删除您的个人信息，也可以撤回之前作出的对您个人信息的同意，同时您也可以注销您的账号。如您在操作过程中有疑惑或困难的可以通过文末的方式联系我们来进行控制，我们会及时为您处理。
                            {'\n'}
                            3.2 您需理解，当您撤回授权后，我们无法继续为您提供撤回的授权所对应的特定功能和或服务。但您撤回授权的决定,不会影响此前基于您的授权而开展的个人信息处理。{'\n'}
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
        lineHeight: pxToDp(30),
        marginTop: pxToDp(16),
        marginLeft: pxToDp(16),
        marginRight: pxToDp(16)
    }
});
