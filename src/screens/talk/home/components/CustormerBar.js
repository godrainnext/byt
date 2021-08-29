/**
 * 创建： jiaojiao on 2018/10/29.
 * 功能：SegmentTabBar
 */
 import React, {Component} from 'react'
 import {
     View,
     Text,
     StyleSheet,
     TouchableOpacity,
     Dimensions,
 } from 'react-native';
 import LinearGradient from 'react-native-linear-gradient';
 const PhoneWidth = Dimensions.get('window').width;
 const Button = (props) => {
     return (
         <TouchableOpacity {...props} activeOpacity={0.95}>
             {props.children}
         </TouchableOpacity>
     )
 };
 export default class SegmentTabBar extends Component {
 
     constructor(props) {
         super(props);
         this.state = {
         };
     }
     renderTab(name, page, isTabActive, onPressHandler) {
         const textColor = isTabActive ? '#0086E5' : '#fff';
         const backgroundColor = isTabActive ? '#fff' : '#338398';
         console.log(textColor)
         return <Button
             style={{flex: 1, height: 25, backgroundColor,borderRadius:16,margin:8}}
             key={name}
             accessible={true}
             accessibilityLabel={name}
             accessibilityTraits='button'
             onPress={() => onPressHandler(page)}
         >
             <View style={[styles.tab]}>
                 <Text style={[{color: textColor, },]}>
                     {name}
                 </Text>
             </View>
         </Button>;
     }
 
     render() {
         return (
            <LinearGradient
            style={styles.box}
            colors={[ '#37a49f','#AFE0FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.6, y: 0}}
        >
             <View style={styles.tabBarBox}>
                 <View style={ {flexDirection: 'row',width:300}}>
                     {this.props.tabs.map((name, page) => {
                         const isTabActive = this.props.activeTab === page;
                         const renderTab = this.props.renderTab || this.renderTab;
                         return renderTab(name, page, isTabActive, this.props.goToPage);
                     })}
                 </View>
             </View>
            </LinearGradient>
         );
     }
 
 }
 const styles = StyleSheet.create({
     tabBarBox: {
         height: 50,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
  
     },
     iconBox: {
         margin: 15
     },
     tab: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
     },
     tabs: {
         borderRadius: 2,
         borderColor: '#0086E5',
         borderWidth: 1,
         width: PhoneWidth / 3,
         flexDirection: 'row',
         alignItems: 'center',
         alignContent: 'center',
         marginLeft:20,
         justifyContent: 'space-around',
     },
 });
 