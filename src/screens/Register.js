import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {SupplierActions} from '../redux/reducers/SupplierStore';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

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
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
            placeholder="Address"
            onChangeText={text => {
              setPassword(text);
              dispatch(
                SupplierActions.updateProductInfo({
                  key: 'address',
                  value: text,
                }),
              );
            }}
            value={password}
          />
        </View>
        {isVakifSelected && (
          <View style={[styles.input, {marginBottom: 0}]}>
            <RNPickerSelect
              placeholder={{label: 'Select type', inputLabel: 'Type'}}
              style={{
                placeholder: {color: 'gray'},
                inputAndroid: {color: 'gray'},
                inputIOS: {color: 'black'},
              }}
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Soup Kitchen', value: 'Soup Kitchen'},
                {label: 'Shelter', value: 'Shelter'},
                {label: 'Compost Center', value: 'Compost Center'},
              ]}
            />
          </View>
        )}
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
        <View
          style={{
            flexDirection: 'row',
            width: '60%',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={[styles.button, isVakifSelected && styles.selectedButton]}
            onPress={handleVakifPress}>
            <Text
              style={[
                styles.buttonText,
                isVakifSelected && styles.selectedButtonText,
              ]}>
              Local Charitiess
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              isTedarikciSelected && styles.selectedButton,
            ]}
            onPress={handleTedarikciPress}>
            <Text
              style={[
                styles.buttonText,
                isTedarikciSelected && styles.selectedButtonText,
              ]}>
              Supplier
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
          onPress={() => {
            isTedarikciSelected
              ? navigation.navigate('SurveyPage')
              : navigation.navigate('WarehouseList');
            dispatch(
              SupplierActions.setUserType(
                isTedarikciSelected ? 'Supplier' : 'Foundation',
              ),
            );
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
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
    borderColor: '#3fb6fc',
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
    borderColor: '#3fb6fc',
  },
  selectedButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
