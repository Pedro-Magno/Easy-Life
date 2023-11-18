// src/routes/routes.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {Feather } from '@expo/vector-icons';
import TarefasScreen from '../screens/tarefas';
import AgendaScreen from '../screens/agenda';
import SuporteScreen from '../screens/suporte';
import DashboardScreen from '../screens/dashboard';
import LoginScreen from '../screens/login';
import PerfilScreen from '../screens/perfil';
import HomeScreen from '../screens/home';

const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({ children, onPress }) => (
//   <View
//     style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'black',  // Cor de fundo desejada
//       borderTopLeftRadius: 15,  // Borda superior esquerda arredondada
//       borderTopRightRadius: 15,  // Borda superior direita arredondada
//     }}
//   >
//     <Text style={{ color: 'white', fontSize: 12 }}>{children}</Text>
//   </View>
// );

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Tarefas') {
            iconName = 'list';
          } else if (route.name === 'Agenda') {
            iconName = 'calendar';
          } else if (route.name === 'Suporte') {
            iconName = 'message-square';
          } else if (route.name === 'Dashboard') {
            iconName = 'pie-chart';
          } else if (route.name === 'Perfil') {
            iconName = 'user';
          } else if (route.name === 'Home') {
            iconName = 'home';
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'yellow',
        },
      }}
    >
      <Tab.Screen name="Tarefas" component={TarefasScreen} />
      <Tab.Screen name="Agenda" component={AgendaScreen} />
      <Tab.Screen name="Suporte" component={SuporteScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
