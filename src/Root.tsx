import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./components/MainScreen";
import PersonDetails from "./components/PersonDetails";
import { User } from "./types";
import { randomizeMe } from "./constants/Strings";

interface Props {
    selectedUser: User
}

const Stack = createStackNavigator();

const Root = ({ selectedUser }: Props) => {

    return (
        <View style={styles.container}>
            <Stack.Navigator mode="modal">
                <Stack.Screen name="MainScreen" component={MainScreen} options={{headerTitle: randomizeMe, headerTitleAlign: 'center'}} />
                <Stack.Screen name="PersonDetails" component={PersonDetails} options={{headerTitle: `${selectedUser.name} ${selectedUser.last}`}}/>
            </Stack.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});



const mapStateToProps = (state: any) => {
    const {
        user: { selectedUser },
    } = state;

    return { selectedUser };
};

export default connect(mapStateToProps, null)(Root)
