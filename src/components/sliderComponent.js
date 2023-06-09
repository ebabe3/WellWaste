import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const SliderComponent = () => {
  const slides = [
    {
      image: require('../assets/slider1.png'),
      text: 'Combine surplus with social responsibility.',
    },
    {
        image: require('../assets/slider3.png'),
        text: 'Recycling for a sustainable future.',
    },
    {
        image: require('../assets/slider2.png'),
        text: 'Kampanya 3',
    },
  ];

  return (
    <Swiper autoplay={true}>
      {slides.map((slide, index) => (
        <View key={index} style={styles.slideContainer}>
          <ImageBackground
            source={slide.image}
            style={styles.imageBackground}
            resizeMode="cover"
            blurRadius={2} // Parlaklığı düşürmek için blur efekti uygulanabilir
          >
            <Text style={styles.text}>{slide.text}</Text>
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    paddingBottom: 60
  },
});

export default SliderComponent;
