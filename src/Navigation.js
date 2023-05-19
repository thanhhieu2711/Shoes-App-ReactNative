/* eslint-disable react/no-unstable-nested-components */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import ProductScreen from './screens/ProductScreen';
import ShopingCartScreen from './screens/ShopingCartScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import SearchScreen from './screens/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './Components/DrawerContent';
import ViewAllScreen from './screens/ViewAllScreen';
import PostDetailScreen from './screens/PostDetailScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{contentStyle: {backgroundColor: '#ffffff'}}}>
      <Stack.Screen
        name="Sign in"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign up"
        component={SignUp}
        options={{headerTitle: '', headerShadowVisible: false}}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{contentStyle: {backgroundColor: '#ffffff'}}}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="List Product"
        component={ProductScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="View All"
        component={ViewAllScreen}
        options={{headerShadowVisible: false, headerTitle: 'New Arrivals'}}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Post Details"
        component={PostDetailScreen}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={({navigation}) => ({
          // presentation: 'modal',
          headerRight: () => {
            return (
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}>
                <Text className="text-base font-medium">Done</Text>
              </Pressable>
            );
          },
          headerBackVisible: false,
        })}
      />
      <Stack.Screen
        name="Shopping Cart"
        component={ShopingCartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent />}>
      <Drawer.Screen
        name="Home Drawer"
        component={MainStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{contentStyle: {backgroundColor: '#ffffff'}}}
        initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginStack}
          initialRouteName="Sign in"
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
