import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Onboard from '../screens/Onboard';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Main from '../screens/Main';
import WarehouseList from '../screens/WarehouseList';
import KitchenList from '../screens/KitchenList';
import KitchenProfile from '../screens/KitchenProfile';
import Food from '../screens/Food';
import WarehouseProfile from '../screens/WarehouseProfile';
import SupplierMain from '../screens/SupplierMain';
import SurveyPage from '../screens/SurveyPage';


function LoginStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
       name="Register" 
       component={Register} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WarehouseList"
        component={WarehouseList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KitchenList"
        component={KitchenList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KitchenProfile"
        component={KitchenProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Food"
        component={Food}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WarehouseProfile"
        component={WarehouseProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
         name="SupplierMain"
         component={SupplierMain}
         options={{headerShown: false}}
         />
      <Stack.Screen
         name="SurveyPage"
         component={SurveyPage}
         options={{headerShown: false}}
         />
    </Stack.Navigator>
  );
}

export default LoginStack;
