// src/components/header/index.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Header = ({ title, onAddPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerLeft}>
        <View style={styles.iconNav}>
          <TouchableOpacity>
            <Feather name="list" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerRight}>
        <View style={styles.iconFAQ}>
          <TouchableOpacity onPress={() => navigation.navigate('Suporte')}>
            <Feather name="tool" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.iconUser}>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <Feather name="user" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
