import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SurveyPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigation = useNavigation();
  const questions = [
    {
      question: 'Soru 1: Merhaba, tedarikçi olarak grubunuzu seçiniz:',
      options: ['Restoran', 'Kafe', 'Otel', 'Market', 'Online Sipariş Deposu', 'Diğer'],
      image: require('../assets/depo.png')
    },
    {
      question: 'Soru 2: Ürün eklemek ister misiniz?',
      options: ['Evet', 'Hayır'],
      image: require('../assets/food.png')
    },
    {
      question: 'Soru 3: Siparişlerde kurye kullanmak ister misiniz?',
      options: ['Evet', 'Hayır'],
      image: require('../assets/order.png')
    },
    {
      question: 'Soru 4: Siparişlerde kurye kullanmak ister misiniz?',
      options: ['Evet', 'Hayır'],
    },
    // Diğer sorular buraya eklenir
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    // Bir sonraki soruya geç
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const renderQuestion = (question, options, image) => {
    return (
      <View style={styles.questionContainer}>
        <Image 
          source={image}
          style={{ width: 300, height: 200, borderRadius: 30 , marginBottom: 20}}
        />
        <Text style={styles.questionText}>{question}</Text>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === index && styles.selectedOptionButton,
            ]}
            onPress={() => handleAnswer(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  if (questionIndex === questions.length - 1) {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/welcome.png')} style={{ width: 240, height: 100,  marginBottom: 20}}/>
        <Text style={styles.completedText}>Anket tamamlandı ürün eklemeye hazırsınız aramıza hoşgeldiniz!</Text>
        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => navigation.navigate('SupplierMain')}
        >
          <Text style={styles.optionText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderQuestion(questions[questionIndex].question, questions[questionIndex].options, questions[questionIndex].image)}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  questionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 20,
  },
  optionButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOptionButton: {
    backgroundColor: '#3fb6fc',
    borderColor: '#3fb6fc',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  completedText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
});
