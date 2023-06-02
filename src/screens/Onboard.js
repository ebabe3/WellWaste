import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Onboard = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/onboardBackground.png')}>
      <View
        style={{
          backgroundColor: 'gray',
          width: '100%',
          height: '100%',
          opacity: 0.3,
        }}
      />
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          height: '100%',
          paddingVertical: 150,
          paddingHorizontal: 30,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 50, fontWeight: 'bold', color: '#fff'}}>
          WellWaste
        </Text>
        <View style={{width: 300, height: 200}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#fff'}}>
            Put an End to Food Waste, Support Community Assistance
          </Text>
        </View>
        <View>
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
            onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
              Log ın
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              width: 250,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Onboard;
