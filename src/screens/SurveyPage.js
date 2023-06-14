import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {SupplierActions} from '../redux/reducers/SupplierStore';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

export default function SurveyPage() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const answers = useSelector(state => state.SupplierStore.productInfo);

  const questions = [
    {
      question: 'What is the type of food?',
      options: [
        {
          title: 'Ready to Eat Food',
          onPress: () => {
            setQuestionIndex(1);
            dispatch(
              SupplierActions.updateProductInfo({
                key: 'type',
                value: 'Hazır Yemek',
              }),
            );
          },
        },
        {
          title: 'Others',
          onPress: () => {
            setQuestionIndex(1);
            dispatch(
              SupplierActions.updateProductInfo({
                key: 'type',
                value: 'Paketli Gıda',
              }),
            );
          },
        },
      ],
      image: require('../assets/food.png'),
    },
    {
      question: 'Has the expiration date passed?',
      options: [
        {
          title: 'Yes',
          onPress: () => {
            navigation.navigate('AddProduct');
            dispatch(
              SupplierActions.updateProductInfo({
                key: 'isExpired',
                value: true,
              }),
            );
          },
        },
        {
          title: 'No',
          onPress: () => {
            dispatch(
              SupplierActions.updateProductInfo({
                key: 'isExpired',
                value: false,
              }),
            );
            if (answers.type === 'Hazır Yemek') {
              setQuestionIndex(2);
            } else {
              navigation.navigate('AddProduct');
            }
          },
        },
      ],
      image: require('../assets/food.png'),
    },
    {
      question: 'Has your product been heated?',
      options: [
        {
          title: 'Evet',
          onPress: () => {
            setQuestionIndex(3);
            dispatch(
              SupplierActions.updateProductInfo({
                key: 'isHeated',
                value: true,
              }),
            );
          },
        },
        {
          title: 'Hayır',
          onPress: () => {
            navigation.navigate('');
            dispatch(
              SupplierActions.updateProductInfo({
                key: 'isHeated',
                value: false,
              }),
            );
          },
        },
      ],
      image: require('../assets/order.png'),
    },
    {
      question: 'Has 4 hours passed since the product was heated?',
      options: [
        {
          title: 'Yes',
          onPress: () => {
            navigation.navigate('AddProduct');
            dispatch(
              SupplierActions.updateProductInfo({
                key: 'lastFourHours',
                value: true,
              }),
            );
          },
        },
        {
          title: 'No',
          onPress: () => {
            navigation.navigate('AddProduct');
            dispatch(
              SupplierActions.updateProductInfo({
                key: 'lastFourHours',
                value: false,
              }),
            );
          },
        },
      ],
    },
  ];

  const renderQuestion = (question, options, image) => {
    return (
      <View style={styles.questionContainer}>
        <Image
          source={image}
          style={{width: 300, height: 200, borderRadius: 30, marginBottom: 20}}
        />
        <Text style={styles.questionText}>{question}</Text>
        {options.map(({title, onPress}, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionButton]}
            onPress={onPress}>
            <Text style={styles.optionText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/wellwaste.png')}
        style={{width: 130, height: 80, position: 'absolute', top: insets?.top}}
        resizeMode="contain"
      />
      {renderQuestion(
        questions[questionIndex].question,
        questions[questionIndex].options,
        questions[questionIndex].image,
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    position: 'relative',
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
