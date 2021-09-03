import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Easing, Animated } from 'react-native';
import Tabbar from './tabbar';
import * as Screens from './screens';

const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="NewTimeLine" component={Screens.NewTimeLine} />
        <Stack.Screen name="BootPage" component={Screens.BootPage} />
        <Stack.Screen name="GiftedChat" component={Screens.GiftedChat} />
        <Stack.Screen name="Map" component={Screens.Map} />
        <Stack.Screen name="MapToGo" component={Screens.MapToGo} />


        {/*引导页 */}
        <Stack.Screen name="Tabbar" component={Tabbar} />
        {/*登录 */}
        <Stack.Screen name="Login" component={Screens.Login} />
        {/*首页 */}
        <Stack.Screen name="Home" component={Screens.Home} />
        {/**唱段的首页 */}
        <Stack.Screen name="Opera" component={Screens.Opera} />
        {/**唱段推荐 */}
        <Stack.Screen name="Optuijian" component={Screens.Optuijian} />
        {/**名角个人唱段视频 */}
        <Stack.Screen name="Opperson" component={Screens.Opperson} />
        {/**流派唱段视频 */}
        <Stack.Screen name="Opgroup" component={Screens.Opgroup} />
        {/* 流派传奇 */}
        <Stack.Screen name="PageOne" component={Screens.PageOne} />
        {/* 俯瞰百年 */}
        <Stack.Screen name="PageTwo" component={Screens.PageTwo} />
        {/* 名角风采 */}
        <Stack.Screen name="PageThree" component={Screens.PageThree} />
        {/* 俯瞰百年文章 */}
        <Stack.Screen name="Pagefive" component={Screens.Pagefive} />
        {/**已改字体大小和颜色 */}
        <Stack.Screen name="My" component={Screens.My} />
        {/*设置 */}
        <Stack.Screen name="Set" component={Screens.Set} />
        {/*具体的设置内容 关于我们、推送、意见、隐私 */}
        <Stack.Screen name="Women" component={Screens.Women} />
        <Stack.Screen name="Tuisong" component={Screens.Tuisong} />
        <Stack.Screen name="Yijian" component={Screens.Yijian} />
        <Stack.Screen name="Yinsi" component={Screens.Yinsi} />
        <Stack.Screen name="saveMusic" component={Screens.SaveMusic} />
        {/**SaveMusic 历史浏览*/}
        <Stack.Screen name="History" component={Screens.History} />
        {/** 积分商城*/}
        <Stack.Screen name="Jifenshop" component={Screens.Jifenshop} />
        {/** 总订单页面*/}
        <Stack.Screen name="pointshop" component={Screens.pointshop} />
        {/* 积分商城 */}
        <Stack.Screen name="Order" component={Screens.Order} />
        {/** 订单信息页*/}
        <Stack.Screen name="Myorder" component={Screens.Myorder} />
        {/**地址 */}
        <Stack.Screen name="address" component={Screens.address} />
        {/**增加新地址 */}
        <Stack.Screen name="newAddress" component={Screens.newAddress} />
        {/**全部订单 */}
        <Stack.Screen name="leaseorder" component={Screens.leaseorder} />
        {/**全部订单 */}
        <Stack.Screen name="paySuccess" component={Screens.paySuccess} />
        {/* 支付成功页 */}
        <Stack.Screen name="Orderone" component={Screens.Orderone} />
        {/**退款订单页面 */}
        <Stack.Screen name="Refund" component={Screens.Refund} />
        {/**设置首页面 */}
        <Stack.Screen name="Myhome" component={Screens.Myhome} />
        <Stack.Screen name="OthersHome" component={Screens.OthersHome} />
        {/**更改资料页面 */}
        <Stack.Screen name="Ziliao" component={Screens.Ziliao} />
        {/**昵称页面 */}
        <Stack.Screen name="Nickname" component={Screens.Nickname} />
        {/** 个性签名页面*/}
        <Stack.Screen name="Signature" component={Screens.Singnature} />
        {/**订单确认页面*/}
        <Stack.Screen name="orderdetails" component={Screens.orderdetails} />
        {/* 积分订单 */}
        <Stack.Screen name="Jifenorder" component={Screens.Jifenorder} />
        {/**租赁订单确认*/}
        <Stack.Screen name="leasedetails" component={Screens.leasedetails} />
        {/**关注列表 */}
        <Stack.Screen name="Follow" component={Screens.Follow} />
        {/**点赞 */}
        <Stack.Screen name="Like" component={Screens.Like} />
        {/** */}
        <Stack.Screen name="Fan" component={Screens.Fan} />
        {/**粉丝 */}
        <Stack.Screen name="Collection" component={Screens.Collection} />
        {/**个人中心动态详情 */}
        <Stack.Screen name="Indongtai" component={Screens.Indongtai} />
        {/*商城 */}
        <Stack.Screen name="Shop" component={Screens.Shop} />
        {/*商品 */}
        <Stack.Screen name="Good" component={Screens.GoodsList} />
        {/*租赁商城页 */}
        <Stack.Screen name="Zulin" component={Screens.Zulin} />
        {/*周边商城页 */}
        <Stack.Screen name="Zhoubian" component={Screens.Zhoubian} />
        {/* 票务系统 */}
        <Stack.Screen name="ticket" component={Screens.ticket} />
        {/* 票务系统详情页 */}
        <Stack.Screen name="ticketdetail" component={Screens.ticketdetail} />
        {/* 选座位 */}
        <Stack.Screen name="PickSeat" component={Screens.PickSeat} />
        {/* 确认订单 */}
        <Stack.Screen name="ConfirmTicket" component={Screens.ConfirmTicket} />
        {/* 我的剧票 */}
        <Stack.Screen name="MyTicket" component={Screens.MyTicket} />
        {/**增加新地址 */}
        <Stack.Screen name="Lease" component={Screens.Lease} />
        {/*游玩 */}
        <Stack.Screen name="Play" component={Screens.Play} />
        {/*练唱 */}
        <Stack.Screen name="Study" component={Screens.Study} />
        {/*练唱专辑详情 */}
        <Stack.Screen name="Details" component={Screens.Details} />
        {/*练唱页面*/}
        <Stack.Screen name="Sing" component={Screens.Sing} />
        {/* 进入练唱页面 */}
        {<Stack.Screen name="Singbefore" component={Screens.Singbefore} />}
        {/*双人剧本 */}
        <Stack.Screen name="Act" component={Screens.Act} />
        {/*AI换衣  */}
        <Stack.Screen name="Change" component={Screens.Change} />
        {/*Vr */}
        <Stack.Screen name="VR" component={Screens.VR} />
        {/**教程页面 */}
        <Stack.Screen name="relatedImg" component={Screens.relatedImg} />
        {/* 相关图片 */}
        <Stack.Screen name="relatedBook" component={Screens.relatedBook} />
        {/* 相关书籍 */}
        <Stack.Screen name="bookDetail" component={Screens.bookDetail} />
        {/* 相关书籍详情 */}
        <Stack.Screen name="Course" component={Screens.Course} />
        {/**越剧基本功页面 */}
        <Stack.Screen name="Timemap" component={Screens.Timemap} />
        {/* 时空地图 */}
        <Stack.Screen name="Timeline" component={Screens.Timeline} />
        {/* 时间轴 */}
        <Stack.Screen name="Basic" component={Screens.Basic} />
        {/**越剧大师教学页面 */}
        <Stack.Screen name="Master" component={Screens.Master} />
        {/*论坛 */}
        <Stack.Screen name="Talk" component={Screens.Talk} />
        {/*申请直播*/}
        <Stack.Screen name="Apply" component={Screens.Apply} />
        {/*直播协议*/}
        <Stack.Screen name="Xieyi" component={Screens.Xieyi} />
        {/*创作剧本 */}
        <Stack.Screen name="Create" component={Screens.Create} />
        {/* 论坛 */}
        <Stack.Screen name="Forum" component={Screens.Forum} />
        {/**论坛帖子详情 */}
        <Stack.Screen name="Inluntan" component={Screens.Inluntan} />
        {/**论坛帖子详情 */}
        <Stack.Screen name="Topic" component={Screens.Topic} />
        {/*直播间 */}
        <Stack.Screen name="SeeZhiBo" component={Screens.SeeZhiBo} />
        {/* 开播 */}
        <Stack.Screen name="KaiBo" component={Screens.KaiBo} />
        {/* 开房 */}
        <Stack.Screen name="KaiFang" component={Screens.KaiFang} />
        {/* 进房间 */}
        <Stack.Screen name="SeeFang" component={Screens.SeeFang} />
        {/**剧本页 */}
        <Stack.Screen name="Drama" component={Screens.Drama} />
        <Stack.Screen name="Drama1" component={Screens.Drama1} />
        <Stack.Screen name="Drama2" component={Screens.Drama2} />
        <Stack.Screen name="Drama3" component={Screens.Drama3} />
        <Stack.Screen name="Drama4" component={Screens.Drama4} />
        <Stack.Screen name="Drama5" component={Screens.Drama5} />
        <Stack.Screen name="Drama6" component={Screens.Drama6} />
        <Stack.Screen name="Drama7" component={Screens.Drama7} />
        <Stack.Screen name="Drama8" component={Screens.Drama8} />
        <Stack.Screen name="Drama9" component={Screens.Drama9} />
        <Stack.Screen name="Drama10" component={Screens.Drama10} />
        <Stack.Screen name="Drama11" component={Screens.Drama11} />
        <Stack.Screen name="Drama12" component={Screens.Drama12} />
        <Stack.Screen name="Drama13" component={Screens.Drama13} />
        <Stack.Screen name="Drama14" component={Screens.Drama14} />
        <Stack.Screen name="Drama15" component={Screens.Drama15} />
        <Stack.Screen name="Drama16" component={Screens.Drama16} />
        <Stack.Screen name="Drama17" component={Screens.Drama17} />
        {/**剧本库页面 */}
        <Stack.Screen name="Scriptlibrary" component={Screens.Scriptlibrary} />
        {/**名角个人页 */}
        <Stack.Screen name="Wangwenjuan" component={Screens.Wangwenjuan} />
        <Stack.Screen name="Bichunfang" component={Screens.Bichunfang} />
        <Stack.Screen name="Fanruijuan" component={Screens.Fanruijuan} />
        <Stack.Screen name="Jincaifeng" component={Screens.Jincaifeng} />
        <Stack.Screen name="Lujinhua" component={Screens.Lujinhua} />
        <Stack.Screen name="Lvruiying" component={Screens.Lvruiying} />
        <Stack.Screen name="Qiyaxian" component={Screens.Qiyaxian} />
        <Stack.Screen name="Xuyulan" component={Screens.Xuyulan} />
        <Stack.Screen name="Yuanxuefen" component={Screens.Yuanxuefen} />
        <Stack.Screen name="Zhangyunxia" component={Screens.Zhangyunxia} />
        {/**专辑页面 */}
        <Stack.Screen name="Album" component={Screens.Album} />
        {/**歌曲播放界面 */}
        <Stack.Screen name="MusicPlayer" component={Screens.MusicPlayer} />
        {/*流派页 */}
        <Stack.Screen name="School1" component={Screens.School1} />
        <Stack.Screen name="School2" component={Screens.School2} />
        <Stack.Screen name="School3" component={Screens.School3} />
        <Stack.Screen name="School4" component={Screens.School4} />
        <Stack.Screen name="School5" component={Screens.School5} />
        <Stack.Screen name="School6" component={Screens.School6} />
        <Stack.Screen name="School7" component={Screens.School7} />
        <Stack.Screen name="School8" component={Screens.School8} />
        <Stack.Screen name="School9" component={Screens.School9} />
        <Stack.Screen name="School10" component={Screens.School10} />
        <Stack.Screen name="School11" component={Screens.School11} />
        <Stack.Screen name="School12" component={Screens.School12} />
        <Stack.Screen name="School13" component={Screens.School13} />
        {/* 剧本1详情 */}
        <Stack.Screen name="Screenpaly" component={Screens.Screenpaly} />
        {/* 剧本2详情 */}
        <Stack.Screen name="Screenpaly2" component={Screens.Screenpaly2} />
        {/* 剧本3详情 */}
        <Stack.Screen name="Screenpaly3" component={Screens.Screenpaly3} />
        {/* 剧本4详情 */}
        <Stack.Screen name="Screenpaly4" component={Screens.Screenpaly4} />
        {/* 剧本5详情 */}
        <Stack.Screen name="Screenpaly5" component={Screens.Screenpaly5} />
        {/* 剧本6详情 */}
        <Stack.Screen name="Screenpaly6" component={Screens.Screenpaly6} />
        {/* 剧本7详情 */}
        <Stack.Screen name="Screenpaly7" component={Screens.Screenpaly7} />
        {/* 剧本8详情 */}
        <Stack.Screen name="Screenpaly8" component={Screens.Screenpaly8} />
        {/* 剧本9详情 */}
        <Stack.Screen name="Screenpaly9" component={Screens.Screenpaly9} />
        {/*俯瞰百年卡片*/}
        <Stack.Screen name="Card" component={Screens.Card} />
        {/*视频播放页*/}
        <Stack.Screen name="Video" component={Screens.Video} />
        {/*举报页*/}
        <Stack.Screen name="Jubao" component={Screens.Jubao} />
        <Stack.Screen name="Test1" component={Screens.Test1} />
        <Stack.Screen name="Test2" component={Screens.Test2} />
        <Stack.Screen name="Test3" component={Screens.Test3} />
        <Stack.Screen name="Test4" component={Screens.Test4} />
        <Stack.Screen name="Test6" component={Screens.Test6} />
        {/**波纹按钮 */}
        <Stack.Screen name="WaterButton" component={Screens.WaterButton} />
        {/*剧本热度榜单 */}
        <Stack.Screen name="HotList" component={Screens.HotList} />
        <Stack.Screen name="Testtt" component={Screens.Testtt} />
        <Stack.Screen name="ToSing" component={Screens.ToSing} />
        <Stack.Screen name="RegInfo" component={Screens.RegInfo} />
        <Stack.Screen name="SingOver" component={Screens.SingOver} />
        <Stack.Screen name="SingSub" component={Screens.SingSub} />
        <Stack.Screen name="AddMoment" component={Screens.AddMoment} />
        {/**积分明细 */}
        <Stack.Screen name="JifenMingxi" component={Screens.JifenMingxi} />
        <Stack.Screen name="Search" component={Screens.Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
