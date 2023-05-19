/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/outline';
import {auth} from '../../firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);

  const [hideCfPassword, setHideCfPassword] = useState(true);

  // const [showModal, setShowModal] = useState(false);

  const emailRegex = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  );

  const handleSignUp = async () => {
    if (
      emailRegex.test(email) &&
      password === confirmPassword &&
      !password.includes(' ') &&
      password.length >= 8
    ) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          Alert.alert('Create account successfully!');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        })
        .catch(error => {
          console.log(error.message);
          return Alert.alert('Your email or password is invalid!');
        });
    } else return Alert.alert('Your email or password is invalid!');
  };

  return (
    <SafeAreaView className="flex-1">
      <View className=" flex-1 items-center">
        {/* LOGO */}
        <View className="w-52 mt-5 aspect-square ">
          <Image
            source={{
              uri: 'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png',
            }}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>

        {/* GROUP INPUT */}
        <View className="w-full gap-y-10 px-10 mt-1">
          {/* EMAIL INPUT */}
          <View
            className="flex-row  w-full border-0.5 border-black/80 
          rounded-xl px-5 items-center  ">
            <TextInput
              //   placeholder="Example : email@gmail.com"
              className="flex-1 py-5 text-lg leading-5 caret-black"
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
                letterSpacing: 1.5,
              }}>
              Email
            </Text>
          </View>

          {/* PASSWORD INPUT */}
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
                letterSpacing: 1.5,
              }}>
              Password
            </Text>
          </View>

          {/* CONFIRM PASSWORD INPUT */}
          <View
            className="flex-row  w-full border-0.5 border-black/80 
          rounded-xl px-5 items-center ">
            <TextInput
              //   placeholder="Password"
              className="flex-1 py-5 text-lg leading-5"
              secureTextEntry={hideCfPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              className="ml-3"
              onPress={() => {
                setHideCfPassword(!hideCfPassword);
                console.log(hideCfPassword);
              }}>
              {hideCfPassword ? (
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
                letterSpacing: 1.5,
              }}>
              Confirm password
            </Text>
          </View>
        </View>

        {/* BUTTON SIGN UP */}
        <View className="mt-10 w-full px-10 space-y-5">
          <TouchableOpacity
            className="bg-black items-center py-4 rounded-full"
            onPress={() => {
              handleSignUp();
            }}>
            <Text className="text-white text-lg font-semibold tracking-wider">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* HAVE AN ACCOUNT? */}
        <View
          className="flex-1 flex-row items-end gap-x-1 mb-4
        ">
          <Text className="text-base font-medium">
            Already have an Account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text className="text-base font-bold text-purple-500">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
