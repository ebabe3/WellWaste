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
import SliderComponent from '../components/sliderComponent';


export default function SupplierMain() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation()

  const handleRegister = () => {
    // burada kullanıcının kayıt olmasını sağlamak için gerekli işlemleri gerçekleştirebilirsiniz
  };

  return (
    <View style={styles.container}>
      <SliderComponent />
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('KitchenList')}>
        <Image
          style={styles.image}
          source={ require('../assets/order.png')}
        />
        <View style={{flex: 1, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>
          Restaurants
        </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('WarehouseList')}>
        <Image
          style={styles.image}
          source={ require('../assets/depo.png')}
        />
        <View style={{flex: 1, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>
            Warehouses
          </Text>
         
        </View>
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
    paddingBottom: 50,
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
    borderRadius: 10,
    padding: 10,
    width: '90%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: '#fff',
    flexDirection : 'row',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'gray',
  },
  description: {
    fontSize: 12,
    color: 'gray',
    width: 180,
  },
});
