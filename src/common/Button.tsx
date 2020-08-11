import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    extraStyle?: string,
    onPress?: () => void,
    children?: any
}

const Button = ({ extraStyle, onPress, children }: Props) => {

    return (
        <TouchableOpacity onPress={() => onPress()} style={[styles.container,extraStyle]}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { Button };
