import React, { PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Modal
} from 'react-native';
import { pxToDp } from '@utils/styleKits';

class index extends PureComponent {
    state = {
        modalVisible: false
    };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };
    static contextType = NavigationContext;
    render() {
        const { modalVisible } = this.state;
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
                                <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>确认删除订单？</Text>
                                <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>删除后无法恢复哦</Text>
                                <View>
                                    <Mybtn
                                        title="取消"
                                        onPress={() => {
                                            this.setModalVisible(!modalVisible);
                                        }}
                                        buttonStyle={{
                                            width: pxToDp(90),
                                            height: pxToDp(30),
                                            alignSelf: 'center',
                                            borderRadius: pxToDp(32),
                                            marginTop: pxToDp(32)
                                        }}
                                        titleStyle={{
                                            color: 'white',
                                            marginTop: pxToDp(-3),
                                            fontSize: pxToDp(14)
                                        }}
                                    />
                                    <Mybtn
                                        title="取消"
                                        onPress={() => {
                                            this.setModalVisible(!modalVisible);
                                        }}
                                        buttonStyle={{
                                            width: pxToDp(90),
                                            height: pxToDp(30),
                                            alignSelf: 'center',
                                            borderRadius: pxToDp(32),
                                            marginTop: pxToDp(32)
                                        }}
                                        titleStyle={{
                                            color: 'white',
                                            marginTop: pxToDp(-3),
                                            fontSize: pxToDp(14)
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
}

export default index;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        margin: pxToDp(20),
        backgroundColor: 'white',
        borderRadius: pxToDp(24),
        padding: pxToDp(35),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
});
