// Adicione o seguinte código ao arquivo style.js da pasta Agenda
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      backgroundColor: '#23195F',
    },
  containerAgenda: {
    backgroundColor: '#23195F',
    padding: 20,
    marginTop: 5,
  },
  calendar: {
    height: 380,
    borderRadius: 10,
    // backgroundColor: 'red',
  },
  containerTarefas: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 10,
  },
  tarefaItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    margin: 2,
    marginLeft: 5,
    width: '100%,',
    height: 40,
    // backgroundColor: 'gray'
  },
  iconsTarefas: {
    marginLeft: 5,
  },
  textDataSelecionada: {
    color: '#23195F',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  textTarefa: {
    fontSize: 14,
    marginLeft: 5,
  }
});

export default styles;
