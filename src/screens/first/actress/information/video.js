import React, { PureComponent } from "react";
import { View, Text,Image,ScrollView, TouchableOpacity } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends PureComponent {
    state={
        plz:[{id:1,name:'名家名段：越剧《山河恋·送信》现在我和你口信念-表演：王君安 方亚芬'},
        {id:2,name:'名家名段：越剧《山河恋·送信》现在我和你口信念-表演：王君安 方亚芬'},
        {id:3,name:'名家名段：越剧《山河恋·送信》现在我和你口信念-表演：王君安 方亚芬'},
        {id:4,name:'名家名段：越剧《山河恋·送信》现在我和你口信念-表演：王君安 方亚芬'},
        
        ]
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#E2F4FE'}}>
        {this.state.plz.map((item,id)=>(
            <View style={{margin:pxToDp(10)}}>
                <TouchableOpacity>
                <Image style={{height:pxToDp(170),width:pxToDp(355),borderRadius:pxToDp(10)}} source={require('../../../../res/performer/12.jpg')} />
                <Text style={{fontSize:pxToDp(18)}}>名家名段：越剧《山河恋·送信》现在我和你口信念-表演：王君安 方亚芬</Text>
           </TouchableOpacity>
            </View>
   )) }
            </ScrollView>
        );
    }
}
export default Index;