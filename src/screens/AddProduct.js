import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import TextInputUI from '../components/TextInputUI';
import {SupplierActions} from '../redux/reducers/SupplierStore';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';
import BackButton from '../components/BackButton';

export default function AddProduct({navigation}) {
  const dispatch = useDispatch();
  const [time, setTime] = useState(new Date());
  function editInput(key, value) {
    dispatch(SupplierActions.updateProductInfo({key, value}));
  }
  const [imgSrc, setImgSrc] = useState(null);
  const {isExpired} = useSelector(state => state.SupplierStore.productInfo);
  const insets = useSafeAreaInsets();

  function openGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImgSrc(image.path);
      editInput('imgSrc', image.path);
    });
  }
  console.log(imgSrc);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          alignItems: 'center',
          height: 30,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#41B5FB',
            height: '100%',
            width: 30,
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Image
            source={require('../assets/back.png')}
            style={{width: 20, height: 20, tintColor: 'white'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{fontWeight: '700'}}>Create the package content</Text>

        {/* <Image
          source={require('../assets/logo.png')}
          style={{width: 150, height: 150,backgroundColor: 'red',}}
          resizeMode="contain"
        /> */}
      </View>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView extraHeight={120}>
          <TouchableOpacity
            onPress={openGallery}
            style={{
              width: '100%',
              height: 100,
              borderWidth: 1,
              borderRadius: 8,
              borderColor: 'gray',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            {!imgSrc ? (
              <Text>Add Photo +</Text>
            ) : (
              <Image
                source={{uri: imgSrc}}
                style={{...StyleSheet.absoluteFillObject}}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
          <TextInputUI
            onChangeText={text => {
              editInput('name', text);
            }}
            title="Product Name"
            multiline
            styleProps={{
              containerSty: {marginTop: 16},
              textInputContainer: {},
            }}
          />
          <TextInputUI
            onChangeText={text => {
              editInput('ingredients', text);
            }}
            title="Contents of Products"
            multiline
            styleProps={{
              containerSty: {marginTop: 16},
              textInputContainer: {},
            }}
          />
          <TextInputUI
            onChangeText={text => {
              editInput('detail', text);
            }}
            title="Details"
            multiline
            styleProps={{
              containerSty: {marginTop: 16},
              textInputContainer: {
                height: 80,
              },
              inputSty: {
                height: '100%',
              },
            }}
          />
          <TextInputUI
            onChangeText={text => {
              editInput('quantity', text);
            }}
            title="Product Quantity"
            multiline
            styleProps={{
              containerSty: {marginTop: 16},
              textInputContainer: {},
            }}
          />
          {!isExpired && (
            <View style={{marginTop: 16}}>
              <Text style={{color: 'black'}}>
              Days Left Until Expiry Date
              </Text>
              <View
                style={[
                  {
                    width: '100%',
                    height: 50,
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingHorizontal: 12,
                    justifyContent: 'center',
                    marginTop: 4,
                    borderColor: 'gray',
                  },
                ]}>
                <DateTimePicker
                  value={time}
                  onChange={(e, date) => {
                    setTime(date);
                    editInput('expireDate', date.toLocaleDateString());
                  }}
                />
              </View>
            </View>
          )}
        </KeyboardAwareScrollView>

        <Image
          source={require('../assets/wellwaste.png')}
          style={{
            width: 130,
            height: 80,
            position: 'absolute',
            bottom: 40 + insets?.bottom,
            alignSelf: 'center',
            opacity: 0.3,
          }}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#3fb6fc',
            width: '100%',
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            opacity: 0.9,
          }}
          onPress={() => {
            navigation.navigate('KitchenProfile');
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20},
});
