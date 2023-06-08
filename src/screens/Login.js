import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={{width: 450, height: 200, marginBottom: 30}}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Company Name"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#009900',
          width: 250,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          opacity: 0.9,
        }}
        onPress={() => navigation.navigate('Main')}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
          Log ın
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
        style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{marginTop: 20, color: 'black'}}>Need Help? </Text>
        <Text style={{marginTop: 20, color: 'gray'}}>Forgot Password </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '70%',
    height: 50,
    backgroundColor: '#3ab3fd',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
