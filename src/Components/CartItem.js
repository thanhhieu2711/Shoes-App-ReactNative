import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {TrashIcon, PlusIcon, MinusIcon} from 'react-native-heroicons/solid';
import {useDispatch} from 'react-redux';
import {CartSlice} from '../Redux/CartSlice';

const CartItem = ({id, name, price, image, size, quantity, sale, index}) => {
  const dispatch = useDispatch();
  return (
    <View className=" h-40 w-full mt-5">
      <View className="flex-row h-full w-full ">
        <View className=" w-2/5 h-full ">
          <Image
            source={{
              uri: image,
            }}
            resizeMode={'stretch'}
            className="w-full h-full rounded-2xl"
          />
        </View>
        {/* PRODUCT INFO */}
        <View className="flex-1 justify-between pl-4 py-3">
          <View className="space-y-1">
            <Text className="font-medium text-xl" numberOfLines={1}>
              {name}
            </Text>
            <Text className="text-sm font-medium text-black/50 tracking-wide ">
              ${sale.status === true ? (price * sale.salePercent) / 100 : price}
            </Text>
            <Text className="text-sm font-medium text-black/50 tracking-wide ">
              {size}
            </Text>
          </View>
          <View className="flex-row justify-between">
            {/* QUANTITY SELECT */}
            <View className="flex-row space-x-4 items-center justify-center">
              <Pressable
                className="border rounded-2xl border-black/40 w-9 h-9 items-center justify-center"
                onPress={() => {
                  dispatch(CartSlice.actions.INCREASE({id, size}));
                }}>
                <PlusIcon color={'gray'} size={15} />
              </Pressable>
              <Text className="text-lg font-light text-black/40">
                {quantity}
              </Text>
              <Pressable
                className="border rounded-2xl border-black/40 w-9 h-9 items-center justify-center"
                onPress={() => {
                  dispatch(CartSlice.actions.DECREASE({id, size}));
                }}>
                <MinusIcon color={'gray'} size={15} />
              </Pressable>
            </View>
            {/* DELETE */}
            <Pressable
              className="border rounded-2xl border-black/40 w-9 h-9 items-center justify-center"
              onPress={() => {
                dispatch(CartSlice.actions.DELETE(index));
              }}>
              <TrashIcon color={'gray'} size={18} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
