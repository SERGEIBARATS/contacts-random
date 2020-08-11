import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

type Props = {
    navigation: any,
    route?: any,
}

const PersonDetails = ({route}: Props) => {
    const { user } = route.params;

    return (
        <View style={styles.container}>

            <View style={styles.imageContainerStyle}>
                <Image resizeMode='stretch' source={{uri: user.image}} style={styles.imageStyle} />
            </View>

            <Text style={{fontWeight: "bold"}}>{`${user.name} ${user.last}`}</Text>
            <Text style={{fontWeight: "600"}}>{`${user.address}`}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    imageContainerStyle: {
        width: 250,
        height: 250,
        marginBottom: 20,
        alignItems: 'center',
        marginTop: 10
    },
    imageStyle: {
        width:220,
        height: 220
    }
})

export default PersonDetails
