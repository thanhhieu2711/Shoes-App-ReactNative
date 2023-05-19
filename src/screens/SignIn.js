/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/outline';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase-config';
const SignIn = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // setEmail('');
        navigation.navigate('Drawer');
        setPassword('');
      })
      .catch(error => {
        Alert.alert('Error', 'Email or password invalid');
        console.log(error.message);
      });
  };

  return (
    <SafeAreaView className="flex-1">
      <View className=" flex-1 items-center">
        {/* LOGO */}
        <View className="w-52 aspect-square mt-20">
          <Image
            source={{
              uri: 'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png',
            }}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>

        {/* GROUP INPUT */}
        <View className="w-full gap-y-7 px-10 mt-1">
          <View
            className="flex-row  w-full border-0.5 border-black/80 
          rounded-xl px-5 items-center ">
            <TextInput
              //   placeholder="Example : email@gmail.com"
              className="flex-1 py-5 text-lg leading-5"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <Text
              style={{
                position: 'absolute',
                top: -10,
                left: 15,
                backgroundColor: 'white',
                paddingHorizontal: 5,
                fontSize: 16,
                fontWeight: '500',
                color: 'grey',
                letterSpacing: 1,
              }}>
              Email
            </Text>
          </View>
          <View
            className="flex-row  w-full border-0.5 border-black/80 
          rounded-xl px-5 items-center ">
            <TextInput
              //   placeholder="Password"
              className="flex-1 py-5 text-lg leading-5"
              secureTextEntry={hidePassword}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              className="ml-3"
              onPress={() => {
                setHidePassword(!hidePassword);
              }}>
              {hidePassword ? (
                <EyeIcon color={'#333'} />
              ) : (
                <EyeSlashIcon color={'#333'} />
              )}
            </TouchableOpacity>
            <Text
              style={{
                position: 'absolute',
                top: -10,
                left: 15,
                backgroundColor: 'white',
                paddingHorizontal: 5,
                fontSize: 16,
                fontWeight: '500',
                color: 'grey',
                letterSpacing: 1,
              }}>
              Password
            </Text>
          </View>

          {/* FORGOT PASSWORD */}
          <TouchableOpacity>
            <Text className="text-right mr-1 text-sm text-black/70">
              Forgot your password ?
            </Text>
          </TouchableOpacity>
        </View>

        {/*  BUTTON SIGN IN*/}
        <View className="mt-7 w-full px-10 space-y-5 ">
          <TouchableOpacity
            className="bg-black items-center py-4 rounded-full"
            onPress={() => {
              handleSignIn();
            }}>
            <Text className="text-white text-lg tracking-wider font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        {/* ALREADY HAVE ACCOUNT */}
        <View className="flex-1 flex-row gap-x-1 items-end mb-4">
          <Text className="text-base font-medium">Dont have an Account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Sign up');
            }}>
            <Text className="text-base font-bold text-purple-500">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
