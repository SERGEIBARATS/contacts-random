import { SET_NEW_DATA, FINISHED_LOAD_DATA } from '../constants/ActionTypes';
import { requestWrapper } from '../services/serverRequests';

export const getRandomContact = () => async (dispatch) => {
    try {
        const data = await requestWrapper({method:'get', url:''});
        const name = ( data?.data?.results[0]?.name?.first ) || '';
        const last = ( data?.data?.results[0]?.name?.last ) || '';
        const image = ( data?.data?.results[0]?.picture?.large ) || '';
        const email = ( data?.data?.results[0]?.email ) || '';

        const street = ( data?.data?.results[0]?.location?.street?.name ) || '';
        const streetNumber = ( data?.data?.results[0]?.location?.street?.number ) || '';
        const city = ( data?.data?.results[0]?.location?.city ) || '';
        const address = `${street} ${streetNumber} ${city}`;

        dispatch({
            type: SET_NEW_DATA,
            payload: { name, last, image, email, address}
        });
    } catch (e) {
        console.log('getStringsError: ', e);
    }
};

export const multipleServerRequests = () => async (dispatch, getState: any) => {
    const promiseArr = [];

    dispatch({
        type: FINISHED_LOAD_DATA,
        payload: false
    });

    for (let step = 0; step < 10; step++) {
        promiseArr.push(dispatch(getRandomContact()));
    }

    Promise.all(promiseArr).then(() => {
        dispatch({
            type: FINISHED_LOAD_DATA,
            payload: true
        });
    })
        .catch((reason) => {
            console.log('error at multipleServerRequests function: ', reason)
        });
};

