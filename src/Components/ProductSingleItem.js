import {Image, item} from 'react-native';
import React from 'react';

const ProductSingleItem = ({image}) => {
  return (
    <Image
      source={{
        uri: image,
      }}
      resizeMode="cover"
      className="w-full h-full rounded-xl"
    />
  );
};

export default ProductSingleItem;
