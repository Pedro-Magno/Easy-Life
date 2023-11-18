import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    backgroundImage: {
        flex: 1,
        backgroundColor: '#23195F',
    },
    containerSuporte: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        alignContent: 'center',
        height: 550 ,
        width: '90%',
        marginLeft: 18,
        marginRight: 12,
        borderRadius: 25,
    },
    containerChat: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: 'auto',
        borderRadius: 25,
    },
    backgroundImageII: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 500,
        borderRadius: 15,
        resizeMode: 'cover'
    }
 });

export default styles