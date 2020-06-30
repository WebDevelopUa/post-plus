import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({onPress, children, viewStyle, textStyle}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={{...styles.button, ...viewStyle}}>
            <Text style={{...styles.buttonText, ...textStyle}}>
                {children}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1c6172',
        paddingVertical: 12,
        paddingHorizontal: 25,
        marginVertical: 15,
        width: 200,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        textTransform: 'uppercase'
    }
});

export default CustomButton
