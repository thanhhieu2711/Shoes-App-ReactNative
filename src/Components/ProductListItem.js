import {View, Image} from 'react-native';
import React from 'react';
export default function ProductListItem({imgUrl, image}) {
  return (
    <Image
      source={{uri: imgUrl ? imgUrl : image}}
      resizeMode="contain"
      className=" w-full aspect-square rounded-lg"
    />
  );
}
