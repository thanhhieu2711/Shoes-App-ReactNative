/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, FlatList, Image, Pressable} from 'react-native';

import React, {useMemo, useState} from 'react';
import CartItem from '../Components/CartItem';
import {MapPinIcon, ArrowLeftIcon} from 'react-native-heroicons/mini';
import {useDispatch, useSelector} from 'react-redux';
import {listCartSelector} from '../Redux/Selectors';
import CheckoutModal from '../Modal/CheckoutModal';
import {showModalSelector} from '../Redux/Selectors';
import {CartSlice} from '../Redux/CartSlice';
const ShopingCartScreen = ({navigation}) => {
  const listCart = useSelector(listCartSelector);
  const [total, setTotal] = useState(0);
  const isShowModal = useSelector(showModalSelector);
  const dispatch = useDispatch();
  const shippingCost = 12;
  useMemo(() => {
    const TotalCash = () => {
      const subTotal = listCart.reduce((arr, cur) => {
        if (cur.sale.status === true) {
          return arr + (cur.quantity * cur.price * cur.sale.salePercent) / 100;
        } else {
          return arr + cur.quantity * cur.price;
        }
      }, 0);
      setTotal(subTotal);
    };
    TotalCash();
  }, [listCart]);

  return isShowModal === false ? (
    <View className="flex-1">
      {/* HEADER*/}
      <View className="pt-14 pb-2 px-5 flex-row items-center justify-between">
        <Text className="font-semibold text-3xl">My cart</Text>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowLeftIcon color={'black'} size={32} />
        </Pressable>
      </View>

      {/* LIST CART PRODUCT*/}
      {listCart?.length ? (
        <FlatList
          data={listCart}
          renderItem={({item, index}) => {
            const props = {...item, index};
            return <CartItem {...props} />;
          }}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View className="flex-1 items-center justify-center ">
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
            }}
            className="w-52 h-52"
            resizeMode="contain"
          />
        </View>
      )}

      {/* ORDER INFO SIDE */}
      {listCart?.length ? (
        <View className=" w-full h-54 rounded-t-3xl px-5 py-7">
          {/* <Text className="text-2xl font-semibold text-black">Order info</Text> */}
          <View className="flex-row items-center gap-x-4">
            <View className="bg-black/10 h-12 w-12 items-center justify-center rounded-lg">
              <MapPinIcon size={20} />
            </View>
            <View>
              <Text className="text-base font-medium text-black">
                19 San Phran Xich Long St
              </Text>
              <Text className="text-base font-medium text-black">
                Ho Chi Minh
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-base text-black/70">Subtotal</Text>
            <Text className="text-base">${listCart.length ? total : 0}</Text>
          </View>
          <View className="flex-row justify-between items-center mt-1">
            <Text className="text-base text-black/70">Shiping cost</Text>
            <Text className="text-base">$12</Text>
          </View>
          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-xl font-semibold text-black">Total</Text>
            <Text className="text-2xl font-semibold tracking-wide">
              ${listCart?.length ? total + shippingCost : 0}
            </Text>
          </View>
          <Pressable
            className=" bg-black my-5 rounded-full items-center justify-center"
            onPress={() => {
              setTimeout(() => {
                dispatch(CartSlice.actions.SET_SHOW_MODAL(true));
                dispatch(CartSlice.actions.DELETE_ALL([]));
              }, 500);
            }}>
            <Text className="text-white text-base font-semibold uppercase py-5 ">
              checkout
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  ) : (
    <CheckoutModal />
  );
};

export default ShopingCartScreen;
