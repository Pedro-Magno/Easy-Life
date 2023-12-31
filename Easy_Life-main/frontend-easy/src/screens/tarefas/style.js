import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    backgroundImage: {
        flex: 1,
        backgroundColor: '#23195F',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      },
      headerTitle: {
        color: 'white',
        // fontFamily: 'nunito',
        fontWeight: '700',
        fontSize: 40,
        marginLeft: 12,
      },
      buttonAdd: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#31E278',
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 15,
      },
    containerTarefas: {
        color: 'white',
    },
    groupTask: {
        marginTop: 5    ,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    containerTask: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        color: '#000000',
        width: 320,
        height: 60,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginTop: 5,
    },
    titleTask: {
        color: 'black',
        fontSize: 22,
    },
    textTask: {
        color: 'black',
        fontSize: 12,
    },
    containerTaskDesc: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    textDescription: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        gap: 3,
    },
    containerTaskIcons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
 });

export default styles