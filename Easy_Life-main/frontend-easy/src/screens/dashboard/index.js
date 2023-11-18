// src/screens/tarefas/index.js
import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Header from '../../components/header';
import styles from './style';

const DashboardScreen = () => {
  return (
    <ImageBackground
    source={require('../../../assets/bgs/bg-app.png')}
    style={styles.backgroundImage}
    >
      <View>
          <Header />
          <View style={styles.containerSuporte}>
            <Text style={styles.titleDash}>
              Dashboard Semanal 
            </Text>
            <View style={styles.containerChart}>
              <ImageBackground
                  source={require('../../../assets/bgs/bgDash.png')}
                  style={styles.backgroundImageII}
              ></ImageBackground>
            </View>
            <View style={styles.divTest}></View>  
            <View style={styles.divTest}></View>
          </View>
      </View>
    </ImageBackground>
  );
}

export default DashboardScreen;