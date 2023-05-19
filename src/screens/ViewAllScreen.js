/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ProductListItem from '../Components/ProductListItem';
import {useDispatch, useSelector} from 'react-redux';
import {ProductSlice} from '../Redux/ProductSlice';
import {listViewAllProductSelector} from '../Redux/Selectors';

const ViewAllScreen = ({navigation}) => {
  const viewAllProductList = useSelector(listViewAllProductSelector);
  const dispatch = useDispatch();
  return (
    <FlatList
      //   showsVerticalScrollIndicator={false}
      data={viewAllProductList}
      renderItem={({item}) => (
        <TouchableOpacity
          className=" p-3"
          onPress={() => {
            dispatch(ProductSlice.actions.SET_SELECTED_PRODUCT(item.id));
            navigation.navigate('Product Details');
          }}>
          <ProductListItem {...item} />
          {item.sale.status === true ? (
            <View
              className="w-16 h-20  bg-red-600 items-center justify-center
              rounded-tl-lg rounded-br-lg absolute left-3 top-3">
              <Text className="text-white font-bold leading-5 text-xl">
                {item.sale.salePercent}
              </Text>
              <Text className="text-white font-bold leading-5 text-xl">%</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index}
      contentContainerStyle={{
        paddingHorizontal: 5,
        paddingVertical: 20,
      }}
    />
  );
};

export default ViewAllScreen;
