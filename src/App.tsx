import React from 'react';
import { StyleSheet, View } from 'react-native';
import storeFactory from './store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Root';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from './constants/Constants';



const App = () => {
    return (
        <View style={styles.container}>
            <Provider store={storeFactory()}>
            <NavigationContainer>
              <Root />
            </NavigationContainer>
            </Provider>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    }
});

export default App;
