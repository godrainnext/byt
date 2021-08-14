import React,{ PureComponent } from 'react'
import { View,Text,Image, TouchableOpacity,FlatList  } from 'react-native'
import OrderItem from './component/listItem'
class index extends  PureComponent{

state={
    shop:[
       {name:'胶囊工作室新品全棉圆领T恤',size:'黑色XL[180-185]',price:'86',shopname:'胶囊1工作室'},
       {name:'胶囊工作室新品全棉圆领T恤',size:'黑色XL[180-185]',price:'86',shopname:'胶囊2工作室'},
       {name:'胶囊工作室新品全棉圆领T恤',size:'黑色XL[180-185]',price:'86',shopname:'胶囊3工作室'}
    ]
}

    _renderItem=({item})=>{
        return(
        <OrderItem
            name={item.name}
            size={item.size}
            price={item.price}
            shopname={item.shopname}
        />)
    }
    render(){
        return(
           <View>
               <FlatList

                data={this.state.shop}
                renderItem={this._renderItem}
                />
           </View>
             
        )
    }
}
export default index