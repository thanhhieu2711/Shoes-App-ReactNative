import {View, Text, SafeAreaView, StatusBar, Switch} from 'react-native';
import React from 'react';

const DrawerContent = () => {
  return (
    <SafeAreaView className="flex-1 bg-black/95">
      <View className="flex-row items-center gap-x-4 ml-4">
        <Text className="text-white text-xl font-bold">Dark mode</Text>
        <Switch></Switch>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
