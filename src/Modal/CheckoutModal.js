/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  Modal,
  useWindowDimensions,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showModalSelector} from '../Redux/Selectors';
import {CartSlice} from '../Redux/CartSlice';

const CheckoutModal = () => {
  const isShowModal = useSelector(showModalSelector);
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  const widthAfter = width - 50;
  return (
    <View className="flex-1 items-center justify-center ">
      <Modal
        transparent={true}
        animationType="fade"
        visible={isShowModal}
        onRequestClose={() => {}}>
        <Pressable
          className=" flex-1 items-center justify-center bg-transparent"
          onPress={() => {
            dispatch(CartSlice.actions.SET_SHOW_MODAL(false));
          }}>
          <View
            className=" aspect-auto bg-white  shadow-white rounded-md items-center space-y-5 p-5"
            style={{width: widthAfter}}>
            <View className="w-14 h-14">
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/7518/7518748.png',
                }}
                resizeMode="center"
                className="w-full h-full"></Image>
            </View>
            <Text className="text-center text-base font-medium">
              Chúc mừng bạn đã đặt hàng thành công !
            </Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default CheckoutModal;
