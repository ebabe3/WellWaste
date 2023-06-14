import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import SliderComponent from '../components/sliderComponent';


export default function SupplierMain() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <SliderComponent />
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AddFood')}>
        <Image
          style={styles.image}
          source={ require('../assets/order.png')}
        />
        <View style={{flex: 1, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>
          Add Food
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
    marginTop: 40,
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
