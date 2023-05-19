import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {listPostSelectedSelector} from '../Redux/Selectors';

const PostDetailScreen = () => {
  const {image, title, description} = useSelector(listPostSelectedSelector);
  return (
    <ScrollView>
      <View className="my-10 px-4">
        <Text className="text-justify font-semibold tracking-tighter text-3xl">
          {title}
        </Text>
        <View className="w-full aspect-square my-10">
          <Image
            source={{
              uri: image,
            }}
            resizeMode="cover"
            className="w-full h-full rounded-lg"
          />
        </View>
        <Text className=" text-justify text-xl leading-8 tracking-widest">
          {description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PostDetailScreen;
