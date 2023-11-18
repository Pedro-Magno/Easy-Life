import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

const PerfilScreen = ({ navigation }) => {
  const [editarSenha, setEditarSenha] = useState(false);
  const [senha, setSenha] = useState('********');
  const [userData, setUserData] = useState({
    nome: 'Usuário Exemplo',
    dataNascimento: '01/01/1990',
    email: 'usuario@example.com',
    site: 'www.example.com',
  });
  const profileImg = require('../../../assets/icons/profile-img.png');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userString = await AsyncStorage.getItem('user');
  //       if (userString) {
  //         const user = JSON.parse(userString);
  //         setUserData(user);
  //       }
  //     } catch (error) {
  //       console.error('Erro ao obter dados do usuário:', error);
  //       // Simulação de dados caso o usuário não exista
  //       setUserData({
  //         nome: 'Usuário Exemplo',
  //         dataNascimento: '01/01/1990',
  //         email: 'usuario@example.com',
  //         site: 'www.example.com',
  //       });
  //     }
  //   };

  //   fetchData();
  // }, []);

  const salvarSenha = () => {
    // Lógica para salvar a nova senha no AsyncStorage/Firebase
    setEditarSenha(false);
    // Atualizar a senha no objeto de usuário
    setUserData((prevData) => ({ ...prevData, senha }));
    // Salvar o usuário atualizado no AsyncStorage
    AsyncStorage.setItem('user', JSON.stringify({ ...userData, senha }));
  };

  const editarPerfil = () => {
    // Lógica para salvar o perfil editado no AsyncStorage/Firebase
    AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <View style={styles.containerProfile}>
      <View style={styles.containerImg}>
        <TouchableOpacity style={styles.containerReturnIcon} onPress={() => navigation.navigate('Home')}>
          <Feather name="arrow-left-circle" size={45} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.containerImgProfile}>
          <Image source={profileImg} style={{ width: 120, height: 120 }} />
        </View>
      </View>

      <View style={styles.containerInputs}>
        <Feather name="user" size={25} color="#FFFFFF" />
        <TextInput
          style={styles.textUser}
          value={userData.nome}
          onChangeText={(text) => setUserData((prevData) => ({ ...prevData, nome: text }))}
          editable={editarSenha}
        />
      </View>

      <View style={styles.containerInputs}>
        <Feather name="calendar" size={25} color="#FFFFFF" />
        <TextInput
          style={styles.textUser}
          value={userData.dataNascimento}
          onChangeText={(text) => setUserData((prevData) => ({ ...prevData, dataNascimento: text }))}
          editable={editarSenha}
        />
      </View>

      <View style={styles.containerInputs}>
        <Feather name="mail" size={25} color="#FFFFFF" />
        <TextInput
          style={styles.textUser}
          value={userData.email}
          onChangeText={(text) => setUserData((prevData) => ({ ...prevData, email: text }))}
          editable={editarSenha}
        />
      </View>

      <View style={styles.containerInputs}>
        <Feather name="link" size={25} color="#FFFFFF" />
        <TextInput
          style={styles.textInput}
          value={userData.site}
          onChangeText={(text) => setUserData((prevData) => ({ ...prevData, site: text }))}
          editable={editarSenha}
        />
      </View>

      <View style={styles.containerInputs}>
        <TouchableOpacity style={styles.containerPassword} onPress={() => setEditarSenha(!editarSenha)}>
          <Feather name="unlock" size={25} color="#FFFFFF" />
          <TextInput
            secureTextEntry={!editarSenha}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            editable={editarSenha}
          />
          {editarSenha && (
            <TouchableOpacity onPress={salvarSenha}>
              <Text>Salvar Senha </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Text>Mudar Senha </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonEdit} onPress={editarPerfil}>
        <Text style={styles.textButtonEdit}>Editar Perfil </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PerfilScreen;
