import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';

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
                        visible={modalVisibles}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            this.setModalVisible(!modalVisibles);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText4}>
                                    今日之约已了 我们明日再聚
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setModalVisibles(!modalVisibles);
                                    }}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.modalText5}>确认</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
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
                                <View style={{ marginLeft: pxToDp(330) }}>
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
                                <View style={{ flexDirection: 'row', width: pxToDp(334) }}>
                                    {this.state.jifen.map((item, index) => (
                                        <Text style={{ marginRight: pxToDp(31), color: 'grey' }}>
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
                                <TouchableOpacity
                                    disabled={this.state.isclick}
                                    style={{
                                        ...styles.openButton,
                                        backgroundColor: this.state.color
                                    }}
                                    onPress={() => {
                                        this.setState({
                                            currentPosition: this.state.currentPosition + 1
                                        });
                                        this.setState({ color: 'grey' });
                                        this.setState({ isclick: true });
                                        this.setModalVisibles(true);
                                    }}
                                >
                                    <Text style={styles.textStyle}>
                                        {this.state.isclick ? '已签到' : '签到'}
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ marginBottom: pxToDp(20) }}>
                                    <Text style={styles.modalText2}>-签到说明-</Text>
                                    <Text style={styles.modalText3}>
                                        每日签到一次，连续签到奖励更多
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center',marginLeft:pxToDp(50) }} onPress={() => {
                    this.setModalVisible(true);
                }}>
                    <Ionicons name="today-sharp" size={32} color="#468CD3" />
                    <Text style={{ fontSize: pxToDp(15),marginTop:pxToDp(5)}}>签到</Text>
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
        borderRadius: 12,
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
        borderRadius: 5,
        marginTop: pxToDp(35),
        elevation: 12,
        width: pxToDp(240),
        height: pxToDp(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalText1: {
        marginBottom: pxToDp(15),
        textAlign: 'center',
        fontSize: pxToDp(15)
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        height: pxToDp(40),
        width: pxToDp(30),
        backgroundColor: '#f5f5f5',
        borderRadius: pxToDp(10)
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