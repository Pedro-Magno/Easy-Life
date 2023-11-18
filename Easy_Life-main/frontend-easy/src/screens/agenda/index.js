import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from './style';
import Header from '../../components/header';
import { Feather } from '@expo/vector-icons';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
};

LocaleConfig.defaultLocale = 'pt-br';

const exemploTarefas = {
  '2023-11-15': [
    { nome: 'Reunião', horaInicio: '10:00', horaFim: '11:00' },
    { nome: 'Almoço', horaInicio: '12:00', horaFim: '13:00' },
  ],
  '2023-11-16': [
    { nome: 'Projeto SISC', horaInicio: '14:00', horaFim: '16:00' },
  ],
};

const AgendaScreen = ({ navigation }) => {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    const dateString = day.dateString;
    setSelectedDate(dateString);

    if (exemploTarefas[dateString]) {
      // Se houver tarefas para o dia, marque o dia com uma cor específica
      setMarkedDates({
        ...markedDates,
        [dateString]: { selected: true, marked: true, selectedColor: '#3498db' },
      });
    } else {
      // Se não houver tarefas, remova a marcação
      setMarkedDates({
        ...markedDates,
        [dateString]: { selected: false, marked: false, selectedColor: '#3498db' },
      });
    }
  };

  const renderTarefasDoDia = () => {
    if (exemploTarefas[selectedDate]) {
      return exemploTarefas[selectedDate].map((tarefa, index) => (
        <View key={index} style={styles.containerTarefas}>
          <View style={styles.tarefaItem}>
            <Feather style={styles.iconsTarefas} name="alert-circle" size={18} color="red" />
            <Text style={styles.textTarefa}>{tarefa.nome} </Text>
          </View>
          <View style={styles.tarefaItem}>
            <Feather style={styles.iconsTarefas} name="alert-circle" size={18} color="red" />
            <Text style={styles.textTarefa}>{`${tarefa.horaInicio} - ${tarefa.horaFim}`} </Text>
          </View>
        </View>
      ));
    } else {
      return (
        <View>
          <View style={styles.tarefaItem}>
            <Feather style={styles.iconsTarefas} name="alert-circle" size={18} color="red" />
            <Text style={styles.textTarefa}>Nenhuma tarefa agendada para este dia. </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/bgs/bg-app.png')}
      style={styles.backgroundImage}
    >
      <Header />
      <View style={styles.containerAgenda}>
        <Calendar
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={markedDates}
          markingType={'multi-dot'}
        />

        {selectedDate !== '' && (
          <View style={styles.containerTarefas}>
            <Text style={styles.textDataSelecionada}>{`Atividades em ${selectedDate}`} : </Text>
            {renderTarefasDoDia()}
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default AgendaScreen;
