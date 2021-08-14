import React, { PureComponent } from 'react';
import Modal from 'react-native-modal';
import { ScrollView, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import FlipCard from 'react-native-flip-card';

export default class ModalT extends PureComponent {

    constructor(props) {
        super(props)


    }

    render() {

        const { isModalVisible, toggleModalProps, item } = this.props
        // console.log(arr);
        return (
            <Modal
                testID={'modal'}
                isVisible={isModalVisible}
                // isVisible={this.isVisible()}
                backdropColor="#B4B3DB"
                backdropOpacity={0.8}
                onBackdropPress={toggleModalProps}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
                scrollOffsetMax={400 - 300} // content height - ScrollView height
                propagateSwipe={true}//是否可滑动
            >
                <View style={{ flex: 1, backgroundColor: '#eee', borderRadius: 20, padding: 10 }}>
                    <ScrollView>
                     
                            <View key={item.id}>

                                <FlipCard
                                    style={styles.card}
                                    friction={6}
                                    perspective={1000}
                                    flipHorizontal={true}
                                    flipVertical={false}
                                    flip={false}
                                    clickable={true}
                                    onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
                                >
                                    {/* Face Side */}
                                    <View style={[styles.face]}>
                                    </View>
                                    {/* Back Side */}
                                    <View style={[{ backgroundColor: '#D2DFD5', height: pxToDp(140), width: '100%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, styles.back]}>
                                    </View>
                                </FlipCard>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(180) }}>
                                    <TouchableOpacity style={styles.touch}>
                                        <Text style={styles.text}>{item.name1}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.touch}>
                                        <Text style={styles.text}>{item.name2}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                      

                    </ScrollView>
                    <Button title="返回" onPress={toggleModalProps} />
                </View>
            </Modal>

        );
    }
}
const styles = StyleSheet.create({
   touch:{
       height:pxToDp(60),
       width:pxToDp(280),
       backgroundColor:'#2296F3',
       borderRadius:pxToDp(30), 
       alignItems: 'center',
       justifyContent:'center',
       margin:pxToDp(10)
    },
    text:{ 
        fontSize: pxToDp(20),
        color:'white' 
    }
});