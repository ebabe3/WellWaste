/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import BackButton from '../components/BackButton';

const WarehouseProfile = () => {
  const navigation = useNavigation();
  const newProduct = useSelector(state => state.SupplierStore.productInfo);
  console.log(newProduct.detail);
  const firstItem = {
    id: 99,
    name: newProduct?.name,
    image: require('../assets/food.png'),
    description: newProduct?.detail,
    stock: 'In Stock',
    stockNumber: newProduct?.quantity,
    ingredients: newProduct?.ingredients,
    expireDate: newProduct?.expireDate,
    heatSituation: newProduct?.isHeated,
    address: newProduct?.address,
  };
  const data = [
    {
      id: 1,
      name: 'Fixed Menu 1',
      image: require('../assets/food.png'),
      description: 'Muftak bilgileri',
      stock: 'In Stock',
      stockNumber: 10,
    },
    {
      id: 2,
      name: 'Fixed Menu 2',
      image: require('../assets/food.png'),
      description: 'Muftak bilgileri',
      stock: 'In Stock',
      stockNumber: 10,
    },
    {
      id: 3,
      name: 'Fixed Menu 3',
      image: require('../assets/food.png'),
      description: 'Muftak bilgileri',
      stock: 'In Stock',
      stockNumber: 10,
    },
    {
      id: 4,
      name: 'Fixed Menu 4',
      image: require('../assets/food.png'),
      description: 'Muftak bilgileri',
      stock: 'In Stock',
      stockNumber: 10,
    },
  ];

  const Item = ({
    name,
    image,
    description,
    ingredients,
    expireDate,
    heatSituation,
    stock,
    stockNumber,
    address,
  }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Food', {
          name,
          image,
          stock,
          stockNumber,
          ingredients,
          description,
          expireDate,
          address,
          heatSituation,
        })
      }>
      <Image
        style={{height: 100, width: 100, borderRadius: 10}}
        source={image}
      />
      <View style={{justifyContent: 'center', marginLeft: 20}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>{name}</Text>
        <Text style={{fontSize: 11, color: 'gray'}}>{stock}</Text>
        <Text style={{fontSize: 11, color: 'gray'}}>
          Product Quantity: {stockNumber}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const lastData = useMemo(() => {
    if (newProduct.name) {
      return [{...firstItem}, ...data];
    }
    return data;
  }, [data, firstItem, newProduct.name]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <BackButton />
        <Image
          source={require('../assets/yemeksepeti.png')}
          style={{width: '100%', height: 290}}
        />
        <Text style={styles.name}>Yemeksepeti</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          style={{marginTop: 30}}
          data={lastData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Item
              name={item?.name}
              image={item?.image}
              description={item?.description}
              stock={item?.stock}
              stockNumber={item?.stockNumber}
              ingredients={item?.ingredients}
              expireDate={item?.expireDate}
              heatSituation={item?.heatSituation}
              address={item?.address}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
  },
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
    paddingTop: 10,
    paddingLeft: 10,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  card: {
    borderRadius: 10,
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default WarehouseProfile;
