import React from 'react';
import {
    Platform,
    StyleSheet,
    TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Composer extends React.Component {
    onInputSizeChanged(e) {
        const contentSize = e.nativeEvent.contentSize;
        if (!this.contentSize) {

            this.contentSize = contentSize;
            // this.size.height= this.contentSize;
            // this.Size.height =
            this.props.onInputSizeChanged(this.contentSize);
        } else if (this.contentSize.width !== contentSize.width || this.contentSize.height !== contentSize.height) {
            this.contentSize = contentSize;
            this.props.onInputSizeChanged(this.contentSize);
        }
    }
    // onChange(e) {
    //     const contentSize = e.nativeEvent.contentSize;
    //     if (!this.contentSize) {

    //         this.contentSize = contentSize;
    //         this.Size.height = this.contentSize;
    //         this.props.onInputSizeChanged(this.contentSize);
    //     } else if (this.contentSize.width !== contentSize.width || this.contentSize.height !== contentSize.height) {
    //         this.contentSize = contentSize;
    //         this.props.onInputSizeChanged(this.contentSize);
    //     }
    // }

    onChangeText(text) {
        this.props.onTextChanged(text);
    }

    render() {
        return (
            <TextInput
                placeholder={this.props.placeholder}
                placeholderTextColor={this.props.placeholderTextColor}
                multiline={this.props.multiline}

                onChange={(e) => this.onInputSizeChanged(e)}
                onChangeText={text => this.onChangeText(text)}

                style={[styles.textInput, this.props.textInputStyle, { height: 40 }]}

                value={this.props.text}
                accessibilityLabel={this.props.text || this.props.placeholder}
                enablesReturnKeyAutomatically={true}
                underlineColorAndroid="transparent"
                {...this.props.textInputProps}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        fontSize: 16,
        lineHeight: 16,
        marginTop: Platform.select({
            ios: 6,
            android: 0,
        }),
        marginBottom: Platform.select({
            ios: 5,
            android: 3,
        }),
    },
});

// Composer.defaultProps = {
//     onChange: () => {
//     },
//     composerHeight: Platform.select({
//         ios: 33,
//         android: 41,
//     }), // TODO SHARE with GiftedChat.js and tests
//     text: '',
//     placeholder: 'Type a message...',
//     placeholderTextColor: '#b2b2b2',
//     textInputProps: null,
//     multiline: true,
//     textInputStyle: {},
//     onTextChanged: () => {
//     },
//     onInputSizeChanged: () => {
//     },
// };

// Composer.propTypes = {
//     //   onChange: React.PropTypes.func,
//     //   composerHeight: React.PropTypes.number,
//     //   text: React.PropTypes.string,
//     //   placeholder: React.PropTypes.string,
//     //   placeholderTextColor: React.PropTypes.string,
//     //   textInputProps: React.PropTypes.object,
//     //   onTextChanged: React.PropTypes.func,
//     //   onInputSizeChanged: React.PropTypes.func,
//     //   multiline: React.PropTypes.bool,
//     //   textInputStyle: TextInput.propTypes.style,
//     onChange: PropTypes.func,
//     composerHeight: PropTypes.number,
//     text: PropTypes.string,
//     placeholder: PropTypes.string,
//     placeholderTextColor: PropTypes.string,
//     textInputProps: PropTypes.object,
//     onTextChanged: PropTypes.func,
//     onInputSizeChanged: PropTypes.func,
//     multiline: PropTypes.bool,
//     textInputStyle: propTypes.style,
// };