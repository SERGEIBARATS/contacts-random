import React, { useEffect } from 'react'
import { FlatList, View, StyleSheet, Text,TouchableOpacity, Image} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { multipleServerRequests } from '../actions/GeneralActions';
import { setSelectedUser } from '../actions/userAction';
import { User } from '../types';
import { BASIC_SHADOW_STYLES, SCREEN_WIDTH } from '../constants/Constants';

type Props = {
    navigation: any,
    multipleServerRequests(): void,
    contactsData: [],
    setSelectedUser(item: User): any
}

const MainScreen = ({ navigation, multipleServerRequests,contactsData, setSelectedUser}: Props) => {

    useEffect(()=> {
        multipleServerRequests();
    },[]);

    const getMoreData = () => {
        (contactsData.length < 100) && multipleServerRequests();
    };

    const contactPressed = (item: any) => {
        navigation.navigate('PersonDetails', {user:item});
        setSelectedUser(item);
    };

    const renderItem = ({item}) => {
        return (
               <TouchableOpacity onPress={()=> {contactPressed(item)}} style={styles.item}>
                   <View style={styles.imageContainerStyle}>
                       <Image resizeMode='stretch' source={{uri: item.image}} style={styles.imageStyle} />
                   </View>
                   <View style={{flexDirection: 'row'}}>
                       <Text style={{fontSize: 15}}>{`${item.name} ${item.last}`}</Text>
                   </View>
               </TouchableOpacity>
            )
    };

    return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={contactsData}
                    renderItem={renderItem}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => getMoreData()}
                />
            </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: SCREEN_WIDTH / 2.3,
        height: SCREEN_WIDTH / 3,
        ...BASIC_SHADOW_STYLES,
        margin: 10,
        backgroundColor: 'rgb(210,210,210)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainerStyle: {
        flex:1,
        marginHorizontal:16,
        marginBottom: 10,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    imageStyle: {
        width:150,
        height: 100,
        top: 2
    }
});

const mapStateToProps = (state: any) => {
    const {
        general: { showLoader, showInternetModal, contactsData },
    } = state;

    return { showLoader, showInternetModal, contactsData };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        multipleServerRequests,
        setSelectedUser
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
