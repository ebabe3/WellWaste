import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // burada kullanıcının kayıt olmasını sağlamak için gerekli işlemleri gerçekleştirebilirsiniz
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../logo.png')}
        style={{width: 200, height: 150, marginBottom: 50}}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Company Name"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Branch Name"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={styles.input}
          placeholder="Select City"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TextInput
        style={styles.input}
        placeholder=" Confirm Password"
        secureTextEntry={true}
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
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
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
