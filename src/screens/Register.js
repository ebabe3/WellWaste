import { useNavigation } from '@react-navigation/native';
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
  
  const navigation = useNavigation()

  const handleRegister = () => {
    // burada kullanıcının kayıt olmasını sağlamak için gerekli işlemleri gerçekleştirebilirsiniz
  };

  const [isVakifSelected, setIsVakifSelected] = useState(false);
  const [isTedarikciSelected, setIsTedarikciSelected] = useState(false);

  const handleVakifPress = () => {
    setIsVakifSelected(true);
    setIsTedarikciSelected(false);
  };

  const handleTedarikciPress = () => {
    setIsVakifSelected(false);
    setIsTedarikciSelected(true);
  };


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
      <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'space-between', marginBottom: 20 }}>
  <TouchableOpacity
    style={[
      styles.button,
      isVakifSelected && styles.selectedButton,
    ]}
    onPress={handleVakifPress}
  >
    <Text style={[
      styles.buttonText,
      isVakifSelected && styles.selectedButtonText,
    ]}>
      Vakıf
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[
      styles.button,
      isTedarikciSelected && styles.selectedButton,
    ]}
    onPress={handleTedarikciPress}
  >
    <Text style={[
      styles.buttonText,
      isTedarikciSelected && styles.selectedButtonText,
    ]}>
      Tedarikçi
    </Text>
  </TouchableOpacity>
</View>

      <TouchableOpacity
        style={{
          backgroundColor: '#3fb6fc',
          width: 250,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          opacity: 0.9,
        }}
        onPress={ 
          () => isTedarikciSelected ? navigation.navigate('SurveyPage') : navigation.navigate('Main')}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '45%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#3fb6fc'
  },
  buttonText: {
    color: '#3fb6fc',
    fontSize: 15,
    fontWeight: 'bold',
  },
  selectedButton: {
    width: '45%',
    height: 50,
    backgroundColor: '#3fb6fc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#3fb6fc'
  },
  selectedButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
