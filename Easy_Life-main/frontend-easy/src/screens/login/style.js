import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    backgroundImage: {
        flex: 1,
        backgroundColor: '#23195F',
    },
    containerLogin: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
        width: '100%',
    },
    titleLogin: {
        fontSize: 45,
        color: 'white'
    },
    subtitleLogin: {
        fontSize: 25,
        color: 'white'
    },
    buttonLogin: {
        height: 70,
        width: 270,
        display: 'flex',
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        borderRadius: 15,
    },
    textButtonLogin: {
        fontSize: 18,
        color: 'black'
    }
 });

export default styles