import React,{ PureComponent } from "react";
import { View,Text, ImagePropTypes} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pxToDp } from "../../utils/styleKits";
import { Button} from 'react-native-elements'
import LinearGradient from "react-native-linear-gradient";

class Mybtn extends PureComponent{
    render(){
        return(
           <View> 
               <Button
                   ViewComponent={LinearGradient}
               {...this.props}
               linearGradientProps={{
                colors: ['#62bfad','#AFE0FF'],
                start: { x: 0, y: 0 },
                end: { x: 2, y: 0}
              }}
                />
           </View>
        )
    }
}


export default  Mybtn;
