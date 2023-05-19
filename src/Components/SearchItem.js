import {View, Text} from 'react-native';
import React from 'react';

const SearchItem = ({name}) => {
  return (
    <View className="px-5">
      <Text className=" font-bold text-black/80 text-lg" numberOfLines={2}>
        {name}
      </Text>
    </View>
  );
};

export default SearchItem;
