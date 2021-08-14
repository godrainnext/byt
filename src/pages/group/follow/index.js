import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, Image, Dimensions,View,TouchableOpacity } from "react-native";
let totalWidth=Dimensions.get('window').width;
const DATA = [
  {
    id: "1",
    userName: "书摘君",
    content:"内容：9",
    fans:"粉丝:996",
    articleTitle:"刘备携民过江是不是在作秀？？",
    article:"（文/不识字）《三国演义中》，最让人“受不了”的主公，肯定是刘备。携民渡江一节，明明曹军已经攻下荆州",
    like:"354点赞",
    discuss:"167讨论"
  },
  {
    id: "2",
    userName: "钟鸣聊科学",
    content:"内容：26",
    fans:"粉丝：969",
    articleTitle:"价值一百万的金丝楠木，为什么没人大规模种植？",
    article:"金丝楠木是我国传统名贵木材之一，材质坚硬、色泽橙黄，在阳光下观看有种金光闪闪的感觉。",
    like:"242点赞",
    discuss:"89讨论"
  },
  {
    id: "3",
    userName: "邮票妮妮",
    content:"内容：8",
    fans:"粉丝：294",
    articleTitle:"当韦斯安德森遇上辛普森！强烈的对称美学设计简直太酷了！",
    article:"卡通辛普森家族经过将近三十年的历久不衰，似乎是时候重新为他们布置一下空间了。",
    like:"220点赞",
    discuss:"43讨论"
  },
  {
    id: "1",
    userName: "书摘君",
    content:"内容：9",
    fans:"粉丝:996",
    articleTitle:"刘备携民过江是不是在作秀？？",
    article:"（文/不识字）《三国演义中》，最让人“受不了”的主公，肯定是刘备。携民渡江一节，明明曹军已经攻下荆州",
    like:"354点赞",
    discuss:"167讨论"
  },
  {
    id: "2",
    userName: "钟鸣聊科学",
    content:"内容：26",
    fans:"粉丝：969",
    articleTitle:"价值一百万的金丝楠木，为什么没人大规模种植？",
    article:"金丝楠木是我国传统名贵木材之一，材质坚硬、色泽橙黄，在阳光下观看有种金光闪闪的感觉。",
    like:"242点赞",
    discuss:"89讨论"
  },
  {
    id: "3",
    userName: "邮票妮妮",
    content:"内容：8",
    fans:"粉丝：294",
    articleTitle:"当韦斯安德森遇上辛普森！强烈的对称美学设计简直太酷了！",
    article:"卡通辛普森家族经过将近三十年的历久不衰，似乎是时候重新为他们布置一下空间了。",
    like:"220点赞",
    discuss:"43讨论"
  },
];

const Item = ({ item,index }) => (
  <View key={index} style={styles.listItem}>
    <Image source={require("../../../res/1.jpg")} style={styles.headPic}/>
    <View style={styles.rightBox}>
    <Text style={styles.userName}>{item.userName}</Text> 
    <Text style={styles.content}>{item.content}{item.fans}</Text>
    <View style={styles.Follow}>    
    <TouchableOpacity style={styles.follow}><Text>+关注</Text></TouchableOpacity>
    <View style={styles.bot}>
     <Text style={styles.articleTitle}>{item.articleTitle}</Text>
     <Text style={styles.article} numberOfLines={2}>{item.article}</Text>
     <Text style={styles.like}>{item.like} * {item.discuss}</Text>
     <Image source={require("../../../res/3.jpg")} style={styles.articlePic}/>
     </View>
   </View>
  </View>
 </View>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  listItem:{
    height:180,
    width:totalWidth,
    backgroundColor: '#FFFFFF',
    paddingLeft:15,
    paddingTop:15,
    paddingRight:15,
    flexDirection: 'row',
    marginTop:7
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  headPic:{
    height: 40,
    width:40,
    borderRadius:20,
    marginTop:3,
    marginLeft:-5
  },
  rightBox:{
    flex:1,
    marginLeft:10,
    height:100,
    width:"80%"
  },
  userName: {
    fontSize: 18,
  },
  content:{
    fontSize:12,
    color:"grey"
  },
  Follow:{
    marginTop:-30
  },
  follow:{
   marginLeft:260,
   backgroundColor:"red",
   marginEnd:10,
   borderRadius:20,
   justifyContent:"center",
   alignItems:'center'
  },
  bot:{
    marginLeft:0,
    height:95,
    marginTop:30,
    marginLeft:-45,
    backgroundColor:"lightgrey"
  },
  articleTitle:{
   fontSize:14,
   width:"80%",
   fontWeight:"bold",
  },
  article:{
    width:"80%",
    fontSize:13,
  },
  articlePic:{
    height: 60,
    width:60,
    marginTop:-90,
    marginBottom:23,
    marginLeft:300,
  },
  like:{
    flex:1,
    fontSize:9,
    marginTop:4
  }
});

export default App;