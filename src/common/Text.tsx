import React, { ReactNode } from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';


interface Props extends TextProps {
    children?: ReactNode,
}

const Text = (props: Props) => {
    const { children } = props;


    return (
        <RNText {...props} style={styles.text}>
            {children}
        </RNText>
    );
};

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
    }
});

export { Text };
