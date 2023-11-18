// src/screens/tarefas/index.js
import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Header from '../../components/header';
import styles from './style.js';

const SuporteScreen = () => {
  return (
    <ImageBackground
    source={require('../../../assets/bgs/bg-app.png')}
    style={styles.backgroundImage}
    >
      <View>
          <Header />
          <View style={styles.containerSuporte}>
            <View style={styles.containerChat}>
              <ImageBackground
                source={require('../../../assets/bgs/bgChatGPT.png')}
                style={styles.backgroundImageII}
              ></ImageBackground>
            </View>
          </View>
      </View>
    </ImageBackground>
  );
}

export default SuporteScreen;