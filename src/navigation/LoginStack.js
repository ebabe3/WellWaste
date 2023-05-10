import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Main from '../screens/Main';

function LoginStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
