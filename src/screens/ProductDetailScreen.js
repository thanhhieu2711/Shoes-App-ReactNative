/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  useWindowDimensions,
  Pressable as Presumable,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/mini';
import {useDispatch, useSelector} from 'react-redux';
import {selectedProductSelector} from '../Redux/Selectors';
import {CartSlice} from '../Redux/CartSlice';
const ProductDetailScreen = ({navigation}) => {
  const {width} = useWindowDimensions();
  const {id, name, image, images, price, sizes, sale, description} =
    useSelector(selectedProductSelector);
  const [sizeChecked, setSizeChecked] = useState();
  const dispatch = useDispatch();
  return (
    <View>
      {/* HEADER BACK BUTTON */}
      <Pressable
        className="w-12 h-12 bg-black/10 rounded-xl absolute z-40 top-14 left-4 items-center justify-center"
        onPress={() => {
          navigation.goBack();
        }}>
        <ArrowLeftIcon fill={'black'} size={22} />
      </Pressable>

      {/* HEADER CART BUTTON */}
      {/* <Pressable
        className="w-12 h-12 bg-black/10 rounded-xl absolute z-40 bottom-40 right-4 items-center justify-center"
        onPress={() => {
          navigation.navigate('Shopping Cart');
        }}>
        <ShoppingCartIcon fill={'black'} size={22} />
        <View
          className="bg-red-600 w-5 h-5 top-0 right-0 items-center justify-center absolute
        rounded-full">
          <Text>2</Text>
        </View>
      </Pressable> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* CAROUSEL IMAGE PRODUCT */}
        <FlatList
          horizontal
          data={images}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item}) => (
            <Image
              source={{uri: item}}
              resizeMode="cover"
              style={{width: width, aspectRatio: 1}}
            />
          )}
        />
        <View className="py-8 px-4 mb-24">
          {/* TITLE PRODUCT */}
          <Text
            className="text-3xl font-bold 
          ">
            {name}
          </Text>
          {/* PRICE PRODUCT */}
          <Text className="font-bold text-xl text-black/70 tracking-widest mt-2">
            ${price}
          </Text>
          {/* SIZE PRODUCT */}

          <FlatList
            horizontal
            scrollEnabled={false}
            data={sizes}
            renderItem={({item}) => {
              return (
                <Pressable
                  className="w-14 h-10 border rounded-lg items-center justify-center"
                  style={
                    sizeChecked === item
                      ? {backgroundColor: 'black', borderWidth: 0}
                      : {backgroundColor: 'white'}
                  }
                  onPress={() => {
                    setSizeChecked(item);
                  }}>
                  <Text
                    className="text-base"
                    style={
                      sizeChecked === item ? {color: 'white'} : {color: 'black'}
                    }>
                    {item}
                  </Text>
                </Pressable>
              );
            }}
            contentContainerStyle={{
              paddingVertical: 30,
              flexDirection: 'row',
              columnGap: 20,
            }}
          />
          {/* DESCRIPTION */}
          <Text className="text-lg font-light leading-8 tracking-wide text-justify ">
            {description}
          </Text>
        </View>
      </ScrollView>

      {/* ADD TO CART BUTTON */}
      <Presumable
        className="bg-black/90 absolute left-0 right-0 bottom-0 mx-4 mb-10 rounded-full items-center justify-center "
        onPress={() => {
          if (sizeChecked) {
            dispatch(
              CartSlice.actions.ADD_ITEM({
                id,
                name,
                image,
                price,
                size: sizeChecked,
                sale,
                quantity: 1,
              }),
            );
            Alert.alert('Notice', 'Add successfully !');
          } else {
            Alert.alert('Notice', 'Have you picked size yet ?');
          }
        }}>
        <Text className="text-white text-lg font-bold py-4 ">Add to cart</Text>
      </Presumable>
      {/* NAVIGATION ICON */}
    </View>
  );
};

export default ProductDetailScreen;
