import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Main() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // burada kullanıcının kayıt olmasını sağlamak için gerekli işlemleri gerçekleştirebilirsiniz
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../food.png')}
          style={{width: 200, height: 200, marginBottom: 10, marginTop: 120}}
        />
        <Image
          source={require('../../food.png')}
          style={{width: 200, height: 200, marginBottom: 10, marginTop: 120}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 30,
            marginBottom: 10,
            marginTop: 10,
            color: '#6F23FF',
            fontWeight: 'bold',
          }}>
          Getir
        </Text>
        <Image
          source={require('../../getir.png')}
          style={{width: 50, height: 50, marginBottom: 10, marginTop: 10}}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}> Detail</Text>
          <Text style={styles.description}>
            {' '}
            There are 20 daily package meals.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>
          The address where you will receive the packages
        </Text>
      </TouchableOpacity>
      <Image
        source={require('./map.png')}
        style={{width: 400, height: 550, marginBottom: 50}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 0.2,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'blue',
    fontSize: 13,

    marginBottom: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});
