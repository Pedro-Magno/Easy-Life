// src/screens/login/index.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './style';

const LoginScreen = () => {
  const minhaImagem = require('../../../assets/icons/Google-Symbol.png')

  return (
    <ImageBackground
      source={require('../../../assets/bgs/bg-app.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.containerLogin}>
        <Text style={styles.titleLogin}>Easy Life </Text>
        <Text style={styles.subtitleLogin}>Login </Text>
        <TouchableOpacity style={styles.buttonLogin}>
          
          <View>
            <Image source={minhaImagem} style={{ width: 40, height: 40 }} />
          </View>

          <Text style={styles.textButtonLogin}>Continuar com o Google </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;
