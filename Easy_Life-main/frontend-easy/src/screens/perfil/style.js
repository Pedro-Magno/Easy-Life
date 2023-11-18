import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    containerProfile: {
        flex: 1,
        backgroundColor: '#D7CFFC',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 30,
    },
    containerImg: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    containerReturnIcon: {
        width: '100%',
        paddingLeft: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    containerImgProfile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    containerInputs: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottom: 22,
        borderBottomColor: 'black',
        gap: 15,
    },
    containerPassword: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '40%',
        gap: 30
    },
    buttonEdit: {
        backgroundColor: '#664FC9',
        height: 60,
        width: '70%',
        borderRadius: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'normal',
    },
    textButtonEdit: {
        fontSize: 20,
        color: "#FFFFFF"
    },
    textUser: {
        color: 'black',
        fontSize: 15,
    }
 });

export default styles