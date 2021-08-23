import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Image
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';
import LinearGradient from 'react-native-linear-gradient';
import Mybtn from './mybtn';
import { Button } from 'react-native-elements/dist/buttons/Button';

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showSharePop: false, //分享弹窗，默认不显示
            modalVisible: false,
            modalVisibles: false,
            color: '#468cd3',
            currentPosition: 0,
            isclick: false,
            jifen: ['+5', '+10', '+15', '+20', '+25', '+30', '+35'],
        }
    }
    static contextType = NavigationContext;

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };
    setModalVisibles = (visible) => {
        this.setState({ modalVisibles: visible });
    };

    render() {
        const { modalVisible, modalVisibles, text } = this.state;
        const labels = [
            '第一天',
            '第二天',
            '第三天',
            '第四天',
            '第五天',
            '第六天',
            '第七天'
        ];
        const customStyles = {
            stepIndicatorSize: 35,
            currentStepIndicatorSize: 40,
            separatorStrokeWidth: 2,
            currentStepStrokeWidth: 3,
            stepStrokeCurrentColor: '#468cd3',
            stepStrokeWidth: 3,
            stepStrokeFinishedColor: '#468cd3',
            stepStrokeUnFinishedColor: '#aaaaaa',
            separatorFinishedColor: '#468cd3',
            separatorUnFinishedColor: '#aaaaaa',
            stepIndicatorFinishedColor: '#468cd3',
            stepIndicatorUnFinishedColor: '#ffffff',
            stepIndicatorCurrentColor: '#ffffff',
            stepIndicatorLabelFontSize: 13,
            currentStepIndicatorLabelFontSize: 13,
            stepIndicatorLabelCurrentColor: '#468cd3',
            stepIndicatorLabelFinishedColor: '#ffffff',
            stepIndicatorLabelUnFinishedColor: '#aaaaaa',
            labelColor: '#999999',
            labelSize: 13,
            currentStepLabelColor: '#468cd3'
        };
        return (
            <View>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            this.setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ marginLeft: pxToDp(330), marginTop: pxToDp(10) }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Ionicons
                                            name="md-close-circle-outline"
                                            size={30}
                                            color="grey"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.modalText1}>-每日签到-</Text>
                                <View style={{ flexDirection: 'row', width: pxToDp(335) }}>
                                    {this.state.jifen.map((item, index) => (
                                        <Text style={{ marginRight: pxToDp(32.7), color: 'grey' }}>
                                            {item}
                                        </Text>
                                    ))}
                                </View>
                                <View style={{ width: pxToDp(370) }}>
                                    <StepIndicator
                                        stepCount={7}
                                        customStyles={customStyles}
                                        currentPosition={this.state.currentPosition}
                                        labels={labels}
                                    />
                                </View>
                              
                                    <Button 
                                    ViewComponent={LinearGradient}
                                           onPress={() => {
                                            this.setState({
                                                currentPosition: this.state.currentPosition + 1
                                            });
                                            this.setState({ color: 'grey' });
                                            this.setState({ isclick: true });
                                            this.setModalVisibles(true);
                                        }}
                                        title= {this.state.isclick ? '已签到' : '签到'}
                                        disabled={this.state.isclick}
                                        linearGradientProps={{
                                            colors:this.state.isclick?['#ccc','#ccc']:['#fa9222', '#ffd501'],
                                            start: { x: 0, y: 0.5 },
                                            end: { x: 1, y: 0.5 }
                                          }}
                                        buttonStyle={{
                                            width: pxToDp(100),
                                            height: pxToDp(100),
                                            marginTop:pxToDp(30),
                                            borderRadius: pxToDp(100),
                                        }}
                                 
                                    />
                         
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: pxToDp(35) }}>
                                    <Image style={{ width: pxToDp(80), height: pxToDp(160) }} source={require('../../res/sucai/9.jpg')} />
                                    <View>
                                        <Text style={styles.modalText2}>-签到说明-</Text>
                                        <Text style={styles.modalText3}>
                                            每日签到一次，连续签到奖励更多
                                        </Text>
                                    </View>
                                    <Image style={{ width: pxToDp(80), height: pxToDp(160) }} source={require('../../res/sucai/11.jpg')} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: pxToDp(50) }} onPress={() => {
                    this.setModalVisible(true);
                }}>
                    <Ionicons name="today-sharp" size={32} color="#468CD3" />
                    <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(5) }}>签到</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: pxToDp(13),
        color: 'white'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: pxToDp(8),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: pxToDp(8),
        marginTop: pxToDp(35),
        elevation: 12,
        width: pxToDp(240),
        height: pxToDp(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalText1: {
        textAlign: 'center',
        fontSize: pxToDp(17),
        marginBottom: pxToDp(35)
    },
    modalText2: {
        marginTop: pxToDp(15),
        textAlign: 'center',
        fontSize: pxToDp(15)
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        height: pxToDp(40),
        width: pxToDp(30),
        backgroundColor: '#f5f5f5',
        borderRadius: pxToDp(8)
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText4: {
        margin: pxToDp(25),
        fontSize: pxToDp(15)
    },
    modalText5: {
        fontSize: pxToDp(12)
    },
    button: {
        backgroundColor: '#468cd3',
        height: pxToDp(20),
        width: pxToDp(50),
        borderRadius: pxToDp(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: pxToDp(10)
    }
});
export default Index;