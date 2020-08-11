import { Dimensions } from 'react-native';


export const SCREEN_HEIGHT: number = Dimensions.get('window').height;
export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const BASIC_SHADOW_STYLES = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#fff'
};
