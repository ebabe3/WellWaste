import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import {Button} from '../components/Button';
import {useSelector} from 'react-redux';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '../components/BackButton';

const Food = ({route, navigation}) => {
  const {
    name,
    image,
    stock,
    description,
    address,
    expireDate,
    stockNumber,
    ingredients,
    heatSituation,
  } = route?.params || false;

  const userType = useSelector(state => state.SupplierStore.userType);
  const isExpired = useSelector(
    state => state.SupplierStore.productInfo?.isExpired,
  );
  const instets = useSafeAreaInsets();

  function getDayDifference(dateString) {
    const today = new Date();
    const targetDate = new Date(dateString);

    // Zaman farkını hesapla ve gün olarak dönüştür
    const timeDiff = targetDate.getTime() - today.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return dayDiff;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}>
        <BackButton />
        <Image
          source={require('../assets/food.png')}
          style={{width: '100%', height: 290}}
        />
        <View
          style={{
            marginTop: 20,
            width: '90%',
            height: 100,
            borderRadius: 10,
            padding: 10,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 25, color: 'black', fontWeight: '500'}}>
            {name || 'Fixed Menu 1'}
          </Text>
          <Text style={{fontSize: 15, color: 'green'}}>Stokta</Text>
          <Text style={{fontSize: 15, color: 'black'}}>
            Product Quantity: {stockNumber || '10'}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
            {ingredients || 'Vegetable Lentil Soup'}
          </Text>
          <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
            Description:{' '}
          </Text>
          <Text style={{fontSize: 13, color: 'black'}}>
            {description ||
              'Sebzeli mercimek çorbası, leziz ve besleyici bir başlangıç yemeğidir. Bol miktarda sebze ve protein açısından zengin mercimek ile hazırlanan bu çorba, hem doyurucu hem de lezzetlidir. İçerdiği vitaminler ve lif açısından da sağlıklı bir seçenektir.'}
          </Text>
          <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
            Address:{' '}
          </Text>
          <Text style={{fontSize: 13, color: 'black'}}>
            {address || 'Halkalı'}
          </Text>
          {!ingredients && (
            <>
              <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
                İçerik:{' '}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
              Governments, businesses, and individuals play vital roles in achieving sustainability through policies, partnerships, and responsible practices.
              </Text>
            </>
          )}
          <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
            Expiration Date:{' '}
          </Text>
          <Text style={{fontSize: 13, color: 'black'}}>
            {isExpired
              ? 'Expired'
              : expireDate
              ? `${expireDate}\n(${getDayDifference(
                  new Date(
                    expireDate
                      ?.replaceAll('.', '/')
                      .replace(/(\d+[/])(\d+[/])/, '$2$1'),
                  ),
                )} days left) `
              : '08.06.2023 (Today)'}
          </Text>
          <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
            Heat Situation:{' '}
          </Text>
          <Text style={{fontSize: 13, color: 'black'}}>
            {heatSituation !== undefined
              ? heatSituation
                ? `Heated ${
                    userType === 'Supplier'
                      ? '\n*This item will be forwarded to the compost center if not received within 2 days'
                      : ''
                  }`
                : 'Not Heated'
              : 'Sustainability is about responsibly using resources to meet present needs without compromising the ability of future generations to meet their own needs. It involves environmental conservation, social equity, and economic development.'}
          </Text>
        </View>
        {!ingredients && (
          <>
            <View style={styles.card}>
              <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                Vegetable Pilaf
              </Text>
              <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
                Description:{' '}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
              Sustainability is a concept that relates to the responsible and balanced use of resources to meet the needs of the present generation without compromising the ability of future generations to meet their own needs.
              </Text>
              <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
                Content:{' '}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
              Environmental sustainability focuses on preserving and protecting the natural environment and its resources. It involves reducing waste, minimizing pollution, conserving energy and water, protecting biodiversity, and promoting renewable and clean energy sources.
              </Text>
              <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
                Expiration Date:{' '}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
                08.06.2023 (Today)
              </Text>
              <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
                Heat Situation:{' '}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
              Environmental sustainability focuses on preserving and protecting the natural environment and its resources. It involves reducing waste, minimizing pollution, conserving energy and water, protecting biodiversity, and promoting renewable and clean energy sources.
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                Mushroom 
              </Text>
              <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
                Description:{' '}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
              Social sustainability recognizes that a sustainable future requires addressing social issues and improving the well-being of people.
              </Text>
              <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
                Content:{' '}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
              Economic sustainability involves developing and maintaining a robust economy that supports long-term prosperity while considering environmental and social factors.
              </Text>
              <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
                Expiration Date:{' '}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
                08.06.2023 (Today)
              </Text>
              <Text style={{fontSize: 13, color: 'gray', paddingTop: 5}}>
                Heat Situation:{' '}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
              Sustainability is not limited to any specific sector or industry but encompasses a wide range of areas, including agriculture, energy, transportation, construction, manufacturing, and more.
              </Text>
            </View>
          </>
        )}
        <Button
          action={() => {
            if (userType !== 'Supplier') {
              Alert.alert(
                'Thank you for saving this meal!',
                "Don't forget to take your meal within 4 hours",
                [
                  {
                    text: 'Okay',
                    onPress: () => {
                      navigation.goBack();
                    },
                  },
                ],
              );
            } else {
              navigation.navigate('AddProduct');
            }
          }}
          text={userType !== 'Supplier' ? 'Save The Food' : 'Edit'}
          color="#3ab3fd"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  card: {
    marginVertical: 10,
    width: '90%',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Food;
