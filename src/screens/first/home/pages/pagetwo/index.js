import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Top from '../../../../../component/common/top';

export default class Example extends PureComponent {
  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
    this.renderDetail = this.renderDetail.bind(this);

    this.data = [
      {
        time: '1906年',
        title: '越剧诞生',
        description:
          '在十六铺“新化园”演出，因艺术粗糙简陋，观众寥寥无几。后续有3班艺人来上海但均告失败。在学习绍兴大班和京剧的表演技巧后，艺术有所提高。',
        imageUrl:
          'https://img1.baidu.com/it/u=2920598239,4218972616&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1906年',
        title: '第一副戏班',
        description:
          '1906年东王村演出后，高炳火等特请来师傅倪生标来掌班任派场师傅，由他讲戏分场，派角色，正式组成了“李世泉钱景松戏班”，成为越剧史上第一副戏班。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsznews.zjol.com.cn%2Fpic%2F0%2F10%2F11%2F64%2F10116433_416707.jpg&refer=http%3A%2F%2Fsznews.zjol.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630659324&t=16f452c2879007a46dcac398c7e8f4a7'
      },
      {
        time: '1910年',
        title: '第一次进入城市演出',
        description:
          '十六铺新舞台原址新化园，剧目为全本《蛟龙扇》。广告中标有“绍兴改良”四字。挂牌演员有：袁伯泉、袁伯松、俞岳法、袁陆奎、金娃桂、俞月花、袁文三、袁生莫、冯凤舞、俞逸相、支苏运、金荣奎、俞存喜等13人。',
        imageUrl:
          'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/ac345982b2b7d0a2a918f660cfef76094a369a7e.jpg'
      },
      {
        time: '1917年',
        title: '在上海演出',
        description:
          '1923年7月，嵊县籍商人王金水请男班艺人金荣水回乡办第一个女班，招收13岁以下的女孩二十余人。翌年1月14日，该女班在上海升平歌舞台演出，称“髦儿小歌班” ',
        imageUrl:
          'https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/109eb7ecc10ea93462d09f16.jpg'
      },
      {
        time: '1920年',
        title: '专职乐队的诞生',
        description:
          '以马潮水、王永春、卫梅朵、白玉梅领衔的男班，演出于升平歌舞台（在华兴戏园原址改建）。并从嵊县请来“戏客班”的3位乐师周小灿、周孝棠、周林芳，建立了越剧史上第一个专职乐队，演唱改为由丝弦伴奏，越剧音乐由此进入“丝弦正调”时期。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20181108%2Fa5423af944bd4cc2b995a5c6dc7a4650.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630659583&t=97bfae4591e8a852388226a9e97db6b0'
      },
      {
        time: '1921年',
        title: '“绍兴文戏”',
        description:
          '由费翠棠、岩焕亭等组班的男班，演出于第一戏院，是日，《新闻报》广告中有“由西门移此烦演绍兴文戏”一语，这是越剧首次有“绍兴文戏”之称。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180616%2F7e8653839ce542ed84d8ff0c28f93248.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630659756&t=a2a1f3e40bff000c0854e7bce2f9cb79'
      },
      {
        time: '1923年',
        title: '第一幅女子科班',
        description:
          '当时在上海经商的嵊县商人王金水从京戏髦儿戏中得到启发，请来男班著名大面金荣水任教戏师傅，回嵊县举办女子科班。其中有小生屠杏花，小旦赵瑞花、施银花，小丑施小彤，老生王香珠等。后来，这一天被定为女子越剧的诞生日。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa1.att.hudong.com%2F25%2F40%2F01300000016998118914042636825_s.jpg&refer=http%3A%2F%2Fa1.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630659845&t=126c7a1ab470ab51a4b8186053b52ad3'
      },
      {
        time: '1923年',
        title: '女小生',
        description: '诞生越剧第一位女小生屠杏花',
        imageUrl:
          'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/baike/w%3D268%3Bg%3D0/sign=018faac2be3eb13544c7b0bd9e25cfee/58ee3d6d55fbb2fbc293de384d4a20a44623dc64.jpg'
      },
      {
        time: '1924年',
        title: '女班的第一次演出',
        description:
          '越剧女班第一次在上海升平歌舞台演出，报纸广告上称“髦儿小歌班”，演员有施银花、赵瑞花、屠杏花等。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs15.sinaimg.cn%2Fmw690%2F004m3Faxzy7aETrHYoS6e%26690&refer=http%3A%2F%2Fs15.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630659916&t=933ed66d75d3ca69f6701351088b38b2'
      },
      {
        time: '1925年',
        title: '四工调',
        description:
          '解决了女孩子的唱腔问题，发挥了姑娘家嗓音的特长，成为女子越剧的基本腔，即以6—3定弦。《方玉娘祭塔·上宝塔来第一层》是“四工调”的第一首著名唱段。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fshp.qpic.cn%2Fqqvideo_ori%2F0%2Ff3033zhzgw5_496_280%2F0&refer=http%3A%2F%2Fshp.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630659965&t=66fe7fb3ed65cfe50eed83afdc89f861'
      },
      {
        time: '1925年',
        title: '“越剧”',
        description:
          '在小世界游乐场演出的“的笃班”，首次在《申报》广告上称为“越剧”，领衔演员为金雪芳。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic5.997788.com%2Fpic_search%2F00%2F13%2F48%2F87%2Fse13488762f.jpg&refer=http%3A%2F%2Fpic5.997788.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630660195&t=60b37b67da78a7ed747d5bc5ef460776'
      },
      {
        time: '1934年',
        title: '越剧唱片的诞生',
        description:
          '由男班艺人楼天红、小月红演唱的唱片《双金花·大堂认妻》（两面），由高亭唱片公司出版。',
        imageUrl:
          'https://img2.baidu.com/it/u=1758014330,582690843&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1936年',
        title: '女子越剧唱片的诞生',
        description:
          '由高亭唱片公司灌制，A面为王杏花的《志贞哭图》，B面为袁雪芬、钱妙花的《方玉娘哭塔》。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.997788.com%2Fpic_auction%2F00%2F14%2F63%2F44%2Fau14634413.jpg&refer=http%3A%2F%2Fpic1.997788.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630663510&t=b16150b246d4633570a3cae4f724edc7'
      },
      {
        time: '1938年',
        title: '向外国人介绍越剧',
        description:
          '9月11日英文《大陆报》在“本地表演栏”发表评论文章，将花木兰比做欧洲十字军时期的圣女贞德，同时发表姚水娟扮演花木兰的戎装剧照。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwsing.bssdl.kugou.com%2Fcd86bfda3abb91659d57e0dd5987bc35.jpg&refer=http%3A%2F%2Fwsing.bssdl.kugou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630663561&t=4b31dfecd49bbcda4c94e94c46f3deee'
      },
      {
        time: '1938年',
        title: '“改良文戏”',
        description:
          '樊篱编剧、姚水娟主演的《花木兰代父从军》引起强烈反响。其后4年间，上海编演的越剧新剧目超过400个，题材广泛，风格、样式多种多样。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F14%2F20200514193501_qsymd.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630663594&t=e054826b4c0affe9ae6660b4daf6e9c8'
      },
      {
        time: '1939年',
        title: '《越讴》',
        description:
          '7月1日出版的《越讴》杂志，这是第一种专门介绍、宣传越剧的刊物，由樊迪民主编，魏绍昌为主干，共出了4期。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fxhys-photo.oss.aliyuncs.com%2FArtWorkPic_Big%2F20150324020307563CMXF.jpg&refer=http%3A%2F%2Fxhys-photo.oss.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630663726&t=4efac64a798a1093b253fa0fe19552c3'
      },
      {
        time: '1939年',
        title: '时装戏',
        description:
          '7月22日，施银花、屠杏花领衔的“第一舞台”，在大中华剧场演出根据曹禺同名话剧改编的《雷雨》（自申曲移植）。',
        imageUrl:
          'https://img1.baidu.com/it/u=4030052572,744873958&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1941年',
        title: '《越剧日报》',
        description:
          '这是第一份越剧报，由茹伯勋主编，至1942年11月2日，共出300期。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.kfzimg.com%2F20120505%2F4522%2F752Gg77q5_b.jpg&refer=http%3A%2F%2Fwww.kfzimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630666124&t=3adb262b303bb1b0b1d11f2c8da34546'
      },
      {
        time: '1942年',
        title: '越剧迎来全面改革',
        description:
          '10月28日袁雪芬在大来剧场首演的《古庙冤魂》，这是第一次越剧改革的起始标志。当时袁雪芬出于对黑暗的社会、对越剧剧目格调低下的现状强烈不满，决心以话剧为榜样，吸收新文艺工作者参加，对越剧进行全面改革。改革初期陆续聘请的编导有：于吟（姚鲁丁）、洪钧（韩义）、蓝明（蓝流）、白涛、萧章、吕仲、南薇（刘松年）、徐进等，他们大多是年轻的业余话剧工作者和爱好者。他们把进行改革的越剧称为“新越剧”。从此越剧进入了一个向着综合艺术方向发展的新时期。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmemory.library.sh.cn%2Fsites%2Fdefault%2Ffiles%2Fresource%2F64000%2FM1141978066500.jpg&refer=http%3A%2F%2Fmemory.library.sh.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630665582&t=016010865cdaf09d30757a883f21fecf'
      },
      {
        time: '1943年',
        title: '尺调腔',
        description:
          '袁雪芬演《香妃》时，与琴师周宝财合作，创造出柔美哀怨的“尺调腔”，此后成为越剧的主腔至今。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsznews.zjol.com.cn%2Fpic%2F0%2F12%2F38%2F47%2F12384748_652536.jpg&refer=http%3A%2F%2Fsznews.zjol.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630665651&t=de3cb71fabdceb8fad31377173735229'
      },
      {
        time: '1945年',
        title: '弦下腔',
        description:
          '范瑞娟在与袁雪芬演出《梁祝哀史》时，与琴师周宝财合作，创造出柔美哀怨的“弦下腔”。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs14.sinaimg.cn%2Fmiddle%2F050072e0gc954abf8dbbd%26690&refer=http%3A%2F%2Fs14.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630665690&t=919b51a76cb5fa5d34c18ec54aefddfa'
      },
      {
        time: '1946年',
        title: '《祥林嫂》',
        description:
          '这是第一次把中国文化革命的主将鲁迅的名著搬上戏曲舞台，标志着越剧改革进入一个新的阶段。《祥林嫂》的演出，更促进了越剧剧目表现内容的积极变化，促进了越剧与进步文艺界、新闻界的密切联系，引起了中国共产党地下组织对越剧和整个地方戏曲的重视。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstc-new.8531.cn%2Fassets%2F20180802%2F1533181460162_5b627e14159bb86d6adc32cc.jpeg&refer=http%3A%2F%2Fstc-new.8531.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630665710&t=9ed2d263108219d20d40096c5a22fa88'
      },
      {
        time: '1946年',
        title: '中共中央领导人首次接触越剧',
        description:
          '来沪参加国共和谈的中共代表团团长周恩来，去明星大戏院观看雪声剧团演出的《凄凉辽宫月》。事后指示中共上海地下党要关心越剧界，引导越剧演员走向进步，并作了部署。',
        imageUrl:
          'https://bkimg.cdn.bcebos.com/pic/f9dcd100baa1cd11f83d7c98b912c8fcc2ce2dfa?x-bce-process=image/resize,m_lfit,w_440,limit_1/format,f_auto'
      },
      {
        time: '1947年',
        title: '《北地王》',
        description:
          '三国蜀汉刘禅统治末期，国势日衰。魏国军队进攻蜀国，蜀主刘禅听谯周提议决意降魏，刘禅之子北地王刘谌苦谏未果。刘谌回宫后，其妻殉国，刘谌杀死诸子后，赴先庙哭告先帝，之后自刎。',
        imageUrl:
          'https://bkimg.cdn.bcebos.com/pic/35a85edf8db1cb1308085803d054564e92584bb8?x-bce-process=image/resize,m_lfit,w_440,limit_1/format,f_auto'
      },
      {
        time: '1950年',
        title: '国营剧团的诞生',
        description:
          '2月15日成立的上海越剧实验剧团（4月12日改为华东越剧实验剧团）是第一个国营剧团。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs16.sinaimg.cn%2Fmiddle%2F050072e0g7a51e836ab4f%26690&refer=http%3A%2F%2Fs16.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630666816&t=e3d14d00044aa799125b438b4feea55c'
      },
      {
        time: '1950年',
        title: '越剧进中南海怀仁堂演出',
        description:
          '8月，东山越艺社应文化部艺术事业管理局之邀，赴北京演出，公演剧目有《梁山伯与祝英台》、《祝福》。周恩来总理观看演出后，邀请范瑞娟、傅全香、南薇、陈鹏到家作客，有田汉、许广平和孙维世姐妹俩作陪。其后，《梁山伯与祝英台》一剧，进中南海怀仁堂演出，这不仅是越剧第一次进入党和国家领导机关所在地——中南海怀仁堂演出，也是毛主席第一次观赏越剧。',
        imageUrl:
          'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/baike/s%3D220/sign=5614a826a8d3fd1f3209a538004f25ce/aa18972bd40735fa325275b19e510fb30f240813.jpg'
      },
      {
        time: '1952年',
        title: '越剧团首次参军',
        description:
          '玉兰剧团40余人离沪赴京参加中央人民政府军事委员会总政治部文工团，成为该文工团的越剧队。参军后首次排演的剧目为《梁山伯与祝英台》，接着排演《西厢记》参加全国戏曲汇演。',
        imageUrl:
          'https://img0.baidu.com/it/u=66526907,1091390932&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1952年',
        title: '招待外国贵宾',
        description:
          '《白蛇传》在北京怀仁堂招待蒙古共和国领导人泽登巴尔，毛主席陪同观看。',
        imageUrl:
          'https://img1.baidu.com/it/u=3136597533,3488592314&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1953年',
        title: '第一个实行男女合演的越剧团',
        description:
          '9月成立的浙江越剧团分为两个队，其中一队是女子越剧队，二队是男女合演越剧队。其前身为1949年12月成立的浙江省文工团第四队（越剧队）实行男女合演，排演了《王秀鸾》等现代剧。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.bdstatic.com%2F-4o3dSag_xI4khGkpoWK1HF6hhy%2Fbaike%2Fs%3D220%2Fsign%3Dc4aac170ad4bd11300cdb0306aafa488%2F29381f30e924b899a53e5c3b6e061d950a7bf6b6.jpg&refer=http%3A%2F%2Fgss0.bdstatic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630666489&t=7f4dc21dda7b8648c41d3f34a0e50158'
      },
      {
        time: '1954年',
        title: '《梁祝》在外国放映',
        description:
          '5月20日，周恩来总理在参加日内瓦会议期间，指示中国代表团新闻处放映彩色越剧艺术影片《梁山伯与祝英台》，招待各国新闻记者。这是新中国第一部在国外放映的戏曲艺术电影。当晚，影片在日内瓦湖滨旅馆放映，招待200多位新闻记者。21日，影片又在圣彼得广场戏院放映，招待日内瓦瑞士官员、驻日内瓦的各国使领馆人员和当地的社会名流。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimagev2.xmcdn.com%2Fgroup42%2FM0A%2FD0%2F4B%2FwKgJ81qov0rAfl7jAAF0eEqnC6M872.jpg%21op_type%3D5%26upload_type%3Dalbum%26device_type%3Dios%26name%3Dmobile_large%26strip%3D0%26quality%3D7&refer=http%3A%2F%2Fimagev2.xmcdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630666519&t=d360d176ff511d42c5854654c9f2fd2f'
      },
      {
        time: '1954年',
        title: '新中国第一部获国际奖项的戏曲艺术电影',
        description:
          '7月，彩色越剧艺术影片《梁山伯与祝英台》参加在捷克斯洛伐克卡罗维发利举行的第8届国际电影节，获音乐片奖。',
        imageUrl:
          'https://img1.baidu.com/it/u=849215937,3543487013&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1955年',
        title: '上海越剧院成立',
        description:
          '上海越剧院直属中央文化部领导，由上海市文化局代管（原红旗越剧团1960年成立于北京，系由原上海天鹅、光明、合众越剧团的部分人员和浙江湖州两个越剧团合并组成，属冶金部文工团。1963年归文化部领导，称红旗越剧团。1975年剧团被撤消，1978年恢复重建，1985年剧团建制撤销），1957年2月22日，文化部将上海越剧院划归上海市文化局领导。',
        imageUrl:
          'https://img0.baidu.com/it/u=3718077166,494544911&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1962年',
        title: '越剧之家',
        description:
          '在嵊县建立的“越剧之家”是最早建立的越剧演员培训和史料展览机构。1955年由马潮水、张云标、金荣水、袁雪芬、尹桂芳、姚水娟、屠杏花、竺水招、范瑞娟、傅全香、徐玉兰、王文娟、戚雅仙、尹树春、高剑琳、毛佩卿、张茵等63位越剧演员组成筹建委员会。袁雪芬为主任，姚水娟、竺水招、马潮水、冯农为副主任。得到全国各地200多个越剧团的响应，义演集资8万余元。',
        imageUrl:
          'https://bkimg.cdn.bcebos.com/pic/3b292df5e0fe99253c4d454634a85edf8db17166?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        time: '1964年',
        title: '《舞台姐妹》',
        description:
          '上海越剧院编剧徐进参与编写，演员曹银娣、沈凤娟等参加拍摄的，反映越剧艺人生活和斗争的彩色故事影片《舞台姐妹》，在上海电影制片厂开拍，这是第一部以越剧艺人为题材的电影。',
        imageUrl:
          'https://bkimg.cdn.bcebos.com/pic/f636afc379310a55ec1b645ebb4543a982261058?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'
      },
      {
        time: '1965年',
        title: '降B调',
        description:
          '10月，在大型现代剧《火椰村》排演中，由袁雪芬与琴师周柏龄共同创造。',
        imageUrl:
          'https://bkimg.cdn.bcebos.com/pic/024f78f0f736afc3957f00c8b119ebc4b745122f?x-bce-process=image/resize,m_lfit,w_440,limit_1/format,f_auto'
      },
      {
        time: '1977年',
        title: '《报童之歌》',
        description:
          '突破戏曲舞台上表现领袖人物的禁区，首次在越剧舞台上竖立周恩来的艺术形象，但剧中人物周恩来只念不唱。',
        imageUrl:
          'https://img2.baidu.com/it/u=2960913036,1899938601&fm=15&fmt=auto&gp=0.jpg'
      },
      {
        time: '1978年',
        title: '《三月春潮》',
        description:
          '12月21日上海越剧团（即上海越剧院）在徐汇剧场上演《三月春潮》一剧中，刘觉扮演的周恩来，不仅念白上模仿周恩来本人的语音声调，还用越剧曲调让人物当场演唱，突破了领袖人物不宜唱的清规戒律。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.kfzimg.com%2FG07%2FM00%2FAD%2FA7%2Fq4YBAFwvDvuAaOr4AANrlJsr5U4342_b.jpg&refer=http%3A%2F%2Fwww.kfzimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630666988&t=902d8843562872f53dfa1a4c3b70de80'
      },
      {
        time: '1978年',
        title: '第一部彩色宽银幕越剧艺术影片',
        description:
          '由上海越剧团袁雪芬、金采风、史济华、徐瑞发等主演的，香港凤凰影业公司拍摄，罗君雄、岑范导演的《祥林嫂》是第一部彩色宽银幕越剧艺术影片。',
        imageUrl:
          'https://img1.baidu.com/it/u=2188428421,4013831242&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1989年',
        title: '金唱片奖',
        description:
          '1989年10月13日在北京举行的由中国唱片总公司首次颁发的“金唱片奖”仪式上。袁雪芬演唱的《祥林嫂》唱片，范瑞娟、傅全香演唱的《梁山伯与祝英台》唱片，徐玉兰、王文娟演唱的《红楼梦》唱片，荣获首届“金唱片奖”。',
        imageUrl:
          'https://img2.baidu.com/it/u=172996557,3052759472&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1990年',
        title: '全国首家专业戏曲博物馆',
        description: '10月18日在浙江省嵊县越剧博物馆正式开馆。',
        imageUrl: 'http://img2.zjolcdn.com/pic/0/11/16/54/11165443_941434.jpg'
      },
      {
        time: '1992年',
        title: '孔三传奖',
        description:
          '越剧《红楼梦》的作曲顾振遐、高鸣，获优秀奖。刘如曾荣获该项奖项最高奖——“特别奖”，以表彰其在越剧（《祥林嫂》）及京剧、沪剧等剧种音乐创作和改革上作出的特殊贡献。',
        imageUrl:
          'https://img1.baidu.com/it/u=165683972,2074616864&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1993年',
        title: '浙江小百花越剧基金会',
        description:
          '由茅威涛任会长，并由40余名社会知名人士，担任顾问和理事。浙江小百花越剧基金会是由海内外热心振兴越剧艺术的社会团体，单位和个人自愿捐赠资金，并经中国人民银行浙江省分行批准设立的民间非营利性社会组织，是社会团体的法人。',
        imageUrl:
          'https://bkimg.cdn.bcebos.com/pic/a8773912b31bb051e94a75d5307adab44bede0e5?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        time: '1997年',
        title: '《越剧舞台美术》',
        description:
          '第一次全面系统地展示越剧舞台美术成果。该画册由袁雪芬任总策划，主编苏石风，副主编孙志贤、杨楚之，英译杜定宇。书的开本为8开，印数3000册。这是一部全面系统地展示越剧舞台美术成果（上海）的大型画册，共有八百多幅图片，文字部分全部用中、英文对照，八开本。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.kfzimg.com%2FG06%2FM00%2FD1%2F79%2Fp4YBAFt5K0eAO8wpAAJ9dJ2M6Lg847_b.jpg&refer=http%3A%2F%2Fwww.kfzimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630667206&t=12082ad2f6b56ab3ad1d48d0aedee271'
      },
      {
        time: '2003年',
        title: '“表演艺术成就奖”',
        description:
          '上海越剧院名誉院长袁雪芬荣获“表演艺术成就奖”。文化部的评价是“著名越剧表演艺术家袁雪芬在表演上，博采众长，将话剧、电影重视刻画人物性格和内心活动的写实主义表演特点，与昆曲载歌载舞、重视形体动作美化的长处吸收到越剧中，加以融化、创新，形成了写意与写实相结合的表演形式，更是开创一代先河，影响广泛。”',
        imageUrl:
          'https://img1.baidu.com/it/u=1844694310,3908600857&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '2004年',
        title: '《中国越剧大考》',
        description:
          '以多媒体光盘形式记录越剧发展史，由浙江文艺音像出版社出版。',
        imageUrl:
          'https://img0.baidu.com/it/u=2157571364,282325690&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '2005年',
        title: '《家》',
        description:
          '上海越剧院一团演出的现代戏《家》获得上海市委宣传部颁发的“上海文艺创作优品奖”。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupfile.cuepa.cn%2Fnewspic%2F729924%2Fs_e03cd33ea1c27c9f4b29cb54a892eca1470688.jpg&refer=http%3A%2F%2Fupfile.cuepa.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630667280&t=cf943344ef76f03c1e2c668961a1638c'
      },
      {
        time: '2005年',
        title: '《玉卿嫂》',
        description:
          '上海越剧院与上海现代人剧社联合制作的越剧现代戏《玉卿嫂》在美琪大戏院首演，编剧曹路生，导演徐俊，主演方亚芬、齐春雷、许杰、周燕儿、陈湜等。',
        imageUrl:
          'https://img1.baidu.com/it/u=3144003804,3977330879&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '2004年',
        title: '《虞美人》',
        description:
          '上海越剧院新编古装戏《虞美人》在上海大剧院首演，编剧薛允璜、薛龙彪，导演杨小青，艺术顾问京剧表演艺术家梅葆玖，主演单仰萍、吴凤花（特邀）、董柯娣（特邀）。',
        imageUrl:
          'https://img1.baidu.com/it/u=1133850731,3247708251&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '2006年',
        title: '国家级非物质文化遗产名录',
        description:
          '5月20日，经国务院批准，越剧被列入第一批国家级非物质文化遗产名录。',
        imageUrl:
          'https://bkimg.cdn.bcebos.com/pic/77094b36acaf2edd81963abe821001e939019305?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'
      },
      {
        time: '2006年',
        title: '首届中国越剧艺术节',
        description:
          '10月28日，首届中国越剧艺术节闭幕式在绍兴大剧院举行，上海越剧院一团《玉卿嫂》、《赵氏孤儿》获剧目金奖。',
        imageUrl:
          'https://img2.baidu.com/it/u=3109235589,1419724632&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '2007年',
        title: '新版越剧电影《红楼梦》',
        description:
          '11月20日，由中央新闻纪录电影制片厂拍摄、出品的新版越剧电影《红楼梦》于上海影城首映，其中以民乐伴奏的“徐王流派”版本《红楼梦》由郑国凤、王志萍领衔主演，以交响乐伴奏的“尹袁流派”版本《红楼梦》由赵志刚、方亚芬领衔主演，陈薪伊导演。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs11.sinaimg.cn%2Fbmiddle%2F4d7a031943f49c58e994a&refer=http%3A%2F%2Fs11.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630667498&t=ab0ed4831d89ed0e140796c7e342a9fe'
      },
      {
        time: '2008年',
        title: '《韩非子》',
        description:
          '上海越剧院新编古装剧《韩非子》于逸夫舞台首演，该剧由姚金成编剧，卢昂执导，钱惠丽和方亚芬分饰韩非子和宁阳公主。该剧的创排得到上海市文化发展基金会的资助，并获得上海市2008年新剧目展演优秀剧目奖。',
        imageUrl:
          'https://bkimg.cdn.bcebos.com/pic/7aec54e736d12f2edfd8961940c2d562843568ed?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        time: '2009年',
        title: '参加国家文化部文艺演出',
        description:
          '上海越剧院《红楼梦》参加国家文化部“向祖国汇报——庆祝中华人民共和国成立60周年”文艺演出，在国家大剧院戏剧场连演4场。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.t3.com.cn%2F05%2F38%2F20150120120715229_2045955804.jpg&refer=http%3A%2F%2Fimg2.t3.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630667565&t=dff4b99f4516938c44199dbcd5d66ff0'
      },
      {
        time: '2009年',
        title: '《越剧艺术论》',
        description:
          '由老艺术家袁雪芬倡议并主持，上海越剧院组织编撰，高义龙任主编的，中国戏剧出版社出版的《越剧艺术论》是第一部从理论上总结越剧的书籍。该书分为基因论、风格论、流派论、人才论、欣赏论、比较论、剧作论、导演论、表演论、音乐论、舞美论、音韵论等，对越剧进行了全面论述。该书的出版使越剧剧种第一次有了自己的理论基础。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.kfzimg.com%2FG06%2FM00%2F3F%2F5B%2Fp4YBAFt1eNGARPcVAAM0TNEKDhw408_b.jpg&refer=http%3A%2F%2Fwww.kfzimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630667593&t=2b56ef6cffda7a6afa02a779de6c846d'
      },
      {
        time: '2010年',
        title: '《画皮》',
        description:
          '上海越剧院新编青春情感越剧《画皮》在逸夫舞台首演。该剧取材于蒲松龄《聊斋志异》，由张勇、蒋东敏编剧，张平导演，上海越剧院一团（男女合演团）青年演员陈湜、齐春雷、徐标新、邓华蔚主演。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs8.sinaimg.cn%2Fmiddle%2F5d3a9ce1x733f2e755337%26690&refer=http%3A%2F%2Fs8.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630667612&t=700f512770d5fe991c4d42d545d52818'
      },
      {
        time: '2015年',
        title: '甲子回眸',
        description:
          '上海越剧院建院60周年，7月，上海越剧院首次举办了全国规模的“越剧嘉年华”，汇集全国各地12家越剧院团的32台剧目，采用市场化运作，最终收获260万元的票房。加上此前《甄嬛》20场驻场演出收获220万元票房，以及3场“明星版”越剧《舞台姐妹情》收获160万元票房，上海越剧市场潜力引发了业内关注思考。为此，由上海越剧院主办，全国越剧界院团长在上周末齐聚上海，展开了一次“高峰论坛”，众多专家也加入了这一“甲子回眸——越剧生存现状与前景发展研讨会”。研讨会多聚焦于越剧在当下的市场和命运，也探讨了如何让全国越剧共同合作，推进剧种发展并逐步完善演出市场。',
        imageUrl:
          'http://n.sinaimg.cn/transform/20150817/nxHg-fxfxrav2548387.jpg'
      },
      {
        time: '2018年',
        title: '越剧小镇',
        description:
          '12月30日，位于浙江省嵊州市的国内第一个以戏曲剧种命名的特色小镇——越剧小镇，历经两年规划与紧锣密鼓地建设，迎来开园试运营。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgcdn.yicai.com%2Fuppics%2Fslides%2F2018%2F03%2F636580223611757400.jpg&refer=http%3A%2F%2Fimgcdn.yicai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630667760&t=dac738993d65e9cc53c251948d6044d9'
      },
      {
        time: '2019年',
        title: '二次元越剧',
        description:
          '著名越剧表演艺术家茅威涛与腾讯游戏王者荣耀合作，收徒游戏角色上官婉儿，推动传统文化产业破壁，创新舞台艺术与数字科技的融合。',
        imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F355%2Fw672h483%2F20191108%2F8e96-ihyxcrq8364648.png&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630667790&t=b8321b406ea8232dbc0164f7ac8f845e'
      }
    ];
    this.state = { selected: null };
  }

  onEventPress(data) {
    this.setState({ selected: data });
  }

  renderSelected() {}

  renderDetail(rowData) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{ uri: rowData.imageUrl }} style={styles.image} />
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      );

    return (
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
    );
  }

  render() {
    console.log(this.props.route);
    return (
      <View style={styles.container}>
        {this.renderSelected()}
        <Top icon1="arrow-back" title="俯瞰百年" />
        <Timeline
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor="rgba(0,0,0,0)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{ minWidth: 52, marginTop: 8 }}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#468cd3',
            color: 'white',
            padding: 5,
            borderRadius: 13
          }}
          descriptionStyle={{ color: 'gray' }}
          options={{
            style: { paddingTop: 5 }
          }}
          innerCircle={'icon'}
          renderDetail={this.renderDetail}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});
