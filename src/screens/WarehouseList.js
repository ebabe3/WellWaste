import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import {SafeAreaView} from 'react-native-safe-area-context';

const WarehouseList = () => {
  const navigation = useNavigation();
  const [latLon, setLatLon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState('');
  const getCityName = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.address?.city) {
        console.log(data.address.city);
        setCityName(data.address.city);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const data = [
    {
      id: 1,
      name: 'Yemeksepeti',
      image: require('../assets/yemeksepeti.png'),
      description: 'Mutfak bilgileri',
    },
    {
      id: 2,
      name: 'Migros',
      image: require('../assets/migros.png'),
      description: 'Mutfak bilgileri',
    },
    {
      id: 3,
      name: 'Carrefour',
      image: require('../assets/carrefour.png'),
      description: 'Mutfak bilgileri',
    },
    {
      id: 4,
      name: 'Getir',
      image: require('../assets/getir.png'),
      description: 'Mutfak bilgileri',
    },
    {
      id: 5,
      name: 'Yemeksepeti',
      image: require('../assets/yemeksepeti.png'),
      description: 'Mutfak bilgileri',
    },
    {
      id: 6,
      name: 'Getir',
      image: require('../assets/getir.png'),
      description: 'Mutfak bilgileri',
    },
  ];

  useEffect(() => {
    async function getLoc() {
      const status = await Geolocation.requestAuthorization('whenInUse'); // or "always"
      console.log(status); // "disabled", "granted", "denied", "restricted"
      Geolocation.getCurrentPosition(
        async position => {
          console.log('latitude', position.coords.latitude);
          console.log('longitude', position.coords.longitude);
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          setLatLon({latitude, longitude});
          console.log(latitude, longitude);
          getCityName(latitude, longitude);
          // this._map.animateToCoordinate({ latitude: position.coords.latitude, longitude: position.coords.longitude },300);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
      setLoading(false);
    }
    getLoc();
  }, []);

  const Item = ({name, image, description}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('WarehouseProfile')}>
      <Image style={styles.image} source={image} />
      <View style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
        <Text style={{fontSize: 15, color: 'gray'}}>{description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'gray',
          }}>
          Suppliers
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'gray',
          }}>
          {cityName ??
            `X:${latLon?.latitude?.toFixed(2)} Y:${latLon?.longitude?.toFixed(
              2,
            )}`}
        </Text>
      </View>
      {!latLon && loading ? (
        <View style={{marginTop: 50}}>
          <ActivityIndicator size={'large'} color="#3fb6fc" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Item name={item.name} image={item.image} />}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default WarehouseList;
