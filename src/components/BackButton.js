import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const instets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[styles.container, {top: instets?.top}]}>
      <Image
        source={require('../assets/back.png')}
        style={{width: 20, height: 20, tintColor: 'white'}}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10000,
    padding: '3%',
    backgroundColor: '#41B5FB',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
  },
});
