import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Modal, TextInput, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/header';
import styles from './style';
import { Feather } from '@expo/vector-icons';
import RNDateTimePicker, { DateTimePicker } from '@react-native-community/datetimepicker';


const TarefasScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState({
    nome: '',
    data: '',
    horaInicio: '',
    horaFim: '',
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePickerInicio, setShowTimePickerInicio] = useState(false);
  const [showTimePickerFim, setShowTimePickerFim] = useState(false);
  const [date, setDate] = useState()

  // console.log(tasks)j

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const tasksJson = await AsyncStorage.getItem('tasks');
      if (tasksJson) {
        const parsedTasks = JSON.parse(tasksJson);
        setTasks(parsedTasks);
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas', error);
    }
  };

  const saveTasks = async (tasksToSave) => {
    try {
      const tasksJson = JSON.stringify(tasksToSave);
      await AsyncStorage.setItem('tasks', tasksJson);
    } catch (error) {
      console.error('Erro ao salvar tarefas', error);
    }
  };

  const handleAddTask = () => {
    setModalVisible(true);
  };

  const adicionarTarefa = () => {
    if (novaTarefa.nome && novaTarefa.data && novaTarefa.horaInicio && novaTarefa.horaFim) {
      const newTaskObject = { ...novaTarefa };
      const updatedTasks = [...tasks, newTaskObject];
      setTasks(updatedTasks);
      setModalVisible(false);
      setNovaTarefa({
        nome: '',
        data: '',
        horaInicio: '',
        horaFim: '',
      });
      saveTasks(updatedTasks);
    }
  };

  const handleEditTask = (index) => {
    // Implemente a lógica para editar uma tarefa
    // Pode abrir um modal similar ao de adição, preenchendo os campos com os dados da tarefa
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const onChangeDate = (event, selectedDate) => {
    console.log('selectedDate ===', selectedDate)
    setShowDatePicker(Platform.OS === 'ios');
    setNovaTarefa({ ...novaTarefa, data: selectedDate || novaTarefa.data });
  };

  const onChangeTimeInicio = (event, selectedTime) => {
    setShowTimePickerInicio(Platform.OS === 'ios');
    setNovaTarefa({ ...novaTarefa, horaInicio: selectedTime || novaTarefa.horaInicio });
  };

  const onChangeTimeFim = (event, selectedTime) => {
    setShowTimePickerFim(Platform.OS === 'ios');
    setNovaTarefa({ ...novaTarefa, horaFim: selectedTime || novaTarefa.horaFim });
  };

  return (
    <ImageBackground
      source={require('../../../assets/bgs/bg-app.png')}
      style={styles.backgroundImage}
    >
       <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <ScrollView>
        <View style={styles.containerTarefas}>
          <Header title="Cronograma Semanal " onAddPress={handleAddTask} />
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Cronograma Semanal</Text>
            <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
              <Feather name="plus" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.groupTask}>
              {tasks.map((task, index) => (
                <View style={styles.containerTask} key={index}>
                  <View style={styles.containerTaskDesc}>
                    <Text style={styles.titleTask}>{task.nome} </Text>
                    <View style={styles.textDescription}>
                      <Text style={styles.textTask}>{task.data} </Text>
                      <Text style={styles.textTask}>{task.horaInicio} - {task.horaFim} </Text>
                    </View>
                  </View>
                  <View style={styles.containerTaskIcons}>
                    <TouchableOpacity onPress={() => handleEditTask(index)}>
                      <Feather name="edit" size={24} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                      <Feather name="trash-2" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
          {/* Modal para adicionar nova tarefa */}
          <Modal visible={modalVisible} animationType="slide">
            <View>
              <Text>Nova Tarefa</Text>
              <TextInput
                placeholder="Nome da atividade"
                onChangeText={(text) => setNovaTarefa({ ...novaTarefa, nome: text })}
              />
               <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text>Selecionar Data</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <RNDateTimePicker
                  // value={date}
                  value={new Date()}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                />
              )}
              <TextInput
                placeholder="Horário de início"
                onChangeText={(text) => setNovaTarefa({ ...novaTarefa, horaInicio: text })}
              />
              <TextInput
                placeholder="Horário de término"
                onChangeText={(text) => setNovaTarefa({ ...novaTarefa, horaFim: text })}
              />
              <Button title="Adicionar" onPress={adicionarTarefa} />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            </View>
          </Modal>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default TarefasScreen;
